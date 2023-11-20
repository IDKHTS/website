/* eslint-disable */
export default {
  name: 'snapmaker2',
  mediaPc: {
    name: 'media-pc',
    img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/01-media-pc.png',
    hasBackground: true,
  },
  mediaMobile: {
    name: 'media-mobile',
    img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/01-media-mobile.png',
    hasBackground: true,
  },
  ctaSfirst: '订阅可在发布日获得提前优惠。',
  popupSubscribe: {
    subTitle: 'Snapmaker 2.0 已获得8,000+ 用户支持！',
    title: '获得Snapmaker2.0的最新动态',
  },
  s01Cover: {
    divImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/00-snapmaker2-logo.png',
    fisrtH2text: '模块化三合一 3D 打印机',
    // secondH2text1: '现在预订，可节省多达 ',
    // secondSpan: '4000元',
    // secondH2text2: '',
    secondH2text1: '桌面级多功能创意工坊',
    secondSpan: '',
    secondH2text2: '',
    buttonAHref: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/video/snapmaker2/Snapmaker_FINAL_Revised_1080p_CN.mp4',
    buttonACon: '播放视频',
  },
  ksctaCon: {
    h2text: '30 天内，在 Kickstarter 众筹网站共筹得 5000多万元',
    h3text: 'Kickstarter 网站史上众筹资金最多的技术项目',
    atext: 'Kickstarter 活动',
  },
  s02funcs: {
    h2text: '三合一',
    h3text: `是的！您需要的所有制造机器，这里应有尽有！
    只需更换一个模组，即可轻松实现向激光切割机或 CNC 雕刻机的转换。`,
    columnsMobileCon: [
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-3d.png',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-laser.png',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-cnc.png',
    ],
    columnsPcCon: [
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-3d.png',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-laser.png',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-cnc.png',
    ],
  },
  s03to06: [
    {
      isBgcDark: true,
      bindClass: 's03-sizes',
      h2text: '3 种尺寸',
      h3text: '总有一种适合您。',
      columnsPcCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/03-3-sizes.png',
      columnsMobileCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/03m-3-sizes.png',
    },
    {
      isBgcDark: false,
      bindClass: 's04-modular',
      h2text: '模块化设计',
      h3text: `模块化设计是 Snapmaker 产品背后的理念。
      这一理念不仅为三合一功能奠定了基础，而且使打印机的变形或向其他机器的扩展成为可能。
      可扩展性是我们的不懈追求！`,
      columnsPcCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/04-modular-design.png',
      columnsMobileCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/04m-modular-design.png',
    },
    {
      isBgcDark: true,
      bindClass: 's05-linear',
      h2text: '更坚固的直线模组',
      h3text: `直线模组的坚固性是决定打印机精度的关键。
      由金属制成的滚轮和导轨进一步增强了打印机的坚固性和耐用性。
      重复精度更可达到 0.005 mm 以内。此外，直线模组也非常易于清洗。
      全封闭设计消除了模组内丝杆上集聚灰尘的问题，再也不用担心CNC 操作结束后要花1小时清理直线模组了。`,
      columnsPcCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/05-linear-module.png',
      columnsMobileCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/05m-linear-module.png',
    },
    {
      isBgcDark: false,
      bindClass: 's06-controller',
      h2text: '有史以来最全能的控制器',
      h3text: `Snapmaker 2.0 包含全新设计的控制器，它犹如 Snapmaker 2.0 的“大脑”。
      该控制器使添加如耗材传感器和 Wi-Fi 连接等更加智能化的功能成为可能。
      此外，它还支持各种改造和扩展。
      目前同时驱动多达 11 个直线模组不再只是梦想。`,
      columnsMobileCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/06m-controller.jpg',
      columnsPcCon:  'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/06-controller.jpg',
    },
  ],
  s07to09: [
    {
      isBgcDark: true,
      bindClass: 's07-3dp',
      h3text: '3D 打印',
      h2text: '为您省去3D 打印时的所有麻烦',
      ulData: [
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/3d-1.png',
          tdCon: '自动调平',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/3d-2.png',
          tdCon: '耗材传感器',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/3d-3.png',
          tdCon: '更高效的冷却系统',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/3d-4.png',
          tdCon: 'Wi-Fi 连接',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/3d-5.png',
          tdCon: '断电检测及续打',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/3d-6.png',
          tdCon: '可弯曲磁吸打印底板',
        },
      ],
      rightImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/07-3d.png',
    },
    {
      isBgcDark: false,
      bindClass: 's08-laser',
      h3text: '激光雕刻与切割',
      h2text: '以更快、更直观的方式雕刻出您的作品',
      ulData: [
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/laser-1.png',
          tdCon: '逐行跟踪模式',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/laser-2.png',
          tdCon: '所见即所得',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/laser-3.png',
          tdCon: 'Wi-Fi 连接',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/laser-4.png',
          tdCon: '专用雕刻平台',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/laser-5.png',
          tdCon: '可升级为更高功率的激光模组',
        },
      ],
      rightImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/08-laser.png',
    },
    {
      isBgcDark: true,
      bindClass: 's09-cnc',
      h3text: 'CNC 雕刻与切割',
      h2text: '任何一位专业人士都会选择的 CNC 雕刻机',
      ulData: [
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cnc-1.png',
          tdCon: 'ER11 夹头',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cnc-2.png',
          tdCon: '功率强大的无刷电机',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cnc-3.png',
          tdCon: 'Wi-Fi 连接',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cnc-4.png',
          tdCon: '可调主轴转速介于 6,000 转/分和 12,000 转/分之间',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cnc-5.png',
          tdCon: 'MDF 防损板',
        },
        {
          imgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cnc-6.png',
          tdCon: '更便捷的压块',
        },
      ],
      rightImgSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/08-laser.png',
    },
  ],
  s10to11: [
    {
      bindClass: 's10-touchscreen',
      isBgcDark: false,
      h2text: '智能触摸屏',
      h3text: `Snapmaker 2.0 配备 5 英寸智能触摸屏。触摸屏与智能手机的运行系统相同（安卓系统）。通过触摸屏幕，可以方便地监控打印/雕/刻/切割过程。`,
      columnsPcCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/10-smart-touchscreen.png',
      columnsMobileCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/10m-smart-touchscreen.png',
    },
    {
      bindClass: 's11-software',
      isBgcDark: true,
      h2text: '简易免费的软件',
      h3text: `无论是 3D 打印、激光雕刻还是 CNC 雕刻，Snapmakerjs 软件都是将您的创作变成现实的最佳助手。`,
      columnsPcCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/11-software.png',
      columnsMobileCon: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/11m-software.png',
    },
  ],
  specificationSection: {
    h2text: '技术参数',
    columnsCon: {
      columnSpe: {
        divCon: '常规参数',
        tableData: [
         ['机身材料', '铝合金'],
         ['连接方式','Wi-Fi、USB 线、U 盘',],
         ['触摸屏',`5 英寸 TFT 屏，安卓系统`,],
         ['软件','Snapmaker Luban。此外，您还可以使用第三方软件来生成 G 代码文件。',],
         ['支持的操作系统','MacOS, Windows, Linux',],
         ['额定功率','320W',],
        ],
      },
      columnNor: [
        {
          divCon: '3D 打印',
          tableDataFirstTr: [
            {
              td1: '工作尺寸',
              td2: [
                'A150: 160 x 160 x 145 mm',
                'A250: 230 x 250 x 235 mm',
                'A350: 320 x 350 x 330 mm',
              ],
            },
            {
              td1: '热床',
              td2: [
                'A150: 高达 110°C',
                'A250: 高达 100°C',
                'A350: 高达 80°C',
              ],
            },
          ],
          tableData: [
           ['打印层厚','0.05 - 0.3 mm',],
           ['喷嘴温度','高达 275°C',],
           ['喷嘴直径','0.4 mm',],
           ['支持的材料','PLA、ABS、TPU、PETG、木质PLA 等',],
           ['支持的文件类型','STL, OBJ',],
          ],
        },
        {
          divCon: '激光',
          tableDataFirstTr: [
            {
              td1: '工作尺寸',
              td2: [
                'A150: 160 x 160 mm',
                'A250: 230 x 250 mm',
                'A350: 320 x 350 mm',
              ],
            },
          ],
          tableData: [
            ['激光','1600mW 450nm 激光二极管',],
            ['波长','450nm',],
            ['安全等级','4 级',],
            ['支持的材料','木材、皮革、塑料、织物、纸、不透明亚克力等',],
            ['支持的文件类型','SVG, JPEG, PNG, JPG, BMP and DXF',],
          ],
        },
        {
          divCon: 'CNC',
          tableDataFirstTr: [
            {
              td1: '工作尺寸',
              td2: [
                'A150: 160 x 160 x 90 mm ',
                'A250: 230 x 250 x 180 mm',
                'A350: 320 x 350 x 275 mm',
              ],
            },
          ],
          tableData: [
            ['刀柄直径','0.5mm-6.35mm (0.02-0.25 英寸)',],
            ['主轴转速','6,000-12,000 转/分',],
            ['支持的材料','木材、亚克力、PCB、碳纤维板、玉石等',],
            ['支持的文件类型','.CNC',],
          ],
        },
      ],
    },
  },
  s12aGallery: {
    h2text: '产品原型图',
    sliderCon: [
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/12-pic-summary-01.jpg',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/12-pic-summary-02.jpg',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/12-pic-summary-03.jpg',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/12-pic-summary-04.jpg',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/12-pic-summary-05.jpg',
      'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/12-pic-summary-06.jpg',
    ],
  },
  s12Ks: {
    h2text: '这不是我们推出的首款三合一 3D 打印机',
    h3Text: '我们的首款三合一 3D 打印机深受来自 100 多个国家的 30,000 多名用户的喜爱和信赖。',
    aHref: 'https://www.kickstarter.com/projects/snapmaker/snapmaker-the-all-metal-3d-printer',
    // imgSrc1: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/12-ks-banner-01.png',
    // imgSrc2: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/12-ks-banner-02.png',
    imgSrc1: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-12-ks-banner-01.png',
    imgSrc2: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-12-ks-banner-02.png',
  },
  s13Community: {
    lived: {
      h2text: 'Snapmaker 2.0 现可预订！',
      aHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-modular-3-in-1-3d-printers',
      aCon: '立即预订',
    },
    notlived: {
      h2text: '订阅来获取一手资讯',
      aCon: '订阅',
      facebookHref: 'https://www.facebook.com/groups/newsnapmaker/',
      facebookCon: 'Join Facebook Group',
      lastAHref: 'https://www.youtube.com/c/Snapmaker',
    },
  },
};
