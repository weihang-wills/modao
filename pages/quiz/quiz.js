const app = getApp()

Page({


  data: {
    home:false,
    ad: false,
    background: 'http://pwh.img.jogiter.cn/modao/shiji1.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
    current: 0,
    quiz: [{
        title: '1.下面几人中，身高最高的是哪一位？',
        choose: [{
            name: '魏无羡',
            right: false,
            num: 0
          },
          {
            name: '蓝曦臣',
            right: false,
            num: 0
          },
          {
            name: '金光瑶',
            right: true,
            num: 0
          },
          {
            name: '江澄',
            right: false,
            num: 0
          },
        ],

      },
      {
        title: '2.夷陵老祖最怕什么东西？',
        choose: [{
            name: '蓝忘机',
            right: false,
            num: 1
          },
          {
            name: '狗',
            right: true,
            num: 1
          },
          {
            name: '江厌离',
            right: false,
            num: 1
          },
          {
            name: '兔子',
            right: false,
            num: 1
          },

        ]
      },
      {
        title: '3.可以被封为影帝的是下面哪一位？',
        choose: [{
            name: '阿菁',
            right: false,
            num: 2
          },
          {
            name: '蓝曦臣',
            right: false,
            num: 2
          },
          {
            name: '聂怀桑',
            right: true,
            num: 2
          },
          {
            name: '金光瑶',
            right: false,
            num: 2
          },
        ]
      },
      {
        title: '4.江澄最喜欢的是什么？',
        choose: [{
            name: '魏婴',
            right: false,
            num: 3
          },
          {
            name: '狗',
            right: true,
            num: 3
          },
          {
            name: '金凌',
            right: false,
            num: 3
          },
          {
            name: '聂怀桑',
            right: false,
            num: 3
          },



        ]
      },
      {
        title: '5.下面谁最能读懂蓝忘机的内心呢？',
        choose: [{
            name: '蓝曦臣',
            right: true,
            num: 4
          },
          {
            name: '魏无羡',
            right: false,
            num: 4
          },
          {
            name: '聂怀桑',
            right: false,
            num: 4
          },
          {
            name: '蓝思追',
            right: false,
            num: 4
          },



        ]
      },
    ],

    blank: [{
        title: '6.义城有三盲，分别是真盲，假盲和？',
        answer: '心盲',
        right: false,


      },

      {
        title: '7.蓝忘机与魏无羡被粉丝称之为____夫妇',
        answer: '忘羡',
        right: false,

      },
      {
        title: '8.魏无羡最喜欢喝的是？',
        answer: '天子笑',
        right: false,
      },
      {
        title: '9.魏无羡最喜欢的女性是？',
        answer: '江厌离',
        right: false,
      },

      {
        title: '10.我见诸君多有病，_________。',
        answer: '诸君见我应如是',
        right: false,
      },

      {
        title: '11.明月清风晓星尘，_________。',
        answer: '傲雪凌霜宋子琛',
        right: false,
      },

      {
        title: '12.夷陵见狗怂，_________。',
        answer: '姑苏一杯倒',
        right: false,
      },

      {
        title: '13.月落忘羡秀上天，_________。',
        answer: '江澄与狗对愁眠',
        right: false,
      },

      {
        title: '14.全剧中，有几对CP是官配？请写阿拉伯数字 ',
        answer: '1',
        right: false,
      },



    ]



  },


  choose(e) {
    let i = e.target.dataset.index

    var that=this


    var right = e.target.dataset.right
    console.log('么进入判断');

    if (!that.data.ad) {
console.log('ad不对');

      if (right) {
        console.log('下一题');
        console.log(that.data.current);
        var dat=that.data.current+1
        console.log(dat);
        that.setData({
          current: dat
        })
      }
      else {

        // 选错了
        wx.setStorage({
          key: 'quiz',
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
          icon:'none'
        })
      }

    } else {
        console.log('ad对');

      wx.showToast({
        title: '点击广告获得答题机会',
        icon:'none'
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

    if(!this.data.userInfo){
      return
    }

    var i = e.currentTarget.dataset.index
    console.log(e);
    var right = this.data.blank[i].right
    console.log('么进入判断');
    var that=this

    if (!that.data.ad) {
      console.log('ad不对');
      console.log(that.data.current);

      if (right) {
        console.log('下一题');
        console.log(that.data.current);
        that.setData({
          current: that.data.current + 1

        })


        if(that.data.current==14){
          wx.setStorage({
            key:'pass',
            data:true,
          })
        }



      } else {

        // 选错了

        wx.setStorage({
          key: 'quiz',
          data: i + 5,
          success() {
            console.log('第%s题错了', i + 5);
          }
        })
        this.setData({
          ad: true,
        })




        wx.showToast({
          title: '回答错误~',
          icon:'none'

        })

      }

    } else {

      console.log('ad对');

      wx.showToast({
        title: '点击广告获得答题机会',
        icon:'none'
      })

    }


  },

  ad() {
    this.setData({
      ad: false,
    })
    console.log('点击了广告');
    wx.removeStorageSync('quiz')
  },

  onLoad(options) {
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

  onShareAppMessage(res){
    if (this.data.current==14) {
      // 来自页面内转发按钮
      console.log('button');
      return {
        title: this.data.userInfo.nickName+'通过了魔道十级考试，你也来试试吧',
        path: '/pages/quiz/quiz?home=1'

      }
    }
    else{
      return {
        title: '魔道真爱粉十级考试等你来闯关',
        path: '/pages/quiz/quiz?home=1'

      }

    }




  }



})
