import messages from '../locales'
import { format } from './utils'

const language = (navigator.language || navigator.userLanguage).toLowerCase().replace('-', '_'),
  locale = language.substr(0, 2)

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
