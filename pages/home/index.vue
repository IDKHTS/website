<template>
  <div :device="device" class="home-wrapper">
    <ShopModal v-show="isShowModal" :onCancel="onCancelModal" :dataSrc='shopModalData' />
    <PreHeat v-if="isLocaleEN" :device="device" :preHeat="preHeat"></PreHeat>
    <template v-else>
      <FirstScreen :device="device"></FirstScreen>
    </template>
    <PreHeat v-if="isLocaleEN" :device="device" :preHeat="preHeatRay" class="mt-xs ray" @showShopModal='showModal'>
    </PreHeat>

    <ProductDisplay class="products-show" :productsDisplay="productsDisplay" @openShopModal='showModal'></ProductDisplay>

    <template v-if="!isLocaleEN">
      <!-- TODO: fix or refactor <Carousel3D> -->
      <!-- <div class="software snmk-container">
        <div
          class="solgan-download-wrapper snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="slogan">
            <div class="title-4">
              <span>{{ software.solgan[activeSoftwareSolganTypeIndex][0] }}</span>
              <span class="font-blue">{{ softwareSolgan }}</span>
              <span>{{ software.solgan[activeSoftwareSolganTypeIndex][1] }}</span>
            </div>
            <div class="big-title-2 mt-s bold">{{ software.title }}</div>
          </div>
          <router-link :id="software.downloadBtn.traceID" class="snmk-primary-btn mt-l text-center"
            :to="software.downloadBtn.route">{{ software.downloadBtn.text }}</router-link>
        </div>
        <div
          class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <Carousel3D :carousels="software.displayCarousel" :route="software.downloadBtn.route"
            :link="software.downloadBtn.link" :device="device" @onActiveIndexChange="onCarousel3DChangeIndex">
          </Carousel3D>
        </div>
      </div> -->

      <div v-if="isLocaleEN" class="top-banner"
        :style="{ 'background-image': `url('${topImgSrc(communityBanner)}')` }">
        <div class='text-container'
          :class="{ 'vertical-center-community': !communityBanner.isCenter, 'center-style': communityBanner.isCenter }">
          <div class="snmk-container">
            <div :class="{
              'snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 text-center': communityBanner.isCenter,
              'snmk-col-5 snmk-col-l-5 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4': !communityBanner.isCenter,
              'text-center': isMobile
            }">
              <div v-if='communityBanner.aheadDesc' class="ahead-desc" v-html='communityBanner.aheadDesc'></div>
              <div class="font-bw-1 big-title-2 bold-700" v-html='communityBanner.title' style='color: black'></div>
              <div v-if='communityBanner.desc && !isMobile' class="font-bw-1 font-1 mt-m" :class="`s-banner-desc-0`">
                {{ communityBanner.desc }}</div>
              <Navigate target="_blank" :id="communityBanner.btn.traceID" class="snmk-primary-btn mt-l"
                :class="{ 'pi-64': !communityBanner.isCenter }" :route="communityBanner.btn.route"
                :aLink="communityBanner.btn.link">
                {{ communityBanner.btn.text }}
              </Navigate>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isLocaleEN" class="community-relevant" :style="{
        'background-image': `url('${isMobile ? community.mobImgSrc : community.imgSrc
          }')`,
      }">
        <div class="text-wrapper">
          <div class="big-title-2 font-bw-1 bold-700">{{ community.title }}</div>
          <div v-if='community.desc' class="font-1 font-bw-1 mt-l">{{ community.desc }}</div>
          <div class="mt-l">
            <Navigate :id="community.btn.traceID" class="snmk-primary-btn text-center" :route="community.btn.route"
              :aLink="community.btn.link">
              {{ community.btn.text }}
            </Navigate>
          </div>
        </div>
      </div>

      <div class="support-center">
        <div class="snmk-container">
          <div class="snmk-col-7 snmk-col-l-7 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 text-center">
            <img :src="supportCenter.imgSrc" alt />
          </div>
          <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 vertical-center">
            <div class="mob-text-center">
              <div class="big-title-2 bold mt-2xl">{{ supportCenter.title }}</div>
              <div class="font-1 mt-l mb-xl">{{ supportCenter.description }}</div>
              <Navigate target="_blank" :id="supportCenter.btn.traceID" class="snmk-primary-btn text-center"
                :route="supportCenter.btn.route" :aLink="supportCenter.btn.link">{{ supportCenter.btn.text }}</Navigate>
            </div>
          </div>
        </div>
      </div>

      <div class="cta">
        <div class="snmk-container">
          <div class="snmk-col-12 snmk-col-l-12 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 pt-3xl snmk-col-m-offset-1">
            <div class="title-1 bold-700">{{ CTA.title }}</div>
            <div class="mt-xl cta-links">
              <template v-for="btn of CTA.btns" :key="btn.text">
                <Navigate v-if="btn.route || btn.link" class="cta-link mt-xs" target="_blank" :class="{
                  'snmk-primary-btn':
                    btn.text === 'Buy Now' || btn.text === '立即购买',
                  'snmk-btn': btn.text !== 'Buy Now' && btn.text !== '立即购买',
                }" :route="btn.route" :id="btn.traceID" :aLink="btn.link" >{{ btn.text }}</Navigate>
                <Navigate v-else class="cta-link mt-xs" target="_blank" :class="{
                  'snmk-primary-btn':
                    btn.text === 'Buy Now' || btn.text === '立即购买',
                  'snmk-btn': btn.text !== 'Buy Now' && btn.text !== '立即购买',
                }" :id="btn.traceID" @click="showModal">{{ btn.text }}</Navigate>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="products-img" :style="{ 'background-image': 'url(' + CTA.imgSrc + ')' }"></div>
    </template>
    <template v-else>
      <UserCase :device="device"></UserCase>
      <AboutUs :device="device"></AboutUs>
      <Judgement :device="device"></Judgement>
    </template>
  </div>
