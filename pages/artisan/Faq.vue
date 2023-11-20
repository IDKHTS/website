<template>
    <Faq :subNavBar='subNavBar' :faqTypeKey='"faqArtisan"'></Faq>
</template>
  
  
<script setup lang='ts'>
import { ISubNavMenu } from '~/components/SubNavBar/type';
import Faq from '~/components/products-sub-page/Faq.vue';
const i18n = useI18n()
const subNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').artisan)
</script>
  
  
<style lang="scss" scoped>
.snapmaker2 {
    &:deep(.hero-body){
        padding-top: 200px;
        padding-bottom: 200px;
    }
}

</style>