Page({

  data: {
    background: 'http://pwh.img.jogiter.cn/modao/xuexi.png',
    selected: true,

    main: {
      title: '温晁血洗莲花坞时，江叔叔及时赶回，把江夫人   和莲花坞剩余弟子带离，从陆路逃走。温晁占领了莲花坞。',
      hint: '你会选择江氏残部逃去何方？',
      selects: [{
          title: '前往清河',
          navigator: '0'
        },
        {
          title: '前往姑苏',
          navigator: '1'
        },
        {
          title: '前往兰陵',
          navigator: '2'
        },

      ]
    },


    selections: [{
        background: 'http://pwh.img.jogiter.cn/modao/qinghe.png',
        title: '温晁见清河势力尚存，不敢贸然发兵，江氏夫妇和余下族人得以幸存。云梦江氏和清河聂氏在不净世联合发动伐温之战，并力邀兰陵金氏、姑苏蓝氏加入。射日之征开始。',
        over: false,
        buttonword: '继续下一章'
      },
      {
        background: 'http://pwh.img.jogiter.cn/modao/gusu.png',
        title: '前往姑苏，但是云深不知处刚刚被烧，蓝家元气大伤，曦臣已带典籍避难。前有温旭，后有温晁，蓝氏发出信号召集其他氏族救急，江蓝两族被围困在云深不知处，其余氏族持观望态度没有团结起来。江蓝两家两日后被灭。',
        over: true,
        buttonword: '退出游戏'
      },

      {
        background: 'http://pwh.img.jogiter.cn/modao/gusu.png',
        title: '江氏夫妇和剩余人等去投靠当时还未受战乱的金家，然而当时的金家唯恐祸及自身，立刻撇清了关系。江氏余族被赶下金麟台，在向清河求援途中遭遇温晁和温逐流追击，依旧难逃被灭。',
        over: true,
        buttonword: '退出游戏'
      },


    ]



  },


  navigator(e) {

    console.log(e);
    var i = e.target.dataset.index
    var selection = this.data.selections[i]
    var over = selection.over
    var selects = {
      title: selection.buttonword,
      over: over,
    }

    this.setData({
      background: selection.background,
      selected: false,
      'main.title': selection.title,
      'main.hint': over ? "Game Over" : "选择正确！",
      'main.selects': selects,






    })


  },

  end() {
    wx.navigateBack({
      delta:1
    })
  },

  go() {
    wx.showModal({
      title: '剧情开发中…',
      content: '敬请等待下一章剧情',
      showCancel: false,
      confirmColor: '#002e73',

      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateBack({
            delta:1
          })
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
      title: '改变命运之血洗莲花坞',
      path:'/pages/mogai/mogai'

    }
  },







})
