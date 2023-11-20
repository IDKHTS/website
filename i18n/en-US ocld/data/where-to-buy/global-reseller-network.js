const sellers = [
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Sweden',
    title: '3D Prima',
    type: 'Major Distributor',
    hLink: 'https://www.3dprima.com/3d-printers-more/manufacturer/snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Prima.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Germany',
    title: 'iGo3D',
    type: 'Major Distributor',
    hLink: 'https://www.igo3d.com/snapmaker-3d-drucker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/iGo3D.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Germany',
    title: 'Allknow',
    type: 'Educational Distributor',
    hLink:
      'https://shop.maker-store.de/3d-druck-stift/3d-druck/3d-drucker/5396/snapmaker-2.0-a350t-3-in-1-3d-drucker-laser-cnc-fraese-gehaeuse-eu-version',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Allknow.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: 'Purchase from Allnet'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Germany',
    title: 'Bottcher AG',
    type: 'N/A',
    hLink: 'https://www.bueromarkt-ag.de/snapmaker.html?ref=suche',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Bottcher AG.jpg',
    Showroom: 'N',
    Service: '',
    Note: 'Purchasefrom iGo'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Germany',
    title: 'Hornbach',
    type: 'DIY Store',
    hLink:
      'https://www.hornbach.at/p/3d-drucker-snapmaker-2-0-350t/10622905/?searchTerm=snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Hornbach.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: 'Purchasefrom iGo'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Germany',
    title: '3Dmensionals',
    type: 'N/A',
    hLink:
      'https://www.3dmensionals.de/shop?search=snapmaker&order=website_sequence+asc',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/3Dmensionals.jpg',
    Showroom: 'N',
    Service: '',
    Note: 'Purchase from iGo'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Austria',
    title: '3DJake',
    type: 'N/A',
    hLink: 'https://www.3djake.com/snapmaker/snapmaker-20-including-enclosure',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/3DJake.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Switzerland',
    title: 'Digitec',
    type: 'N/A',
    hLink: 'https://www.digitec.ch/en/search?q=snapmaker&is=snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Digitec.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/assets/distributors/digitec-ch-logo-vector.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Switzerland',
    title: 'MediaMarkt',
    type: 'N/A',
    hLink:
      'https://www.mediamarkt.ch/de/product/_snapmaker-3-in-1-1904548.html',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/MediaMarkt.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/assets/distributors/logo-media-markt.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Switzerland',
    title: 'A Printer',
    type: 'N/A',
    hLink: 'https://a-printer.ch/produit/snapmaker-2-a350t-caisson/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/A-Printer.jpg',
    Showroom: 'N',
    Service: 'N',
    Note: '',
    imgSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/assets/distributors/logo-a-printer-en-tete.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Netherland',
    title: '1233D',
    type: 'N/A',
    hLink: 'https://www.123-3d.nl/3D-printers/Snapmaker-2-0-A350-p16618.html',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/1233D.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Netherland',
    title: 'Coolblue',
    type: 'N/A',
    hLink:
      'https://www.coolblue.be/nl/product/902112/snapmaker-a350-behuizing.html',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Coolblue.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/assets/distributors/logo-coolblue.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Poland',
    title: 'Botland',
    type: 'N/A',
    hLink: 'https://botland.store/1089-snapmaker-3d-printers',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Botland.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/Botland.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Bulgaria',
    title: 'Geppit',
    type: 'N/A',
    hLink: 'https://geppit.com/store/3d-printing/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Geppit.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/eu-geppit-icon.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Estonia',
    title: 'Merkuur',
    type: 'N/A',
    hLink:
      'https://www.merkuur.eu/product-page/snapmaker-2-0-modular-3-in-1-3d-printer-a350t',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Merkuur.jpg',
    Showroom: '',
    Service: 'N',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Latvia',
    title: 'Steamkits',
    type: 'N/A',
    hLink: 'https://snapmaker.steamkits.eu/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Steamkits.jpg',
    Showroom: '',
    Service: 'N',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Russia',
    title: 'TOP 3D',
    type: 'N/A',
    hLink:
      'https://top3dshop.ru/kupit-3d-printer/personal/f/manufacturer-snapmaker/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/TOP-3D.jpg',
    Showroom: '',
    Service: 'N',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Russia',
    title: '3DTOOL',
    type: 'N/A',
    hLink:
      'https://3dtool.ru/category/3d-printery/filter/manufacturer_us-is-snapmaker/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/3DTOOL.jpg',
    Showroom: '',
    Service: 'N',
    Note: '',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/eu-3d-tool-icon.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Turkey',
    title: 'Genix',
    type: 'N/A',
    hLink: 'http://snapmaker.com.tr/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Genix.jpg',
    Showroom: '',
    Service: 'Y',
    Note: '',
    imgSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/assets/distributors/FOR_WEB_Genix_Logo.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'France',
    title: 'Atome3D',
    type: 'Distributor',
    hLink:
      'https://www.atome3d.com/collections/snapmaker-machines-3d-module-dimpression-decoupe-feuilles-fibre-pom',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Atome3D.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'UK',
    title: 'Ram Peripherals',
    type: 'Small Distributor',
    hLink:
      'https://ramperipheralsltd.co.uk/product-category/3d-printing/3d-printers/snapmaker/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Ram-Peripherals.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'UK',
    title: 'Technology Outlet',
    type: 'Distributor',
    hLink: 'https://technologyoutlet.co.uk/collections/snapmaker-3d-printers',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Technology-Outlet.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/img/27-technology-outlet-logo.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'UK',
    title: 'Box',
    type: 'Small Distributor',
    hLink: 'https://www.box.co.uk/snapmaker-3-in-1-3d-printers',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Box.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: '',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/32-box.png'
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Spain',
    title: 'Triwee',
    type: 'Distributor',
    hLink: 'https://triwee.shop/en/1019-snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Triwee.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Europe, the Middle East and Africa',
    country: 'Portugal',
    title: 'Mauser',
    type: 'Distributor',
    hLink: 'https://mauser.pt/catalog/index.php?cPath=2207_2307',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Mauser.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Americas',
    country: 'USA',
    title: 'Microcenter',
    type: 'N/A',
    hLink: 'https://www.microcenter.com/brand/4294809882/snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Microcenter.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Americas',
    country: 'Canada',
    title: 'Shop3D',
    type: 'Distributor',
    hLink: 'https://shop3d.ca/collections/snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Shop3D.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc:
      'https://ditfjx9w4x3vl.cloudfront.net/assets/distributors/shop3D_logo_COLOR.png'
  },
  {
    tag: 'Americas',
    country: 'Canada',
    title: 'Robotshop ',
    type: 'Distributor',
    hLink: 'https://ca.robotshop.com/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Robotshop.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Americas',
    country: 'Canada',
    title: 'RepRap ',
    type: 'Small Distributor',
    hLink: 'https://www.reprapwarehouse.com/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/RepRap.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Americas',
    country: 'USA',
    title: 'Matterhackers',
    type: 'Distributor',
    hLink: 'https://www.matterhackers.com/store/c/3d-printers/snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Matterhackers.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Americas',
    country: 'USA',
    title: 'Learning Labs',
    type: 'Distributor',
    hLink: 'https://lli-estore.com/collections/snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Learning-Labs.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Americas',
    country: 'USA',
    title: 'STEMfinity',
    type: 'Distributor',
    hLink: 'https://stemfinity.com/collections/snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/STEMfinity.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/stemfinity.png'
  },
  {
    tag: 'Americas',
    country: 'Argentina',
    title: 'Across Trade',
    type: 'Small Distributor ',
    hLink: 'https://4makers.com.ar/product-category/impresoras-3d/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Across-Trade.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: '',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/AcrossTrade.png'
  },
  {
    tag: 'Americas',
    country: 'Peru',
    title: 'Powermatic',
    type: 'Small Distributor ',
    hLink: '',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/seller-missing-logo.jpg',
    Showroom: 'N',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Americas',
    country: 'Brazil',
    title: '3BE',
    type: 'Distributor ',
    hLink: 'https://www.3beshop.com.br/marca/snapmaker.html',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/3BE.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Americas',
    country: 'Brazil',
    title: '3D Criar',
    type: 'Distributor ',
    hLink: 'https://3dcriar.com.br/',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/3D-Criar.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Asia-Pacific',
    country: 'Australia & New Zealand',
    title: 'Jaycar',
    type: 'N/A',
    hLink:
      'https://www.jaycar.com.au/3d-printing/filament-3d-printing/filament-3d-printers/c/10AE?q=%3Apopularity-desc%3Abrand%3ASnapmaker&text=#',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/Jaycar.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/Jaycar.png'
  },
  {
    tag: 'Asia-Pacific',
    country: 'Australia',
    title: '3D Printing Pro',
    type: 'N/A',
    hLink: 'https://www.3dprintingpro.com.au/collections/snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/3D-Printing-Pro.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: '',
    imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/14-3dprintingpro.png'
  },
  {
    tag: 'Asia-Pacific',
    country: 'India',
    title: '3Idea Technology LLP',
    type: 'N/A',
    hLink: 'https://www.3idea.in/3d-printers/snapmaker',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/3Idea-Technology-LLP.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Asia-Pacific',
    country: 'Hongkong & Taiwan',
    title: '3DMart',
    type: 'N/A',
    hLink: 'https://3dmart.com.tw/products/snapmaker-3d-printer',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/3DMart.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Asia-Pacific',
    country: 'Thailand',
    title: 'VST ECS-Tailand',
    type: 'N/A',
    hLink: '',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/seller-missing-logo.jpg',
    Showroom: 'Update later',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Mainland China',
    country: 'Mainland China',
    title: '成都立现',
    type: 'N/A',
    hLink:
      'https://yangyuansm.tmall.com/search.htm?spm=a1z10.3-b.w5001-12953518467.7.44b94d48tDYKXc&orderType=newOn_desc&viewType=grid&keyword=3D%B4%F2%D3%A1%BB%FA&lowPrice=&highPrice=&scene=taobao_shop',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/chengdulixian.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Mainland China',
    country: 'Mainland China',
    title: '蜂铭科技',
    type: 'N/A',
    hLink: '',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/seller-missing-logo.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Mainland China',
    country: 'Mainland China',
    title: '南京复荣科技',
    type: 'N/A',
    hLink: '',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/seller-missing-logo.jpg',
    Showroom: 'Update later',
    Service: 'Y',
    Note: ''
  },
  {
    tag: 'Mainland China',
    country: 'Mainland China',
    title: '儒墨航空',
    type: 'N/A',
    hLink: '',
    logo: 'https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/sellers/seller-missing-logo.jpg',
    Showroom: 'Y',
    Service: 'Y',
    Note: ''
  }
]


