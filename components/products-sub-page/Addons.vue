<template>
  <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar" :withModal='true'></SubNavBar>
  <!-- <NuxtImg :src='dataSrc' :alt='' loadin='lazy'></NuxtImg> -->
  <section class="hero is-large" :style='{"background-image": `url(${bannerImg})`}' >
    <div class="hero-body">
    </div>
  </section>
  <div class='snmk-container'>
    <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
      <AddonSections v-for='(item, index) of dataSrc.addons' :data-src='item' :key='item.mainTitle' :isImgLeft='index % 2 === 0'></AddonSections>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import SubNavBar from '@@/components/SubNavBar.vue'
import AddonSections from './components/AddonSections.vue';
import { storeToRefs } from 'pinia'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())

const props = withDefaults(defineProps<{
  dataSrc: any
  subNavBar: ISubNavMenu
}>(), { dataSrc:{} })

const bannerImg = computed(() => !isMobile.value ? props.dataSrc.bannerImgSrc : props.dataSrc.bannerMobImgSrc) 

</script>
  
  
<style lang="scss" scoped>

</style>
  