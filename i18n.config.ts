import config from '@@/i18n/options'
import enHeader from '@@/i18n/en-US/data/header'
import cnHeader from '@@/i18n/zh-CN/data/header'
import enFooter from '@@/i18n/en-US/data/footer'
import cnFooter from '@@/i18n/zh-CN/data/footer'
import enHome from '@@/i18n/en-US/data/home'
import cnHome from '@@/i18n/zh-CN/data/home'
import enWhereToBuy from '@@/i18n/en-US/data/where-to-buy/index'
import enDistributorData from '@@/i18n/en-US/data/distributor'
import cnDistributorData from '@@/i18n/zh-CN/data/distributor'
import globalResellerNetwork from '@@/i18n/en-US/data/where-to-buy/global-reseller-network'
import enPressData from '@@/i18n/en-US/data/press'
import cnPressData from '@@/i18n/zh-CN/data/press'
import enReferralData from '@@/i18n/en-US/data/referral'
import enProductsData from '@@/i18n/en-US/data/products-new'
import cnProductsData from '@@/i18n/zh-CN/data/products-new'
import enproductmulti from '@@/i18n/en-US/data/products'

import enSoftware from '@@/i18n/en-US/data/software'
import cnSoftware from '@@/i18n/en-US/data/software'
import enCommunity from '@@/i18n/en-US/data/community/community'
import cnCommunity from '@@/i18n/zh-CN/data/community'
import enContests from '@@/i18n/en-US/data/community/contests'
import enStarmaker from '@@/i18n/en-US/data/community/starmaker'
import enUserCase from '@@/i18n/en-US/data/community/user-case'
import enMaterials from '@@/i18n/en-US/data/materials'
import enMaterialGuide from '@@/i18n/en-US/data/material-guide'
import enMaterialsDetail from '@@/i18n/en-US/data/materials-detail'

import ensecondarynavbar from '@@/i18n/en-US/vue/secondarynavbar'
import cnsecondarynavbar from '@@/i18n/zh-CN/vue/secondarynavbar'
import ensnapmaker2 from '@@/i18n/en-US/data/snapmaker2'
import cnsnapmaker2 from '@@/i18n/zh-CN/data/snapmaker2'
import enspec from '@@/i18n/en-US/data/spec'
import cnspec from '@@/i18n/zh-CN/data/spec'

import enLaser from '@@/i18n/en-US/data/laser'

import enArtisan from '@@/i18n/en-US/data/artisan'

import enLaserModules from '@@/i18n/en-US/data/laser-modules'

import enRay from '@@/i18n/en-US/data/ray'

import makeChangesHappen from '@@/i18n/en-US/data/contests/make-changes-happen'
import getOrganized from '@@/i18n/en-US/data/contests/get-organized'
import multiColorPrint from '@@/i18n/en-US/data/contests/multiColorPrint'
import enEggHunt23 from '@@/i18n/en-US/data/contests/eggHunt23'
import childhoodGames from '@@/i18n/en-US/data/contests/childhood-games'
import getStartInSnapmaker from '@@/i18n/en-US/data/contests/get-start-in-snapmaker'
import halloweenCreations from '@@/i18n/en-US/data/contests/halloween-creations'
import seventhAnniversary from '@@/i18n/en-US/data/contests/seventhAnniversary'
import snapmakerRay from '@@/i18n/en-US/data/contests/snapmaker-ray'


import enaboutUs from '@@/i18n/en-US/data/about-us'
import cnaboutUs from '@@/i18n/zh-CN/data/about-us'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  //   locale: 'zh-CN',
  lazy: true,
  messages: {
    'en-US': {
      headerData: enHeader,
      footerData: enFooter,
      homeData: enHome,

      productsData: enProductsData,
      productmultiData: enproductmulti,

      softwareData: enSoftware,
      materialsData: enMaterials,
      materialGuideData: enMaterialGuide,
      materialsDetailData: enMaterialsDetail,

      communityData: enCommunity,
      starmakerData: enStarmaker,
      contestsData: enContests,
      userCaseData: enUserCase,
      makeChangesHappen: makeChangesHappen,
      getOrganized: getOrganized,
      multiColorPrint: multiColorPrint,
      eggHunt23: enEggHunt23,
      seventhAnniversary: seventhAnniversary,
      childhoodGames: childhoodGames,
      halloweenCreations: halloweenCreations,
      snapmakerRay: snapmakerRay,
      getStartInSnapmaker: getStartInSnapmaker,

      distributorData: enDistributorData,
      whereToBuy: enWhereToBuy,
      globalResellerNetwork: globalResellerNetwork,
      pressData: enPressData,
      referralData: enReferralData,

      secondarynavbarData: ensecondarynavbar,
      snapmaker2Data: ensnapmaker2,
      specData: enspec,

      laserData: enLaser,

      artisanData: enArtisan,

      laserModules: enLaserModules,

      ray: enRay,

      aboutUsData: enaboutUs,
    },
    'zh-CN': {
      headerData: cnHeader,
      footerData: cnFooter,
      homeData: cnHome,
      distributorData: cnDistributorData,
      pressData: cnPressData,
      productsData: cnProductsData,
      softwareData: cnSoftware,
      communityData: cnCommunity,

      secondarynavbarData: cnsecondarynavbar,
      snapmaker2Data: cnsnapmaker2,
      specData: cnspec,
      aboutUsData: cnaboutUs
    },
  },
}))
