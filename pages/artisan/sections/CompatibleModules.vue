<template>
  <div style='background-color: black;' class='py-2xl cm'>
    <div class="snmk-container my-3xl text-center text-wrapper vertical-center">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class='page-title-1 page-title-color' v-html='dataSrc.title'></div>
        <div class='cm-desc' v-html='dataSrc.desc'></div>
      </div>
      <div v-if='!isMobile' class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-offset-1 snmk-col-l-offset-1 cm-list">
          <div v-for='(moduleItem, index) of dataSrc.modulesList' :key='moduleItem.name' class='cm-item' :class="'cm-item-' + index">
            <div class='cm-img'>
              <NuxtImg :src="moduleItem.imgSrc" alt="" loading='lazy' />
            </div>
            <div class='cm-name' v-html='moduleItem.name'></div>
          </div>
      </div>
      <div v-else class="snmk-col-s-4 snmk-col-xs-4 mt-2xl">
        <Swiper
          @changeSlide="changeSlide"
          :options="swiperOptions"
          :centeredSlides="false"
          :swiperId="'artisan-compatbile-modules-swiper'"
          class='cm-list'
        >
          <div v-for='moduleItem of dataSrc.modulesList' :key='moduleItem.name' class='swiper-slide cm-item'>
            <div class='cm-name' v-html='moduleItem.name'></div>
            <div class='cm-img'>
              <NuxtImg :src="moduleItem.imgSrc" alt="" loading='lazy' />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Swiper from '@@/components/swiper/Swiper.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

const swiperOptions = ref({
  slidesPerView: 1.3,
  spaceBetween: 10,
  centeredSlides: false,
  // autoplay: {
  //   delay: 2000
  // },
  lazy: {
    loadPrevNext: true
  }
})
const selectedIndex = ref(0)
const changeSlide = (index: number) => selectedIndex.value = index


</script>

<style scoped lang='scss'>
@import '../theme.scss';
.cm-desc {
  color: var(--White, #FFF);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  margin-block: 32px;
  @include mobile {
    margin-bottom: 40px;
    color: var(--unnamed, #C2C2C2);
    font-size: 16px;
  }
}

.cm-list {
  @include no-mobile {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
  @include mobile {
    display: flex;
    justify-content: center;
    display: block;
  }
}


.cm-item {
  grid-row: span 1;
  grid-column: span 1;
  border-radius: 8px;
  background-color: #171717;
  padding: 10px 10px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // max-width: 240px;
  // border-radius: 8px;
  // background-color: #171717;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // padding: 32px 15px;
  // overflow: hidden;
  // margin-right: 24px;
  // margin-top: 72px;

  @include mobile {
    box-sizing: border-box;
    max-width: 240px;
    max-width: unset;
    height: auto;
    padding: 32px 15px;
    &:last-child {
      margin-right: 0;
    }
  }

  .cm-name {
    color: #717171;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 116.667% */
    letter-spacing: -0.24px;
    // margin-bottom: 51px;
    padding-inline: 9px;
    margin-bottom: 8px;
    @include no-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 84px;
    }
    @include mobile {
      color: #717171;
      font-family: Roboto;
      font-size: 24.179px;
      font-style: normal;
      font-weight: 600;
      line-height: 28.209px; /* 116.667% */
      letter-spacing: -0.242px;
      margin-bottom: 28px;
    }
  }
  .cm-img {
    line-height: 0;
    img {
      transform: scale(0.9);
      transition: all 0.5s;
    }

    &:hover {
      img {
        transform: scale(1);
      }
    }
  }

}
.cm-item-0 {
  grid-row: span 2;
  grid-column: span 2;
}

.cm::v-deep .swiper-container {
  background-color: transparent;
}
</style>
