<template>
    <Faq :subNavBar='laser10w' :faqTypeKey='FAQ_TYPE.Laserhead10W'></Faq>
</template>
  
  
<script setup lang='ts'>
import { FAQ_TYPE } from '@@/resources/data/faqType'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import Faq from '~/components/products-sub-page/Faq.vue';
const i18n = useI18n()
const laser10w = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').laser10w)
</script>
  
  
<style lang="scss" scoped>
</style>