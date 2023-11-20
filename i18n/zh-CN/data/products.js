/* eslint-disable */
export default {
  name: 'products',
  block1: {
    topImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-products-1.jpg',
    h2: 'Snapmaker三合一3D打印机',
    h4: '国产高性价比多功能 3D 打印机',
    // buttonhref: 'https://shop.snapmaker.com/collections/featured-collection/products/3-in-1-3d-printer',
    buttonhref: 'https://detail.tmall.com/item.htm?spm=a1z10.1-b.w5003-21734285632.1.4a5b626bRWjGrw&id=594103491235&scene=taobao_shop&skuId=4117311232563',
    buynow: '立即购买',
    buttonto: '/product',
    learnmore: '了解更多',
  },
  block2: [
    {
      img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/products-2a.png',
      key: 1,
      h3: '1600mW激光切割模组',
      // buttonhref: 'https://shop.snapmaker.com/collections/featured-collection/products/laser-module',
      buttonhref: 'https://detail.tmall.com/item.htm?spm=a1z10.5-b.w4011-21525364066.73.6b643721azi1mF&id=593763053515&rn=e5fc56ba0f924a8605195f38b22a7320&sku_properties=5919063:6536025',
      buynow: '立即购买',
    },
    {
      img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/products-2b.jpg',
      key: 2,
      h3: '三合一 3D 打印机的外罩',
      // buttonhref: 'https://shop.snapmaker.com/collections/featured-collection/products/enclosure',
      buttonhref: 'https://detail.tmall.com/item.htm?spm=a1z10.5-b.w4023-21525364065.16.2ba26af2GwP553&id=593933530501&skuId=4117658004479',
      buynow: '立即购买',
    },
  ],
  block3: {
    h2: 'Snapmaker 2.0',
    h4: '全面升级的三合一 3D 打印机',
    buttonto: '/platform',
    learnmore: '了解更多',
  },
  addons: [
      {
          mainTitle: 'Snapmaker 初代外罩',
          content: `给您全方位防护：安全防护、防尘降噪、隔绝激光。让您免受 3D 打印、激光雕刻、CNC 雕刻过程中的潜在危害。`,
          tag: 'enclosure',
          params: [
              {
                  keypoint: '亮点',
                  value: '开门激光即停',
              },
              {
                  keypoint: '表面材料',
                  value: '亚克力',
              },
          ],
          buttonText: '立即购买',
          floatDirection: 'left',
          buttonHref: 'https://detail.tmall.com/item.htm?spm=a220o.1000855.1998025129.1.33926dad9e15mU&pvid=33425355-df12-4928-abfa-39416be1527d&pos=1&acm=03054.1003.1.2768562&id=593933530501&scm=1007.16862.95220.23864_0_0&utparam=%7B%22x_hestia_source%22:%2223864%22,%22x_object_type%22:%22item%22,%22x_mt%22:0,%22x_src%22:%2223864%22,%22x_pos%22:1,%22x_pvid%22:%2233425355-df12-4928-abfa-39416be1527d%22,%22x_object_id%22:593933530501%7D&sku_properties=5919063:6536025',
          img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/pic_Enclosure_620x660.png',

      },
      {
          mainTitle: 'Snapmaker 初代激光切割模块（1600mW）',
          content: '独有的拓展模块，可快速将你的 Snapmaker 升级为一台小型激光切割机！',
          tag: 'laser-cutting-module',
          params: [
              {
                  keypoint: '激光规格',
                  value: '1600Mw 445nm 激光二极管',
              },
              {
                  keypoint: '激光安全等级',
                  value: '4级',
              },
          ],
          buttonText: '立即购买',
          floatDirection: 'right',
          buttonHref: 'https://detail.tmall.com/item.htm?spm=a1z10.1-b-s.w5003-22466094479.6.3e42626bYfNgpm&id=593763053515&sku_properties=5919063:6536025&scene=taobao_shop',
          img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/pic_LaserCuttingModule_620x660.png',
      },
      {
          mainTitle: 'Snapmaker 初代 Z 轴长模组',
          content: `升级你的 Snapmaker 初代，获得更高的 3D 打印高度。有效打印体积可增加76.8%！`,
          tag: 'z-axis-extension-module',

          params: [
              {
                  keypoint: '有效行程',
                  value: '221mm',
              },
          ],
          buttonText: '立即购买',
          floatDirection: 'left',
          buttonHref: 'https://detail.tmall.com/item.htm?spm=a1z10.1-b-s.w5003-22466094479.5.3e42626bYfNgpm&id=595360124527&sku_properties=5919063:6536025&scene=taobao_shop',
          img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/pic_Z-AxisExtension Module_620x660.png',

      },
  ],
  snapmaker2Addons: [
    {
      mainTitle: 'Snapmaker 2.0 Rotary Module',
      content: 'Turn your Snapmaker into a powerful 4-axis CNC powerhouse.',
      tag: 'rotary',
      keyText: 'Key Feature',
      keyFeature: '4-axis rotary carving and laser engraving',
      buyBtnText: 'Buy Now',
      buyBtnHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-rotary-module',
      learnMoreHref: 'https://www.snapmaker.com/product/rotary-module',
      learnMoreText: 'Learn More',
      floatDirection: 'left',
      img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/rotaryModule.png'
    }, {
      mainTitle: 'Snapmaker 2.0 Emergency Stop Button',
      content: 'Provide an extra layer of safety and help salvage your prints.',
      tag: 'emergency-stop-button',
      keyFeature: 'Stop your Snapmaker with a press',
      keyText: 'Key Feature',
      buyBtnText: 'Buy Now',
      buyBtnHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-rotary-module',
      img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/emergencyStopButton.png',
      floatDirection: 'right'
    }
  ]
}
