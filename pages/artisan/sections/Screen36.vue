<template>
  <div class="bg-black-1 h-client py-3xl">
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-center">
        <div class="page-title-1 page-title-color bold-700 mb-l" v-html="dataSrc.title"></div>
        <div class='title-4 mb-2xl' v-html='dataSrc.desc'></div>
      </div>
      <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 display-box"
        :class="{'snmk-col-offset-1 snmk-col-l-offset-1': index%2 === 0  }"
        v-for="(item, index) of dataSrc.displays" :key="item.text"
      >
        <div class="title-3 bold-700 p-xl" v-html="item.text"></div>
        <NuxtImg v-if="item.imgSrc" :src="isMobile ? item.imgSrcMob : item.imgSrc " :alt="isMobile ? item.mobAlt : item.alt" class="displays-img" loading='lazy'/>
        <video v-else-if="!isMobile"
          muted :poster="item.poster" autoplay
          preload='true' loop webkit-playsinline
          playsinline
          x5-video-player-type="h5-page"
        >
          <source :src="item.videoWebm">
          <source :src="item.videonMp4">
        </video>
        <NuxtImg v-else :src="item.gifSrc" :alt="isMobile ? item.mobAlt : item.alt" class="displays-img" loading='lazy'/>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())
</script>


<style scoped lang="scss">
@import '../theme.scss';

.display-box {
  background-color: #222222;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  line-height: 0;
  margin-top: 24px;
}

@include mobile{
  .display-box {
    margin-top: 16px;
    border-radius: 12px;
  }
}


</style>
<style>
.normal-text {
  color: #a1a1a1;
}
</style>
