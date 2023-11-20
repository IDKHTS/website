<template>
  <div class='bg-black laser-modules'>
    <ShopModal v-show="isShowModal" :onCancel="onCancelModal" :dataSrc='shopModalData' />
    <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar" @onBuyModal='showModal'></SubNavBar>
    <Banner :dataSrc='ray.banner' @openShopModal='showModal'></Banner>
    <div class='ray-movie'>
      <iframe id="ray-movie-iframe" width="100%" height='100%' :src="ray.banner.videoSource" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <SellPoints :dataSrc='ray.sellPoints'></SellPoints>
    <HorizontalWaterfall :dataSrc='ray.caseResult'></HorizontalWaterfall>
    <div class="snmk-container mt-3xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class='first-title text-center quick-case' v-html='ray.cuttingTech.firstTitle'></div>
      </div>
    </div>
    <TextAsset :screenId="'cuttingTech'" :dataSrc="ray.cuttingTech" :videoManuallyPlay='false'></TextAsset>
    <div class="snmk-container my-2xl">
      <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1">
        <img :src='ray.cuttingTech.params[0]' alt='15mm Max. Cutting Depth of Basswood Plywood'>
      </div>
      <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4" :class="{'mt-2xl': isMobile}">
        <img :src='ray.cuttingTech.params[1]' alt='20mm/s Max. Cutting Speed[2]'>
      </div>
    </div>
    <Comparison :screenId="'laserComparison'" :dataSrc="ray.laserComparison"></Comparison>
    <SmartAirAssist :dataSrc="ray.smartAirAssist"></SmartAirAssist>
    <div class="snmk-container mt-3xl">
      <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-offset-1 secondary-title">
        <div><NuxtImg :src="isMobile ? ray.airAssit.imgMobSrc : ray.airAssit.imgSrc" alt="" loading='lazy' /></div>
        <div class='mt-xl air-assist-desc' v-html='ray.airAssit.desc'></div>
      </div>
    </div>
    <TextAsset class='mt-3xl' :dataSrc="ray.lubanAirAssist"></TextAsset>
    <div class='linear-rail' >
      <div class="snmk-container pt-3xl mb-2xl text-center">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <h1 class='first-title' v-html='ray.linearRails.firstTitle'></h1>
        </div>
      </div>
      <NuxtImg class='w-100' :src="isMobile ? ray.linearRails.imgMobSrc : ray.linearRails.imgSrc" alt="" loading='lazy' />
      <div class="snmk-container">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 my-2xl">
          <div class='lr-desc' v-html='ray.linearRails.desc'></div>
        </div>
      </div>
    </div>
    <div class="snmk-container mt-3xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 secondary-title" :class="{'mb-l': isMobile}">
        {{  ray.speed.title }}
      </div>
    </div>
    <div class="mb-3xl">
      <NuxtImg class='w-100' :src='!isMobile ? ray.speed.imgSrc : ray.speed.imgMobSrc' :alt='ray.speed.title' loading='lazy'/>
    </div>
    <div class="snmk-container mt-3xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-center">
        <div class='first-title mb-xs' v-html='ray.workArea.firstTitle'></div>
        <div class='secondary-title' v-html='ray.workArea.title'></div>
      </div>
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 mb-3xl pos-relative">
        <div class='workarea-param'>28.39"</div>
        <NuxtImg class='w-100' :src='!isMobile ? ray.workArea.imgSrc : ray.workArea.imgMobSrc' :alt='ray.workArea.title' loading='lazy'/>
      </div>
    </div>
    <TextAsset :screenId="'flexibleZHeight'" :dataSrc="ray.flexibleZHeight"></TextAsset> 
    <template v-if='!isMobile'>
      <TextOptions :dataSrc='ray.enclosure' :screen-id="'enclosure'"></TextOptions>
      <TextOptions :dataSrc='ray.safeSound' :screen-id="'safeSound'" :isOptionLeft='false'></TextOptions>
    </template>
    <template v-else>
      <Enclosure  :screen-id="'enclosure'" :dataSrc='ray.enclosure'></Enclosure>
      <SafeSound  :screen-id="'safeSound'" :dataSrc='ray.safeSound'></SafeSound>
    </template>
    <div class="snmk-container mt-3xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class='first-title text-center quick-case' v-html='ray.quickCase.firstTitle'></div>
      </div>
    </div>
    <TextAsset :screenId="'quickCase'" :dataSrc="ray.quickCase"></TextAsset>
    <CaseDisplay :dataSrc='laserModules.caseDisplay'></CaseDisplay>
    <TextAsset class='py-3xl' :screenId="'lightburnCompatible'" :dataSrc="ray.lightburnCompatible" :isAssetLeft='true'></TextAsset>
    <TextAsset class='with-quick-swap' :screenId="'withQuickSwap'" :dataSrc="ray.withQuickSwap"></TextAsset>
    <ModuleDesign v-if='isMobile' :dataSrc='ray.moduleDesign' :screen-id="'moduleDesign'"></ModuleDesign>
    <TextOptions v-else :screenId="'ModuleData'" :dataSrc='ray.moduleDesign'></TextOptions>
    <div class="milestones">
      <div class="text-center first-title mt-3xl" :class="{'px-xl': !isMobile, 'px-m': isMobile}">{{ray.milestones.title}}</div>
      <div class="milestones-content" :class="{'snmk-mx': isMobile}">
        <img class='w-100' :src='isMobile ? ray.milestones.imgMobSrc : ray.milestones.imgSrc'>
      </div>
    </div>
    <CaseResultCarousel :dataSrc='ray.caseResultCarousel'></CaseResultCarousel>
    <PurchaseCombination :dataSrc='ray.purchaseCombination'></PurchaseCombination>
    <Store :dataSrc='ray.store' @openShopModal='showModal'></Store>
    <Notes :dataSrc="ray.comments"></Notes>





    <!--  -->
  </div>
