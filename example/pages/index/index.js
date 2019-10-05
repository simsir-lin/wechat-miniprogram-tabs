Page({
  change: function (e) {
    this._toast(`已切换第${e.detail.index + 1}个标签页`)
  },
  tap: function () {
    this._toast(`tap`)
  },
  _toast(msg) {
    wx.showToast({
      title: `${msg}`,
      icon: 'none',
      duration: 2000
    })
  }
})
