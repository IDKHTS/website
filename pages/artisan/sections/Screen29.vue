<template>
  <div class="dataSrc">
    <div class="snmk-container font-bw-1">
      <!-- <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-3 snmk-col-xs-3 snmk-col-offset-1 snmk-col-l-offset-1" data-aos="fade-up">
        <div class="pages-title-2 bold-700 mb-m" v-html="dataSrc.title"></div>
        <div class="title-4" style="color: #86868B;" v-html="dataSrc.desc"></div>
      </div> -->
      <div class="snmk-col-7 snmk-col-l-7 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 asset-box mt-3xl"  data-aos="fade-up">
        <MediaViewAdapter
          :options="{
            isAutoHeigh: true,
            gifSrc: dataSrc.displays[0].gifSrc,
            videoWebm: dataSrc.displays[0].videoWebm,
            videoMp4: dataSrc.displays[0].videoMp4,
            videoOriginalWidth: 1920,
            videoOriginalHeight: 1080,
            alt: dataSrc.displays[0].alt,
            mobAlt: dataSrc.displays[0].mobAlt
          }"
        >
        </MediaViewAdapter>
      </div>
      <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 vertical-center" :class="{' mt-3xl': !isMobile, 'mt-s': isMobile}">
        <div class="title-3 bold-700" v-html="dataSrc.displays[0].text" data-aos="fade-up"></div>
      </div>
      <div v-if="!isMobile" class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 vertical-center  mt-3xl">
        <div class="title-3 bold-700" v-html="dataSrc.displays[1].text" data-aos="fade-up"></div>
      </div>
      <div class="snmk-col-7 snmk-col-l-7 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4 mt-3xl asset-box"  data-aos="fade-up">
        <MediaViewAdapter
          :options="{
            isAutoHeigh: true,
            imgOriginalWidth: 930,
            imgOriginalHeight: 534,
            imgSrc: isMobile ? dataSrc.displays[1].imgSrcMob : dataSrc.displays[1].imgSrc,
            alt: dataSrc.displays[1].alt,
            mobAlt: dataSrc.displays[1].mobAlt
          }"
        />
      </div>
      <div v-if="isMobile" class="snmk-col-s-4 snmk-col-xs-4 mt-s" data-aos="fade-up">
        <div class="title-3 bold-700" v-html="dataSrc.displays[1].text"></div>
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
.dataSrc {
  margin-top:  8.333vw;
  margin-bottom:  8.333vw;
}

.asset-box {
  &::v-deep .view-port{
    border-radius: 12px;
    overflow: hidden;
  }
}


</style>

<style>
.nor-text {
  color: #b7b7b7;
}
</style>
