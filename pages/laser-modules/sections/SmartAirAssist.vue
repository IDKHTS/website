<template>
  <section class='bg-black'>
    <div class="snmk-container  text-center pos-relative">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <h1 class='first-title' v-html='dataSrc.firstTitle' ></h1>
        <h2 v-if='isMobile' class='secondary-title  mb-xl' v-html='dataSrc.title' ></h2>
      </div>
    </div>
    <div v-if='!isMobile' class='pos-relative'>
      <h2 class='secondary-title' v-html='dataSrc.title'></h2>
      <NuxtImg class='w-100' :src="dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy'/>
    </div>
    <div v-else>
      <NuxtImg class='w-100' :src="dataSrc.imgMobSrc" :alt="dataSrc.title" loading='lazy'/>
      <div class="snmk-container text-left">
        <div class="snmk-col-s-4 snmk-col-xs-4">
          <div class='saa-desc' v-html='dataSrc.desc'></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())
</script>

<style scoped lang='scss'>
@import '../theme.scss';
.first-title {
  margin-top: 90px;
  margin-bottom: 63px;

  @include mobile {
    margin-top: 48px;
    margin-bottom: 32px;
  }
}

@include no-mobile {
  .secondary-title {
    text-align: left;
    position: absolute;
    top: 72.1219%;
    left: 12.604%;
    width: 21.5104%;
  }
}

.saa-desc {
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 200% */
  margin-bottom: 55px;
}
</style>
