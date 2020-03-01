Page({

  data: {
    home: false,
    background: '',

    innertext: '',

    innertexts: [



    ]




  },

  onLoad(options) {









    var that = this

    let table = new qq.BaaS.TableObject('pengyouquan')
    table.orderBy('order').find().then(res => {
      console.log(res);
      var arr = res.data.objects.map(item => {
        return item.data
      })

      that.setData({
        innertexts: arr
      })

      console.log(arr);




      console.log(options);
      if (options.home) {
        that.setData({
          home: true,
        })
      }

      if (options.back == 'gusu') {
        that.setData({
          background: 'http://pangweihang.cn/modao/modao/gusuback.png',
          innertext: that.data.innertexts[1]

        })
      } else if (options.back == 'lianhuawu') {
        that.setData({
          background: 'http://pangweihang.cn/modao/modao/lianhuawu.png',
          innertext: that.data.innertexts[0]

        })
      } else if (options.back == 'yicheng') {
        that.setData({
          background: 'http://pangweihang.cn/modao/modao/yichengback.png',
          innertext: that.data.innertexts[2]

        })
      } else if (options.back == 'jinlintai') {
        that.setData({
          background: 'http://pangweihang.cn/modao/modao/jinlintai.png',
          innertext: that.data.innertexts[3]

        })
      }else if (options.back == 'bujingshi') {
        that.setData({
          background: 'http://pangweihang.cn/modao/modao/bujingshi.png',
          innertext: that.data.innertexts[4]

        })
      }else if (options.back == 'wanshenku') {
        that.setData({
          background: 'http://pangweihang.cn/modao/modao/wanshenku.png',
          innertext: that.data.innertexts[5]

        })
      }






    })








  },


  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '魔道日常朋友圈',
      path: '/pages/lianhuawu/lianhuawu?home=1'

    }
  }

})
