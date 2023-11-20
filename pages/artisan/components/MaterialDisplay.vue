<template>
  <div class="bg-black-2 h-client vertical-center pos-relative" :class="{'h-100vh': isMobile}" >
    <div class="snmk-container" :class="{'w-100': !isMobile}">
      <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 pt-3xl" :class="{'pb-3xl': !isMobile, 'text-center': isMobile}" data-aos="fade-up">
        <div class="title-1 bold-700 mb-m" v-html="dataSrc.title" ></div>
        <div class="title-4"  v-html="dataSrc.desc"></div>
        <div v-if="!isMobile" class="materials-selectors mt-xl">
          <div class="material-item" v-for="(item,index) of dataSrc.displays" :key="item.text+index">
            <div class="material-wrapper mt-l" >
              <div class="material-circle" :class="{'material-circle-active': index === currDisplayIdx}" @click="selectedIndex(index)">
                <div v-show="index !== currDisplayIdx" class="material-cover"></div>
                <NuxtImg class="material" :src="item.materialImg" :alt="item.alt" loading='lazy'/>
              </div>
              <div :class="{'c-w': index === currDisplayIdx}" class="material-text font-3 font-bw-3" >{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="snmk-col-7 snmk-col-l-7 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4">
        <div ref="widthEl" class="w-100"></div>
      </div>
    </div>
    <div class="bg-img h-100" :style="{width: imgViewWidth+'px'}">
      <template v-if="!isMobile">
        <MediaViewAdapter
          v-for="(item,index) of dataSrc.displays" :key="item.text"
          :options="{
            imgSrc: isMobile? item.imgSrcMob : item.imgSrc,
            alt: item.alt,
            mobAlt: item.mobAlt
          }"
          class="material-display"
          :class="{'opacity fade-left-in': index === currDisplayIdx}"
        >
        </MediaViewAdapter>
      </template>
      <SwiperComponent v-else
        @changeSlide="selectedIndex"
        :swiperId="screenId"
        :isInnerWidth="true"
        class="h-100 w-100"
        @loaded="swiperLoaded"
      >
        <div class="swiper-slide" v-for="item of dataSrc.displays" :key="item.text">
          <MediaViewAdapter
            :options="{
              imgSrc: item.imgSrcMob,
              imgOriginalWidth: 720,
              imgOriginalHeight: 960,
              alt: item.alt,
              mobAlt: item.mobAlt
            }"
          >
          </MediaViewAdapter>
        </div>
      </SwiperComponent>
    </div>

    <template v-if="isMobile">
      <div class="materials-selectors z-10">
        <div class="material-text font-1 c-white bold-600 text-center">{{currDisplay.text}}</div>
        <div class="snmk-px w-100 pr-0">
          <div class="swiper" :id="'swiper'+screenId">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) of dataSrc.displays" :key="item.text">
                <div class="material-wrapper mt-l">
                  <div class="material-circle" :class="{'material-circle-active': index === currDisplayIdx}" @click="selectedIndex(index)">
                    <div v-show="index !== currDisplayIdx" class="material-cover"></div>
                    <NuxtImg class="material" :src="item.materialImg" :alt="item.mobAlt" loading='lazy'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import SwiperComponent from '@@/components/swiper/Swiper.vue'
import Swiper from 'swiper'
import _ from 'lodash'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import { SwiperOptions } from 'swiper/types/swiper-options'

const props = withDefaults(defineProps<{
  dataSrc: any
  autoPlay?: boolean
  screenId?: string
}>(), { dataSrc: {}, autoPlay: true, screenId: 'materials-dispaly'})
const { isMobile } = storeToRefs(useGlobalStore())

const imgViewWidth = ref(0)
const timerRef = ref(0)
const currDisplayIdx = ref(0)
const widthEl = ref()
const currDisplay = computed(() => props.dataSrc.displays[currDisplayIdx.value])


const swiper = ref({})
const materialsSwiper = ref({})
const swiperLoaded = (_swiper: any) => {
  swiper.value = _swiper
  console.log(_swiper)
  const options: SwiperOptions = {
    slidesPerView: Math.floor(window.innerWidth / 52),
    controller: {
      control: _swiper
    }
  }
  options.autoplay = props.autoPlay
  materialsSwiper.value = new Swiper('#swiper' + props.screenId, options)
  _swiper.control = materialsSwiper.value
}



const selectedIndex = (index: number) => {
  currDisplayIdx.value = index
  isMobile.value && swiper.value && swiper.value.slideTo(index)
  if (!props.autoPlay) return
  clearTimeout(timerRef.value)
  timerRef.value = setTimeout(() => {
    selectedIndex((currDisplayIdx.value >= props.dataSrc.displays.length - 1) ? 0 : currDisplayIdx.value + 1)
  }, 5 * 1000)
}
const imgAdapteWidth = () => {
  const el = widthEl.value
  imgViewWidth.value = isMobile.value ? window.innerWidth : (window.innerWidth - el.getBoundingClientRect().left - 100 + 17)
}


const resize = _.throttle(() => {
  let innerHeight = window.innerHeight
  if (isMobile.value && innerHeight !== window.innerHeight) return
  innerHeight = window.innerHeight
  imgAdapteWidth()
}, 100)
onMounted(() => {
  selectedIndex(0)
  imgAdapteWidth()

  window.addEventListener('resize', resize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
})
</script>


<style scoped lang="scss">
@import '../theme.scss';

.materials-selectors {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  justify-content: space-between;

  .material-item {
    width: 21%;
  }

  .material-wrapper {
    max-width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    text-align: center;
  }

  .material-circle {
    user-select: none;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3px;
    border-radius: 50%;
    border: 2px transparent solid;
    line-height: 0;

  }
  .material-cover, .material {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .material-cover {
    position: absolute;
    top: 3px;
    left: 3px;
    background-color: rgba( 0, 0, 0, 0.2);
  }
  .material-circle-active {
    border: 2px $blue solid;
  }
  .material-text {
    margin-top: 6px;
  }
}
.c-w {
  color: white;
}

.bg-img{
  position: absolute;
  right: 0;
  top: 0;
}
.material-display {
  position: absolute !important;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translate(20px);
  transition: all 0.7s ease-in-out;
}

@include mobile{
  .bg-black-2 {
    display: flex;
    flex-direction: column;

    .snmk-container {
      height: auto;
      position: static;
      flex: 0 0 auto;

    }
    .bg-img {
      position: relative;
      margin-top: 28px;
      flex: 1 1 auto;
      height: auto;
      display: grid;
      overflow: hidden;
    }
    .bg-img:deep(.swiper) {
      height: 100%;
    }
  }


  .pr-0 {
    padding-right: 0;
  }
  .materials-selectors {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;

    &::-webkit-scrollbar { height: 0; width: 0 !important }

    .materials-container {
      margin-top: 0;
      display: flex;
      flex-wrap: nowrap;

      overflow: auto;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;

      &::-webkit-scrollbar { height: 0; width: 0 !important }
    }
    .material-wrapper {
      margin-left: 8px;
      margin-right: 8px;
    }
    .material-item {
      margin-top: 16px;
    }
    .material-circle {
      position: relative;
      width: 38px;
      height: 38px;
      padding: 2px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .material-cover, .material {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
  .material-display {
    opacity: 1;
  }
}



@media (min-width: $breakPoint_m) {
  .materials-selectors .material-item {
    &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4) { margin-top: 0 !important}
  }

}

</style>

