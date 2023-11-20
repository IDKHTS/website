<template>
  <div style='background-color: #000;'>
    <div class='snmk-container pt-3xl'>
      <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-center'>
        <h1 class='store-title mb-m' v-html='dataSrc.title'></h1>
        <div class='store-price' v-html='dataSrc.price'></div>
        <div class='snmk-primary-btn store-btn' @click='openShopModal' v-html='dataSrc.buyLinkText'></div>
        <!-- <a target='_blank' class='snmk-primary-btn store-btn' :href="dataSrc.buyLink" v-html='dataSrc.buyLinkText'></a> -->
      </div>
      <div class='snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 my-3xl'>
        <NuxtImg class='w-100' :src="!isMobile ? dataSrc.imgSrc : dataSrc.imgMobSrc" alt="" loading='lazy' />
      </div>
      <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 tags-wrapper'>
        <div class='cta-tag' v-for='tag in dataSrc.tags' :key='tag' v-html='tag'></div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())
const currDisplayIdx = ref(0)
const emit = defineEmits(['openShopModal'])
const openShopModal = () => emit('openShopModal')
</script>

<style scoped lang='scss'>
@import '../theme.scss';
.store-title {
  color: white;
  text-align: center;

  /* Display/1920/Gilroy Bold-60 */
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px; /* 113.333% */
  letter-spacing: -0.24px;

  @include mobile {
    color: white;
    text-align: center;

    /* Display/375/Gilroy Boid-36 */
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 122.222% */
    letter-spacing: -0.24px;
  }
}
.store-price {
  color: #C7C7C7;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 120% */
  letter-spacing: -0.24px;

  @include mobile {
    color: var(--white, #C7C7C7);
    text-align: center;

    /* Heading/375/Gilroy Bold-28 */
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
    letter-spacing: -0.24px;
  }
}
.store-btn {
  margin-top: 32px;
  width: 239px;
  border-radius: 55px;
  background: var(--unnamed, linear-gradient(90deg, #00FFD1 0%, #0704F1 100%));  padding-block: 18px;

  color: #FFF;
  text-align: center;

  /* Heading/1920/Gilroy Bold-18 */
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;

  @include mobile {
    margin-top: 40px;
  }
}


.section-wrapper {
  display: flex;
  flex-direction: column;
  // align-items: center;
  position: relative;
  justify-content: space-between;
  height: 100vh;



  .section-img-box {
    display: flex;
    background-position: center center;
  }

  &::v-deep .swiper-container {
    height: 100%;
    background-color: transparent;
  }
  &::v-deep .checkout-nav-text {
    color: white;
  }
  &::v-deep .checkout-nav-active-bar {
    background-color: #fff;
  }
}
.bg-swiper {
  position: absolute;
  top: 0;
  left: 0;
}

.tags-wrapper {
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 66px;

  // @include mobile {

  // }
}
.cta-tag {
  border: 1px solid white;
  border-radius: 4px;

  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;

  color: white;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;

  // @media (max-width: 1568px) and (min-width: 768px) {
  //   font-size: 14px;
  //   line-height: 16px; /* 113.333% */
  // }

  @include mobile {
    font-size: 14px;
    &:nth-child(1) {
      width: calc(65% - 10px);
    }
    &:nth-child(6) {
      width: 35%;
      margin-right: 0;
      order: 1;
    }
    &:nth-child(3) {
      width: calc(55% - 10px);
      order: 2;
    }
    &:nth-child(2) {
      width: 45%;
      margin-right: 0;
      order: 3;
    }
    &:nth-child(5) {
      width: calc(35% - 10px);
      order: 4;
    }
    &:nth-child(4) {
      width: 65%;
      margin-right: 0;
      order: 5;
    }
  }

}
</style>
