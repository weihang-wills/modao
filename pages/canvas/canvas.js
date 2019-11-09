const app = getApp();
Page({
  data: {
    userInfo: '',
    hasUserInfo: false,
    canvasimgbg: '',
    canvasfront: '',
    qqavatar: '',
    canvasback:true,
    ad:false,
    num:'',

    fronts: [
      '../../utils/zipaofront.png',
      '../../utils/baipaofront.png',
      '../../utils/jinxingxuelangfront.png',

    ]

  },

  ad(e){

    console.log(e);
    var num = Number(e.currentTarget.dataset.num)-1;

    this.setData({
      ad:true,
      num:num,
    })
  },


  onLoad() {



    if (app.globalData.userInfo) {

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
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log(3);
      wx.getUserInfo({
        success: res => {
          console.log(3.1);
          console.log(res);
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }


  },

  setavatar() {
    // wx.previewImage({
    //   urls: [this.data.qqavatar],
    // })
    qq.setCustomDress({
      action: "uploadAvatar",
      path: this.data.qqavatar,
      success(res) {
        console.log("success" + res);
        wx.showToast({
          title:'更换成功！'
        })
      },
      fail(res) {
        console.log(res);
      }
    })

  },


  draw() {
    this.setData({
      ad:false,
    })

    var num=this.data.num

    var context = wx.createCanvasContext('firstCanvas')
    var that = this

    if (!(this.data.userInfo == '' || null)) {

      var imageUrl = this.data.userInfo.avatarUrl.split('/');
      imageUrl[imageUrl.length - 1] = 0;
      imageUrl = imageUrl.join('/');
      console.log(imageUrl);

      wx.downloadFile({
        url: imageUrl,
        success: function(res) {
          console.log('canvasimgbg' + res.tempFilePath);
          that.setData({
            canvasimgbg: res.tempFilePath
          })

          wx.getImageInfo({

            src: that.data.fronts[num],
            success(res) {
              console.log('canvasfront' + res.path);
              that.setData({
                canvasfront: '/' + res.path,
                // 要在前面加个斜杠
                canvasback:false,
              })



              context.drawImage(that.data.canvasimgbg, 0, 0, 320 / 2, 320 / 2)
              context.drawImage(that.data.canvasfront, 0, 165 / 2, 320 / 2, 155 / 2)
              context.draw()
              wx.canvasToTempFilePath({
                destWidth: 640,
                destHeight: 640,
                canvasId: 'firstCanvas',
                success(res) {
                  console.log(res.tempFilePath);
                  that.setData({

                    qqavatar: res.tempFilePath

                  })



                }
              })

            }

          })





        }
      })

      // wx.downloadFile({
      //   url: 'https://cloud-minapp-30809.cloud.ifanrusercontent.com/1iQ4dTLrq5t3uSpt.png',
      //   success: function(res) {
      //     that.setData({
      //       canvasfront: res.tempFilePath
      //     })
      //   }
      // })




    } else {

      wx.getUserInfo({
        success: res => {
          console.log(res);
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })

    }





  },



})
