<template>
  <div class='artisan'>
    <SubNavBar :isFixed="true" :isAlwaysShow="false"  :dataSource="subNavBar" @onBuyModal='showModal'></SubNavBar>
    <Banner @onOpenShopModal='showModal'></Banner>
    <SellPoints></SellPoints>
    <Judgement></Judgement>
    <CaseResultCarousel></CaseResultCarousel>
    <div v-if="isMobile" style="background-color: black;padding-top: 48px">
      <div class="snmk-container pt-3xl text-center pos-relative">
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2">
          <div class="big-title-2 bold-700 mb-m page-title-color" v-html="artisanData.linear.title"></div>
        </div>
      </div>
    </div>
    <BgMedia :screenId="'linear'" :screen="artisanData.linear" :isCustomText="true" :isImg="false">
      <div v-if="!isMobile" class="snmk-container pt-3xl text-center pos-relative">
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2">
          <div class="big-title-2 bold-700 mb-m page-title-color" v-html="artisanData.linear.title"></div>
        </div>
      </div>
    </BgMedia>
    <LinearRails></LinearRails>
    <CasesTab :screenId="'casesTab'" :dataSrc='artisanData.casesTab'></CasesTab>
    <BgMedia :screenId="'machine-size'" :screen="artisanData.machineSize" :isCustomText="true" :isImg="false">
      <div class="snmk-container pt-3xl text-center pos-relative">
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2">
          <div class="big-title-2 bold-700 mb-m page-title-color" v-html="artisanData.machineSize.title"></div>
        </div>
      </div>
    </BgMedia>
    <Screen10 :screenId="'Screen10'" :dataSrc='artisanData.screen10'></Screen10>
    <Screen11 :screenId="'Screen11'" style='z-index: 11;' :dataSrc='artisanData.screen11'></Screen11>
    <Screen12 :screenId="'Screen12'" :dataSrc='artisanData.screen12'></Screen12>
    <HowMade :screenId="'how-artisan-made'" :dataSrc='artisanData.howMade'></HowMade>
    <Screen :screenId="'Screen13-15'" :dataSrc='artisanData.screen15'></Screen>
    <SoftwareLuban :moreUseful="artisanData.softwareLuan"></SoftwareLuban>
    <BgMedia id="3dp" :screenId="'Screen18'" :screen="artisanData.screen18"></BgMedia>
    <TextTabVideo :swiperId='"remove-support"' :dataSrc='artisanData.removeSupport'></TextTabVideo>
    <TextTabVideo :swiperId='"multi-color-print"' :dataSrc='artisanData.multiColorPrint' :isVideoLeft='!isMobile'></TextTabVideo>
    <TextAsset :id="'quickSwapHotEnd'" :dataSrc="artisanData.quickSwapHotEnd" :videoManuallyPlay='false'></TextAsset>
    <DualExtrusionFunc id='dual-extrusion-func' :dataSrc='artisanData.dualExtrusionFunc'></DualExtrusionFunc>
    <template v-if="!isMobile">
      <TextAsset :id="'manualCalibration'" :dataSrc="artisanData.manualCalibration" :videoManuallyPlay='false'></TextAsset>
      <TextAsset :id="'vibrationCompensation'" :isAssetLeft="true" :dataSrc="artisanData.vibrationCompensation" :videoManuallyPlay='false'></TextAsset>
    </template>
    <template v-else>
      <TextVideo :screenId="'manualCalibration'" :dataSrc="artisanData.manualCalibration "></TextVideo>
      <TextVideo :screenId="'vibrationCompensation'" :dataSrc="artisanData.vibrationCompensation"></TextVideo>
    </template>
    <Multi3DPFunc :dataSrc='artisanData.multi3DPFunc'></Multi3DPFunc>
    <BgMedia :screenId="'screen26'" :screen="artisanData.screen26"></BgMedia> 
    <Screen28 :screenId="'screen28'" :dataSrc='artisanData.screen28'></Screen28>
    <Screen29 :screenId="'screen29'" :dataSrc='artisanData.screen29'></Screen29>
    <MaterialDisplay :screenId="'screen30'" :dataSrc="artisanData.screen30"></MaterialDisplay>
    <BgMedia :screenId="'screen31'" :screen="artisanData.screen31"></BgMedia>
    <TextVideo :screenId="'screen33'" :isVideoLeft="true" :dataSrc="artisanData.screen33"></TextVideo>
    <MaterialDisplay :screenId="'screen34'" :dataSrc="artisanData.screen34"></MaterialDisplay>
    <Screen36 :screenId="'screen36'" :dataSrc='artisanData.screen36'></Screen36>
    <CompatibleModules :dataSrc='artisanData.compatibleModules'></CompatibleModules>
    <FooterSellPoints @openShopModal='showModal' :dataSrc='artisanData.footSellpoints'></FooterSellPoints>
    <ComparisonParams id='comparison-params' :dataSrc='artisanData.comparisonParams'></ComparisonParams>
    <Screen39 :screenId="'screen39'" :dataSrc='artisanData.screen39'></Screen39>
    <ShopModal v-show="isShowModal" :onCancel="onCancelModal" :dataSrc='shopModalData'/>
  </div>
