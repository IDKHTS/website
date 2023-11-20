<template>
  <div class='bg-black laser-modules'>
    <ShopModal v-show="isShowModal" :onCancel="onCancelModal" :dataSrc='shopModalData' />
    <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar" @onBuyModal='showModal'></SubNavBar>
    <Loading v-if='!isMobile' :isLoading='isLoading'></Loading>
    <FirstScreen v-if='!isMobile' @loaded='isLoading = false' @openShopModal='showModal' :dataSrc='laserModules.screen1'>
    </FirstScreen>
    <FirstScreenMob v-else @loaded='isLoading = false' @openShopModal='showModal' :dataSrc='laserModules.screen1'>
    </FirstScreenMob>
    <template v-if='secondaryLoaded'>
      <div class='standard-block'>
        <div class="snmk-container">
          <div
            class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
            <h1 class='first-title standard-title' v-html='laserModules.title'></h1>
          </div>
        </div>
      </div>
      <ModuleData :dataSrc='laserModules.ModuleData'></ModuleData>
      <Comparison :screenId="'screen39'" :dataSrc="laserModules.laserComparison"></Comparison>
      <CaseResultDisplay :dataSrc="laserModules.caseResultDisplay"></CaseResultDisplay>
      <SmartAirAssist :dataSrc="laserModules.smartAirAssist"></SmartAirAssist>
      <div class="snmk-container">
        <div
          class="snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1 py-3xl ">
          <video v-if='!isMobile' muted autoplay x-webkit-airplay="allow" playsinline="true" x5-playsinline="true"
            webkit-playsinline="true" x5-video-player-fullscreen="true" x5-video-player-type="h5"
            x5-video-orientation="portraint" loop class="w-100">
            <source :src="laserModules.airAssistComparisonsWebm" type="video/mp4" />
            <source :src="laserModules.airAssistComparisonsVideo" type="video/mp4" />您的浏览器不支持 video 标签。
          </video>
          <NuxtImg v-else :src='laserModules.airAssistComparisonsImg' loading='lay' />
          <h1 class='third-title text-center mt-32' v-html='laserModules.comparisonsTitle'></h1>
        </div>
      </div>
      <TextVideo :screenId="'airAssist'" :dataSrc="laserModules.airAssist" :viewerOptions="{ useViewer: false }">
      </TextVideo>
      <div class='snmk-container pt-3xl'>
        <div class="snmk-col-s-4 snmk-col-xs-4">
          <div class='first-title text-center' v-html='laserModules.imgListTitle'></div>
        </div>
      </div>
    </template>
    <template v-if='thridLoaded'>

      <div v-if='!isMobile' class='vertical-center horizontal-center pb-3xl img-list'>
        <NuxtImg class='w-100' v-for='item of laserModules.imgListSrc' :key='item' :src="item"
          alt="snapmaker laser modules" loading='lazy' />
      </div>
      <div v-else class='snmk-container'>
        <div class="snmk-col-s-4 snmk-col-xs-4">
          <div class='vertical-center horizontal-center py-3xl img-list'>
            <NuxtImg class='w-100 mt-l' v-for='item of laserModules.imgListSrc' :key='item' :src="item"
              alt="snapmaker laser modules" loading='lazy' />
          </div>
        </div>
      </div>
      <div class='first-title text-center' v-html='laserModules.quickCase.firstTitle'></div>
      <TextVideo :screenId="'quickCase'" :dataSrc="laserModules.quickCase" :viewerOptions="{ useViewer: false }"
        :useAos='false'></TextVideo>
      <CaseDisplay :dataSrc='laserModules.caseDisplay'></CaseDisplay>
      <LaserMaterial :dataSrc="laserModules.laserMaterial"></LaserMaterial>
      <SafeSound id='safe-sound' :dataSrc='laserModules.safeSound'></SafeSound>
      <div class="snmk-container">
        <div
          class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <h1 class='first-title text-center' v-html='laserModules.easeToFocus'></h1>
        </div>
      </div>
      <TextVideo :screenId="'set-Matrial-thickness'" :data-src="laserModules.setMaterialThickness"
        :viewerOptions="{ useViewer: false }" :useAos='false'></TextVideo>
      <TextVideo :screenId="'foucus-laser-kicstand'" :data-src="laserModules.foucusLaserKickstand" :isVideoLeft='true'
        :viewerOptions="{ useViewer: false }" :useAos='false'></TextVideo>
      <Compatible :screenId="'compatible'" :dataSrc='laserModules.compatible'></Compatible>
      <Specs :dataSrc='laserModules.specs'></Specs>
      <Store :dataSrc='laserModules.store' @openShopModal='showModal'></Store>
      <Notes :screenId="'screen39'" :dataSrc='laserModules.screen39'> </Notes>
    </template>
  </div>
