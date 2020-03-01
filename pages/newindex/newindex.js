const app = getApp()
var videoAd = null;

Page({
  data: {
    ad: false,
    video: false,
    pass: '未通过',
    pass1: '未通过',
    logs: [],
    background: 'http://pangweihang.cn/modao/modao/backgroundindex.png',
    userInfo: '',
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
  },

  video() {
    if (this.data.video) {

      videoAd.load().then(() => {
        console.log('激励视频加载成功');

        videoAd.show().then(() => {
          console.log('激励视频 广告显示成功')
        }).catch(err => {
          console.log('激励视频 广告显示失败')
        })
      }).catch(err => {
        console.log('激励视频加载失败');
      })

    } else {

      this.setData({
        ad: true,
        url: '/pages/audio/audio'
      })


    }
  },

  ad() {
    this.setData({
      ad: false,


    })
    wx.navigateTo({
      url: this.data.url
    })

  },

  topyq(e) {
    console.log('朋友圈点击e', e);

    this.setData({
      ad: true,
      url: e.currentTarget.dataset.url || e.target.dataset.url
    })



  },

  onLoad: function() {

    console.log('canIuser', this.data.canIUse);

    // video part
    // videoAd = qq.createRewardedVideoAd({
    //   adUnitId: '89090865fe14a8631a25252f23b58517',
    // })
    //
    // videoAd.onError(function(res) {
    //   console.log('videoAd onError', res)
    //   that.setData({
    //     video: false,
    //   })
    //
    // })
    // videoAd.onLoad(function(res) {
    //   console.log('videoAd onLoad', res)
    // })
    // videoAd.onClose(function(res) {
    //   console.log('videoAd onClose', res)
    //   if (res && res.isEnded) {
    //     wx.navigateTo({
    //       url:'/pages/audio/audio'
    //     })
    //   } else {
    //     wx.showModal({
    //       title: '未看完视频(╥﹏╥)',
    //       content: '看完视频才能进入天官预热阵地，看最新天官资讯',
    //       showCancel:false,
    //     })
    //   }
    //
    // })


    var change = {
      pass: wx.getStorageSync('pass') ? '已通过' : '未通过',
      pass1: wx.getStorageSync('pass1') ? '已通过' : '未通过',
      pass2: wx.getStorageSync('pass2') ? '已通过' : '未通过',

    }
    this.setData(change)







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

  getUserInfo: function(e) {
    console.log(e)
    // qq.BaaS.auth.loginWithQQ(e,{syncUserProfile:'overwrite'}).then(
    //   user=>{console.log(user);},err=>{}
    // )
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

  toavatar() {

    if (this.data.userInfo) {
      console.log(this.data.userInfo);
      console.log('进入头像页面');
      wx.navigateTo({
        url: '../../pages/canvas/canvas'
      })

    }

  },

  toyear() {

    if (this.data.userInfo) {
      console.log(this.data.userInfo);
      console.log('进入2020年页面');
      wx.navigateTo({
        url: '../../pages/year/year'
      })

    }

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

  toquiz(e) {

    if (this.data.userInfo) {

      console.log(this.data.userInfo);







      console.log('toquize', e);
      console.log('进入quiz');



      var quiz = wx.getStorageSync(e.currentTarget.dataset.url)
      if (quiz) {
        wx.navigateTo({
          url: `../../pages/${e.currentTarget.dataset.url}/quiz?quiz=${quiz}`,

        })
      } else {

        wx.navigateTo({
          url:`../../pages/${e.currentTarget.dataset.url}/quiz`,

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
  toquiz2() {

    if (this.data.userInfo) {

      console.log(this.data.userInfo);








      console.log('进入quiz2');



      var quiz2 = wx.getStorageSync('quiz2')
      if (quiz2) {
        wx.navigateTo({
          url: '../../pages/quiz2/quiz?quiz=' + quiz2,

        })
      } else {

        wx.navigateTo({
          url: '../../pages/quiz2/quiz',

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
