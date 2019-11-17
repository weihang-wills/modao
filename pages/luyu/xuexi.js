const app = getApp()

Page({

  data: {
    background: 'http://pwh.img.jogiter.cn/modao/luyumogai.png',
    selected: true,

    main: {
      title: '晓星尘和阿菁一起前往义城，在路上时晓星尘闻到路边有一丝血腥，突然警觉，问阿菁“我似乎闻到有血腥味，你去看看那是什么？”',
      hint: '这时，阿菁会说什么？',
      selects: [{
          title: '旁边有人在杀鸡',
          navigator: '0'
        },
        {
          title: '有人受伤了，他有一把剑',
          navigator: '1'
        },
        {
          title: '有个人浑身是血',
          navigator: '2'
        },

      ]
    },


    selections: [

      {
        background: 'http://pwh.img.jogiter.cn/modao/luyusuccess.png',
        title: '晓星尘听罢，嘴角一笑“是我多心了，我们继续走吧”。道长和阿菁继续往前走，旁边重伤的薛洋因无人救治最终伤重而亡。\r\n而后不久宋岚也找到了义城，和星尘谈起往事，而薛洋一直了无踪影，据说是被金家截杀了。道长依然明月清风，在义城除暴安良，而宋岚、阿菁也每每相助，成“义城三杰”。',
        over: false,
        buttonword: '继续下一章'
      },
      {
        background: 'http://pwh.img.jogiter.cn/modao/luyusuccess.png',
        title: '晓星尘走过去发现此人伤势很重，再顺势捡起旁边的剑，手沿着剑柄刻字摸去，竟发现是“降灾”，原来他竟是自己苦苦追查的薛洋？！\r\n而后立刻把他抬回义城，封住了他经脉并为他救治。等薛洋度过了生命危险，就发信号让金家通知仙督将他押回审判。 \r\n薛洋回到金家手里自然难逃一死，但义城最终得以清平，晓星尘和阿菁在义城居住下来为义城百姓除暴安良，后宋岚寻至义城得以和晓星尘团聚。',
        over: false,
        buttonword: '继续下一章'
      },
      {
        background: 'http://pwh.img.jogiter.cn/modao/xueyangresult.png',
        title: "晓星尘查看了下重伤的薛洋，在不知情下把他抬回义城救治。醒来的薛洋认出了晓星尘。\r\n薛洋伤好了之后，设计骗晓星尘杀害义城无辜百姓，并阴谋让晓星尘杀死了自己挚友宋岚，最终逼得晓星尘自尽。\r\n此后，薛洋想要挽回其魂魄将其复活而不得。",
        over: true,
        buttonword: '退出游戏',

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



    if (i == 0||1) {

      wx.setStorage({
        key: 'pass6',
        data: {
          pass: false,
          num: i,
          right: true,
        },
        success() {
          console.log('儲存pass6成功');
        }
      })


    } else {

      wx.setStorage({
        key: 'pass6',
        data: {
          pass: false,
          num: i,
        },
        success() {
          console.log('儲存pass6成功');
        }
      })


    }









  },


  restart() {



    wx.setStorage({
      key: 'pass6',
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
      title: '改变命运之路遇',
      path: '/pages/mogai/mogai'

    }
  },

  onLoad() {

    const pass6 = wx.getStorageSync('pass6')
    const pass5 = wx.getStorageSync('pass5')
    console.log(pass5.num);




    console.log(`pass6是${pass6.pass}`);

    if (pass6.pass == false) {
      console.log('进入1');

      var i = pass6.num
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
