<template>
  <div class="snmk-container">
    <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4
      snmk-col-offset-1 snmk-col-l-offset-1
      software-display-wrapper pt-3xl"
      >
      <div class="video-wrapper">
        <template v-for="(item,index) of softwareDisplayData.displayList" style="position: relative">
          <template v-if="!isMobile">
            <video  :ref="'video'+index"  :key="item.title + index"
              :class="{'fade-left': activeIndex === index}"
              muted preload autoplay
              class="software-display-video" data-aos="fade-left"  data-aos-duration="2000"
              style="object-fit: cover;font-family: 'object-fit: cover;';object-position:center;vertical-align: bottom;">
              <source :src="item.videoWebmSrc">
              <source :src="item.videoMp4Src">
            </video>
          </template>
          <template v-else >
            <img :ref="'video'+index"
              :key="item.title + index"
              :class="{'fade-left': activeIndex === index}"
              :src="item.videoSrcMob"
              :alt="item.title"
              class="software-display-video"
            >
          </template>
        </template>
      </div>
      <div class="display-screenshot-content">
        <div class="display-screenshot-text">
          <span class="title-1 bold">{{activeDislayObj.title}}</span>
          <div class="font-2 font-bw-4 mt-s">
            <span :class="{'font-bw-5 bold': description.isHighlight}" v-for="description of activeDislayObj.descriptions" :key="description.words">
              {{description.words}}
            </span>
          </div>
        </div>
        <div class="display-screenshot" :style="{'background-image': `url('${softwareDisplayData.deviceImgSrc}')`}">
          <div class="display-screenshot-swiper">
            <SwiperActiveProgress :options="swiperOptions" :id="'software-display'">
              <div class="swiper-slide"  v-for="(item,index) of softwareDisplayData.displayList" :key="item.title + index">
                <img :src="item.imgSrc" :alt="item.title">
              </div>
            </SwiperActiveProgress>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup lang='ts'>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { storeToRefs } from 'pinia'
import { SwiperOptions } from 'swiper/types/swiper-options'
import { useGlobalStore } from '~/stores'
if (process.client) {
  AOS.init()
}

const { softwareDisplayData } = defineProps<{ softwareDisplayData: any }>()
const { isMobile } = storeToRefs(useGlobalStore())
const activeIndex = ref(0)
const swiperOptions = ref<SwiperOptions & {timeAry?: number[]}>({})

const activeDislayObj = ref(softwareDisplayData.displayList[0])
onBeforeMount(() => {
  swiperOptions.value = {
      timeAry: new Array(softwareDisplayData.displayList.length).fill(6 * 1000),
      slidesPerView: 1,
      speed: 1000,
      centeredSlides: true,
      // loop: true,
      // direction: 'vertical',
      // controler: {
      //   control: videoSwiper
      // },

      on: {
        slideChange () {
          if (isMobile.value) return
          activeDislayObj.value = softwareDisplayData.displayList[activeIndex.value]
          activeIndex.value = activeIndex.value

          // TODO: use vue3 ref ge el
          // $refs['video' + this.activeIndex][0].load()
          // vue.$refs['video' + this.activeIndex][0].play()
        },
        init () {
          if (isMobile.value) return
          // TODO: use vue3 ref ge el
          // vue.$refs['video' + this.activeIndex][0].load()
          // vue.$refs['video' + this.activeIndex][0].play()
        }
      }
    }
})




</script>

<style lang="scss" scoped>

.software-display-wrapper {
  position: relative;
  padding-bottom: 270px;
  overflow: hidden;
}
.video-wrapper {
  position: relative;
  height: 25.52vw;
}
.software-display-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 12px;
  opacity: 0 !important;
  transform: translateX(50px);
}
.fade-left {
  opacity: 1 !important;
  transform: translateX(0) !important;
  transition: all 2s ease-in-out;
}


.display-screenshot-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
}

.display-screenshot-text {
  padding: 4.16vw 0;
  width: 50%;

  .title-1.bold {
    background: linear-gradient(to right, #0CE2D5, #0C63E2);
    -webkit-background-clip: text;
    color: transparent;
  }
}

.display-screenshot {
  width: 28.385vw;
  height: 16.458vw;

  position: relative;
  top: -8.48vw;
  z-index: 10;

  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;


}
.display-screenshot-swiper {
  width: 76.512%;
  height: 82.276%;
  margin-top: 3.669%;
  overflow: visible;
  // width: 21.718vw;
  // height: 13.541vw;
  // overflow: hidden;
  // margin-top: 0.989vw;
  #software-display {
    overflow-y: visible;
  }


  &::v-deep .swiper-container {
    position: static;
    height: 100%;
  }

  &::v-deep .swiper-pagination {
    margin-top: 24px;
    left: 50%;
    transform: translateX(-50%);
    top: 100%;
  }
}
.swiper-slide {
  // img {width: 100%;height: 100%;}
}




@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
  .video-wrapper {
    height: 33vw;
  }
  .software-display-wrapper {
    padding-bottom: 230px;
  }



  .display-screenshot-text {
    .title-1.bold {
      background: transparent;
      -webkit-background-clip: unset;
      color: white;
    }
  }


}

@media (max-width : $breakPoint_m) {
  .software-display-wrapper {
    padding-bottom: 60px;
  }
  .display-screenshot-content {
    position: static;
    flex-direction: column-reverse;
    justify-content: space-between;

  }
  .display-screenshot-text {
    width: 100%;
    margin-top: 48px;
    text-align: center;

    .title-1.bold {
      background: transparent;
      -webkit-background-clip: unset;
      color: white;
    }
  }
  .fade-left {
    opacity: 1 !important;
    transform: translateX(0) !important;
    transition: all 1s ease-in-out;
  }

  .display-screenshot {
    position: relative;
    top: auto;
    width: calc(100vw - 48px);
    height: calc((100vw - 48px) * 199 / 343);
  }


}

@media (max-width : $breakPoint_s) {
  .display-screenshot {
    position: relative;
    top: auto;
    width: calc(100vw - 32px);
    height: calc((100vw - 32px) * 199 / 343);
  }
}



</style>
