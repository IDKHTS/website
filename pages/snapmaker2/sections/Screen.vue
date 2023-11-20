<template>
  <div class='screen'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class="page-title" v-html="dataSrc.title"></div>
        <div class="page-desc" v-html="dataSrc.desc"></div>
        <div class="img-list" v-if="!isMobile">
          <div class="img-box" v-for="img of dataSrc.displayList" :key="img">
            <NuxtImg class='w-100' :src="img" :alt="dataSrc.title" loading='lazy' />
          </div>
        </div>
        <div class="img-box" v-else>
          <NuxtImg class='w-100' :src="dataSrc.imgMobSrc" :alt="dataSrc.title" loading='lazy'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  title: `Smart 5" Touchscreen.`,
  desc: `Traditionally, machines like 3D printers, laser cutters and CNC routers didn't pay enough attention on HMI (Human Machine Interface). Snapmaker 2.0 comes with a smartphone-like touchscreen that simplifies the workflow of your daily projects, letting you manage the most-used tasks directly from the touchscreen.`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_Smart-5_-Touchscreen..jpg`,
  displayList: [`https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/PC_Smart-5_-Touchscreen.1.jpg`, `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_Smart-5_-Touchscreen.-2.jpg`
  ]
}))


</script>


<style lang='scss' scoped>
@import '../common.scss';
.screen {
  background-color: black;
  padding-block: 100px;
}

.page-desc {
  text-align: center;
  padding-block: 16px 64px;
  @include mobile {
    padding-block: 24px 32px;
  }
}
.img-list {
  display: flex;
  justify-content: space-between;
}
.img-box {
  width: calc((100% - 24px) /2);

  @include mobile {
    width: 100%;
  }
}
</style>
