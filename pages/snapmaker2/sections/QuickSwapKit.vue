<template>
  <div class='quick-swap-kit'>
    <div class="snmk-container">
      <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-containter">
        <div class="page-title-2" v-html="dataSrc.title"></div>
        <div class="page-desc mt-m" v-html="dataSrc.desc"></div>
      </div>
      <div v-if="!isMobile" class="snmk-col-1 snmk-col-l-1 snmk-col-m-1 snmk-col-s-4 snmk-col-xs-4"></div>
      <div v-if="!isMobile" class="snmk-col-6 snmk-col-l-6 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4">
        <div class="qsk-animation-container">
          <!-- <img class="w-100" v-lazy="dataSrc.bgImgSrc" :alt="dataSrc.title"> -->
          <NuxtImg class="w-100" :src="dataSrc.bgImgSrc" :alt="dataSrc.title" loading='lazy' />
          <div class="qsk-header" v-for="(header, index) of dataSrc.headers" :key="header.name" :class="{'qsk-header-active': index === selectedHeaderIndex}">
            <img  :src="header.imgSrc" :alt="header.name">
          </div>
        </div>
        <div class="tabs">
          <div class="tab" v-for="(header, index) of dataSrc.headers" :key="header.name" v-html="header.name" @click="selectHeader(index)" :class="{'tab-active': index === selectedHeaderIndex}"></div>
        </div>
      </div>
    </div>
    <template  v-if="isMobile">
      <div class="pos-relative mt-m">
        <NuxtImg  class="w-100" :src="dataSrc.bgImgMobSrc" :alt="dataSrc.title"></NuxtImg>
        <div class="swiper w-100 h-100" id="quick-swap-kit-swaper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(header, index) of dataSrc.headers" :key="header.name" :class="{'header-active': index === selectedHeaderIndex}"  >
                <img :src="header.imgMobSrc" :alt="header.name">
            </div>
          </div>
        </div>
      </div>
      <div class="snmk-container">
        <div class="snmk-col-s-4 snmk-col-xs-4">
          <div class="tab-name"  v-html="dataSrc.headers[selectedHeaderIndex].name"></div>
          <div class="tabs">
            <div class="tab" v-for="(header, index) of dataSrc.headers" :key="header.name" @click="selectHeader(index)" :class="{'tab-active': index === selectedHeaderIndex}"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import { useGlobalStore } from '~/stores';

const selectedHeaderIndex = ref(0)
const swiper = ref({})

const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  title: `Upgrade to the next level.`,
  desc: `Snapmaker 2.0 is compatible with most Snapmaker modules and addons, including the Dual Extrusion 3D Printing Module, Rotary Module, 10W Laser Module, 20W Laser Module, 40W Laser Module, Air Purifier, CAN Hub, and Enclosure for 2.0. Explore a world of creative potential with Snapmaker modules.`,
  bgImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/Pc_Upgrade-to-the-next-level..jpg`,
  bgImgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/web_Expandability-is-always-a-priority..jpg`,
  headers: [
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/Pc_Dual Extrusion 3D Printing Module.png`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/web_Dual Extrusion 3D Printing Module.png`,
      name: `Dual Extrusion 3D Printing Module`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/Pc_10W High Power Laser Module.png`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/web_10W High Power Laser Module.png`,
      name: `10W Laser Module`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/Pc_20W.png`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/web_20W.png`,
      name: `20W Laser Module`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/Pc_40W.png`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/quick-swap-kit/web_40W.png`,
      name: `40W Laser Module`
    }
  ]
}))

const selectHeader = (index: number) => {
  selectedHeaderIndex.value = index

  if (!isMobile.value || !swiper.value) return
  swiper.value.slideTo(selectedHeaderIndex.value)
}

const initSwap = () => {
  const options = {
    // centeredSlides: this.centeredSlides,
    on: {
      slideChange () {
        selectedHeaderIndex.value = this.activeIndex
      }
    }
  }
  swiper.value = new Swiper('#quick-swap-kit-swaper', options)
}

onMounted(() => initSwap())
</script>


<style lang='scss' scoped>
@import '../common.scss';

.quick-swap-kit {
  background-color: black;
  padding-block: 140px;

  @include mobile {
    padding-block: 40px;

  }
}

.text-containter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.qsk-animation-container {
  position: relative;

  .qsk-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transform: translateY(-100%);
    transition: all .5s linear;
    display: flex;
    justify-content: center;

    img {
      width: auto;
      height: 100%;
    }
  }
  .qsk-header-active {
    opacity: 1;
    transform: translateY(0);
  }
}

@include no-mobile {
  .tabs{
    margin-top: 46px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    white-space: normal;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 5px;
      background: rgba(161, 161, 166, 0.40);
    }

    .tab {
      // width: calc((100% - 16px * 3) /4);
      margin-right: 16px;
      position: relative;

      color: #FFF;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
      letter-spacing: -0.24px;
      padding-bottom: 46px;
      opacity: 0.3;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 5px;
        // background: rgba(161, 161, 166, 0.40);
      }
    }
    .tab-active {
      opacity: 1;
      font-weight: 700;
      &::after {
        background: #FFF;
      }
    }
  }
}

@include mobile {
  .page-title-2, .page-desc {
    text-align: center;
  }
  #quick-swap-kit-swaper {
    position: absolute;
    top: 0;
    height: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    opacity: 0;
    -webkit-transform: translateY(-300px);
    transform: translateY(-300px);

    img {
      height: 100%;
      width: auto;
    }
  }
  .header-active {
    opacity: 1;
    transform: translateY(0);
    transition: all .8s ease-in-out;
    display: flex;
    justify-content: center;
  }
  .tab-name {
    margin-top: 55px;
    text-align: center;
    color: var(--White, #FFF);
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: -0.24px;
  }

  .tabs {
    margin-top: 13px;
    display: flex;
    justify-content: space-between;

    .tab {
      width: calc((100% - 16px * 3) / 4);
      height: 4px;
      border-radius: 5px;
      background: rgba(161, 161, 166, 0.24);
    }
    .tab-active {
      background-color: #FFF;
    }
  }
}

</style>
