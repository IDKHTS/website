<template>
  <div class="software-wrapper">
    <div class="app-download-wrapper">
      <div style="overflow: hidden" class="w-100 h-100 pos-relative">
        <div :style="{height: `${videoHeight}px`, width: `${videoWidth}px`}" class="view-port w-100 h-100 pos-relative">
          <template v-if="!isCN">
            <video width="100%" height="100%" v-if="!isMobile && isFoundVersion"
              muted :poster="appDownloadVideo.poster"
              loop webkit-playsinline autoplay
              playsinline
              x5-video-player-type="h5-page"
            >
              <source :src="appDownloadVideo.videoWebmSrc">
              <source :src="appDownloadVideo.videonMp4Src">
            </video>
            <img v-if="!isMobile && !isFoundVersion" class="no-found-version" :src="appDownloadVideo.poster" alt="">
            <img v-if="isMobile" class="app-download-bgimg" :src="appDownloadVideo.imgSrcMob" alt="">
          </template>
          <img v-else class="" src="https://ditfjx9w4x3vl.cloudfront.net/assets/luban/pc/pic_top-bg-2560x884.jpg" alt="">
        </div>
      </div>
      <div class="cover-layer" :class="{'no-bg': isCN }"></div>
      <div class="app-download">
        <AppDownload :appDownloadData="appDownloadData" @onFoundVerion="onFoundVerion"></AppDownload>
      </div>
    </div>

    <div class="software-display pos-relative">
      <SoftwareDisplay :device="device" :softwareDisplayData="softwareDisplayData"></SoftwareDisplay>
    </div>


    <template v-if="!isCN">
      <ContentWrapper class="pb-3xl" :title="moreUseful.title" style="background-color: #151617;">
        <MoreUseful :device="device" :moreUseful="moreUseful"></MoreUseful>
      </ContentWrapper>
    </template>

    <ContentWrapper class="features" :title="featuresData.title" style="background-color: #1C1E20">
      <div class="snmk-container features-content pt-l">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <TabPanel :options="featureTabsPanelOptions">
            <template v-for="section of featuresData.sections" v-slot:[section.title]>
              <div class="introduces" :key="section.title" :style="{'justify-content': section.introduces.length < 3 ? 'center' : ''}" data-aos="fade-up"  data-aos-duration="1000">
                <div v-for="introduce of section.introduces" :key="introduce.title" class="introduce">
                  <img style="width: 100%" :src="introduce.imgSrc" alt="">
                  <div class="font-1 mt-l mb-xs">{{introduce.title}}</div>
                  <div class="font-2">{{introduce.descriptions}}</div>
                </div>
              </div>
            </template>
          </TabPanel>
        </div>
      </div>
    </ContentWrapper>

    <div class="open-source">
      <div class=" snmk-container">
        <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-wrapper">
          <div>
            <div class="title-1 bold" style="color: white">{{openSourceData.title}}</div>
            <div class="font-2 mb-xl mt-l">{{openSourceData.descriptions}}</div>
            <a target="_blank" :href="openSourceData.btn.link" :id="openSourceData.btn.traceID" class="snmk-primary-btn text-center">{{openSourceData.btn.text}}</a>
          </div>
        </div>
        <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4 open-source-img">
          <img :src="openSourceData.imgSrc" alt="">
        </div>
      </div>
    </div>

    <ContentWrapper style="background-color: #1C1E20;" class="video-tutorials" :title="videoTutorialsData.title">
      <VideoTutorials class="pt-2xl" :videoTutorialsData="videoTutorialsData" :device="device"></VideoTutorials>
    </ContentWrapper>

    <ContentWrapper class="documents" :title="documentData.title">
      <div class="snmk-container  pt-l">
        <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 vertical-center">
          <img :src="documentData.imgSrc" alt="">
        </div>
        <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 docs" >
          <div v-for="doc of documentData.docs" :key="doc.title" class="doc mt-2xl mb-2xl">
            <div class="title-3 bold">{{doc.title}}</div>
            <div class="mb-l mt-xl font-bw-4">
              <template v-for="text of doc.descriptions" >
                <span  v-if="!text.link" :key="text.text">{{ text.text }}</span>
                <a class="snmk-link-btn font-blue" :id="text.traceID" v-if="!!text.link" :href="text.link" :key="text.text" target="_blank">{{ text.text }}</a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </div>