</template>
  
<script lang='ts' setup>
import FirstScreen from '@@/pages/home/FirstScreen.vue'
import PreHeat from '@@/components/PreHeat.vue'
import Navigate from '@@/components/Navigate.vue'
// import Carousel3D from './Carousel3D.vue'
import ProductDisplay from './ProductDisplay.vue'
import head from '@@/resources/data/head'
import ShopModal from '@@/components/ShopModal.vue'
import UserCase from '@@/pages/home/UserCase.vue'
import Judgement from '@@/pages/home/Judgement.vue'
import AboutUs from '@@/pages/home/AboutUs.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const { isMobile, device } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const isLocaleEN = computed(() => i18n.locale.value === 'en-US')
useHead(isLocaleEN ? head.home : head.CNHome)
const activeSoftwareSolganTypeIndex = ref(0)

const homeData = computed(()=> i18n.tm('homeData'))
const banner = computed(() => homeData.value.banner)
const preHeat = computed(() => isMobile.value ? homeData.value.mobPreHeat : homeData.value.preHeat || {})
const preHeatRay = computed(() => (isMobile.value ? homeData.value.mobPreHeatRay : homeData.value.preHeatRay) || {})
const productsDisplay = computed(() => (isMobile.value ? homeData.value.mobProductsDisplay : homeData.value.productsDisplay))
const software = computed(() => homeData.value.software)
const softwareSolgan = computed(() => software.value.solganType[activeSoftwareSolganTypeIndex.value])
const communityBanner = computed(() => {
  if (!isLocaleEN.value) return
  return i18n.tm('communityData').topBanners[0]
})
const supportCenter = computed(() => homeData.value.supportCenter)
const community = computed(() => homeData.value.community)
const CTA = computed(() => homeData.value.CTA)
const idea = computed(() => homeData.value.idea)

// shopModal
const isShowModal = ref(false)
const shopModalData = ref({})
const onCancelModal = () => {
  isShowModal.value = false
  shopModalData.value = []
}
const showModal = (data = []) => {
  isShowModal.value = true
  shopModalData.value = data
}


