// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju: [
      {
        number: '1286',
        content: '关注'
      },
      {
        number: '3368',
        content: '粉丝'
      },
      {
        number: '6673',
        content: '喜欢'
      }
    ],
    shuju1: [
      {
        number: '个人信息',
        content: '>'
      },
      {
        number: '我的消息',
        content: '>'
      },
      {
        number: '账户余额',
        content: '>'
      },
      {
        number: '我的评论',
        content: '>'
      }
    ]
  },

  yve: function (event) {
    var a = event.currentTarget.dataset.lin
    if (a == '账户余额') {
      wx.navigateTo({
        url: '../yve/yve'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})