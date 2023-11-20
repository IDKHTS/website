<template>
  <div>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <h1 class='first-title text-center' v-html='dataSrc.title' ></h1>
        <!-- data-aos='fade-up' -->
      </div>
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1">
        <div v-if='!isMobile' class='compatible-desc mt-32' v-html='dataSrc.desc'></div>
        <!--  data-aos='fade-up' data-aos-delay='300' -->
      </div>
      <div v-if='isMobile' class="snmk-col-s-4 snmk-col-xs-4">
        <NuxtImg class='w-100' :src="dataSrc.imgSrc" alt="" loading='lazy'/>
      </div>
    </div>
    <div v-if='isMobile' class='ml-m'>
      <Swiper v-if='caninitSwiper'
        @changeSlide="changeSlide"
        :options="swiperOtion"
        :centeredSlides="false"
        :swiperId="'compatible-modules'"
        class="compatible-swiper"
        @loaded="swiperLoaded"
      >
        <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index" :style="{'width': `${slideWidth}px`}">
          <div class='compatible-machine'>
            <div class='machine-name' v-html='item.machine'></div>
            <div class='line-h-0 machine-img-block'><img :src="item.imgSrc" alt=""></div>
          </div>
        </div>
      </Swiper>
    </div>
    <div v-if='!isMobile' class="snmk-container-no-mr" style='flex-wrap: nowrap;'>
      <div style='flex: 0 0 auto;' class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div ref='compatibleModule' class='compatible-module'>
          <img :src="dataSrc.imgSrc" alt="">
        </div>
      </div>
      <div style='flex: 0 0 auto;'  class="snmk-col-1 snmk-col-l-1 snmk-col-m-1">
      </div>
      <div class="machine-box">
        <Swiper v-if='caninitSwiper'
          @changeSlide="changeSlide"
          :options="swiperOtion"
          :centeredSlides="false"
          :swiperId="'compatible-modules'"
          class="compatible-swiper w-100"
          @loaded="swiperLoaded"
        >
          <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index" :style="{'width': `${slideWidth}px`}">
            <div class='compatible-machine'>
              <div class='machine-name' v-html='item.machine'></div>
              <div class='line-h-0 machine-img-block'><img :src="item.imgSrc" :alt="item.machine" ></div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
    <div v-if='!isMobile' class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-right">
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

const compatibleModule = ref()
const caninitSwiper = ref(false)
const slideWidth = ref(300)
const currIndex = ref(0)
const swiperOtion = ref({
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: false,
  autoplay: {
    delay: 2000
  }
})
const swiper = ref<any>({})
const swiperLoaded = (_swiper: any) => swiper.value = _swiper
const goSlide = (index: number) => swiper.value.slideTo(index)
const changeSlide = (index: number) => currIndex.value = index

onMounted(() => {
  if (isMobile.value) {
    slideWidth.value = window.innerWidth * 0.8
    caninitSwiper.value = true
    return
  }
  slideWidth.value = Math.min(compatibleModule.value.clientWidth, 268)
  caninitSwiper.value = true
})

</script>

<style scoped lang='scss'>
@import '../theme.scss';
.first-title {
  margin-top: 9.3vh;
}
.compatible-module {
  margin-top: 10.64vh;
}
.compatible-swiper {
  margin-top: 10.64vh;
  &:deep(.swiper-container) {
    background-color: transparent;
  }
  @include mobile {
    margin-top: 4.266vh;
    margin-bottom: 11.73vh;
  }
}
// .compatible-rewrite-grid-system-to-right {
//   width: $desingMargin;
// }

.compatible-desc {
  color: var(--white, #FFF);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;

  @include mobile {
    margin-top: 16px;
  }
}

.machine-box {
  flex: 1 1 100%;
  overflow: hidden;
  display: flex;
  margin-bottom: 8.425vh;

  &:deep(.swiper-container) {
    height: 100%
  }
}
.compatible-machine {
  border-radius: 8.247px;
  background: #171717;
  padding-block: 30px;


  color: #717171;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .machine-name {
    // margin-bottom: 105px;
    padding-inline: 25px;
  }
  .machine-img-block {
    margin-top: 85px;
    padding-inline: 17px;
    @include mobile {
      margin-top: 105px;
    }
  }
}
.swiper-slide {
  display: flex;
  height: auto;
}
.left-icon {
  margin-right: 12px;
}
.text-right {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
</style>
