<template>
  <div class='home-judemenet bg-white'>
    <div class='snmk-container'>
      <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
        <div class='jdm-title comp-title-color' v-html='isMobile ? judgement.mobTitle :  judgement.title'></div>
        <div class='recommand-list'>
          <a :href='display.href' target='_blank' class='recommand-item' v-for='display of judgement.displayList' :key="display.title">
            <div class='recommand-item-img'>
              <NuxtImg :src='display.imgSrc' :alt='display.title' loading='lazy'/>
              <div class="play">
                <span class="iconfont" >&#xe612;</span>
              </div>
              <div class='recommand-item-time' v-html='display.duration'></div>
            </div>
            <div class='recommand-item-title' v-html='display.title'></div>
            <div class='recommand-item-desc' v-html='display.desc'></div>
          </a>
        </div>
      </div>
      <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
        <template  v-if='!isMobile'>
          <div class='reword'>
            <NuxtImg :src="judgement.rewordImgSrc" :alt="judgement.title" loading='lazy' />
          </div>
          <div class='media-judgement-wrapper'>
            <div class='media-judgement' v-for='mj of judgement.judgements' :key='mj.title'>
              <div v-if='mj.title' class='mj-title' v-html='mj.title'></div>
              <div class='mj-desc' v-html='mj.desc'></div>
              <div><NuxtImg class='logo' :src="mj.logo" :alt="mj.title" loading='lazy' /></div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class='reword'>
            <NuxtImg :src="judgement.rewordImgMobSrc" :alt="judgement.title" loading='lazy'/>
          </div>
          <SwiperActiveProgress id='judement-swiper' :options="swiperOptions">
            <div class="swiper-slide media-judgement" v-for='mj of judgement.judgements' :key='mj.title'>
                <div class='mj-desc' v-html='mj.desc'></div>
                <div><NuxtImg class='logo' :src="mj.mobLog" :alt="mj.desc" loading='lazy' /></div>
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
const judgement = computed<any>(() =>({
  title: `Awards & Reviews`,
  mobTitle: `Reviews & Awards`,
  rewordImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/Pc_h.jpg`,
  rewordImgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/web_H.jpg`,
  displayList: [
    {
      href: `https://youtu.be/yEjzBRQGTAE?si=tjhtQD_wLdclYQBB`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/Rectangle-963.jpg`,
      title: `Snapmaker Artisan 3 in 1, dual extruder 3D printer, laser engraver & CNC met..`,
      desc: `Aurora Tech`,
      duration: `31:00`
    },
    {
      href: `https://youtu.be/it53Hs3liQw?si=Z0AKNLm7fp1X0tsk`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/Rectangle-964.jpg`,
      title: `Snapmaker ARTISAN | 3D Drucker, CNC & Laser | NEUES 2023 Modell!`,
      desc: `mpoxDE`,
      duration: `50:43`
    },
    {
      href: `https://youtu.be/dSOCxn2sy5o?si=Y6PePhFpAFHtdQ3X`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/Rectangle-965.jpg`,
      title: `Uncovering the Unbelievable Power of the NEW Snapmaker Artesian 3D Printer!`,
      desc: `EEBPMAN Tech Reviews`,
      duration: `23:02`
    }
  ],
  judgements: [
    {
      // title: `Snapmaker Artisan 3-in-1 Review: Bigger, Faster, Better`,
      desc: `“The Snapmaker Artisan is a quality machine for makers who want to explore both additive and subtractive manufacturing. It is pricey, but it’s extremely well-made and easy to use with plenty of safety features.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/tom.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/tom.jpg`
    },
    {
      // title: `Snapmaker 2.0 Review: Best Budget 3-In-1 3D Printer`,
      desc: `“This has become a machine which is truly heading towards becoming a master of each trade. The updates made to the Artisan have addressed both of these whilst also continuing to improve the Laser function. There are also a great deal of what used to be 'optional upgrades' which now come as standard such as the enclosure, emergency stop button, 10W laser and more.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/DIY.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/DIY.jpg`

    },
    {
      // title: `Snapmaker Artisan: 3D Print, Laser, and CNC—This 3-in-1 Maker Machine Does It All`,
      desc: `“The Snapmaker Artisan is a versatile three-in-one machine that combines 3D printing, laser engraving, and CNC milling capabilities. While it is not cheap, its industrial build quality and CNC functions make it a good investment for demanding makers and small workshops.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/muo.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/muo.jpg`
    },
    {
      // title: `Snapmaker J1 3D Printer Review: Double the Print Heads, Double the Fun`,
      desc: `“Also, not to be underestimated, is that the 3D print mode and the laser mode benefit from the design, which is based on the CNC carving/cutting mode. Positioning accuracy is excellent as a result, and vibrations are virtually non-existent.”`,
      logo: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/the 3D.jpg`,
      mobLog: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/the 3D.jpg`
    }
  ]

}))

const activeTutorialIndex = ref(0)
const swiperOptions = ref({
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
})

</script>


<style lang="scss" scoped>
.jdm-title {
  text-align: center;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 68px; /* 113.333% */
  letter-spacing: -0.24px;
  margin-bottom: 38px;

  @include mobile {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 0;
  }
}

.recommand-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 119px;

  .recommand-item {
    width: calc((100% - 16px * 2) / 3);
    margin-right: 16px;
    margin-top: 34px;

    &:nth-child(3n) {
      margin-right: 0;
    }



    &-img {
      position: relative;
      display: block;
      line-height: 0;
      border: 1px solid #E0E0E0;
      border-radius: 8px;
      overflow: hidden;
    }
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      $len: 80px;
      width: $len;
      height: $len;
      font-size: 28px;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.25s ease;
      cursor: pointer;

      &:hover, &:active {
        $len: 64px;
        width: $len;
        height: $len;
        font-size: 22.4px;
      }
      .iconfont {
        color: #FFF;
        margin-left: 4px;
      }
    }
    &-img:hover .play {
      $len: 64px;
      width: $len;
      height: $len;
      font-size: 22.4px;
    }
    .recommand-item-time {
      position: absolute;
      right: 16px;
      bottom: 16px;
      padding: 3px 8px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.50);
      color: #FFF;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 120% */
      letter-spacing: -0.24px;
    }

    &-title {
      color: #242424;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 133.333% */
      letter-spacing: -0.24px;

      margin-block: 16px 20px;
    }

    &-desc {
      color: var(--unnamed, #5C5C5C);
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 133.333% */
      letter-spacing: -0.24px;
    }


  }


  @include mobile {
    margin-bottom: 48px;
    flex-wrap: wrap;

    .recommand-item {
      width: 100%;
      margin: 0;
      margin-top: 40px;
    }
  }
}

.home-judemenet {
  background-color: white;
  padding-block: 200px;

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
