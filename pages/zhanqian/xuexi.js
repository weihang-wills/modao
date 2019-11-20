const app = getApp()

Page({

  data: {
    background: 'http://img.pangweihang.cn/modao/zhanqian.png',
    selected: true,

    main: {
      title: '穷奇道截杀和平解决，金凌满月酒之上魏无羡也无出格表现，反而对金凌宠爱有加。但是世家一方面对魏无羡的桀骜行为非常忌惮，另一方面也觊觎阴虎符的力量。\n\r于是金家策划了多地的走尸杀人事件嫁祸无羡，加上袒护温氏，魏无羡终究还是被推上被讨伐的命运。金家称如果魏无羡交出温氏余孽，则可放过。',
      hint: '魏无羡会怎么做？',
      selects: [{
          title: '交出温氏',
          navigator: '0'
        },
        {
          title: '不交出温氏，据守乱葬岗',
          navigator: '1'
        },
        {
          title: '不交出温氏，攻上金麟台',
          navigator: '2'
        },

      ]
    },


    selections: [

      {
        background: 'http://img.pangweihang.cn/modao/jiaochuwenshi.png',
        title: '魏无羡忍痛交出温氏，温氏余人被金家枭首示众，事情暂时平息。\n\r然而金家根本不会善罢甘休，温氏余孽只是一个出师之名的借口，这次的借口被堵住了，金家依然策划嫁祸了凶尸杀人嫁祸于魏无羡，声讨之势众，金家终于决定在不夜天城举行誓师大会。',
        over: false,
        buttonword: '继续下一章'
      },
      {
        background: 'http://img.pangweihang.cn/modao/luanzang.png',
        title: '魏无羡决心守护温氏，并表示友好退守乱葬岗，井水不犯河水。江澄替无羡说情，指温氏余人都是老弱妇孺，并无危害，安抚各世家。\n\r然而金氏并不买账，依靠自身威望怂恿各世家，以鬼道非正道，为民除害之名举行誓师大会',
        over: false,
        buttonword: '继续下一章'
      },
      {
        background: 'http://img.pangweihang.cn/modao/jiaochuwenshi.png',
        title: "魏无羡决心守护温氏，直接冲上金麟台对峙，直言自己并未驱动凶尸残害无辜，是金家嫁祸，说罢直接驱动鬼气攻击金光善。此时座中一客卿突然发出几道符咒破解了鬼气。\n\r“原来，这就是金宗主的好帮手啊，他也会鬼道，怎么就不说是他驱动的凶尸杀人呢？”说罢，魏无羡轻蔑一笑离开金麟台。\n\r金光善以魏无羡轻狂自大袭击金麟台唯有，以为民除害，匡扶正道为名举办誓师大会。",
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




      wx.setStorage({
        key:'pass3',
        data:{
          pass:false,
          num:i,
          right:true,
        },
        success(){
          console.log('儲存pass3成功');
        }
      })








  },


  restart() {



    wx.setStorage({
      key: 'pass3',
      data: {
        pass: true,
      },
      success() {
        console.log('储存true成功');
      }
    })

    wx.switchTab({
      url: '../../pages/mogai/mogai',
      success(){
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
      url:'/pages/buyetian/xuexi'
    })


  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '改变命运之欲加之罪',
      path: '/pages/mogai/mogai'

    }
  },

  onLoad() {

    const pass3 = wx.getStorageSync('pass3')


    app.globalData.pass3 = pass3
    console.log(pass3);

    if (app.globalData.pass3.pass == false) {

      var i = app.globalData.pass3.num
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
  },







})
