

Page({
data:{
  background:'http://pwh.img.jogiter.cn/modao/mogaiback.png',
  zhangs:[
    {
      zhangjie:'第一章',
      title:'血洗莲花坞'
    },
    {
      zhangjie:'第二章',
      title:'敬请期待…'
    }
  ]
},

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '魔道祖师逆天改命之书',
      path:'/pages/mogai/mogai'

    }
  },

  onLoad(){

    // //
    //     var that = this
    //
    //     const path = wx.getStorageSync('mogaiback')
    //     if (path) {
    //       console.log('path====', path)
    //       this.setData({
    //         background: path
    //       })
    //     } else {
    //       console.log('去缓存图片')
    //
    //       wx.downloadFile({
    //           url: 'https://pwh.img.jogiter.cn/modao/mogaiback.png',
    //           success: function(res) {
    //             if (res.statusCode === 200) {
    //               console.log('图片下载成功' + res.tempFilePath)
    //
    //               const fs = wx.getFileSystemManager()
    //
    //               fs.saveFile({
    //                 tempFilePath: res.tempFilePath, // 传入一个临时文件路径
    //                 success(res) {
    //                   console.log('图片缓存成功', res.savedFilePath) //
    //                   wx.setStorageSync('mogaiback', res.savedFilePath)
    //                   const path = wx.getStorageSync('mogaiback')
    //                   that.setData({
    //                     background: path
    //                   })
    //
    //                 }
    //               })
    //             } else {
    //               console.log('响应失败', res.statusCode)
    //             }
    //           }
    //         })
    //       }
    //       //
  }


})
