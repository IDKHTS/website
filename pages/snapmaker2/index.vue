<template>
  <div class="at-product" >
    <SubNavBar :isHeaderShow="isHeaderShow" :isFixed="false" :isAlwaysShow="false" :dataSource="snapmakerATNavBar"  @onBuyModal='onBuyModal'></SubNavBar>
    <BannerNew @showShopModal='onBuyModal'></BannerNew>
    <SellPoints :dataSrc='sellPoints'></SellPoints>
    <CaseResultCarousel :dataSrc='userCases'></CaseResultCarousel>
    <Recommend></Recommend>
    <Judgement></Judgement>
    <Material></Material>
    <Modes></Modes>
    <videoIntroduce :screenId="'videoIntroduce'"></videoIntroduce>
    <MachineSize></MachineSize>
    <ModularSys></ModularSys>
    <QuickSwapKit></QuickSwapKit>
    <Compatible></Compatible>
    <Software></Software>
    <Screen></Screen>
    <Instruction></Instruction>
    <Academy></Academy>
    <AllMetal></AllMetal>
    <HowMade></HowMade>
    <Easeuse></Easeuse>
    <Quadrangle :dataSrc='printingHighlights'></Quadrangle>
    <Quadrangle :dataSrc='laserHighlights'></Quadrangle>
    <Quadrangle :dataSrc='cncHighlights' style='padding-bottom: 200px;'></Quadrangle>
    <Versions></Versions>
    <Store @showShopModal='onBuyModal'></Store>
    <ShopModal v-show="isShowModal" :onCancel="onCancelModal" :dataSrc='shopModalData'  @openShopModal='onBuyModal'/>
  </div>
</template>

<script setup lang='ts'>
import SubNavBar from '@@/components/SubNavBar.vue'
import SellPoints from './sections/SellPoints.vue'
import BannerNew from './sections/Banner.vue'
import CaseResultCarousel from './sections/CaseResultCarousel.vue'
import Recommend from './sections/Recommend.vue'
import Judgement from './sections/Judgement.vue'
import Material from './sections/Material.vue'
import Modes from './sections/Modes.vue'
import videoIntroduce from './sections/videoIntroduce.vue'
import MachineSize from './sections/MachineSize.vue'
import ModularSys from './sections/ModularSys.vue'
import QuickSwapKit from './sections/QuickSwapKit.vue'
import Compatible from './sections/Compatible.vue'
import Software from './sections/Software.vue'
import Screen from './sections/Screen.vue'
import Instruction from './sections/Instruction.vue'
import Academy from './sections/Academy.vue'
import AllMetal from './sections/AllMetal.vue'
import HowMade from './sections/HowMade.vue'
import Easeuse from './sections/Easeuse.vue'
import Quadrangle from './components/Quadrangle.vue'
import Versions from './sections/Versions.vue'
import Store from './sections/Store.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
import ShopModal from '@@/components/ShopModal.vue'


const { isMobile, isHeaderShow } = storeToRefs(useGlobalStore())
const i18n = useI18n()

