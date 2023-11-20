<template>
  <div class="snmk-container" ref="moreusefulWrapper">
    <template v-if="!isMobile">
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-offset-2 snmk-col-l-offset-2 pt-2xl pos-relative">
        <SwiperActiveProgress :options="swiperOptions" :id="'moreUseful-strengths'" @onReady="swiperReady">
          <div class="swiper-slide" v-for="(item,index) of moreUseful.strengths" :key="item.title">
            <!-- <img :src="item.imgSrc" :alt="item.title"> :ref="'moreuseful-video'+index"-->
            <video :ref='el=>mapVideo(el, index)'
              muted :poster="item.poster"
              loop webkit-playsinline
              playsinline
              x5-video-player-type="h5-page"
              @canplay="videoCanplay(item, index)"
            >
              <source :src="item.videoWebmSrc">
              <source :src="item.videonMp4Src">
            </video>
          </div>
        </SwiperActiveProgress>
      </div>
      <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2">
        <div class="mt-l strength-title">{{currentStrength.title}}</div>
        <div class="strength-desc">{{currentStrength.desc}}</div>
      </div>
    </template>
    <template v-else>
      <div class=" snmk-col-s-4 snmk-col-xs-4 pos-relative">
        <div v-for="(item,index) of moreUseful.strengths" :key="item.title + index" class="mt-3xl" style="line-height: 0;">
          <img :src="item.imgSrcMob" alt="">
          <div class="mt-l font-1 strength-title">{{item.title}}</div>
          <div class="mt-xs font-2 strength-desc">{{item.desc}}</div>
        </div>
      </div>
    </template>
  </div>
</template>


<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
if (process.client) {
  AOS.init()
}

const { isMobile } = storeToRefs(useGlobalStore())
const props = defineProps<{moreUseful: any}>()
const { moreUseful } = toRefs(props)

const activeIndex = ref(1)
const currentStrength = computed(() => (moreUseful.value?.strengths[activeIndex.value] || {}))

const swiper = ref<any>({})
const swiperReady = (_swiper: any) => swiper.value = _swiper

const moreusefulVideo = ref<(Element | ComponentPublicInstance | null)[]>([])
const mapVideo = (el: Element | ComponentPublicInstance | null, index: number) => moreusefulVideo.value[index] = el
const videoCanplay = (item: any, index: number) => {
  const video = moreusefulVideo.value[index]
  item.video = video

}
const videoPlay = (video: HTMLVideoElement) => {
  if (!video || typeof video.play !== 'function' || isMobile.value) return
  video.currentTime = 0
  video.play()
}
const videoStop = (video: HTMLVideoElement) => {
  if (!video || typeof video.pause !== 'function' || isMobile.value) return
  video.pause()
}

// init swiper
const swiperOptions = ref<any>({})
onBeforeMount(() => {
    swiperOptions.value = {
      timeAry: [3.2 * 1000, 5 * 1000, 3.3 * 1000],
      slidesPerView: 1,
      centeredSlides: true,
      customStart: true,
      initialSlide: activeIndex.value,
      on: {
        slideChange () {
          if(!(moreusefulVideo.value[activeIndex.value] instanceof HTMLVideoElement)) return 
          videoStop(moreusefulVideo.value[activeIndex.value] as HTMLVideoElement)
          activeIndex.value = swiper.value.activeIndex
          videoPlay(moreusefulVideo.value[activeIndex.value] as HTMLVideoElement)
        }
      }
    }
})

// play video until in viewport
const moreusefulWrapper = ref<HTMLElement | null>(null)
const isViewed = ref(false)
const observer = ref<IntersectionObserver>()
onMounted(() => {
    if (isMobile.value) return
    const root = moreusefulWrapper.value as HTMLElement
    const intersectionObseverOption = {
      threshold: new Array(20).fill(1).map((v, i) => (i + 1) / 20)
      // rootMargin: '300px'
    }
    observer.value = new IntersectionObserver((entries) => {
      if(!observer.value) return
      if (isViewed.value) {
        observer.value.unobserve(root)
        observer.value.disconnect()
      }
      entries.forEach(entry => {
        if (entry.intersectionRatio < 0.5) {
          isViewed.value = false
        } else {
          isViewed.value = true
          swiper.value.slideTo(0)
          activeIndex.value = 0
          videoPlay(moreusefulVideo.value[activeIndex.value] as HTMLVideoElement)
        }
      })
    }, intersectionObseverOption)

    observer.value.observe(root)
})
onBeforeUnmount(() => {
  if(!observer.value) return
  const root = moreusefulWrapper.value as HTMLElement
  observer.value.unobserve(root)
  observer.value.disconnect()
})

</script>

<style lang="scss" scoped>

#moreUseful-strengths {
  overflow-y: visible;
}
.snmk-container {
  &::v-deep .swiper-container, &::v-deep .swiper-wrapper {
    position: static;
  }
  &::v-deep .swiper-pagination  {
    bottom: -60px;
    right: 0;
    text-align: right;
    padding-right: 22px;
  }
}

.strength-title {
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 56px;
  letter-spacing: -0.24px;
  text-align: left;
}
.strength-desc {
  color: $black-white-7;
  font-size: 14px;
  line-height: 20px;
  min-height: 60px;
  letter-spacing: -0.24px;
  text-align: left;
}
.swiper-slide {
  border-radius: 6px;
  overflow: hidden;
}

@include mobile {
  .strength-title {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }
  .strength-desc {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    min-height: none;
  }
  .swiper-slide {
    border-radius: 2px;
  }

}


</style>
