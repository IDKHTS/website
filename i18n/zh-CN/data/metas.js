const productTitle = 'SNAPMAKER：三合一 3D 打印机'
const productContent = '将您的桌面变成一个研讨会。 这款全金属和模块化3D打印机可以变成数控机床或激光雕刻机。 易于使用，可扩展，并且价格合理。'
const platformTitle = 'SNAPMAKER：可扩展平台'
const platformContent = '可扩展平台。可以做任何事。Snapmaker建立了一个不断增长的各种建筑模块的平台，使您能够构建各种机器来创建您的所有发明。'

export default {
  name: 'metas',
  title: {
    inner: 'THE 3-IN-1 3D PRINTER',
    separator: ':',
    complement: 'SNAPMAKER'
  },
  default: [
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
  ],
  product: [
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
  ],
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
    tel: '电话: +86(0)755 26926117',
    serviceTime: '工作时间：周一至周五，9:30-18:30 (GMT+8:00)'
  }
}
