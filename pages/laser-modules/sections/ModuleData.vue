<template>
  <div class="bg-black-1 h-client pos-relative">
    <div class="snmk-container text-center pos-relative pt-2xl" :class="{'pb-3xl': !isMobile}">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1" >
        <div class="secondary-title bold-700 mb-m" v-html="dataSrc.title"></div>
      </div>
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1">
        <div class="title-4" v-html="dataSrc.desc" ></div>
      </div>
      <div ref="comparisons" class="snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 comparisons mt-2xl">
        <div v-for="comparison of laserModule.comparisons" :key="comparison.title" class="comparison mt-2xl" >
            <div class="title-3 bold-700">{{comparison.title}} <br v-if='isMobile'> <span class='comparison-tips'>{{comparison.tips}}</span></div>
            <div v-for="(pair, index) of comparison.pairs" :key="index" class="comparison-pairs mt-s">
              <div class="comparison-pair">
                <div class='vertical-center'>
                  <div class="font-3 mr-xs comparison-tag" >{{pair.tag}}</div>
                  <div class="comparison-bar" :class="{'bar-animation': isViewed}" :style="{width: isViewed ? calcLen(pair.len) : 0}"></div>
                </div>
                <div class="font-2 ml-s comparison-text">{{pair.text}}</div>
              </div>
            </div>
        </div>
        <div v-if="!isMobile" class="mt-xl display-flex" >
          <div class="checkout-nav-bar-wrapper">
            <div v-for="(item, index) of dataSrc.modules" :key="item.name" @click="selectIndex(index)"
            class="checkout-nav-bar"
            :class="{'checkout-nav-active-bar': index === currDisplayIdx}"
            >
            </div>
          </div>
          <div class="ml-l">
            <div v-for="(item, index) of dataSrc.modules" :key="item.name" @click="selectIndex(index)"
            class="mt-m checkout-nav title-4"
            :class="{'checkout-nav-active bold-700': index === currDisplayIdx}"
            >
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div  v-if='!isMobile' class="snmk-col-6 snmk-col-l-6 snmk-col-m-5">
        <NuxtImg :src="laserModule.imgSrc" alt="" loading='lazy' />
      </div>
    </div>
    <Swiper v-if="isMobile"
      @changeSlide="changeSlide"
      :swiperId="'module-data-swiper'"
      class="section-img-box w-100 h-100"
      @loaded='mapSwiper'
    >
      <div class="swiper-slide"  v-for="(item, index) in dataSrc.modules" :key="index">
        <MediaViewAdapter
          :options="{
            imgSrc: item.bgMobImgSrc,
            isAutoHeigh: true,
            alt: laserModule.alt,
            mobAlt: item.mobAlt
          }"
        />
      </div>
    </Swiper>
    <div class='wrapper-cover'> </div>
    <CheckoutNavMob @selectIndex="selectIndex"
      :currDisplayIdx="currDisplayIdx" :options="mobOptions"
      class="mt-3xl display-flex"
      ></CheckoutNavMob>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import $ from '@@/resources/js/jquery-vendor'
import Swiper from '@@/components/swiper/Swiper.vue'
import CheckoutNavMob from '@@/components/CheckoutNavMob.vue'



import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

const currDisplayIdx = ref(0)
const barLen = ref(0)
const swiper = ref()
const comparisons = ref()
const isViewed = ref(false)
const laserModule =  computed(() => props.dataSrc.modules[currDisplayIdx.value])
const mobOptions = computed(() => ({ displays: props.dataSrc.modules.map(v => ({text: v.name}))}))

