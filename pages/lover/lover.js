Page({
  data: {
    home: false,
    background: 'http://pwh.img.jogiter.cn/modao/loverbackground.png',
    choose: true,

    imglist: [{
        url: 'http://pwh.img.jogiter.cn/modao/1.png'
      },
      {
        url: 'http://pwh.img.jogiter.cn/modao/2.png'
      },
      {
        url: 'http://pwh.img.jogiter.cn/modao/3.png'
      },
      {
        url: 'http://pwh.img.jogiter.cn/modao/4.png'
      },
      {
        url: 'http://pwh.img.jogiter.cn/modao/5.png'
      },
      {
        url: 'http://pwh.img.jogiter.cn/modao/6.png'
      },
      {
        url: 'http://pwh.img.jogiter.cn/modao/7.png'
      },
      {
        url: 'http://pwh.img.jogiter.cn/modao/8.png'
      },
      {
        url: 'http://pwh.img.jogiter.cn/modao/9.png'
      },






    ],

    results: [

      {
        title: "江澄",
        des: '你喜欢竹马青梅的好友，江澄就是你的了，《魔道祖师》中，江澄和魏无羡是一对兄弟CP',
        imageurl: "http://pwh.img.jogiter.cn/modao/jiangchengback.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/jiangchengback.png'

      },
      {
        title: "蓝曦臣",
        des: '你若是深情之人，蓝曦臣适合你，蓝曦臣会为一人闭关不出，为他茶饭不思。',
        imageurl: "http://pwh.img.jogiter.cn/modao/landa.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/landaback.png'

      },
      {
        title: "晓星尘",
        des: '下意识里，你是薛洋，不知道自己爱的是什么，爱的是谁，等失去了，才后悔莫及',
        imageurl: "http://pwh.img.jogiter.cn/modao/xiaoxingchen.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/xiaoxingchenback.png'

      },
      {
        title: "蓝忘机",
        des: '你选择这句话，说明你潜意识里是魏无羡啊，不惧怕消逝，只为正义而存在，你的另一半是蓝忘机。',
        imageurl: "http://pwh.img.jogiter.cn/modao/wangjiback.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/wangjiback.png'

      },



      {
        title: "薛洋",
        des: '选择这句话，你就是晓星尘的翻版，薛洋是你的菜，薛洋性格和你是互补的',
        imageurl: "http://pwh.img.jogiter.cn/modao/xueyangback.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/xueyangback.png'

      },
      {
        title: "温晁",
        des: '选择一个，恭喜你，中奖了，温公子生性愚钝，死在美人怀里，而你正好符合他的品味。（二次没有很好的图，所以选了三次的哈哈）',
        imageurl: "http://pwh.img.jogiter.cn/modao/wenchaoback.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/wenchaoback.png'

      },
      {
        title: "魏无羡",
        des: '潜意识里你将自己设定为了蓝忘机，你相信爱能永恒，为一人，你会等上百年或者千年',
        imageurl: "http://pwh.img.jogiter.cn/modao/wuxianback.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/wuxianback.png'

      },
      {
        title: "聂怀桑",
        des: '选这个，说明你是一个富有诗意的人，曾几何时，你也少年过，幻想过，你和怀桑是一对！',
        imageurl: "http://pwh.img.jogiter.cn/modao/niedaoback.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/niedaoback.png'

      },




      {
        title: "金光瑶",
        des: '你是一个悲观的人，金光瑶也许可以和你凑合凑合，金光瑶虽是倒霉，但会与命运抗争到底！',
        imageurl: "http://pwh.img.jogiter.cn/modao/yaoback.png",
        backgroundurl: 'http://pwh.img.jogiter.cn/modao/yaoback.png'

      },




    ],

    result: {

      title: "晓星尘",
      des: '下意识里，你是薛洋，不知道自己爱的是什么，爱的是谁，等失去了，才后悔莫及',
      imageurl: "http://pwh.img.jogiter.cn/modao/xiaoxingchen.png",
      backgroundurl: 'http://pwh.img.jogiter.cn/modao/xiaoxingchenback.png'

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

      background: 'http://pwh.img.jogiter.cn/modao/loverbackground.png',
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
      path: '/pages/lover/lover?home=1'

    }
  },

  onLoad(options) {
    console.log(options);
    if (options.home) {
      this.setData({
        home: true,
      })

    }


  }

})
