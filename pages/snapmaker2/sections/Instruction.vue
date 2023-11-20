<template>
  <div class='instructions'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class="page-title-2 text-center" v-html="dataSrc.title"></div>
        <div class="img-box">
          <NuxtImg class='w-100' :src="isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy' />
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
  title: `Step-by-step instructions all at hand.`,
  // desc: `Snapmaker 2.0 Modular 3-in-1 3D Printer unlocks your full creative potential, from 3D printing to laser engraving, cutting, and CNC carving. Smarter, faster, larger, and more powerful than ever before, it is a new generation of 3-in-1 3D printer that comes with everything you need.`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Step-by-step-instructions-all-at-hand..jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/instruction.jpg`

}))

</script>


<style lang='scss' scoped>
@import '../common.scss';
.instructions {
  background-color: black;
  padding-top: 140px;

  @include mobile {
    padding-top: 100px;
    padding-bottom: 40px;
  }
}

.img-box {
  margin-top: 70px;
  line-height: 0;

  @include mobile {
    overflow: scroll;
    padding-bottom: 22px;
    img {
      max-width: unset;
      width: 695px;
    }
  }
}
</style>
