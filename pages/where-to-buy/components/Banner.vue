<template>
  <div class='pos-relative'>
    <div class='line-h-0' v-if='isMobile'>
      <img class='w-100' :src="isMobile ? dataSrc.bgImgMobSrc  : dataSrc.bgImgSrc" alt="">
    </div>
    <div v-else class="banner-img-container" :style="{'background-image': `url(${isMobile ? dataSrc.bgImgMobSrc  : dataSrc.bgImgSrc})` }"></div>

    <div class='text-container'>
      <div class='snmk-container'>
        <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
          <div class='banner-title' v-html='dataSrc.title'></div>
          <div class='banner-desc mt-l' v-html='dataSrc.desc'></div>
          <div v-if='dataSrc.desc2' class='banner-desc mt-l' v-html='dataSrc.desc2'></div>
          <Navigate v-if='dataSrc.btn' :aLink="dataSrc.btn.link" :route="dataSrc.btn.route" target='_blank' class='snmk-primary-btn'>
            {{ dataSrc.btn.text }}
          </Navigate>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class=''
  :style="{'background-image': `url('${fullViewImg}')`,'background-size': `${fullViewImgWidth}px ${fullViewImgHeight}px`}">
    <div class='text-container'>
      <div v-html='dataSrc.title'></div>
      <div v-html='dataSrc.desc'></div>
    </div>
  </div> -->
</template>


<script setup lang='ts'>
import Navigate from '~/components/Navigate.vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const props = defineProps<{
  dataSrc: any
}>()
const { isMobile } = storeToRefs(useGlobalStore())

</script>

<style scoped lang='scss'>

.banner-img-container {
  width: 100vw;
  height: 22.91vw;
  min-height: 440px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 1920px 440px;
  @media (min-width: $breakPoint_xxl) {
    background-size: 100% 100%;
  }

  @include mobile {
    width: 100vw;
    height: 133.33vw;
    background-size: 100%;
  }
}
.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;

  :deep(.snmk-primary-btn) {
    margin-top: 47px;
    @include mobile { margin-top: 18px; }
    padding: 12px 30px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    &:hover {
      color: white;
    }
  }
}
.banner-title {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */

  text-align: center;
  letter-spacing: -0.24px;

  color: #EDB665;
}
.banner-desc {
  width: 627px;
  margin: auto;
  margin-top: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  color: #FFFFFF;
}

@include mobile {
  .banner-title {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
  }
  .banner-desc {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    margin-top: 12px;
  }
}

</style>

<style>
  
.bg-grey .banner-desc  a:hover {
  color: #0C63E2;
}
</style>
