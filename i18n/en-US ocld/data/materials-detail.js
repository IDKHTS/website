export default [
  {
    type: `pla`, // be sure equal the router params 'type' of /materials-detail/:type
    mainTitle: `Snapmaker PLA`,
    mainDesc: `PLA is the most commonly used and user-friendly filament in 3D printing. Being inexpensive and environmentally friendly, it is the go-to option for many makers. Snapmaker improves its already-adequate strength even further with a refined formula. PLA can print parts useful for a wide range of applications, including prototypes, miniatures, and home decorations.`,
    tabs: [
      {text: `PLA`, key: `normal`},
      {text: `Wood PLA`, key: `wood`},
      {text: `Glow-in-the-dark Green PLA`, key: `grow-in-the-dark`}
    ],
    normal: {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/pla_top_banner.png`,
      keyFeat: {
        title: 'Key Features',
        feats: [
          {
            title: `Improved Mechanical Properties`,
            desc: `With a refined formula, it is stronger and less prone to cracking.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/Improved Mechanical Properties-1.jpg`
          },
          {
            title: `No Bubble `,
            desc: `Premium-quality filaments bring you a high success rate of 3D prints.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/No Bubble-1.jpg`
          },
          {
            title: `No Blockage`,
            desc: `With no nozzle blockage, enjoy the smooth extrusion and flow of ideas.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/No Blockage-1.jpg`
          },
          {
            title: `Minimal Warping`,
            desc: `High dimensional stability of PLA makes minimal warping possible.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/blackPLA minimal warping-1.jpg`
          },
          {
            title: `High Precision`,
            desc: `With an accuracy of +/- 0.05 mm, delicate works with precise details can be printed at ease.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/High Precision-1.jpg`
          },
          {
            title: `Wide Compatibility`,
            desc: `Compatible with Snapmaker 3D printers and most FDM 3D printers on the market.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/blackPLAcompatible-1.jpg`
          },
          {
            title: `Environmentally Friendly`,
            desc: `Made from fermented plant starch, it is degradable and compliant with RoHS.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/Environmentally Friendly-1.jpg`
          }
        ]

      },
      canPrint: {
        title: 'What You Can Print with PLA',
        cases: [
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/pla-case1.jpg'
            // title: 'Intro to Snapmaker Luban 4.0 for 3-axis CNC Carving',
            // time: 'Aug 28, 2021',
            // btn: {link: 'https://www.youtube.com/embed/E1srhsjoif0', text: 'Watch the video'},
            // link: ''
          },
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/pla-case2.jpg'
            // title: 'Intro to Snapmaker Luban 4.0 for Laser Engraving and Cutting',
            // time: 'Aug 18, 2021',
            // btn: {link: 'https://www.youtube.com/embed/8xVTmtsnaDo', text: 'Watch the video'},
            // link: ''
          },
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/pla-case3.jpg'
            // title: 'Intro to Snapmaker Luban 4.0 for 3D Printing',
            // time: 'Aug 18, 2021',
            // btn: {link: 'https://www.youtube.com/embed/jWhwQRfhFdw', text: 'Watch the video'},
            // link: ''
          }
        ]
      },
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `500 g/1 kg`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `190˚C–210˚C`},
            {key: `Heated Bed Temperature`, value: `25˚C–60˚C`},
            {key: `Recommended Printing Speed`, value: `40 mm/s–60 mm/s`},
            {key: `Young’s Modulus`, value: `2636 ± 330 Mpa`},
            {key: `Tensile Strength`, value: `46.6 ± 0.9 Mpa`},
            {key: `Bending Strength`, value: `85.1 ± 2.9 Mpa`},
            {key: `Charpy Impact Strength`, value: `2.7 ± 0.2 kJ/㎡`},
            {key: `Glass Transition Temperature`, value: `61˚C`},
            {key: `Vicat Softening Temperature`, value: `63˚C`},
            {key: `Melting Temperature`, value: `150˚C`}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            // `#0C63E2`,
            // `#E60000`,
            `#1F1F1F`,
            `#FFFFFF`
            // `#5E5C57`,
            // `#F5CE00`
          ],
          btn: {text: `Buy Now`, link: `https://us.snapmaker.com/products/pla-filament-1kg`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/PLA975.png`
        }
      ]
    },
    wood: {
      item: `wood`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/top-banner.png`,
      keyFeat: {
        title: 'Key Features',
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/top-banner.png`,
        feats: [
          {
            title: `Wood-like, yet Better`,
            desc: `Refined to a stable foam structure, it outperforms traditional wood composite. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/Wood-like, yet Better.jpg`
          },
          {
            title: `No Wood Powder, No Blockage`,
            desc: `An even and stable feeding enabled with zero wood powder. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/No Wood Powder, No Blockage.jpg`
          },
          {
            title: `Less Weight`,
            desc: `Wood-like density, lighter, and fit for a wide range of applications. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/Less Weight.jpg`
          },
          {
            title: `Minimal Warping`,
            desc: `High dimensional stability of PLA makes minimal warping possible. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/Minimal Warp.jpg`
          },
          {
            title: `High Precision`,
            desc: `With an accuracy of +/- 0.05 mm, delicate works with precise details can be printed at ease. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/Group 706.jpg`
          },
          {
            title: `Wide Compatibility`,
            desc: `Compatible with Snapmaker 3D printers and most FDM 3D printers on the market.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/Group 708.jpg`
          },
          {
            title: `Environmentally Friendly `,
            desc: `Made from fermented plant starch, it is eco-friendly and compliant with RoHS.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/Environmentally Friendly.jpg`
          }
        ]
      },
      canPrint: {
        title: 'What You Can Print with Wood PLA',
        cases: [
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/case1.jpg'
          },
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/case2.jpg'
          },
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/case3.jpg'
          }
        ]
      },
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `750 g`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `190˚C–210˚C`},
            {key: `Heated Bed Temperature`, value: `25˚C–60˚C`},
            {key: `Recommended Printing Speed`, value: `30 mm/s–50 mm/s`},
            {key: `Young’s Modulus`, value: `2636 ± 330 Mpa`},
            {key: `Tensile Strength`, value: `23.2 ± 0.4 Mpa`},
            {key: `Bending Strength`, value: `52.9 ± 0.3 Mpa`},
            {key: `Charpy Impact Strength`, value: `2.1 ± 0.2 kJ/㎡`},
            {key: `Glass Transition Temperature`, value: `62˚C`},
            {key: `Vicat Softening Temperature`, value: `60˚C`},
            {key: `Melting Temperature`, value: `151˚C`}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            `#D8A068`
          ],
          // btn: {text: `Buy Now`, link: `https://us.snapmaker.com/products/wood-pla-filament-750g`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/wood-pla/wood-pla.png`
        }
      ]
    },
    'grow-in-the-dark': {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/top-banner.png`,
      keyFeat: {
        title: 'Key Features',
        feats: [
          {
            title: `Glow in the Dark `,
            desc: `Impressive luminous effect in the dark after absorbing light energy. A brand-new way of printing fun.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/Glow in the Dark.jpg`
          },
          {
            title: `No Bubble `,
            desc: `Premium-quality filaments bring you a high success rate of 3D prints.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/No Bubble.jpg`
          },
          {
            title: `No Blockage`,
            desc: `With no nozzle blockage, enjoy the smooth extrusion and flow of ideas.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/No Blockage.jpg`
          },
          {
            title: `Minimal Warping`,
            desc: `High dimensional stability of PLA makes minimal warping possible.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/Minimal Warp.jpg`
          },
          {
            title: `High Precision`,
            desc: `With an accuracy of +/- 0.05 mm, delicate works with precise details can be printed at ease.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/High Precision.jpg`
          },
          {
            title: `Wide Compatibility`,
            desc: `Compatible with Snapmaker 3D printers and most FDM 3D printers on the market.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/Wide Compatibility.jpg`
          },
          {
            title: `Environmentally Friendly`,
            desc: `Made from fermented plant starch, it is eco-friendly and compliant with RoHS.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/Environmentally Friendly.jpg`
          }
        ]
      },
      canPrint: {
        title: 'What You Can Print with Glow-in-the-dark Green PLA',
        cases: [
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/img_Video Tutorials.jpg'
          },
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/Mask Group.jpg'
          }
        ]
      },
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `1 kg`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `190˚C–230˚C`},
            {key: `Heated Bed Temperature`, value: `25˚C–60˚C`},
            {key: `Recommended Printing Speed`, value: `40 mm/s–60 mm/s`},
            {key: `Young’s Modulus`, value: `2636 ± 330 Mpa`},
            {key: `Tensile Strength`, value: `46.6 ± 0.9 Mpa`},
            {key: `Bending Strength`, value: `85.1 ± 2.9 Mpa`},
            {key: `Charpy Impact Strength`, value: `2.7 ± 0.2 kJ/㎡`},
            {key: `Glass Transition Temperature`, value: `61˚C`},
            {key: `Vicat Softening Temperature`, value: `63˚C`},
            {key: `Melting Temperature`, value: `150˚C`}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            `#06D761`
          ],
          // btn: {text: `Buy Now`, link: `https://us.snapmaker.com/products/glow-in-the-dark-green-pla-filament-1kg`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/glow-in-dark-pla/glow-in-dark-pla.png`
        }
      ]
    },
    compatible: {
      title: `Compatible with`,
      machines: [
        {
          name: `Snapmaker Artisan 3-in-1<br>3D Printer`,
          desc: `The latest generation of Snapmaker 3-in-1 3D printer, with all 3 functions fully enhanced.`,
          btn: {text: `Learn More`, route: `/snapmaker-artisan`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A400.png`
        },
        {
          name: `Snapmaker 2.0 <br> Modular 3-in-1 3D Printers`,
          desc: `High performance 3-in-1 3D printer, with a large build volume.`,
          btn: {text: `Learn More`, route: `/snapmaker-2`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A350T.png`
        }
      ]

    }
  },
  {
    type: `tpu`,
    mainTitle: `Snapmaker TPU`,
    mainDesc: `TPU is a highly flexible, elastic and abrasion resistant material. Parts made of TPU are durable, and can withstand high impact, wear and tear, and certain chemicals. Thanks to its properties, TPU is widely used in footwear, aerospace, automotive, industrial machinery, and electronics industries. Compared to regular TPU, high flow TPU is optimized in fluidity for high-speed printing at 80 to 100 mm/s.`,
    tabs: [
      {text: `TPU`, key: `normal`},
      {text: `High Flow TPU95`, key: `high-flow-tpu95`}
    ],
    normal: {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/top-banner.png`,
      keyFeat: {
        title: 'Key Features',
        feats: [
          {
            title: `Perfect Flexibility`,
            desc: `Featuring a Shore Hardness of 95A, it offers excellent flexibility and elasticity.  `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/Perfect Flexibility.jpg`
          },
          {
            title: `High Abrasion Resistance`,
            desc: `Highly resistant to friction, rubbing or grazing, it is ideal for printing durable parts. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/High Abrasion Resistance.jpg`
          },
          {
            title: `No Bubble `,
            desc: `Premium-quality filaments bring you a high success rate of 3D prints. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/No Bubble.jpg`
          },
          {
            title: `No Blockage`,
            desc: `With no nozzle blockage, enjoy the smooth extrusion and flow of ideas.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/No Blockage.jpg`
          },
          {
            title: `High Precision`,
            desc: `With an accuracy of +/- 0.05 mm, delicate works with precise details can be printed at ease.`,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/High Precision.jpg`
          },
          {
            title: `Wide Compatibility`,
            desc: `Compatible with Snapmaker 2.0 Modular 3-in-1 3D Printers and most FDM 3D pinrters on the market. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/Wide Compatibility.jpg`
          },
          {
            title: ` Compliant with RoHS `,
            desc: `Compliant with RoHS to guarantee your safety and minimize environmental impact. `,
            imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/Compliant with RoHS.jpg`
          }
        ]
      },
      canPrint: {
        title: 'What You Can Print with TPU',
        cases: [
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/case1.jpg'
          },
          {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/case2.jpg'
          }
        ]
      },
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `1 kg`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `210˚C–230˚C`},
            {key: `Heated Bed Temperature`, value: `25˚C–60˚C`},
            {key: `Recommended Printing Speed`, value: `20 mm/s–40 mm/s`},
            {key: `100% Modulus`, value: `9.4 ± 0.3 Mpa`},
            {key: `Tensile Strength`, value: `29 ± 2.8 Mpa`},
            {key: `Elongation at Break`, value: `330.1 ± 14.9 (%)`},
            {key: `Shore Hardness`, value: `95A`}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            `#000000`,
            `#F5CE00`
          ],
          // btn: {text: `Buy Now`, link: `https://us.snapmaker.com/products/pla-filament-1kg`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/TPU.png`
        }
      ]
    },
    'high-flow-tpu95': {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/High Flow TPU95.png`,
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `1 kg`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `200˚C–220˚C`},
            {key: `Heated Bed Temperature`, value: `25˚C–50˚C`},
            {key: `Recommended Printing Speed`, value: `40 mm/s–100 mm/s`},
            {key: `100% Modulus`, value: `13.24 ± 0.29 MPa`},
            {key: `Tensile Strength`, value: `23.11 ± 0.63 MPa`},
            {key: `Elongation at Break`, value: `462.3 ± 21.1 (%) `},
            {key: `Shore Hardness`, value: `95A`}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            `#1F1F1F `
          ],
          btn: {text: `Buy Now`, link: `https://shop.snapmaker.com/collections/3d-printing-materials/products/black-high-flow-tpu95-filament-1-kg`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/High Flow TPU95.png`
        }
      ]
    },
    compatible: {
      title: `Compatible with`,
      machines: [
        {
          name: `Snapmaker Artisan 3-in-1<br>3D Printer`,
          desc: `The latest generation of Snapmaker 3-in-1 3D printer, with all 3 functions fully enhanced.`,
          btn: {text: `Learn More`, route: `/snapmaker-artisan`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A400.png`
        },
        {
          name: `Snapmaker 2.0 <br> Modular 3-in-1 3D Printers`,
          desc: `High performance 3-in-1 3D printer, with a large build volume.`,
          btn: {text: `Learn More`, route: `/snapmaker-2`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A350T.png`
        }
        // {
        //   name: ``,
        //   desc: ``,
        //   btn: {text: ``, route: ``},
        //   imgSrc: ``,
        //   mobileImgSrc: ``
        // }
      ]

    }
  },
  {
    type: `abs`,
    mainTitle: `Snapmaker ABS`,
    mainDesc: `Second only to PLA, ABS is a popular 3D printing material because it's inexpensive, accessible, and more importantly, way better than PLA in mechanical properties. ABS is strong, durable, and heat-resistant, but a bit more difficult to print with, as it is quite sensitive to temperature.`,
    tabs: [
      {text: `ABS`, key: `normal`}
    ],
    normal: {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/ABS-1.png`,
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `1 kg`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `245˚C–265˚C`},
            {key: `Heated Bed Temperature`, value: `80˚C–100˚C`},
            {key: `Recommended Printing Speed`, value: `30 mm/s–50 mm/s`},
            {key: `Young’s Modulus`, value: `2174 ± 285 MPa`},
            {key: `Tensile Strength`, value: `33.3 ± 0.8 MPa`},
            {key: `Bending Strength`, value: `59.0 ± 1.3 MPa`},
            {key: `Charpy Impact Strength`, value: `12.6 ± 1.1 kJ/㎡`},
            {key: `Glass Transition Temperature`, value: `101˚C`},
            {key: `Vicat Softening Temperature`, value: `104˚C`}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            `#1F1F1F`,
            `#FFFFFF`
          ],
          btn: {text: `Buy Now`, link: `https://shop.snapmaker.com/collections/3d-printing-materials/products/abs-filament-1-kg`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/ABS-1.png`
        }
      ]
    },
    compatible: {
      title: `Compatible with`,
      machines: [
        {
          name: `Snapmaker Artisan 3-in-1<br>3D Printer`,
          desc: `The latest generation of Snapmaker 3-in-1 3D printer, with all 3 functions fully enhanced.`,
          btn: {text: `Learn More`, route: `/snapmaker-artisan`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A400.png`
        },
        {
          name: `Snapmaker 2.0 <br> Modular 3-in-1 3D Printers`,
          desc: `High performance 3-in-1 3D printer, with a large build volume.`,
          btn: {text: `Learn More`, route: `/snapmaker-2`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A350T.png`
        }
      ]
    }
  },
  {
    type: `pva`,
    mainTitle: `Snapmaker PVA`,
    mainDesc: `PVA dissolves in regular water, making it a useful support structure material for 3D printing. You can use it on complex geometries and hollow designs without worrying about removing the support. On the downside, PVA is highly sensitive to moisture. You should keep it dry and cool, otherwise it will become soft and sticky, leading to extrusion problems or print flaws.`,
    tabs: [
      {text: `PVA`, key: `normal`}
    ],
    normal: {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/PVA-1.png`,
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `500 g`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `215˚C–225˚C`},
            {key: `Heated Bed Temperature`, value: `25˚C–60˚C`},
            {key: `Recommended Printing Speed`, value: `30 mm/s–40 mm/s`},
            {key: `Materials Supported`, value: `PLA based material, PETG based material, PVB based material, TPU based material, Nylon based material `}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            `#fcf0b2`
          ],
          btn: {text: `Buy Now`, link: `https://shop.snapmaker.com/collections/3d-printing-materials/products/pva-filament-500g`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/PVA-1.png`
        }
      ]
    },
    compatible: {
      title: `Compatible with`,
      machines: [
        {
          name: `Snapmaker Artisan 3-in-1<br>3D Printer`,
          desc: `The latest generation of Snapmaker 3-in-1 3D printer, with all 3 functions fully enhanced.`,
          btn: {text: `Learn More`, route: `/snapmaker-artisan`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A400.png`
        },
        {
          name: `Snapmaker 2.0 <br> Modular 3-in-1 3D Printers`,
          sologan: `With Dual Extrusion 3D Printing Module`,
          desc: `High performance 3-in-1 3D printer, with a large build volume.`,
          btn: {text: `Learn More`, route: `/snapmaker-2`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A350T.png`
        }
      ]
    }
  },
  {
    type: `nylon`,
    mainTitle: `Snapmaker Nylon`,
    mainDesc: `Nylon, also called Polyamide, is ultra tough and strong material for 3D printing. It's highly preferred when printing engineering applications that require excellent mechanical properties. Due to its high melting temperature and abrasiveness, most nylon require extruder temperatures over 250 ºC and hardened steel nozzles.`,
    tabs: [
      {text: `Nylon`, key: `normal`}
    ],
    normal: {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Nylon-1.png`,
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `1 kg`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `250˚C–270˚C`},
            {key: `Heated Bed Temperature`, value: `25˚C–50˚C`},
            {key: `Recommended Printing Speed`, value: `30 mm/s–60 mm/s`},
            {key: `Young’s Modulus`, value: `2223 ± 199 MPa`},
            {key: `Tensile Strength`, value: `66.2 ± 0.9 MPa`},
            {key: `Bending Strength`, value: `97.0 ± 1.1 MPa`},
            {key: `Charpy Impact Strength`, value: `9.6 ± 1.4 kJ/㎡`},
            {key: `Glass Transition Temperature`, value: `67°C`},
            {key: `Vicat Softening Temperature`, value: `180°C`},
            {key: `Melting Temperature`, value: `190°C`}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            `#1F1F1F`
          ],
          btn: {text: `Buy Now`, link: `https://shop.snapmaker.com/collections/3d-printing-materials/products/black-nylon-filament-1kg`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Nylon-1.png`
        }
      ]
    },
    compatible: {
      title: `Compatible with`,
      machines: [
        {
          name: `Snapmaker Artisan 3-in-1<br>3D Printer`,
          desc: `The latest generation of Snapmaker 3-in-1 3D printer, with all 3 functions fully enhanced.`,
          btn: {text: `Learn More`, route: `/snapmaker-artisan`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A400.png`
        },
        {
          name: `Snapmaker 2.0 <br> Modular 3-in-1 3D Printers`,
          sologan: `With Dual Extrusion 3D Printing Module`,
          desc: `High performance 3-in-1 3D printer, with a large build volume.`,
          btn: {text: `Learn More`, route: `/snapmaker-2`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A350T.png`
        }
      ]
    }
  },
  {
    type: `breakaway-pla`,
    mainTitle: `Snapmaker Breakaway Support for PLA`,
    mainDesc: `As is implied by its name, Breakaway Support for PLA is a PLA-based filament that breaks easily. It has a perfect interface with PLA, strong enough to support it and easily removable by bare hands. Compared to PVA, it is lower in cost, less sensitive to moisture, and quicker to remove.`,
    tabs: [
      {text: `Breakaway PLA`, key: `normal`}
    ],
    normal: {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Breakaway PLA-1.png`,
      params: [
        {
          title: `Specifications`,
          keys: [
            {key: `Weight`, value: `1 kg`},
            {key: `Diameter`, value: `1.75 mm`},
            {key: `Printing Temperature`, value: `220˚C–230˚C`},
            {key: `Heated Bed Temperature`, value: `25˚C–60˚C`},
            {key: `Recommended Printing Speed`, value: `20 mm/s–40 mm/s`},
            {key: `Materials Supported`, value: `PLA based material, PVB based material, TPU based material`}
          ]
        },
        {
          title: `Colors Available`,
          colors: [
            `#FFFFFF`
          ],
          btn: {text: `Buy Now`, link: `https://shop.snapmaker.com/collections/3d-printing-materials/products/white-breakaway-pla-filament-1-kg`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/Breakaway PLA-1.png`
        }
      ]
    },
    compatible: {
      title: `Compatible with`,
      machines: [
        {
          name: `Snapmaker Artisan 3-in-1<br>3D Printer`,
          desc: `The latest generation of Snapmaker 3-in-1 3D printer, with all 3 functions fully enhanced.`,
          btn: {text: `Learn More`, route: `/snapmaker-artisan`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A400.png`
        },
        {
          name: `Snapmaker 2.0 <br> Modular 3-in-1 3D Printers`,
          sologan: `With Dual Extrusion 3D Printing Module`,
          desc: `High performance 3-in-1 3D printer, with a large build volume.`,
          btn: {text: `Learn More`, route: `/snapmaker-2`},
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/materials/materials-detail/tpu/A350T.png`
        }
      ]
    }
  }
]
