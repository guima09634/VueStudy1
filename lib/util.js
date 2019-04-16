export default {
  isBlank: function (obj) {
    return !obj || !/\S/.test(obj) || obj === 'undefined' || obj === 'null'
  },

  format (dateStr, format) {
    var o = {
      'M+': dateStr.getMonth() + 1,
      'd+': dateStr.getDate(),
      'h+': dateStr.getHours(),
      'm+': dateStr.getMinutes(),
      's+': dateStr.getSeconds(),
      'q+': Math.floor((dateStr.getMonth() + 3) / 3),
      'S': dateStr.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (dateStr.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  },

  getFormatDate (dateStr, pattern) {
    if (!dateStr) {
      dateStr = new Date()
    } else {
      dateStr = new Date(dateStr)
    }
    if (!pattern) {
      pattern = 'yyyy-MM-dd hh:mm:ss'
    }
    return this.format(dateStr, pattern)
  },

  delCookie (name) {
    this.addCookie(name, '', 1 / 3600)
  },

  clearCookie () {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g)
    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].indexOf('__') !== 0) {
          this.delCookie(keys[i])
        }
      }
    }
  },

  getCookie: function (objName) {
    var arrStr = document.cookie.split('; ')
    for (var i = 0; i < arrStr.length; i++) {
      var current = arrStr[i].replace('=', '$=')
      var temp = current.split('$=')
      try {
        if (temp[0] === objName) return decodeURIComponent(temp[1])
      } catch (e) {
        if (temp[0] === objName) return unescape(temp[1])
      }
    }
    return ''
  },

  addCookie (objName, objValue, objHours) {
    var str = objName + '=' + encodeURIComponent(objValue)
    objHours = objHours || 24 // cookie有效期默认为24h
    if (objHours > 0) { // 为时不设定过期时间，浏览器关闭时cookie自动消失
      var date = new Date()
      var ms = objHours * 3600 * 1000
      date.setTime(date.getTime() + ms)
      str += '; expires=' + date.toUTCString()
    }
    if (this.isBlank(location.port)) {
      str += '; domain=.efun.com'
    }
    str += '; path=/'
    document.cookie = str
  },

  setStorage (key, json) {
    try {
      if (!this.isBlank(this.getStorage(key))) { // ios 存在的 直接覆蓋不了的問題
        this.removeStorage(key)
      }
      window.localStorage.setItem(key, JSON.stringify(json))
    } catch (e) {
      this.addCookie(key, JSON.stringify(json))
    }
  },

  removeStorage (key) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      this.delCookie(key)
    }
  },

  clearStorage (key) {
    if (key) {
      localStorage.removeItem(key)
    } else {
      window.localStorage.clear()
    }
  },

  getStorage (key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || JSON.parse(this.getCookie(key))
    } catch (e) {
      if (!this.isBlank(this.getCookie(key))) {
        return JSON.parse(this.getCookie(key))
      } else {
        return null
      }
    }
  },

  sessionStorage: {
    setItem (key, value) {
      const data = {
        value,
        createTime: Date.parse(new Date())
      }
      return sessionStorage.setItem(key, JSON.stringify(data))
    },
    getItem (key) {
      const dataString = sessionStorage.getItem(key)
      if (!dataString) return ''
      return JSON.parse(dataString).value
    },
    clear () {
      sessionStorage.clear()
    },
    removeItem (key) {
      return sessionStorage.removeItem(key)
    }
  },

  getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  }
}
