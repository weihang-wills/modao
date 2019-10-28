//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    // var logs = qq.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // qq.setStorageSync('logs', logs)

    require('./utils/sdk-qq.2.8.1.js')
    qq.BaaS.init('834fd1b096ec1c4d1730', {
      autoLogin: false,
    })




    // 登录
    // qq.BaaS.auth.loginWithQQ().then(user=>{console.log(user);},
    //   err=>{console.log(err);}
    // )
    // 获取用户信息
    qq.getSetting({
      success: res => {
        // if (!res.authSetting['scope.userLocation']) {
        //   wx.authorize({
        //     scope: 'scope.userLocation',
        //     success() {
        //       // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        //
        //     }
        //   })
        // }
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          qq.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    pass1: true,
    pass2: true,
    userInfo: {},


  }
})
