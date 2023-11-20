<template>
  <div class="c-white section-wrapper pos-relative">
    <div class="snmk-container text-center text-wrapper vertical-center">
      <div class="snmk-col-8 snmk-col-l-8  snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1 text-container">
        <div class="sw-title bold-700 mb-m mt-xl" v-html="dataSrc.title"></div>
        <div v-if='dataSrc.desc' class="title-4 bold-500" v-html="dataSrc.desc"></div>
      </div>
      <div class="snmk-col-10 snmk-col-l-10  snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 pos-relative img-container my-m">
          <template v-if="!isMobile">
            <MediaViewAdapter
              v-for="(item, index) of dataSrc.displays" :key="item.title"
              :options="{
                isAdapteHeight: true,
                imgSrc: item.imgSrc,
                lazyLoad: false,
                alt: item.alt,
                mobAlt: item.mobAlt
              }"
              class="bg-img"
              :id="'magnifier-' + index"
              :class="{'opacity fade-in z-10': index === currDisplayIdx}"
              :style="{'position': index === 0 ? 'relative' : 'absolute'}"
            >
            </MediaViewAdapter>
          </template>
          <Swiper v-else
            @changeSlide="changeSlide"
            :swiperId="screenId"
            class="h-100"
            style="display: flex"
            @loaded='mapSwiperRef'
          >
            <div class="swiper-slide"  v-for="(item, index) in dataSrc.displays" :key="index">
              <img :src="item.imgSrcMob" :alt="item.mobAlt">
            </div>
          </Swiper>
      </div>
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 pagination-container" >
        <div v-if="isMobile" class="title-4 bold-700 w-100 text-center mb-m" v-html="currDisplay.title"></div>
        <div class="pagination-wrapper">
          <div class="pagination-item mb-2xl"
            v-for="(item, index) of dataSrc.displays" :key="item.title"
            :class="{'pagination-item-active': index === currDisplayIdx}"
            @click="selectPage(index)"
          >
            <div v-if="!isMobile" class="title-4 mt-s bold-700" v-html="item.title"></div>
            <div v-if="!isMobile" class="font-3 mt-2xs" v-html="item.text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import Swiper from '@@/components/swiper/Swiper.vue'
import $ from '@@/resources/js/jquery-vendor'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const props = withDefaults(defineProps<{
  screenId: string
  dataSrc: any
  useBlowUp?: boolean
}>(),{screenId: 'dataSrc', dataSrc: {}, useBlowUp: true})
const { isMobile } = storeToRefs(useGlobalStore())
const swiperRef = ref()
const mapSwiperRef = (swiper: any) => swiperRef.value = swiper
const currDisplayIdx = ref(0)
const currDisplay = computed(() => props.dataSrc.displays[currDisplayIdx.value])
const selectPage = (index: number) => {
  currDisplayIdx.value = index
  if(isMobile.value){
    swiperRef.value?.slideTo(index)
  }
}
const changeSlide = (index: number) => selectPage(index)
onMounted(() => {
  if (isMobile.value || !props.useBlowUp) return
  props.dataSrc.displays.forEach((v: any, i: number) => {
    $(`#magnifier-${i} img`).blowup({
      scale: 2,
      background: '#C7C7CD'
    })
  })

})


</script>


<style scoped lang="scss">
@import '../theme.scss';
.section-wrapper {
  min-height: unset;
  background-color: #C8C7CD;
  color: $black;

  &::v-deep .swiper-container {
    background-color: #C8C7CD;
  }
}
.sw-title {
  color: var(--unnamed, #1C1E20);
  text-align: center;

  /* Heading/1920/Gilroy Bold-44 */
  font-family: Roboto;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 127.273% */
  letter-spacing: -0.24px;
  @include mobile {
    font-size: 28px;
    line-height: 36px;
  }
}

.pagination-box, .bg-img-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text-wrapper {
  position: relative;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.7s ease-in-out;
}
.pagination-container {
  color: white;
}
.pagination-wrapper {
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.pagination-item {
  position: relative;
  margin-left: 24px;
  width: 30%;
  cursor: pointer;

  &:first-child { margin-left: 0;}

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 4px;
    width: 100%;
    background-color: white;
    border-radius: 36px;
  }
}
.pagination-item-active {
  color: black;
  &::before {
    background-color: black;
  }

}

.text-container, .pagination-container  {
  flex: 0 0 auto;
}
.img-container {
  flex: 1 1 auto;
}


@include mobile{
  .bg-img {
    opacity: 1;
    transform: unset;
  }
  .pagination-box {
    height: auto;
    top: unset;
    z-index: 10;
    bottom: 0;
  }
  .text-wrapper {
    z-index: 11;
    height: auto;
  }
  .pagination-item {
    margin-bottom: 24px;
  }
}


</style>
