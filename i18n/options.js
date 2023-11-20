

import enhome2Swiper from './en-US/data/home2Swiper'
import cnhome2Swiper from './zh-CN/data/home2Swiper'

import envideos from './en-US/data/videos'
import cnvideos from './zh-CN/data/videos'
// import enbarlist from './en-US/data/barlist'
// import cnbarlist from './zh-CN/data/barlist'
import enlink2 from './en-US/data/link2'
import cnlink2 from './zh-CN/data/link2'
import enmetas from './en-US/data/metas'
import cnmetas from './zh-CN/data/metas'
import enpopupagency from './en-US/vue/popupagency'
import cnpopupagency from './zh-CN/vue/popupagency'
import enpopupstripe from './en-US/vue/popupstripe'
import cnpopupstripe from './zh-CN/vue/popupstripe'
import ensecondarynavbar from './en-US/vue/secondarynavbar'
import cnsecondarynavbar from './zh-CN/vue/secondarynavbar'
import enspecpart from './en-US/vue/specpart'
import cnspecpart from './zh-CN/vue/specpart'
import envideobanner from './en-US/vue/videobanner'
import cnvideobanner from './zh-CN/vue/videobanner'
import enabout from './en-US/data/about'
import cnabout from './zh-CN/data/about'
import encommon from './en-US/data/common'
import cncommon from './zh-CN/data/common'
// import encommunity from './en-US/data/community'
import cncommunity from './zh-CN/data/community'
import endocument from './en-US/data/document'
import cndocument from './zh-CN/data/document'
import endownload from './en-US/data/download'
import cndownload from './zh-CN/data/download'
import enpress from './en-US/data/press'
import cnpress from './zh-CN/data/press'
import enreferral from './en-US/data/referral'
import enproduct from './en-US/data/product'
import cnproduct from './zh-CN/data/product'
import enproductmulti from './en-US/data/products'
import cnproductmulti from './zh-CN/data/products'
import enrepair from './en-US/data/repair'
import cnrepair from './zh-CN/data/repair'
import ensnapmaker2 from './en-US/data/snapmaker2'
import cnsnapmaker2 from './zh-CN/data/snapmaker2'
import enspec from './en-US/data/spec'
import cnspec from './zh-CN/data/spec'
// import ensupport from './en-US/data/support'
// import cnsupport from './zh-CN/data/support'
import enterm from './en-US/data/term'
import cnterm from './zh-CN/data/term'
import enthanks from './en-US/data/thanks'
import cnthanks from './zh-CN/data/thanks'
import enthankyou from './en-US/data/thankyou'
import cnthankyou from './zh-CN/data/thankyou'
import enthankyouBackers from './en-US/data/thankyouBackers'
import cnthankyouBackers from './zh-CN/data/thankyouBackers'
import endistributor from './en-US/data/distributor'
import cndistributor from './zh-CN/data/distributor'
import globalResellerNetwork from './en-US/data/where-to-buy/global-reseller-network'
import whereToBuy from './en-US/data/where-to-buy/index'
// import enhome2 from './en-US/data/home2'
// import cnhome2 from './zh-CN/data/home2'
import enrotary from './en-US/vue/rotary'
import cnrotary from './zh-CN/vue/rotary'
import ensupporttype from './en-US/data/supportType'
import znsupporttype from './zh-CN/data/supportType'
import enAirPurifier from './en-US/vue/airPurifier.js'
// todo: zh-cn air purifier data
import enAnniversary from './en-US/data/anniversary.js'
// todo: zh-cn anniversary data

import enSnapmaker2F from './en-US/data/snapmaker2F'

import enLaser from './en-US/data/laser'

import enHeader from './en-US/data/header'
import cnHeader from './zh-CN/data/header'
import enFooter from './en-US/data/footer'
import cnFooter from './zh-CN/data/footer'
import enhome from './en-US/data/home'
import cnhome from './zh-CN/data/home'
import enProudcts from './en-US/data/products-new'
import cnProudcts from './zh-CN/data/products-new'
import enSoftware from './en-US/data/software'
import cnSoftware from './zh-CN/data/software'
import enaboutUs from './en-US/data/about-us'
import cnaboutUs from './zh-CN/data/about-us'
import enMaterials from './en-US/data/materials'
// import cnMaterials from './zh-CN/data/materials'
import enMaterialGuide from './en-US/data/material-guide'
// import cnMaterialGuide from './zh-CN/data/material-guide'
import enMaterialsDetail from './en-US/data/materials-detail'
import enArtisan from './en-US/data/artisan'
import quickSwapKit from './en-US/data/quick-swap-kit'


