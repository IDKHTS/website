<template>
  <div class='all-metal'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class="page-title" v-html="dataSrc.title"></div>
        <div class="page-desc" v-html="dataSrc.desc"></div>
      </div>
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1">
        <div class="img-box">
          <NuxtImg v-if='isMobile' :src="dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy'/>
          <video v-else
            muted autoplay
            :preload="'metadata'"
            loop webkit-playsinline
            playsinline
            x5-video-player-type="h5-page"
          >
            <source :src="dataSrc.videoSrc">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  title: `Snapmaker’s signature all-metal design.`,
  // title2: `Powerful Controller`,
  desc: `All the Snapmaker models are built to last. For Snapmaker 2.0 series, we pushed the boundaries of all-metal construction even further. All modules and major components are made of high-strength metal.`,
  // imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_An-evolving-modular-system.-3.jpg`,
  // imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_An-evolving-modular-system.-3.jpg`,
  videoSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/all-metal.webm`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/all-metal.webp`

}))


</script>


<style lang='scss' scoped>
@import '../common.scss';
.all-metal {
  background-color: black;
  text-align: center;
  padding-block: 188px;

  @include mobile {
    padding-block: 48px;
  }
}
.page-desc {
  margin-top: 16px;

  @include mobile {
    margin-top: 24px;
  }
}
.img-box {
  margin-top: 88px;
  line-height: 0;
  @include mobile {
    margin-top: 40px;
  }
}

</style>
