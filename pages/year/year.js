const app = getApp()
Page({
  data: {
    userInfo: '',
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
    ad: false,
    check: true,
    name: '蓝忘机',
    result: [
      '被魏无羡亲亲',
      '被蓝忘机抱抱',
      '被江澄瞪了一下',
      '被金凌捏了一下',
      '被江厌离暖到了',

    ],

    database: [


    ],
    background: '',
    avartarlocal: ''



  },

  error(e) {
    console.log('canvas错误', e);
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '魔道测试：2020年我会发生什么事？',
      path: '/pages/newindex/newindex'

    }
  },
  onLoad() {



    var that = this
    let table = new wx.BaaS.TableObject('yeardatabase')





    table.find().then(res => {
      console.log(res);
      var arr = res.data.objects[0].database
      console.log('database', arr);
      that.setData({
        database: arr,
      })
    })

    if (!(app.globalData.userInfo == '' || null)) {

      console.log(1);
      console.log(app.globalData.userInfo);
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })


    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      console.log(2);
      app.userInfoReadyCallback = res => {

        console.log('回调执行');
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        app.globalData.userInfo = res.userInfo
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log(3);
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }







  },

  // renew() {
  //   this.setData({
  //     name: '',
  //     check: true,
  //     result: '',
  //   })
  // },
  saveimg(e) {
    var ctx = wx.createCanvasContext('icanvas', this)
    var that = this
console.log('e',e);
    var index = e.currentTarget.dataset.index

    wx.getImageInfo({
      src: '../../utils/yearback.png',
      success(res) {
        console.log('getimageinfo', res.path);
        that.setData({
          background: '/' + res.path
        })
        // 要在前面加个斜杠，重点！！不然无法识别
        var x = 83 * 2
        var y = 175 * 2
        var r = 22.5 * 2
        var mar = 25 * 2
        ctx.drawImage(that.data.background, 0, 0, 375 * 2, 542 * 2)
        ctx.save()
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.clip()
        ctx.drawImage(that.data.avartarlocal, x - r, y - r, 45 * 2, 45 * 2)

        ctx.restore()
        ctx.setFontSize(32)
        ctx.fillText(that.data.name, 120 * 2, 185 * 2)
        ctx.save()

        ctx.setFontSize(36)
        ctx.drawImage('/utils/tik.png', x - r, y + r + mar, 47, 48)
        ctx.fillText(that.data.result[0], x + r, y + r + 1.8 * mar)

        ctx.drawImage('/utils/tik.png', x - r, y + r + 2.5 * mar, 47, 48)
        ctx.fillText(that.data.result[1], x + r, y + r + 3.3 * mar)

        ctx.drawImage('/utils/tik.png', x - r, y + r + 4 * mar, 47, 48)
        ctx.fillText(that.data.result[2], x + r, y + r + 4.8 * mar)

        ctx.drawImage('/utils/tik.png', x - r, y + r + 5.5 * mar, 47, 48)
        ctx.fillText(that.data.result[3], x + r, y + r + 6.3 * mar)

        ctx.drawImage('/utils/tik.png', x - r, y + r + 7 * mar, 47, 48)
        ctx.fillText(that.data.result[4], x + r, y + r + 7.8 * mar)

        ctx.draw(true, (e) => {
          console.log('draw成功');
          wx.canvasToTempFilePath({
            destWidth: 750,
            destHeight: 1084,
            canvasId: 'icanvas',
            success(res) {
              console.log('保存地址', res.tempFilePath);

              if (index == 0) {
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success(res) {
                    console.log('保存本地图片成功');
                    wx.showToast({
                      title: '已保存到手机相册'
                    })
                  }
                })

              } else {

                qq.openQzonePublish({
                  text: '在魔道世界里，2020年我会发生哪几件事？嘿嘿',
                  media: [{
                      type: 'photo',
                      path: res.tempFilePath
                    },

                  ]
                })

              }


            }
          })
        })




      }
    })


  },


  ad() {
    this.setData({
      ad: false,
      check: false,
    })

  },

  checkout() {

    var that = this
    // 登录
    qq.BaaS.auth.loginWithQQ().then(
      user => {
        console.log('登录成功',user);
        let table = new wx.BaaS.TableObject('yearresult')
        let query = new wx.BaaS.Query()
        query.compare('name', '=', that.data.name)
        if (that.data.name) {
          that.setData({
            ad: true
          })



          table.setQuery(query).find().then(
            res => {
              console.log('新增',res);
              console.log(res);
              if (res.data.objects.length == 0) {
                that.compute();
                let newdata = {
                  name: that.data.name,
                  result: that.data.result,
                }
                table.create().set(newdata).save().then(res => {
                  console.log('新增成功', res);
                })
              } else {

                that.setData({
                  result: res.data.objects[0].result,
                })


                console.log(that.data.result);
              }
            }
          )

        }





      }

    )


    wx.downloadFile({
      url: this.data.userInfo.avatarUrl,
      success(res) {
        console.log('头像下载成功' + res.tempFilePath);
        that.setData({
          avartarlocal: res.tempFilePath
        })
      }
    })






    // 非登录



  },

  compute() {

    var len = 5;
    var min = 0;
    var max = this.data.database.length - 1;
    var resultarr = this.randomArr(len, min, max)
    var result = resultarr.map(item => {
      return this.data.database[item]
    })
    // result = result.join('，');
    console.log(result);
    this.setData({
      result: result
    })


  },

  confirm(e) {

    var name = e.detail.value
    this.setData({
      name: name
    })

  },


  // 计算函数

  randomArr(len, min, max) {
    if ((max - min) < len) { //可生成数的范围小于数组长度
      return null;
    }
    var hash = [];

    while (hash.length < len) {
      var num = this.randomNum(min, max);

      if (hash.indexOf(num) == -1) {
        hash.push(num);
      }
    }
    console.log('hash', hash);
    return hash;
  },

  randomNum(min, max) {
    var range = max - min;
    var rand = Math.random();
    var num = min + Math.round(rand * range); //四舍五入，可以获得max到min之间的整数
    return num;
  },


})
