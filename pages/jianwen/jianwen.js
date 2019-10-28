const app = getApp()
Page({
  data: {
    e:"",

    ad: false,

    jianwen: [

      // {
      //   content: '彩衣镇疑似有水祟作乱，侠客[九指微凉]和[夏陌]前往碧灵湖夜猎治水患，成功镇压了水秽，获得了当地百姓的好评。\n\r然而没过几日水祟再次作乱，蓝氏查验原是水行渊，极难根除，忘羡夫妇得知从云深不知处赶来，吹笛抚琴，将水行渊平抚。',
      //   location: '姑苏·彩衣镇',
      //   avatars: ['https://media.ifanrusercontent.com/tavatar/3e/45/3e45bde9c330a0722f2638c308ffc2355818edff.jpg',
      //     'https://media.ifanrusercontent.com/tavatar/e5/c8/e5c8f9a98616a7e216e0c7821ab2965917e7d9bd.jpg'
      //   ],
      // },


    ],

    weathers: [{
        name: '姑苏',
        num: 320500,
        weather: '',
        temp: ''
      },
      {
        name: '云梦',
        num: 420923,
        weather: '',
        temp: ''
      },
      {
        name: '夷陵',
        num: 420506,
        weather: '',
        temp: ''
      },
      {
        name: '兰陵',
        num: 371300,
        weather: '',
        temp: ''
      },
      {
        name: '清河',
        num: 130500,
        weather: '',
        temp: ''
      },
      {
        name: '岐山',
        num: 610300,
        weather: '',
        temp: ''
      },


    ],

  },

  ad(e) {
    this.setData({
      ad:true,
      e:e,
    })





  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '魔道见闻录，阅尽魔道江湖事',
      path: '/pages/jianwen/jianwen?home=1',
      shareTemplateId:'EE558DDCEFB407FD811CC6C06181D6AF',
      shareTemplateData:{
        txt1:'邀你来魔道见闻录，阅尽魔道江湖事',
        txt2:'立即查看'
      }


    }
  },

  tapad() {
    this.setData({
      ad: false
    })

    this.getUserInfo(this.data.e)
    console.log('tapad');
    console.log(this.data.e);

  },

  getUserInfo: function(e) {
    console.log(e)
    qq.BaaS.auth.loginWithQQ(e, {
      syncUserProfile: 'overwrite'
    }).then(
      user => {
        console.log(user);

        let table = new wx.BaaS.TableObject('baoming')
        let query = new wx.BaaS.Query()

        query.compare('openid', '=', user._provider.qq_miniapp.openid)

        table.setQuery(query).find().then(
          res => {
            console.log(res);
            if (res.data.objects.length == 0) {
              let theuser = {
                openid: user._provider.qq_miniapp.openid,
                avatar: user._provider.qq_miniapp.avatar,
                nickname: user._provider.qq_miniapp.nickname,
                times: 1,

              }
              table.create().set(theuser).save().then(res => {
                console.log(res);
                wx.showModal({
                  title:'报名成功',
                  content:'多天连续报名更容易上见闻录哦',
                  showCancel:false,
                })
              })



            } else if (res.data.objects.length == 1) {

              var id=res.data.objects[0].id
              table.getWithoutData(id).incrementBy('times',1).update().then(res=>{
                console.log(res);
                wx.showModal({
                  title:'报名成功',
                  content:'多天连续报名更容易上见闻录哦',
                  showCancel:false,
                })
              })





            }

          },
          err => {
            console.log(err);
          }
        )








      },
      err => {
        console.log(err);
      }
    )
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  onLoad() {

    let table=new wx.BaaS.TableObject('jianwenlu')
    var that=this
    table.orderBy('-created_at').find().then(res=>{

      console.log(res);

      var arr=res.data.objects.map(item=>{
        return item.detail
      })

      that.setData({
        jianwen:arr,

      })



    })


    var weathers = this.data.weathers
    var that = this

    for (var u = 0; u < weathers.length; u++) {

      // 构造匿名函数闭包

      (function(u) {
        console.log(u);
        var num = weathers[u].num
        var wea = "weathers[" + u + "].weather"
        var tem = "weathers[" + u + "].temp"

        wx.request({

          url: 'https://restapi.amap.com/v3/weather/weatherInfo',
          data: {

            key: '1da69716fa4b7094ee6aeaedbe4837cc',
            city: num

          },
          success(res) {
            console.log(res);

            that.setData({
                [wea]: res.data.lives[0].weather,
                [tem]: res.data.lives[0].temperature
              },
              function() {
                console.log(that.data.weathers);
              }
            )

          }

        })

      })(u);




    }





  },

})