</template>
<script setup lang='ts'>
import SubNavBar from '@@/components/SubNavBar.vue'
import ShopModal from '@@/components/ShopModal.vue'
import Banner from '@@/pages/ray/sections/Banner.vue'
import SellPoints from '@@/pages/ray/sections/SellPoints.vue'
import HorizontalWaterfall from '@@/pages/ray/sections/HorizontalWaterfall.vue'
import TextAsset from '@@/pages/ray/sections/TextAsset.vue'
import Comparison from '@@/pages/laser-modules/sections/Comparison.vue'
import SmartAirAssist from '@@/pages/laser-modules/sections/SmartAirAssist.vue'
import TextOptions from './sections/TextOptions.vue'
import SafeSound from '@/pages/ray/sections/SafeSound.vue'
import Enclosure from '@/pages/ray/sections/Enclosure.vue'
import CaseDisplay from '@/pages/laser-modules/sections/CaseDisplay.vue'
import ModuleDesign from './sections/ModuleDesign.vue'
import CaseResultCarousel from '@/pages/ray/sections/CaseResultCarousel.vue'
import PurchaseCombination from '@/pages/ray/sections/PurchaseCombination.vue'
import Store from '@/pages/ray/sections/Store.vue'
import Notes from '@@/components/Notes.vue'
/*
import TimeBase from '@/pages/ray/sections/TimeBase.vue'

import ModuleData from '@/pages/laser-modules/sections/ModuleData.vue'
import WorkArea from '@/pages/ray/sections/WorkArea.vue'
import LinearRails from '@/pages/ray/sections/LinearRails.vue'
import TextVideo from '@/components/base/TextVideo.vue'
 */
import head from '@@/resources/data/head'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())

useHead(head.ray)
const i18n = useI18n()
const ray = computed<any>(() => i18n.tm('ray'))
const laserModules = computed<any>(() => i18n.tm('laserModules'))
const subNavBar = computed(() => {
  const data = i18n.tm('secondarynavbarData').ray
  data.mainTitle = isMobile.value ? data.mobMainTitle : data.mainTitle
  return data
})

onMounted(() => {
  document.documentElement.classList.remove('body-no-scroll')
})

