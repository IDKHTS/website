<template>
  <div id="fb-root"></div>
  <!-- <Header></Header>
  <Footer></Footer> -->
  <NuxtLayout name='normal'>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang='ts'>
import { useGlobalStore } from '~/stores/index'
import { DeviceType } from '@@/constant/index'
import thirdPartyScripts from '@@/ThirdPartyScripts'

const device = useDeviceType()
const globalStore = useGlobalStore()
globalStore.$patch((state) => {
  state.device = device.value
  state.isMobile = device.value === DeviceType.MOBILE
})
const getDeviceType = () => {
  const width = window.innerWidth || document.body.clientWidth
  let deviceType = DeviceType.PC
  if (width < 768) {
    deviceType = DeviceType.MOBILE // pad
  } else if (width < 1200) {
    deviceType = DeviceType.TABLET
  } else {
    deviceType = DeviceType.PC
  }
  globalStore.$patch((state) => {
    state.device = deviceType
    state.isMobile = deviceType === DeviceType.MOBILE
  })
}

onBeforeMount(() => {
  if(!import.meta.env.SSR) {
    getDeviceType()
  } 
})
onMounted(() => {
  window.addEventListener('resize', getDeviceType)
})
onUnmounted(() => {
  window.removeEventListener('resize', getDeviceType)
})
// globalStore.$patch({device.value})


onMounted(() => {
  thirdPartyScripts()
});

</script>


<style scoped lang='scss'>
$blue: blue;

@media (max-width: $breakPoint_m) {
  .countdown-text-banner {
    margin-right: 3vw;
  }
  .countdown-item {
    width: 64px;
    height: 56px;
  }
}
.a {
  color: $blue;
}
</style>