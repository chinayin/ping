import jQuery from "jquery";
import { guid } from "./utils";

/**
 * jsonp
 * @param url
 * @param cb
 */
export const jsonp = (url, cb) => {
  return jQuery.ajax({
    url: url,
    dataType: 'jsonp',
    timeout: 10000,
    jsonp: 'cb',
    success: cb
  })
}

/**
 * isSameOrigin
 * @param url
 * @returns {boolean}
 */
export const isSameOrigin = url => {
  let a = document.createElement('a')
  a.href = url
  return location.origin === a.origin
}

/**
 * 拼接参数网址
 * @param url
 * @param param
 * @returns {string}
 */
export const param = (url, param) => {
  if (typeof url !== 'string') return ''
  if (typeof param === 'object' && param) {
    let paramStr = Object.getOwnPropertyNames(param)
      .map(key => {
        let v = param[key]
        return key + '=' + (typeof v === 'string' ? encodeURIComponent(v) : encodeURIComponent(JSON.stringify(v)))
      })
      .join('&')
      .replace(/eval/gi, 'evaI')
    return '' + url + (url.indexOf('?') === -1 ? '?' : '&') + paramStr
  } else {
    return url
  }
}

/**
 * 获取LocalDNS信息
 * @param cb
 * @returns {*}
 */
export const getLocalDNS = cb => {
  let uuid = guid(),
    url = `https://${uuid}.dns-detect.alicdn.com/api/detect/DescribeDNSLookup`
  return jsonp(url, cb)
}

/**
 * 检测图片CDN信息
 * @param imgs
 * @param cb
 * @returns {*[]}
 */
export const getImageCDNStatus = (imgs, cb) => {
  let check, count, item, _i, _len, _results
  count = 0
  check = () => {
    let arr, item
    count = count + 1
    if (count < imgs.length) {
      return
    }
    arr = (() => {
      let _i, _len, _results
      _results = []
      for (_i = 0, _len = imgs.length; _i < _len; _i++) {
        item = imgs[_i]
        if (item[3]) {
          _results.push(item)
        }
      }
      return _results
    })()
    return typeof cb === 'function' ? cb(arr.length, imgs.length) : void 0
  }
  _results = []
  for (_i = 0, _len = imgs.length; _i < _len; _i++) {
    item = imgs[_i]
    _results.push(
      (() => {
        let height, img, j, sep, source, width
        ;(source = item[0]), (width = item[1]), (height = item[2])
        img = new Image()
        sep = source.indexOf('?') > -1 ? '&' : '?'
        img.src = '' + source + sep + 't=' + +new Date()
        j = item
        img.onload = () => {
          j.push(img.width === width && img.height === height)
          return check()
        }
        return (img.onerror = () => {
          j.push(false)
          return check()
        })
      })()
    )
  }
  return _results
}

/**
 * 检测静态资源CDN信息
 * @param cb
 */
export const getAssetsCDNStatus = (url, cb) => {
  let t = +new Date()
  return jQuery.ajax({
    url: url,
    dataType: 'script',
    timeout: 10000,
    success: (data, status, xhr) => {
      return cb(1, +new Date() - t)
    },
    error: (xhr, status, err) => {
      return cb(0, +new Date() - t)
    },
    complete: (xhr, status) => {}
  })
}

/**
 * 检查网页状态
 * @param url
 * @param cb
 */
export const getUrlStatus = (url, cb) => {
  let t = +new Date()
  return jQuery.ajax({
    url: url,
    dataType: 'script',
    timeout: 10000,
    success: (data, status, xhr) => {
      return cb(1, +new Date() - t)
    },
    error: (xhr, status, err) => {
      return cb(0, +new Date() - t)
    },
    complete: (xhr, status) => {}
  })
}

/**
 * 获取页面via
 * @param url
 * @param cb
 */
export const getUrlVia = (url, cb) => {
  let xhr = null
  if (window.XMLHttpRequest) {
    // code for IE7, Firefox, Opera, etc.
    xhr = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    // code for IE6, IE5
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  if (xhr != null) {
    xhr.onreadystatechange = stateChange
    xhr.open('GET', url, true)
    xhr.send(null)
  } else {
    alert('Your browser does not support XMLHTTP.')
  }

  function stateChange() {
    if (xhr.readyState == 4) {
      cb(xhr.getAllResponseHeaders())
    }
  }
}

/**
 * 获取网络类型
 * @returns {string}
 */
export const getNetworkType = () => {
  let ua = navigator.userAgent,
    networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other'
  networkStr = networkStr.toLowerCase().replace('nettype/', '')
  switch (networkStr) {
    case 'wifi':
      return 'Wifi'
    case '4g':
      return '4g'
    case '3g':
    case '3gnet':
      return '3g'
    case '2g':
      return '2g'
    default:
      return 'Other'
  }
}
