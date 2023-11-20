export default {
  name: 'link2',
  switchLangHref: 'https://snapmaker.com',
  products: {
    title: '产品',
    iLink: '/products',
    child: [
      {
        title: 'Snapmaker 初代',
        iLink: 'Snapmaker Original',
        key: 'Snapmaker Original'
      },
      {
        title: 'Snapmaker 2.0',
        iLink: 'Snapmaker 2.0',
        key: 'Snapmaker 2.0'
      }
    ]
  },
  support: {
    title: '服务与支持',
    iLink: 'https://snapmaker.zendesk.com/hc/zh-cn',
    child: [
      {
        title: 'Snapmaker 初代',
        iLink: 'https://support.snapmaker.com/hc/zh-cn/categories/4403461255959-Snapmaker-Original',
        key: 'Snapmaker初代'
      },
      {
        title: 'Snapmaker 2.0',
        iLink: 'https://support.snapmaker.com/hc/zh-cn/categories/360001781913-Snapmaker-2-0',
        key: 'Snapmaker 2.0'
      },
      {
        title: 'Snapmaker 学院',
        key: 'Repair Service',
        iLink: 'https://support.snapmaker.com/hc/zh-cn/categories/360003536313-Snapmaker-%E5%AD%A6%E9%99%A2'
      },
      {
        title: '下载',
        key: 'Download',
        iLink: 'https://support.snapmaker.com/hc/zh-cn/categories/360005617793-Download'
      }
    ]
  },
  company: {
    title: '公司',
    child: [
      {
        title: '关于我们',
        key: 'About Us',
        iLink: '/about'
      },
      {
        title: '新闻中心',
        key: 'Press',
        iLink: '/press'
      }
      // {
      //   title: 'Affiliate Program',
      //   key: 'Affiliate',
      //   iLink: '/affiliate'
      // }
    ],
    campaign: {
      title: 'Kickstarter 活动',
      oLink: 'https://www.kickstarter.com/profile/snapmaker/created'
    }
  },
  wheretobuy: {
    title: '购买渠道',
    child: [
      {
        title: '网上商店',
        key: 'Online Stores',
        iLink: '/distributor#online-store'
      },
      {
        title: '经销商',
        key: 'Distributors',
        iLink: '/distributor'
      }
    ],
    lastChild: '成为授权经销商'
  },
  forum: {
    title: '论坛',
    oLink: 'http://forum.snapmaker.com'
  },
  newsletter: {
    title: '新闻中心',
    h3textPre: '订阅我们的新闻邮件， ',
    h3textNext: '了解特价优惠和最新优惠信息。',
    // email
    contact: [
      {
        name: '售前和物流：',
        title: 'info@snapmaker.com',
        mLink: 'mailto:info@snapmaker.com'
      },
      {
        name: '技术支持：',
        title: 'support@snapmaker.com',
        mLink: 'mailto:support@snapmaker.com'
      },
      {
        name: '分销相关：',
        title: 'sales@snapmaker.com',
        mLink: 'mailto:sales@snapmaker.com'
      }
    ],
    social: [
      // social
      {
        title: 'WeChat',
        key: 'WeChat',
        oLink: 'https://mp.weixin.qq.com/s/NEH3hI_ezU3yauUvVSOJLA'
      },
      {
        title: 'bilibili',
        key: 'bilibili',
        oLink: 'https://space.bilibili.com/53071179'
      },
      {
        title: 'weibo',
        key: 'weibo',
        oLink: 'https://weibo.com/p/1006066056787909/home'
      },
      {
        title: 'douyin',
        key: 'douyin'
        // oLink: 'https://weibo.com/p/1006066056787909/home'
      }
    ],
    copyright: '2021 Snapmaker保留所有权利'
  }
}
