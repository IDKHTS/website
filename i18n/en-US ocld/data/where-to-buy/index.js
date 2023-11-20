const whereToBuy = {
  banner: {
    title: 'Where to Buy',
    desc: `Snapmaker has shipped to over 100 countries. <br>If you need a quotation, please fill in the form below or email us at <a href="mailto:info@snapmaker.com">info@snapmaker.com</a>`,
    // desc2: `If you need any information or have questions prior to completing this application, please email us at <a href="mailto:sales@snapmaker.com">sales@snapmaker.com</a>`,
    bgImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/PC_Where-to-Buy.jpg`,
    bgImgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/web_Where-to-Buy.jpg`,
    btn: {
      text: 'Quotation Request',
      link: 'https://snapmaker.formcrafts.com/quotation'
    }
  },
  onlineStoreTitle: 'Official Online Store',
  onlineStores: [
    {
      name: 'Snapmaker online store',
      iconSrc: '',
      link: 'https://shop.snapmaker.com/',
      imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/snapmaker.png'
    },
    {
      name: 'Amazon',
      imgSrc: '',
      iconSrc: '',
      link: ''
    },
    {
      name: 'JD',
      imgSrc: '',
      iconSrc: '',
      link: ''
    },
    {
      name: 'TMALL',
      imgSrc: '',
      iconSrc: '',
      link: ''
    }
  ],
  onlineStore: {
    iconSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/OFFICIAL-STORE.svg',
    title: 'Official Online Stores',
    columnsCon: [
      {
        aHref: 'https://shop.snapmaker.com/',
        aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/snapmaker.png',
        name: 'Snapmaker online store'
      },
      {
        aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/amazon.png',
        name: 'Amazon',
        modalTitle: 'Choose your country or region',
        childrenPart: [{
          aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/united_states_flag.png',
          aDivCon: 'United States',
          aHref: 'https://www.amazon.com/snapmaker'
        },
        {
          aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/canada_flag.png',
          aDivCon: 'Canada',
          aHref: 'https://www.amazon.ca/snapmaker'
        },
        {
          aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/united_kingdom_flag.png',
          aDivCon: 'United Kingdom',
          aHref: 'https://www.amazon.co.uk/snapmaker'
        },
        {
          aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/germany_flag.png',
          aDivCon: 'Germany',
          aHref: 'https://www.amazon.de/snapmaker'
        },
        {
          aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/australia_flag.png',
          aDivCon: 'Australia',
          aHref: 'https://www.amazon.com.au/snapmaker'
        }]
      },
      {
        aHref: 'https://snapmaker.jd.com/',
        aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/JD.png',
        name: 'JD'
      },
      {
        aHref: 'https://snapmaker.tmall.com/?spm=a1z10.3-b.w5001-21696184167.3.40be7f386PAuCQ&scene=taobao_shop',
        aImgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/TM.png',
        name: 'TMALL'
      }
    ]
  },
  globalResellerNetwork: {
    title: 'Global Reseller Network',
    imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/PC_Find-your-local-reseller.jpg`,
    imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/web_Find-your-local-reseller.jpg`,
    desc: `Find your local reseller`,
    route: '/distributors'
  }
}

 export default whereToBuy
