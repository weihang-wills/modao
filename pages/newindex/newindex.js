const app = getApp()

Page({
  data: {
    pass: '未通过',
    pass1:'未通过',
    logs: [],
    background: 'http://pwh.img.jogiter.cn/backgroundindex.png',
    userInfo: '',
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
  },

  onLoad: function() {


    var pass = wx.getStorageSync('pass')
    if (pass) {
      this.setData({
        pass: '已通过'
      })
    }

    var pass1 = wx.getStorageSync('pass1')
    if (pass1) {
      this.setData({
        pass1: '已通过'
      })
    }


    if (app.globalData.userInfo) {

      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log(app.globalData.userInfo);

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
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

    // qq.getSetting({
    //   success: res => {
    //     if (!res.authSetting['scope.userLocation']) {
    //       wx.authorize({
    //         scope: 'scope.userLocation',
    //         success() {
    //           wx.getLocation({
    //             success(res) {
    //               console.log(1);
    //               wx.request({
    //                 url: 'https://restapi.amap.com/v3/geocode/regeo',
    //                 data: {
    //                   location: `${res.longitude},${res.latitude}`,
    //                   key: '1da69716fa4b7094ee6aeaedbe4837cc',
    //
    //                 },
    //
    //
    //                 success(res) {
    //                   console.log(res);
    //                   wx.request({
    //
    //                     url: 'https://restapi.amap.com/v3/weather/weatherInfo',
    //                     data: {
    //
    //                       key: '1da69716fa4b7094ee6aeaedbe4837cc',
    //                       city:res.data.regeocode.addressComponent.adcode
    //
    //                     },
    //                     success(res){
    //                       console.log(res);
    //
    //                     }
    //
    //                   })
    //                 }
    //               })
    //             }
    //           })
    //
    //
    //         }
    //       })
    //     }else{
    //       wx.getLocation({
    //         success(res) {
    //           console.log(2);
    //           console.log(`${res.longitude},${res.latitude}`);
    //           wx.request({
    //             url: 'https://restapi.amap.com/v3/geocode/regeo',
    //             data: {
    //               location: `${res.longitude},${res.latitude}`,
    //               key: '1da69716fa4b7094ee6aeaedbe4837cc',
    //
    //             },
    //
    //
    //             success(res) {
    //               console.log(res);
    //               wx.request({
    //
    //                 url: 'https://restapi.amap.com/v3/weather/weatherInfo',
    //                 data: {
    //
    //                   key: '1da69716fa4b7094ee6aeaedbe4837cc',
    //                   city:[320500,610300]
    //
    //                 },
    //                 success(res){
    //                   console.log(res);
    //
    //                 }
    //
    //               })
    //             }
    //           })
    //         }
    //       })
    //
    //     }
    //   }
    // })







  },

  getUserInfo: function(e) {
    console.log(e)
    qq.BaaS.auth.loginWithQQ(e,{syncUserProfile:'overwrite'}).then(
      user=>{console.log(user);},err=>{}
    )
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  notopen: function(e) {

    console.log(e);
    wx.showModal({
      title: '场景暂未开放',
      content: '敬请期待哦',
      showCancel: false,
      confirmText: '好的',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '魔道祖师爆笑测试等你来玩',
      path: '/pages/newindex/newindex'

    }
  },

  toquiz() {

    if (this.data.userInfo) {

      console.log(this.data.userInfo);








      console.log('进入quiz');



      var quiz = wx.getStorageSync('quiz')
      if (quiz) {
        wx.navigateTo({
          url: '../../pages/quiz/quiz?quiz=' + quiz,

        })
      } else {

        wx.navigateTo({
          url: '../../pages/quiz/quiz',

        })

      }

    }






  },


  toquiz1() {

    if (this.data.userInfo) {

      console.log(this.data.userInfo);








      console.log('进入quiz1');



      var quiz1 = wx.getStorageSync('quiz1')
      if (quiz1) {
        wx.navigateTo({
          url: '../../pages/quiz1/quiz?quiz=' + quiz1,

        })
      } else {

        wx.navigateTo({
          url: '../../pages/quiz1/quiz',

        })

      }

    }






  },

  onShow() {

    var pass = wx.getStorageSync('pass')
    if (pass) {
      this.setData({
        pass: '已通过'
      })
    }

    var pass1 = wx.getStorageSync('pass1')
    if (pass1) {
      this.setData({
        pass1: '已通过'
      })
    }



  },








})
