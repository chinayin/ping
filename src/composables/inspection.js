import * as browser from '../libs/browser'
import * as network from '../libs/network'
import { label, querySelector as $, toThousands } from '../libs/utils'

export default function inspection() {
  let lines = [],
    webUrls = [],
    inspection = []

  /**
   * 测速结果输出
   * @param success 结果
   * @param ms  毫秒数值
   */
  const speedtest = (id, success, ms) => {
    let flag = success ? label('连接成功', 'g') : label('连接失败', 'r')
    $(`#${id}`).innerHTML = `${flag}   ${toThousands(ms)}ms`
  }

  /**
   * 画界面
   */
  const init = () => {
    inspection = [
      {
        title: '基础信息',
        items: [
          { name: '系统时间', val: new Date() },
          { name: 'UA信息', val: browser.getUAString() },
          { name: '系统信息', val: browser.getOSInfo() },
          { name: '浏览器信息', val: browser.getBrowserInfo() },
          { name: '语言信息', val: browser.getLanguageString() },
          {
            name: 'JavaScript 状态',
            val: label('开启 (版本号：' + JS_VERSION + ')', 'g')
          },
          {
            name: 'Cookie 状态',
            val: browser.isSupportCookie() ? label('开启', 'g') : label('禁用', 'r')
          },
          {
            name: 'LocalStorage 状态',
            val: browser.isSupportLocalstorage() ? label('开启', 'g') : label('禁用', 'r')
          }
        ]
      },
      {
        title: '网络信息',
        items: [
          { name: '本地 IP', val: '检测中...', id: 's_local_ip' },
          { name: 'Local DNS', val: '检测中...', id: 's_local_dns' },
          { name: '图片 CDN', val: '检测中...', id: 's_cdn_image' },
          { name: '静态 CDN', val: '检测中...', id: 's_cdn_assets' },
          //
          {
            name: '异乡 API',
            val: '检测中...',
            id: 's_web_uhomes_api',
            url: 'https://api.uhomes.com/robots.txt'
          },
          {
            name: '淘宝首页',
            val: '检测中...',
            id: 's_web_taobao',
            url: 'https://www.taobao.com'
          },
          {
            name: '新浪首页',
            val: '检测中...',
            id: 's_web_sina',
            url: 'https://www.sina.com'
          },
          {
            name: '腾讯首页',
            val: '检测中...',
            id: 's_web_qq',
            url: 'https://www.qq.com'
          },
          {
            name: 'BBC首页',
            val: '检测中...',
            id: 's_web_bbc',
            url: 'https://www.bbc.com'
          },
          {
            name: 'CNN首页',
            val: '检测中...',
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
        let flag = success === total ? label('连接成功', 'g') : label('连接失败', 'r')
        $('#s_cdn_image').innerHTML = `${flag}，共尝试 ${total} 张图片，其中 ${success} 张解析正常`
      }
    )

    network.getAssetsCDNStatus('https://pcpic.uhomes.com/static/lodash/lodash-4.17.15.min.js', (success, ms) => {
      speedtest('s_cdn_assets', success, ms)
    })

    webUrls.forEach((item, index) => {
      network.getUrlStatus(item.url, (success, ms) => {
        speedtest(item.id, success, ms)
      })
    })
  }

  return {
    start
  }
}
