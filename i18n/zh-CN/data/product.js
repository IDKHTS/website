/* eslint-disable */
const bannerImage = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-product-mobile_01.jpg';

const mediaimg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/01-media.png';
const overviewimg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-cover.png';
const expandimg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/expandable.jpg';
// const stableimg = require('../../../assets/img/product/05-stable.jpg'; topbanne)r

const modularimg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/06-modular-design.jpg';
const controllerimg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/07-controller.jpg';
const enclosureimg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/enclosure.jpg';
const softwareimg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/08-software.jpg';
const summaryimg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/10-summary.png';

// const summaryMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-product-mobile_11-summary.jpg';
const softwareMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/m-08-software.jpg';
// const overviewMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/m-02-cover.png';
const expandMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/m-expandable.jpg';

const controllerMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-product-mobile_08-controller.jpg';
const modularMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-product-mobile_07-modular.jpg';
const strongMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-product-mobile_06-strong.jpg';
const metalMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-product-mobile_05-all_metal.jpg';
const bannerMobileImg = 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-product-mobile_01.jpg';

export default {
  name: 'product',
  ks: {
    h2: '45 天内，在 Kickstarter 众筹网站共筹得 1500多万元',
    h3: 'Kickstarter 网站史上众筹资金第四多的 3D 打印机项目',
    butText: 'Kickstarter 活动',
    companies: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/02-product-mobile_02.png'
  },
  spotlight: {
    name: 'spotlight',
    // imgMobileSrc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-Original-mobile-20191106.png',
    // img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Original-20191106.png',
    imgPc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-Original-20191106.png',
    imgMobile: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-Original-20191106.png',
    //// TODO:
    // imgPc: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-banner-2.png',
    // imgMobile: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-banner-2.png',
    hasBackground: true,
  },
  topbanner: {
    img: bannerImage,
    isOverlay: true,
    h1text: 'Snapmaker 三合一 3D 打印机',
    h2text: '国产高性价比多功能 3D 打印机。',
    butText: '观看视频',
  },
  videobanner: {
    videoSource: 'https://www.youtube.com/embed/EOGXaDdJxNc',
		previewSource: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/banner-v2.jpg',
		mp4Source: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/media/banner-v2.mp4',
		webmSource: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/media/banner-v2.webm',
  },
  media: {
    name: 'media',
    img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/01-media.png',
    hasBackground: true,
  },
  overview: {
    name: 'overview',
    // title: 'Start Your Maker Journey with Snapmaker.',
    titleHome2: 'Snapmaker 2.0: 模块化三合一 3D 打印机',
    title: '使用 Snapmaker 开始您的创客之旅。',
    overviewNext: '您可以使用 Snapmaker 制作什么？',
    imgProductMobile: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-02-cover-mobile.png',
    imgProduct: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-02-cover.png',
    //// TODO:
    img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-Home2second-20191106.png',
    home2MobileImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-Home2second-20191106-mobile.png',
    // img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-banner-1.png',
    // home2MobileImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-banner-1.png',
    isOverlay: false,
  },
  metal: {
    name: 'metal',
    img: metalMobileImg,
    metalMobileImg,
    isOverlay: true,
    videoPoster: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/04-metal-cover.png',
    videoSource: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/media/04-metal.mp4',
    videoSourceWebm: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/media/04-metal.webm',
    title: '优质的全金属结构',
    subtitle: '凭借它坚固的机身，其耐用性比塑料替代品的耐用性高出 10 倍以上。',
  },
  expand: {
    name: 'expand',
    title: '这一切都与可扩展性有关',
    subtitle: '这些模块的设计不仅使其能够与未来的升级兼容，还可以使用户能够用自己的想象力丰富其用途。',
    img: expandimg,
    isOverlay: true,
    expandMobileImg,
  },
  strong: {
    name: 'strong',
    title: '现在更加稳定。',
    subtitle: '旨在始终如一地提供强大而稳定的性能。',
    // img: strongimg,
    isOverlay: true,
    hasBackground: true,
  },
  modular: {
    name: 'modular',
    title: '这是前所未有的。',
    subtitle: '我们采用了模块化的设计。您可以在 10 分钟内完成组装，并且可以自由地把其改造成您需要的机器。',
    img: modularimg,
    modularMobileImg,
    isOverlay: true,
    bgHeight: '800px',
  },
  controller: {
    name: 'controller',
    title: '简化您组建和改造它的方式。',
    subtitle: '借助通用的模组和接口，您会喜欢上这种方便的组装和改造方式。',
    img: controllerimg,
    controllerMobileImg,
    isOverlay: true,
    // bgHeight: '720px',
  },
  enclosure: {
    name: 'enclosure',
    title: '外罩',
    img: enclosureimg,
    subtitle: '外罩为您提供了更安静、更安全的制作环境。它有效地将噪音降低 10 分贝左右。同时，在进行激光雕刻和 CNC 雕刻时，它还可以让您的宠物或孩子远离可能的危险。',
    routerContent: '查看完整参数',
  },
  software: {
    name: 'software',
    title: '免费的三合一软件',
    img: softwareimg,
    softwareMobileImg,
    link: 'https://luban.xyz/',
    displayImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/07-software.gif',
    bottomImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/cn-07-software-feature.png',
    subtitle: '使用三合一软件 Snapmaker Luban，只需点击几下即可完成令人惊叹的创作。',
  },
  summary: {
    name: 'summary',
    // img: summaryimg,
    img: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Home2summary-20191106.png',
    summaryMobileImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Home2summary-20191106.png',
    homePageImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Home2summary-20210519.png',
    homePageSummaryMobileImg: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn/static/img/Home2summary-20210519-mobile.png',
    bgHeight: '600px',
    bgHeightMobile: '281px',
    isOverlay: false,
    title: '现在就购买价格实惠的 Snapmaker 三合一 3D 打印机吧！',
    homePageTitle: ' 立即开启创造之旅！',
    // subtitle: 'The earlier you place the pre-order, the sooner you will receive the Snapmaker.',
    cta: '立即购买',
    buttonMobileHref: 'https://snapmaker.cn/distributor#online-store',
    buttonHome2Href: 'https://snapmaker.cn/distributor#online-store',
    homePageButtonMobileHref: 'https://snapmaker.cn/distributor#online-store',
    homePageButtonHome2Href: 'https://snapmaker.cn/distributor#online-store',
  },
};
