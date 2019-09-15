const app=getApp()

Page({

  data: {
    background: 'http://pwh.img.jogiter.cn/modao/qiongqidao.png',
    selected: true,

    main: {
      title: '穷奇道上，金子勋带人来截杀魏无羡，一番争执后大打出手，金子轩赶来。此时魏无羡已陈情驭尸开始暴走，渐渐失去了控制',
      hint: '魏无羡会下意识去摸什么？',
      selects: [{
          title: '去摸随便',
          navigator: '0'
        },
        {
          title: '去摸清心铃',
          navigator: '1'
        },
        {
          title: '去摸阴虎符',
          navigator: '2'
        },

      ]
    },


    selections: [

      {
        background: 'http://pwh.img.jogiter.cn/yinhufu.png',
        title: '魏无羡伸手摸向随便，停下了手中的陈情，这时金子勋和金氏子弟摆脱了凶尸，立刻向无羡万箭齐发，无羡灵气微弱无法用剑，金子轩急忙帮忙格挡，仍挡不住几支利箭射向无羡，魏无羡身中箭死于穷奇道。',
        over: true,
        buttonword: '退出游戏'
      },
      {
        background: 'http://pwh.img.jogiter.cn/qingxin.png',
        title: '清心铃压制住了戾气，无羡渐渐神志恢复，召回了温宁。金子轩说出了阿离正在等你，无羡听闻后心中感动撤回了鬼气，金子轩并挡在无羡前面命令金子勋勿要轻举妄动。穷奇道一事就此调停。金子轩终于把无羡请到金麟台参加满月酒。',
        over: false,
        buttonword: '继续下一章'
      },
      {
        background: 'http://pwh.img.jogiter.cn/yinhufu.png',
        title: '阴虎符被驱使发动了万尸暴走，方圆十里鬼哭狼嚎，一阵阵戾气直接压向金氏众人。金子轩口中说阿离正在等你，但无羡已经进入暴走状态听不进去，直接对金子勋和金子轩鬼气穿心，虐杀在场所有金氏子弟，再也有口难辩。',
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


    wx.setStorage({
      key: 'pass2',
      data: {
pass:false,
num:i,

      },
      success() {
        console.log('儲存false成功');
      }
    })



  },

  restart() {



    wx.setStorage({
      key: 'pass2',
      data: {
pass:true,
      },
      success() {
        console.log('储存true成功');
      }
    })

  },


  end() {
    wx.navigateBack({
      delta: 1
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
            delta: 1
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
      title: '改变命运之穷奇道截杀',
      path: '/pages/mogai/mogai'

    }
  },

  onLoad() {
    const pass1 = wx.getStorageSync('pass1')
    const pass2 = wx.getStorageSync('pass2')

    app.globalData.pass1 = pass1
    app.globalData.pass2 = pass2
    console.log(pass2);

    if (app.globalData.pass2.pass == false) {

      var i = app.globalData.pass2.num
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
