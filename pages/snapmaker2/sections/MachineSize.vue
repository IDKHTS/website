<template>
  <div class='machine-size'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class="page-title" v-html="dataSrc.title"></div>
      </div>
      <!-- <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 line-h-0">
        <img v-lazy="isMobile ? dataSrc.imgMobSrc :dataSrc.imgSrc">
      </div> -->
    </div>
    <NuxtImg class='w-100' :src="isMobile ? dataSrc.imgMobSrc :dataSrc.imgSrc" />
    <div class='snmk-container'>
      <div v-if="!isMobile" class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-offset-1 snmk-col-l-offset-1 mz-list">
        <div class="mz-img line-h-0" v-for="item of dataSrc.displayList" :key="item.dataSrc" >
          <NuxtImg class="" :src="item.imgSrc" loading='lazy'/>
        </div>
      </div>
      <div v-else class="snmk-col-s-4 snmk-col-xs-4 mz-list">
        <SwiperActiveProgress id='machine-size' :options="swiperOptions">
          <div class="swiper-slide" v-for="item of dataSrc.displayList" :key="item.dataSrc" >
            <div><img class="" :src="item.imgMobSrc" ></div>
          </div>
        </SwiperActiveProgress>
      </div>
    </div>
  </div>
</template>


<script setup lang='ts'>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  title: `Large work area.`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Large work area/Pc_Large-work-area..jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Large work area/web_Large-work-area..jpg`,
  displayList: [
    {
      imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Large work area/PC_@Robert-Salvador.jpg',
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Large work area/web_@Robert-Salvador.jpg`
    },
    {
      imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Large work area/Pc_@Ethan-Lieberman.jpg',
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Large work area/web_@Ethan-Lieberman.jpg`
    },
    {
      imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Large work area/Pc_@Stacey-Vetzal.jpg',
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Large work area/web-@Stacey-Vetzal.jpg`
    }
  ]
}))
const swiperOptions = ref({
  timeAry: [4.5 * 1000, 4.5 * 1000, 4.5 * 1000], // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
  slidesPerView: 1,
  spaceBetween: 0,
  watchSlidesProgress: true,
  speed: 1000,
  centeredSlides: true,
})

</script>


<style lang='scss' scoped>
@import '../common.scss';
.machine-size {
  @include no-mobile {
    padding-block: 100px;
  }
  @include mobile {
    padding-top: 48px;
  }
}
.page-title {
  margin-bottom: 32px;
}

.mz-list {
  display: flex;
  flex-wrap: nowrap;

  @include mobile {
    padding-block: 40px;
  }

  #machine-size {
    padding-bottom: 52px;
  }
}
.mz-img {
  margin-top: 40px;
  margin-right: 24px;
  border-radius: 8px;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }
}

</style>

<style>
.machine-size .pagination-bullet {
  background-color: #D9D9D9;
}
.at-product .machine-size .pagination-bullet-active {
  background-color: #D9D9D9;
}
</style>
