<template>
  <InTheBox :subNavBar="subNavBar" :dataSrc="boxes"> </InTheBox>
</template>


<script setup lang='ts'>
import InTheBox from '@@/components/products-sub-page/InTheBox.vue'
import { storeToRefs } from 'pinia'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const ray = computed(() => i18n.tm('ray'))
const subNavBar = computed<ISubNavMenu>(() => {
  const data = i18n.tm('secondarynavbarData').ray
  data.mainTitle = isMobile.value ? data.mobMainTitle : data.mainTitle
  return data
})
const boxes = computed(() => ray.value.boxes)
</script>


<style lang="scss" scoped></style>