</template>

<script setup lang='ts'>
import AppDownload from '@@/pages/software/AppDownload.vue'
import ContentWrapper from '@@/pages/software/ContentWrapper.vue'
import SoftwareDisplay from '@@/pages/software/SoftwareDisplay.vue'
import VideoTutorials from '@@/pages/software/VideoTutorials.vue'
import TabPanel from '@@/components/TabPanel.vue'
import MoreUseful from '@@/pages/software/MoreUseful.vue'
import calcWH from '~/resources/js/calcWH'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import headConfigs from '~/resources/data/head'
import { DeviceType } from '~/constant'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { IOptions } from './types'

if(process.client) {
  AOS.init()
}

useHead(headConfigs.software)
const { isMobile, device } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const isCN = computed(() => i18n.locale.value === 'zh-CN')
const isPC = computed(() => device.value === DeviceType.PC)
const softwareData = computed<any>(() => i18n.tm('softwareData'))
const appDownloadData = computed(() => softwareData.value.appDownload)
const appDownloadVideo = computed(() => {
  if (isMobile.value) {
    return {
      imgSrcMob: appDownloadData.value.imgSrcMob
    }
  } else if (isPC.value) {
    return {
      videoWebmSrc: appDownloadData.value.videoWebmSrc,
      videoMp4Src: appDownloadData.value.videoMp4Src,
      poster: appDownloadData.value.poster
    }
  } else {
    return {
      videoWebmSrc: appDownloadData.value.videoWebmSrcPad,
      videoMp4Src: appDownloadData.value.videoMp4SrcPad,
      poster: appDownloadData.value.posterPad
    }
  }
})
const softwareDisplayData = computed(() => softwareData.value.softwareDisplay)

const moreUseful = computed(() => softwareData.value.moreUseful)
const openSourceData = computed(() => softwareData.value.openSource)
const featuresData = computed(() => softwareData.value.features)
const featureTabsPanelOptions = computed(() => {
  const options: IOptions = {
    scrollTicky: false,
    tabs: []
  }
  featuresData.value.sections.forEach((v: any) => {
    options.tabs.push({tabLabel: v.title, slotName: v.title})
  })
  return options
}) 
const videoTutorialsData = computed(() => softwareData.value.videoTutorials)
const documentData = computed(() => softwareData.value.documents)

const isFoundVersion = ref(false)
const onFoundVerion = (foundVersion: boolean) => isFoundVersion.value = foundVersion

const videoWidth = ref(0)
const videoHeight = ref(0)
onMounted(() => {
    let result
    if (!isCN.value) {
      result = isMobile.value
        ? calcWH(375, 540, window.innerWidth, 540)
        : (!isPC.value ? calcWH(1024, 540, window.innerWidth, 1080) : calcWH(1920, 1080, window.innerWidth, 1080))
    } else {
      result = isMobile.value
        ? calcWH(2560, 884, window.innerWidth, 540)
        : (!isPC.value ? calcWH(2560, 884, window.innerWidth, 1080) : calcWH(2560, 884, window.innerWidth, 1080))
    }
    videoWidth.value = result.targetWidth
    videoHeight.value = result.targetHeight
})

</script>

<style lang="scss" scoped>


a {
  &:hover {
    color: white;
  }
}

.software-wrapper {
  background-color: $black;
}

