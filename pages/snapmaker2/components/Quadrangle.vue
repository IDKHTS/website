<template>
  <div class='highlight-comp'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class="page-title" v-html='dataSrc.title'></div>
        <div v-if='!isMobile' class='hl-display-list'>
          <div class='hl-display' v-for='item of dataSrc.displayList' :key='item.title'>
            <div class='hl-text-box'>
              <div class='hld-title' v-html='item.title'></div>
              <div class='hld-desc' v-html='item.desc'></div>
            </div>
            <div class='hld-img-box'><NuxtImg :src="item.imgSrc" :alt="item.title" loading='lazy' /></div>
          </div>
        </div>
        <template v-else>
          <SwiperActiveProgress class='hl-swiper' :id="'hl-swiper'+_uid" :options="swiperOptions">
            <div class='swiper-slide hl-display' v-for='item of dataSrc.displayList' :key='item.title'>
              <div class='hl-text-box'>
                <div class='hld-title' v-html='item.title'></div>
                <div class='hld-desc' v-html='item.desc'></div>
              </div>
              <div class='hld-img-box'><img :src="item.imgSrc" :alt="item.title"></div>
            </div>
          </SwiperActiveProgress>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
import _ from 'lodash';


const props = defineProps<{
  dataSrc: any
}>()

const _uid = _.uniqueId()
const { isMobile } = storeToRefs(useGlobalStore())
const activeTutorialIndex = ref(0)
const swiperOptions = ref({
  timeAry: [4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000], // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
  slidesPerView: 1,
  spaceBetween: 12,
  watchSlidesProgress: true,
  speed: 1000,
  centeredSlides: true,
  // loop: true,
  on: {
    slideChange () {
      activeTutorialIndex.value = this.realIndex
    }
  }
})

</script>


<style lang='scss' scoped>
@import '../common.scss';
.highlight-comp {
  background-color: black;
  padding-top: 120px;
  .page-title {
    margin-bottom: 66px;
    @include mobile {
      margin-bottom: 32px;
    }
  }
  .hl-display-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .hl-swiper {
    padding-bottom: 114px;

    &::v-deep .swiper-pagination-bullets {
      bottom: 50px;
      width: 100%;

    }
    &::v-deep .pagination-bullet {
      background: #333333;
      opacity: 1;
    }
    &::v-deep .pagination-bullet::before {
      background: $blue;
    }
    &::v-deep .pagination-bullet-active::before {
      background: $blue;
    }
  }
  .hl-display {
    width: calc((100% - 24px) /2);
    padding: 56px 32px 32px;
    background-color: #171717;
    color: white;
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include mobile {
      margin-top: 0;
      text-align: center;
      padding: 0;
      height: auto;
      background-color: #000;
      box-sizing: border-box;

    }
  }

  .hld-title {
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 122.222% */
    letter-spacing: -0.24px;

    @include mobile {
      font-size: 28px;
      line-height: 36px; /* 128.571% */
    }
  }
  .hld-desc {
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */

    margin-top: 20px;
    @include mobile {
      margin-top: 16px;
    }
  }
  .hld-img-box {
    margin-top: 100px;
    img { width: 100%; }
    @include mobile {
      margin-top: 40px;
    }
  }

}



</style>


<style>
.highlight-comp .pagination-bullet {
  background-color: #D9D9D9;
}
.highlight-comp .pagination-bullet-active {
  background-color: #D9D9D9;
}
</style>
