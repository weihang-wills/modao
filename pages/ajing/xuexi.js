const app = getApp()

Page({

  data: {
    background: 'http://pwh.img.jogiter.cn/modao/ajingmogai.png',
    selected: true,

    main: {
      title: '晓星尘出山后以自己双目救治了宋岚，后离开独自来到一小镇上，走在街上突然听闻一熟悉的女声被一群大汉抓住求救，似乎是之前偷了他钱包的少女阿菁，她这下偷了当地地主的钱包，正好被地主手下抓住教训。',
      hint: '晓星尘会怎么做？',
      selects: [{
          title: '听之任之',
          navigator: '0'
        },
        {
          title: '在暗处出手相救',
          navigator: '1'
        },
        {
          title: '现身相救',
          navigator: '2'
        },

      ]
    },


    selections: [

      {
        background: 'http://pwh.img.jogiter.cn/modao/ajingfail.png',
        title: '晓星尘听见阿菁被抓呼救，但觉得这女小偷装作瞎子偷窃多次，被人抓到是罪有应得，希望她能得到教训之后知错能改。于是转身离去。\r\n最终阿菁被地主手下殴打而死。',
        over: true,
        buttonword: '退出游戏'
      },
      {
        background: 'http://pwh.img.jogiter.cn/modao/ajingfail.png',
        title: '晓星尘听闻阿菁被众人抓住并欲为难她，于是在暗处用石头击退了那群大汉，阿菁挣脱逃跑。晓星尘见这小姑娘已经逃走，希望她能记住教训，于是便离开了。\r\n然而没过多久阿菁在街上还是被地主和那群手下抓住，毒打致死。',
        over: true,
        buttonword: '退出游戏'
      },
      {
        background: 'http://pwh.img.jogiter.cn/modao/ajingsuccess.png',
        title: "晓星尘直接现身相救，打退了一众恶徒，说“这么多人欺负一个女孩子，实在不耻”。\r\n阿菁认出了这位救他的恩人，便时不时地跟在他身后，并最终和他一起启程前往义城。",
        over: false,
        buttonword: '继续下一章',

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



    if (i == 2) {

      wx.setStorage({
        key: 'pass5',
        data: {
          pass: false,
          num: i,
          right: true,
        },
        success() {
          console.log('儲存pass5成功');
        }
      })


    } else {

      wx.setStorage({
        key: 'pass5',
        data: {
          pass: false,
          num: i,
        },
        success() {
          console.log('儲存pass5成功');
        }
      })


    }









  },


  restart() {



    wx.setStorage({
      key: 'pass5',
      data: {
        pass: true,
      },
      success() {
        console.log('储存true成功');
      }
    })

    wx.switchTab({
      url: '../../pages/mogai/mogai',
      success() {
        console.log('刷新成功');
      }
    })



  },


  end() {
    wx.navigateBack({
      delta: 1
    })
  },

  go() {
    wx.redirectTo({
      url: '/pages/luyu/xuexi'
    })


  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '改变命运之阿菁',
      path: '/pages/mogai/mogai'

    }
  },

  onLoad() {

    const pass5 = wx.getStorageSync('pass5')
    const pass4 = wx.getStorageSync('pass4')
    console.log(pass4.num);




    console.log(`pass5是${pass5.pass}`);

    if (pass5.pass == false) {
      console.log('进入1');

      var i = pass5.num
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

    }
    // else if (pass4.num == 1 || 0) {
    //   console.log('进入2');
    //   var selects=this.data.main.selects
    //   selects.splice(2, 1)
    //
    //   this.setData({
    //     'main.selects':selects,
    //     'main.title': '不夜天城誓师大会，金光善怂恿各世家数落魏无羡种种不是，义愤填膺。魏无羡现身不夜天城楼顶房檐，当面对质，“我倒要看看下了千疮百孔的人是谁！”。顿时世家子弟中一箭射向魏无羡，且人群中突然爆发凶尸，乱作一团。魏无羡怒上心头，吹奏陈情，想要教训下他们。\n\r这时忘机也来到了房檐劝说魏无羡收手，不要中了他们的奸计。',
    //   })
    //
    // }



  },







})
