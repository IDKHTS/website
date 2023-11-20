function mapToSvg(type) {
  if (type === '√') {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11.9999" cy="11.9999" r="9.12" fill="white"/>
    <path d="M12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12C24 18.627 18.627 24 12 24ZM9.324 16.712C9.44008 16.8281 9.57789 16.9202 9.72957 16.9831C9.88125 17.0459 10.0438 17.0782 10.208 17.0782C10.3722 17.0782 10.5348 17.0459 10.6864 16.9831C10.8381 16.9202 10.9759 16.8281 11.092 16.712L18.67 9.134C18.7861 9.01791 18.8782 8.88009 18.941 8.72842C19.0038 8.57674 19.0362 8.41417 19.0362 8.25C19.0362 8.08583 19.0038 7.92326 18.941 7.77158C18.8782 7.61991 18.7861 7.48209 18.67 7.366C18.5539 7.24991 18.4161 7.15783 18.2644 7.095C18.1127 7.03217 17.9502 6.99984 17.786 6.99984C17.6218 6.99984 17.4593 7.03217 17.3076 7.095C17.1559 7.15783 17.0181 7.24991 16.902 7.366L10.154 14.006L7.134 10.986C6.89955 10.7515 6.58156 10.6198 6.25 10.6198C5.91844 10.6198 5.60045 10.7515 5.366 10.986C5.13155 11.2205 4.99984 11.5384 4.99984 11.87C4.99984 12.0342 5.03217 12.1967 5.095 12.3484C5.15783 12.5001 5.24991 12.6379 5.366 12.754L9.324 16.712Z" fill="url(#paint0_linear_2649_4420)"/>
    <defs>
    <linearGradient id="paint0_linear_2649_4420" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
    <stop stop-color="#09D494"/>
    <stop offset="1" stop-color="#00EF34"/>
    </linearGradient>
    </defs>
    </svg>`
  } else {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11.8801" cy="10.9199" r="8.04" fill="white"/>
    <path d="M12 0C18.627 0 24 5.373 24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0ZM8.639 7.281C8.54977 7.19183 8.44384 7.12111 8.32728 7.07288C8.21072 7.02465 8.08579 6.99985 7.95965 6.9999C7.8335 6.99994 7.70859 7.02483 7.59207 7.07315C7.47554 7.12147 7.36967 7.19227 7.2805 7.2815C7.19133 7.37073 7.12061 7.47666 7.07238 7.59322C7.02415 7.70978 6.99935 7.83471 6.9994 7.96085C6.99944 8.087 7.02433 8.21191 7.07265 8.32843C7.12097 8.44496 7.19177 8.55083 7.281 8.64L10.643 12L7.281 15.362C7.19183 15.4512 7.1211 15.557 7.07284 15.6735C7.02459 15.79 6.99975 15.9149 6.99975 16.041C6.99975 16.1671 7.02459 16.292 7.07284 16.4085C7.1211 16.525 7.19183 16.6308 7.281 16.72C7.37017 16.8092 7.47602 16.8799 7.59253 16.9282C7.70903 16.9764 7.8339 17.0013 7.96 17.0013C8.0861 17.0013 8.21097 16.9764 8.32747 16.9282C8.44398 16.8799 8.54983 16.8092 8.639 16.72L12 13.357L15.361 16.719C15.4502 16.8082 15.556 16.8789 15.6725 16.9272C15.789 16.9754 15.9139 17.0003 16.04 17.0003C16.1661 17.0003 16.291 16.9754 16.4075 16.9272C16.524 16.8789 16.6298 16.8082 16.719 16.719C16.8082 16.6298 16.8789 16.524 16.9272 16.4075C16.9754 16.291 17.0003 16.1661 17.0003 16.04C17.0003 15.9139 16.9754 15.789 16.9272 15.6725C16.8789 15.556 16.8082 15.4502 16.719 15.361L13.359 12L16.719 8.639C16.8082 8.54983 16.8789 8.44398 16.9272 8.32747C16.9754 8.21097 17.0003 8.0861 17.0003 7.96C17.0003 7.8339 16.9754 7.70903 16.9272 7.59253C16.8789 7.47602 16.8082 7.37017 16.719 7.281C16.6298 7.19183 16.524 7.1211 16.4075 7.07284C16.291 7.02459 16.1661 6.99975 16.04 6.99975C15.9139 6.99975 15.789 7.02459 15.6725 7.07284C15.556 7.1211 15.4502 7.19183 15.361 7.281L12.001 10.641L8.639 7.281Z" fill="url(#paint0_linear_2649_4414)"/>
    <defs>
    <linearGradient id="paint0_linear_2649_4414" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FF3325"/>
    <stop offset="1" stop-color="#FF6625"/>
    </linearGradient>
    </defs>
    </svg>
    `
  }
}

