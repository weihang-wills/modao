const app = getApp()
const https = require('../../utils/api.js')

Page({


  data: {
    home: false,
    ad: false,
    background: 'http://pangweihang.cn/modao/modao/quiz2back.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
    current: 0,
    quiz: [],
    blank: [],



  },


  choose(e) {
    let i = e.target.dataset.index

    var that = this


    var right = e.target.dataset.right
    console.log('么进入判断');

    if (!that.data.ad) {
      console.log('ad不对');

      if (right) {
        console.log('下一题');
        console.log(that.data.current);
        var dat = that.data.current + 1
        console.log(dat);
        that.setData({
          current: dat
        })
      } else {

        // 选错了
        wx.setStorage({
          key: 'quiz2',
          data: i,
          success() {
            console.log('第%s题错了', i);
          }
        })

        this.setData({
          ad: true,
        })



        wx.showToast({
          title: '选错了',
          icon: 'none'
        })
      }

    } else {
      console.log('ad对');

      wx.showToast({
        title: '点击广告获得答题机会',
        icon: 'none'
      })

    }



  },

  confirm(e) {
    var answer = e.detail.value
    var i = e.target.dataset.index
    var trueanswer = this.data.blank[i].answer
    var right = "blank[" + i + "].right"

    if (answer == trueanswer) {
      this.setData({

        [right]: true,

      })
    }
  },

  next(e) {

    if (!this.data.userInfo) {
      return
    }

    var i = e.currentTarget.dataset.index
    console.log(e);
    var right = this.data.blank[i].right
    console.log('么进入判断');
    var that = this

    if (!that.data.ad) {
      console.log('ad不对');
      console.log(that.data.current);

      if (right) {
        console.log('下一题');
        console.log(that.data.current);
        that.setData({
          current: that.data.current + 1

        })


        if (that.data.current == that.data.quiz.length + that.data.blank.length) {
          wx.setStorage({
            key: 'pass2',
            data: true,
            success(res) {
              console.log('pass2成功储存');
            }
          })
        }



      } else {

        // 选错了

        wx.setStorage({
          key: 'quiz2',
          data: i + that.data.quiz.length,
          success() {
            console.log('第%s题错了', i + that.data.quiz.length);
          }
        })
        this.setData({
          ad: true,
        })




        wx.showToast({
          title: '回答错误~',
          icon: 'none'

        })

      }

    } else {

      console.log('ad对');

      wx.showToast({
        title: '点击广告获得答题机会',
        icon: 'none'
      })

    }


  },

  ad() {
    this.setData({
      ad: false,
    })
    console.log('点击了广告');
    wx.removeStorageSync('quiz2')
  },

  onLoad(options) {
    var that = this
    https.request('/quiz/tianguanquiz1', {}, function(res) {
      console.log('quiz', res)
      that.setData({
        quiz: res.data.quiz,
        blank: res.data.blank,

      })
    })




    if (options.quiz) {
      this.setData({
        ad: true,
        current: Number(options.quiz),
      })
    }
    if (options.home) {
      this.setData({
        home: true,
      })
    }

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
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



  catchTouchMove: function(res) {
    return false
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  catchTouchMove: function(res) {
    return false
  },

  onShareAppMessage(res) {
    if (this.data.current == this.data.quiz.length + this.data.blank.length) {
      // 来自页面内转发按钮
      console.log('button');
      return {
        title: this.data.userInfo.nickName + '通过了天官赐福初级考试，你也来试试吧',
        path: '/pages/quiz2/quiz?home=1'

      }
    } else {
      return {
        title: '天官赐福初级考试等你来闯关',
        path: '/pages/quiz2/quiz?home=1'

      }

    }




  }



})
