// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju: [
      {
        tupian: '../img/fabu1.png',
        content: '三体：死神永生',
        author: "刘慈欣"
      },
      {
        tupian: '../img/fabu2.png',
        content: '人类简史',
        author: "尤瓦尔·赫拉利"
      },
      {
        tupian: '../img/fabu3.png',
        content: '许三观卖血记',
        author: "余华"
      }
    ]
  },

  book: function (event) {
    wx.navigateTo({
      url: "../book/book"
    })
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