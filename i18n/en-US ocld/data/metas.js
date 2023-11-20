const productTitle = 'SNAPMAKER: THE 3-IN-1 3D PRINTER'
const productContent = 'Turn your desktop into a workshop. This all-metal and modular 3D printer can turn into a CNC machine or laser engraver. Easy to use, expandable, and impressively affordable.'
const platformTitle = 'SNAPMAKER: The Expandable Platform'
const platformContent = 'Expandable Platform. Make Anything.Snapmaker makes a platform of growing variety of building modules, empowering you to build various machines to create all your inventions.'

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
    tel: 'Tel: +86(0)755 26926117',
    serviceTime: 'Office Hours: Monday to Friday, 9:30-18:30 (GMT+8:00)'
  }
}
