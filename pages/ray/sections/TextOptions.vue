<template>
  <div class="bg-black c-white section-wrapper" :class="{'py-3xl': dataSrc.title, 'py-xl': !dataSrc.title}" style="position: relative">
    <div class="snmk-container w-100 section-text-box">
      <div v-if="dataSrc.title" class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4  snmk-col-offset-1 snmk-col-l-offset-1 vertical-center">
        <h1 class="first-title bold-700 text-center w-100 mb-3xl" v-html="dataSrc.title"></h1>
      </div>
      <div class="vertical-center snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4  snmk-col-offset-1 snmk-col-l-offset-1"
        :style="{ order: !isOptionLeft ? 1 : 0}"
      >
        <div>
          <!-- <div class='title-4 sf-desc' v-html='dataSrc.desc'></div> -->
          <div  v-if="!isMobile" class="mt-xl display-flex" >
            <div class="checkout-nav-bar-wrapper">
              <div v-for="(item, index) of dataSrc.displays" :key="item.text" @click="selectIndex(index)"
              class="checkout-nav-bar"
              :class="{'checkout-nav-active-bar': index === currDisplayIdx}"
              >
              </div>
            </div>
            <div class="ml-l">
              <div v-for="(item, index) of dataSrc.displays" :key="item.text" @click="selectIndex(index)"
              class="mt-m checkout-nav title-4"
              :class="{'checkout-nav-active bold-700': index === currDisplayIdx}"
              >
                <span v-html='item.text'></span>
                <div class="title-4 sf-desc mt-m" :ref="el => mapDescEl(el, index)" v-html='item.desc'></div>
              </div>
            </div>
          </div>
          <template v-for="(item, index) of dataSrc.displays">
            <div class="text-center mob-title my-m"  v-if='isMobile && index === currDisplayIdx'  :key="item.text+'text'">{{item.text}}</div>
            <div :key="item.text" v-if='isMobile && index === currDisplayIdx' class="title-4 sf-desc">{{item.desc}}</div>
          </template>
        </div>
      </div>
      <div class="pos-relative snmk-col-6 snmk-col-l-6 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1"
        v-if="!isMobile"
        :style="{ order: isOptionLeft ? 1 : 0}"
      >
        <template v-for="(item, index) of dataSrc.displays" :key="item.text">
          <video  v-if='item.videoWebm || item.videonMp4' :ref="el => mapVideo(el, index)" :key="item.text"
            muted :poster="item.poster" :autoplay="false"
            :preload="'metadata'"
            loop webkit-playsinline
            playsinline
            x5-video-player-type="h5-page"
            class="displays-img" :class="{'opacity fade-in': index === currDisplayIdx}"
            :style="{ position: index === 0 ? 'relative' : 'absolute' }"
          >
            <source :src="item.videoWebm">
            <source :src="item.videonMp4">
          </video>
          <NuxtImg v-else
            :src="isMobile ? item.imgSrcMob :item.imgSrc " :alt="isMobile ? item.mobAlt : item.alt"
            class="displays-img" :class="{'opacity fade-in': index === currDisplayIdx}"
            :style="{ position: index === 0 ? 'relative' : 'absolute' }" loading='lazy'
          />
        </template>
        <div v-if='currDisplay.note' class="text-center font-2 note mb-xl">* {{currDisplay.note}}</div>
      </div>
    </div>
    <Swiper v-if="isMobile"
      @changeSlide="changeSlide" 
      :options="{ autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } }" 
      :swiperId="screenId"
      class="section-img-box w-100 h-100"
      @loaded='mapSwiper'
    >
      <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index">
        <MediaViewAdapter
          :options="{
            imgSrc: item.imgSrcMob,
            gifSrc: item.animationImgSrc,
            alt: item.alt,
            mobAlt: item.mobAlt
          }" 
        />
      </div>
    </Swiper>
    <div class='wrapper-cover'> </div>
    <CheckoutNavMob @selectIndex="selectIndex" 
      :currDisplayIdx="currDisplayIdx" :options="dataSrc"
      class="mt-3xl display-flex"
      :withTitle='false'
      ></CheckoutNavMob>
  </div>
</template>

<script setup lang='ts'>
import Swiper from '@@/components/swiper/Swiper.vue'
import calcWH from '@@/resources/js/calcWH.js'
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import CheckoutNavMob from '@@/components/CheckoutNavMob.vue'
import $ from '@@/resources/js/jquery-vendor'
import _ from 'lodash'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
  screenId?: string
  isOptionLeft?: boolean
}>(), { dataSrc: {}, screenId: 'safe-sound', isOptionLeft: true })
const { isMobile } = storeToRefs(useGlobalStore())

const videoElArr = ref<(Element | ComponentPublicInstance | null)[]>([])
const mapVideo = (el: Element | ComponentPublicInstance | null, index: number) => videoElArr.value[index] = el
const swiper = ref<any>({})
const imgViewWidth = ref(0)
const imgViewHeight = ref(0)
const bgImgWidth = ref(0)
const bgImgHeight = ref(0)
const timerRef = ref(0)
const delay = ref(5 * 1000)
const currDisplayIdx = ref(0)
const currDisplay = computed(() => {
  return props.dataSrc.displays[currDisplayIdx.value]
})

