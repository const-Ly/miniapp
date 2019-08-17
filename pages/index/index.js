const UTIL = require("../../utils/util.js")
const API = require("../../common/config/api.js")
console.log(API)
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello ',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
		const _this = this;
		UTIL.byRequest({
			url: API.getName,
			method: "get",
			success: function(res){
				_this.setData({
					name: "袁飞"
				})
			}
		})
    },
    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})