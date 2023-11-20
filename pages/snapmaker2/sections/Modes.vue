<template>
  <div class='modes'>
    <div class='snmk-container'>
      <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
        <div v-html='dataSrc.title' class='modes-title title-color'></div>
        <div v-html='dataSrc.desc' class='modes-desc'></div>
        <div class='mb-xl' v-if='!isMobile'><NuxtImg class="w-100" :src="!isMobile ? dataSrc.imgSrc : dataSrc.imgMobSrc" :alt="dataSrc.title" loading='lazy'/></div>
        <div class='modes-container' v-if='!isMobile'>
          <div class='mode' v-for='mode of dataSrc.modes' :key='mode.title'>
            <NuxtImg class="w-100" :src="mode.imgSrc" :alt="mode.title" loading='lazy'/>
            <div class='mode-title' v-html='mode.title'></div>
          </div>
        </div>
      </div>
    </div>
    <div class='my-l' v-if='isMobile'><NuxtImg class="w-100" :src="dataSrc.imgMobSrc" :alt="dataSrc.title" loading='lazy'/></div>
    <Swiper v-if='isMobile'
      @changeSlide="changeSlide"
      :options="swiperOptions"
      :centeredSlides="false"
      ref="swiper-ref"
      :swiperId="'modes-swiper'"
      class="modes-swiper"
      @loaded="swiperLoaded"
    >
      <div class="swiper-slide mode" v-for='mode of dataSrc.modes' :key='mode.title'>
        <NuxtImg class="w-100" :src="mode.imgSrc" :alt="mode.title" loading='lazy'/>
        <div class='mode-title' v-html='mode.title'></div>
      </div>
    </Swiper>
  </div>
</template>

<script setup lang='ts'>
import Swiper from '@@/components/swiper/Swiper.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile, } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  title: `Start your maker journey with 3-in-1.`,
  desc: `Snapmaker 2.0 Modular 3-in-1 3D Printer unlocks your full creative potential, from 3D printing to laser engraving, cutting, and CNC carving. Snapmaker 2.0 is ideal for makers who are just getting started, hobbyists who prefer more customized options. It’s our best-selling 3-in-1 3D printer that comes with everything you need.`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_3in1.jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_3in1.jpg`,
  modes: [
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/Pc_Laser-Module.jpg`,
      title: `Laser Module`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/Pc_3D-Printing-Module.jpg`,
      title: `3D Printing Module`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/Pc_CNC-Module.jpg`,
      title: `CNC Module`
    }
  ]
}))

const currentIndex = ref(0)
const changeSlide = (index: number) => currentIndex.value = index

const swiper = ref<any>({})
const swiperLoaded = (_swiper: any) => swiper.value = _swiper

const swiperOptions = ref({
  slidesPerView: 1.2,
  spaceBetween: 16,
  centeredSlides: false,
  autoplay: {
    delay: 2000
  },
  lazy: {
    loadPrevNext: true
  }
})
</script>


<style lang='scss' scoped>
.modes {
  padding-block: 240px 120px;
  background-color: black;
  .modes-title {
    text-align: center;
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 68px; /* 113.333% */
    letter-spacing: -0.24px;
    @include mobile {
      font-size: 28px;
      font-weight: 800;
      line-height: 36px;
    }
  }
  .modes-desc {
    color: var(--unnamed, #C2C2C2);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    margin-top: 24px;
    margin-bottom: 40px;

    @include mobile {
      color: var(--White, #FFF);
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 24px;
    }
  }

  .modes-container {
    display: flex;
    justify-content: center;
  }
  .mode {
    width: 30%;
    margin-right: 24px;

    :last-child {
      margin-right: 0;
    }

    img {
      border-radius: 8px;
    }

    .mode-title {
      color: #FFF;
      text-align: center;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px; /* 133.333% */
    }
  }

  @include mobile {
    padding-block: 48px;
    .modes-swiper {
      padding-left: 16px;
      &::v-deep .swiper-container {
        background-color: black;
      }

      .mode {
        margin-right: 16px;
        .mode-title {
          text-align: left;
        }
      }
    }
  }
}

</style>
