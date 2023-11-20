<template>
  <div class="section-wrapper py-3xl" style="position: relative">
    <div class="snmk-container section-text-box">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-center pos-relative">
        <div class='mef-title' v-html='dataSrc.title'></div>
        <div class='mef-desc mt-l mb-xl' v-html='dataSrc.desc'></div>
      </div>
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1 line-h-0">
        <!-- <img v-lazy="isMobile ? dataSrc.imgSrc : dataSrc.imgMobSrc" alt=""> -->
        <MediaViewAdapter videoOriginalWidth v-if='!isMobile'
          :options="{
            isAutoHeigh: true,
            videoWebm: dataSrc.videoWebm,
            videoMp4: dataSrc.videoMp4,
            videoOriginalWidth: 852,
            videoOriginalHeight: 590,
            gifSrc: dataSrc.gifSrc,
            alt: dataSrc.alt,
            mobAlt: dataSrc.mobAlt
          }"
        >
        </MediaViewAdapter>
      </div>
    </div>
    <MediaViewAdapter videoOriginalWidth v-if='isMobile'
      :options="{
        isAutoHeigh: true,
        imgOriginalWidth: 375,
        imgOriginalHeight: 458,
        gifSrc: dataSrc.gifSrc,
        alt: dataSrc.alt,
        mobAlt: dataSrc.mobAlt
      }"
    >
    </MediaViewAdapter>
  </div>
</template>


<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'


const props = withDefaults(defineProps<{
  dataSrc: any
  screenId?: string
}>(), { dataSrc: {}, screenId: 'safe-sound' })
const { isMobile } = storeToRefs(useGlobalStore())


</script>

<style scoped lang="scss">
.section-wrapper {
  background-color: black;
}
@import '../theme.scss';
.mef-title {
  color: var(--White, #FFF);
  font-family: Roboto;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 127.273% */
  letter-spacing: -0.24px;

  @include mobile {
    font-size: 28px;
    line-height: 36px;
  }
}
.mef-desc {
  color: var(--White, #FFF);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
}

</style>
