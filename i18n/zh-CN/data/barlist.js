/*  eslint-disable  */
export default{
  name: 'barlist',
  barProducts:
    {
      name: '产品',
      id: 'Products',
      child: [
        {
          name: 'Snapmaker 2.0',
          to: 'Snapmaker 2.0',
          id: 'platform',
          description: '三合一 3D 打印机',
          img: require('../../../assets/img/downloads/snap2/support-snapmaker-2.0-cover.png'),
          showComing: true,
          addons:[
            {
              outsideLink: true,
              available: true,
              name: '10W 激光模组',
              img: require('../../../assets/cn/header/pic_10W_Laser.png'),
              url: 'https://item.jd.com/10041724169319.html',
            },
            {
              outsideLink: true,
              available: true,
              name: '外罩',
              img: require('../../../assets/newImg/products/navbar/enclosure@2x.png'),
              url: 'https://detail.tmall.com/item.htm?id=631164263060&amp;rn=af6a9460aabfb4f2f8a26f2e5fbcd3d2&amp',
            },
            {
              // available: false,
              outsideLink: true,
              available: true,
              img: require('../../../assets/newImg/products/navbar/pic_2.0_rotary.png'),
              name: '旋转模组',
              url: 'https://detail.tmall.com/item.htm?id=642668780601&amp;rn=af6a9460aabfb4f2f8a26f2e5fbcd3d2&amp',
            },
            {
              // available: false,
              outsideLink: true,
              available: true,
              img: require('../../../assets/newImg/products/navbar/pic_zaxis_54x50.png'),
              name: '空气净化器',
              url: 'https://detail.tmall.com/item.htm?id=654711779347&amp;rn=af6a9460aabfb4f2f8a26f2e5fbcd3d2&amp',
            },
            {
              available: true,
              outsideLink: true,
              img: require('../../../assets/newImg/products/navbar/pic_CanHub_54x50@2x.png'),
              name: '扩展坞',
              url: 'https://detail.tmall.com/item.htm?id=655288875413&amp;rn=af6a9460aabfb4f2f8a26f2e5fbcd3d2&amp',
              // coming: 'Coming soon...',
            }

          ],
          series:[
            {
              aLink: 'https://detail.tmall.com/item.htm?id=629585760110&amp;rn=af6a9460aabfb4f2f8a26f2e5fbcd3d2&amp',
              description: '三合一 3D 打印机（AT 型号)',
              img: require('../../../assets/newImg/products/navbar/AT_Series.jpg'),
            },
            // {
            //   to: 'Snapmaker 2.0',
            //   description: '3D打印机（A 型号)',
            //   img: require('../../../assets/newImg/products/navbar/A_Series_240x170.jpg'),
            // },
            {
              // to: 'snapmaker2F',
              aLink:'https://detail.tmall.com/item.htm?id=656984160767&amp;rn=af6a9460aabfb4f2f8a26f2e5fbcd3d2&amp',
              description: '3D打印机（F 型号)',
              img: require('../../../assets/newImg/products/navbar/F_Series_240x170.jpg'),
            },
          ],
        },
        {
          name: 'Snapmaker 初代',
          to: 'Snapmaker Original',
          id: 'product',
          description: '三合一 3D 打印机',
          img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/pic_orignal_240x170.png',
          showComing: false,
          addons:[
              {
                available: true,
                img: require('../../../assets/newImg/products/navbar/pic_enclosure_54x50.png'),
                name: '外罩 V1.1',
                url: '/product/snapmaker-original/addons#enclosure',
              },
              {
                available: true,
                name: '1600mW 激光切割模组',
                 img: require('../../../assets/newImg/products/navbar/pic_lasercutting_54x50.png'),
                url: '/product/snapmaker-original/addons#laser-cutting-module',
              },
              {
                available: true,
                img: require('../../../assets/newImg/products/navbar/pic_zaxis_54x50.png'),
                name: 'Z 轴加长模组',
                url: '/product/snapmaker-original/addons#z-axis-extension-module',
              },
          ],
          series:[
            {
              to: 'Snapmaker Original',
              img: require('../../../assets/newImg/products/navbar/pic_orignal_240x170.png'),
              description: '三合一 3D 打印机',
            }
          ]
        }
      ],
    },
  barSupport: {
    name: '服务与支持',
    id: 'Support',
    link: 'https://snapmaker.zendesk.com/hc/zh-cn',
    child: [
      {
        name: '下载中心',
        to: '/download',
        id: 'download',
      },
      {
        name: '知识库',
        to: '/document',
        id: 'document',
      },
      {
        name: '维修服务',
        to: '/repair',
        id: 'repair',
      },
      {
        name: '技术参数',
        to: '/spec',
        id: 'spec',
      },
    ],
  },

  barend: {
    country:'English',
    tabletShopText: '在线商店',
    // tabletShopBg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/nav-shop.png',
    buttons: [
        {
          url: 'https://snapmaker.tmall.com/?spm=a1z10.3-b.w5001-21696184167.3.40be7f386PAuCQ&scene=taobao_shop',
          name: '天猫旗舰店',
        },
        {
          url: 'https://snapmaker.jd.com/',
          name: '京东旗舰店',
        },
    ],
    wechatIcon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/code.jpg',
    douyinIcon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/hover_douyin.png',
    switchLangIcon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/switchEn.png',
  },
  buttonText: '社区',
};
