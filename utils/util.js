const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
/**
 * @authors ly
 * @date    2018-06-12
 * 封装微信请求
 */
const byRequest = obj => {
    const header = {};
    const method = obj.method.toUpperCase() || 'POST';

    if (method === 'POST') {
        header['content-type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    } else if (method === 'GET') {
        header['content-type'] = 'application/json';
    }
    wx.request({
        url: obj.url,
        method: method,
        data: obj.data,
        dataType: 'json',
        header: header,
        success: res => {
            if (res.statusCode === 200) {
                obj.success && obj.success(res);
            } else {
                obj.fail && obj.fail(res);
            }
        },
        fail: function(res) {
            obj.fail && obj.fail(res);
        },
        complete: function(res) {
            obj.complete && obj.complete(res);
        }
    })
}

module.exports = {
    formatTime,
    byRequest
}