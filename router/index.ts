import { NavigationGuardNext, RouteLocationNormalizedLoaded } from '#vue-router'
import nameI18nMap from '~/pages/contests/name-i18n-map'

// import Distributors from '@@/pages/where-to-buy/Distributors.vue'
const Home = () => import('@@/pages/home/index.vue')
const Products = () => import('@@/pages/products/index.vue')
const Software = () => import('@@/pages/software/index.vue')

const Materials = () => import('@@/pages/materials/Materials.vue')
const MaterialsDetail = () => import('@@/pages/materials/materials-detail/MaterialsDetail.vue')
const MaterialGuide = () => import('@@/pages/materials/materials-guide/MaterialGuide.vue')

const Community = () => import('@@/pages/community/Community.vue')
const Contests = () => import('@@/pages/community/contests/Contests.vue')
const Starmaker = () => import('@@/pages/community/starmaker/Starmaker.vue')
const UserCase = () => import('@@/pages/community/user-case/UserCase.vue')
const Contest = () => import('@@/pages/contests/index.vue')


const Snapmaker2 = () => import('@@/pages/snapmaker2/index.vue')
const ATSpec = () => import('@@/pages/snapmaker2/spec/Spec.vue')
const Snapmaker2Addons = () => import('@@/pages/snapmaker2/Addons.vue')
const Snapmaker2Review = () => import('@@/pages/snapmaker2/Review.vue')
const Snapmaker2Faq = () => import('@@/pages/snapmaker2/Faq.vue')

const Laser10W = () => import('@@/pages/laserhead-10w/index.vue')
const Laser10WFaq = () => import('@@/pages/laserhead-10w/Faq.vue')
const Laser10WSpecs = () => import('@@/pages/laserhead-10w/Specs.vue')


const Artisan = () => import('@@/pages/artisan/Artisan-home.vue') 
const InTheBox = () => import('@@/pages/artisan/InTheBox.vue') 
const ArtisanSpecs = () => import('@@/pages/artisan/ArtisanSpecs.vue')
const ArtisanFaq = () => import('@@/pages/artisan/Faq.vue')

const LaserModules = () => import('@@/pages/laser-modules/index.vue')
const LaserModulesInTheBox = () => import('@@/pages/laser-modules/LaserModulesInTheBox.vue')

const Ray = () => import('@/pages/ray/index.vue')
const RayInTheBox = () => import('@/pages/ray/RayInTheBox.vue')
const RaySpecs = () => import('@/pages/ray/specs/RaySpecs.vue')

const AboutUS = () => import('@@/pages/about-us/index.vue')

const WhereToBuy = () => import('@@/pages/where-to-buy/index.vue')
const Distributors = () => import('@@/pages/where-to-buy/Distributors.vue')

