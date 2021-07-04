// pages/posts/post-detail/post-detail.js
var postsData=require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected:false
  },
  onShareTap:function(){
    wx.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  onColletionTap:function(){
    let isCollected=wx.getStorageSync('postsCollected')
    this.data.collected=isCollected[this.data.postId]
      wx.showToast({
        title: this.data.collected?'取消收藏':'已收藏',
        icon: 'success',
        success:()=>{
          this.setData({
            collected:!this.data.collected
          })
          isCollected[this.data.postId]=this.data.collected
          wx.setStorageSync('postsCollected',isCollected)
        }
      })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let isCollected=wx.getStorageSync('postsCollected'),postsCollected
    let postId=options.id
    if(!isCollected){
      postsCollected=new Array(postsData.postList.length)
      wx.setStorageSync('postsCollected',postsCollected)
    }else{
      this.setData({
        collected:isCollected[postId]
      })
    }
    this.data.postId=postId
    let postData=postsData.postList[postId]
    this.setData({...postData})
    
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