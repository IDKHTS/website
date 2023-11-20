<template>
  <div>
    <SwiperActiveProgress :id="'tutorial'" :options="tutorialsOptions" class="video-tutorials-content">
      <div class="swiper-slide"  v-for="(tutorial, index) of videoTutorialsData.tutorials" :key="tutorial.title">
        <div :ref="'tutorial'+index" class="tutorial" @click="onOpenTutorialVideo(tutorial.btn.link)">
          <div style="position: relative">
            <img style="width: 100%" :src="tutorial.imgSrc" alt="">
            <button v-if="activeTutorialIndex == index" class="tutorial-btn snmk-primary-btn only-pc mb-xl active-show" @click="onOpenTutorialVideo(tutorial.btn.link)">
              <span class="iconfont mr-xs ">&#xe612;</span>
              {{tutorial.btn.text}}
            </button>
          </div>
          <div class="tutorial-title font-bw-8 bold mb-xs active-show">{{tutorial.title}}</div>
          <div class="font-bw-4 font-2 active-show">{{tutorial.time}}</div>
        </div>
      </div>
    </SwiperActiveProgress>
    <modal v-if="isShowModal" @close="isShowModal = false" :videoSrc="tutorialVideoSource"> </modal>
  </div>
</template>

<script setup lang='ts'>
import Modal from '@@/components/VideoModal.vue'
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
import { SwiperOptions } from 'swiper/types/swiper-options';

defineProps<{ videoTutorialsData: any }>()
const { isMobile } = storeToRefs(useGlobalStore())

const tutorialVideoSource = ref('')
const isShowModal = ref(false)
const onOpenTutorialVideo = (link: string) => {
  tutorialVideoSource.value = link
  isShowModal.value = true
}

const activeTutorialIndex = ref(0)
const tutorialsOptions = ref<SwiperOptions & { timeAry?: number[] }>({})
onBeforeMount(() => {
  tutorialsOptions.value = {
      timeAry: [4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000], // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
      slidesPerView: isMobile.value ? 1.5 : 2,
      spaceBetween: isMobile.value ? 16 : 30,
      watchSlidesProgress: true,
      speed: 1000,
      centeredSlides: true,
      loop: true,
      on: {
        slideChange (swiper) {
          activeTutorialIndex.value = swiper?.realIndex
        }
      }
    }
})

          // TODO: use vue3 ref ge el


</script>


<style lang="scss" scoped>

.video-tutorials-content {
  padding-bottom: 130px;

  height: calc(31.435vw + 130px);

  &::v-deep .swiper-pagination {
    bottom: 80px
  }
}
.swiper-wrapper {
  display: flex;
  align-items: flex-start;
}
.swiper-slide-prev {
  .tutorial {
    display: block;
    float: right;
  }
}
.swiper-slide-active {
  position: relative;
  // display: flex;
  justify-content: center;

  .tutorial {
    width: 100%
  }

  .active-show {
    display: block;
  }
}
.swiper-slide-next {
  display: block;
  float: left;
}
.tutorial {
  cursor: pointer;
  width: 50%;
  transition: all 0.5s ease-in-out;
  img {
    border-radius: 12px;
  }

  &:hover .tutorial-btn{
    color: $link;
  }
}
.tutorial-title {
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  margin-top: 24px;
}
.tutorial-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50% );

  // bottom: 52px;
  // right: 44px;
  border-radius: 12px;
  background-color: white;
  color: $black;

  &:hover {
    color: $black;
  }
}

.active-show {
  display: none;
}



@media (min-width: $breakPoint_m) and (max-width: $breakPoint_xl) {
  .video-tutorials-content{
    height: calc(33.435vw + 130px);
  }

}

@media (max-width: $breakPoint_m) {
  .tutorial {
    width: 100%;
    img {
      border-radius: 4px;
    }
  }
  .tutorial-title {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    margin-top: 16px;
  }
  .video-tutorials-content{
    height: auto;
  }


}


</style>
