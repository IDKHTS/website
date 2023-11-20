const productTitle = 'SNAPMAKER: THE 3-IN-1 3D PRINTER'
const productContent = 'Turn your desktop into a workshop. This all-metal and modular 3D printer can turn into a CNC machine or laser engraver. Easy to use, expandable, and impressively affordable.'
const platformTitle = 'SNAPMAKER: The Expandable Platform'
const platformContent = 'Expandable Platform. Make Anything.Snapmaker makes a platform of growing variety of building modules, empowering you to build various machines to create all your inventions.'

const headConfigs = {
  default: {
    inner: 'THE 3-IN-1 3D PRINTER',
    separator: '-',
    complement: 'Snapmaker',
    meta: [
      { name: 'application-name', content: productTitle },
      { name: 'description', content: productContent, id: 'desc' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content: productTitle },
      // with shorthand
      { n: 'twitter:description', c: productContent },
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: productTitle },
      { itemprop: 'description', content: productContent }
    ]
  },
  about: {
    title: 'About Us',
    meta: [
      { name: 'description', content: "Learn more about Snapmaker's history, vision and career opportunities." },
      { name: 'keywords', content: "Snapmaker's Vison, Snapmaker's History, Snapmaker's Career Opportunities, Snapmaker's Job Openings, 3D Printing Job Openings" }
    ]
  },
  Affiliate: { title: 'Affiliate Program' },
  Referral: { title: 'Referral Program' },
  community: { title: 'Community' },
  distributor: { title: 'Where to Buy' },
  document: { title: 'Document' },
  fiveAnniversary: { title: "Snapmaker's 5th Anniversary" },
  home: {
    separator: '|',
    title: 'Snapmaker Official Site',
    titleTemplate: 'Snapmaker | The Best 3-in-1 3D Printer Manufacturer',
    meta: [
      { name: 'description', content: 'Snapmaker offers a simple solution to 3D printing, laser engraving, and CNC carving and combines them into one high-quality 3-in-1 3D printer.' },
      { name: 'keywords', content: '3D Printer, Laser Engraver, CNC Cutter, 3-in-1 3D printer' }
    ]
  },
  CNHome: {
    titleTemplate: 'Snapmaker 快造科技｜全球领先的桌面级多功能 3D 打印机公司',
    meta: [
      { name: 'description', content: 'Snapmaker 成立于 2016 年，是一家集研发、生产和销售桌面级多功能 3D 打印机的科技公司。通过将 3D 打印、激光雕刻及切割、CNC 雕刻切割技术集成到简单易用、稳定可靠的产品上，实现三合一功能，荣获国内外多项大奖，并创造了 2019 年全球 3D 打印机众筹金额最高成绩，获得了全球众多用户喜爱和肯定。' },
      { name: 'keywords', content: '3D打印，激光雕刻，CNC切割，三合一3D打印机' }
    ]
  },
  press: { title: 'Support' },
  product: {
    title: '',
    meta: [
      { name: 'application-name', content: productTitle },
      { name: 'description', content: productContent, id: 'desc' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content: productTitle },
      // with shorthand
      { n: 'twitter:description', c: productContent },
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: productTitle },
      { itemprop: 'description', content: productContent }
      // ...
      // Facebook / Open Graph
      // { property: 'fb:app_id', content: '123456789' },
      // { property: 'og:title', content: 'Content Title' },
      // // with shorthand
      // { p: 'og:image', c: 'https://example.com/image.jpg' },
    ]
  },
  platform: [
    { name: 'application-name', content: platformTitle },
    { name: 'description', content: platformContent, id: 'desc' }, // id to replace intead of create element
    // ...
    // Twitter
    { name: 'twitter:title', content: platformTitle },
    // with shorthand
    { n: 'twitter:description', c: platformContent },
    // ...
    // Google+ / Schema.org
    { itemprop: 'name', content: platformTitle },
    { itemprop: 'description', content: platformContent }
  ],
  contact: {
    tel: 'Tel: +86(0)755 26926117',
    serviceTime: 'Office Hours: Monday to Friday, 9:30-18:30 (GMT+8:00)'
  },
  snapmakerOriginal: {
    title: 'Snapmaker Original',
    meta: [
      { name: 'description', content: "Snapmaker Original was the first commercially avalaible 3-in-1 3D printer. It's easy to use, quick to set up, and can 3D print, laser engrave, and CNC cut relatively small objects." },
      { name: 'keywords', content: 'Snapmaker Original, 3D Printer, Laser Engraver, CNC Cutter' }
    ]
  },
  products: {
    title: 'Snapmaker 3D Printers',
    meta: [
      { name: 'description', content: "Snapmaker's desktop 3D printers have united tens of thousands of makers around the world and they offer excellent customer and software support." }
    ]
  },
  materials: {
    title: 'Materials',
    meta: [
      // { name: 'description', content: "Snapmaker's desktop 3D printers have united tens of thousands of makers around the world and they offer excellent customer and software support." }
    ]
  },
  materialGuide: {
    title: 'Materials-3D Guide',
    meta: [
      // { name: 'description', content: "Snapmaker's desktop 3D printers have united tens of thousands of makers around the world and they offer excellent customer and software support." }
    ]
  },
  repair: { title: 'RepairService' },
  snapmaker2: {
    title: 'Snapmaker 2.0 A Models',
    meta: [
      { name: 'description', content: 'Equipped with a newly designed 3D printing module, high power laser cutting module, and improved CNC carving module, Snapmaker 2.0 can now print larger objects with greater precision.' },
      { name: 'keywords', content: 'Snapmaker 2.0, 3D Printer, Laser Engraver, CNC Cutter, High Power Laser Cutting Module' }
    ]
  },
  snapmaker2f: {
    title: 'Snapmaker 2.0 F Models',
    metas: []
  },
  artisan: {
    noDefault: true,
    inner: 'THE 3-IN-1 3D PRINTER',
    separator: '-',
    complement: 'Snapmaker',
    title: 'Snapmaker Artisan 3D Printer | Next Generation 3D Printer',
    meta: [
      { property: 'description', content: 'Snapmaker introduce industrial-grade transmission technology to desktop fabrication. Our next generation Artisan 3D printer is equipped with a Dual-extrusion 3D Printing Module that supports PVA, HIPS and other dissolvable materials.' },
      { property: 'og:url', content: 'https://snapmaker.com/snapmaker-artisan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Snapmaker Artisan 3D Printer | Next Generation 3D Printer' },
      { property: 'og:image:alt', content: 'Check out details on Snapmaker Artisan 3-in-1 3D printer.' },
      {
        property: 'og:description', content: `Snapmaker introduce industrial-grade transmission technology to desktop fabrication. Our next generation Artisan 3D printer is equipped with a Dual-extrusion 3D Printing Module that supports PVA, HIPS and other dissolvable materials.` },
      { property: 'og:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/artisan-subscribe-compressed.jpg' },

      { property: 'twitter:url', content: 'https://snapmaker.com/snapmaker-artisan' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Snapmaker Artisan 3D Printer | Next Generation 3D Printer' },
      {
        property: 'twitter:description', content: `Snapmaker introduce industrial-grade transmission technology to desktop fabrication. Our next generation Artisan 3D printer is equipped with a Dual-extrusion 3D Printing Module that supports PVA, HIPS and other dissolvable materials.` },
      { property: 'twitter:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/artisan-subscribe-compressed.jpg' },
      { property: 'twitter:image:alt', content: 'Check out details on Snapmaker Artisan 3-in-1 3D printer.' },
      { property: 'twitter:site', content: 'https://snapmaker.com/snapmaker-artisan' }
    ],
    link: [
      { rel: 'preload', href: 'https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/frame-animation/14-touchscreen/pc/7touchscreen-pc_00000.jpg', type: 'image/jpg', as: 'image' }
    ]
  },
  j1: {
    title: 'Snapmaker J1',
    meta: [
      { itemprop: 'name', content: 'The first IDEX 3D printer that prints at 350mm/s with highest acceleration of 10m/s' },
      { itemprop: 'description', content: 'The first IDEX 3D printer that prints at 350mm/s with highest acceleration of 10m/s' }
    ]
  },
  laserModules: {
    noDefault: true,
    inner: 'THE 3-IN-1 3D PRINTER',
    separator: '-',
    complement: 'Snapmaker',
    title: 'Snapmaker 20W And 40W Laser Module',
    meta: [
      { property: 'description', content: 'Snapmaker 20W & 40W Laser Module are our latest high power diode laser addons, equipped with Air Assist. Snapmaker 2.0 and Artisan users can upgrade their printers to much stronger desktop laser cutters with these two powerful modules. ' },
      { property: 'og:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20w_and_40w_laser_module_header.png' },
      { property: 'twitter:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20w_and_40w_laser_module_header.png' }
    ]
  },
  ray: {
    noDefault: true,
    inner: 'THE 3-IN-1 3D PRINTER',
    separator: '-',
    complement: 'Snapmaker',
    title: 'Snapmaker Ray | 20W & 40W Laser Engraver and Cutter',
    meta: [
      { property: 'description', content: 'Ray is our first standalone 20W & 40W Laser Engraver and Cutter equipped with Air Assist, featuring a 400mm × 600mm large work area. It inherits Snapmaker’s signature industrial-grade linear rails and continues our long-standing endeavor to produce premium laser products. ' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Snapmaker Ray' },
      { property: 'og:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/ray/header-ray.png' },
      { property: 'twitter:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/ray/header-ray.png' }
    ]
  },
  raySpecs: {
    title: 'Snapmaker Ray - Specs',
    meta: []
  },
  quickSwapKit: {
    title: 'Snapmaker Quick Swap Kit',
    meta: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Snapmaker Quick Swap Kit' },
      { property: 'og:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/quick-swap-kit.jpg' },
      { property: 'twitter:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/quick-swap-kit.jpg' },
      { itemprop: 'name', content: 'Snapmaker Quick Swap Kit' },
      { itemprop: 'description', content: 'Snapmaker Quick Swap Kit' }
    ],
    script: [
      { src: 'https://www.youtube.com/iframe_api', async: true }
    ]

  },
  artisanSpecs: {
    title: 'Snapmaker Artisan - Specs',
    meta: []
  },
  snapmaker2Enclosure: {
    title: 'Snapmaker 2.0 Enclosure & Air Purifier',
    meta: [
      { name: 'description', content: 'Snapmaker 2.0 Enclosure & Air Purifer offers excellent protection against laser, debris, and dust and exhausts fumes generated during the making process for your Snapmaker 3D printer.' },
      { name: 'keywords', content: 'Snapmaker 2.0 Enclosure, Snapmaker 2.0 Air Purifier, Laser Protection, Exhaust System for Laser Engraving' }
    ]
  },
  snapmaker2Rotary: {
    title: 'Snapmaker 2.0 Rotary Module',
    meta: [
      { name: 'description', content: 'Snapmaker 2.0 Rotary Module is craftily designed for 4-axis machining with ultra-high precision parts for rotary laser and rotary CNC.' },
      { name: 'keywords', content: 'Snapmaker 2.0 Rotary Module, Rotary Laser Engraver, Rotary CNC Cutter' },
      { property: 'og:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_Rotary Module.png' },
      { property: 'twitter:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_Rotary Module.png' }

    ]
  },
  term: { title: 'Term Of Use' },
  thanks: { title: 'Thanks' },
  thankYou: { title: 'Thank You' },
  thankYouBackers: { title: 'Thank You Backers' },
  hightPowerLaser: {
    title: 'Snapmaker 10W High Power Laser Module',
    meta: [
      // { name: 'description', content: 'Snapmaker 2.0 Enclosure & Air Purifer offers excellent protection against laser, debris, and dust and exhausts fumes generated during the making process for your Snapmaker 3D printer.' },
      // { name: 'keywords', content: 'Snapmaker 2.0 Enclosure, Snapmaker 2.0 Air Purifier, Laser Protection, Exhaust System for Laser Engraving' }
    ]
  },
  christmas: {
    title: "Fulfill Your New Year's Wishes With Snapmaker",
    meta: []
  },
  software: {
    title: 'Snapmaker Luban | An Intuitive and Powerful 3D Printing Software',
    meta: [
      { name: 'description', content: "Snapmaker's 3D printing software offers a premium experience for your making projects." },
      { name: 'keywords', content: 'Snapmaker Luban, 3D Printing Software' },
      { property: 'og:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/snapmaker_luban.png' },
      { property: 'twitter:image', content: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/snapmaker_luban.png' }
    ]
  }
}


function secondaryPageTitleHandler(vm, navTarget) {
  let inner = vm.$route.params.id.replace(/^s/, 'S').replace(/2/, '2.0').replace(/-/, ' ')
  if (inner === 'rotary module') {
    inner = 'Rotary Module'
  }
  if (inner === 'filter enclosure') {
    inner = 'Snapmaker 2.0 Enclosure & Air Purifier'
  }
  return inner + ' – ' + navTarget
}
function materialsHead(type) {
  // const type = vm.$route.params.type.toUpperCase()
  // console.log('get type router ', type)
  switch (type) {
    case `BREAKAWAY-PLA`: {
      return {
        title: 'Breakaway Support for PLA - Snapmaker',
        meta: [
          { name: `description`, content: `Breakaway Support for PLA is a PLA-based filament that breaks easily. It has a perfect interface with PLA, strong enough to support it and easily removable by bare hands.` }
        ]
      }
    }
    case `NYLON`: {
      return {
        title: 'NYLON - Snapmaker',
        meta: [{ name: `description`, content: `Nylon is ultra tough and strong material for 3D printing. It's highly preferred when printing engineering applications that require excellent mechanical properties.` }]
      }
    }
    case `ABS`: {
      return {
        title: 'ABS - Snapmaker',
        meta: [{ name: `description`, content: `ABS is strong, durable, and heat-resistant, but a bit more difficult to print with, as it is quite sensitive to temperature.` }]
      }
    }
    default: {
      return {
        title: type + ' - Snapmaker'
      }
    }
  }
}

for (let key in headConfigs) {
  const headConfig = headConfigs[key]
  if (headConfig.noDefault) {
    continue
  }
  if (!headConfig.title) {
    headConfig.title = headConfigs.default.inner
  }
  if (!headConfig.separator) {
    headConfig.separator = headConfigs.default.separator
  }
  if (!headConfig.titleTemplate) {
    headConfig.titleTemplate = '%s ' + `${headConfig.separator} ${headConfigs.default.complement}`
  }
  if (!headConfig.meta) {
    headConfig.meta = headConfigs.default.meta
  }
}

export {
  materialsHead,
  secondaryPageTitleHandler,
  headConfigs
}

export default headConfigs
