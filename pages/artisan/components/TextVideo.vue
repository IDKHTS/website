<template>
  <div class="text-video bg-black-2 c-white section-wrapper pos-relative" :style="{'min-height': `${viewerOptions.useViewer && isMobile ? '' : 'unset'}`}">
    <div class="snmk-container vertical-center" :class="{'h-client': viewerOptions.useViewer}" ref="textContainer">
      <template v-if="isVideoLeft">
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4" style="height: 0">
          <div ref="widthEl" class="w-100"></div>
        </div>
        <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4" :class='{"text-center": isMobile}'>
          <div class="title-1 bold-700 mb-m" v-html="dataSrc.title"  :data-aos="useAos ? 'fade-up' : ''"></div>
          <div class="title-4" v-html="dataSrc.desc" :data-aos="useAos ? 'fade-up' : ''" :data-aos-delay="useAos ? '300' : ''"></div>
        </div>
      </template>
      <template v-else>
        <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1" :class='{"text-center": isMobile}'>
          <div class="title-1 bold-700 mb-m" v-html="dataSrc.title" :data-aos="useAos ? 'fade-up' : ''"></div>
          <div class="title-4" v-html="dataSrc.desc"  :data-aos="useAos ? 'fade-up' : ''" :data-aos-delay="useAos ? '300' : ''"></div>
        </div>
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4" style="height: 0">
          <div ref="widthEl" class="w-100"></div>
        </div>
      </template>
    </div>
    <div :class="{'img-box': viewerOptions.useViewer, 'no-viewer': !viewerOptions.useViewer}" ref="adapter" :style="imgBoxStyle">
      <template v-if='viewerOptions.useViewer'>
        <MediaViewAdapter v-if="!dataSrc.imgSrc"
          :options="{
            isAutoHeigh: isMobile,
            gifSrc: dataSrc.gifSrc,
            videoWebm: dataSrc.videoWebm,
            videoMp4: dataSrc.videoMp4,
            videoOriginalWidth: viewerOptions.videoOriginalWidth,
            videoOriginalHeight: viewerOptions.videoOriginalHeight,
            imgOriginalWidth: viewerOptions.imgOriginalWidth,
            imgOriginalHeight: viewerOptions.imgOriginalHeight,
            alt: dataSrc.alt,
            mobAlt: dataSrc.mobAlt
          }"
          @adapterHeight="adapterHeight"
        >
        </MediaViewAdapter>
        <MediaViewAdapter v-else
          :options="{
            imgSrc: isMobile ? dataSrc.imgSrcMob : dataSrc.imgSrc,
            alt: dataSrc.alt,
            mobAlt: dataSrc.mobAlt
          }"
        >
        </MediaViewAdapter>
      </template>
      <template v-else>
        <video v-if="!dataSrc.imgSrc"
          muted
          autoplay
          x-webkit-airplay="allow"
          playsinline="true"
          x5-playsinline="true"
          webkit-playsinline="true"
          x5-video-player-fullscreen="true"
          x5-video-player-type="h5"
          x5-video-orientation="portraint"
          loop
          class='w-100'
          ref="assetEl"
        >
          <source :src='dataSrc.videoWebm'>
          <source :src='dataSrc.videoMp4'>
        </video>
        <img v-else class='w-100' ref="assetEl" :src="isMobile ? dataSrc.imgSrcMob : dataSrc.imgSrc" alt="">
      </template>
    </div>
    <!-- TODO: If the following code is missing, it will result in the styles not taking effect. -->
    <div style='display: none;'>{{ imgBoxStyle }}</div>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import _ from 'lodash'
import $ from '@@/resources/js/jquery-vendor'

const props = withDefaults(defineProps<{
  dataSrc: any
  isVideoLeft?: boolean
  useAos?: boolean
  viewerOptions?: any
}>(), { dataSrc: {}, isVideoLeft: false, useAos: true, viewerOptions: {
  useViewer: true,
  videoOriginalWidth: 1080,
  videoOriginalHeight: 720,
  imgOriginalWidth: 720,
  imgOriginalHeight: 960
}})
const { isMobile } = storeToRefs(useGlobalStore())

const widthEl = ref()
const textContainer = ref()
const adapter = ref()
const assetEL = ref()
const imgViewWidth = ref(0)
const imgBoxStyle = reactive<any>({})
const adapterHeight = async (height: number) => {
  imgBoxStyle.height = height + 'px'
}
const imgAdapteWidth =  async () => {
  const el = widthEl.value
  const pcWidth = props.isVideoLeft ? (el.getBoundingClientRect().right - 80) : (window.innerWidth - el.getBoundingClientRect().left - 100 + 17)
  imgViewWidth.value = isMobile.value ? window.innerWidth : pcWidth
  imgBoxStyle.width = imgViewWidth.value + 'px'
}
const setHeight =  () => {
  if (!isMobile.value || !!imgBoxStyle.height) return
  const text = textContainer.value
  // const textH = $(text).outerHeight(true)
  // adapter.value.style.height = `${window.innerHeight - textH - $(adapter.value).outerHeight(true) + $(adapter.value).height()}px`
  
  if (!props.viewerOptions.useViewer && !isMobile.value) {
    const el = assetEL.value
    setTimeout(() => {
      // el.style.height = `${$(el).outerHeight(true) + $(el).height()}px`
      // text.style.height = `${$(el).outerHeight(true) + $(el).height()}px`
      if ((el.videoHeight === 0 || el.videoWidth === 0)) {
        el.style.height = `${960 / 1140 * imgViewWidth.value}px`
        text.style.height = `${960 / 1140 * imgViewWidth.value}px`

        el.addEventListener('canplaythrough', () => {
          el.style.height = `${((el.videoHeight / el.videoWidth) || (960 / 1140)) * imgViewWidth.value}px`
          text.style.height = `${((el.videoHeight / el.videoWidth) || (960 / 1140)) * imgViewWidth.value}px`
        })
      } else {
        el.style.height = `${el.videoHeight / el.videoWidth * imgViewWidth.value}px`
        text.style.height = `${el.videoHeight / el.videoWidth * imgViewWidth.value}px`
      }
    }, 1000)
  } else if (props.viewerOptions.useViewer) {
    const textH = $(text).outerHeight(true)
    adapter.value.style.height = `${window.innerHeight - textH - $(adapter.value).outerHeight(true) + $(adapter.value).height()}px`
  }
}
const initVideo = _.throttle(() => { imgAdapteWidth(); setHeight() }, 100)
onMounted(() => {
    props.isVideoLeft ? (imgBoxStyle.left = 0) : (imgBoxStyle.right = 0)
    initVideo()
    window.addEventListener('resize', initVideo)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', initVideo)
})

</script>


<style scoped lang="scss">
.img-box {
  height: 100vh;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
@include no-mobile {
  .no-viewer {
    position: absolute;
    right: 0;
    top: 0;
  }
}
@include mobile{
  .section-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .img-box {
      position: static;
      height: 100%;
      margin-top: 28px;
      flex: 1 1 auto;
    }
    .snmk-container {
      height: unset;
      min-height: unset;
      margin-top: 40px;
      flex: 0 0 auto;
    }
  }
  .no-viewer {
    line-height: 0;
    margin-top: 32px;
  }
}
</style>
