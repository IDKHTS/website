export default {
  firstScreen: {
    title: '模组化三合一 3D 打印机',
    text: '使用一台机器完成 3D 打印、激光雕刻和 CNC 雕刻。选配扩展组件增加你的 3D 打印机功能。',
    buyBtn: {
      traceID: 'hp-banner-meet-snapmaker-2.0-at',
      text: '查看 Snapmaker 2.0 AT',
      link: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=629585760110&sku_properties=5919063:6536025'
    },
    videoBtn: {
      traceID: 'hp-banner-watch-the-video',
      text: '观看视频',
      link: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/Snapmaker%20Brand/5-year-anniversary-brand-video.mp4'
    },
    imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/mobile/first_screen.png',
    videoSrc: {
      webm: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/video/brand_video.webm',
      mp4: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/video/brand_video.mp4'
    }
  },
  productsDisplay: [
    {
      imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_home2.0AT_1280x680.jpg',
      title: 'Snapmaker 2.0 AT',
      description: '功能强大的 3D 打印、激光雕刻、CNC雕刻机，多功能集合在一部机器上。',
      links: [
        {
          traceID: 'hp-product-snapmaker-2.0-at-buy',
          href: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=629585760110&sku_properties=5919063:6536025',
          text: '立即购买'
        }
      ]
    },
    {
      imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_home2.0F_1280x680.jpg',
      title: 'Snapmaker 2.0 F',
      description: '可升级的高性价比 3D 打印机。',
      links: [
        // {
        //   traceID: 'hp-product-snapmaker-2.0-f-learn',
        //   route: '/snapmaker-2-f',
        //   text: '了解更多'
        // },
        {
          traceID: 'hp-product-snapmaker-2.0-f-buy',
          href: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=656984160767&sku_properties=5919063:6536025',
          text: '立即购买'
        }
      ]
    },
    {
      imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_home2.0-Enclosure-&-Air-Prufier_1280x680.jpg',
      title: '外罩 & 空气净化器',
      description: '处理噪音、激光和废气排放，为你的创作再加一道防护。',
      links: [
        // {
        //   traceID: 'hp-product-snapmaker-2.0-enclosure-air-learn',
        //   route: '/snapmaker-2-enclosure-air-purifier',
        //   text: '了解更多'
        // },
        {
          isGroup: true,
          text: '立即购买',
          traceID: 'hp-product-snapmaker-2.0-enclosure-air-buy',
          href: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=631164263060&sku_properties=5919063:6536025',
          groups: [
            {
              traceID: 'hp-product-snapmaker-2.0-enclosure-buy',
              href: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=631164263060&sku_properties=5919063:6536025',
              imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/enclosure_2.png',
              text: '外罩'
            },
            {
              traceID: 'hp-product-snapmaker-2.0-air-buy',
              href: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=654711779347&sku_properties=5919063:6536025',
              imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/air-purifier.png',
              text: '空气净化器'
            }
          ]
        }
      ]
    },
    {
      imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_home-2.0Rotary-Module_1280x680.jpg',
      title: '旋转模组',
      description: '在新的维度里 CNC 雕刻。',
      links: [
        // {
        //   traceID: 'hp-product-snapmaker-2.0-rotary-learn',
        //   route: '/snapmaker-2-rotary-module',
        //   text: '了解更多'
        // },
        {
          traceID: 'hp-product-snapmaker-2.0-rotary-buy',
          href: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=642668780601&sku_properties=5919063:6536025',
          text: '立即购买'
        }
      ]
    }
  ],
  software: {
    solgan: [['开源', '打印软件'], ['同时也是', '雕刻软件'], ['还是', '软件']],
    solganType: ['3D', '激光', 'CNC'],
    title: 'Snapmaker Luban',
    downloadBtn: { traceID: 'hp-software-download', text: '下载', route: '/snapmaker-luban' },
    displayCarousel: [
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_Luban-3dp_949x534.jpg',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_Luban-laser_949x534.jpg',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_Luban-cnc_949x534.jpg'
    ]
  },
  supportCenter: {
    imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_Support_Center_BG_786x544.jpg',
    title: '支持中心',
    description: '发掘关于 3D 打印、激光雕刻及 CNC 雕刻的提示和技巧，并激发你的 3D 打印机的潜能。',
    btn: { traceID: 'hp-support-learn-more', text: '了解更多', link: 'https://snapmaker.zendesk.com/hc/zh-cn' }
  },
  officialCooperation: [
    // {
    //   imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_Press_408x245.jpg',
    //   title: 'Press',
    //   description: 'Learn the latest news about Snapmaker.',
    //   btn: { traceID: 'hp-cta-press', text: 'Learn More', link: 'https://press.snapmaker.com' }
    // },
    // {
    //   imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_Affilate program_408x245.jpg',
    //   title: 'Affiliate Program',
    //   description: 'Be the voice of Snapmaker and earn up to 10% commission.',
    //   btn: { traceID: 'hp-cta-affiliate-program', text: 'Learn More', route: '/affiliate-program' }
    // },
    // {
    //   imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/pic_Blog_408x245.jpg',
    //   title: 'Blog',
    //   description: 'Check out our freshest content regarding 3D printing, laser engraving, and CNC carving. ',
    //   btn: { traceID: 'hp-cta-blog', text: 'Learn More', link: 'https://blog.snapmaker.com/' }
    // }
  ],
  CTA: {
    title: '发掘 3D 打印、激光雕刻和 CNC 雕刻的魅力',
    btns: [{ traceID: 'hp-cta-buy-now', text: '立即购买', link: 'https://snapmaker.tmall.com/' }, { traceID: 'hp-cta-find-a-distributor', text: '查找经销商', route: '/distributors' }],
    imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/home/pc/Pic_home-Products_1920x690.jpg'
  }
}
