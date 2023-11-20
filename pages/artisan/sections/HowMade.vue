<template>
  <div class="bg-black-1 c-white h-client section-wrapper pos-relative z-20">
    <!-- <div v-if="!isMobile" class="text-cover opacity-gradient-to-left" :class='{"text-cover-left": !isTextRight}'></div> -->
    <div class="snmk-container w-100 section-text-box" style="z-index: 10">
      <div class="snmk-col-s-4 snmk-col-xs-4 vertical-center snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-offset-1">
        <div class='w-100'>
          <div class="hm-title bold-700" v-html="dataSrc.title"></div>
          <!-- <div class="title-4 mt-m">{{dataSrc.desc}}</div> -->
          <div >
            <CheckoutNavWeb @selectIndex="selectIndex" 
              :currDisplayIdx="currDisplayIdx"
               :options="dataSrc"
              v-if="!isMobile" class="mt-3xl display-flex"
            ></CheckoutNavWeb>
          </div>
        </div>
      </div>
    </div>
    <template v-if="!isMobile">
      <div class="bg-video">
        <template  v-for="(item, index) in dataSrc.displays"  :key="item.text">
          <MediaViewAdapter  
          
            :options="{
              videoNotLoop: true,
              noAutoPlay: true,
              videoWebm: item.videoWebm,
              videoMp4: item.videoMp4,
              videoOriginalWidth: 1920,
              videoOriginalHeight: 1080,
              alt: item.alt,
              mobAlt: item.mobAlt
            }"
            @videoLoad='onVideoLoad(item, $event)'
            @videoEnd='onVideoEnd($event, index)'
            class="section-video-box"
            :class="{'opacity fade-left-in': index === currDisplayIdx}"
          >
          </MediaViewAdapter>
        </template>
      </div>
    </template>
    <Swiper v-else
      @changeSlide="changeSlide"
      @loaded='mapSwiperRef'
      :swiperId="'how-made-artisan'"
      class="section-video-box w-100 h-100"
      style="display: flex"
    >
      <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index">
          <MediaViewAdapter  
            :options="{
              gifSrc: item.gifSrc,
              alt: item.alt,
              mobAlt: item.mobAlt
            }"
            class="section-video-box"
          >
          </MediaViewAdapter>
      </div>
    </Swiper>
    <CheckoutNavMob @selectIndex="selectIndex" 
      :currDisplayIdx="currDisplayIdx"
       :options="dataSrc"
      class="mt-3xl display-flex"
    ></CheckoutNavMob>
  </div>
</template>

<script setup lang='ts'>
import _ from 'lodash'
import Swiper from '@@/components/swiper/Swiper.vue'
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import CheckoutNavWeb from '@@/components/CheckoutNavWeb.vue'
import CheckoutNavMob from '@@/components/CheckoutNavMob.vue'
import calcWH from '@@/resources/js/calcWH.js'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const props = withDefaults(defineProps<{ dataSrc: any }>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())
const currDisplayIdx = ref(0)
const currDisplay = computed(() => props.dataSrc.displays[currDisplayIdx.value])

const firstTimeTrigger = ref(false)
const swiperRef = ref()
const mapSwiperRef = (swiper: any) => swiperRef.value = swiper
const selectIndex = (index: number) => {
  // stop last video
  const displays = props.dataSrc.displays
  const preVideo = displays[currDisplayIdx.value].video
  preVideo && preVideo.pause()

  // start curr video
  currDisplayIdx.value = index
  isMobile.value && swiperRef.value && swiperRef.value?.slideTo(index)
  const video = displays[currDisplayIdx.value].video
  video && (video.currentTime = 0)
  video && video.play()
}
const changeSlide = (index: number) => currDisplayIdx.value = index
const onVideoLoad = (item: any, video: HTMLVideoElement) => {
  item.video = video
  if (!firstTimeTrigger.value) {
    selectIndex(0)
    firstTimeTrigger.value = true
  }
}
const onVideoEnd = (event: Event, index: number) => {
  let nextIndex = index + 1
  if (index === (props.dataSrc.displays.length - 1)) {
    nextIndex = 0
  }
  selectIndex(nextIndex)
}