import enContests from './en-US/data/community/contests'
import enStarmaker from './en-US/data/community/starmaker'
import enCommunity from './en-US/data/community/community'
import enUserCase from './en-US/data/community/user-case'

import enJ1Data from './en-US/data/j1'
import enLaserModules from './en-US/data/laser-modules'
import enRay from './en-US/data/ray'


import enEggHunt23 from './en-US/data/contests/eggHunt23'
import childhoodGames from './en-US/data/contests/childhood-games'
import seventhAnniversary from './en-US/data/contests/seventhAnniversary'
import snapmakerRay from './en-US/data/contests/snapmaker-ray'

// let lang = process.env.NODE_LANGUAGE || 'en-US'
let lang = 'en-US'

const messages = {
  'en-US': {
    rotaryData: enrotary,
    home2SwiperData: enhome2Swiper,
    // barlist: enbarlist,
    linkData: enlink2,
    metaData: enmetas,
    popupagencyData: enpopupagency,
    popupstripeData: enpopupstripe,
    secondarynavbarData: ensecondarynavbar,
    specpartData: enspecpart,
    videobannerData: envideobanner,
    aboutData: enabout,
    commonData: encommon,
    // communityData: encommunity,
    documentData: endocument,
    downloadData: endownload,
    pressData: enpress,
    referralData: enreferral,
    productData: enproduct,
    productmultiData: enproductmulti,
    repairData: enrepair,
    snapmaker2Data: ensnapmaker2,
    specData: enspec,
    // supportData: ensupport,
    termData: enterm,
    thanksData: enthanks,
    thankyouData: enthankyou,
    thankyouBackersData: enthankyouBackers,
    distributorData: endistributor,
    globalResellerNetwork: globalResellerNetwork,
    whereToBuy: whereToBuy,
    // home2Data: enhome2,
    videosData: envideos,
    supportTypeData: ensupporttype,
    airPurifier: enAirPurifier,
    anniversary: enAnniversary,
    snapmaker2FData: enSnapmaker2F,
    laserData: enLaser,

    headerData: enHeader,
    footerData: enFooter,
    homeData: enhome,
    productsData: enProudcts,
    softwareData: enSoftware,
    aboutUsData: enaboutUs,
    materialsData: enMaterials,
    materialGuideData: enMaterialGuide,
    materialsDetailData: enMaterialsDetail,
    contestsData: enContests,
    starmakerData: enStarmaker,
    communityData: enCommunity,
    artisanData: enArtisan,
    quickSwapKit: quickSwapKit,
    userCaseData: enUserCase,
    j1Data: enJ1Data,
    laserModules: enLaserModules,
    ray: enRay,
    eggHunt23: enEggHunt23,
    seventhAnniversary: seventhAnniversary,
    childhoodGames: childhoodGames,
    snapmakerRay: snapmakerRay
  },
  'zh-CN': {
    rotaryData: cnrotary,
    videosData: cnvideos,
    home2SwiperData: cnhome2Swiper,
    // barlist: cnbarlist,
    linkData: cnlink2,
    metaData: cnmetas,
    popupagencyData: cnpopupagency,
    popupstripeData: cnpopupstripe,
    secondarynavbarData: cnsecondarynavbar,
    specpartData: cnspecpart,
    videobannerData: cnvideobanner,
    aboutData: cnabout,
    commonData: cncommon,
    communityData: cncommunity,
    documentData: cndocument,
    downloadData: cndownload,
    pressData: cnpress,
    productData: cnproduct,
    productmultiData: cnproductmulti,
    repairData: cnrepair,
    snapmaker2Data: cnsnapmaker2,
    specData: cnspec,
    // supportData: cnsupport,
    termData: cnterm,
    thanksData: cnthanks,
    thankyouData: cnthankyou,
    thankyouBackersData: cnthankyouBackers,
    distributorData: cndistributor,
    // home2Data: cnhome2,
    supportTypeData: znsupporttype,
    // todo zh-cn air purifier

    headerData: cnHeader,
    footerData: cnFooter,
    homeData: cnhome,
    productsData: cnProudcts,
    softwareData: cnSoftware,
    aboutUsData: cnaboutUs
    // materialsData: cnMaterials,
    // materialGuideData: cnMaterialGuide
  }
}

export default {
  locale: lang,
  messages,
  fallbackLocale: 'en-US'
}
