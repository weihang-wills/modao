const app=getApp();
Page({
  data: {
    entryDataHash:'',
    sharetype:59,
    home: false,
    background: 'http://pangweihang.cn/modao/modao/loverbackground.png',
    choose: true,

    imglist: [{
        url: 'http://pangweihang.cn/modao/modao/1.png'
      },
      {
        url: 'http://pangweihang.cn/modao/modao/2.png'
      },
      {
        url: 'http://pangweihang.cn/modao/modao/3.png'
      },
      {
        url: 'http://pangweihang.cn/modao/modao/4.png'
      },
      {
        url: 'http://pangweihang.cn/modao/modao/5.png'
      },
      {
        url: 'http://pangweihang.cn/modao/modao/6.png'
      },
      {
        url: 'http://pangweihang.cn/modao/modao/7.png'
      },
      {
        url: 'http://pangweihang.cn/modao/modao/8.png'
      },
      {
        url: 'http://pangweihang.cn/modao/modao/9.png'
      },






    ],

    results: [

      {
        title: "江澄",
        des: '你喜欢竹马青梅的好友，江澄就是你的了，《魔道祖师》中，江澄和魏无羡是一对兄弟CP',
        imageurl: "http://pangweihang.cn/modao/modao/jiangchengback.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/jiangchengback.png'

      },
      {
        title: "蓝曦臣",
        des: '你若是深情之人，蓝曦臣适合你，蓝曦臣会为一人闭关不出，为他茶饭不思。',
        imageurl: "http://pangweihang.cn/modao/modao/landa.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/landaback.png'

      },
      {
        title: "晓星尘",
        des: '下意识里，你是薛洋，不知道自己爱的是什么，爱的是谁，等失去了，才后悔莫及',
        imageurl: "http://pangweihang.cn/modao/modao/xiaoxingchen.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/xiaoxingchenback.png'

      },
      {
        title: "蓝忘机",
        des: '你选择这句话，说明你潜意识里是魏无羡啊，不惧怕消逝，只为正义而存在，你的另一半是蓝忘机。',
        imageurl: "http://pangweihang.cn/modao/modao/wangjiback.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/wangjiback.png'

      },



      {
        title: "薛洋",
        des: '选择这句话，你就是晓星尘的翻版，薛洋是你的菜，薛洋性格和你是互补的',
        imageurl: "http://pangweihang.cn/modao/modao/xueyangback.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/xueyangback.png'

      },
      {
        title: "温晁",
        des: '选择一个，恭喜你，中奖了，温公子生性愚钝，死在美人怀里，而你正好符合他的品味。（二次没有很好的图，所以选了三次的哈哈）',
        imageurl: "http://pangweihang.cn/modao/modao/wenchaoback.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/wenchaoback.png'

      },
      {
        title: "魏无羡",
        des: '潜意识里你将自己设定为了蓝忘机，你相信爱能永恒，为一人，你会等上百年或者千年',
        imageurl: "http://pangweihang.cn/modao/modao/wuxianback.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/wuxianback.png'

      },
      {
        title: "聂怀桑",
        des: '选这个，说明你是一个富有诗意的人，曾几何时，你也少年过，幻想过，你和怀桑是一对！',
        imageurl: "http://pangweihang.cn/modao/modao/niedaoback.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/niedaoback.png'

      },




      {
        title: "金光瑶",
        des: '你是一个悲观的人，金光瑶也许可以和你凑合凑合，金光瑶虽是倒霉，但会与命运抗争到底！',
        imageurl: "http://pangweihang.cn/modao/modao/yaoback.png",
        backgroundurl: 'http://pangweihang.cn/modao/modao/yaoback.png'

      },




    ],

    result: {

      title: "晓星尘",
      des: '下意识里，你是薛洋，不知道自己爱的是什么，爱的是谁，等失去了，才后悔莫及',
      imageurl: "http://pangweihang.cn/modao/modao/xiaoxingchen.png",
      backgroundurl: 'http://pangweihang.cn/modao/modao/xiaoxingchenback.png'

    }




  },


  result(e) {

    var that = this;
    console.log(e);
    var i = e.target.dataset.index



    that.setData({
      result: that.data.results[i],
      choose: false,
      background: that.data.results[i].backgroundurl

    })

  },

  renew() {

    var that = this;

    that.setData({

      background: 'http://pangweihang.cn/modao/modao/loverbackground.png',
      choose: true,

    })

  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.choose ? '看看你在魔道祖师的另一半是谁' : '我在魔道祖师里面的道侣是' + this.data.result.title,
      path: '/pages/lover/lover?home=1',
      entryDataHash:this.data.entryDataHash,

    }
  },

  onLoad(options) {
    console.log(options);
    if (options.home) {
      this.setData({
        home: true,
      })

    }

    if(app.globalData.entryDataHash){
      console.log('entryDataHash存在');
      this.setData({
        entryDataHash:app.globalData.entryDataHash,
        sharetype:36,
      })
    }


  }

})