const imgViewHeight = ref(0)
const imgViewWidth = ref(0)
const bgImgHeight = ref(0)
const bgImgWidth = ref(0)
const imgAdapteWidth = () => {
  imgViewWidth.value = window.innerWidth
}
const imgAdapteHeight = () => {
  if (!swiperRef.value) return
  imgViewHeight.value = isMobile.value ? swiperRef.value?.el?.clientHeight : window.innerHeight
}
const initBg = (options: any) => {
  return new Promise((resolve, reject) => {
    if (!options) reject(new Error('no options'))
    let width = 0
    let height = 0
    if (options.imgOriginalWidth && options.imgOriginalHeight) {
      width = options.imgOriginalWidth
      height = options.imgOriginalHeight
      resolve(calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerHeight))
      return
    }

    const img = new Image()
    img.src = options.imgSrc
    img.onload = function () {
      const width = options.imgOriginalWidth || img.width
      const height = options.imgOriginalHeight || img.height
      resolve(calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth))
    }
    img.onerror = err => { console.log(err); reject(err) }
  })
  // const vue = this
}
const initBgImg = _.throttle(() => {
  imgAdapteWidth()
  imgAdapteHeight()
  initBg({
    img: props.dataSrc.imgSrc,
    imgOriginalWidth: 1094,
    imgOriginalHeight: 1080,
    viewWidth: imgViewWidth.value,
    viewHeight: window.innerHeight
  }).then((v: any) => {
    bgImgWidth.value = v.targetWidth
    bgImgHeight.value = v.targetHeight
  })
}, 100)

onMounted(() => {
  initBgImg()
  window.addEventListener('resize', initBgImg)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', initBgImg)
})
</script>



<style scoped lang="scss">
@import '../theme.scss';

.section-wrapper {
  display: flex;
  align-items: center;
  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::v-deep .checkout-nav{
    color: white;
  }
  &::v-deep .checkout-nav-active-bar {
    background-color: white;
  }
  @include mobile {
    &::v-deep .checkout-nav-text{
      color: white;
    }
  }
  @media (max-width: 1583px) {
    &::v-deep .checkout-nav-bar {
      height: 60px;
    }
  }
}
.text-cover {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(40%);
  height: 100%;
  z-index: 9;
}
.text-cover-left {
  left: 0;
}
.hm-title {
  color: var(--White, #FFF);
  font-family: Roboto;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 127.273% */
  letter-spacing: -0.24px;

  @include mobile {
    width: 100%;
    text-align: center;
    color: var(--unnamed, #1C1E20);
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
  }
}

.section-wrapper::v-deep .swiper-container {
  background-color: transparent;
}
.swiper-slide {
  background-position: center center;
}

@include mobile{
  .section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white !important;

    .section-video-box {
      margin-top: 28px;
      flex: 1 1 auto;
      
      :deep(.swiper) { width: 100%; }
    }
    .section-text-box {
      margin-top: 40px;
      flex: 0 0 auto;
    }
  }
  .section-wrapper, .bg-black-1 {
    background-color: #F5F5F5;
    color: $black;
  }
  .checkout-nav-wrapper {

    flex-wrap: wrap;
    justify-content: center;

    .checkout-nav {
      margin-left: 16px;

      &:first-child {margin-left: 0;}
    }
  }
  .section-wrapper:deep(.checkout-nav-text) {
    color: white;
  }

}

@media (min-width: $breakPoint_m){
  .section-wrapper {
    display: flex;
    align-items: center;



    .section-video-box {
      position: absolute;
      right: 0;
      top: 0;

      opacity: 0;
      // transform: translateX(20px);
      transition: all 0.7s ease-in-out;
    }
  }
}


</style>
