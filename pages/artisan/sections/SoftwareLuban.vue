<template>
  <div class='sf-luban'>
    <div class="snmk-container" ref="moreUsefulEL">
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 mt-xl luban-displays-wrapper">
          <div class="text-center">
            <div class="big-title-2 bold-700 page-title-color">{{moreUseful?.title}}</div>
            <div class="mt-m mb-l title-4 bold-500 desc">{{moreUseful?.desc}}</div>
          </div>
        </div>
      <template v-if="!isMobile">
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-offset-2 snmk-col-l-offset-2 pt-2xl pos-relative">
          <SwiperActiveProgress :options="swiperOptions" :id="'moreUseful-strengths'" @onReady="swiperReady">
            <div class="swiper-slide" v-for="(item,index) of moreUseful?.strengths" :key="item.title">
              <video :ref="el => videoMap(el, item)"
                muted :poster="item.poster"
                loop webkit-playsinline
                playsinline
                x5-video-player-type="h5-page"
              >
                <source :src="item.videoWebmSrc">
                <source :src="item.videoMp4Src">
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
  </div>
</template>

<script setup lang='ts'>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const props = withDefaults(defineProps<{moreUseful?: any}>(), { moreUseful: {} })
const { isMobile } = storeToRefs(useGlobalStore())
const activeIndex = ref(1)
const currentStrength = computed(() => props.moreUseful.strengths[activeIndex.value] || {})

const swiperOptions = ref({
  timeAry: [10 * 1000, 10 * 1000, 10 * 1000],
  slidesPerView: 1,
  centeredSlides: true,
  customStart: true,
  initialSlide: activeIndex.value,
  on: {
    async slideChange () {
        const res = await videoStop(props.moreUseful.strengths[activeIndex.value].video)
        activeIndex.value = this.activeIndex
        videoPlay(props.moreUseful.strengths[activeIndex.value].video)
    }
  }
})
const swiper = ref()
const swiperReady = (_swiper: any) => swiper.value = _swiper
const videoMap = (el: any, item: any) => item.video= el
const videoPlay = async (video: HTMLVideoElement) => {
  if (!video || typeof video.play !== 'function' || isMobile.value) return
  video.currentTime = 0
  try {
    await video.play()
  } catch(err) {
    console.log('play video get err', err)
  }
}
const videoStop = async (video: HTMLVideoElement) => {
  if (!video || typeof video.pause !== 'function' || isMobile.value) return
  try {
    video.pause()
  } catch(err) {
    console.log('stop video get err', err)
  }
}

const moreUsefulEL = ref()
const isViewed = ref(false)
let observer: IntersectionObserver
onMounted(() => {
  if (isMobile.value) return
    const root = moreUsefulEL.value
    const intersectionObseverOption = {
      threshold: new Array(20).fill(1).map((v, i) => (i + 1) / 20)
      // rootMargin: '300px'
    }
    observer = new IntersectionObserver((entries) => {
      if (isViewed.value) {
        observer.unobserve(root)
        observer.disconnect()
      }
      entries.forEach(entry => {
        if (entry.intersectionRatio < 0.5) {
          isViewed.value = false
        } else {
          isViewed.value = true
          swiper.value.slideTo(0)
          activeIndex.value = 0
        }
      })
    }, intersectionObseverOption)

    observer.observe(root)
})
onBeforeUnmount(() => {
  observer.unobserve(moreUsefulEL.value)
  observer.disconnect()
})

</script>

<style lang="scss" scoped>
@import '../theme.scss';
.sf-luban {
  background-color: black;
  overflow: hidden;
  padding-block: 88px;
  @include mobile {
    padding-block: 0;
  }
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
.luban-displays-wrapper {
  .desc {
    margin-left: 12.75%;
    margin-right: 12.75%;
    color: var(--White, #FFF);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;
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
  video {
    width: 100%;
  }
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
