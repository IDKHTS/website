<template>
  <div class='mpf'>
    <div class='snmk-container'>
      <div v-if='!isMobile' class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-offset-1 snmk-col-l-offset-1 mpf-item-container'>
        <div class='mpf-item' v-for='func of dataSrc.funcList' :key='func.title'>
          <div>
            <div class='mpf-title' v-html='func.title'></div>
            <div class='mpf-desc' v-html='func.desc'></div>
          </div>
          <div class='mpf-asssets'>
            <NuxtImg v-if='func.imgSrc' :src="isMobile ? func.imgMobSrc : func.imgSrc" :alt="func.title" loading='lazy'/>
            <video v-else
              muted :poster="func.poster" autoplay
              preload='true' loop webkit-playsinline
              playsinline
              x5-video-player-type="h5-page"
            >
              <source :src="func.videoWebm">
              <source :src="func.videonMp4">
            </video>
          </div>
        </div>
      </div>
      <div v-else class='snmk-col-s-4 snmk-col-xs-4'>
          <SwiperActiveProgress id='mpf-swiper' :options="swiperOptions">
            <div class="swiper-slide mpf-item" v-for='func of dataSrc.funcList' :key='func.title'>
              <div>
                <div class='mpf-title' v-html='func.title'></div>
                <div class='mpf-desc' v-html='func.desc'></div>
              </div>
              <div class='mpf-asssets'>
                <NuxtImg v-if='func.imgSrc' :src="isMobile ? func.imgMobSrc : func.imgSrc" :alt="func.title" loading='lazy'/>
                <video v-else
                  muted  autoplay
                  preload='true' loop webkit-playsinline
                  playsinline
                  x5-video-player-type="h5-page"
                >
                  <source :src="func.videoWebm">
                  <source :src="func.videonMp4">
                </video>
              </div>
            </div>
          </SwiperActiveProgress>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

const activeTutorialIndex = ref()
const swiperOptions = ref({
  timeAry: [4.5 * 1000, 4.5 * 1000], // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
  slidesPerView: 1,
  spaceBetween: 24,
  watchSlidesProgress: true,
  speed: 1000,
  centeredSlides: true,
  // loop: true,

  on: {
    slideChange () {
      activeTutorialIndex.value = this.realIndex
    }
  }
})

</script>

<style scoped lang='scss'>
@import '../theme.scss';

.mpf {
  background-color: black;
  @include no-mobile {
    padding-block: 120px 240px;
  }

  &::v-deep .swiper-pagination.swiper-pagination-bullets{
    bottom: 48px;
  }
}
.mpf-item-container {
  display: flex;
  flex-wrap: wrap;
}
.mpf-item {
  margin-top: 24px;
  margin-right: 24px;
  width: calc(50% - 12px);
  background: #171717;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:nth-child(2n) {
    margin-right: 0;
  }
  @include mobile {
    text-align: center;
    background-color: black;
    box-sizing: border-box;
    width: 100%;
    margin-right: 0;
    height: auto;
    width: 100%;
    padding: 0;
    padding-bottom: calc(68px + 48px);
  }
  .mpf-title {
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.24px;
    margin-top: 24px;
    margin-bottom: 20px;

    @include mobile {
      margin-top: 32px;
      margin-bottom: 16px;
      font-size: 28px;
      line-height: 36px;
    }
  }
  .mpf-desc {
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    @include mobile {
      color: #C2C2C2;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .mpf-asssets {
    margin-top: 32px;
  }
}

</style>
