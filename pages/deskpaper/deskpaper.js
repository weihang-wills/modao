var videoAd = null;
Page({

  data: {
    current: 0,
    flow: ['https://ftp.bmp.ovh/imgs/2019/11/1e0a53879057889b.jpg',
      'https://ftp.bmp.ovh/imgs/2019/11/54f493604217198f.jpeg',
      'http://pwh.img.jogiter.cn/bizhi/3.jpg',
    ],
    avatars: [{
        left: 'https://ftp.bmp.ovh/imgs/2019/11/1e0a53879057889b.jpg',
        right: 'https://ftp.bmp.ovh/imgs/2019/11/54f493604217198f.jpeg'
      },
      {
        left: 'https://ftp.bmp.ovh/imgs/2019/11/54f493604217198f.jpeg',
        right: 'http://pwh.img.jogiter.cn/bizhi/3.jpg'
      },


    ],
    src: '',
    video: true,
    ad: false,



  },

  changeswiper(e) {
    this.setData({
      current: parseInt(e.target.dataset.swiper),
    })
  },

  preview(src) {
    var src = src
    wx.previewImage({
      urls: [src],
    })

  },

  add(e) {

    console.log(e.target.dataset.src);
    this.setData({
      src: e.target.dataset.src
    })
    if (this.data.video) {

      videoAd.load().then(() => {
        console.log('激励视频加载成功');

        videoAd.show().then(() => {
          console.log('激励视频 广告显示成功')
        }).catch(err => {
          console.log('激励视频 广告显示失败')
        })
      }).catch(err => {
        console.log('激励视频加载失败');
      })

    } else {

      this.setData({
        ad: true,
      })



    }


  },

  tapad() {
    this.setData({
      ad: false,
    })

    this.preview(this.data.src)
  },


  onLoad() {

    var that = this;

    videoAd = qq.createRewardedVideoAd({
      adUnitId: '89090865fe14a8631a25252f23b58517',
    })

    videoAd.onError(function(res) {
      console.log('videoAd onError', res)
      that.setData({
        video: false,
      })

    })
    videoAd.onLoad(function(res) {
      console.log('videoAd onLoad', res)
    })
    videoAd.onClose(function(res) {
      console.log('videoAd onClose', res)
      if (res && res.isEnded) {
        that.preview(that.data.src)

      } else {
        wx.showModal({
          title: '未看完视频哦',
          content: '需要看完视频才能获取壁纸哦',
          showCancel:false,
        })
      }

    })

    // 获取壁纸list

    let table = new wx.BaaS.TableObject('bizhi')

    table.orderBy('-created_at').limit(50).find().then(res => {

      console.log(res);

      var arr = res.data.objects.map(item => {
        return item.src
      })

      that.setData({
        flow: arr,

      })



    })

    let table2 = new wx.BaaS.TableObject('avatar')

    table2.orderBy('-created_at').limit(50).find().then(res => {

      console.log(res);

      var arr = res.data.objects.map(item => {
        return item.src
      })

      that.setData({
        avatars: arr,

      })



    })








  },







})
