<template>
  <div class="bg-black-1 c-white h-client section-wrapper" style="position: relative">
    <div v-if="!isMobile" class="text-cover opacity-gradient"></div>
    <div class="snmk-container w-100 section-text-box" style="z-index: 10">
      <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 vertical-center">
        <div data-aos="fade-up" :class="{'text-center': isMobile}">
          <div class="big-title-2 bold-700 page-title-color" v-html="dataSrc.title"></div>
          <div class="title-4 mt-m">{{dataSrc.desc}}</div>
            <CheckoutNavWeb @selectIndex="selectIndex"
              :currDisplayIdx="currDisplayIdx" :options="dataSrc"
              v-if="!isMobile" class="mt-3xl display-flex"
            ></CheckoutNavWeb>
        </div>
      </div>
    </div>
    <template v-if="!isMobile">
      <div class="bg-video">
        <template  v-for="(item, index) in dataSrc.displays" :key="item.text" >
          <MediaViewAdapter
            :options="{
              gifSrc: item.gifSrc,
              videoWebm: item.videoWebm,
              videoMp4: item.videoMp4,
              videoOriginalWidth: 1920,
              videoOriginalHeight: 1080,
              alt: item.alt,
              mobAlt: item.mobAlt
            }"
            @videoLoad='onVideoLoad(item, $event)'
            class="section-video-box"
            :class="{'opacity fade-left-in': index === currDisplayIdx}"
          >
              <!-- videoNotLoop: true, -->
          </MediaViewAdapter>
        </template>
      </div>
    </template>
    <Swiper v-else
      @changeSlide="selectIndex"
      :swiperId="'screen11'"
      @loaded="mapSwiperRef"
      class="section-video-box w-100 h-100"
      style="display: flex"
    >
      <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index">
          <MediaViewAdapter
            :options="{
              gifSrc: item.gifSrc,
              videoWebm: item.videoWebm,
              videoMp4: item.videoMp4,
              videoOriginalWidth: 1920,
              videoOriginalHeight: 1080,
              imgOriginalWidth: 360,
              imgOriginalHeight: 480,
              alt: item.alt,
              mobAlt: item.mobAlt
            }"
            class="section-video-box "
            @videoLoad='onVideoLoad(item, $event)'
          >
              <!-- videoNotLoop: true, -->
          </MediaViewAdapter>
      </div>
    </Swiper>
    <CheckoutNavMob @selectIndex="selectIndex" 
      :currDisplayIdx="currDisplayIdx"  :options="dataSrc"
      class="mt-3xl display-flex"
    ></CheckoutNavMob>
    <!-- <div class="control-wrapper z-10 mb-3xl" :style="{bottom: isMobile ? imgViewHeight / 2 + 'px' : 0}" v-if="!isMobile">
      <div class="snmk-container">
        <div @click="onReplay"
          class="snmk-col-1 snmk-col-l-1 snmk-col-m-1 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-10 snmk-col-l-offset-10 snmk-col-m-offset-6 controller">
            <div class="iconfont mr-2xs">&#xe624;</div> replay
        </div>
      </div>
    </div> -->
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

const props = withDefaults(defineProps<{dataSrc: any}>(), { dataSrc: {} })
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
  if(!swiperRef.value) return
  isMobile.value && swiperRef.value?.slideTo(index)
  const video = displays[currDisplayIdx.value].video
  video && (video.currentTime = 0)
  video && video.play()
}
const onVideoLoad = (item: any, video: HTMLVideoElement) => {
  item.video = video
  if (!firstTimeTrigger.value) {
    selectIndex(0)
    firstTimeTrigger.value = true
  }
}

const onReplay = () => {
  const displays = props.dataSrc.displays
  const video = displays[currDisplayIdx.value].video
  video && (video.currentTime = 0)
  video && video.play()
}



const imgViewHeight = ref(0)
const imgViewWidth = ref(0)
const bgImgHeight = ref(0)
const bgImgWidth = ref(0)
const imgAdapteWidth = () => {
  imgViewWidth.value = window.innerWidth
}
const imgAdapteHeight = () => {
  if(!swiperRef.value) return
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
}
.text-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(40%);
  height: 100%;
  z-index: 9;
}

.section-wrapper::v-deep .swiper-container {
  background-color: transparent;
}
.swiper-slide {
  background-position: center center;
}

.control-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;

  .iconfont {
    transition: transform 0.5s ease-in-out;
  }
  .controller {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    &:hover {
      color: $blue;
      .iconfont {
        transform: rotate(360deg);
      }
    }
  }
}

@include mobile{
  .section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

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
  .checkout-nav-wrapper {
    justify-content: center;

    .checkout-nav {
      margin-left: 16px;

      &:first-child {margin-left: 0;}
    }
  }

  .control-wrapper {
    margin-bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;

    .iconfont {
      transition: transform 0.5s ease-in-out;
    }
    .controller {
      opacity: 0.4;
      display: flex;
      cursor: pointer;

      &:hover, &:focus {
        color: $blue;

        .iconfont {
          transform: rotate(360deg);
        }
      }
    }
  }
}

@media (min-width: $breakPoint_m) and (max-width: $breakPoint_xxxl){
  .section-wrapper {
    display: flex;
    align-items: center;
    .section-video-box {
      position: absolute;
      right: 0;
      top: 0;

      opacity: 0;
      transform: translateX(20px);
      transition: all 0.7s ease-in-out;
    }
  }
}


</style>
