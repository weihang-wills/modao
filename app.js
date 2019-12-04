//app.js
const updateManager = qq.getUpdateManager()
App({

  onShow(){
    // 更新part
        updateManager.onCheckForUpdate(function(res) {
          // 请求完新版本信息的回调
          console.log('有更新信息',res.hasUpdate)
        })

        updateManager.onUpdateReady(function() {
          wx.showModal({
            title: '本应用有新版本',
            content: '新版本已准备好，是否更新应用？',
            success(res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            }
          })
        })



  },
  onLaunch: function(res) {



    console.log(res);
    if (res.entryDataHash) {
      this.globalData.entryDataHash = res.entryDataHash

    }
    // 展示本地存储能力
    // var logs = qq.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // qq.setStorageSync('logs', logs)

    require('./utils/sdk-qq.2.8.1.js')
    qq.BaaS.init('834fd1b096ec1c4d1730', {
      autoLogin: false,
    })

    console.log(this.globalData.userInfo == '' || null);
    console.log('hh' + !this.globalData.userInfo);



    var that = this
    // 登录
    // qq.BaaS.auth.loginWithQQ().then(user=>{console.log(user);},
    //   err=>{console.log(err);}
    // )
    // 获取用户信息
    wx.getSetting({
      success(res) {
        console.log('成功res');
        console.log(res.authSetting['scope.userInfo']);

        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              console.log('app');
              console.log(res);
              that.globalData.userInfo = res.userInfo


              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                console.log('可以执行回调');
                that.userInfoReadyCallback(res)
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
    userInfo: '',
    entryDataHash: '',


  }
})
