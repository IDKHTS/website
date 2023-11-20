<template>
  <div>
    <div class="hero-container" :style="{ 'background-image': `url('${topImg}')` }">
      <!-- <img :src="topImg" :alt="contestsData.name"> -->
      <div class="hero-title c-black title-1 bold-700 text-center">{{ contestsData.name }}</div>
    </div>
    <template v-for="(dataSource, index) of dataSources" :key="dataSource.mainTitle">
      <Card class="mt-3xl display-block" :class="{ 'mb-3xl': index === dataSources.length - 1 }" :dataSource="dataSource"
        :hasBtn="true">
      </Card>
    </template>
  </div>
</template>

<script setup lang='ts'>
import Card from '../common/Card.vue'
import { getContests } from '@@/service/index'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const contestsData = computed<any>(() => i18n.tm('contestsData'))
const topImg = computed(() => !isMobile.value ? contestsData.value.topImg : contestsData.value.topMobileImg)

const dataSources = ref([])
onMounted(async () => {
  const resp = await getContests()
  dataSources.value = resp.data.filter((contest: any) => {
    if (contest.end === 1671120000000) {
      contest.isDeffLink = true
      contest.orgRoute = '/events/gifting-with-snapmaker'
    }
    const now = new Date()
    return typeof contest.isAlive !== 'undefined' || now >= contest.start
  })
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

@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {}

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