export default {

  screen1: {
    title: `Snapmaker 20W & 40W Laser Module with Air Assist`,
    desc: `Stronger than stronger.`,
    buyBtn: {text: 'Preorder Now', link: 'https://us.snapmaker.com/products/snapmaker-artisan-3-in-1-3d-printer'},
    // btn: {text: 'Watch the video', link: 'https://www.youtube.com/embed/9XJ5m6flx_E'},
    // videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/videoes/1_PC_v2.0webm.webm`,
    videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/laser-modules-banner-video.webm`,
    videoMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20230718-175319.mp4`,
    gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob-banner-video.webp`,


    imgSrcMob: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob-banner-img.png',
    secondTitle: `Snapmaker's<br> Strongest 3-in-1<br> 3D Printer`,
    frameCount: 22,
    fixNumber: true,
    framesPrefix: 'https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/frame-animation/1-2-pc/2-',
    framesPrefixMob: 'https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/frame-animation/1-2-pc/2-',

    animationConfig: [
      {
        title: `Snapmaker's Strongest 3-in-1 <br> 3D Printer`,
        fixNumber: true,
        framesPrefix: 'https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/frame-animation/2-1-pc/2-',
        timeline: {
          count: 22,
          repeatCount: 5,
          repeatIdx: 0, // repeatCount not include repeatIdx

          start: 1, // start: 0 and show: 10，startAnimation: [0, 10), showAnimation: [10, xxx)
          show: 17,
          pending: 26,
          hide: 27,
          end: 27
        },
        animation: 'fade',
        style: {
          textAlign: 'left'
        }
      }
    ]
  },
  title: '20W & 40W laser power, a new standard.',
  ModuleData: {
    firstTitle: '20W & 40W laser power, a new standard.',
    title: 'Cutting-edge laser beam splitting technology.',
    desc: '40W Laser Module delivers superb performance with the most cutting-edge laser beam splitters and beam shaping optics. When it comes to the speed of cutting 3mm Basswood Plywood, 40W Laser Module is 4 times that of 10W and 20W Laser Module is 2 times that of 10W.',
    modules: [
      {
        name: '40W Laser Module',
        bgImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/pc_comparitable-40W.jpg`,
        bgMobImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/web_40W.jpg`,
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/PC_data-40W.jpg',
        comparisons: [
          {
            title: `Max. Cutting Speed[1]`,
            tips: '(3mm Basswood Plywood)',
            pairs: [
              {len: 100, text: '20mm/s', tag: '40W'},
              {len: 25, text: '5mm/s', tag: '10W'}
            ]
          },
          {
            title: `Max. Cutting Depth in one pass`,
            tips: '(Basswood Plywood)',
            pairs: [
              {len: 100, text: '15mm', tag: '40W'},
              {len: 33.333, text: '5mm', tag: '10W'}
            ]
          }
          // {
          //   title: `Max Cutting Depth (Paulownia)`,
          //   pairs: [
          //     {len: 100, text: '8.0 mm', tag: '40W'},
          //     {len: 18.75, text: '1.5 mm', tag: '40W'}
          //   ]
          // }
        ],
        alt: `40W Laser Module`,
        mobAlt: '40W Laser Module'
      },
      {
        name: '20W Laser Module',
        bgImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/PC_comparitable-20W.jpg`,
        bgMobImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/web_20W.jpg`,
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/PC_data-20W.jpg',
        comparisons: [
          {
            title: `Max. Cutting Speed[1]`,
            tips: '(3mm Basswood Plywood)',
            pairs: [
              {len: 50, text: '10mm/s', tag: '20W'},
              {len: 25, text: '5mm/s', tag: '10W'}
            ]
          },
          {
            title: `Max. Cutting Depth in one pass`,
            tips: '(Basswood Plywood)',
            pairs: [
              {len: 66.66, text: '10mm', tag: '20W'},
              {len: 33.333, text: '5mm', tag: '10W'}
            ]
          }
          // {
          //   title: `Max Cutting Depth (Paulownia)`,
          //   pairs: [
          //     {len: 100, text: '8.0 mm', tag: '40W'},
          //     {len: 18.75, text: '1.5 mm', tag: '40W'}
          //   ]
          // }
        ],
        alt: `20W Laser Module`,
        mobAlt: '20W Laser Module'
      }
    ]

  },
  laserComparison: {
    title: '20W and 40W Laser in comparison.',
    types: [
      {
        title: 'Basswood Plywood ',
        comparisons: [
          {
            name: `20w`,
            imgSvgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20W.svg',
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/thickness-10mm.png',
            videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20W _Basswood Plywood .mp4`,
            videonMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20W _Basswood Plywood .mp4`,
            gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20W_Basswood Plywood .webp`,
            material: 'Material: Basswood Plywood',
            thickness: 'Thickness: <span style="color: #00FFD1;">10mm</span> (one pass)',
            speed: 'Speed: 3mm/s',
            power: 'Power: 100% ',
            other: 'Initial Cutting Height Offset: 3mm'
          },
          {
            name: `40w`,
            imgSvgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W.svg',
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/thickness-15mm.png',
            videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W-Basswood Plywood .mp4`,
            videonMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W-Basswood Plywood .mp4`,
            gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40_Basswood Plywood .webp`,
            material: 'Material: Basswood Plywood',
            thickness: 'Thickness: <span style="color: #00FFD1;">15mm</span> (one pass)',
            speed: 'Speed: 3mm/s ',
            power: 'Power: 100% ',
            other: 'Initial Cutting Height Offset: 3mm'
          }
        ]
      },
      {
        title: 'Pinewood',
        comparisons: [
          {
            name: `20w`,
            imgSvgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20W.svg',
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/thickness-15-wood.png',
            videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20_Pinewood.mp4`,
            videonMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20_Pinewood.mp4`,
            gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20W_Pinewood.webp`,
            material: 'Material: Pinewood',
            thickness: 'Thickness: <span style="color: #00FFD1;">15mm</span> (one pass)',
            speed: 'Speed: 2mm/s ',
            power: 'Power: 100% ',
            other: 'Initial Cutting Height Offset: 4mm'
          },
          {
            name: `40w`,
            imgSvgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W.svg',
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/thickness-20mm.png',
            videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W_Pinewood.mp4`,
            videonMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W_Pinewood.mp4`,
            gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W_Pinewood.webp`,
            material: 'Material: Pinewood',
            thickness: 'Thickness: <span style="color: #00FFD1;">20mm</span> (one pass)',
            speed: 'Speed: 2mm/s ',
            power: 'Power: 100% ',
            other: 'Initial Cutting Height Offset: 4mm '
          }
        ]
      }
    ]
  },
  caseResultDisplay: {
    title: `Transform even more ideas into reality.`,
    results: [
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/pc-cases-1.jpg',
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/pc-cases-2.jpg',
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/pc-cases-3.jpg'
    ],
    mobResults: [
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob-cases-1.jpg',
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob-cases-2.jpg',
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/case-result-mob-3.jpg',
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/case-result-mob-4.jpg',
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/case-result-mob-5.jpg',
      'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/case-mob-result.jpg'
    ]
  },
  smartAirAssist: {
    firstTitle: 'Smart Air Assist.',
    title: 'Achieve cleaner cuts with Air Assist.',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/smartAirAssist.jpg',
    imgMobSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W.jpg',
    desc: `
    1. Air gets pumped in. <br>
    2. Blow the fumes away and prevent charring. <br>
    3. Keep the laser lens clean. <br>
    4. Fumes get channeled out through grid table.
    `
  },
  airAssistComparisonsWebm: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Air-assisted-contrast.webm',
  airAssistComparisonsVideo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Air-assisted contrast.mp4',
  airAssistComparisonsImg: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Air-assisted contrast.webp',
  comparisonsTitle: 'A Comparison Between Air Assist <span style="color: #02EA46">(ON)</span> And Air Assist <span style="color: #FF3826">(OFF)',
  airAssist: {
    title: 'Control Air Assist via Luban.',
    desc: `When doing both engraving and cutting in one piece of work, it is not recommended to apply Air Assist on all layers. Therefore, Luban can let you enable Air Assist only on cutting layers, saving you the bother of manually turning it on or off for different layers.`,
    videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/luban-air-assist-v2.webm`,
    videonMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/luban-air-assist-v2.mp4`,
    gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/luban-air-assist-v2.webp`,
    alt: `Control Air Assist via Luban.`,
    mobAlt: 'Control Air Assist via Luban.'
  },
  imgListTitle: 'Expanding laser product lineup for different needs.',
  imgListSrc: [
    'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/laser-40w.png',
    'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/laser-20w.jpg',
    'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/laser-2w.png'
  ],
  quickCase: {
    firstTitle: `1000+ ready-to-use laser vectors, right in Luban.`,
    title: 'Design your laser work in seconds with templates.',
    desc: `High customizability and high efficiency, you can have both. Luban provides an extensive library of preset templates, including common patterns, shapes, and icons, for you to quickly come up with a design. What's more, with the choice of art fonts you can always add a personalized touch to your work.`,
    videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/luban-case.webm`,
    videonMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/luban-case.mp4`,
    gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/luban-case.webp`,
    alt: `Enrich Your Laser Work in Seconds with Templates.`,
    mobAlt: 'Enrich Your Laser Work in Seconds with Templates.'
  },
  caseDisplay: {
    title: 'An extensive library of common patterns, shapes, and icons.',
    imgs: [
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-1.webp',
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-2.webp',
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-3.webp',
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-4.webp',
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-5.webp',
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-6.webp',
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-7.webp',
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-8.webp',
      // 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases-9.webp'
      {
        col: 'one0',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-1.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-2.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-3.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-4.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-5.svg'
        ]
      },
      {
        col: 'one1',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-6.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-7.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-8.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-9.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-10.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-11.svg'
        ]
      },
      {
        col: 'one2',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-12.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-13.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-14.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-15.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-16.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-17.svg'
        ]
      },
      {
        col: 'one3',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-18.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-19.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-20.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-21.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-22.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-23.svg'
        ]
      },
      {
        col: 'one4',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-24.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-25.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-26.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-27.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-28.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-29.svg'
        ]
      },
      {
        col: 'one5',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-30.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-31.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-32.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-33.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-34.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-35.svg'
        ]
      },
      {
        col: 'one6',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-36.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-37.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-38.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-39.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-40.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-41.svg'
        ]
      },
      {
        col: 'one7',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-42.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-43.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-44.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-45.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-46.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-47.svg'
        ]
      },
      {
        col: 'one8',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-48.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-49.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-50.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-51.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-52.svg'
        ]
      }
    ],
    mobImgs: [
      {
        col: 'one0',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-1.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-2.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-3.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-4.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-5.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-24.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-7.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-8.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-9.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-10.svg'
        ]
      },
      {
        col: 'one2',
        imgs: [
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-11.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-12.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-22.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-14.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-15.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-16.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-17.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-18.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-19.svg',
          'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/cases/case-20.svg'
        ]
      }
    ]
  },
  laserMaterial: {
    title: 'Laser material profiles at your disposal.',
    desc: `It lets you access full sets of recommended parameters for common laser materials, so you can choose one and start right off.`,
    materials: [
      {
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Basswood.png`,
        name: 'Basswood'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Leather.png',
        name: 'Leather'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Brick.png',
        name: 'Brick'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Slate.png',
        name: 'Slate'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Stainless.png',
        name: 'Stainless Steel'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Anodized.png',
        name: 'Anodized Aluminum'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Dark-Glass.png',
        name: 'Dark Glass'
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Acrylic.png',
        name: 'Acrylic'
      }
    ],
    // imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Device-2.jpg',
    video: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/Ready-to-use.mp4'
  },
  safeSound: {
    title: 'Safe and sound.',
    displays: [
      {
        text: `Laser Safety Shield`,
        desc: 'The Laser Safety Shield can reduce the laser radiation. Together with the use of the Enclosure for 2.0, Artisan or Ray, it can reduce the laser hazards from Class 4 to Class 1.[2]',
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Pc_glass_retainer.jpg`,
        imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/web_glass_retainer.jpg`,
        alt: `PEI-coated`,
        mobAlt: 'higher flatness'
      },
      {
        text: `Orientation Detection`,
        desc: 'We include a gyro sensor in the module, which makes sure that no laser beam comes out if the module is incorrectly installed or deviates from its designated position.',
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/PC_Safe_and-_ound..jpg`,
        imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob_Safe-and-sound.jpg`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        text: `Overheat Protection`,
        desc: 'The module stops working automatically whenever its temperature sensor detects a higher than normal (one that exceeds 55℃/131℉) working temperature. Once the temperature falls back into the normal range, you can resume your job on the Touchscreen.',
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/PC_Overheat Protection.png`,
        imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/web_Overheat Protection.png`,
        alt: `PEI-coated`,
        mobAlt: 'higher flatness'
      }
    ]
  },
  easeToFocus: 'Easy to focus.',
  setMaterialThickness: {
    title: 'Input material thickness and run auto-focus.',
    desc: `Calibrate the focus by inputting the material thickness on Touchscreen. The machine will run auto-focus according to the material thickness you input.`,
    videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/input-thickness.webm`,
    videonMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/input-thickness.mp4`,
    gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/input-thickness.webp`,
    alt: `Manually Input the Material Thickness`,
    mobAlt: 'Manually Input the Material Thickness'
  },
  foucusLaserKickstand: {
    title: 'Focus the laser with Focus Lever.',
    desc: `Alternatively, you can also focus the laser with Focus Lever. Release the Focus Lever, move the toolhead down until the Focus Lever touches the material by adjusting the Z Offset on Touchscreen. In just a few steps, you can easily finish the calibration.`,
    videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/PC_Focus lever.mp4`,
    videonMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/PC_Focus lever.mp4`,
    gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/focus.webp`,
    alt: `Enrich Your Laser Work in Seconds with Templates.`,
    mobAlt: 'Enrich Your Laser Work in Seconds with Templates.'
  },
  rotaryModule2: {
    title: `Upgrade curved surface engraving experience with Rotary Module 2.`,
    desc: `Engrave various curved surfaces with adjustable rotary structures.`,
    imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/quick-swap-kit.jpg`
  },
  compatible: {
    title: 'Compatible with Snapmaker printers and modules.',
    desc: '20W & 40W Laser Module are members of the Snapmaker 2.0 series, Snapmaker Artisan series, and Snapmaker Ray series. They are compatible with 2.0 3D Printers, Artisan 3D Printers, Ray Laser Engraver and Cutter, and other modules such as Rotary Module, CAN Hub, Emergency Stop Button, Enclosure for 2.0, and Air Purifier.',
    imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W.webp`,
    displays: [
      {
        machine: `Artisan`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Artisan.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        machine: `A350T/A350`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/A350T_A350.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        machine: `A250T/A250`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/A250T_A250.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        machine: `F350/F250`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/F350_F250.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        machine: `Air Purifier`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Air Purifier.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        machine: `Rotary Module`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Rotary Module.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        machine: `CAN Hub`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/CAN Hub.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        machine: `Emergency Stop Button`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Emergency Stop Button.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      },
      {
        machine: `Enclosure for 2.0`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Enclosure for 2.0.webp`,
        alt: `Glossy glass`,
        mobAlt: 'more adhesive'
      }
    ]

  },
  specs: {
    bgImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/specs-bg.jpg',
    title: 'Find the laser module that best suits you.',
    fittings: [
      {
        name: '20w',
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/20W.svg`,
        price: '$549',
        originalPrice: '$599',
        weight: '0.81kg',
        MaxEngravingSpeed: 'Snapmaker 2.0: 100mm/s <br> Snapmaker Artisan: 200mm/s',
        MaxCuttingSpeed: '10mm/s',
        MaxThicknessOnePassCutting: `10mm Basswood Plywood`,
        WorkArea: `400 mm × 400 mm (Artisan) <br>
        320 mm × 350 mm (A350/A350T/F350) <br>
        230 mm × 250 mm (A250/A250T/F250) `,
        AirAssist: mapToSvg('√'),
        laserSpotDimensions: '0.08mm × 0.1mm',
        // SupportedEngravingMaterials: 'Basswood, Pinewood, Plywood, Beech, Walnut, Bamboo, MDF, Painted Metal, Tinplate, Stainless Steel, Anodized Aluminum, Dark Glass, Dark Acrylic (Blue excluded) ',
        // SupportedCuttingMaterials: 'Basswood, Pinewood, Plywood, Beech, Walnut, Bamboo, MDF, Leather, Fabric, Canvas, Corrugated Paper, Cardboard, Plastic, Dark Acrylic (Blue excluded)',
        CameraCapture: mapToSvg('×')
      },
      {
        name: '40w',
        price: '$799',
        originalPrice: '$999',
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/40W.svg`,
        weight: '1.26kg',
        MaxEngravingSpeed: 'Snapmaker 2.0: 100mm/s <br> Snapmaker Artisan: 200mm/s',
        MaxCuttingSpeed: '20mm/s',
        MaxThicknessOnePassCutting: '15mm Basswood Plywood',
        WorkArea: `400 mm × 400 mm (Artisan) <br>
        320 mm × 350 mm (A350/A350T/F350) <br>
        230 mm × 250 mm (A250/A250T/F250)`,
        AirAssist: mapToSvg('√'),
        laserSpotDimensions: '0.1mm × 0.15mm',
        // SupportedEngravingMaterials: 'Basswood, Pinewood, Plywood, Beech, Walnut, Bamboo, MDF, Painted Metal, Tinplate, Stainless Steel, Anodized Aluminum, Dark Glass, Dark Acrylic (Blue excluded) ',
        // SupportedCuttingMaterials: 'Basswood, Pinewood, Plywood, Beech, Walnut, Bamboo, MDF, Leather, Fabric, Canvas, Corrugated Paper, Cardboard, Plastic, Dark Acrylic (Blue excluded)',
        CameraCapture: mapToSvg('×')
      },
      {
        name: '10w',
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/10W.svg`,
        weight: '0.63kg',
        price: '$349',
        originalPrice: '$459',
        MaxEngravingSpeed: 'Snapmaker 2.0: 100mm/s <br> Snapmaker Artisan: 200mm/s',
        MaxCuttingSpeed: '5mm/s',
        MaxThicknessOnePassCutting: '5mm Basswood Plywood',
        WorkArea: `400 mm × 400 mm (Artisan) <br>
        320 mm × 350 mm (A350/A350T/F350) <br>
        230 mm × 250 mm (A250/A250T/F250)`,
        laserSpotDimensions: '0.05mm × 0.2mm',
        AirAssist: mapToSvg('×'),
        // SupportedEngravingMaterials: 'Basswood, Pinewood, Plywood, Beech, Walnut, Bamboo, MDF, Painted Metal, Tinplate, Stainless Steel, Anodized Aluminum, Dark Glass, Dark Acrylic (Blue excluded) ',
        // SupportedCuttingMaterials: 'Basswood, Pinewood, Plywood, Beech, Walnut, Bamboo, MDF, Leather, Fabric, Canvas, Corrugated Paper, Cardboard, Plastic, Dark Acrylic (Blue excluded)',
        CameraCapture: mapToSvg('√')
      }
    ],
    shopLink: 'https://support.snapmaker.com/hc/en-us/articles/16130194711959',
    shopLinkText: 'Learn more about the full list of specs.'
  },
  store: {
    title: `Snapmaker 20W & 40W Laser Module with Air Assist`,
    btn: { text: 'Preorder Now', link: 'https://us.snapmaker.com/products/snapmaker-2-0-quick-swap-kit' },
    imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/pc_cta_Snapmaker-20W-&-40W-Laser-Module-with-Air-Assist.jpg`,
    imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/pc_cta_Snapmaker-20W-&-40W-Laser-Module-with-Air-Assist.jpg`,
    alt: `Snapmaker 20W & 40W Laser Module with Air Assist`,
    mobAlt: 'Snapmaker 20W & 40W Laser Module with Air Assist',
    displays: [
      {
        text: `40W Laser Module`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob_cta_40W.jpg`,
        imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob_cta_40W.jpg`,
        alt: `40W Laser Module`,
        mobAlt: '40W Laser Module'
      },
      {
        text: `20W Laser Module`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob_cta_20W.jpg`,
        imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/mob_cta_20W.jpg`,
        alt: `20W Laser Module`,
        mobAlt: '20W Laser Module'
      }
    ],
    tags: [
      'Cut 15mm Basswood Plywood in one pass (40W)',
      'Cut 10mm Basswood Plywood in one pass (20W)',
      'Control Air Assist via Luban',
      '1000+ Laser Vectors in Luban',
      'Laser Safety Shield',
      'Orientation Detection'
    ]
  },
  screen39: {
    title: `Notes:`,
    notes: [
      `[1] Depending on your material, the cutting speed might vary.`,
      `[2] This is a class 4 laser product. You should always operate the 20W & 40W Laser Module with the Enclosure covered and wear laser safety goggles. Snapmaker shall not be held responsible for any consequences caused by improper use of this product.`,
      `[3] Depending on your material, the work speed might vary.`,
      `[4] The data is obtained based on the 3mm Basswood Plywood performing one pass cutting. Depending on your material, the cutting speed might vary.`
    ]
  },

  boxes: [
    {
      title: `40W`,
      addons: [
        {
          name: `40W Laser Module`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/box-40w.png`,
          count: 1
        },
        {
          name: `Air Assist Pump`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/airAssistPump.jpg`,
          count: 1
        },
        {
          name: `Air Tube`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Air Tube.jpg`,
          count: 1
        },
        // {
        //   name: `M8 Air Tube Connector`,
        //   imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/M8 Air Tube Connector.jpg`,
        //   count: 1
        // },
        {
          name: `Cotton Swab`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Cotton Swab.jpg`,
          count: 5
        },
        {
          name: `Cable Tie`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Cable Tie.jpg`,
          count: 1
        },
        {
          name: `M4 × 12 Screw`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/M412Screw.jpg`,
          count: 3
        },
        {
          name: `M4 × 8 Screw`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/M48Screw.jpg`,
          count: 6
        },
        {
          name: `Basswood Plywood `,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Basswood Plywood .jpg`,
          count: 1
        },
        {
          name: `Calibration Card`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Calibration Card.jpg`,
          count: 1
        },
        {
          name: `Online Tutorial Guide Card`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Online Tutorial Guide Card .png`,
          count: 1
        },
        {
          name: `Laser Lens Protector`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Laser Lens Protector.png`,
          count: 1
        },
        {
          name: `Air Assist Pump Conversion Cable (for Snapmaker 2.0 user only)`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Air Assist Pump Conversion Cable.png`,
          count: 1
        },
        {
          name: `40W Laser Module Power-boosted Toolhead Cable (for Snapmaker 2.0 user only)`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Power-boosted Toolhead Cable.png`,
          count: 1
        }
      ]
    },
    {
      title: `20W`,
      addons: [
        {
          name: `20W Laser Module`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/box-20w.png`,
          count: 1
        },
        {
          name: `Air Assist Pump`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/airAssistPump.jpg`,
          count: 1
        },
        {
          name: `Air Tube`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Air Tube.jpg`,
          count: 1
        },
        // {
        //   name: `M8 Air Tube Connector`,
        //   imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/M8 Air Tube Connector.jpg`,
        //   count: 1
        // },
        {
          name: `Cotton Swab`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Cotton Swab.jpg`,
          count: 5
        },
        {
          name: `Cable Tie`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Cable Tie.jpg`,
          count: 1
        },
        {
          name: `M4 × 12 Screw`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/M412Screw.jpg`,
          count: 3
        },
        {
          name: `M4 × 8 Screw`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/M48Screw.jpg`,
          count: 6
        },
        {
          name: `Basswood Plywood `,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Basswood Plywood .jpg`,
          count: 1
        },
        {
          name: `Calibration Card`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/in-the-box/Calibration Card.jpg`,
          count: 1
        },
        {
          name: `Online Tutorial Guide Card`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Online Tutorial Guide Card .png`,
          count: 1
        },
        {
          name: `Laser Lens Protector`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Laser Lens Protector.png`,
          count: 1
        },
        {
          name: `Air Assist Pump Conversion Cable (for Snapmaker 2.0 user only)`,
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/Air Assist Pump Conversion Cable.png`,
          count: 1
        }
      ]
    }
  ]
}
