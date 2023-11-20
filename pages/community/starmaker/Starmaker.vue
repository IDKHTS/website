<template>
  <div>
    <div class="hero-container" :style="{'background-image': `url('${topImg}')`}">
      <!-- <img :src="topImg" :alt="starmakerData.name"> -->
      <div class="hero-title c-black title-1 bold-700 text-center">{{starmakerData.name}}</div>
    </div>
    <template v-for="(dataSource, index) of dataSources" :key="dataSource.mainTitle">
      <Card class="mt-3xl display-block"
        :class="{'mb-3xl': index === dataSources.length-1}"
        :dataSource="dataSource"
        :needDateFormat="true"
      >
      </Card>
    </template>
  </div>
</template>

<script setup lang='ts'>
import { getStarmakers } from '@@/service/index'
import Card from '../common/Card.vue'
import head from '@@/resources/data/head'
import { useGlobalStore } from '~/stores'
import { storeToRefs } from 'pinia'

useHead(head.products)
const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const starmakerData = computed<any>(() => i18n.tm('starmakerData'))
const topImg = computed(() => !isMobile.value ? starmakerData.value.topImg : starmakerData.value.topMobileImg)

const dataSources = ref({})
onMounted(async () => {
  try {
    dataSources.value = (await getStarmakers()).data
  } catch(err) {
    console.warn(err)
  }
})

</script>

<style lang="scss" scoped>

.hero-container {
  position: relative;
  line-height: 0;
  height: 268px;
  width: 100%;

  background-size: 2560px 268px;
  background-position: center center;
}
.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
}

@include mobile {
  .hero-container {
    height: 156px;
    background-size: 680px 156px;
  }
}

@media (min-width: $breakPoint_xxxl) {
  .hero-container {
    height: 536px;
    background-size: 5120px 536px;
  }
}
</style>
