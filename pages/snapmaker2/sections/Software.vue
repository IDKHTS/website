<template>
  <div class='sf-luban'>
    <div class="snmk-container" ref="moreusefulEL">
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 mt-xl luban-displays-wrapper">
          <div class="text-center">
            <div class="page-title">{{dataSrc.title}}</div>
            <div class="mt-m mb-l page-desc desc">{{dataSrc.desc}}</div>
          </div>
        </div>
      <template v-if="!isMobile">
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-offset-2 snmk-col-l-offset-2 pt-2xl pos-relative">
          <SwiperActiveProgress :options="swiperOptions" :id="'moreUseful-strengths'" @onReady="swiperReady">
            <div class="swiper-slide" v-for="(item,index) of dataSrc.strengths" :key="item.title">
              <!-- <img :src="item.imgSrc" :alt="item.title"> -->
              <video class='w-100' :ref="(el) => mapElToVdieo(el, index, item)"
                muted :poster="item.poster"
                loop webkit-playsinline
                playsinline
                x5-video-player-type="h5-page"
                @canplay="() => videoCanplay(item, index)"
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
          <div v-for="(item,index) of dataSrc.strengths" :key="item.title + index" class="mt-3xl" style="line-height: 0;">
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

const { isMobile } = storeToRefs(useGlobalStore())

const dataSrc = computed(() => ({
  title: 'All-in-1 CAM software.',
  desc: `The tailor-made software Snapmaker Luban provides concise and easy-to-follow configuration workflow of 3D printing, and laser and CNC machining. Excel in 3 fabrication methods with 1 software.`,
  strengths: [
    {
      title: `3D Printing`,
      desc: `Mesh Painting Tool`,
      videoWebmSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/video/luban 3dp.webm`,
      videoMp4Src: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/video/luban 3dp.webm`,
      imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/video/mob-luban-3dp.webp`
    },
    {
      title: `Laser Engraving and Cutting`,
      desc: `1000+ Laser Vectors Templates`,
      videoWebmSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/video/luban laser.webm`,
      videoMp4Src: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/video/luban laser.webm`,
      imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/video/mob-luban-laser.webp`
    },
    {
      title: `CNC Machining`,
      desc: `4-axis Linkage Carving`,
      videoWebmSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/luban/video/sizhou-PC.webm`,
      videoMp4Src: `https://ditfjx9w4x3vl.cloudfront.net/assets/luban/video/sizhou-PC.mp4`,
      imgSrcMob: `https://ditfjx9w4x3vl.cloudfront.net/assets/luban/video/sizhou-mob.webp`
    }
  ]
}))
const currentStrength = computed(() => dataSrc.value.strengths[activeIndex.value] || {})

const activeIndex = ref(1)
const swiper = ref()
const videoElArr = ref<(Element | ComponentPublicInstance | null)[]>([])
const mapElToVdieo = (el: Element | ComponentPublicInstance | null, index: number, item: any) => {
  videoElArr.value[index] = el
  item.video =  el
}
const videoCanplay = (item: any[], index: number) => item.video = videoElArr.value[index]
const videoPlay = (video: HTMLVideoElement) => {
  if (!video || typeof video.play !== 'function' || isMobile.value) return
  video.currentTime = 0
  video.play()
}
const videoStop = (video: HTMLVideoElement) => {
  if (!video || typeof video.pause !== 'function' || isMobile.value) return
  video.pause()
}
const swiperOptions = ref({
  timeAry: [10 * 1000, 10 * 1000, 10 * 1000],
  slidesPerView: 1,
  centeredSlides: true,
  customStart: true,
  initialSlide: activeIndex.value,
  on: {
    slideChange () {
      videoStop(dataSrc.value.strengths[activeIndex.value].video)
      activeIndex.value = this.activeIndex
      videoPlay(dataSrc.value.strengths[activeIndex.value].video)
    }
  }

})
const swiperReady = (_swiper: any) => swiper.value = _swiper

const isViewed = ref(false)
const moreusefulEL = ref(null)
let observer: IntersectionObserver
onMounted(() => {
  if (isMobile.value || !moreusefulEL.value) return
  const root = moreusefulEL.value
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

onBeforeMount(() => {
  if(!moreusefulEL.value || isMobile.value) return
  observer.unobserve(moreusefulEL.value)
  observer.disconnect()
})

</script>

<style lang="scss" scoped>
@import '../common.scss';
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

<style>
.sf-luban .pagination-bullet {
  background-color: #D9D9D9;
}
.at-product .sf-luban .pagination-bullet-active {
  background-color: #D9D9D9;
}
</style>
