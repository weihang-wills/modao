Page({
  data: {
    ad: false,
    check: true,
    name: '',
    result: '',

    database: [],



  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '魔道测试：你是什么做成的？',
      path: '/pages/newindex/newindex'

    }
  },
  onLoad() {




    var that = this
    let table = new wx.BaaS.TableObject('zuchengdatabase')

    table.find().then(res => {
      console.log(res);
      var arr = res.data.objects[0].database
      console.log(arr);
      that.setData({
        database: arr,
      })
    })





  },

  renew() {
    this.setData({
      name: '',
      check: true,
      result: '',
    })
  },

  ad() {
    this.setData({
      ad: false,
      check: false,
    })

  },

  checkout() {
    // 登录
    //     qq.BaaS.auth.loginWithQQ({
    //       syncUserProfile: 'overwrite'
    //     }).then(
    // user=>{
    // }
    //
    //     )






    // 非登录

    let table = new wx.BaaS.TableObject('zuchengresult')
    let query = new wx.BaaS.Query()
    query.compare('name', '=', this.data.name)
    if (this.data.name) {
      this.setData({
        ad: true
      })


      var that = this
      table.setQuery(query).find().then(
        res => {
          console.log(res);
          if (res.data.objects.length == 0) {
            that.compute();
            let newdata = {
              name: that.data.name,
              result: that.data.result,
            }
            table.create().set(newdata).save().then(res => {
              console.log('新增成功', res);
            })
          } else {

            that.setData({
              result: res.data.objects[0].result,
            })


            console.log(that.data.result);
          }
        }
      )

    }

  },

  compute() {

    var len = 3;
    var min = 0;
    var max = this.data.database.length - 1;
    var resultarr = this.randomArr(len, min, max)
    var result = resultarr.map(item => {
      return this.data.database[item]
    })
    result = result.join('，');
    console.log(result);
    this.setData({
      result: result
    })


  },

  confirm(e) {

    var name = e.detail.value
    this.setData({
      name: name
    })

  },


  // 计算函数

  randomArr(len, min, max) {
    if ((max - min) < len) { //可生成数的范围小于数组长度
      return null;
    }
    var hash = [];

    while (hash.length < len) {
      var num = this.randomNum(min, max);

      if (hash.indexOf(num) == -1) {
        hash.push(num);
      }
    }
    console.log('hash', hash);
    return hash;
  },

  randomNum(min, max) {
    var range = max - min;
    var rand = Math.random();
    var num = min + Math.round(rand * range); //四舍五入，可以获得max到min之间的整数
    return num;
  },


})
