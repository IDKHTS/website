<template>
  <div class='home-about-us'>
    <div class='bg-wrapper'>
      <video v-if='!isMobile && aboutUs.bgVideoSrc' ref="video" muted :autoplay="true" webkit-playsinline playsinline :loop="true" class="video" style="object-fit: cover;font-family: 'object-fit: cover;';object-position:center;vertical-align: bottom;width: 100%;">
        <source :src="aboutUs.bgVideoSrc">
      </video>
      <NuxtImg v-else class='w-100' :src="isMobile ? aboutUs.imgMobSrc : aboutUs.imgSrc" alt="About Snapmaker" srcset='' />
      
    </div>
    <div class='snmk-container'>
      <div class='snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1'>
        <p class='hau-title' v-html='aboutUs.title'></p>
      </div>

      <div v-if='!isMobile' class='snmk-col-6 snmk-col-l-6 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-offset-1'>
        <p class='hau-desc' v-html='aboutUs.desc'></p>
      </div>
      <div class='snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1'>
        <Navigate
          class="snmk-primary-btn mt-xs"
          target="_blank"
          :id="aboutUs.linkTraceID"
          :route="aboutUs.route"
        >
          {{ aboutUs.linkText }}
        </Navigate>
        <a @click="openModal" class="snmk-btn" :id="aboutUs.videoBtnTraceID">
          <span class="iconfont mr-xs">&#xe612;</span>{{aboutUs.videoBtnText}}
        </a>
      </div>
    </div>

    <VideoModal v-if="showModal" @close="closeModal"
        :videoSrc="aboutUs.videoSrc"> </VideoModal>
  </div>
</template>

<script lang='ts' setup>
import VideoModal from '@@/components/VideoModal.vue'
import Navigate from '@@/components/Navigate.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const showModal = ref(false)
const aboutUs = computed(() => {
  return {
    title: `Make Something Wonderful`,
    desc: `3D print, laser engrave, and CNC carve with one machine. Add even more functionalities to your 3D printer with optional addons.`,
    imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/Pc_Make-Something-Wonderful.jpg`,
    imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/mobile/first_screen.png`,
    linkText: `About Snapmaker`,
    route: `/about-us`,
    linkTraceID: 'home-about-us-link-btn',
    videoBtnText: `Watch the Video`,
    videoSrc: `https://www.youtube.com/embed/CTZfCfpfFbU`,
    videoBtnTraceID: 'home-about-us-video-btn',
    bgVideoSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/video/home-about-us.webm`
  }
})
const ideaVideoSrcWebm = () => {
  return isMobile.value ? '' : aboutUs.value.videoSrc.webm
}
const ideaVideoSrcMp4 = () => {
  return isMobile.value ? '' : aboutUs.value.videoSrc.mp4
}
const ideaVideoSnap = () => {
  return isMobile.value ? aboutUs.value.imgSrc : false
}


const emit = defineEmits(['openModal', 'closeModal'])
const openModal = () => {
  showModal.value = true
  emit('openModal')
}
const closeModal = () => {
  showModal.value = false
  emit('closeModal')
}
</script>


<style lang="scss" scoped>


.home-about-us {
  min-height: 30vh;
  background-color: white;
  position: relative;

  ::v-deep .modal-container {
    min-height: unset;
  }

  .bg-wrapper {
    line-height: 0;
  }

  .hau-title {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 84px;
    font-style: normal;
    font-weight: 700;
    line-height: 92px;
    letter-spacing: -0.24px;

    @include tablet {
      font-size: 60px;
      line-height: 68px;
    }

    @include mobile {
      color: #FFF;
      text-align: center;

      /* Display/375/Gilroy Bold-40 */
      font-family: Roboto;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px; /* 120% */
      letter-spacing: -0.24px;
    }
  }
  .hau-desc {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.24px;

    margin-top: 28px;
    margin-bottom: 49px;
  }
  .snmk-btn {
    font-size: 18px;
    background-color: transparent;
    border-color: white;
    color: white;
    margin-left: 8px;

    &:hover {
      border-color: $black_white_5;
      color: $black_white_5;
    }

    @include mobile {
      margin-top: 8px;
      margin-left: 0px;
    }
  }
  :deep(.snmk-primary-btn) {
    color: #FFF;
    border: 1px;

    @include mobile {
      margin-top: 32px;
    }
  }
  :deep(.snmk-btn), :deep(.snmk-primary-btn) {
    width: 233px;
    padding: 16px;
    color: #FFF;
    text-align: center;

    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;

    @include mobile {
      font-size: 16px;
      line-height: 24px; /* 150% */
    }
  }

  @include mobile {
    width: 100%;
  }
  @media (max-width: 2559px) {
    .snmk-container {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      text-align: center;
    }
  }
  @media (min-width: 2560px) {
    .snmk-container {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
}


</style>
