<template>
  <div class="bg-black-2 c-white section-wrapper" style="position: relative">
    <div class="w-100 section-text-box" :class="{'snmk-container': isMobile, 'snmk-container-no-ml flex-no-wrap': !isMobile}">
      <div v-if='!isMobile' class="section-img-box">
        <NuxtImg :src="dataSrc.displays[0].imgSrc" alt="" style='visibility: hidden;' />
        <NuxtImg v-for="(item, index) of dataSrc.displays" :key="item.text"
          :src="item.imgSrc" alt="" loading='lazy'
          :class="{'opacity fade-right-in': index === currDisplayIdx}"
          class="img-box w-100"
        />
      </div>
      <div v-else class="snmk-col-8 snmk-col-l-8 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4" style="height: 0">
        <div ref="widthEl" class="w-100"></div>
      </div>
      <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 vertical-center flex-no-scale">
        <div ref="widthEl" data-aos="fade-up">
          <div class="page-title-2 bold-700" v-html="dataSrc.title"></div>
          <div class="title-4 mt-m" v-html="dataSrc.desc"></div>
            <CheckoutNavWeb @selectIndex="selectIndex"
              :currDisplayIdx="currDisplayIdx" :options="dataSrc"
              :autoPlay="true"
              v-if="!isMobile" class="mt-3xl display-flex"
            ></CheckoutNavWeb>
        </div>
      </div>
      <div class="snmk-col-1 snmk-col-l-1 flex-no-scale"></div>
    </div>
    <Swiper v-if="isMobile"
      @changeSlide="changeSlide"
      :swiperId="'screen10'"
      class="section-img-box w-100 h-100"
      style="display: flex"
      @loaded='mapSwiperRef'
    >
      <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index">
        <NuxtImg class='w-100' :src="item.imgMobSrc" :alt="item.title" loading='lazy'/>
      </div>
    </Swiper>
    <CheckoutNavMob @selectIndex="selectIndex"
      :currDisplayIdx="currDisplayIdx" :options="dataSrc"
      class="mt-3xl display-flex tabs-container"
    ></CheckoutNavMob>
  </div>
</template>

<script setup lang='ts'>
import _ from 'lodash'
import Swiper from '@@/components/swiper/Swiper.vue'
import CheckoutNavWeb from '@@/components/CheckoutNavWeb.vue'
import CheckoutNavMob from '@@/components/CheckoutNavMob.vue'
import calcWH from '@@/resources/js/calcWH.js'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const props = defineProps<{ dataSrc: any}>()
const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const currDisplayIdx = ref(0)
const currImgSrc = computed(() => props.dataSrc.displays[currDisplayIdx.value].imgSrc)

const widthEl = ref()
const swiperRef = ref()
const mapSwiperRef = (swiper: any) => swiperRef.value = swiper
const selectIndex = (index: number) => {
  currDisplayIdx.value = index

  if(!swiperRef.value) return
  isMobile.value && swiperRef.value?.slideTo(index)
}
const changeSlide = (index: number) => currDisplayIdx.value = index

const imgViewHeight = ref(0)
const imgViewWidth = ref(0)
const bgImgHeight = ref(0)
const bgImgWidth = ref(0)
const imgAdapteWidth = () => {
  if(!widthEl.value) return
  imgViewWidth.value = isMobile.value ? window.innerWidth : (widthEl.value.getBoundingClientRect().left - 100)// (window.innerWidth - el.getBoundingClientRect().left - 100 + 17)
}
const imgAdapteHeight = () => {
  if(!swiperRef.value) return
  imgViewHeight.value = isMobile.value ? swiperRef.value.el.clientHeight : window.innerHeight
}
const initBg = (options: any) => {
  return new Promise((resolve, reject) => {
    if (!options) reject(new Error('no options'))
    let width = 0
    let height = 0
    if (options.imgOriginalWidth && options.imgOriginalHeight) {
      width = options.imgOriginalWidth
      height = options.imgOriginalHeight
      resolve(calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerHeight))
      return
    }

    const img = new Image()
    img.src = options.imgSrc
    img.onload = function () {
      const width = options.imgOriginalWidth || img.width
      const height = options.imgOriginalHeight || img.height
      resolve(calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth))
    }
    img.onerror = err => { console.log(err); reject(err) }
  })
}
const initBgImg = _.throttle(() => {
  imgAdapteWidth()
  imgAdapteHeight()
  initBg({
    imgSrc: props.dataSrc.imgSrc,
    imgOriginalWidth: 1080,
    imgOriginalHeight: 720,
    viewWidth: imgViewWidth.value,
    viewHeight: imgViewHeight.value
  }).then((v: any) => {
    bgImgWidth.value = v.targetWidth
    bgImgHeight.value = v.targetHeight
  })
}, 100)
onMounted(() => {
  initBgImg()
  window.addEventListener('resize', initBgImg)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', initBgImg)
})

</script>


<style scoped lang="scss">
@import '../theme.scss';

.section-wrapper {
  display: flex;
  align-items: center;
  min-height: 100vh;

  .section-img-box {
    overflow: hidden;
    flex: 1 1 auto;
    background-position: center center;
    // .img-box { background-position: center; }
  }
  &::v-deep .checkout-nav-active-bar {
    background-color: white;
  }
  &::v-deep .checkout-nav-active {
    color: white;
  }
  // @include mobile {
  //   &::v-deep .checkout-nav-active {
  //     color: white;
  //   }
  // }
}
.opacity {
  opacity: 1 !important
}
.fade-right-in {
  transform: translateX(0) !important
}


.swiper-slide {
  background-position: center center;
  line-height: 0;
}
.flex-no-wrap {
  flex-wrap: nowrap;
}
.flex-no-scale {
  flex: 0 0 auto;
}
.tabs-container {
  position: absolute;
  bottom: 0;
  left: 0;
}

@include mobile{
  .section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: unset;

    .section-img-box {
      margin-top: 28px;
      flex: 1 1 auto;
    }
    .section-text-box {
      text-align: center;
      margin-top: 40px;
      flex: 0 0 auto;
    }
  }

}

@media (min-width: $breakPoint_m) {
  .section-wrapper {
    display: flex;
    align-items: center;
    .section-img-box {
      position: relative;
      margin-right: 5%;
      // position: absolute;
      // left: 0;
      // top: 0;
      // overflow: hidden;
      // height: 100vh;


      .img-box {
        position: absolute;
        left: 0;
        top: 50%;
        opacity: 0;
        transform: translate(20px, -50%);
        transition: all 0.7s ease-in-out;
        width: 100%;
        // height: 100vh;
      }
      .fade-right-in {
        transform: translate(0, -50%) !important;
      }
    }
  }
}


</style>