const sellPoints = computed(() => ({
  imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/ray/sell-points/v4.png',
  imgMobSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/ray/mob-sell-points/v4.png',
  cols: [
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/3in1.svg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/3in1.svg`,
      text: `3DP 丨 Laser 丨 CNC`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/Pc_Custom 3-in-1 Software Luban.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/web_Tailor-made, Free Software Luban.jpg`,
      text: `3-in-1 Software`
    },
    {
      svgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/10more.svg`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/Pc_Modular Design.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/web_Modular Design.jpg`,
      text: `Modular Design`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/Pc_350v2.svg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/web_350v2.svg`,
      text: `Large Work Area`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/Pc_All-metal Design.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/sell-points/web_All-metal design.jpg`,
      text: `All-metal Design`
    }
  ]
}))
const userCases = computed(() => ({
  displays: [
    {
      title: `@Cesar Antonio Trujillo Pérez`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/01-Cesar-Antonio-Trujillo-Pérez-(3DP).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/01-Cesar-Antonio-Trujillo-Pérez-(3DP).jpg`
    },
    {
      title: `@Dylan Prock`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/02-Dylan-Prock-3DP.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/02-Dylan-Prock-3DP.jpg`
    },
    {
      title: `@Gerwin Sturm`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/03-Gerwin-Sturm-(3DP).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/03-Gerwin-Sturm-(3DP).jpg`
    },
    {
      title: `@studiosklim`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/04-@studiosklim-3DP.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/04-@studiosklim-3DP.jpg`
    },
    {
      title: `@crowswamp`,
      type: `Laser`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/05-@crowswamp-Laser.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/05-@crowswamp-Laser.jpg`
    },
    {
      title: `@Chenchienchen`,
      type: `Laser`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/06-@Chenchienchen-(10W-Laser).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/06-@Chenchienchen-(10W-Laser).jpg`
    },
    {
      title: `@Tyler Walton`,
      type: `Laser`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/07-Tyler-Walton-(1.6W-Laser).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/07-Tyler-Walton-(1.6W-Laser).jpg`
    },
    {
      title: `@yohann_nvu2`,
      type: `Laser`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/08-@yohann_nvu2-laser.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/08-@yohann_nvu2-laser.jpg`
    },
    {
      title: `@Devon Beckett`,
      type: `CNC`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/09-@Devon-Beckett-CNC.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/09-@Devon-Beckett-CNC.jpg`
    },
    {
      title: `@Leon Lim`,
      type: `CNC`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/10-Leon-Lim-CNC.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/10-Leon-Lim-CNC.jpg`
    },
    {
      title: `@Stacey Vetzal`,
      type: `CNC`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/11-@Stacey-Vetzal-(CNC).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/11-@Stacey-Vetzal-(CNC).jpg`
    },
    {
      title: `@Natsuya Ishikawa`,
      type: `CNC`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/12-Natsuya-Ishikawa-(CNC).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/12-Natsuya-Ishikawa-(CNC).jpg`
    },
    {
      title: `@Joshua Miller`,
      type: '3DP, Laser',
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/13-Joshua-Miller-(3DP,-10W-Laser).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/13-Joshua-Miller-(3DP,-10W-Laser).jpg`
    },
    {
      title: `@Robert Salvador`,
      type: '3DP, Laser',
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/14-Robert-Salvador-(3DP,-Laser).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/14-Robert-Salvador-(3DP,-Laser).jpg`
    },
    {
      title: `@bakerbeardesigns`,
      type: '3DP, Laser, CNC',
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/15-@bakerbeardesigns-(3DP,-Laser,-CNC).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/15-@bakerbeardesigns-(3DP,-Laser,-CNC).jpg`
    },
    {
      title: `@heiden design`,
      type: '3DP, CNC',
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/16-heiden-design-(3DP,-CNC).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/usercases/16-heiden-design-(3DP,-CNC).jpg`
    }
  ]
}))
const printingHighlights = computed(() => {
  return {
    title: `3D printing highlights.`,
    displayList: [
      {
        title: `High Print Quality`,
        desc: `Optimized motion control algorithm improves coordination between the extruder of the 3D Printing Module and Linear Modules driven by lead screws, alleviating under- or over-extrusion happening at the corners, which allows Snapmaker 2.0 to deliver excellent print quality at a fast speed.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/High-Print-Quality.jpg`
      },
      {
        title: `Filament Runout Recovery`,
        desc: `Say goodbye to unfinished prints or "air printing". Equipped with a filament runout sensor, the machine will alert you when the filament has run out. You can now print large objects without breaking a sweat.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Filament-Runout-Recovery.jpg`
      },
      {
        title: `Auto Leveling`,
        desc: `The proximity sensor probes and obtains data for specific points on the heated bed and the machine compensates automatically for microscopic irregularities, thus enabling a nice and even first layer, which is a prerequisite for a successful print. Just a few taps, and witness all the intelligent work done.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Auto-Leveling.jpg`
      },
      {
        title: `Flexible Print Sheet`,
        desc: `Removing a print is now easier than ever. Just lift and flex the sheet, and your print will come right off. You can snap the print sheet back onto the magnetic heated bed in an instant.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Flexible-Print-Sheet.jpg`
      }
    ]
  }
})
const laserHighlights = computed(() => {
  return {
    title: `Laser engraving and cutting highlights.`,
    displayList: [
      {
        title: `0.2mm × 0.3mm Laser Spot`,
        desc: `Using a semiconductor laser as its light source, the laser module can engrave with a 0.2mm × 0.3mm laser focus, therefore making incredibly accurate images on various materials.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/0.2mm-×-0.3mm-Laser-Spot.jpg`
      },
      {
        title: `Built-in Camera`,
        desc: `The built-in camera enables the Auto Focus and Camera Capture features, so that you will spend less time focusing the laser, and can edit your design and position it exactly where you want it to be. What you see is what you get!`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Built-in-Camera.jpg`
      },
      {
        title: `Aluminum Grid Table`,
        desc: `The aluminum structure not only allows the smoke to be fully exhausted, but also leaves enough space for laser penetration. It alleviates burn-in of the laser unit and excessive carbonization on the back of the material.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Aluminum-Grid-Table.jpg`
      },
      {
        title: `High Power Upgrade Options`,
        desc: `You can upgrade your printer to a much stronger desktop laser cutter with the options of 10W Laser Module, 20W Laser Module, and 40W Laser Module.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/High-Power-Upgrade-Options.jpg`
      }
    ]
  }
})
const cncHighlights = computed(() => {
  return {
    title: `CNC carving highlights.`,
    displayList: [
      {
        title: `ER11 Collet`,
        desc: `The standard ER11 collet guarantees a better concentricity that allows for a more stable CNC carving speed and larger step-down. It also supports over 100 CNC bits, whose diameters range from 0.5mm (0.02") to 6.35mm (0.25").`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/ER11-Collet.jpg`
      },
      {
        title: `Custom MDF Platform and Clamp Sets`,
        desc: `Each Snapmaker 2.0 comes with an MDF board and clamp sets. The board is removable and can protect other machine parts from damage, while the customized clamp sets offer a much easier and steadier fixation than before.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Custom-MDF-Platform-and-Clamp-Sets.jpg`
      },
      {
        title: `Dust Resistance`,
        desc: `The leadscrew, driver chip, and precision parts of the Linear Modules are completely enclosed in the aluminum alloy housings, which eliminates dirt accumulation and ensures better durability.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Dust-Resistance.jpg`
      },
      {
        title: `4-axis CNC Machining`,
        desc: `The Snapmaker Rotary Module (Harmonic Drive Version) adds a 4th axis to your Snapmaker, making it an extremely mighty desktop CNC machining powerhouse, and much more.`,
        imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/4-axis-CNC-Machining.jpg`
      }
    ]
  }
})

const shopModalData = ref({})


const isShowModal = ref(false)
const snapmakerATNavBar = computed(() => i18n.tm('secondarynavbarData').snapmakerAT)
const onBuyModal = (data = [
  {
    text: `US Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/us.png`,
    link: `https://us.snapmaker.com/products/snapmaker-2-0-modular-3-in-1-3d-printer-a350t-a250t?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-a350t-buy-now&SkipCozyRedirect=yes`
  },
  {
    text: `EU Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/eu.png`,
    link: `https://eu.snapmaker.com/products/snapmaker-2-0-bundle-a350t-a250t?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-a350t-buy-now&SkipCozyRedirect=yes`
  },
  {
    text: `Global Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/others.png`,
    link: `https://shop.snapmaker.com/products/snapmaker-2-0-modular-3-in-1-3d-printer-a350t-a250t?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-a350t-buy-now&SkipCozyRedirect=yes`
  }
]) => {
  isShowModal.value = true
  shopModalData.value = data
}
const onCancelModal = () => isShowModal.value = false

</script>

<style lang="scss" scoped>
$pageH: calc(100vh - 200px);

#scroll-fullpage {
  height: $pageH;
}

.swiper-page-wrapper {
  height: $pageH;
  display: flex;
  align-content: center;
  justify-content: center;
  overflow-y: auto;

  background-color: white;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

<style lang="scss">
.at-product {
  .swiper-pagination-bullet {
    margin: 12px 0;
    background-color: white;
    opacity: 1;
  }
   .pagination-bullet-active {
    width: 11.733vw;
    max-width: 88px;
    background-color: #0C63E2;
  }

}
.at-product .title-color {
  background: linear-gradient(98deg, #0FA9FF 3.3%, #0F7DFF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
