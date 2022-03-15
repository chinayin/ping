/**
 * 是否mac系统
 * @returns {boolean}
 */
export const isMac = () => {
  return navigator.platform === 'MacIntel'
}

/**
 * 是否支持cookie
 * @returns {boolean}
 */
export const isSupportCookie = () => {
  return document.cookie || navigator.cookieEnabled ? true : false
}

/**
 * 是否支持localStorage
 * @returns {boolean}
 */
export const isSupportLocalstorage = () => {
  return window.localStorage ? true : false
}

/**
 * 获取浏览器UA
 * @returns {string}
 */
export const getUAString = () => {
  return navigator.userAgent
}

/**
 * 获取浏览器语言
 * @returns {string}
 */
export const getLanguageString = () => {
  return navigator.language
}

/**
 * 获取屏幕信息
 * @returns {string}
 */
export const getScreenInfo = () => {
  return window.screen.width + 'x' + window.screen.height
}

/**
 * 获取平台
 * @returns {string}
 */
export const getPlatform = () => {
  let ua = navigator.userAgent
  if (/\bAndroid\s*([^;]+)/.test(ua)) {
    return 'Android'
  } else if (/\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(ua)) {
    return 'iOS'
  }
  return 'Other'
}

/**
 * 获取系统信息
 * @returns {string}
 */
export const getOSInfo = () => {
  let item, token, ua, _i, _len
  ua = navigator.userAgent
  token = [
    ['Windows NT 5.1', 'WinXP'],
    ['Windows NT 6.0', 'WinVista'],
    ['Windows NT 6.1', 'Win7'],
    ['Windows NT 5.2', 'Win2003'],
    ['Windows NT 5.0', 'Win2000'],
    ['Macintosh', 'Macintosh'],
    ['Windows', 'WinOther'],
    ['Ubuntu', 'Ubuntu'],
    ['Linux', 'Linux']
  ]
  for (_i = 0, _len = token.length; _i < _len; _i++) {
    item = token[_i]
    if (ua.indexOf(item[0]) > -1) {
      return item[1]
    }
  }
  return 'Other'
}

/**
 * 获取浏览器信息
 * @returns {string}
 */
export const getBrowserInfo = () => {
  let item, token, ua, _i, _len
  ua = navigator.userAgent
  token = ['Opera', 'Chrome', 'Safari', 'MSIE 6', 'MSIE 7', 'MSIE 8', 'Firefox']
  for (_i = 0, _len = token.length; _i < _len; _i++) {
    item = token[_i]
    if (ua.indexOf(item) > -1) {
      return item.replace(' ', '')
    }
  }
  return 'Other'
}
