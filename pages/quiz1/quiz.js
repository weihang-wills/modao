const app = getApp()

Page({


  data: {
    home:false,
    ad: false,
    background: 'http://pangweihang.cn/modao/modao/fujiatiback.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
    current: 0,
    quiz: [{
        title: '1.仙子是什么品种的狗狗？',
        choose: [{
            name: '阿拉斯加',
            right: false,
            num: 0
          },
          {
            name: '哈士奇',
            right: true,
            num: 0
          },
          {
            name: '藏獒',
            right: false,
            num: 0
          },
          {
            name: '黑棕犬',
            right: false,
            num: 0
          },
        ],

      },
      {
        title: '2.蓝启仁的胡子曾经被谁刮了？',
        choose: [{
            name: '蓝忘机',
            right: false,
            num: 1
          },
          {
            name: '藏色散人',
            right: true,
            num: 1
          },
          {
            name: '蓝景仪',
            right: false,
            num: 1
          },
          {
            name: '蓝曦臣',
            right: false,
            num: 1
          },

        ]
      },
      {
        title: '3.江澄相过几次亲？',
        choose: [{
            name: '1',
            right: false,
            num: 2
          },
          {
            name: '2',
            right: false,
            num: 2
          },
          {
            name: '3',
            right: true,
            num: 2
          },
          {
            name: '4',
            right: false,
            num: 2
          },
        ]
      },
      {
        title: '4.身高最矮的是？',
        choose: [{
            name: '蓝思追',
            right: false,
            num: 3
          },
          {
            name: '金光瑶',
            right: false,
            num: 3
          },
          {
            name: '欧阳子真',
            right: false,
            num: 3
          },
          {
            name: '蓝景仪',
            right: true,
            num: 3
          },



        ]
      },
      {
        title: '5.魏远道这个名字是谁帮魏无羡取的？',
        choose: [{
            name: '江澄',
            right: false,
            num: 4
          },
          {
            name: '蓝忘机',
            right: false,
            num: 4
          },
          {
            name: '魏无羡',
            right: true,
            num: 4
          },
          {
            name: '绵绵',
            right: false,
            num: 4
          },



        ]
      },
    ],

    blank: [{
        title: '6."你一开口我就笑，我一笑，剑就不稳了"这是谁说的话？',
        answer: '晓星尘',
        right: false,


      },

      {
        title: '7.拂雪的是谁的剑？',
        answer: '宋岚',
        right: false,

      },
      {
        title: '8.魔道中谁的笑点最低？',
        answer: '晓星尘',
        right: false,
      },
      {
        title: '9.江澄相亲中对女方的要求是要对______好？',
        answer: '金凌',
        right: false,
      },

      {
        title: '10.蓝思追的身高是______cm',
        answer: '172',
        right: false,
      },

      {
        title: '11.蓝曦臣的名为____。（一个字）',
        answer: '涣',
        right: false,
      },

      {
        title: '12.金光瑶的佩剑是____。',
        answer: '恨生',
        right: false,
      },

      {
        title: '13.蓝曦臣的萧名为_____',
        answer: '裂冰',
        right: false,
      },

      {
        title: '14.“人不轻狂枉少年”是谁说的？ ',
        answer: '江枫眠',
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
          key: 'quiz1',
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
            key:'pass1',
            data:true,
            success(res){
              console.log('pass1成功储存');
            }
          })
        }



      } else {

        // 选错了

        wx.setStorage({
          key: 'quiz1',
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
    wx.removeStorageSync('quiz1')
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

  catchTouchMove:function(res){
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

  onShareAppMessage(res){
    if (this.data.current==14) {
      // 来自页面内转发按钮
      console.log('button');
      return {
        title: this.data.userInfo.nickName+'通过了魔道附加题考试，你也来试试吧',
        path: '/pages/quiz1/quiz?home=1'

      }
    }
    else{
      return {
        title: '魔道真爱粉附加题考试等你来闯关',
        path: '/pages/quiz1/quiz?home=1'

      }

    }




  }



})