</template>

<script setup lang='ts'>
import SubNavBar from '@@/components/SubNavBar.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import head from '@@/resources/data/head'
import Banner from './sections/Banner.vue'
import SellPoints from './sections/SellPoints.vue'
import Judgement from './sections/Judgement.vue'
import CaseResultCarousel from './sections/CaseResultCarousel.vue'
import BgMedia from '@@/components/BgMedia.vue'
import LinearRails from './sections/LinearRails.vue'
import CasesTab from './sections/CasesTab.vue'
import Screen10 from './sections/Screen10.vue'
import Screen11 from './sections/Screen11.vue'
import Screen12 from './sections/Screen12.vue'
import HowMade from './sections/HowMade.vue'
import Screen from './sections/Screen.vue'
import SoftwareLuban from './sections/SoftwareLuban.vue'
import TextTabVideo from './components/TextTabVideo.vue'
import TextAsset from './components/TextAsset.vue'
import DualExtrusionFunc from './sections/DualExtrusionFunc.vue'
import TextVideo from './components/TextVideo.vue'
import Multi3DPFunc from './sections/Multi3DPFunc.vue'
import Screen28 from './sections/Screen28.vue'
import Screen29 from './sections/Screen29.vue'
import MaterialDisplay from './components/MaterialDisplay.vue'
import Screen36 from './sections/Screen36.vue'
import CompatibleModules from './sections/CompatibleModules.vue'
import FooterSellPoints from './sections/FooterSellPoints.vue'
import ComparisonParams from './sections/ComparisonParams.vue'
import Screen39 from './sections/Screen39.vue'
import ShopModal from '@@/components/ShopModal.vue'

import AOS from 'aos'
import { ISubNavMenu } from '~/components/SubNavBar/type'
import configuration from '~/resources/data/configuration'
onMounted(() => {
  const ref = setInterval(() => {
    AOS.init({
      easing: 'ease',
      duration: 1200
    })
  }, 300)
  setTimeout(() => clearInterval(ref), 3000)
})

useHead(head.artisan)
const i18n = useI18n()
const artisanData = computed<any>(() => i18n.tm('artisanData'))
const { isMobile } = storeToRefs(useGlobalStore())
const headerCompHeight = configuration.headerCompHeight
const subNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').artisan)