const globalResellerNetwork = {
  banner: {
    title: 'Global Reseller Network',
    desc: `If you’re interested in selling Snapmaker products or becoming an authorized distributor, please help us get to know you better by completing the <a href="https://goo.gl/forms/I5ApF5N6AZhCJ0Z82" target="_blank">Application Form</a>. We’ll be in touch with you regarding your application or follow up if we have any questions.`,
    bgImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/PC_Global-Reseller-Network.jpg`,
    bgImgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/web_Global-Reseller-Network.jpg`
  },
  sellersList: [
    {
      h3text: 'Europe, the Middle East and Africa',
      columnsData: sellers.filter(x => x.tag === 'Europe, the Middle East and Africa')
    },
    {
      h3text: 'Americas',
      columnsData: sellers.filter(x => x.tag === 'Americas')
    },
    {
      h3text: 'Asia-Pacific',
      columnsData: sellers.filter(x => x.tag === 'Asia-Pacific')
    },
    {
      h3text: 'Mainland China',
      columnsData: sellers.filter(x => x.tag === 'Mainland China')
    }
  ],
  selectArea: {
    h1text: 'Authorized Dealers',
    areaArray: [
      'All',
      'Europe',
      'Americas',
      'Asia and Oceania'
    ],
    title: 'Choose your country or region:'
  }
}
globalResellerNetwork.selectArea.areaArray = globalResellerNetwork.sellersList.map(v => v.h3text)
export default globalResellerNetwork
