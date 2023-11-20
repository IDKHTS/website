<template>
  <div class='modular-sys'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1" style="overflow: hidden;">
        <div class="page-title" v-html="dataSrc.title"></div>
        <div class="page-title-2 my-m" v-html="dataSrc.title2"></div>
        <div class="page-desc" v-html="dataSrc.desc"></div>
        <div class="img-box">
          <!-- <img v-lazy="isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc" :alt="dataSrc.title"> -->
          <NuxtImg :src='isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc' loading='lazy' :alt="dataSrc.title"></NuxtImg>
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
  title: `An evolving modular system. `,
  title2: `Powerful Controller`,
  desc: `Snapmaker 2.0 can support various tool heads, add-ons, multiple linear modules, and more features using simply one controller. Rather than adding more ports and make a bigger control board with tangled cables, we've upgraded our controller to expand your creativity by providing universal ports, multiport adapters, and a CAN Hub for adding additional CAN-bus ports.`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_An-evolving-modular-system.-3.jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_An-evolving-modular-system.-3.jpg`
}))

</script>


<style lang='scss' scoped>
@import '../common.scss';
.modular-sys {
  background-color: black;
  text-align: center;
  padding-block: 88px;

  @include mobile {
    padding-top: 28px;
  }
}
.img-box {
  width: 100%;
  background-color: transparent;
  padding-block: 40px;

  @include mobile {
    overflow-x: scroll;
    margin-top: 32px;
    padding-block: 32px;

    img {
      width: 800px;
      max-width: unset;
    }
  }
}

</style>
