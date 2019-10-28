const app = getApp()

Page({
  data: {
    qqzone: `${qq.env.USER_DATA_PATH}/qqzone.png`,
    qcode: `${qq.env.USER_DATA_PATH}/qcode.png`,
    feed: '',
    feedpic: '../../utils/feed.png',

    ad: false,

    characters: {
      wuxian: {
        pic: 'http://pwh.img.jogiter.cn/modao/sansuixian.png',
        title: '三岁羡',
        life: 0,
        level1: 100,
        level2: 600,
        level3: 1200,
        percent: 0,
        totallife: 100,
      },

      wangji: {
        pic: 'http://pwh.img.jogiter.cn/modao/sansuiji.png',
        title: '三岁机',
        life: 0,
        level1: 100,
        level2: 600,
        level3: 1200,
        percent: 0,
        totallife: 100,
      },
    }




  },

  tap() {

    qq.openQzonePublish({
      text: '来魔道同人游戏，玩养羡羡和养忘机的游戏吧，还有很多有趣的小测试哦~QQ扫码就可以玩',
      media: [{
          type: 'photo',
          path: this.data.qqzone
        },
        {
          type: 'photo',
          path: this.data.qcode
        },

      ]

    })

    console.log('dd');

    var date = new Date()

    const today = date.getFullYear() + date.getMonth() + date.getDate()

    var that = this

    that.setData({
      'characters.wuxian.life': that.data.characters.wuxian.life + 10,
      'characters.wangji.life': that.data.characters.wangji.life + 10
    })
    that.count(0);
    that.count(1);
    wx.setStorage({
      key: 'zonefeed',
      data: {
        date: today
      }
    })





  },

  openqqzone() {

    const zonefeed = wx.getStorageSync('zonefeed').date
    var date = new Date()
    const today = date.getFullYear() + date.getMonth() + date.getDate()

    if (zonefeed == today) {
      wx.showToast({
        title: '今天已经喂食过了哟'
      })
    } else {

      this.tap();


    }

  },

  onShareAppMessage() {
    return {
      title: '养羡羡和养忘机，好好玩啊~哈哈',
      path: '/pages/pet/pet'
    }
  },


  ad() {
    this.setData({
      ad: false,

    })

    this.feed(this.data.feed)


  },


  openad(e) {

    const wuxian_date = wx.getStorageSync('wuxian').date
    const wangji_date = wx.getStorageSync('wangji').date
    var date = new Date()
    const today = date.getFullYear() + date.getMonth() + date.getDate()

    var i = e.currentTarget.dataset.num

    if (i == 0) {

      if (wuxian_date == today) {
        wx.showToast({
          title: '今天已经喂食过了哟'
        })
      } else {

        this.setData({
          feed: i,
          ad: true,
        })

      }

    } else if (i == 1) {

      if (wangji_date == today) {
        wx.showToast({
          title: '今天已经喂食过了哟'
        })
      } else {

        this.setData({
          feed: i,
          ad: true,
        })

      }




    }



  },


  count(num) {

    if (num == 0) {
      var wuxian = this.data.characters.wuxian

      if (wuxian.life < wuxian.level1) {
        this.setData({
          'characters.wuxian.percent': wuxian.life / wuxian.level1 * 100,
          'characters.wuxian.totallife': wuxian.level1

        })


      } else if (wuxian.life >= wuxian.level1 && wuxian.life < wuxian.level2) {
        this.setData({

          'characters.wuxian.percent': (wuxian.life - wuxian.level1) / (wuxian.level2 - wuxian.level1) * 100,
          'characters.wuxian.totallife': (wuxian.level2 - wuxian.level1),
          'characters.wuxian.title': '少年羡',
          'characters.wuxian.pic': 'http://pwh.img.jogiter.cn/modao/shaonianxian.png',



        })

      } else if (wuxian.life >= wuxian.level2) {

        this.setData({

          'characters.wuxian.percent': (wuxian.life - wuxian.level2) / (wuxian.level3 - wuxian.level2) * 100,
          'characters.wuxian.totallife': (wuxian.level3 - wuxian.level2),
          'characters.wuxian.title': '老祖羡',
          'characters.wuxian.pic': 'http://pwh.img.jogiter.cn/modao/laozuxian.png',


        })

      }




    } else if (num == 1) {

      var wangji = this.data.characters.wangji

      if (wangji.life < wangji.level1) {
        this.setData({
          'characters.wangji.percent': wangji.life / wangji.level1 * 100,
          'characters.wangji.totallife': wangji.level1

        })


      } else if (wangji.life >= wangji.level1 && wangji.life < wangji.level2) {
        this.setData({

          'characters.wangji.percent': (wangji.life - wangji.level1) / (wangji.level2 - wangji.level1) * 100,
          'characters.wangji.totallife': (wangji.level2 - wangji.level1),
          'characters.wangji.title': '少年机',
          'characters.wangji.pic': 'http://pwh.img.jogiter.cn/modao/shaonianji.png',


        })

      } else if (wangji.life >= wangji.level2) {

        this.setData({

          'characters.wangji.percent': (wangji.life - wangji.level2) / (wangji.level3 - wangji.level2) * 100,
          'characters.wangji.totallife': (wangji.level3 - wangji.level2),
          'characters.wangji.title': '含光君',
          'characters.wangji.pic': 'http://pwh.img.jogiter.cn/modao/hanguangjun.png',


        })

      }









    }





  },





  feed(i) {

    var date = new Date()

    const today = date.getFullYear() + date.getMonth() + date.getDate()

    var that = this

    if (i == 0) {

      that.setData({
        'characters.wuxian.life': that.data.characters.wuxian.life + 10
      })

      console.log(that.data.characters.wuxian.life);
      that.count(0);
      wx.setStorage({
        key: 'wuxian',
        data: {
          life: that.data.characters.wuxian.life,
          date: today
        }
      })


    } else if (i == 1) {


      that.setData({
        'characters.wangji.life': that.data.characters.wangji.life + 10
      })
      that.count(1);
      wx.setStorage({
        key: 'wangji',
        data: {
          life: that.data.characters.wangji.life,
          date: today
        }
      })





    }




  },


  onLoad() {

    var that = this


    const fs = wx.getFileSystemManager()
    console.log(`${qq.env.USER_DATA_PATH}`)







    fs.access({
      path: `${wx.env.USER_DATA_PATH}/qcode.png`,
      success(res) {
        console.log(`${wx.env.USER_DATA_PATH}/qcode.png`);

      },
      fail() {
        console.log('11');

        wx.downloadFile({
          url: 'https://cloud-minapp-30809.cloud.ifanrusercontent.com/1iIaA9TSNMy6XCB3.png',
          filePath:`${wx.env.USER_DATA_PATH}/qcode.png`,
          success(res) {


            console.log(res); // res.savedFilePath 为一个本地缓存文件路径
            // 此时图片本地缓存已经完成，res.savedFilePath为本地存储的路径。

            // that.setData({
            //   qcode: res.filePath
            // })






          },
          fail(res){
            console.log(res);
          }



        })

      }


    })


    fs.access({
      path: `${qq.env.USER_DATA_PATH}/qqzone.png`,
      success(res) {
        console.log(`${qq.env.USER_DATA_PATH}/qqzone.png`);
      },
      fail(res) {
        wx.downloadFile({
          url: 'https://cloud-minapp-30809.cloud.ifanrusercontent.com/1iIZxkmeUZNQuVCV.png',
          filePath: `${qq.env.USER_DATA_PATH}/qqzone.png`,
          success(res) {


            console.log(res) // res.savedFilePath 为一个本地缓存文件路径
            // 此时图片本地缓存已经完成，res.savedFilePath为本地存储的路径。
            that.setData({
              qqzone: res.filePath
            })





          }



        })

      }

    })




    const wuxian = wx.getStorageSync('wuxian')
    const wangji = wx.getStorageSync('wangji')

    if (wuxian) {

      this.setData({
        'characters.wuxian.life': wuxian.life
      })

      this.count(0);

    }


    if (wangji) {

      this.setData({
        'characters.wangji.life': wangji.life
      })

      this.count(1);

    }









  },



})
