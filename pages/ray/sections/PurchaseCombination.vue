<template>
  <section>
    <div class="snmk-container py-3xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 pc-wrapper">
        <div class='first-title text-center'  v-html='dataSrc.title'></div>
      </div>
      <template v-if='isMobile'>
        <div class='snmk-col-s-4 snmk-col-xs-4' v-for="(display, index) in dataSrc.displays" :key="display.title">
          <h2 class='secondary-title mt-2xl' v-html='display.title' ></h2>
          <div class='pc-item'>
            <!-- <img class='w-100' :src="item.imgMobSrc" :alt="item.title"> -->
            <div class='c-parts'>
              <div class='c-part-wrapper' v-for='part of display.parts' :key='index + part.name'>
                <NuxtImg class='c-img' :src="part.imgSrc" alt="" loading='lazy' />
                <div  class='c-name' :class="{'mb-m': !display.fittings}"  v-html='part.name'></div>
              </div>
            </div>
            <div class='c-fittings' v-if='display.fittings'>
              <div class='c-fitting-wrapper' v-for='fitting of display.fittings' :key='index + fitting.name'>
                <NuxtImg class='c-img' :src="fitting.imgSrc" alt="" loading='lazy' />
                <div class='c-name' v-html='fitting.name'></div>
              </div>
            </div>

          </div>
        </div>
      </template>
    </div>

    <div v-if='!isMobile' class='snmk-container-no-mr' style=' flex-wrap: nowrap;'>
      <div class="snmk-col-2 snmk-col-l-2 snmk-col-m-1" style='flex: 0 0 auto;'>
      </div>
      <div style='flex: 1 1 auto; overflow: hidden;'>
        <Swiper
          @changeSlide="changeSlide"
          :options="swiperOptions"
          :centeredSlides="false"
          :swiperId="'purchase-combination-swiper'"
          class="purchase-combination-swiper"
          @loaded="swiperLoaded"
        >
          <div class="swiper-slide line-h-0 pc-item" :class="{'item-single-part': !display.fittings}" v-for="(display, index) in dataSrc.displays" :key="index">
            <!-- <img class='w-100' :src="item.imgSrc" :alt="item.title"> -->
            <h3 class='secondary-title mt-2xl' v-html='display.title' ></h3>
            <div class='c-parts' :class="{'single-part': !display.fittings}">
              <div class='c-part-wrapper' v-for='part of display.parts' :key='index + part.name'>
                <NuxtImg class='c-img' :src="part.imgSrc" alt="" loading='lazy' />
                <div  class='c-name' v-html='part.name'></div>
              </div>
            </div>
            <div class='c-fittings'  v-if='display.fittings'>
              <div class='c-fitting-wrapper' v-for='fitting of display.fittings' :key='index + fitting.name'>
                <NuxtImg class='c-img' :src="fitting.imgSrc" alt="" loading='lazy' />
                <div class='c-name' v-html='fitting.name'></div>
              </div>
            </div>

          </div>
        </Swiper>
      </div>
    </div>
    <div v-if='!isMobile' class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-right pr-l">
        <svg @click='swiper.slidePrev()' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='left-icon' :aria-disabled='swiper.isBeginning'>
          <circle cx="20" cy="20" r="19.5" stroke="white"/>
          <path d="M23.0522 27.9995L15.1047 20.052L23.0522 12.1045" stroke="white" stroke-width="0.977346" stroke-miterlimit="10"/>
        </svg>
        <svg @click='swiper.slideNext()'  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class='right-icon'  :aria-disabled='swiper.isEnd'>
          <circle cx="20" cy="20" r="19.5" stroke="white"/>
          <path d="M23.0522 27.9995L15.1047 20.052L23.0522 12.1045" stroke="white" stroke-width="0.977346" stroke-miterlimit="10"/>
        </svg>
      </div>
    </div>
  </section>
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
  slidesPerView: 1.2,
  spaceBetween: 24,
  centeredSlides: false,
  autoplay: {
    delay: 2000
  },
  lazy: {
    loadPrevNext: true
  }
})
const currIndex = ref(0)
const swiper = ref<any>({})
const changeSlide = (index: number) => currIndex.value = index
const swiperLoaded = (_swiper: any) => swiper.value = _swiper


</script>

<style scoped lang='scss'>
@import '../theme.scss';
section {
  background-color: black;
}

.purchase-combination-swiper, .purchase-combination-swiper::v-deep .swiper-container {
  background-color: transparent;
}
.pc-item {
  cursor: grab;
  border-radius: 16px;
  background: #171717;
  backdrop-filter: blur(5px);
  overflow: hidden;
  height: unset;

  @include mobile {
    border-radius: 8px;
    background: #171717;
    margin-top: 24px;

    &:nth-child(2) {
      // margin-top: 100px;
    }
  }
}

.snmk-container-no-mr {
  // padding-top: 78px;
  padding-bottom: 24px;
}

.pc-item {
}
.c-parts {
  margin-top: 48px;
  display: flex;
  justify-content: center;
  padding: 0 173px;
  :first-child {
    margin-right: 24px;
  }

  @include mobile {
    margin-top: 8px;
    padding: 0 16px;
    flex-wrap: wrap;
    :first-child {
      margin-top: 0;
      margin-right: 0;
    }
  }
}
.c-part-wrapper {
  width: calc(50% - 12px);
  max-width: 460px;
  margin-top: 48px;

  @include mobile {
    margin-right: 0;
    width: 100%;
  }
}
.c-fittings {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  padding: 0 105px 32px;

  @include mobile {
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;
    padding: 0 16px 40px;

    :nth-child(2n) {
      margin-right: 0;
    }
  }
}
.c-fitting-wrapper {
  width: 23%;
  width: calc((100% - 3 * 40px) / 4);
  max-width: 240px;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }

  .c-img {
    border-radius: 8px;
  }

  @include mobile {
    width: calc((100% - 16px) / 2);
    margin-right: 16px;
    margin-top: 25px;
  }
}
.c-name {
  margin-top: 8px;

  color: #A7A7A7;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
}

.right-icon, .left-icon {
  margin-bottom: 48px;
  cursor: pointer;
}
.left-icon {
  margin-right: 10px;
}


.item-single-part {
  display: flex;
  flex-direction: column;
}
.single-part{
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 0;
}

</style>
