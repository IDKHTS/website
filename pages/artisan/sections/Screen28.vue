<template>
  <div class="bg-black-2 c-white h-client section-wrapper pos-relative" style="height: 100vh">
    <div class="bg-video" ref="adapter">
      <MediaViewAdapter
        :options="{
          gifSrc: dataSrc.gifSrc,
          videoWebm: dataSrc.videoWebm,
          videoMp4: dataSrc.videoMp4,
          videoOriginalWidth: 1920,
          videoOriginalHeight: 1080,
          imgOriginalWidth: 360,
          imgOriginalHeight: 480,
          alt: dataSrc.alt,
          mobAlt: dataSrc.mobAlt
        }"
      >
      </MediaViewAdapter>
    </div>
    <div v-if="!isMobile" class="text-cover opacity-gradient"></div>
    <div class="snmk-container dataSrc-wrapper z-10" ref="textContainer">
      <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1" data-aos="fade-up">
        <div class="title-1 bold-700 mb-m" v-html="dataSrc.title"></div>
        <div class="title-4" v-html="dataSrc.desc"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())
</script>


<style scoped lang="scss">
@import '../theme.scss';

.cover-box, .bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dataSrc-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}
.text-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(40%);
  height: 100%;
  z-index: 9;
}

.cover-box{
  background-color: rgba(0, 0, 0, 0.4);
}

@media (min-width: $breakPoint_xxxl) {
  .text-wrapper{
    left: calc(50% - 84px);
    width: 100%;
  }
}

@include mobile {
  .section-wrapper{
    display: flex;
    flex-direction: column-reverse;
  }


  .bg-video {
    position: static;
    margin-top: 28px;
    flex: 1 1 auto;
  }
  .dataSrc-wrapper {
    text-align: center;
    height: auto;
    position: static;
    padding-top: 40px;
    flex: 0 0 auto;
  }
}

</style>
