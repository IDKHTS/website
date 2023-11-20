<template>
  <div style='background-color: black;'>
    <!-- :class="{'snmk-container-no-mr': !isVideoLeft, 'snmk-container-no-ml': isVideoLeft}"  -->
    <div class='ttv snmk-container' >
      <div :class="{
        'snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 ttv-text-wrapper': !isVideoLeft,
        'snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 ttv-text-wrapper snmk-col-offset-1 snmk-col-l-offset-1 order-1': isVideoLeft
      }">
        <div class='ttv-title' v-html='dataSrc.title'></div>
        <div v-if='!(isMobile && isListWithDesc)' class='ttv-desc' v-html='dataSrc.desc'></div>
        <div v-if='isMobile && isListWithDesc' class='ttv-desc' v-html='dataSrc.displays[currDisplayIdx].desc'> </div>
        <CheckoutNavWeb @selectIndex="selectIndex"
          :currDisplayIdx="currDisplayIdx"
           :options="dataSrc"
          :autoPlay="!isListWithDesc"
          :isListWithDesc='isListWithDesc'
          v-if="!isMobile" class="mt-3xl display-flex"
        ></CheckoutNavWeb>
      </div>
      <!-- <div v-if="isVideoLeft && !isMobile" class='snmk-col-1 snmk-col-l-1 snmk-col-m-1' style='order: 2;'></div> -->
      <!-- <div class='video-container' > -->
      <div class='snmk-col-6 snmk-col-l-6 snmk-col-m-4 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-s-4 snmk-col-xs-4' :style='{"min-height": `${containerHeight}px`}' style='overflow: hidden; position: relative;'>
        <template v-if='!isMobile'>
          <MediaViewAdapter  v-for="(item, index) of dataSrc.displays" :key="item.text + index"
            :class="{
              'opacity fade-right-in': index === currDisplayIdx
            }"
            class='ttv-video'
            :options="{
              isAutoHeigh: true,
              gifSrc: item.gifSrc,
              imgSrc: !isMobile ? item.imgSrc : item.imgMobSrc,
              videoWebm: item.videoWebm,
              videoMp4: item.videoMp4,
              videoOriginalWidth: 1140,
              videoOriginalHeight: 960,
              imgOriginalWidth: 1710,
              imgOriginalHeight: 1440,
              alt: item.alt,
              mobAlt: item.mobAlt
            }"
            @adapterHeight="adapterHeight"
          >
          </MediaViewAdapter>
        </template>
        <template v-else>
          <Swiper
            @changeSlide="changeSlide"
            :swiperId="swiperId"
          >
              <MediaViewAdapter  v-for="(item, index) of dataSrc.displays" :key="item.text + index"
                class='ttv-video swiper-slide'
                :options="{
                  isAutoHeigh: true,
                  gifSrc: item.gifSrc,
                  videoWebm: item.videoWebm,
                  videoMp4: item.videoMp4,
                  videoOriginalWidth: 1140,
                  videoOriginalHeight: 960,
                  imgOriginalWidth: 750,
                  imgOriginalHeight: 916,
                  imgSrc: !isMobile ? item.imgSrc : item.imgMobSrc,
                  alt: item.alt,
                  mobAlt: item.mobAlt
                }"
                @adapterHeight="adapterHeight"
              >
              </MediaViewAdapter>
          </Swiper>
          <CheckoutNavMob @selectIndex="selectIndex"
            :currDisplayIdx="currDisplayIdx"
             :options="dataSrc"
            class="mt-3xl display-flex"
          ></CheckoutNavMob>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import Swiper from '@@/components/swiper/Swiper.vue'
import CheckoutNavWeb from '@@/components/CheckoutNavWeb.vue'
import CheckoutNavMob from '@@/components/CheckoutNavMob.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'


const props = withDefaults(defineProps<{
  dataSrc: any
  isVideoLeft?: boolean
  isListWithDesc?: boolean
  swiperId: string
}>(), { dataSrc: {}, isVideoLeft: false, isListWithDesc: false, swiperId: '' })

const { isMobile } = storeToRefs(useGlobalStore())

// const _uid = ref(`swiper-${new Date().getTime()}`)
const currDisplayIdx = ref(0)
const containerHeight = ref(0)
const selectIndex= (index: number) => currDisplayIdx.value = index
const adapterHeight= (height: number) => {
  containerHeight.value = height
}
const changeSlide = (index: number) => currDisplayIdx.value = index


</script>


<style scoped lang="scss">
@import '../theme.scss';

.opacity {
  opacity: 1 !important
}
.fade-right-in {
  transform: translate(0, -50%) !important
}

.ttv {

  @include no-mobile {
    overflow: hidden;
    // height: 100vh;
    min-height: 70vh;
    padding-block: 180px;
  }
  .ttv-text-wrapper {
    @include no-mobile {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @include mobile {
      flex: fs-wrapper;
    }
  }
  .ttv-title {
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: -0.24px;

    @include mobile {
      margin-top: 40px;
      text-align: center;
      font-size: 28px;
      line-height: 36px;
    }
  }
  .ttv-desc {
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    margin-top: 24px;
    @include mobile {
      text-align: center;
      font-size: 16px;
      margin-bottom: 40px;
    }
  }

  &::v-deep .checkout-nav{
    color: white;
  }
  &::v-deep .checkout-nav-active-bar {
    background-color: white;
  }
  @include mobile {
    &::v-deep .checkout-nav-text{
      color: white;
    }
  }

  .video-container {
    min-width: 100px;
    height: 100%;
    position: relative;
    overflow: hidden;
    flex: 1 1;
    margin-left: 6vw;
    @include mobile {
      margin-left: -16px;
      width: 100%;
    }
  }
  .ttv-video {
    @include no-mobile {
      position: absolute;
      top: 50%;
      left: 0;
      opacity: 0;
      transform: translate(40px, -50%);
      transition: all 0.7s ease-in-out;
      height: 100%;
      width: 100%;
    }
  }
}
.ttv.snmk-container-no-ml {
  .ttv-text-wrapper {
    order: 1;
    @include mobile {
      order: 0;
    }
  }
  .video-container {
    order: 0;
    margin-left: 0;
    margin-right: 6vw;
    @include mobile {
      order: 0;
      margin-left: 0;
      margin-right: -16px;
    }
  }
  .ttv-video {
    @include no-mobile {
      transform: translateX(-40px);
    }
  }
}


.swiper-slide {
  background-position: center center;
}

.order-1 {
  order: 1;
}

</style>
