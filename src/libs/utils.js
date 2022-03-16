/**
 * 生成guid
 * @returns {string}
 */
export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * 生成rand53
 * @returns {number}
 */
export const rand53 = () => {
  return parseInt(
    new Array(53)
      .fill(1)
      .map(function () {
        return Math.random() > 0.5 ? 1 : 0
      })
      .join(''),
    2
  )
}

/**
 * 生成千分制
 * @param num
 * @returns {string}
 */
export const toThousands = num => {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

/**
 *
 * @param selectors
 * @returns {*}
 */
export const querySelector = selectors => {
  return document.querySelector(selectors)
}

/**
 *
 * @param str
 * @param color
 * @returns {`<span class="${string}">${string}</span>`}
 */
export const label = (str, color) => {
  return `<span class="${color}">${str}</span>`
}
