export default
{
  logo: {
    img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/snapmaker-logo.svg',
    traceID: 'nav-logo'
  },
  menus: [
    {
      typeText: '产品',
      type: 'Products',
      traceID: 'nav-title-products',
      route: '/products',
      dropdowns: [
        {
          title: 'Snapmaker 2.0 3D 打印机',
          description: '超大加工空间的高性能三合一 3D 打印机',
          img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_AT Models.png',
          defaultLink: 'https://us.snapmaker.com/products/snapmaker-2-0-modular-3-in-1-3d-printer-a350t-a250t',
          categories: [
            {
              name: 'AT 型号',
              traceID: 'nav-subtitle-at-models',
              link: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=629585760110&sku_properties=5919063:6536025',
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_AT Models.png'
            },
            {
              name: 'F 型号',
              // route: '/snapmaker-2-f',
              link: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=656984160767&sku_properties=5919063:6536025',
              traceID: 'nav-subtitle-f-models',
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_F Models.png'
            }
            // {
            //   name: 'A 型号',
            //   route: '/snapmaker-2',
            //   traceID: 'nav-subtitle-f-models',
            //   img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/snapmaker2_A.png'
            // }
          ]
        },
        {
          title: '模组和扩展组件',
          description: '自定义你的 Snapmaker 2.0 和扩展其功能',
          img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_10W Laser Module.png',
          defaultRoute: '/snapmaker-10w-laser-module',
          categories: [
            {
              name: '10W 激光模组',
              traceID: 'nav-subtitle-10w-high-power-laser',
              // route: '/snapmaker-10w-laser-module',
              link: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=668971742809',
              isNew: true,
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_10W Laser Module.png'
            },
            {
              name: '外罩',
              traceID: 'nav-subtitle-enclosure-air-purifier',
              // route: '/snapmaker-2-enclosure-air-purifier',
              link: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=631164263060&sku_properties=5919063:6536025',
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_Enclosure & Air Purifier.png'
            },
            {
              name: '旋转模组',
              traceID: 'nav-subtitle-rotary-module',
              // route: '/snapmaker-2-rotary-module',
              link: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=642668780601&sku_properties=5919063:6536025',
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_Rotary Module.png'
            },
            {
              name: '更多',
              traceID: 'nav-subtitle-more',
              // route: '/snapmaker-2/addons'
              link: 'https://snapmaker.tmall.com/category-1597167793.htm?spm=a1z10.5-b-s.w4010-22466094491.11.2f1e5c1eiGAYbp&search=y&parentCatId=1454179988&parentCatName=%C0%A9%D5%B9%C4%A3%D7%E9&catName=%B6%FE%B4%FA%BB%FA%C6%F7%C4%A3%D7%E9#bd'
              // img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_10W Laser Module.png'
            }
          ]
        },
        {
          title: 'Snapmaker Original 3D 打印机',
          description: '初代小型三合一 3D 打印机',
          defaultRoute: '/snapmaker-original',
          img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_3-in-1 3D Printer.png',
          categories: [
            {
              name: '三合一 3D 打印机',
              traceID: 'nav-subtitle-3-in-1-3d-printer',
              // route: '/snapmaker-original',
              link: 'https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.7187687dD9saYM&id=594103491235&sku_properties=5919063:6536025',
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_3-in-1 3D Printer.png'
            }
            // {
            //   name: 'Enclosure',
            //   traceID: 'nav-subtitle-enclosure',
            //   link: 'https://shop.snapmaker.com/products/enclosure',
            //   img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_Enclosure.png'
            // },
            // {
            //   name: '1600mW Laser Module',
            //   traceID: 'nav-subtitle-1600mw-laser',
            //   link: 'https://shop.snapmaker.com/products/laser-module',
            //   img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/pic_1600mW Laser Module.png'
            // }
            // {name: 'Z-Axis Extension Module', aLink: 'https://shop.snapmaker.com/products/z-axis-extension-module?_blank'}
          ]
        }
      ]
    },
    {
      typeText: '软件',
      type: 'Software',
      traceID: 'nav-title-software',
      route: '/snapmaker-luban',
      dropdowns: [
        {
          title: 'luban',
          categories: [
            {
              name: 'Snapmaker Luban',
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/snapmaker_luban.png',
              traceID: 'nav-subtitle-luban',
              route: '/snapmaker-luban'
            }
          ]
        }

      ]
    },
    {
      typeText: '支持',
      type: 'Support',
      traceID: 'nav-title-support',
      route: '/support-cn',
      dropdowns: [
        {
          title: 'support',
          categories: [
            {
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/suppport/Product_Support.png',
              // link:'https://snapmaker.zendesk.com/hc/en-us/categories/360000327114-Snapmaker-Original',
              desc: '了解更多关于 Snapmaker 打印机、模组、扩展组件的信息。',
              route: '/support-cn',
              name: '产品支持'
            },
            {
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/suppport/Software_Support.png',
              desc: '了解更多关于 Snapmaker Luban 以及其他软件的信息。',
              route: '/support-cn/products/4420065202967',
              name: '软件支持'
            },
            {
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/suppport/Snapmaker_Academy.png',
              route: '/support-cn/category/360003536313',
              desc: '深度体验 3D 打印、激光雕刻和切割、CNC 雕刻创作。',
              name: 'Snapmaker 学院'
            },
            {
              img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/suppport/FAQ.png',
              desc: '获取常见问题的解答，即时的帮助与支持。',
              route: '/support-cn/sections/4420716996119',
              name: '常见问题'
            }
          ]
        }
      ]
    }
    // {
    //   typeText: '社区',
    //   type: 'Community',
    //   traceID: 'nav-title-community',
    //   route: '/community'
    // }
  ],
  btns: [
    { text: '天猫', traceID: 'nav-tianmao', link: 'https://snapmaker.tmall.com', src: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/TM.png' },
    { text: '京东', traceID: 'nav-jingdong', link: 'https://snapmaker.jd.com/', src: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/assets/header/JD.png' }
  ],
  allProducts: {
    text: '查看全部产品',
    traceID: 'nav-subtitle-see-all-products',
    link: '/products'
  }
}
