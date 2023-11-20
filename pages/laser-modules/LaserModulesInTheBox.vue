<template>
  <InTheBox :subNavBar="subNavBar" :dataSrc="boxes"></InTheBox>
</template>

<script setup lang='ts'>
import InTheBox from '@@/components/products-sub-page/InTheBox.vue'
const i18n = useI18n()
const subNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').laserModules)
const boxes = computed(() => i18n.tm('laserModules').boxes)
</script>


<style lang="scss" scoped></style>
