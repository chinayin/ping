import * as browser from '../libs/browser'
import * as network from '../libs/network'
import { label, querySelector as $, toThousands } from '../libs/utils'
import { $t } from '../libs/locales'

export default function inspection() {
  let lines = [],
    webUrls = [],
    inspection = []

  /**
   * 测速结果输出
   * @param success 结果
   * @param ms  毫秒数值
   */
  const speedTest = (id, success, ms) => {
    let flag = success ? label($t('successful'), 'g') : label($t('failed'), 'r')
    $(`#${id}`).innerHTML = `${flag}   ${toThousands(ms)}ms`
  }

  /**
   * 画界面
   */
  const init = () => {
    document.title = $t('title')
    $('#title span').innerHTML = $t('title')
    $('#privacy_policy').innerHTML = $t('privacy_policy')

    inspection = [
      {
        title: $t('basic_information'),
        items: [
          { name: $t('system_time'), val: new Date() },
          { name: $t('ua_information'), val: browser.getUAString() },
          { name: $t('system_information'), val: browser.getOSInfo() },
          { name: $t('web_browser_information'), val: browser.getBrowserInfo() },
          { name: $t('language_information'), val: browser.getLanguageString() },
          { name: $t('network_type'), val: network.getNetworkType() },
          {
            name: $t('javascript_status'),
            val: label(`${$t('enable')} (${$t('version_number')}：` + JS_VERSION + ')', 'g')
          },
          {
            name: $t('cookie_status'),
            val: browser.isSupportCookie() ? label($t('enable'), 'g') : label($t('disable'), 'r')
          },
          {
            name: $t('localstorage_status'),
            val: browser.isSupportLocalstorage() ? label($t('enable'), 'g') : label($t('disable'), 'r')
          }
        ]
      },
      {
        title: $t('internet_information'),
        items: [
          { name: `${$t('local')} IP`, val: $t('testing'), id: 's_local_ip' },
          { name: 'Local DNS', val: $t('testing'), id: 's_local_dns' },
          { name: `${$t('picture')} CDN`, val: $t('testing'), id: 's_cdn_image' },
          { name: `${$t('static')} CDN`, val: $t('testing'), id: 's_cdn_assets' },
          //
          {
            name: $t('web_uhomes_api'),
            val: $t('testing'),
            id: 's_web_uhomes_api',
            url: 'https://api.uhomes.com/robots.txt'
          },
          {
            name: $t('web_taobao'),
            val: $t('testing'),
            id: 's_web_taobao',
            url: 'https://www.taobao.com'
          },
          {
            name: $t('web_sina'),
            val: $t('testing'),
            id: 's_web_sina',
            url: 'https://www.sina.com'
          },
          {
            name: $t('web_qq'),
            val: $t('testing'),
            id: 's_web_qq',
            url: 'https://www.qq.com'
          },
          {
            name: $t('web_bbc'),
            val: $t('testing'),
            id: 's_web_bbc',
            url: 'https://www.bbc.com'
          },
          {
            name: $t('web_cnn'),
            val: $t('testing'),
            id: 's_web_cnn',
            url: 'https://cnn.com'
          }
        ]
      }
    ]
    inspection.forEach((elem, index) => {
      lines.push(`<h3><span>${elem.title}：</span></h3>`)
      elem.items.forEach((item, index2) => {
        lines.push(
          `<div><span class="label">${item.name}：</span><span class="norm" id="${item.id}">${item.val}</span></div>`
        )
        // 加入网址检测
        if (item.url && item.id) {
          webUrls.push({ id: item.id, url: item.url })
        }
      })
    })
    $('#content').innerHTML = lines.join('\n')
  }

  /**
   * 检测
   */
  const start = () => {
    init()

    network.getLocalDNS(data => {
      $('#s_local_ip').innerHTML = data.content.localIp || ''
      $('#s_local_dns').innerHTML = data.content.ldns || ''
    })

    network.getImageCDNStatus(
      [
        ['https://image.uhzcdn.com/default.png', 560, 314],
        ['https://img.uhzcdn.com/static/general/default_house.jpg', 750, 420],
        ['https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg', 80, 80]
      ],
      (success, total) => {
        let flag = success === total ? label($t('successful'), 'g') : label($t('failed'), 'r')
        $('#s_cdn_image').innerHTML = `${flag}，${$t('pic_cdn_result', total, success)}`
      }
    )

    network.getAssetsCDNStatus('https://pcpic.uhomes.com/static/lodash/lodash-4.17.15.min.js', (success, ms) => {
      speedTest('s_cdn_assets', success, ms)
    })

    webUrls.forEach((item, index) => {
      network.getUrlStatus(item.url, (success, ms) => {
        speedTest(item.id, success, ms)
      })
    })
  }

  return {
    start
  }
}