const onCarousel3DChangeIndex =  (index) => {
  activeSoftwareSolganTypeIndex.value = index
}
const onSlideChange =  (index) => {
  activeSoftwareSolganTypeIndex.value = index
}
const topImgSrc =  (banner:any) => {
  return isMobile.value ? banner.topMobileImg : banner.topImg
}
</script>
  
<style lang="scss" scoped>
.bold-700 {
  font-weight: 700;
}

a {
  color: $black_white_2;

  &:hover {
    color: none;
  }
}

.laser-modules {

  &::v-deep .big-title-2 {
    color: var(--unnamed, #1F1F1F);
  }

  &::v-deep .title-3 {
    color: var(--unnamed, #5C5C5C);
  }
}

.ray {
  height: calc(100vh - #{$header-height});
  min-height: calc(100vh - #{$header-height});

  &::v-deep .big-title-2 {
    color: #1F1F1F;
  }

  &::v-deep .preheat-desc {
    color: #1F1F1F;
  }

  &::v-deep .preheat-player-btn {
    border-color: #242424;
    color: #242424;

    &:hover {
      border-color: #242424;
      color: #242424;
    }
  }
}

.j1 {
  &::v-deep .pre-heat-btn {
    background-color: #f15a24;
    border: 1px solid #f15a24;

    &:hover {
      background-color: #d35a2f;
      border: 1px solid #d35a2f;
    }
  }
}

.egg-hunt {
  &::v-deep .pre-heat-btn {
    // background-color: #f15a24;
    background-color: #FF7100;
    border: 1px solid #FF7100;

    &:hover {
      background-color: #d35a2f;
      border: 1px solid #d35a2f;
    }
  }
}

.home-wrapper {
  background-color: $black_white_8;
  color: $black_white_2;

  &::v-deep .modal-wrapper .modal-container {
    max-width: 560px;
    width: 90%;
  }

  &::v-deep .modal-wrapper .mask {
    background: rgba(0, 0, 0, 0.7);
  }
}

.software {
  display: flex;
  // justify-content: center;

  .big-title-2 {
    color: $black_white_1;
  }
}

.solgan-download-wrapper {
  // width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.63vw;
  margin-top: 120px;

  a {
    color: white;
  }
}


.user-case {
  padding: 120px 0;
  background: #FAEDD7;
  color: $black_white_2;

  &::v-deep .title-1 {
    color: $black;
  }

  &::v-deep .carousel-title {
    color: $black;
  }
}

.top-banner {
  position: relative;
  display: block;
  height: 496px;
  background-size: 1920px 496px;
  background-position: center;

  @media (min-width: 1920px) {
    height: 661px;
    background-size: 2560px 661px;
  }

  @media (min-width: 2560px) {
    height: 38.7vw;
    background-size: 100vw 38.7vw;
    background-position: center;
  }

  .text-container {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
  }

  @include mobile {
    background-position: center center;
    background-size: 100vw 133.33vw;
    height: 133.33vw;

    .text-container {
      text-align: center;
      top: 48px;
      transform: unset;

    }

    .title-1 {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
    }

    .ahead-desc {
      margin-top: 32px;
      font-size: 12px;
      line-height: 16px;
      font-style: normal;
      font-weight: 600;
      color: #161616;
    }

    .font-1 {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      // color: $black-white-2;
    }

    .snmk-primary-btn {
      margin-top: 24px;
      padding-inline: 64px;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
  }
}

.support-center {
  background-color: #1c1b1b;
  color: white;

  .snmk-primary-btn {
    margin-bottom: 40px;
  }

  img {
    width: 100%;
  }

  &::v-deep a {
    color: white;
  }
}

.community-relevant {
  position: relative;
  height: 544px;
  background-size: 1920px 544px;
  background-position: center center;

  .text-wrapper {
    position: absolute;
    // top: 50%;
    height: 100%;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    // max-width: 780px;
    text-align: center;
    padding: 16px;
    margin-top: 137px;

    a {
      color: white;
    }

  }

  .christmas {
    background-color: #0C63E2;

    &:hover {
      background-color: #0C63E2;
    }
  }

  .snmk-primary-btn {
    background-color: #0C63E2;

    &:hover {
      background-color: #0C63E2;
    }
  }
}

.official-cooperation {
  padding: 6.25vw 0;

  .hover-connect {
    cursor: pointer;

    &::v-deep a {
      color: $black_white_1;
    }

    &:hover~.connect-target {
      &::v-deep a {
        color: $blue;
      }

      &::after {
        background-color: $blue;
      }
    }
  }

  .title-3 {
    color: $black_white_1;
  }

  .snmk-link {
    display: inline;

    &::v-deep a {
      color: $black_white_1;
    }

    &:hover {
      &::v-deep a {
        color: $blue;
      }
    }
  }
}

.partner-wrapper {
  display: flex;
}

.partner {
  width: 25%;
  margin-right: 24px;

  img {
    height: 10.585606060606061vw;
    border-radius: 5px;
  }

  &:last-child {
    margin-right: 0;
  }
}

.cta {
  color: $black_white_1;
  padding: 0 20.812vw;
  text-align: center;
  background: white;

  .cta-link {
    margin-right: 0.5em;

    &:last-child {
      margin-right: 0;
    }
  }

  .snmk-primary-btn::v-deep a {
    color: white;
  }

  .snmk-btn {
    &:hover {
      &::v-deep a {
        color: #0a4fb5;
      }
    }

    &::v-deep a {
      color: $blue;
    }
  }
}

.en-cta-link {
  .cta-link:first-child {
    background: linear-gradient(90deg, #ffcb13 0%, #ffa313 100%);
  }
}

.products-img {
  width: 100%;
  height: 35.9375vw;
  background-size: 100% 100%;
}

@media (min-width: $breakPoint_m) and (max-width: $breakPoint_l) {
  .software {
    img {
      height: 100%;
      width: auto;
    }
  }

  .solgan-download-wrapper {
    margin-top: 80px;
  }

  .cta {
    padding: 20px 0 0;
  }
}

@media (max-width: $breakPoint_m) {
  .j1 {
    &::v-deep .text-img-layer .snmk-container {
      top: 16vw;
    }
  }

  .community-relevant {
    position: relative;
    height: 128vw;
    background-size: 100vw 128vw;

    .text-wrapper {
      justify-content: center;
      top: 0;
      margin-top: 0;

      .big-title-2 {
        font-size: 28px;
        line-height: 32px;
      }
    }
  }

  .solgan-download-wrapper {
    flex-direction: column;
    // align-items: flex-start;
    text-align: center;
    margin-top: 40px;
  }

  .support-center {
    padding-top: 40px;

    .font-1 {
      margin: 15px 0 26px;
    }

    .snmk-container {
      flex-direction: column-reverse;
    }

    .snmk-primary-btn {
      margin-bottom: 0;
    }

    img {
      margin-top: -16px;
      width: 100%;
    }

    .mob-text-center {
      text-align: center;
    }
  }

  .partner-wrapper {
    flex-direction: column;
  }

  .partner {
    margin-top: 10vw;
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }

  .cta {
    padding: 0 0;

    .title-1 {
      letter-spacing: 0;
    }
  }

  .cta-links {
    display: flex;
    justify-content: center;
  }

  .products-img {
    width: 100%;
    height: 450px;
    background-size: 1250px 450px;
    background-position: center;
  }

  .user-case {
    padding: 60px 0;
  }
}


//  ================

.idea {
  .snmk-container {
    width: 100%s;
  }

  &::v-deep .mask {
    border-radius: 12px;
  }

  &::v-deep section.top-banner .preview {
    .overlay {
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }

    video,
    img {
      border-radius: 12px;
      width: 100%;
    }

  }

  .snmk-btn {
    font-size: 18px;
    background-color: transparent;
    border-color: white;
    color: white;

    &:hover {
      border-color: $black_white_5;
      color: $black_white_5;
    }
  }

  .idea-content {
    margin: 0 15vw;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
  