let observer: IntersectionObserver
onMounted(() => {
  const pair = document.querySelector('.comparison-pair')
  const tag = document.querySelector('.comparison-tag')
  const text = document.querySelector('.comparison-text')
  pair && (barLen.value = pair.clientWidth - $(tag).outerWidth(true) - $(text).outerWidth(true))
  
    const intersectionObseverOption = {
      threshold: new Array(20).fill(1).map((v, i) => (i + 1) / 20)
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio < 0.05) {
          isViewed.value = false
        } else {
          isViewed.value = true
        }
      })
    }, intersectionObseverOption)
    observer.observe(comparisons.value)
})
onBeforeUnmount(() => {
  observer.unobserve(comparisons.value)
  observer.disconnect()
})
const mapSwiper = (_swiper: any) => swiper.value = _swiper
const isInViewPort = (element: HTMLElement) => {
  // TODO: when element's width/height larger than viewport
  const viewWidth = window.innerWidth || document.documentElement.clientWidth
  const viewHeight = window.innerHeight || document.documentElement.clientHeight

  const {
    top,
    right,
    bottom,
    left
  } = element.getBoundingClientRect()

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight + 100
  )
}
const selectIndex = (index: number) => {
  currDisplayIdx.value = index
  isMobile.value && swiper.value.slideTo(index)
}
const calcLen = (len: number) => {
  return `${barLen.value * len / 100}px`
}
const changeSlide = (index: number) => {
  currDisplayIdx.value = index
}
</script>


<style scoped lang="scss">
@import '../theme.scss';
.h-client {
  min-height: unset;
}

@include no-mobile {
  .snmk-container {
    // // position: absolute;
    // top: 0;
    // left: 0;
    align-content: baseline;
    height: 100%;
  }
}
.comparisons {
  $bar-blue: linear-gradient(87.26deg, #0C63E2 0%, #1A8CF5 103.55%);
  $color-blue: #198AF4;
  $bar-purple: linear-gradient(87.26deg, #8727FF 0%, #FF9FE1 103.55%);
  $color-purple: #F999E3;
  $bar-orange: linear-gradient(90deg, #FF1F00 0%, #F90 100%);
  $color-orange: #F2A225;
  @include no-mobile {
    // height: 100%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .comparison-tips {
    color: #828282;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  .comparison {
    text-align: left;

    &:first-child { margin-top: 0;}
  }

  .comparison-pairs {
    width: 100%;
  }
  .comparison-pair {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .comparison-bar {
    width: 100%;
    height: 8px;
    border-radius: 38px;
    background-color: rgba(161, 161, 166, 0.4);
    transition: width 1s ease-in-out ;
  }
  .comparison-text {
    width: 8vw;
    flex: 0 0 auto;
  }

  .comparison-pairs:nth-child(2) {
    .comparison-bar { background-image: $bar-blue; }
    .comparison-text { font-weight: 700; color: $color-blue; }
  }
  .comparison:nth-child(2) .comparison-pairs:nth-child(2) {
    .comparison-bar { background-image: $bar-purple; }
    .comparison-text { color: $color-purple; }
  }
  .comparison:nth-child(3) .comparison-pairs:nth-child(2) {
    .comparison-bar { background-image: $bar-orange; }
    .comparison-text { color: $color-orange; }
  }


}
.power-tags {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  z-index: 10;
  margin-bottom: 14px;

  .power-tag {
    width: 65px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .power-tag:first-child {
    background-color: white;
    color: #1C1C1C;
  }
  .power-tag:nth-child(2) {
    background-image: linear-gradient(87.26deg, #0C63E2 0%, #1A8CF5 103.55%);;
    color: white;
  }
}

.bg-black-1::v-deep .view-port {
  // border-radius: 12px;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@include mobile{
  .comparisons .comparison {
    padding-right: 0;
    text-align: left;
  }
  .comparisons .comparison-text {
    width: 28vw;
  }
}


.section-img-box {
  min-height: 375;
  display: flex;
  background-position: center center;
}
.section-img-box {
  flex: 1 1 auto;
  @include mobile {
    margin-top: 40px;

    &::v-deep .swiper {
      width: 100%;
    }
  }
}
.bg-black-1 {
  background-color: #0e0d13;
  &::v-deep .swiper-container {
    background-color: transparent;
  }
  &::v-deep .checkout-nav-active-bar {
    background-color: #fff;
  }
  &::v-deep .checkout-nav-active {
    color: white;
  }
}
</style>

<style>
.font-strong {
  font-weight: 800;
}
</style>