const Affiliate = () => import('@@/pages/affiliate/index.vue')
const Referral = () => import('@@/pages/referral/index.vue')
const NotFound404 = () => import('@@/pages/NotFound404.vue')
export default [
    {
      path: '/',
      name: 'Home',
      component: Home
    },  
    {
      path: '/home',
      redirect: '/'
    }, 
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    // {
    //   path: '/:id/addons',
    //   name: 'productAddons',
    //   component: ProductAddons
    // },

    // snapmaker2
    {
      path: '/product/snapmaker-2',
      name: 'Snapmaker 2.0',
      redirect: '/snapmaker-2'
    },
    {
      path: '/platform',
      redirect: '/snapmaker-2'
    },
    {
      path: '/snapmaker-2',
      name: 'Platform',
      component: Snapmaker2 // Snapmaker2
    },
    {
      path: '/snapmaker-2/specs-at',
      name: 'snapmaker2 specs',
      component: ATSpec // Snapmaker2
    },
    {
      path: '/snapmaker-2/addons',
      name: 'snapmaker2 addons',
      component: Snapmaker2Addons
    },
    {
      path: '/snapmaker-2/reviews',
      name: 'snapmaker2 reviews',
      component: Snapmaker2Review
    },
    {
      path: '/snapmaker-2/faq',
      name: 'snapmaker2 faq',
      component: Snapmaker2Faq
    },

    // 10W
    {
      path: '/snapmaker-10w-laser-module',
      name: 'laser 10w',
      component: Laser10W // Snapmaker2
    },
    {
      path: '/snapmaker-10w-laser-module/faq',
      name: 'laser 10w faq',
      component: Laser10WFaq // Snapmaker2
    },
    {
      path: '/snapmaker-10w-laser-module/specs',
      name: 'laser 10w specs',
      component: Laser10WSpecs // Snapmaker2
    },

    // Artisan
    {
      path: '/snapmaker-artisan',
      name: 'artisan',
      component: Artisan
    },
    {
      path: '/snapmaker-artisan/in-the-box',
      name: 'artisan in-the-box',
      component: InTheBox
    },
    {
      path: '/snapmaker-artisan/specs',
      name: 'artisanSpecs',
      component: ArtisanSpecs
    },
    {
      path: '/snapmaker-artisan/faq',
      name: 'Artisan faq',
      component: ArtisanFaq
    },
    
    // 20W/40W
    {
      path: '/laser-modules',
      redirect: '/snapmaker-20w-and-40w-laser-module-with-air-assist'
    },
    {
      path: '/snapmaker-20w-and-40w-laser-module-with-air-assist',
      name: 'laser-modules',
      component: LaserModules // Snapmaker2
    },
    {
      path: '/snapmaker-20w-and-40w-laser-module-with-air-assist/in-the-box',
      name: 'laser modules in-the-box',
      component: LaserModulesInTheBox // Snapmaker2
    },

    // Ray
    {
      path: '/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist',
      component: Ray // Snapmaker2
    },
    {
      path: '/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist/in-the-box',
      name: 'ray in-the-box',
      component: RayInTheBox // Snapmaker2
    },
    {
      path: '/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist/specs',
      name: 'ray specs',
      component: RaySpecs // Snapmaker2
    },

    // Software
    {
      path: '/snapmaker-luban',
      name: 'Software',
      component: Software
    },

    // community
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/community/contests',
      name: 'Contests',
      component: Contests
    },
    {
      path: '/community/starmaker',
      name: 'Starmaker',
      component: Starmaker
    },
    {
      path: '/community/user-case',
      name: 'User Case',
      component: UserCase
    },
    {
      path: '/event/:name',
      component: Contest,
      beforeEnter: (to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
        const i18nVarName = nameI18nMap[to.params.name] 
        if(!to.params.name || !i18nVarName) {
          next('/404')
          return
        }
        next()
        // ...
      }
    },
    {
      path: '/events/:name',
      component: Contest,
      beforeEnter: (to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
        const i18nVarName = nameI18nMap[to.params.name] 
        if(!to.params.name || !i18nVarName) {
          next('/404')
          return
        }
        next()
        // ...
      }
    },

    // Materials
    {
      path: '/materials',
      name: 'Materials',
      component: Materials,
    },
    {
      path: '/materials/:type/:item',
      name: 'Material Detail',
      component: MaterialsDetail
    },
    {
      path: '/materials/:type/',
      name: 'Material Detail Class',
      component: MaterialsDetail
    },
    {
      path: '/materials/3dp-guide',
      name: 'Material Guide',
      component: MaterialGuide
    },

    // Ad
    {
      path: '/affiliate-program',
      name: 'affiliate',
      component: Affiliate
    },
    {
      path: '/referral-program',
      name: 'referral',
      component: Referral
    },
    
    // Distributors
    {
      path: '/where-to-buy',
      name: 'where to buy',
      component: WhereToBuy
    },
    {
      path: '/distributors',
      name: 'distributors',
      component: Distributors
    },
    
    // others
    {
      path: '/about',
      redirect: '/about-us'
    },
    {
      path: '/about-us',
      name: 'About',
      component: AboutUS
    },
    {
      path: '/404',
      component: NotFound404
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
]