<template>
  <div style='background-color: #CBCAD0;'>
    <BgMedia v-if="!isMobile" :screenId="'store'" :screen="dataSrc" :isCustomText="true" :isImg="true">
      <div class="snmk-container pt-2xl text-center pos-relative c-white">
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2">
          <div class="store-title bold-700 mb-xs" v-html="dataSrc.title"></div>
          <!--  data-aos='fade-up' -->
        </div>
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 px-2xl text-center">

          <div class="snmk-primary-btn title-4 bold-700 mt-l store-btn" @click='openShopModal'>
            <!--  data-aos='fade-up' data-aos-delay='300' -->
              {{dataSrc.btn.text}}
            </div>
        </div>
      </div>
      <div class='snmk-container' v-if='!isMobile'>
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 tags-wrapper">
          <div class='cta-tag' v-for='tag in dataSrc.tags' :key='tag' v-html='tag'></div>
        </div>
      </div>
    </BgMedia>
    <div v-else  class='section-wrapper'>
      <div style='flex: 0 0 auto; z-index: 2;'>
        <div class="snmk-container pt-3xl">
          <div class="snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2" data-aos="fade-up">
            <div class="store-title bold-700 mb-xs" v-html="dataSrc.title"></div>
          </div>
          <div class="snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 px-2xl text-center" data-aos="fade-up">
            <div class="snmk-primary-btn title-4 bold-700 mt-l store-btn" @click='openShopModal'>
              {{dataSrc.btn.text}}
            </div>
            <!-- <Navigate :aLink="dataSrc.btn.link" :target="'_blank'" :route="dataSrc.btn.route" class="snmk-primary-btn title-4 bold-700 mt-l store-btn">
              {{dataSrc.btn.text}}
            </Navigate> -->
          </div>
        </div>
      </div>
      <Swiper
        style='flex: 1 1 auto;'
        @changeSlide="changeSlide"
        :swiperId="'store-swiper'"
        class="w-100 h-100 bg-swiper"
        @loaded='swiperLoaded'
      >
        <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index">
          <MediaViewAdapter
            :options="{
              imgSrc: isMobile ? item.imgSrcMob :item.imgSrc ,
              alt: item.alt,
              mobAlt: item.mobAlt,
              lazyLoad: true
            }"
          />
        </div>
      </Swiper>
      <CheckoutNavMob @selectIndex="selectIndex"
        :currDisplayIdx="currDisplayIdx" :options="dataSrc"
        class="mt-3xl display-flex"
        ></CheckoutNavMob>
    </div>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import CheckoutNavMob from '@@/components/CheckoutNavMob.vue'
import Swiper from '@@/components/swiper/Swiper.vue'
import BgMedia from '@@/components/BgMedia.vue'

import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: () => ({}) })
const { isMobile } = storeToRefs(useGlobalStore())
const emit = defineEmits(['openShopModal'])

const currDisplayIdx = ref(0)
const swiper = ref<any>({})
const openShopModal = ()=>emit('openShopModal')
const changeSlide = (index: number) => currDisplayIdx.value = index
const swiperLoaded = (_swiper: any) => swiper.value = _swiper
const selectIndex = (index: number) => swiper.value.slideTo(index)
</script>


<style scoped lang='scss'>
@import '../theme.scss';
.store-title {
  color: #141414;

  /* Display/1920/Gilroy Bold-60 */
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px; /* 113.333% */
  letter-spacing: -0.24px;

  @media (max-width: 1568px) and (min-width: 768px) {
    font-size: 44px;
    line-height: 52px; /* 113.333% */
  }

  @include mobile {
    text-align: center;
    /* Display/375/Gilroy Boid-36 */
    font-size: 36px;
    line-height: 44px; /* 122.222% */
    letter-spacing: -0.24px;
  }
}
.store-btn {
  width: 239px;
  border-radius: 55px;
  background: var(--unnamed, linear-gradient(90deg, #00FFD1 0%, #0704F1 100%));
  padding-block: 18px;

  color: #FFF;
  text-align: center;

  &::v-deep a {
    /* Heading/1920/Gilroy Bold-18 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;
  }
}


.section-wrapper {
  display: flex;
  flex-direction: column;
  // align-items: center;
  position: relative;
  justify-content: space-between;
  height: 100vh;



  .section-img-box {
    display: flex;
    background-position: center center;
  }

  &::v-deep .swiper-container {
    height: 100%;
    background-color: transparent;
  }
  &::v-deep .checkout-nav-text {
    color: white;
  }
  &::v-deep .checkout-nav-active-bar {
    background-color: #fff;
  }
}
.bg-swiper {
  position: absolute;
  top: 0;
  left: 0;

  &:deep(.swiper) {
    height: 100%;
  }
}

.tags-wrapper {
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 66px;
}
.cta-tag {
  border-radius: 4px;
  border: 1px solid #242424;
  color: #242424;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.24px;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;

  @media (max-width: 1568px) and (min-width: 768px) {
    font-size: 14px;
    line-height: 16px; /* 113.333% */
  }

}
</style>
