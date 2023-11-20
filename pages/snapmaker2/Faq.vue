<template>
    <Faq :subNavBar='snapmakerATNavBar' :faqTypeKey='FAQ_TYPE.snapmaker2'></Faq>
</template>
  
  
<script setup lang='ts'>
import { FAQ_TYPE } from '@@/resources/data/faqType'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import Faq from '~/components/products-sub-page/Faq.vue';
const i18n = useI18n()
const snapmakerATNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').snapmakerAT)
</script>
  
  
<style lang="scss" scoped>
.snapmaker2 {
    &:deep(.hero-body){
        padding-top: 200px;
        padding-bottom: 200px;
    }
}

</style>