.app-download-wrapper {
  position: relative;
  height: 1080px;
  z-index: 1;
  // overflow: hidden;
  @include tablet { height: 540px; }
  @include mobile { height: 540px; }
  // background-image: url(https://ditfjx9w4x3vl.cloudfront.net/assets/luban/pc/pic_top-bg-2560x884.jpg);
  // background-position: center;
  // background-size:  2560px 1080;
  .app-download, .view-port, .cover-layer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .app-download {
    top: 45%;
    width: 100%;
  }

  video, img {
    min-width: 1920px;
    min-height: 1080px;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    filter: blur(15px);
  }

  .cover-layer {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
}

.app-download-wrapper .app-download-bgimg-cn {
  background-position: center;
  background-size:  2560px 884px;
}


.software-display {
}

.open-source {
  background-color: #151617;
  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $black_white_5;
  }
  .snmk-primary-btn {
    margin-bottom: 70px;
  }
  .title-1 {
    margin-top: 70px;
  }

  .open-source-img {
    display: flex;
    align-items: center;
    margin-top: 4.583vw;
    margin-bottom: 4.583vw;
  }
}


.features {
  .snmk-container {
    // background:  #E1E7EA;
    color: white;
    padding-bottom: 120px;
  }

  .font-2 {
    color: $black_white_5;
  }
}
.features-content {
  min-height: 30vw;
}
.introduces {
  display: flex;
  justify-content: space-between;

}
.introduce {
  display: flex;
  flex-direction: column;
  // width: 15.635vw;
  width: calc((100% - 32px * 2) / 3);
  margin-right: 1.35vw;

  &:last-child {
    margin-right: 0;
  }
  img {
    border-radius: 2px;
  }
}

.documents {
  .title-3 {
    color: white;
  }
  .docs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .doc {
    width: 100%;
    border-bottom: 1px solid $black_white_2;
    text-align: left;


    a:hover {color: $blue;}
  }
  img {
    margin-top: 2vw;
    margin-bottom: 2vw;
  }

}

@media (min-width: $breakPoint_xl) and (max-width: $breakPoint_xxl) {
  .app-download-wrapper{
    height: 900px;
    video, img {
      min-width: 1600px;
      min-height: 900px;
    }
    // height: calc(100vw * (1080 / 1920));
    // video, img {
    //   min-width: 100vw;
    //   min-height: calc(100vw * (1080 / 1920));
    // }
  }
}
@media (min-width: 1280px) and (max-width : $breakPoint_xl) {
  .app-download-wrapper{
    height: 750px;
    video, img {
      min-width: 1333px;
      min-height: 750px;
    }
    // height: calc(100vw * (1080 / 1920));
    // video, img {
    //   min-width: 100vw;
    //   min-height: calc(100vw * (1080 / 1920));
    // }
    .app-download {
      top: 50%;
    }
  }
  // shit
  .features-content {
    min-height: 38vw;
  }
}
@media (min-width: $breakPoint_l) and (max-width : 1280px) {
  .app-download-wrapper{
    height: 750px;
    video, img {
      min-width: 1333px;
      min-height: 750px;
    }
    .app-download {
      top: 50%;
    }
  }
  // shit
  .features-content {
    min-height: 42vw;
  }
}


@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
  .app-download {
    background-position: center;
  }
  .open-source {
    .text-wrapper {
      margin-top: 6.835vw;
      margin-bottom: 6.835vw;
    }
  }

  .features .snmk-container{
    color: white;
    padding-bottom: 7vw;
  }


  .doc {
    margin-top: 6.66vw;
  }

}


@include mobile{
  .app-download-wrapper .app-download-bgimg {
    filter: blur(0);
    min-width: 375px;
    min-height: 540px;
    height: unset;
  }
  .open-source {
    margin-top: 40px;
  }
  .features .snmk-container{
    color: white;
    padding-bottom: 7vw;
  }

  .introduces {
    flex-direction: column;
  }
  .introduce {
    width: 100%;
    margin-top: 10.66vw;

    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-top: 0;
    }
  }

  .doc:last-child {
    margin-bottom: 60px;
  }
}

.no-bg {
  background-color: unset !important;
}
</style>


<style lang="scss">
.software-wrapper .pagination-bullet-active{
  width: 44px;
}
</style>
