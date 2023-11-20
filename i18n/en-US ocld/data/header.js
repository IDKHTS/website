export default
{
  logo: {
    img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/snapmaker-logo.svg',
    traceID: 'nav-logo'
  },
  menus: [
    {
      typeText: 'Products',
      // typeText: 'Products',
      type: 'Products',
      traceID: 'nav-title-products',
      route: '/products',
      dropdowns: [
        {
          title: 'Snapmaker Ray',
          description: 'High power diode laser cutter of good value.',
          defaultRoute: '/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist',
          // defaultLink: 'https://us.snapmaker.com/products/snapmaker-j1-independent-dual-extruder-3d-printer',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/ray/header-ray.png',
          // propagandaIcon: `https://ditfjx9w4x3vl.cloudfront.net/assets/global/reddot_B.svg`,
          categories: [
            {
              // isPreHeat: true,
              isNew: true,
              name: 'Snapmaker Ray',
              traceID: 'nav-subtitle-ray',
              route: '/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist',
              // link: 'https://us.snapmaker.com/products/snapmaker-j1-independent-dual-extruder-3d-printer',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/ray/header-ray.png'
            }
          ]
        },
        {
          title: 'Snapmaker J1/J1s',
          description: 'The High Speed IDEX 3D Printer',
          // defaultRoute: '/j1-idex-3d-printer',
          defaultLink: 'https://us.snapmaker.com/products/snapmaker-j1-independent-dual-extruder-3d-printer',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/j1s_nav.png',
          // propagandaIcon: `https://ditfjx9w4x3vl.cloudfront.net/assets/global/reddot_B.svg`,
          categories: [
            {
              // isPreHeat: true,
              isNew: true,
              name: 'J1/J1s',
              traceID: 'nav-subtitle-j1',
              // route: '/j1-idex-3d-printer',
              link: 'https://us.snapmaker.com/products/snapmaker-j1-independent-dual-extruder-3d-printer',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/j1s_nav.png'
            }
          ]
        },
        {
          title: 'Snapmaker Artisan',
          description: 'The latest generation of Snapmaker 3-in-1 3D printer, with all 3 functions fully enhanced.',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/artisan-product.png',
          // propagandaIcon: `https://ditfjx9w4x3vl.cloudfront.net/assets/global/reddot_B.svg`,
          defaultRoute: '/snapmaker-artisan',
          // defaultLink: 'https://us.snapmaker.com/pages/snapmaker-artisan-3d-printer',
          categories: [
            {
              // isPreHeat: true,
              isNew: true,
              name: 'Artisan',
              route: '/snapmaker-artisan',
              // link: 'https://us.snapmaker.com/pages/snapmaker-artisan-3d-printer',
              traceID: 'nav-subtitle-artisan',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/artisan-product.png'
            }
          ]
        },
        {
          title: 'Snapmaker 2.0',
          description: 'High performance 3-in-1 3D printer, with a large build volume.',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_AT Models.png',
          // defaultLink: '/snapmaker-2',
          defaultRoute: '/snapmaker-2',
          // propagandaIcon: `https://ditfjx9w4x3vl.cloudfront.net/assets/global/IF.svg`,
          categories: [
            {
              name: 'AT & F Models',
              traceID: 'nav-subtitle-at-models',
              route: '/snapmaker-2',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_AT Models.png'
            }
            // {
            //   name: 'F Models',
            //   route: '/snapmaker-2-f',
            //   traceID: 'nav-subtitle-f-models',
            //   img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_F Models.png'
            // },
            // {
            //   name: 'A Models',
            //   route: '/snapmaker-2',
            //   traceID: 'nav-subtitle-f-models',
            //   img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/snapmaker2_A.png'
            // }
          ]
        },
        {
          title: 'Modules and Addons',
          description: 'Customize your Snapmaker 2.0 and expand its functionalities.',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20w_and_40w_laser_module_header.png',
          defaultRoute: '/snapmaker-20w-and-40w-laser-module-with-air-assist',
          // defaultLink: 'https://us.snapmaker.com/products/snapmaker-20w-and-40w-laser-module-with-air-assist',
          categories: [
            {
              name: '20W & 40W Laser Module',
              traceID: 'nav-subtitle-20w-40w-laser-modules',
              route: '/snapmaker-20w-and-40w-laser-module-with-air-assist',
              // link: 'https://us.snapmaker.com/products/snapmaker-20w-and-40w-laser-module-with-air-assist',
              isNew: true,
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20w_and_40w_laser_module_header.png'
            },
            {
              name: '2.0 Quick Swap Kit',
              traceID: 'nav-subtitle-quick-swap-kit',
              route: '/snapmaker-quick-swap-kit',
              isNew: true,
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/quick-swap-kit.jpg'
            },
            {
              name: 'Dual Extrusion Module',
              traceID: 'nav-subtitle-dual-extrusion-power-laser',
              link: 'https://us.snapmaker.com/products/snapmaker-dual-extrusion-3d-printing-module',
              isNew: true,
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/600 × 600.png'
            },
            {
              name: '10W Laser Module',
              traceID: 'nav-subtitle-10w-high-power-laser',
              route: '/snapmaker-10w-laser-module',
              // isNew: true,
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_10W Laser Module.png'
            },
            {
              name: 'Rotary Module(Harmonic Drive Version)',
              traceID: 'nav-subtitle-rotary-module',
              route: '/snapmaker-2-rotary-module',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_Rotary Module.png'
            },
            {
              name: 'More',
              traceID: 'nav-subtitle-more',
              route: '/snapmaker-2/addons'
              // img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/pic_10W Laser Module.png'
            }
          ]
        }
      ]
    },
    {
      typeText: 'Software',
      type: 'Software',
      traceID: 'nav-title-software',
      route: '/snapmaker-luban',
      dropdowns: [
        {
          title: 'luban',
          categories: [
            {
              name: 'Snapmaker Luban',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/snapmaker_luban.png',
              traceID: 'nav-subtitle-luban',
              route: '/snapmaker-luban'
            }
          ]
        }

      ]
    },
    {
      typeText: 'Materials',
      type: 'Materials',
      // traceID: 'nav-title-products',
      route: '/materials',
      dropdowns: [
        {
          title: 'materials',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/materials/pla.png',
          defaultRoute: '/materials/pla/normal',
          categories: [
            {
              name: 'PLA',
              // traceID: 'nav-subtitle-at-models',

              route: '/materials/pla/normal',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/materials/pla.png'
            },
            {
              name: 'TPU',
              // traceID: 'nav-subtitle-10w-high-power-laser',
              // route: {name: 'Material Detail', params: {type: 'tpu', item: ''}},
              route: '/materials/tpu/normal',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/materials/tpu.png'
            },
            {
              name: 'ABS',
              // traceID: 'nav-subtitle-10w-high-power-laser',
              // route: {name: 'Material Detail', params: {type: 'tpu', item: ''}},
              route: '/materials/abs/normal',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/materials/ABS.png'
            },
            {
              name: 'PVA',
              // traceID: 'nav-subtitle-10w-high-power-laser',
              // route: {name: 'Material Detail', params: {type: 'tpu', item: ''}},
              route: '/materials/pva/normal',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/materials/PVA.png'
            },
            {
              name: 'Nylon',
              // traceID: 'nav-subtitle-10w-high-power-laser',
              // route: {name: 'Material Detail', params: {type: 'tpu', item: ''}},
              route: '/materials/nylon/normal',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/materials/Nylon.png'
            },
            {
              name: 'Breakaway Support for PLA',
              // traceID: 'nav-subtitle-10w-high-power-laser',
              // route: {name: 'Material Detail', params: {type: 'tpu', item: ''}},
              route: '/materials/breakaway-pla/normal',
              img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/materials/Breakaway PLA.png'
            }
          ]
        }
      ],
      extraLinks: [
        {text: '3D Printing Filaments Guide', route: '/materials/3dp-guide'},
        {text: 'See All Materials ', route: '/materials'}
      ]
    },
    {
      typeText: 'Support',
      type: 'Support',
      traceID: 'nav-title-support',
      aLink: 'https://support.snapmaker.com/hc/en-us',
      dropdowns: [
        {
          title: 'Product Support',
          desc: `Know more about Snapmaker printers, modules, and addons.`,
          categories: [
            {
              name: `Snapmaker Artisan`,
              link: `https://support.snapmaker.com/hc/en-us/categories/12963984075031`
            },
            {
              name: `Snapmaker J1/J1s`,
              link: `https://support.snapmaker.com/hc/en-us/categories/12963989552151`
            },
            {
              name: `Snapmaker 2.0 AT/F/A Series`,
              link: `https://support.snapmaker.com/hc/en-us/categories/12964041494935`
            },
            {
              name: `10W Laser Module`,
              link: `https://support.snapmaker.com/hc/en-us/categories/12964100344215`
            },
            {
              name: `Rotary Module`,
              link: `https://support.snapmaker.com/hc/en-us/categories/12964106925719`
            },
            {
              name: `Enclosure`,
              link: `https://support.snapmaker.com/hc/en-us/categories/12964102668567`
            }
            // {
            //   name: `Air Purifier`,
            //   link: `https://support.snapmaker.com/hc/en-us/categories/12964105339031`
            // }
          ]
        },
        {
          title: 'Software Support',
          desc: `Know more about Snapmaker Luban and more.`,
          categories: [
            {
              name: `Snapmaker Luban`,
              link: `https://support.snapmaker.com/hc/en-us/categories/12963904565271`
            }
          ]
        },
        {
          title: 'Snapmaker Academy',
          desc: `Take a deep dive into the world of making.`,
          categories: [
            {
              name: `3D Printing`,
              link: `https://support.snapmaker.com/hc/en-us/sections/360008076253-3D-Printing`
            },
            {
              name: `Laser Engraving and Cutting`,
              link: `https://support.snapmaker.com/hc/en-us/sections/360009734754-Laser`
            },
            {
              name: `CNC Carving`,
              link: `https://support.snapmaker.com/hc/en-us/sections/360009349014-CNC`
            }
          ]
        },
        {
          title: 'Service',
          desc: `Get help from Snapmaker experts.`,
          categories: [
            {
              name: `Snapmaker Care`,
              route: '/support/snapmaker-care'
            },
            {
              name: `Product Warranty`,
              link: `https://support.snapmaker.com/hc/en-us/articles/360054262534-Snapmaker-s-Limited-Warranty`
            }
          ]
        }
      ],
      mainLinks: {
        text: 'Support Center',
        traceID: 'nav-subtitle-see-support',
        link: 'https://support.snapmaker.com/hc/en-us'
      }
    },
    {
      typeText: 'Community',
      type: 'Community',
      traceID: 'nav-title-community',
      route: '/community',
      dropdowns: [
        {
          title: 'Activities',
          desc: 'Make something wonderful together with us.',
          categories: [
            {
              name: 'Snapmaking Contest',
              route: '/community/contests'
            },
            {
              name: 'Starmaker',
              route: '/community/starmaker'
              // link: 'https://snapmaker.com/blog/category/starmaker-program/'
            },
            {
              name: 'User Case',
              route: '/community/user-case'
            },
            {
              name: 'Referral Program',
              route: '/referral-program'
            }
          ]
        },
        {
          title: 'Group',
          desc: 'Meet new people, share knowledge, or get support.',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/assets/header/materials/TPU.png',
          categories: [
            {
              name: 'Snapmaker Artisan Group',
              link: 'https://www.facebook.com/groups/snapmakerartisan'
            },
            {
              name: 'Snapmaker J1 Group',
              link: 'https://www.facebook.com/groups/snapmakerj1'
            },
            {
              name: 'Snapmaker Original/2.0 Group',
              link: 'https://www.facebook.com/groups/snapmaker'
            },
            {
              name: 'Snapmaker Promotions and activities',
              link: 'https://www.facebook.com/groups/newsnapmaker'
            }
          ]
        },
        {
          title: 'Blog',
          desc: 'Learn the past, the present, and the future of Snapmaker.',
          descLink: {
            link: 'https://snapmaker.com/blog/',
            text: 'Learn More'
          },
          categories: [
          ]
        },
        {
          title: 'Forum',
          desc: 'Discuss everything about Snapmaker and beyond with users from around the world.',
          descLink: {
            link: 'https://forum.snapmaker.com',
            text: 'Visit Forum'
          },
          categories: [
          ]
        }
      ],
      mainLinks: {
        text: 'See All',
        traceID: 'nav-subtitle-see-community',
        route: '/community'
      }
    }
  ],
  btns: [{ text: 'Store', traceID: 'nav-store', link: 'https://us.snapmaker.com/' }],
  allProducts: {
    text: 'See All',
    traceID: 'nav-subtitle-see-all-products',
    link: '/products'
  }
}
