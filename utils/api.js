var domain = 'https://pangweihang.cn'



function request(url, data, callback) {
    var url = domain + url
    wx.request({
      url: url,
      data: data,
      success(res) {
        callback(res)
      }
    })
  }

var https = {
  request,
}


module.exports = https;
