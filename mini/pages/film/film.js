// pages/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:'film',
    activeClass:0
  },
  changeTab:function(e){
    let num=e.target.dataset.index-0;
    switch(num){
      case 0:
        this.setData({
          item:'film',
          activeClass:num
        });
        break;
      case 2:
        this.setData({
          item:'newfilm',
          activeClass:num
        });
        break;
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