const app = getApp()

Page({
  data: {
    pass:'未通过',
    logs: [],
    background: 'http://pwh.img.jogiter.cn/backgroundindex.png',
    userInfo: '',
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
  },

  onLoad: function() {
    if(this.data.logs){
      console.log(`我的结果是：${this.data.pass}`);
    }
    var pass = wx.getStorageSync('pass')
    if(pass){
      this.setData({
        pass:'已通过'
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




  },

  getUserInfo: function(e) {
    console.log(e)
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

    if(this.data.userInfo){

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

  onShow(){

    var pass = wx.getStorageSync('pass')
    if(pass){
      this.setData({
        pass:'已通过'
      })
    }



  }






})