const isShowModal = ref(false)
const shopModalData = ref<any[]>([])
const showModal = (data = [
  {
    text: `US Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/us.png`,
    link: `https://us.snapmaker.com/products/snapmaker-artisan-3-in-1-3d-printer?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-artisan-buy-now`
  },
  {
    text: `EU Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/eu.png`,
    link: `https://eu.snapmaker.com/products/snapmaker-artisan-3-in-1-3d-printer?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-artisan-buy-now`
  },
  {
    text: `Global Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/others.png`,
    link: ` https://shop.snapmaker.com/products/snapmaker-artisan-3-in-1-3d-printer?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-artisan-buy-now`
  }
]) => {
  isShowModal.value = true
  shopModalData.value = data
}
const onCancelModal = () => {
  isShowModal.value = false
  shopModalData.value = []
}
</script>

<style lang="scss" scoped>
@import './theme.scss';
.not-visiable {
  visibility: hidden;
}

.artisan-banner {
  padding-top: calc(7.08vw + #{$header-height});
  .snmk-primary-btn {
    min-width: 220px;
    padding-block: 18px;
    font-size: 18px;
  }
  .banner-name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    text-align: center;
    letter-spacing: -0.24px;

    color: #FFFFFF;
    @include mobile {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      text-align: center;
      letter-spacing: -0.24px;

      color: #FFFFFF;
    }
  }
  a:hover {
    color: white;
  }
}

#secondaryNavbar {
  top: $header-height;
  position: fixed;
  width: 100%;
  z-index: 99;
  transition: all .2s ease-in-out, height 1.2s ease-in-out;
  overflow: hidden;
}
#manualCalibration, #vibrationCompensation {
  background-color: black;
}

.test-setcion {
  position: relative;
  height: 100vh;
  background-color: red;
  border: 1px solid black;

  color: white;
  font-size: 40px;

  div {
    position: relative;
  }
}

@include mobile {
  .screen19 {
    align-items: flex-end;
  }

}
.loading-wrapper{
  $len: 34.35vh;
  @include mobile { $len: 30.53vh; }
  $bg-c: black;
  $bw: 5px;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  position: fixed;
  background-color: $bg-c;

  display: flex;
  align-items: center;
  justify-content: center;

  .loading-container {
    position: relative;
    width: $len;
    height: $len;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $bg-c;
    // border: 5px white solid;
    border-radius: 50%;
    border-bottom-color: transparent;
    border-right-color: transparent;
    background-image: linear-gradient(to right, rgba(144, 144, 144, 1),rgba(92, 92, 92, 0));

    animation-name: loading;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    background-origin: border-box;
  }
  .loading-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(#{$len} - #{$bw});
    height: calc(#{$len} - #{$bw});
    transform: translate(-50%, -50%);
    background-color: $bg-c;
    box-sizing: border-box;
    border-radius: 50%;

  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto 0;
    text-align: center;
    color: $black-white-5;
    font-size: 36px;
  }
  @include mobile {
    .loading {
      font-size: 22px;
    }
  }
}

@keyframes loading {
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
}


.extend {
  display: flex;
  align-items: center;

  .extend-title {
    color: #0F0F0F;
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 68px; /* 109.091% */

    margin-bottom: 28px;

    @include mobile {
      margin-top: 120px;
      font-size: 28px;
      line-height: 36px; /* 109.091% */
      margin-bottom: 14px;
    }
  }

  .extend-desc {
    color: #242424;
    font-family: Roboto;
    font-size: 21.6px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 133.333% */
    letter-spacing: -0.216px;

    @include mobile {
      font-size: 14px;
      line-height: 20px; /* 142.857% */
    }
  }

  .snmk-btn {
    margin-top: 110px;
    background-color: transparent;

    border: 2.68px solid #181818;

    color: #0F0F0F;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: -0.24px;

    @include mobile {
      margin-top: 32px;
      border: 1px solid #181818;
    }
  }
  @include mobile {
    text-align: center;
    align-items: flex-start;
  }
}

</style>

<style>

.artisan .comp-title-color {
  background: var(--A400, linear-gradient(99deg, #0094FF 14.94%, #0C63E2 77.45%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
sup { font-size: 12px; line-height: 0;}

@media (max-width: 768px) {
  .no-mobile {
    display: none;
  }
}

</style>