//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    shuju: [
      {
        tupian: '../img/paihang1.png',
        content: '科幻'
      },
      {
        tupian: '../img/paihang2.png',
        content: '生活'
      },
      {
        tupian: '../img/paihang3.png',
        content: '露营'
      },
      {
        tupian: '../img/paihang4.png',
        content: '职场'
      }
    ],
    shuju2: [
      {
        tupian: '../img/paihang5.png',
        content: '刘慈欣'
      },
      {
        tupian: '../img/paihang6.png',
        content: '田小花'
      },
      {
        tupian: '../img/paihang7.png',
        content: '马尔克斯'
      },
      {
        tupian: '../img/paihang8.png',
        content: '徐秋雨'
      }
    ],
    shuju3: [
      {
        tupian: '../img/fabu1.png',
        content: '三体:死神永生',
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
      },
      {
        tupian: '../img/fabu4.png',
        content: '未来简史',
        author: "尤瓦尔·赫拉利"
      },
      {
        tupian: '../img/fabu5.png',
        content: '自私的基因',
        author: "理查德·道金斯"
      },
      {
        tupian: '../img/fabu6.png',
        content: '百年孤独',
        author: "马尔克斯"
      }
    ],
    shuju4: [
      {
        tupian: '../img/paihang15.png',
        content: '三体：死神永生',
        author: "作者：刘慈欣",
        xiangqing: "刘慈欣创作的系列长篇科幻小说地球往返三部曲的第三部作品"
      },
      {
        tupian: '../img/paihang12.png',
        content: '未来简史',
        author: "作者：尤瓦尔·赫拉利",
        xiangqing: "刘慈欣创作的系列长篇科幻小说地球往返三部曲的第三部作品"
      }
    ]
  },
  kehuan: function (event) {
    wx.navigateTo({
      url: "../kehuan/kehuan"
    })
  },
  fenlei: function (event) {
    wx.navigateTo({
      url: "../fenlei/fenlei"
    })
  },
  author: function (event) {
    wx.navigateTo({
      url: "../author/author"
    })
  },
  search: function (event) {
    wx.navigateTo({
      url: "../search/search"
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
