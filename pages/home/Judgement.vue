<template>
  <div class='home-judemenet bg-white'>
    <div v-if='!isMobile' class='snmk-container py-3xl'>
      <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
        <div class='head-title' v-html='judgement.title'></div>
        <div class='reword'>
          <NuxtImg :src="judgement.rewordImgSrc" srcset='' loading="lazy" />
        </div>
        <div class='media-judgement-wrapper'>
          <div class='media-judgement' v-for='mj of judgement.judgements' :key='mj.title'>
            <div class='mj-title' v-html='mj.title'></div>
            <div class='mj-desc' v-html='mj.desc'></div>
            <div><NuxtImg class='logo' :src="mj.logo" srcset='' loading="lazy" /></div>
          </div>
        </div>
      </div>
    </div>
    <template v-else>
      <div class='px-m head-title' v-html='judgement.title'></div>
      <div class='reword'>
        <NuxtImg :src="judgement.rewordImgMobSrc"  srcset='' loading="lazy" alt=""/>
      </div>
      <SwiperActiveProgress id='judement-swiper' :options="swiperOptions">
        <div class="swiper-slide media-judgement" v-for='mj of judgement.judgements' :key='mj.title'>
            <!-- <div class='mj-title' v-html='mj.title'></div> -->
            <div class='mj-desc' v-html='mj.desc'></div>
            <div> <NuxtImg  class='logo' :src="mj.mobLog" srcset='' loading="lazy" /></div>
        </div>
      </SwiperActiveProgress>
    </template>
  </div>
</template>

<script lang='ts' setup>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())

const judgement = computed(() => {return {
  title: `Recognized by Industry Experts`,
  rewordImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/reword.jpg`,
  rewordImgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/mobile/reword.jpg`,
  judgements: [
    {
      title: `Snapmaker Artisan 3-in-1 Review: Bigger, Faster, Better`,
      desc: `“The Snapmaker Artisan is a quality machine for makers who want to explore both additive and subtractive manufacturing. It is pricey, but it’s extremely well-made and easy to use with plenty of safety features.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/hardware.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/mobile/hardware.jpg`
    },
    {
      title: `Snapmaker 2.0 Review: Best Budget 3-In-1 3D Printer`,
      desc: `“The hardware is tip top, can handle whatever you throw at it while offering enough to suit the multi-talented maker looking to up their game without sacrificing desktop space.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/all3dp.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/mobile/mob-all3dp.jpg`

    },
    {
      title: `Snapmaker Artisan: 3D Print, Laser, and CNC—This 3-in-1 Maker Machine Does It All`,
      desc: `“The Snapmaker Artisan is a versatile three-in-one machine that combines 3D printing, laser engraving, and CNC milling capabilities. While it is not cheap, its industrial build quality and CNC functions make it a good investment for demanding makers and small workshops.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/muo.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/mobile/muf.jpg`
    },
    {
      title: `Snapmaker J1 3D Printer Review: Double the Print Heads, Double the Fun`,
      desc: `“The Snapmaker J1 is fast and attractive -- it's a printer you would actually want to put on your desk -- but it also uses a few different tricks to maximize output. IDEX printers have been around for a while, but they're often difficult to set up and hard to maintain. The J1 has made the setup a breeze.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/cnet.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/mobile/cnet.jpg`
    }
    // {
    //   title: `Snapmaker J1 3D Printer Review: Solid build and fluid workflows make this a solid choice`,
    //   desc: `“The J1 is a workshop tool; there's no tinkering needed, nothing to add. It's a proficient 3D printer that does exactly what it's supposed to do. However, what makes it stand out is the pure reliability of the machine, and the way through the Luban software, you can very easily adjust the settings to match your exact needs.”`,
    //   logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/techradar.jpg`,
    //   mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/mobile/techradar.jpg`
    // }
  ]

}})
const swiperOptions = ref({})
const activeTutorialIndex = ref(0)
onBeforeMount(() => {
  swiperOptions.value = {
      timeAry: [4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000], // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
      slidesPerView: 1,
      spaceBetween: 0,
      watchSlidesProgress: true,
      speed: 1000,
      centeredSlides: true,
      // loop: true,

      on: {
        slideChange () {
          activeTutorialIndex.value = this.realIndex
        }
      }
    }
})

</script>


<style lang="scss" scoped>

.home-judemenet {
  background-color: white;
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
    background-color: #F5F5F5;
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
    background-color: #fff;
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
