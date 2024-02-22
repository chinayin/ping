import messages from '@/locales'
import { format } from './utils'

/**
 * 检测语言
 * @returns {string}
 */
export const detectLocale = () => {
  let language = (navigator.language || navigator.userLanguage).toLowerCase().replace('-', '_'),
    locale = language
  if (language === 'zh_tw') locale = 'zh_hk'
  if (messages.hasOwnProperty(locale)) return locale
  locale = language.substr(0, 2)
  if (messages.hasOwnProperty(locale)) return locale
  return 'zh'
}

const locale = detectLocale()

/**
 * 多语言支持
 * @param key
 * @param args
 * @returns {*}
 */
export const $t = (key, ...args) => {
  if (args.length > 0) return format(messages?.[locale]?.[key] ?? key, ...args)
  return messages?.[locale]?.[key] ?? key
}
