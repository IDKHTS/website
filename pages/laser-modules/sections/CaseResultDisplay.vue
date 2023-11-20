<template>
  <div class='bg-black'>
    <h1 class='case-result-display-title' v-html='dataSrc.title'  ref="caseResultDisplay"></h1>
    <div class="snmk-container pos-relative">
      <div class="snmk-col-1 snmk-col-l-1 snmk-col-m-1 left-icon-col" v-if='!isMobile'>
        <svg @click='swiper.slidePrev()' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='left-icon' :aria-disabled='swiper.isBeginning'>
          <circle cx="20" cy="20" r="19.5" stroke="white"/>
          <path d="M23.0522 27.9995L15.1047 20.052L23.0522 12.1045" stroke="white" stroke-width="0.977346" stroke-miterlimit="10"/>
        </svg>
      </div>
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4">
        <SwiperActiveProgress :options="swiperOptions" class='w-100' :id="'case-result-display-swiper'" @onReady="swiperReady">
          <div class="swiper-slide" v-for="(item) of isMobile ? dataSrc.mobResults : dataSrc.results" :key="item">
            <NuxtImg :src="item" :alt="item"  loading='lazy'/>
          </div>
        </SwiperActiveProgress>
      </div>
      <div class="snmk-col-1 snmk-col-l-1 snmk-col-m-1 right-icon-col" v-if='!isMobile'>
        <svg @click='swiper.slideNext()'  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='right-icon'  :aria-disabled='swiper.isEnd'>
          <circle cx="20" cy="20" r="19.5" stroke="white"/>
          <path d="M23.0522 27.9995L15.1047 20.052L23.0522 12.1045" stroke="white" stroke-width="0.977346" stroke-miterlimit="10"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'


import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

const swiper = ref<any>({})
const activeIndex = ref(1)
const swiperOptions = ref({
  timeAry: new Array(isMobile.value ? props.dataSrc.mobResults.length : props.dataSrc.results.length).fill(5 * 1000),
  slidesPerView: 1,
  centeredSlides: true,
  customStart: true,
  initialSlide: activeIndex.value,
  lazy: {
    loadPrevNext: true
  }
})

const swiperReady = (_swiper: any) => swiper.value = _swiper
const caseResultDisplay = ref<HTMLElement | null>()

useIntersectionObserver(caseResultDisplay, () => {
  swiper.value.slideTo(0)
  activeIndex.value = 0
})

</script>

<style scoped lang='scss'>
@import '../theme.scss';
.case-result-display-title {
  color: #F3F3F3;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 120% */
  letter-spacing: -0.24px;

  margin-top: 127px;
  margin-bottom: 40px;
  @include mobile {
    margin-top: 53px;
    margin-bottom: 48px;
  }
}
#case-result-display-swiper{
  border-radius: 8px;
}
.swiper-slide {
  line-height: 0;
}
.snmk-container {
  margin-bottom: 100px;
  @include mobile {
    margin-bottom: 84px;
  }
  &::v-deep .swiper-container, &::v-deep .swiper-wrapper {
    position: static;
  }
  &::v-deep .swiper-pagination  {
    margin-top: 48px;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    left: 0;
    // bottom: -48px;
    @include mobile {
      // bottom: -36px;
      margin-top: 36px;
    }
    // right: 0;
    // text-align: right;
    // padding-right: 22px;
  }
  &::v-deep .pagination-bullet  {
    bottom: -48px;
    background-color: #D6D6D6;
    // right: 0;
    // text-align: right;
    // padding-right: 22px;
  }
  &::v-deep .pagination-bullet::before {
    background: #0C63E2;
  }
  &::v-deep .pagination-bullet-active::before {
    background: #0C63E2;
  }
}
.left-icon-col, .right-icon-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
}
.left-icon, .right-icon {
  margin: 0;
  cursor: pointer;
}
.left-icon-col {
  align-items: flex-end;
}


</style>
