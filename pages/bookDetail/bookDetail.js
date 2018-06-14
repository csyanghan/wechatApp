// pages/bookDetail/bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showFull: false,
    catalog: [{
      type: 'text',
      text: ''
    }],
    caFull: false,
    isbn: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      isbn: options.isbn
    })
    console.log(options)
    let URL = 'https://douban.uieee.com/v2/book/isbn/' + options.isbn
    // let URL = 'https://douban.uieee.com/v2/book/isbn/' + '9787506365437'
    console.log(URL)
    wx.request({
      url: URL,
      header: {
        'Content-Type': 'json'
      },
      success: (res) => {
        wx.hideLoading()
        that.setData({
          bookInfo: res.data,
          'catalog[0].text': res.data.catalog ? res.data.catalog:'',
        })
      }
    })
  },
  getFull: function() {
    this.setData({
      showFull: !this.data.showFull
    })
  },
  getcaFull: function() {
    this.setData({
      caFull: !this.data.caFull
    })
  },
  addTo: function(){
    var that = this
    let i=0;
    for(i=0; i<10;i++){
      let key = 'book' + i
      let value = wx.getStorageSync(key)
      if(!value) {
        let book = {
          'image': that.data.bookInfo.images.medium,
          'title': that.data.bookInfo.title,
          'author': that.data.bookInfo.author[0],
          'publisher': that.data.bookInfo.publisher,
          'pubdate': that.data.bookInfo.pubdate,
          'pages': that.data.bookInfo.pages,
          'price': that.data.bookInfo.price,
          'isbn': that.data.isbn
        }
        wx.setStorage({
          key: key,
          data: book,
          success: ()=>{
            wx.showToast({
              title: '添加成功',
              icon: 'success',
            })
          }
        })
        break;
      } else{
        wx.showToast({
          title: '已在书架'
        })
        break;
      }
    }
  },
})