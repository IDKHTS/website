<template>
  <section class="grid-item" id="s03-three">
    <div class="container">
      <h2 class="page-title">{{ material[0].materialTitlePc }}</h2>
      <div class="row detail-part" v-if="!isMobile">
        <SwiperList :singleSwiper="material[index]" :indexSwiper='index' :currentId="'s03-three' + index"
          :isLeft='index %2 === 0'
          :key="'s03-three' + index" style="color: #1F1F1F;" v-for="(item, index) in material">
        </SwiperList>
      </div>
      <div class="row detail-part" v-else>
        <div class='' v-for="(item, i) in material" :key='item.commonTitle'>
          <div class='m-title' v-html='item.commonTitle'></div>
          <div class='m-desc' v-html='item.subTitle'></div>
          <SwiperActiveProgress class='m-swiper' :id='"material-" + i' :options="item.swiperOptions">
            <div class="swiper-slide" v-for="(m, index) in item.slideCon" :key='m.imgSrc'>
              <div class='m-name' v-html='item.featureList[index]'></div>
              <img :src="m.imgSrc" :alt="item.featureList[index]">
              <!-- <img class='swiper-lazy' :data-src="m.imgSrc" :alt="item.featureList[index]">
              <div class="swiper-lazy-preloader"></div> -->
            </div>
          </SwiperActiveProgress>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import SwiperList from '@@/components/swiper/SwiperList.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const material = computed(() => i18n.tm('snapmaker2Data').material.map(m => {
  m.swiperOptions = {
    timeAry: new Array(m.slideCon.length).fill(4.5 * 1000),
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesProgress: true,
    speed: 1000,
    centeredSlides: true
  }
  return m
}))


</script>


<style lang="scss" scoped>
@import "../common.scss";

#s03-three {
  margin: auto 24px;
}

.material-title {
  font-weight: 700;
  font-size: 3.125vw; //60
  line-height: 3.541vw; //68px;

  text-align: center;
  letter-spacing: -0.24px;

  color: #1F1F1F;
  margin: 7.29vw 0 6.25vw 0;
}

@include mobile {
  .detail-part {
    margin-top: 24px;
  }

  .m-title {
    color: var(--unnamed, #1C1E20);
    text-align: center;

    /* Heading/375/Gilroy Bold-28 */
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    /* 128.571% */
    letter-spacing: -0.24px;
  }

  .m-desc {
    color: var(--unnamed, #5C5C5C);
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 150% */

    margin-block: 16px 48px;
  }

  .m-swiper {
    padding-bottom: 96px;

    &::v-deep {
      .swiper-pagination {
        width: 100%;
        margin-top: 12px;
        bottom: 64px;
      }

      .pagination-bullet {
        background-color: #DDDDDD;

        &::before {
          background: $blue;
        }
      }
    }
  }

  .m-name {
    color: var(--unnamed, #5C5C5C);
    text-align: center;

    /* Heading/375/Gilroy Bold-24 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    /* 133.333% */
    letter-spacing: -0.24px;
    margin-bottom: 16px;
  }
}</style>
