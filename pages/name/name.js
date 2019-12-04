
const app = getApp()

Page({
  data: {
    background:'http://img.pangweihang.cn/namebackground1.png',
    home:false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),

    plot: '根据选择生成你的名字',
    ploted: true,
    finalplot: '',
    tail: '…',

    current: 0,

    question: [{
        title: '1、出生年份最后一个数字',
        selected: true,
        value: '',

        number: Array.from({
          length: 10
        }).map((item, index) => {
          return index;
        }),
        selection: [
          "金",
          '江',
          '温',
          '魏',
          '虞',
          '蓝',
          '晓',
          '宋',
          '薛',
          '聂'
        ],
        rank: '',



      },
      {
        title: '2、你的出生月份',
        selected: true,
        value: '',
        number: [1,2,3,4,5,6,7,8,9,10,11,12],
        selection: [

          '轩',
          '厌',
          '凝',
          '琼',
          '若',
          '雨',
          '晨',
          '凌',
          '瑶',
          '锦',
          '羽',
          '枫',



        ],
        rank: '',



      },
      {
        title: '3、出生日最后一位数',
        selected: true,
        value: '',
        number: Array.from({
          length: 10
        }).map((item, index) => {
          return index;
        }),
        selection: [

          '曦',
          '宁',
          '情',
          '苑',
          '绵',
          '鸢',
          '菁',
          '寒',
          '云',
          '尘',


        ],
        rank: '',



      },

    ],





  },



  onLoad: function(options) {

    console.log(options);
    if(options.home){
      this.setData({
        home:true,
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

  pickerchange: function(e) {
    console.log(e);
    var i = parseInt(e.target.dataset.index)

    var that = this
    var questionvalue = "question[" + i + "].value";
    var questionselected = "question[" + i + "].selected";
    var rank = "question[" + i + "].rank"
    var number = this.data.question[i].number[e.detail.value]
    that.setData({
      [questionvalue]: number,
      [questionselected]: false,
      [rank]: e.detail.value,

    })
    console.log('22' + this.data.question[i].value)
    console.log('23' + this.data.question[i].rank)
  },


  confirm: function(e) {



    console.log(e)
    var i = e.currentTarget.dataset.index
    console.log('1' + i);
    console.log(this.data.question[i].rank);

    if (!this.data.question[i].rank) {
      qq.showToast({
        title: '你还没填写内容哦',
        icon: 'none',
      })

      return
    }


    var mock = this.data.finalplot
    console.log(mock);
    var m = this.data.question[i].rank
    mock += this.data.question[i].selection[m]
    console.log(mock);

    this.setData({
      finalplot: mock,
      current: this.data.current + 1,
      ploted: false,
    })



  },

  catchTouchMove: function(res) {
    return false
  },

  renew: function() {

    var that = this;

    for (var i = 0; i < 6; i++) {

      var questionvalue = "question[" + i + "].value";
      var questionselected = "question[" + i + "].selected";
      var rank = "question[" + i + "].rank"

      that.setData({
        [questionvalue]: '',
        [questionselected]: true,
        [rank]: '',
      })




    }

    that.setData({
      current: 0,
      finalplot: '',
      ploted:true,
    })

  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.finalplot? '我在魔道祖师里面的名字是'+this.data.finalplot : '看看你在魔道祖师里面叫什么名字',
      path:'/pages/name/name?home=1'

    }
  },
})
