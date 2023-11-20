<template>
  <div class="bg-black-2 pos-relative" :class="{'z-98': isTop, 'z-1000': isShowModal}">
    <Modal v-if="isShowModal" @close="isShowModal = false" :videoSrc="dataSrc.btn.link"></Modal>
    <div class="bg-video">
      <MediaViewAdapter
        :options="{
          videoNotLoop: true,
          videoWebm: dataSrc.videoWebm,
          videoMp4: dataSrc.videoMp4,
          videoOriginalWidth: 2166,
          videoOriginalHeight: 1080,
          imgOriginalWidth: 720,
          imgOriginalHeight: 1440,
          alt: dataSrc.alt,
          mobAlt: dataSrc.mobAlt
        }"
        @videoEnd="videoEnd"
        @loaded="videoLoad"
        @videoTimeupdate='videoTimeupdate'
      />
    </div>
    <div class="text-wrapper" >
      <div class="snmk-container py-3xl">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-center">
          <div id="screen1-title" class="first-title bold-700 mb-xs" v-html="dataSrc.title"></div>
          <div id="screen1-desc" v-html="dataSrc.desc"></div>
          <a id="screen1-btn" class="buy-btn title-4 bold-700 mt-l" @click.stop='openShopModal'>
            <!--  :href="screen1.buyBtn.link" :target="'_blank'" -->
            {{dataSrc.buyBtn.text}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import Modal from '@@/components/VideoModal.vue'
// import {
//   GSAP
// } from '@@/resources/js/scrollmagic/index'
import gsap from 'gsap'

import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const emit = defineEmits(['openShopModal', 'loaded'])
let anim: gsap.core.Timeline | null
const isTextShow = ref(false)
const isTop = ref(false)
const isShowModal = ref(false)

const openShopModal = () => emit('openShopModal')
const videoLoad = () => emit('loaded')
const videoEnd = () => document?.documentElement?.classList?.remove('body-no-scroll')
const videoTimeupdate = (video: HTMLVideoElement) => {
  if (!isTextShow.value && video.currentTime > video.duration - 1 && anim) {
    isTextShow.value = true
    anim.play(0)
  }
}

onMounted(() => {
    anim = gsap.timeline()
    anim.to('#screen1-title', 1, { opacity: 1, y: 0 })
      .to('#screen1-desc', 1, { opacity: 1, y: 0 }, '-=0.75')
      .to('#screen1-btn', 1, { opacity: 1, y: 0 }, '-=0.75')
      .pause(0)

    const testIsTop = () => (isTop.value = (document.documentElement.scrollTop || document.body.scrollTop) === 0)
    window.addEventListener('scroll', testIsTop)


    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    if (scrollTop > window.innerHeight) return
    setTimeout(() => {
      document.documentElement.classList.add('body-no-scroll')

      setTimeout(() => {
        document.documentElement.classList.remove('body-no-scroll')
      }, 4000);
    }, 0)
})
onBeforeUnmount(() => {
  document.documentElement.classList.remove('body-no-scroll')
})
</script>


<style scoped lang="scss">
@import '../theme.scss';
.z-98 {
  z-index: 98;
}
.z-1000 {
  z-index: 1000;
}

.bg-black-2 {
  background-color:rgb(20, 20, 20) !important;
  height: calc(100vh - 60px);
}
.bg-video, .text-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text-wrapper {
  transition: all 1s ease-in-out;

  #screen1-title, #screen1-desc, #screen1-btn {
    opacity: 0;
    transform: translateY(60px);
  }
  #screen1-desc {
    color: #F3F3F3;
    text-align: center;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px; /* 120% */
    letter-spacing: -0.24px;


    @media (max-width: 1568px) and (min-width: 768px) {
      font-size: 28px;
      line-height: 44px; /* 113.333% */
    }
    @include mobile {
      font-size: 16px;
    }
  }
}
.btn {
  --border-radius: 100px;
  --border-width: 2px;
  position: relative;
  padding: 18px 32px;
  border-radius: var(--border-radius);
  background-color: transparent;
  border: 2px solid;
  // border-color: $primary-c ;
  // color: $primary-c;
  color: white;

  z-index: 0;
  cursor: pointer;
  display: inline-block;
}
.btn:hover {
  border-radius: var(--border-radius);
  border-color: transparent;
  background-origin: border-box;
  background-image: linear-gradient(87.26deg, #0C63E2 0%, #1A8CF5 100.55%);
  color: white;
}
.buy-btn {
  width: 212px;
  margin-right: 20px;
  --border-radius: 100px;
  --border-width: 2px;
  position: relative;
  padding: 18px 32px;
  background-color: transparent;
  // border: 2px solid;
  // border-color: $primary-c ;
  // color: $primary-c;
  color: white;

  z-index: 0;
  cursor: pointer;
  display: inline-block;
  border-radius: var(--border-radius);
  border-color: transparent;
  background-origin: border-box;
  background: linear-gradient(90deg, #00FFD1 0%, #0704F1 100%);
  color: white;

  &::v-deep a {
    color: #FFF;
    text-align: center;

    /* Heading/1920/Gilroy Bold-18 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;
  }
}

</style>
