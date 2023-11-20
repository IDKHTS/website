export default {
  name: 'link2',
  switchLangHref: 'https://snapmaker.cn',
  products: {
    title: 'Products',
    iLink: '/products',
    child: [
      {
        title: 'Snapmaker 2.0 AT Models',
        aLink: 'https://us.snapmaker.com/products/snapmaker-2-0-modular-3-in-1-3d-printer-a350t-a250t',
        key: 'Snapmaker 2.0 AT Models'
      },
      {
        title: 'Snapmaker 2.0 A Models',
        iLink: 'Snapmaker 2.0',
        key: 'Snapmaker 2.0'
      },
      {
        title: 'Snapmaker 2.0 F Models',
        // aLink: 'https://us.snapmaker.com/products/snapmaker-2-0-modular-3d-printer',
        iLink: 'snapmaker2F',
        key: 'Snapmaker 2.0 F Models'
      },
      {
        title: 'Snapmaker Original',
        iLink: 'Snapmaker Original',
        key: 'Snapmaker Original'
      }
    ]
  },
  support: {
    title: 'Support',
    iLink: 'https://support.snapmaker.com/hc/en-us',
    child: [
      {
        title: 'Snapmaker 2.0',
        iLink: 'https://support.snapmaker.com/hc/en-us/categories/360001781913-Snapmaker-2-0',
        key: 'Snapmaker 2.0'
      },
      {
        title: 'Snapmaker Original',
        iLink: 'https://support.snapmaker.com/hc/en-us/categories/360000327114-Snapmaker-Original',
        key: 'Snapmaker Original'
      },
      {
        title: 'Snapmaker Academy',
        key: 'Snapmaker Academy',
        iLink: 'https://support.snapmaker.com/hc/en-us/categories/360003536313-Snapmaker-Academy'
      },
      {
        title: 'Downloads',
        key: 'Download',
        iLink: 'https://support.snapmaker.com/hc/en-us/categories/360005617793-Download'
      }
    ]
  },
  company: {
    title: 'Company',
    child: [
      {
        title: 'About Us',
        key: 'About Us',
        iLink: '/about'
      },
      {
        title: 'Blog',
        key: 'Blog',
        aLink: 'https://blog.snapmaker.com/'
      },
      {
        title: 'Press',
        key: 'Press',
        aLink: 'https://press.snapmaker.com'
      },
      {
        title: 'Affiliate Program',
        key: 'Affiliate',
        iLink: '/affiliate'
      }
    ],
    campaign: {
      title: 'Our Kickstarter Campaigns',
      oLink: 'https://www.kickstarter.com/profile/snapmaker/created'
    }
  },
  wheretobuy: {
    title: 'Where to buy',
    child: [
      {
        title: 'Online Stores',
        key: 'Online Stores',
        iLink: '/distributor#online-store'
      },
      {
        title: 'Distributors',
        key: 'Distributors',
        iLink: '/distributor'
      }
    ],
    lastChild: 'Become a Distributor'
  },
  forum: {
    title: 'Forum',
    oLink: 'http://forum.snapmaker.com'
  },
  newsletter: {
    title: 'Newsletter',
    h3textPre: 'Subscribe to our newsletter for special ',
    h3textNext: 'deals and the latest offers.',
    // email
    contact: [
      {
        name: 'Pre-sales and Logistics:',
        title: 'info@snapmaker.com',
        mLink: 'mailto:info@snapmaker.com'
      },
      {
        name: 'Technical Support:',
        title: 'support@snapmaker.com',
        mLink: 'mailto:support@snapmaker.com'
      },
      {
        name: 'Reselling:',
        title: 'sales@snapmaker.com',
        mLink: 'mailto:sales@snapmaker.com'
      }
    ],
    social: [
      {
        title: 'Facebook',
        key: 'Facebook',
        iconLink: 'https://ditfjx9w4x3vl.cloudfront.net/img/bottombar-facebook.png',
        oLink: 'https://www.facebook.com/snapmaker/'
      },
      {
        title: 'Twitter',
        key: 'Twitter',
        iconLink: 'https://ditfjx9w4x3vl.cloudfront.net/img/bottombar-twitter.png',
        oLink: 'https://twitter.com/snapmaker'
      },
      {
        title: 'Youtube',
        key: 'Youtube',
        iconLink: 'https://ditfjx9w4x3vl.cloudfront.net/img/bottombar-youtube.png',
        oLink: 'https://www.youtube.com/channel/UCtXHu_nugZF3uxgJJjZfcoA'
      },
      {
        title: 'Instagram',
        key: 'Instagram',
        iconLink: 'https://ditfjx9w4x3vl.cloudfront.net/img/instagram.png',
        oLink: 'https://www.instagram.com/snapmakerinc/'
      },
      {
        title: 'Linkedin',
        key: 'Linkedin',
        iconLink: 'https://ditfjx9w4x3vl.cloudfront.net/img/linkedin.png',
        oLink: 'https://www.linkedin.com/company/snapmaker/'
      }
    ],
    copyright: ' 2021 Snapmaker. All Rights Reserved.'
  }
}