const isShowModal = ref()
const shopModalData = ref()
const onCancelModal = () => {
  isShowModal.value = false
  shopModalData.value = []
}
const showModal = (data: any = [
  {
    text: `US Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/us.png`,
    link: `https://us.snapmaker.com/products/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist?SkipCozyRedirect=yes&utm_source=officialwebsite&utm_medium=subdomain&utm_campaign=ray_release&utm_content=landing-page-buy-now`
  },
  {
    text: `EU Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/eu.png`,
    link: `https://eu.snapmaker.com/products/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist?SkipCozyRedirect=yes&utm_medium=subdomain&utm_campaign=ray_release&utm_content=landing-page-buy-now`
  },
  {
    text: `Global Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/others.png`,
    link: `https://shop.snapmaker.com/products/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist?SkipCozyRedirect=yes&utm_source=officialwebsite&utm_medium=subdomain&utm_campaign=ray_release&utm_content=landing-page-buy-now`
  }
]) => {
  isShowModal.value = true
  shopModalData.value = data
}
</script>

<style scoped lang='scss'>
@import './theme.scss';

.bg-black {
  background-color: black;

  &::v-deep .text-video {
    background-color: black;
  }
}

.snmk-container {
  background-color: black;
}

.standard-block,
.standard-block .snmk-container {
  background-color: #0E0D12;
}

.sell-point-wrapper {
  background: black;
}

.quick-case {
  margin-bottom: 124px;

  @include mobile {
    margin-bottom: 32px;
  }
}

.standard-title {
  margin: 0;
  padding-block: 114px 0;
  text-align: center;

  @include mobile {
    padding-block: calc(53px + 48px) 0px;
  }
}

.ray-movie {
  iframe {
    height: calc(100vh - 100px);
  }

  @include mobile {
    min-height: 500px;

    iframe {
      height: 100vw;
    }
  }
}

.ray-movie {
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.air-assist-desc {
  color: var(--white, #FFF);

  /* Heading/1920/Gilroy Bold-24 */
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  /* 133.333% */
  letter-spacing: -0.24px;

  @include mobile {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    /* 200% */
  }
}

.linear-rail {
  background: #FFF;

  .snmk-container {
    background-color: white;
  }

  .lr-desc {
    color: var(--unnamed, #5C5C5C);
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    /* 140% */
    letter-spacing: -0.24px;

    // @media (min-width: 2560px) {
    //   text-align: center;
    // }

    @include mobile {
      font-size: 18px;
      line-height: 24px;
      /* 133.333% */
      text-align: center;
    }
  }
}

.workarea-param {
  position: absolute;
  top: 55.024%;
  left: 50%;
  transform: translateX(-50%);

  color: #00FFD1;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.50);
  font-family: Roboto;
  font-size: 39.75px;
  font-style: normal;
  font-weight: 800;
  line-height: 53px;
  /* 133.333% */
  letter-spacing: -0.397px;

  @include mobile {
    top: 52.024%;
    font-size: 24px;
    line-height: 32px;
    /* 133.333% */
  }
}

.with-quick-swap {
  &::v-deep .title-1 {
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 68px;
    /* 113.333% */
    letter-spacing: -0.24px;

    background: var(--unnamed, linear-gradient(90deg, #00FFD1 0%, #0704F1 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1568px) and (min-width: 768px) {
      font-size: 44px;
      line-height: 52px;
      /* 113.333% */
    }

    @include mobile {
      font-size: 36px;
      line-height: 44px;
      /* 122.222% */

    }
  }


}

.milestones {
  overflow: hidden;
}

.milestones-content {
  margin-top: 84px;
  background-color: #171717;

  hr {
    height: 1px;
    background-color: #171717;
  }
}

.ray-footer {
  background-color: #2B2B2B;

  .snmk-container {
    background-color: #2B2B2B;
  }

  .snmk-primary-btn {
    color: #FBFFFF;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
    min-width: 230px;

    &:hover {
      color: white;
    }
  }
}

.footer-title {
  color: var(--unnamed, #C2C2C2);
  text-align: center;

  /* Heading/1920/Gilroy Bold-24 */
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  /* 133.333% */
  letter-spacing: -0.24px;
}

a.footer-video {
  border-radius: 35px;
  background: #EB251E;
  margin-top: 20px;

  &:hover {
    background: #9e1712;
    color: white;
  }

  @include mobile {
    margin-top: 20px;
  }
}
</style>
