<template>
  <div :class="{'snmk-container-no-mr': !isMobile, 'snmk-container-no-mx mt-l': isMobile}">
    <div class='snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 lr-container'>
      <div class='lr-title comp-title-color' v-if="dataSrc.title" v-html='dataSrc.title'></div>
      <div class='lr-desc' v-html='dataSrc.desc'></div>
      <div class='mt-l' v-if='!isMobile'>
        <a class='snmk-link' :href="dataSrc.videoLink" target='_blank' v-html='dataSrc.videoBtnTex + ">"'></a>
      </div>
    </div>
    <div class='lr-img'>
      <NuxtImg class='w-100' :src="isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy' />
    </div>
    <div class='text-center py-l' :style='{paddingBottom: isMobile ? "48px" : ""}' v-if='isMobile'>
      <a class='snmk-primary-btn' :href="dataSrc.videoLink" target='_blank' v-html='dataSrc.videoBtnTex'></a>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed<any>(() => ({
  desc: `We introduce industrial-grade transmission technology to desktop fabrication—steel guiderails made by CNC grinding at micron level are embedded in Artisan's linear modules. This leads to a significant raise in precision, rigidity and durability, bringing you a fast, accurate and steady making experience.`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/Linear-Rails.jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/web_Snapmaker's-Signature-Industrial-grade-Linear-Rails.jpg`,
  videoLink: 'https://youtu.be/w8chlIAnpCI?si=kUk96K4zMfEVzglW',
  videoBtnTex: 'Learn More'
}))

</script>

<style lang="scss" scoped>
.lr-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .snmk-link {
    font-weight: 700;
    color: $blue;
    &::after {
      background-color: $blue;
    }
  }

  @include mobile {
    padding-inline: 8px;
  }
}

.lr-title {
  font-family: Roboto;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 127.273% */
  letter-spacing: -0.24px;
  margin-bottom: 16px;

  @include mobile {
    text-align: center;
    margin-inline: 18px;
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 18px;
  }
}
.lr-desc {
  color: var(--unnamed, #5C5C5C);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @include mobile {
    text-align: center;
  }
}

.lr-img {
  width: 100%;
  line-height: 0;
  margin-top: 24px;
  flex: 1 1;
  display: flex;
  align-items: center;
}

</style>
