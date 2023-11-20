<template>
  <div class='home-judemenet bg-white'>
    <div class='snmk-container'>
      <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
        <template  v-if='!isMobile'>
          <div v-if='judgement.title' class='head-title' v-html='judgement.title'></div>
          <div class='reword'>
            <NuxtImg :src="judgement.rewordImgSrc" :alt="judgement.title" loading='lazy'/>
          </div>
          <div class='media-judgement-wrapper'>
            <div class='media-judgement' v-for='mj of judgement.judgements' :key='mj.title'>
              <div v-if='mj.title' class='mj-title' v-html='mj.title'></div>
              <div class='mj-desc' v-html='mj.desc'></div>
              <div><NuxtImg class='logo' :src="mj.logo" :alt="mj.title" loading='lazy'/></div>
            </div>
          </div>
        </template>
        <template v-else>
          <!-- <div class='px-m head-title' v-html='judgement.title'></div> -->
          <div class='reword'>
            <NuxtImg :src="judgement.rewordImgMobSrc" alt="" loading='lazy'/>
          </div>
          <SwiperActiveProgress id='judement-swiper' :options="swiperOptions">
            <div class="swiper-slide media-judgement" v-for='mj of judgement.judgements' :key='mj.title'>
                <!-- <div class='mj-title' v-html='mj.title'></div> -->
                <div class='mj-desc' v-html='mj.desc'></div>
                <div><NuxtImg class='logo' :src="mj.mobLog" :alt="mj.title" loading='lazy'/></div>
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

const { isMobile } = storeToRefs(useGlobalStore())
const swiperOptions = ref({
  timeAry: [4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000], // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
  slidesPerView: 1,
  spaceBetween: 0,
  watchSlidesProgress: true,
  speed: 1000,
  centeredSlides: true,
})
const judgement = computed(() => ({
  // title: `Recognized by Industry Experts`,
  rewordImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/PC_2.0_h.jpg`,
  rewordImgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/mobile/web_2.0H.jpg`,
  judgements: [
    {
      // title: `Snapmaker Artisan 3-in-1 Review: Bigger, Faster, Better`,
      desc: `“From a purely 3D printing perspective, the Snapmaker 2 is much better than I expected. When you make a multipurpose manufacturing machine, you run the risk of all the different parts being mediocre, but the Snapmaker surprised me with its quality.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/PC_Windows.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/mobile/web_Make.jpg`
    },
    {
      // title: `Snapmaker 2.0 Review: Best Budget 3-In-1 3D Printer`,
      desc: `“The hardware is tip top, can handle whatever you throw at it while offering enough to suit the multi-talented maker looking to up their game without sacrificing desktop space.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/PC_ALL3DP.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/mobile/web_ALL3DP.jpg`

    },
    {
      // title: `Snapmaker Artisan: 3D Print, Laser, and CNC—This 3-in-1 Maker Machine Does It All`,
      desc: `“The parts are manufactured extremely precisely: all aluminum surfaces are neatly anodized and quite robust, visible for example on the heavy, torsion-resistant die-cast base plate. There’s no comparison with the cheap machines from AliExpress: you won’t find any 3D-printed plastic parts or raw sawn aluminum profiles on the Snapmaker.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/PC_Make.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/mobile/web_Make.jpg`
    },
    {
      // title: `Snapmaker J1 3D Printer Review: Double the Print Heads, Double the Fun`,
      desc: `“As it's being constructed the design and manufacture of the SnapMaker stands out, it's a level above anything else I've seen, 3D printer wise at least. Everything is machined metal, and no expense has been spared on the finish and anodising.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/Pc_techradar.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmaker-at/mobile/web_techradar.jpg`
    }
  ]

}))

</script>


<style lang="scss" scoped>
.home-judemenet {
  background-color: white;
  padding-block: 100px 200px;

  @include mobile {
    padding-block: 24px 0;
  }
}
.head-title {
  color: var(--unnamed, #1F1F1F);
  text-align: center;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px; /* 113.333% */
  letter-spacing: -0.24px;
  margin-bottom: 56px;

  @include mobile {
    padding-block: 32px;
    font-size: 40px;
    line-height: 48px;
  }
}
.reword {
  width: 100%;
  background-color: #F5F5F5;
  line-height: 0;

  @include mobile {
    margin-bottom: 10px;
  }
}

.media-judgement-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  // height: calc(31.435vw + 130px);
}

#judement-swiper {
  @include mobile {
    padding-bottom: 126px;
  }
  &::v-deep .swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    background-color: white;
    padding-top: 30px;
    padding-bottom: 72px;
  }
}

.media-judgement {
  margin-top: 24px;
  width: calc(50% - 12px);
  background-color: #F5F5F5;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @include mobile {
    // background-color: #fff;
    margin-top: 0;
    box-sizing: border-box;
    width: 100%;
    height: auto;
  }

  .mj-title {
    color: var(--unnamed, #1C1E20);
    text-align: center;

    /* Heading/1920/Gilroy Bold-24 */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.24px;
  }

  .mj-desc {
    color: var(--unnamed, #5C5C5C);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;
    margin-top: 16px;
    margin-bottom: 40px;

    @include mobile {
      font-size: 16px;
    }
  }

  .mj-logo {

  }

}


</style>

<style>
.home-judemenet .pagination-bullet {
  background-color: #D9D9D9;
}
.at-product .home-judemenet .pagination-bullet-active {
  background-color: #D9D9D9;
}
</style>
