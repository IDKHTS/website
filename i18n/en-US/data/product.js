/* eslint-disable */
const bannerImage = 'https://ditfjx9w4x3vl.cloudfront.net/img/02-product-mobile_01.jpg';

const mediaimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/01-media.png';
const overviewimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/02-cover.png';
const expandimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/expandable.jpg';
// const stableimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/05-stable.jpg';

const modularimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/06-modular-design.jpg';
const controllerimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/07-controller.jpg';
const enclosureimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/enclosure.jpg';
const softwareimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/08-software.jpg';
const summaryimg = 'https://ditfjx9w4x3vl.cloudfront.net/img/10-summary.png';

// const summaryMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/02-product-mobile_11-summary.jpg';
const softwareMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/m-08-software.jpg';
const overviewMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/m-02-cover.png';
const expandMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/m-expandable.jpg';

const controllerMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/02-product-mobile_08-controller.jpg';
const modularMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/02-product-mobile_07-modular.jpg';
const strongMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/02-product-mobile_06-strong.jpg';
const metalMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/02-product-mobile_05-all_metal.jpg';
const bannerMobileImg = 'https://ditfjx9w4x3vl.cloudfront.net/img/02-product-mobile_01.jpg';

export default {
  name: 'product',
  ks: {
    h2: 'Raised $2,277,182 in 45 Days on Kickstarter',
    h3: 'The 3rd Most Funded 3D Printing Project on Kickstarter History',
    butText: 'Kickstarter Campaign',
    companies: 'https://ditfjx9w4x3vl.cloudfront.net/img/02-product-mobile_02.png'
  },
  spotlight: {
    name: 'spotlight',
    imgPc: 'https://ditfjx9w4x3vl.cloudfront.net/img/spotlight.png',
    imgMobile: 'https://ditfjx9w4x3vl.cloudfront.net/img/spotlightMobile.png',
    // img: 'https://ditfjx9w4x3vl.cloudfront.net/img/spotlight.png',
    // img: 'https://ditfjx9w4x3vl.cloudfront.net/img/Original-20191106.png',
    hasBackground: true,
  },
  topbanner: {
    img: bannerImage,
    isOverlay: true,
    h1text: 'Snapmaker 3-in-1 3D Printer',
    h2text: 'Turn your desktop into a workshop',
    butText: 'Play Video',
  },
  // TODO  https://www.youtube.com/embed/uM7ZVgjp5iY

  media: {
    name: 'media',
    img: 'https://ditfjx9w4x3vl.cloudfront.net/img/01-media.png',
    hasBackground: true,
  },
  overview: {
    name: 'overview',
    // titleHome2: 'Snapmaker 2.0: Modular 3-in-1 3D Printers',
    titleHome2: 'Snapmaker Original: All-Metal 3-in-1 3D Printer',
    title: 'Start your maker journey with Snapmaker.',
    overviewNext: 'What can you create with Snapmaker?',
    imgProduct: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2second-20200208.png',
    imgProductMobile: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2second-20200208-mobile.png',
    img: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2second-20200208.png',
    home2MobileImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2second-20200208-mobile.png',
    // img: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2second-20191106.png',
    // overviewMobileImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2second-20191106-mobile.png',
    isOverlay: false,
  },
  metal: {
    name: 'metal',
    img: metalMobileImg,
    metalMobileImg,
    videoPoster: 'https://ditfjx9w4x3vl.cloudfront.net/img/04-metal-cover.png',
    videoSource: 'https://ditfjx9w4x3vl.cloudfront.net/media/04-metal.mp4',
    videoSourceWebm: 'https://ditfjx9w4x3vl.cloudfront.net/media/04-metal.webm',
    isOverlay: true,
    title: 'Outstanding All-metal Build',
    subtitle: 'Over 10 times better tolerances than plastic alternatives with its rock-solid frame. ',
  },
  expand: {
    name: 'expand',
    title: 'It\'s All about Expandability',
    subtitle: 'The design of the module not only allows it to be compatible with future upgrade, but also empower users to enrich its uses with their own imagination.',
    img: expandimg,
    isOverlay: true,
    expandMobileImg,
  },
  strong: {
    name: 'strong',
    title: 'Now even more stable.',
    subtitle: 'Designed to consistently deliver strong and stable performance.',
    // img: strongimg,
    isOverlay: true,
    hasBackground: true,
  },
  modular: {
    name: 'modular',
    title: 'You’ve never seen anything like it.',
    subtitle: 'It’s modular. You can build it in 10 minutes, and be free to transform it into the machine you need.',
    img: modularimg,
    modularMobileImg,
    isOverlay: true,
    bgHeight: '800px',
  },
  controller: {
    name: 'controller',
    title: 'Simplify the way you build and transform it.',
    subtitle: 'With the integrated modules and connectors, you will love how easy it is to build and transform it.',
    img: controllerimg,
    controllerMobileImg,
    isOverlay: true,
    // bgHeight: '720px',
  },
  enclosure: {
    name: 'enclosure',
    title: 'Enclosure',
    img: enclosureimg,
    subtitle: 'The enclosure gives you a quieter and safer making environment. It can effectively reduce the noise by 10db. It also keeps your pets or kids away from possible hazards when it\'s laser engraving and CNC carving.',
    routerContent: 'See Full Specs',
  },
  software: {
    name: 'software',
    title: 'Free 3-in-1 Software',
    img: softwareimg,
    softwareMobileImg,
    link: 'https://luban.xyz/',
    displayImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/07-software.gif',
    bottomImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/07-software-feature.png',
    subtitle: 'With the 3-in-1 software, Snapmaker Luban, your stunning creation is just a few clicks away.',
  },
  summary: {
    name: 'summary',
    title: 'Snapmaker Original: Turn Your Desktop Into a Workshop',
    homePageTitle: 'Snapmaker Modular 3-in-1 Series',
    // img: summaryimg,
    img: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2summary-20191106.png',
    summaryMobileImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2summary-20191106.png',
    homePageImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2summary-20210519.png',
    homePageSummaryMobileImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/Home2summary-20210519-mobile.png',
    bgHeight: '600px',
    bgHeightMobile: '281x',
    isOverlay: false,
    subtitle: 'On the market, one 3D printer with the same quality as the Snapmaker 3-in-1 3D Printer will cost you $699. Here, in addition to a 3D printer, you will also have a laser engraver and a CNC carver AT THE SAME PRICE.',
    // subtitle: 'The earlier you place the pre-order, the sooner you will receive the Snapmaker.',
    cta: 'Buy Now',
    buttonHome2Href: 'https://shop.snapmaker.com/products/3-in-1-3d-printer',
    buttonMobileHref: 'https://shop.snapmaker.com/products/3-in-1-3d-printer',
    homePageButtonMobileHref: 'https://shop.snapmaker.com/collections/featured-collection',
    homePageButtonHome2Href: 'https://shop.snapmaker.com/collections/featured-collection',
    h3: 'Redefine the way you make.'
  },
};
