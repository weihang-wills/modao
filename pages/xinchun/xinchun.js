let table = new wx.BaaS.TableObject('team')
Page({
  data: {

    ad: false,

    hasteam: false,
    myteamid: '',
    canaddfriend: false,
    hasUserInfo: false,
    userInfo: '',
    createteamname: '',

    teamid: '',
    teamname: '',
    teammember: [],
    teammemberdetail: [],
    newzans: 0,


    // 获奖名单
    prizelist: '',

    // 规则文案

    rules: '',



  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    var that = this
    return {
      title: '加入我的战队，一起为云梦加油吧',
      path: `/pages/xinchun/xinchun?teamid=${that.data.teamid}`,


    }
  },
  onLoad(option) {
    var that = this
    // 优先判断是否带参数teamid
    if (option.teamid) {
      that.setData({
        teamid: option.teamid,
      })
      table.get(option.teamid).then(res => {
        console.log('onload拿到team', res);
        var i = res.data
        if (i) {

          that.setData({
            teamid: i.id,
            teamname: i.teamname,
            teammember: i.teammemberdetail,
            newzans: i.newzans,
          })
        }
      })
    }
    // 去后台查询teamid
    // 不带参数ID则自己拉数据库看是否已经加入队伍
    that.renew();

    // 获取rules
    let rules = new wx.BaaS.TableObject('rules')
    rules.limit(1).find().then(res => {
      console.log('rules', res);
      that.setData({
        rules: res.data.objects[0].rules,
        prizelist: res.data.objects[0].prizelist

      })
    })





  },

  renew() {

    var that = this

    qq.BaaS.auth.loginWithQQ().then(user => {
      console.log('renew里面拿到user信息', user);
      var openid = user._provider.qq_miniapp.openid
      console.log(openid);
      // let table=new wx.BaaS.TableObject('team')
      let query = new wx.BaaS.Query()
      query.in('teammember', [openid])
      table.setQuery(query).find().then(res => {
        console.log('查询我的队伍情况', res);
        if (res.data.objects[0]) {
          var i = res.data.objects[0]
          that.setData({
            myteamid: i.id,
            hasteam: true,
          })
          console.log('我已经有队伍了');

          if (!that.data.teamid) {

            that.setData({
              teamid: i.id,
              teamname: i.teamname,
              teammember: i.teammemberdetail,
              newzans: i.newzans,
            })
            console.log('已经设置了数据', that.data.teammember);
          }

        } else {
          console.log('没有加入任何队伍');
        }
      })
    }, err => {
      console.log(err);
    })

  },

  join(e) {
    // 获取用户信息授权

    var that = this
    console.log(e);
    if (e.detail.userInfo) {
      qq.BaaS.auth.loginWithQQ(e, {
        syncUserProfile: 'overwrite'
      }).then(user => {
        console.log('加入的时候获取user', user);
        let userInfo = {
          openid: user._provider.qq_miniapp.openid,
          avatar: user._provider.qq_miniapp.avatar,
          nickname: user._provider.qq_miniapp.nickname,


        }
        that.setData({
          hasUserInfo: true,
          userInfo: userInfo,
        })


        wx.getSetting({
          success(res) {
            if (res.authSetting['setting.addFriend']) {
              qq.authorize({
                scope: 'setting.addFriend',
                success() {
                  // 用户已经同意小程序使用加好友功能
                  that.setData({
                    canaddfriend: true,
                  })
                  that.joindata();
                }
              })





            } else {

              wx.showModal({
                title: '请先开启授权',
                content: '请点击[右上角]-[关于]-[右上角]-[设置]，开启授权后即可'
              })





            }
          }
        })





      })
    }

    // 获取加好友权限






  },

  setup(e) {
    var that = this
    // 建立队伍，需要获得用户资料授权
    console.log('建立队伍e', e);
    if (e.detail.userInfo && that.data.createteamname) {

      // 判断名字
      let query = new wx.BaaS.Query()
      query.compare('teamname', '=', that.data.createteamname)
      table.setQuery(query).count().then(num => {
        console.log('num', num);
        if (num != 0) {
          wx.showToast({
            title: '该队名已经存在，请重新设置'
          })
        } else {
          //
          qq.BaaS.auth.loginWithQQ(e, {
            syncUserProfile: 'overwrite'
          }).then(user => {
            console.log('获取user', user);

            if (user._provider.qq_miniapp.avatar && user._provider.qq_miniapp.nickname) {
              console.log('user档案齐全');
              let userInfo = {
                openid: user._provider.qq_miniapp.openid,
                avatar: user._provider.qq_miniapp.avatar,
                nickname: user._provider.qq_miniapp.nickname,
              }

              that.setData({
                hasUserInfo: true,
                userInfo: userInfo,
              })

              wx.getSetting({

                success(res) {
                  console.log('getSetting', res);
                  if (res.authSetting['setting.addFriend']) {

                    qq.authorize({
                      scope: 'setting.addFriend',
                      success() {
                        // 用户已经同意小程序使用加好友功能
                        that.setData({
                          canaddfriend: true,
                        })

                        let data = {
                          teamname: that.data.createteamname,
                          teammember: [that.data.userInfo.openid, ],
                          teammemberdetail: [that.data.userInfo, ],
                          newzans: 0,
                        }
                        table.create().set(data).save().then(res => {
                          console.log('建立队伍成功');
                          wx.showToast({
                            title: '创建队伍成功'
                          })
                          that.renew();

                        })

                      }

                    })



                  } else {

                    wx.showModal({
                      title: '请先开启授权',
                      content: '请点击[右上角]-[关于]-[右上角]-[设置]，开启授权后即可'
                    })







                  }
                }
              })


            } else {
              wx.showToast({
                title: '创建队伍失败，请重试'
              })
            }





          })
          //


        }
      })


    }

  },
  getinput(e) {
    console.log('input', e);
    var createteamname = e.detail.value
    this.setData({
      createteamname: createteamname,
    })
  },

  front() {
    this.setData({
      ad: true,

    })
  },

  ad() {
    this.setData({
      ad: false,

    })
    this.jiayou()

  },



  jiayou() {
    var that = this
    // 每天一次，本地控制
    var date = new Date()

    const today = date.getFullYear() + date.getMonth() + date.getDate()
    var day = wx.getStorageSync('xinchunjiayou')

    if (day == today) {

      wx.showModal({
        title: '今天已经打气过了哦',
        content: '请明天再来吧',
        showCancel: false,
      })
    } else {

      // 判断用户加入的队伍是否为页面显示的队伍
      if (that.data.hasteam && (that.data.myteamid == that.data.teamid)) {

        console.log('teamid一致');

        table.getWithoutData(that.data.myteamid).incrementBy('newzans', 1).update().then(res => {
          console.log('打气成功', res);
          wx.showToast({
            title: '打气成功',
          })
          that.setData({
            newzans: res.data.newzans,
          })

          wx.setStorageSync('xinchunjiayou', today)
        })

      } else {

        wx.showModal({
          title: '这不是你的队伍',
          content: '这不是你的队伍，无法打气哦',
          showCancel: false,
        })

      }

    }


  },

  joindata() {

    var that = this

    // 判断是否已经加入队伍了
    if (that.data.hasUserInfo && that.data.canaddfriend && that.data.teamid) {
      console.log('开始加入');
      var openid = that.data.userInfo.openid
      var teamid = that.data.teamid
      // let table = new wx.BaaS.TableObject('team')
      let query = new wx.BaaS.Query()

      query.in('teammember', [openid])

      table.setQuery(query).find().then(res => {
        if (res.data.objects.length == 0) {
          console.log('可以加入');
          // 没有加入任何队伍，可以加入
          let check = table.get(teamid).then(res => {
            if (res.data.teammember.length >= 10) {

              wx.showModal({
                title: '队伍已满人',
                content: '队伍已满10人，快去加入别的队伍吧',
                showCancel: false,
              })

            } else {

              let product = table.getWithoutData(teamid)
              product.append('teammember', openid)
              product.append('teammemberdetail', that.data.userInfo)
              product.update().then(res => {
                console.log('加入队伍', res);
                wx.showModal({
                  title: '加入成功',
                  content: '记得每天都来为队伍打气哦',
                  showCancel: false,
                })
                var i = res.data
                that.setData({
                  teamid: i.id,
                  teamname: i.teamname,
                  teammember: i.teammemberdetail,
                  newzans: i.newzans,
                  myteamid: i.id,
                  hasteam: true,

                })
              })

            }
          })


        } else {

          // 已加入队伍，不可加入
          wx.showModal({
            title: '您已有队伍',
            content: '您已有队伍，不可再加入哦',
            showCancel: false,
          })

          that.setData({
            myteamid: res.data.objects[0].id,
            hasteam: true,
          })

        }
      })



    } else {

      wx.showModal({
        title: '未授权',
        content: '请进行授权或者重新试下',
        showCancel: false,
      })

    }

  },

  addfriend(e) {
    console.log('添加好友回调', e);
  },
})
