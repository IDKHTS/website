<template>
  <div class='screen-wrapper'>
    <template v-if="!isMobile">
      <div class='text-wrapper'>
        <div class='snmk-container'>
          <div class='snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-content'>
            <div class="s-title page-title-color" v-html="dataSrc.title"></div>
            <div class='s-desc mt-m' v-html='dataSrc.desc'></div>
            <CheckoutNavWeb @selectIndex="selectIndex" 
              :currDisplayIdx="currDisplayIdx" :autoPlay='true'
               :options="dataSrc"
              class="mt-3xl display-flex"
            ></CheckoutNavWeb>
          </div>
        </div>
      </div>
      <div class='canvas-wrapper'>
        <canvas ref="canvas" class="fa-canvas"></canvas>
      </div>
    </template>
    <template v-else>
      <div class='text-wrapper'>
        <div class='snmk-container'>
          <div class='snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-content'>
            <div class="s-title page-title-color" v-html="dataSrc.title"></div>
            <div class='s-desc mt-m' v-html='dataSrc.desc'></div>
          </div>
        </div>
      </div>
      <Swiper
        @changeSlide="changeSlide"
        :swiperId="'screen13'"
        class="w-100"
        :autoPlay='true'
        @loaded='mapSwiperRef'
      >
        <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index">
          <!-- <img :src="item.imgSrcMob" alt=""> -->
          <MediaViewAdapter  
            :options="{
              imgSrc: item.imgSrcMob,
              alt: item.alt,
              mobAlt: item.mobAlt
            }"
          >
          </MediaViewAdapter>
        </div>
        <template v-slot:pagination>
          <div id="page-test" v-if="isMobile">
            <div class="mb-xl checkout-nav-wrapper">
              <div class="checkout-nav-text font-2 mb-l ">{{currDisplay.text}}</div>
              <div class="checkout-nav-item">
                <div v-for="(item, index) of dataSrc.displays" :key="item.text" @click="selectIndex(index)"
                class="checkout-nav title-4"
                :class="{'checkout-nav-active bold-700': index === currDisplayIdx}"
                >
                </div>
              </div>
            </div>
          </div>
        </template>
      </Swiper>
    </template>
  </div>
</template>

<script setup lang='ts'>
import calcWH from '@@/resources/js/calcWH'
import Swiper from '@@/components/swiper/Swiper.vue'
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import CheckoutNavWeb from '@@/components/CheckoutNavWeb.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const props = withDefaults(defineProps<{ dataSrc: any }>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())
const currDisplayIdx = ref(0)
const currDisplay = computed(() => props.dataSrc.displays[currDisplayIdx.value])


const canvas = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D | null>()
const imgWH = ref<{
    targetWidth: number;
    targetHeight: number;
}>()
const optionsFrameImgs = ref<any[]>([])
const swiperRef = ref()
const mapSwiperRef = (swiper: any) => swiperRef.value = swiper
const initCanvas = () => {
  if (!process.client || !canvas.value) return
  // const imgPrefix = this.isMobile ? this.screen14.framesPrefixMob : this.screen14.framesPrefix
  // const wrapper = this.$refs['fa-wrapper']
  ctx.value = canvas.value.getContext('2d')!
  imgWH.value = isMobile.value ? calcWH(720, 1440, window.innerWidth, window.innerHeight) : calcWH(1920, 1080, window.innerWidth, window.innerHeight)
  canvas.value.width = imgWH.value.targetWidth
  canvas.value.height = imgWH.value.targetHeight
  canvas.value.style.width = imgWH.value.targetWidth + 'px'
  canvas.value.style.height = imgWH.value.targetHeight + 'px'
  ctx.value.fillStyle = 'black'
  ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
  initSwiperBg()
  checkoutBg()
}
const drawImage = (img: any)=> {
  if (!img || !img.complete || !canvas.value || !ctx.value) return
  ctx.value.drawImage(img, 0, 0, canvas.value.width, canvas.value.height)
}
const initSwiperBg = () => {
  const displays = props.dataSrc.displays
  for (let i = 0; i < displays.length; i++) {
    const img = new Image()
    optionsFrameImgs.value.push(img)
    img.src = isMobile.value ? displays[i].imgSrcMob : displays[i].imgSrc
    img.onload = () => {
      drawImage(optionsFrameImgs.value[currDisplayIdx.value])
    }
  }
}
const selectIndex = (index: number) => {
  currDisplayIdx.value = index
  isMobile.value && swiperRef.value.slideTo(index)
  checkoutBg()
}
const checkoutBg = () => {
  drawImage(optionsFrameImgs.value[currDisplayIdx.value])
}
const changeSlide = (index: number) => selectIndex(index)

onMounted(() => {
  if(!isMobile.value) {
    initCanvas()
  }
})

</script>

<style scoped lang='scss'>
@import '../theme.scss';
.screen-wrapper {
  min-height: 100vh;
  // width: 100vw;
  position: relative;
  padding-top: 100px;
  background-color: black;
}
.text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .snmk-container {
    height: 100%;
  }
  .text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .s-title {
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 68px; /* 113.333% */
    letter-spacing: -0.24px;

    @include mobile {
      font-size: 36px;
      line-height: 44px;
    }
  }
  .s-desc {
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;
    @include mobile {
      color: var(--unnamed, #C2C2C2);
      font-size: 16px;
      line-height: 24px; /* 150% */
    }
  }
  &::v-deep {
    .checkout-nav-active-bar {
      background-color: white;
    }
    .checkout-nav {
      color: white;
    }
  }

  @include mobile {
    z-index: 20;
    height: auto;

    .snmk-container {
      height: auto;
    }
    .text-content {
      justify-content: flex-start;
      text-align: center;
    }
    .s-title {
      margin-top: 40px;
    }
  }
}

.swiper-slide {
  line-height: 0;
  height: 100vh;
}
#page-test {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;

  .checkout-nav-wrapper {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .checkout-nav {
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}

</style>
