const app = getApp()

Page({
      data: {
        logs: [],
        background: 'http://pwh.img.jogiter.cn/backgroundindex.png',
      },
      onLoad: function() {

        var that = this

        // const path = wx.getStorageSync('image_cache')
        // if (path) {
        //   console.log('path====', path)
        //   this.setData({
        //     background: path
        //   })
        // } else {
        //   console.log('去缓存图片')
        //
        //   wx.downloadFile({
        //       url: 'https://pwh.img.jogiter.cn/backgroundindex.png',
        //       success: function(res) {
        //         if (res.statusCode === 200) {
        //           console.log('图片下载成功' + res.tempFilePath)
        //
        //           const fs = wx.getFileSystemManager()
        //
        //           fs.saveFile({
        //             tempFilePath: res.tempFilePath, // 传入一个临时文件路径
        //             success(res) {
        //               console.log('图片缓存成功', res.savedFilePath) //
        //               wx.setStorageSync('image_cache', res.savedFilePath)
        //               const path = wx.getStorageSync('image_cache')
        //               that.setData({
        //                 background: path
        //               })
        //
        //             }
        //           })
        //         } else {
        //           console.log('响应失败', res.statusCode)
        //         }
        //       }
        //     })
        //   }




        },

        getUserInfo: function(e) {
            console.log(e)
            app.globalData.userInfo = e.detail.userInfo
            this.setData({
              userInfo: e.detail.userInfo,
              hasUserInfo: true
            })
          },

          notopen: function(e) {

            console.log(e);
            wx.showModal({
              title: '场景暂未开放',
              content: '敬请期待哦',
              showCancel: false,
              confirmText: '好的',
              success(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
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
              title: '魔道祖师爆笑测试等你来玩',
              path: '/pages/newindex/newindex'

            }
          },






      })
