<template>
  <div class="bg-black-2 c-white section-wrapper pos-relative"
    :class="{'no-full-page': !isFullPage, 'h-client': !isMobile || !isImgMobAutoHeigh}"
    :style="{height: !isMobile || !isImgMobAutoHeigh ?  isFirstScreen ? 'calc(100vh - 60px)' : '100vh' : 'auto'}"
  >
    <div class="bg-video" ref="adapter" :style="{'overflow': isImgMobAutoHeigh ? 'unset' : ''}">
      <MediaViewAdapter v-if="!isImg"
        :options="{
          gifSrc: screen.gifSrc,
          videoWebm: screen.videoWebm,
          videoMp4: screen.videoMp4,
          videoOriginalWidth: 1920,
          videoOriginalHeight: 1080,
          alt: screen.alt,
          mobAlt: screen.mobAlt,
        }"
      >
      </MediaViewAdapter>
      <MediaViewAdapter v-else
        :options="{
          isAutoHeigh: isImgMobAutoHeigh,
          imgSrc: isMobile ? screen.imgSrcMob : screen.imgSrc,
          alt: screen.alt,
          mobAlt: screen.mobAlt,
        }"
      >
      </MediaViewAdapter>
    </div>
    <div class="cover-box" v-if="!isImg"></div>
    <div class="snmk-container text-center text-wrapper vertical-center" ref='textContainer' v-if="!isCustomText">
      <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-offset-1" data-aos="fade-up">
        <div class="big-title-2 bold-700 mb-m page-title-color" v-html="screen.title"></div>
        <div class="title-4 bold-500" v-html="screen.desc"></div>
      </div>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import $ from '@@/resources/js/jquery-vendor'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const props = withDefaults(defineProps<{
  screen: any
  isFirstScreen?: boolean
  isFullPage?: boolean
  isImgMobAutoHeigh?: boolean
  isCustomText?: boolean
  isImg?: boolean
  mobileVideo?: boolean
}>(), { screen: {} })

const { isMobile } = storeToRefs(useGlobalStore())
const textContainer = ref()
const adapter = ref()
const setHeight = () => {
  if(!textContainer.value || !adapter.value) return
  // const text = this.$refs['text-container']
  // const adapter = this.$refs['adapter']
  const textH = $(textContainer.value).outerHeight(true)
  adapter.value.style.height = `${window.innerHeight - textH - $(adapter.value).outerHeight(true) + $(adapter.value).height()}px`
}
onMounted(() => isMobile.value && setHeight())


</script>


<style scoped lang="scss">
// @import '../theme.scss';

.cover-box, .bg-video, .text-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text-wrapper {
  position: relative;
  width: unset;
}

.cover-box{
  background-color: rgba(0, 0, 0, 0.4);
}
@include mobile {

  .no-full-page {
    display: flex;
    flex-direction: column-reverse;
    .bg-video {
      position: relative;
      height: 100%;
      // margin-top: 48px;
      flex: 1 1 auto;
      overflow: hidden;
    }
    .snmk-container {
      height: unset;
      min-height: unset;
      // margin-top: 40px;
      flex: 0 0 auto;
    }
  }
}


@media (min-width: $breakPoint_xxxl) {
  .text-wrapper{
    left: calc(50% - 84px);
    width: 100%;
  }
}

</style>
