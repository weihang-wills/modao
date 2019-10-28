const app = getApp()

Page({

  data: {
    background: 'http://pwh.img.jogiter.cn/modao/buyetian.png',
    selected: true,

    main: {
      title: '不夜天城誓师大会，金光善怂恿各世家数落魏无羡种种不是，义愤填膺。魏无羡现身不夜天城楼顶房檐，当面对质，“我倒要看看下了千疮百孔的人是谁！”。顿时世家子弟中一箭射向魏无羡，且人群中突然爆发凶尸，乱作一团。魏无羡怒上心头，吹奏陈情，想要教训下他们。\n\r这时不夜天城居然出现巨大的招阴阵，而忘机也来到了房檐劝说魏无羡收手，不要中了他们的奸计。',
      hint: '魏无羡会怎么做？',
      selects: [{
          title: '听忘机劝说',
          navigator: '0'
        },
        {
          title: '派温宁去保护师姐',
          navigator: '1'
        },
        {
          title: '破坏招阴阵',
          navigator: '2'
        },

      ]
    },


    selections: [

      {
        background: 'http://pwh.img.jogiter.cn/modao/shijiesi.png',
        title: '听了忘机的话，停下了吹笛。此时才发现场下的部分凶尸依然没有停下，是受他人所控。事情仍然不可控制，魏无羡赶紧吹奏召尸和其他凶尸对搏，受招阴阵影响无羡依旧难以控制心绪，险些暴走。\r\n此时师姐走进战场，阿羡听闻师姐叫声慌忙进入战场，最终师姐为阿羡挡剑而死，魏无羡怒气攻心暴走失控，屠杀上千修士，给金家落下了围剿乱葬岗的口实',
        over: true,
        buttonword: '退出游戏'
      },
      {
        background: 'http://pwh.img.jogiter.cn/modao/buyetian.png',
        title: '此时战场中传来了师姐的叫声，魏无羡心中一惊怕师姐受伤，立刻召唤温宁在人群中迅速找到了师姐，并把她带离战场。尽管魏无羡停止了吹笛，但凶尸仍然暴走。\r\n于是无羡继续吹笛控制走尸和其他凶尸对抗，受招阴阵影响，无羡渐渐失控，屠杀修士百余人，给金家落下了围剿乱葬岗的口实。',
        over: true,
        buttonword: '退出游戏'
      },
      {
        background: 'http://pwh.img.jogiter.cn/modao/buyetian.png',
        title: "魏无羡想起当时金麟台座中习鬼道的客卿，突然意识到此时不夜天城被布下一个巨大的招阴阵，此阵吸纳怨气，容易导致自己对阴虎符失控。便立刻画出符咒破坏了招阴阵，并驱使鬼气压制住了金家众人，其他世家也暂时不敢轻举妄动。\r\n魏无羡说：“我现在捏死你们，就如同捏死蝼蚁那么简单，别不自量力了！我还需要用千疮百孔这种雕虫小技？刚才的招阴阵就是金家的客卿布下，大家好好看看，到底是我不仁，还是金家不义！”说罢，径直离开了不夜天城。",
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



if(i==2){

  wx.setStorage({
    key: 'pass4',
    data: {
      pass: false,
      num: i,
      right: true,
    },
    success() {
      console.log('儲存pass4成功');
    }
  })


}else{

  wx.setStorage({
    key: 'pass4',
    data: {
      pass: false,
      num: i,
    },
    success() {
      console.log('儲存pass4成功');
    }
  })


}











  },


  restart() {



    wx.setStorage({
      key: 'pass4',
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
      title: '改变命运之血洗不夜天城',
      path: '/pages/mogai/mogai'

    }
  },

  onLoad() {

    const pass4 = wx.getStorageSync('pass4')
    const pass3 = wx.getStorageSync('pass3')
    console.log(pass3.num);




    console.log(`pass4是${pass4.pass}`);

    if (pass4.pass == false) {
      console.log('进入1');

      var i = pass4.num
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
    else if (pass3.num == 1 || 0) {
      console.log('进入2');
      var selects=this.data.main.selects
      selects.splice(2, 1)

      this.setData({
        'main.selects':selects,
        'main.title': '不夜天城誓师大会，金光善怂恿各世家数落魏无羡种种不是，义愤填膺。魏无羡现身不夜天城楼顶房檐，当面对质，“我倒要看看下了千疮百孔的人是谁！”。顿时世家子弟中一箭射向魏无羡，且人群中突然爆发凶尸，乱作一团。魏无羡怒上心头，吹奏陈情，想要教训下他们。\n\r这时忘机也来到了房檐劝说魏无羡收手，不要中了他们的奸计。',
      })

    }



  },







})
