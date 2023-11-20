<template>
  <div class='academy'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-center">
        <div class="page-title" v-html="dataSrc.title"></div>
        <div class="page-desc" v-html="dataSrc.desc"></div>
        <div v-if='!isMobile' class="img-box">
          <NuxtImg class="w-100" :src="isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc" :alt="dataSrc.title"  loading='lazy' />
        </div>
        <div class='academy-links'>
          <a v-for='link of dataSrc.links' :key='link.text' class='academy-link' v-html='link.text' target='_blank' :href='link.link'></a>
        </div>
      </div>
    </div>
    <div v-if='isMobile' class="img-box">
      <NuxtImg class="w-100" :src="isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy' />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  title: `Elevate your skills with tutorials and guides.`,
  desc: `From theoretical knowledge to step-by-step tutorials on using your Snapmaker, we prepared everything you need on your way to mastery of creating.`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/PC_--Snapmaker-Academyv2.jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_Snapmaker-Academyv2.jpg`,
  links: [
    { text: 'Snapmaker Academy', link: 'https://support.snapmaker.com/hc/en-us/categories/360003536313-Snapmaker-Academy' },
    { text: 'Tutorial', link: 'https://support.snapmaker.com/hc/en-us/categories/12964041494935' }

  ]
}))
</script>


<style lang='scss' scoped>
@import '../common.scss';
.academy {
  background-color: white;
  padding-top: 140px;
  padding-bottom: 60px;
}
.page-desc {
  margin-top: 16px;
  margin-bottom: 48px;

  @include mobile {
    margin-bottom: 32px;
    text-align: center;
    color: var(--unnamed, #5C5C5C);
  }
}
.academy-links {
  display: flex;
  justify-content: space-between;

  .academy-link {
    width: 50%;
    color: var(--unnamed, #1F1F1F);
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
    letter-spacing: -0.24px;

    @include mobile {
      font-size: 16px;
    }
  }
}

</style>
