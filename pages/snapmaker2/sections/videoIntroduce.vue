<template>
  <div ref="shiftSwiper" class="bg-black-1 c-white section-wrapper" :class='{"h-client": isMobile}' style="position: relative">
    <!-- <div v-if="!isMobile" class="text-cover opacity-gradient"></div> -->
    <div class="snmk-container-no-mr w-100 section-text-box" style="z-index: 10">
      <div style='z-index: 1;' class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-3 snmk-col-xs-3 snmk-col-offset-1 snmk-col-l-offset-1 vertical-center">
        <div>
          <div class="big-title-2 bold-700" v-if='dataSrc.title' v-html="dataSrc.title"></div>
          <div class="title-4 mt-m" v-if="!isMobile">{{dataSrc.desc}}</div>
          <div class='mt-l' v-if='!isMobile'><router-link class='snmk-link' to='/snapmaker-quick-swap-kit'>Learn More ></router-link></div>
          <CheckoutNavWeb @selectIndex="selectIndex" 
            :currDisplayIdx="currDisplayIdx" :options="dataSrc"
            v-if="!isMobile && dataSrc.displays && dataSrc.displays.length !== 1" class="mt-3xl display-flex"
          ></CheckoutNavWeb>
        </div>
      </div>
      <div style='flex: 1 1 auto; overflow: hidden; position: relative;'>
        <template v-if="!isMobile">
            <MediaViewAdapter
              :key="dataSrc.displays[0].text"
              :options="{
                gifSrc: dataSrc.displays[0].gifSrc,
                videoWebm: dataSrc.displays[0].videoWebm,
                videoMp4: dataSrc.displays[0].videoMp4,
                videoOriginalWidth: 1280,
                videoOriginalHeight: 1080,
                alt: dataSrc.displays[0].alt,
                mobAlt: dataSrc.displays[0].mobAlt,
                isAutoHeigh: true
              }"
              @videoLoad='onVideoLoad(dataSrc.displays[0], $event)'
              class="section-video-box"
              :class="{'opacity fade-left-in item-active': 0 === currDisplayIdx}"
            >
            </MediaViewAdapter>
        </template>
      </div>
      <div v-if='isMobile' class="snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-12 snmk-col-l-offset-12 vertical-center">
        <div class="title-4 mt-m text-center">
          {{dataSrc.desc}}
        </div>
      </div>
    </div>
    <Swiper v-if='isMobile'
      @changeSlide="selectIndex"
      :swiperId="'screen11'"
      ref="swiper-ref"
      class="section-video-box w-100 h-100"
      style="display: flex"
    >
      <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays.slice(0, 1)" :key="index">
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
          </MediaViewAdapter>
          <div class='mob-btn'>
            <router-link class='snmk-primary-btn' to='/snapmaker-quick-swap-kit'>Learn More</router-link>
          </div>
      </div>
    </Swiper>
    <CheckoutNavMob v-if='dataSrc.displays && dataSrc.displays.length !== 1' @selectIndex="selectIndex" 
      :currDisplayIdx="currDisplayIdx" :options="dataSrc"
      class="mt-3xl display-flex"
    ></CheckoutNavMob>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import Swiper from '@@/components/swiper/Swiper.vue'
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import CheckoutNavWeb from '@@/components/CheckoutNavWeb.vue'
import CheckoutNavMob from '@@/components/CheckoutNavMob.vue'

const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  desc: `The newly launched Quick Swap Kit allows you to switch between 3D printing, laser, and CNC in one minute, making your 3-in-1 3D Printer as convenient as a dedicated machine.`,
  displays: [
    {
      text: `Toolheads`,
      videoWebm: `https://ditfjx9w4x3vl.cloudfront.net/assets/quick-swap-kit/quick-swap-kit-2_1_pc_webm.webm`,
      videoMp4: `https://ditfjx9w4x3vl.cloudfront.net/assets/quick-swap-kit/quick-swap-kit-2_1_pc_mp4.mp4`,
      gifSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/quick-swap-kit/quick-swap-kit-2_1_mob_webp.webp`,
      alt: 'Toolheads quick swap kit',
      mobAlt: 'Toolheads quick swap kit'
    }
  ]
}))

const swiperRef = ref<Element | ComponentPublicInstance | null>()
const currDisplayIdx = ref(0)

const currDisplay = () => dataSrc.value.displays[currDisplayIdx.value]

const firstTimeTrigger = ref(false)
const selectIndex = (index: number) => {
  if(!swiperRef.value) return
  // stop last video
  const displays = dataSrc.value.displays
  const preVideo = displays[currDisplayIdx.value].video
  preVideo && preVideo.pause()

  // start curr video
  currDisplayIdx.value = index
  isMobile.value && swiperRef.value.swiper.slideTo(index)
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

// scroll to viewport and start play video
const isViewed = ref(false)
const shiftSwiper = ref<Element | null>()
const onReplay = () => {
  const displays = dataSrc.value.displays
  const video = displays[currDisplayIdx.value].video
  video && (video.currentTime = 0)
  video && video.play()
}
let observer: IntersectionObserver
onMounted(() => {
  if(!shiftSwiper.value) return
  const root = shiftSwiper.value
  const intersectionObseverOption = {
    threshold: new Array(20).fill(1).map((v, i) => (i + 1) / 20)
    // rootMargin: '300px'
  }
  observer = new IntersectionObserver((entries) => {
    // only start one time
    if (isViewed.value) {
      observer.unobserve(root)
      observer.disconnect()
    }

    entries.forEach(entry => {
      if (entry.intersectionRatio < 0.5) {
        isViewed.value = false
        onReplay()
      } else {
        isViewed.value = true
        onReplay()
      }
    })
  }, intersectionObseverOption)

  observer.observe(root)
})
onBeforeMount(() => {
  if(!shiftSwiper.value) return
  const root = shiftSwiper.value
  observer.unobserve(root)
  observer.disconnect()
})

</script>


<style scoped lang="scss">
.section-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
  .bg-video {
    // position: absolute;
    // top: 0;
    // // left: 0;
    // right: 0;
    // width: 66%;
    // height: 100%;
  }
  .bg-video.second-item  {
    left: 0;
    right: unset;
    width: 100%;
  }
  .section-video-box {
    // position: absolute;
    // right: 0;
    // top: 0;

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
.snmk-link {
  color: $blue;

  &::after {
    background-color: $blue;
    width: 0;
    transition: width 0.25s linear;
  }
  &:hover::after {
    width: 100%;
   }
}
.mob-btn {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  .snmk-primary-btn {
    background: linear-gradient(98deg, #0FA9FF 3.3%, #0F7DFF 100%);
  }
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
      position: relative;
      right: 0;
      top: 0;
      // margin-top: 28px;
      flex: 1 1 auto;

      &::v-deep .swiper-wrapper img {
        position: relative;
        top: -30px;
      }
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
      // position: absolute;
      // right: 0;
      // top: 0;

      opacity: 0;
      transform: translateX(20px);
      transition: all 0.7s ease-in-out;
    }
    .item-active {
      transform: translateX(0);
    }
  }
}


</style>