const descElArr = ref<(Element | ComponentPublicInstance | null)[]>([])
const mapDescEl = (el: Element | ComponentPublicInstance | null, index: number) => descElArr.value[index] = el
const mapSwiper = (_swiper: any) => swiper.value = _swiper
const initBg = (options: any) => {
  return new Promise((resolve, reject) => {
    if (!options) reject(new Error('no options'))
    let width = 0
    let height = 0
    if (options.imgOringinalWidth && options.imgOringinalHeight) {
      width = options.imgOringinalWidth
      height = options.imgOringinalHeight
      resolve(calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerHeight))
      return
    }

    const img = new Image()
    img.src = options.imgSrc
    img.onload = function () {
      const width = options.imgOringinalWidth || img.width
      const height = options.imgOringinalHeight || img.height
      resolve(calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth))
    }
    img.onerror = err => { console.log(err); reject(err) }
  })
}
const selectIndex = (index: number) => {
  currDisplayIdx.value = index
  isMobile.value && swiper.value.slideTo(index)


  if (isMobile.value) {
    swiper.value.slideTo(index)
  } else {
    // autoplay
    clearTimeout(timerRef.value)
    timerRef.value = setTimeout(() => {
      const nextIndex = index === props.dataSrc.displays.length - 1 ? 0 : index + 1
      selectIndex(nextIndex)
    }, delay.value)
  }
  
  if (!videoElArr.value[index]) return
  const video = videoElArr.value[index] as HTMLVideoElement
  if (!video) return
  video.currentTime = 0
  video.play().catch(err => console.log(err))
}
const imgAdapteHeight = () => {
  const el = swiper.value.el
  imgViewHeight.value = isMobile.value ? el.clientHeight : window.innerHeight
}
const changeSlide = (index: any) => currDisplayIdx.value = index


const initBgImg = _.throttle(() => {
  imgAdapteHeight()
  initBg({
    imgSrc: isMobile.value ? props.dataSrc.displays[0] : props.dataSrc.displays[0].imgSrc,
    imgOringinalWidth: 1094,
    imgOringinalHeight: 1080,
    viewWidth: imgViewWidth.value,
    viewHeight: imgViewHeight.value
  }).then((v: any) => {
    bgImgWidth.value = v.targetWidth
    bgImgHeight.value = v.targetHeight
  })
}, 100)
onMounted(() => {
  if (!isMobile.value) {
    clearTimeout(timerRef.value)
    timerRef.value = setTimeout(() => {
      const nextIndex = currDisplayIdx.value === props.dataSrc.displays.length - 1 ? 0 : currDisplayIdx.value + 1
      selectIndex(nextIndex)
    }, 5 * 1000)
  }
  initBgImg()
  window.addEventListener('resize', initBgImg)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', initBgImg)
})

watch(currDisplayIdx, (newV, oldV) => {
  if (isMobile.value || typeof newV === 'undefined' || newV === oldV) return
  $(descElArr.value[oldV]).stop(true)?.slideUp('slow')
  $(descElArr.value[newV]).stop(true)?.slideDown('slow')
})
</script>


<style scoped lang="scss">
@import '../theme.scss';

.note {
  width: 100%;
  position: absolute;
  opacity: 0.6;
  bottom: 0;
  left: 0;
}

.section-wrapper {
  display: flex;
  align-items: center;
  .section-img-box {
    display: flex;
    background-position: center center;
  }

  &::v-deep .swiper-container {
    background-color: transparent;
  }
  &::v-deep .checkout-nav-active-bar {
    background-color: #fff;
  }
  &::v-deep .checkout-nav-active {
    color: white;
  }
}
.se-desc {
  // max-height: 0;
  // margin-top: 32px;
  // display: none;
  color: var(--white, #FFF);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
  transition: all 0.5 ease-in-out;
  overflow: hidden;


  @include mobile {
    display: block;
    margin-top: 16px;
    text-align: center;
  }
}
.checkout-nav:first-child .se-desc{
  display: block;
}
.opacity {
  opacity: 1 !important
}
.fade-in {
  transform: translateX(-50%) !important
}
.displays-img {
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 0;
  transform: translateX(calc(-50% - 20px));
  transition: all 1s ease-in-out;
}


.swiper-slide {
  background-position: center center;
}
.sf-desc {
  // max-height: 0;
  // margin-top: 32px;
  display: none;
  color: var(--white, #C2C2C2);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
  transition: all 0.5 ease-in-out;
  overflow: hidden;


  @include mobile {
    color: white;
    display: block;
    margin-top: 16px;
    text-align: center;
  }
}
.checkout-nav:first-child .sf-desc{
  display: block;
}

@include mobile{
  .section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .section-img-box {
      margin-top: 64px;
      flex: 1 1 auto;
    }
    .section-text-box {
      margin-top: 40px;
      flex: 0 0 auto;
    }
  }
  .mob-title {
    color: var(--white, #FFF);
    text-align: center;

    /* Heading/375/Gilroy Bold-20 */
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 140% */
    letter-spacing: -0.24px;
  }

  .checkout-nav-wrapper {
    justify-content: center;
    .checkout-nav {
      margin-left: 16px;

      &:first-child {margin-left: 0;}
    }
  }

  .wrapper-cover {
    content: '';
    z-index: 1;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 155px;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 100%);
  }
}

@media (max-width: $breakPoint_m) {
}

@media (min-width: $breakPoint_m) and (max-width: $breakPoint_xxxl){
  .section-wrapper {
    display: flex;
    align-items: center;
    .section-img-box {
      position: absolute;
      right: 0;
      top: 0;

      opacity: 0;
      transform: translateX(20px);
      transition: all 0.7s ease-in-out;
      height: 100vh;
    }
  }
}


</style>
