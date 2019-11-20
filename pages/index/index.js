//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: 'http://img.pangweihang.cn/modao/baoxiaobackground.png',
    home: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),

    plot: '根据你的选择出现剧情',
    ploted: true,
    finalplot: '',
    tail: '…',

    current: 0,

    question: [{
        title: '1、你的生日的最后一位数',
        selected: true,
        value: '',

        number: Array.from({
          length: 10
        }).map((item, index) => {
          return index;
        }),
        selection: [
          "蓝曦臣",
          '金凌',
          '江澄',
          '魏无羡',
          '蓝忘机',
          '聂怀桑',
          '蓝思追',
          '晓星尘',
          '薛洋',
          '金光瑶'
        ],
        rank: '',



      },
      {
        title: '2、你的星座',
        selected: true,
        value: '',
        number: [

          '白羊',
          '巨蟹',
          '双子',
          '射手',
          '双鱼',
          '天蝎',
          '狮子',
          '天秤',
          '摩羯',
          '水瓶',
          '金牛',
          '处女',

        ],
        selection: [

          '在莲花坞',
          '在义城',
          '在云深不知处',
          '在玄武洞',
          '在乱葬岗',
          '在金麟台',
          '在草地上',
          '在射日之征',
          '在聂家祖坟',
          '在冥室',
          '在藏书阁',
          '在树上',

        ],
        rank: '',



      },
      {
        title: '3、你的Q号第二位',
        selected: true,
        value: '',
        number: Array.from({
          length: 10
        }).map((item, index) => {
          return index;
        }),
        selection: [

          '看了',
          '亲了',
          '摸了',
          '打了',
          '掐了',
          '吓了',
          '骂了',
          '踹了',
          '压了',
          '绑了',


        ],
        rank: '',



      },
      {
        title: '4、你的电话号码倒数第二位',
        selected: true,
        value: '',
        number: Array.from({
          length: 10
        }).map((item, index) => {
          return index;
        }),
        selection: [

          '蓝忘机',
          '薛洋',
          '宋岚',
          '江澄',
          '蓝曦臣',
          '聂明玦',
          '魏无羡',
          '蓝启仁',
          '晓星尘',
          '金子轩',

        ],
        rank: '',



      },
      {
        title: '5、你的电话号码倒数第四位',
        selected: true,
        value: '',
        number: Array.from({
          length: 10
        }).map((item, index) => {
          return index;
        }),
        selection: [

          '把阿菁',
          '把宋岚',
          '把晓星尘',
          '把江厌离',
          '把金光瑶',
          '把蓝曦臣',
          '把蓝启仁',
          '把魏无羡',
          '把蓝忘机',
          '把薛洋',

        ],
        rank: '',



      },

      {
        title: '6、你的名字第二个字的笔画数',
        selected: true,
        value: '',
        number: [

          '1-5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14及以上',

        ],
        selection: [

          '吓坏了',
          '雷到了',
          '弄哭了',
          '逗笑了',
          '掐死了',
          '气死了',
          '轰走了',
          '惊到了',
          '虐到了',
          '绊倒了',

        ],
        rank: '',



      },
    ],





  },



  onLoad: function(options) {

    console.log(options);
    if (options.home) {
      this.setData({
        home: true,
      })
    }
    // //
    //     var that = this
    //
    //     const path = wx.getStorageSync('baoxiaoback')
    //     if (path) {
    //       console.log('path====', path)
    //       this.setData({
    //         background: path
    //       })
    //     } else {
    //       console.log('去缓存图片')
    //
    //       wx.downloadFile({
    //           url: 'https://img.pangweihang.cn/modao/baoxiaobackground.png',
    //           success: function(res) {
    //             if (res.statusCode === 200) {
    //               console.log('图片下载成功' + res.tempFilePath)
    //
    //               const fs = wx.getFileSystemManager()
    //
    //               fs.saveFile({
    //                 tempFilePath: res.tempFilePath, // 传入一个临时文件路径
    //                 success(res) {
    //                   console.log('图片缓存成功', res.savedFilePath) //
    //                   wx.setStorageSync('baoxiaoback', res.savedFilePath)
    //                   const path = wx.getStorageSync('baoxiaoback')
    //                   that.setData({
    //                     background: path
    //                   })
    //
    //                 }
    //               })
    //             } else {
    //               console.log('响应失败', res.statusCode)
    //             }
    //           }
    //         })
    //       }
    //       //





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
      ploted: true,
    })

  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.finalplot || '魔道祖师爆笑测试等你来玩',
      path: '/pages/index/index?home=1'

    }
  }




})
