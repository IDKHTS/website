<template>
  <div class="countdown-text-banner">
      <div class="countdown-item" id="countdown-day-banner" :style="{backgroundImage: `url(${dayImg})`}"></div>
      <div class="countdown-item" id="countdown-hour-banner" :style="{backgroundImage: `url(${hourImg})`}"></div>
      <div class="countdown-item" id="countdown-minute-banner" :style="{backgroundImage: `url(${minuteImg})`}"></div>
      <div class="countdown-item" id="countdown-second-banner" :style="{backgroundImage: `url(${secondImg})`}"></div>
  </div>
</template>


<script setup lang='ts'>
import countdownPlatform from '@@/resources/js/countdownPlatform'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  end?: Date
}>(), { end: new Date() })
const { isMobile, device } = storeToRefs(useGlobalStore())

const timer = ref(0)
const dayImg = computed(() => {
  return isMobile.value ? 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/count-down/pc/christmas-days.png' : 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/count-down/pc/christmas-days.png'
})
const hourImg = computed(() => {
  return isMobile.value ? 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/count-down/pc/christmas-hours.png' : 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/count-down/pc/christmas-hours.png'
})
const minuteImg = computed(() => {
  return isMobile.value ? 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/count-down/pc/christmas-minutes.png' : 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/count-down/pc/christmas-minutes.png'
})
const secondImg = computed(() => {
  return isMobile.value ? 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/count-down/pc/christmas-seconds.png' : 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/count-down/pc/christmas-seconds.png'
})

onMounted(() => {
  timer.value = countdownPlatform(props.end)
})
onBeforeUnmount(() => {
    if (timer.value) {
      window.clearInterval(timer.value)
    }
})
</script>

<style scoped lang="scss">
@import "@@/resources/scss/variable.scss";

.countdown-text-banner {
  display: flex;
  justify-content: center;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  // margin-left: 5vw;
  margin-right: 7.5vw;
 .countdown-item  {
    width: 4.42vw ;
    height: 4.42vw ;
    line-height: normal;
    font-size: 2.4vw ;
    margin-left: 0.8vw;

    border-radius: 7px;
    background-size: 100%;
    background-repeat: no-repeat;
    font-family: Roboto-Bold;
    font-weight: bold;
    color: #E7163D;

    &:first-child{
      margin-left: 0;
    }
  }
  @media (max-width: 767px) {
    .countdown-text-banner {
      margin-right: 3vw;
    }
    .countdown-item {
      width: 8vw ;
      height: 8vw ;
      line-height: normal;
      font-size: 4.8vw ;
      margin-left: 2vw;
      border-radius: 4px;

      &:first-child{
        margin-left: 8vw;
      }
    }
  }
}

</style>
