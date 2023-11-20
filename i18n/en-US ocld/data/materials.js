export default {
  mainTitle: `Materials Library`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/PC_top%20.jpg`,
  mobileImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/mobile/pic_Materials Library_moblie.jpg`,
  mainDesc: [
    `Strict quality control. Refined formula. Astonishing performance. <br>`,
    `Snapmaker premium-quality 3D printing, laser, and CNC materials bring you a hassle-free making experience. `
  ],
  materialProducts: [
    {
      title: 'PLA',
      // description: 'Snapmaker 2.0 is one of our most iconic 3-in-1 3D printer series. It features our latest 3D printing, laser engraving and CNC cutting technologies and has a large build volume.',
      products: [
        {
          isRecommend: true,
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/pla1412.png',
          title: 'PLA',
          price: 'From $24.99',
          btns: [
            {
              // traceID: 'products-10w-laser-learn-more',
              text: 'Learn More',
              route: '/materials/pla/normal'
              // route: {name: 'Material Detail', params: {type: 'pla', item: ''}}
            },
            {
              // traceID: 'products-10w-laser-buy-now',
              text: 'Buy Now',
              link: 'https://us.snapmaker.com/collections/3d-printing-materials/products/pla-filament-1kg'
            }
          ]
        },
        {
          // isRecommend: true,
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Wood PLA.png',
          title: 'Wood PLA',
          price: '$29.99',
          btns: [
            {
              // traceID: 'products-10w-laser-learn-more',
              text: 'Learn More',
              route: '/materials/pla/wood'
            },
            {
              // traceID: 'products-10w-laser-buy-now',
              text: 'Buy Now',
              link: 'https://us.snapmaker.com/collections/3d-printing-materials/products/wood-pla-filament-750g'
            }
          ]
        },
        {
          // isRecommend: true,
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Glow-in-the-dark Green PLA.png',
          title: 'Glow-in-the-dark Green PLA',
          price: '$27.99',
          btns: [
            {
              // traceID: 'products-10w-laser-learn-more',
              text: 'Learn More',
              route: '/materials/pla/grow-in-the-dark'
            },
            {
              // traceID: 'products-10w-laser-buy-now',
              text: 'Buy Now',
              link: 'https://us.snapmaker.com/collections/3d-printing-materials/products/glow-in-the-dark-green-pla-filament-1kg'
            }
          ]
        }
      ]
    },
    {
      title: 'TPU',
      // description: 'Expand the skill sets of your Snapmaker 2.0 3D printers. Add protection, 4-axis CNC, or high power laser to your making arsenal.',
      products: [
        {
          isRecommend: true,
          // isNew: true,
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/TPU.png',
          title: 'TPU',
          price: '$34.99',
          btns: [
            {
              // traceID: 'products-10w-laser-learn-more',
              text: 'Learn More',
              route: '/materials/tpu/normal'
              // route: {path: '/materials/:type/:item', params: {type: 'tpu', item: ''}}
            },
            {
              // traceID: 'products-10w-laser-buy-now',
              text: 'Buy Now',
              link: 'https://us.snapmaker.com/collections/3d-printing-materials/products/tpu-filament-1kg'
            }
          ]
        },
        {
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/High Flow TPU95.png',
          title: 'High Flow TPU95',
          price: '$44.99',
          btns: [
            {
              text: 'Learn More',
              route: '/materials/tpu/high-flow-tpu95'
            },
            {
              text: 'Buy Now',
              link: 'https://shop.snapmaker.com/collections/3d-printing-materials/products/black-high-flow-tpu95-filament-1-kg'
            }
          ]
        }
      ]
    },
    {
      title: 'ABS',
      // description: 'Expand the skill sets of your Snapmaker 2.0 3D printers. Add protection, 4-axis CNC, or high power laser to your making arsenal.',
      products: [
        {
          isRecommend: true,
          // isNew: true,
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/ABS-1.png',
          title: 'ABS',
          price: '$24.99',
          btns: [
            {
              text: 'Learn More',
              route: '/materials/abs/normal'
            },
            {
              // traceID: 'products-10w-laser-buy-now',
              text: 'Buy Now',
              link: 'https://shop.snapmaker.com/collections/3d-printing-materials/products/abs-filament-1-kg'
            }
          ]
        }
      ]
    },
    {
      title: 'PVA',
      // description: 'Expand the skill sets of your Snapmaker 2.0 3D printers. Add protection, 4-axis CNC, or high power laser to your making arsenal.',
      products: [
        {
          isRecommend: true,
          // isNew: true,
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/PVA-1.png',
          title: 'PVA',
          price: '$34.99',
          btns: [
            {
              text: 'Learn More',
              route: '/materials/pva/normal'
            },
            {
              // traceID: 'products-10w-laser-buy-now',
              text: 'Buy Now',
              link: 'https://shop.snapmaker.com/collections/3d-printing-materials/products/pva-filament-500g'
            }
          ]
        }
      ]
    },
    {
      title: 'Nylon',
      // description: 'Expand the skill sets of your Snapmaker 2.0 3D printers. Add protection, 4-axis CNC, or high power laser to your making arsenal.',
      products: [
        {
          isRecommend: true,
          // isNew: true,
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Nylon-1.png',
          title: 'Nylon',
          price: '$59.99',
          btns: [
            {
              text: 'Learn More',
              route: '/materials/nylon/normal'
            },
            {
              // traceID: 'products-10w-laser-buy-now',
              text: 'Buy Now',
              link: 'https://shop.snapmaker.com/collections/3d-printing-materials/products/black-nylon-filament-1kg'
            }
          ]
        }
      ]
    },
    {
      title: 'Breakaway Support for PLA',
      // description: 'Expand the skill sets of your Snapmaker 2.0 3D printers. Add protection, 4-axis CNC, or high power laser to your making arsenal.',
      products: [
        {
          isRecommend: true,
          // isNew: true,
          imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Breakaway PLA-1.png',
          title: 'Breakaway Support for PLA',
          price: '$54.99',
          btns: [
            {
              text: 'Learn More',
              route: '/materials/breakaway-pla/normal'
            },
            {
              // traceID: 'products-10w-laser-buy-now',
              text: 'Buy Now',
              link: 'https://shop.snapmaker.com/collections/3d-printing-materials/products/white-breakaway-pla-filament-1-kg'
            }
          ]
        }
      ]
    }
  ],
  btn: {
    text: 'Learn More',
    route: '/materials/3dp-guide'
  },
  guideTitle: `3D Printing Filaments Guide`,
  guideDesc: [
    `Having trouble making decisions? <br>`,
    `Access our 3D Printing Filaments Guide to learn about various filaments, their differences, and applications. You can find the best fit for your intended use.`
  ],
  guideImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Mask_group.jpg`,
  guideMobileImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/mobile/pic_3D Printing Filaments Guide_moblie.jpg`

}
