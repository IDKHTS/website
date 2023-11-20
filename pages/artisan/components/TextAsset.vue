<template>
  <div class="text-video bg-black-2 c-white section-wrapper pos-relative">
    <div class="snmk-container vertical-center py-3xl" ref="text-container">
      <template v-if='!isAssetLeft'>
        <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-offset-1" :style='{"padding-right": isMobile ? "" : "48px"}' >
          <div class="title-1 bold-700 mb-m" :class="{'text-center': isMobile}" v-html="dataSrc.title"></div>
          <div class="title-4" v-html="dataSrc.desc" ></div>
        </div>
        <div class="snmk-col-1 snmk-col-l-1 snmk-col-m-1"></div>
        <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 pos-relative" :class="{'mt-m': isMobile}">
          <template v-if='dataSrc.videoWebm || dataSrc.videonMp4'>
            <template v-if='!isMobile'>
              <video :ref="videoMap"
                muted :poster="dataSrc.poster" :autoplay="!videoManuallyPlay"
                :preload="'metadata'"
                :loop='!videoManuallyPlay' webkit-playsinline
                playsinline
                x5-video-player-type="h5-page"
              >
                <source :src="dataSrc.videoWebm">
                <source :src="dataSrc.videonMp4">
              </video>
              <div class="play-controller" v-show="!isVideoPlaying" @click="playVideo()">
                <div class="play">
                  <span class="iconfont" >&#xe612;</span>
                </div>
              </div>
            </template>
            <template v-else>
              <NuxtImg class='w-100' :src="dataSrc.gifSrc" :alt="dataSrc.title" loading='lazy'/>
            </template>
          </template>
          <template v-else>
            <NuxtImg class='w-100' :src="!isMobile ? dataSrc.imgSrc : dataSrc.imgMobSrc" :alt="dataSrc.title" loading='lazy'/>
          </template>
        </div>
        <!-- <div v-if='isMobile' class="snmk-col-s-4 snmk-col-xs-4">
          <div class="title-4 ta-desc" v-html="dataSrc.desc" ></div>
        </div> -->
      </template>
      <template v-else>
        <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 pos-relative"
          :style="{order: isMobile ? 1 : 0}"
          :class="{'mt-m': isMobile}"
        >
          <template v-if='dataSrc.videoWebm || dataSrc.videonMp4'>
            <template v-if='!isMobile'>
              <video :ref="videoMap"
                muted :poster="dataSrc.poster" :autoplay="!videoManuallyPlay"
                :preload="'metadata'"
                :loop='!videoManuallyPlay' webkit-playsinline
                playsinline
                x5-video-player-type="h5-page"
              >
                <source :src="dataSrc.videoWebm">
                <source :src="dataSrc.videonMp4">
              </video>
              <div class="play-controller" v-show="!isVideoPlaying" @click="playVideo()">
                <div class="play">
                  <span class="iconfont" >&#xe612;</span>
                </div>
              </div>
            </template>
            <template v-else>
              <NuxtImg class='w-100' :src="dataSrc.gifSrc" :alt="dataSrc.title"  loading='lazy'/>
            </template>
          </template>
          <template v-else>
            <NuxtImg class='w-100' :src="!isMobile ? dataSrc.imgSrc : dataSrc.imgMobSrc" :alt="dataSrc.title" loading='lazy'/>
          </template>
        </div>
        <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4"  :style='{"padding-left": isMobile ? "" : "48px"}'>
          <div class="title-1 bold-700 mb-m" :class="{'text-center': isMobile}" v-html="dataSrc.title"></div>
          <div v-if='!isMobile' class="title-4" v-html="dataSrc.desc" ></div>
        </div>
        <div v-if='isMobile' class="snmk-col-s-4 snmk-col-xs-4" style="order: 2">
          <div class="title-4 ta-desc" v-html="dataSrc.desc"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'


const props = withDefaults(defineProps<{
  dataSrc: any
  isAssetLeft?: boolean
  videoManuallyPlay?: boolean
  useAos?: boolean
  compId?: string
}>(), { dataSrc: {}, isAssetLeft: false, videoManuallyPlay: false, useAos: true, compId: '' })
const { isMobile } = storeToRefs(useGlobalStore())

const videoEl = ref()
const videoMap = (el: any) => videoEl.value = el
const isVideoPlaying = ref(!props.videoManuallyPlay)
const initVideo = () => {
  if (!videoEl.value) return
  videoEl.value.addEventListener('ended', () => {
    // videoEl.value.currentTime = 0
    videoEl.value.pause()
    isVideoPlaying.value = false
  })
}
const playVideo = () => {
  const video = videoEl.value
  if (!video) return
  video.currentTime = 0
  video.play()
  isVideoPlaying.value = true
}
onMounted(() => {
  initVideo()
  if (!videoEl.value || !videoEl.value.src) {
    setTimeout(() => {
      initVideo()
    }, 2000)
  }
})

</script>


<style scoped lang="scss">
@import '../theme.scss';
.img-box {
  height: 100vh;
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
    min-height: 50vh;
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
.play-controller {
  cursor: pointer;
  position: absolute;
  // left: 11.49%;
  // top: 6.190%;
  // width: 77.01%;
  // height: 82.779%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;

  .play {
    $len: 80px;
    width: $len;
    height: $len;
    font-size: 28px;
    background: rgba(12, 99, 226, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.25s ease;
    cursor: pointer;
  }

  &:hover .play , .play:active  {
    $len: 64px;
    width: $len;
    height: $len;
    font-size: 22.4px;
  }

  .iconfont {
    margin-left: 4px;
  }
}

.ta-desc {
  margin-top: 30px;
  text-align: center;
}
</style>
