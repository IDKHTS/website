/* eslint-disable */
export default {
  name: 'products',
  block1: {
    topImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/products-1.jpg',
    h2: '3-in-1 3D Printer',
    h4: 'Turn your desktop into a workshop',
    buttonhref: 'https://shop.snapmaker.com/collections/featured-collection/products/3-in-1-3d-printer',
    buynow: 'Buy Now',
    buttonto: '/product',
    learnmore: 'Learn More',
  },
  block2: [
    {
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/products-2a.png',
      key: 1,
      h3: '1600mW Laser Cutting Module',
      buttonhref: 'https://shop.snapmaker.com/collections/featured-collection/products/laser-module',
      buynow: 'Buy Now',
    },
    {
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/products-2b.jpg',
      key: 2,
      h3: 'Enclosure for 3-in-1 3D Printer',
      buttonhref: 'https://shop.snapmaker.com/collections/featured-collection/products/enclosure',
      buynow: 'Buy Now',
    },
  ],
  block3: {
    h2: 'Snapmaker 2.0',
    h4: 'The 3-in-1 3D Printers That are Better in Every Way',
    buttonto: '/platform',
    learnmore: 'Learn More',
  },
  addons: [
      {
          mainTitle: 'Enclosure V1.1',
          tag: 'enclosure',
          content: `The recommended addon to protect you from
            potential hazards when using the printer.`,
          params: [
              {
                  keypoint: 'Key Feature',
                  value: 'Door Detection',
              },
              {
                  keypoint: 'Surface Material',
                  value: 'Acrylic',
              },
          ],
          buttonText: 'Buy Now',
          floatDirection: 'left',
          buttonHref: 'https://shop.snapmaker.com/products/enclosure',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_Enclosure_620x660.png',

      },
      {
          mainTitle: '1600mW Laser Cutting Module',
          tag: 'laser-cutting-module',
          content: 'Turn your Snapmaker Original into a mini cutting machine.',
          params: [
              {
                  keypoint: 'laser',
                  value: '1600mW 445nm Laser Diode',
              },
              {
                  keypoint: 'Safety Class',
                  value: 'Class 4',
              },
          ],
          buttonText: 'Buy Now',
          floatDirection: 'right',
          buttonHref: 'https://shop.snapmaker.com/products/laser-module',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_LaserCuttingModule_620x660.png',

      },
      {
          mainTitle: 'Z-Axis Extension Module',
          tag: 'z-axis-extension-module',
          content: `Effectively increases the build volume of your Snapmaker
         Original by 76%!`,
          params: [
              {
                  keypoint: 'Effective Length',
                  value: '221 mm',
              },
          ],
          buttonText: 'Buy Now',
          floatDirection: 'left',
          buttonHref: 'https://shop.snapmaker.com/products/z-axis-extension-module',
          img: 'https://ditfjx9w4x3vl.cloudfront.net/img/pic_Z-AxisExtension Module_620x660.png',

      },
  ],
  snapmaker2Addons: [
    {
      mainTitle: 'Enclosure',
      content: 'Built to protect, reduce noise, and brighten up your workplace.',
      tag: 'enclosure',
      keyText: 'Key Features',
      keyFeature: 'Add the Door Detection feature and reduce noise of making Create a stable enviornment and help protect you from laser',
      buyBtnText: 'Buy Now',
      buyBtnHref: 'https://shop.snapmaker.com',
      learnMoreHref: '/product/filter-enclosure#enclosure',
      learnMoreText: 'Learn More',
      floatDirection: 'left',
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/enclosure.png'
    },
    {
      mainTitle: 'Air Purifier',
      content: 'Filter odors created during your making process.',
      tag: 'airPurifier',
      keyText: 'Key Features',
      keyFeature: 'Filter particles with G4, F9, and H13 filters Absorb volatile organic compounds with a carbon filter',
      buyBtnText: 'Buy Now',
      buyBtnHref: 'https://shop.snapmaker.com/products',
      learnMoreHref: '/product/filter-enclosure#air-purifier',
      learnMoreText: 'Learn More',
      floatDirection: 'right',
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/air-purifier.png'
    },
    {
      mainTitle: 'Rotary Module',
      content: 'Turn your Snapmaker into a powerful 4-axis CNC powerhouse.',
      tag: 'rotary',
      keyText: 'Key Feature',
      keyFeature: '4-axis rotary carving and laser engraving',
      buyBtnText: 'Buy Now',
      buyBtnHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-rotary-module',
      learnMoreHref: '/product/rotary-module',
      learnMoreText: 'Learn More',
      floatDirection: 'left',
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/rotaryModule.png'
    },
    {
      mainTitle: 'CAN Hub',
      content: 'Connect any or all of your Snapmaker 2.0 addons.',
      tag: 'canhub',
      keyText: 'Key Features',
      keyFeature: 'Stable and reliable addon connection Compact and aluminum alloy design',
      buyBtnText: 'Buy Now',
      buyBtnHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-can-hub',
      // learnMoreHref: 'https://test.snapmaker.com/product/filter-enclosure#air-purifier',
      // learnMoreText: 'Learn More',
      floatDirection: 'right',
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/canhub.png'
    },
    {
      mainTitle: 'Emergency Stop Button',
      content: 'Provide an extra layer of safety and help salvage your prints.',
      tag: 'emergency-stop-button',
      keyFeature: 'Stop your Snapmaker with a press',
      keyText: 'Key Feature',
      buyBtnText: 'Buy Now',
      buyBtnHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-rotary-module',
      img: 'https://ditfjx9w4x3vl.cloudfront.net/img/emergencyStopButton.png',
      floatDirection: 'left'
    }
  ]
}