</template>

<script setup lang='ts'>
import SubNavBar from '@@/components/SubNavBar.vue'
import ShopModal from '@@/components/ShopModal.vue'
import Loading from '@@/components/Loading.vue'
import head from '@@/resources/data/head'
import AOS from 'aos'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import { ISubNavMenu } from '~/components/SubNavBar/type'
import configuration from '~/resources/data/configuration'
import FirstScreen from './sections/FirstScreen.vue'
import FirstScreenMob from './sections/FirstScreenMob.vue'
import ModuleData from './sections/ModuleData.vue'
import Comparison from '@/pages/laser-modules/sections/Comparison.vue'
import CaseResultDisplay from './sections/CaseResultDisplay.vue'
import SmartAirAssist from './sections/SmartAirAssist.vue'
import TextVideo from '@@/components/TextVideo.vue'
import CaseDisplay from '@/pages/laser-modules/sections/CaseDisplay.vue'
import LaserMaterial from './sections/LaserMaterial.vue'
import SafeSound from './sections/SafeSound.vue'
import Compatible from './sections/Compatible.vue'
import Specs from './sections/Specs.vue'
import Store from '@/pages/laser-modules/sections/Store.vue'
import Notes from '@@/components/Notes.vue'

useHead(head.laserModules)
const i18n = useI18n()
const laserModules = computed<any>(() => i18n.tm('laserModules'))
const { isMobile } = storeToRefs(useGlobalStore())
const headerCompHeight = configuration.headerCompHeight
const subNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').laserModules)

const isShowModal = ref(false)
const shopModalData = ref<any[]>([])
const showModal = (data = [
  {
    text: `US Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/us.png`,
    link: `https://us.snapmaker.com/products/snapmaker-20w-and-40w-laser-module-with-air-assist?utm_source=officialwebsite&utm_medium=subdomain&utm_campaign=20w_40w_laser_module&utm_content=landing-page-buy-now&SkipCozyRedirect=yes`
  },
  {
    text: `EU Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/eu.png`,
    link: `https://eu.snapmaker.com/products/snapmaker-20w-and-40w-laser-module-with-air-assist?utm_source=officialwebsite&utm_medium=subdomain&utm_campaign=20w_40w_laser_module&utm_content=landing-page-buy-now&SkipCozyRedirect=yes`
  },
  {
    text: `Global Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/others.png`,
    link: `https://shop.snapmaker.com/products/snapmaker-20w-and-40w-laser-module-with-air-assist?utm_source=officialwebsite&utm_medium=subdomain&utm_campaign=20w_40w_laser_module&utm_content=landing-page-buy-now&SkipCozyRedirect=yes`
  }]) => {
  isShowModal.value = true
  shopModalData.value = data
}
const onCancelModal = () => {
  isShowModal.value = false
  shopModalData.value = []
}

const isLoading = ref(true)

const secondaryLoaded = ref(false)
const thridLoaded = ref(false)
onMounted(() => {
  window.onbeforeunload = function () {
    document.documentElement.scrollTop = 0 // ie下
    document.body.scrollTop = 0 // 非ie
  }

  setTimeout(() => (secondaryLoaded.value = true), 2000)
  setTimeout(() => { console.log(secondaryLoaded.value); (thridLoaded.value = true) }, 4000)
})
onBeforeUnmount(() => {
  document.documentElement.classList.remove('body-no-scroll')
})
</script>

<style scoped lang='scss'>
@import './theme.scss';

.bg-black {
  background-color: #000;

  &::v-deep .text-video {
    background-color: #000;
  }
}

.first-title {
  margin-block: 125px;

  @include mobile {
    margin-block: 40px;
  }
}

.standard-block {
  background-color: #0e0d13;
}

.standard-title {
  margin: 0;
  padding-block: 114px 0;
  text-align: center;

  @include mobile {
    padding-block: calc(53px + 48px) 0px;
  }
}

#safe-sound {

  // background-color: $black;
  ::v-deep .section-wrapper {
    // background-color: $black;
  }
}

@include mobile {
  .bg-black::v-deep .text-video {
    text-align: center;

  }

}

.img-list {
  display: flex;

  img {
    width: 33.3333%;
  }

  @include mobile {
    img {
      width: 100%;
    }

    flex-direction: column;

  }
}
</style>
