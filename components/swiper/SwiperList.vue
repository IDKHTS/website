<template>
  <div :id='currentId' class='swiper-list-container'>
    <div class='assets-box' :class='{"assets-left": isLeft}'>
      <Swiper :swiperId='"swiperlist-" + currentId' @changeSlide="changeSlide" @loaded='swiperInit'>
        <div class='swiper-slide' v-for="(item, index) in singleSwiper.slideCon" :key='index'>
          <img class="" :src="item.imgSrc" loading="lazy"  alt="">
          <div class="swiper-lazy-preloader"></div>
          <!-- <div class="swiper-lazy-preloader"></div> -->
        </div>
      </Swiper>
    </div>
    <div class='text-container' :class='{"text-left": !isLeft}'>
      <div class='sl-title' v-html='singleSwiper.commonTitle'></div>
      <div class='sl-subtitle' v-html='singleSwiper.subTitle'></div>
      <div>
        <ul class="swiper5inner-pagination" slot="pagination">
          <li class="swiper-pagination-item" :class="{ 'active': index === selectedIndex }"
            @mouseover='selectIndex(index)'
            v-for='(item, index) in singleSwiper.featureList' :key="index">
            <p class='desc'>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Swiper from './Swiper.vue'

const props = defineProps<{
  isLeft?: boolean
  currentId: string
  singleSwiper: any
}>()

const selectedIndex = ref(0)
const swiper = ref()
const swiperInit = (_swiper: any) =>{ swiper.value = _swiper }
const changeSlide = (index: number) => selectedIndex.value = index
const selectIndex = (index: number) => {
  if(!swiper.value) return
  swiper.value.slideTo(index)
}

</script>

<style scoped lang='scss'>
.swiper-list-container {
  max-width: 1152px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 6rem;
  .assets-box {
    width: 50%;
    order: 1;

    .swiper-slide,img {
      border-radius: 8px;
      overflow: hidden;
    }
  }
  .assets-box.assets-left {
    order: 0;
  }

  .sl-title {
    color: #1F1F1F;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 1.5rem;
  }
  .sl-subtitle {
    color: #1F1F1F;
    font-size: 16px;
    line-height: 24px;
    margin: 40px 0 24px 0;
  }

  .text-container {
    width: 45%;
    order: 1;
  }
  .text-container.text-left {
    order: 0;
  }
  .swiper5inner-pagination {
    position: relative;
    text-align: left;
    $title-black: #1F1F1F;
    .swiper-pagination-item {
      padding-top: 0.625vw;
      padding-bottom: 0.625vw;
      padding-left: 1.25vw;
      // border-left: 4px solid #D1D1D1;
      position: relative;
      vertical-align: top;
      color: #AAAAAA;
      // border: solid 1px purple;
      cursor: pointer;

      .desc {
        width: 100%;
        line-height: 24px;
        font-size: 20px;
        font-weight: bold;
      }

      &::before {
        content: ".";
        position: absolute;
        left: 1.5px;
        top: 0;
        overflow: hidden;
        height: 100%;
        width: 1px;
        background-color: #D1D1D1;
        display: block;
      }
    }

    .swiper-pagination-item.active {
      color: $title-black;

      &::before {
        width: 4px;
        left: 0;
        background-color: #1F1F1F;
        border-radius: 2px;
        z-index: 1;
      }

      // border-left: 4px solid #1F1F1F;
    }
  }
}
</style>