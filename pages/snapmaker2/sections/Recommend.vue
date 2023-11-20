<template>
  <div class='snmk-container'>
    <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
      <div class="recommand-title title-color" v-html='dataSrc.title'></div>
      <div v-if='!isMobile' class='recommand-list'>
        <a :href='display.href' target='_blank' class='recommand-item' v-for='display of dataSrc.displayList' :key="display.title">
          <div class='recommand-item-img'>
            <NuxtImg :src='display.imgSrc' loading='lazy'></NuxtImg>
            <div class="play">
              <span class="iconfont" >&#xe612;</span>
            </div>
            <div class='recommand-item-time' v-html='display.duration'></div>
          </div>
          <div class='recommand-item-title' v-html='display.title'></div>
          <div class='recommand-item-desc' v-html='display.desc'></div>
        </a>
      </div>
      <div v-else class='recommand-list'>
        <SwiperActiveProgress id='recommand-swiper' :options="swiperOptions">
          <div class="swiper-slide recommand-item" v-for='display of dataSrc.displayList' :key="display.title">
            <a :href='display.href' target='_blank'  class='recommand-item-img'>
              <NuxtImg :src='display.imgSrc' loading='lazy'></NuxtImg>
              <div class="play">
                <span class="iconfont" >&#xe612;</span>
              </div>
              <div class='recommand-item-time' v-html='display.duration'></div>
            </a>
            <div class='recommand-item-title' v-html='display.title'></div>
            <div class='recommand-item-desc' v-html='display.desc'></div>
          </div>
        </SwiperActiveProgress>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
 
const swiperOptions = ref({
  timeAry: new Array(6).fill(4.5 * 1000), // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
  slidesPerView: 1,
  spaceBetween: 24,
  watchSlidesProgress: true,
  speed: 1000,
  centeredSlides: true,
})
const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  title: `Recommended by 100+ professionals.`,
  displayList: [
    {
      href: `https://youtu.be/GKvM4__33JU?si=pVk3B4tXhW-leG76`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_CNC-Kitchen.jpg`,
      title: `Snapmaker 2.0 REVIEW - All-Metal 3D Printer/Laser Cutter/CNC Router`,
      desc: `CNC Kitchen`,
      duration: `20:12`
    },
    {
      href: `https://youtu.be/A1w5zuhKiog?si=JVKW-DB6CnpjrCGi`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_Teaching-Tech.jpg`,
      title: `Snapmaker 2 0 review - A 3D printer, laser engraver and CNC mill all-in-one`,
      desc: `Teaching Tech`,
      duration: `27:43`
    },
    {
      href: `https://youtu.be/wnGNnUGcFA4?si=OxvwqbGDMrORIXxw`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_mpoxDE.jpg`,
      title: `SNAPMAKER 2.0 | 3D Drucker, LASER & CNC FRÄSE in EINEM GERÄT!`,
      desc: `mpoxDE`,
      duration: `27:00`
    },
    {
      href: `https://youtu.be/UtDdrqnEdOw?si=BvIDE6J_4g3AtzQe`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_Nikodem-Bartnik.jpg`,
      title: `3D Printer? Laser? No, a CNC Machine! Snapmaker 2.0 Test`,
      desc: `Nikodem Bartnik`,
      duration: `19:29`
    },
    {
      href: `https://youtu.be/ufb9jVdDk6U?si=6vvyC_YS-obiJiK_`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_Heliox.jpg`,
      title: `SNAPMAKER 2.0, cette machine fait TOUT !`,
      desc: `Heliox`,
      duration: `18:04`
    },
    {
      href: `https://youtu.be/vGqFJXV1dGA?si=4vm3b84q-MQG09PT`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/pc_Les-Freres-Poulain.jpg`,
      title: `CNC 4 Axes + Imprimante 3D + Découpeuse Laser !! SnapMaker 2 FAIT TOUT !!`,
      desc: `Les Freres Poulain`,
      duration: `36:22`
    }
  ]
}))
</script>


<style lang='scss' scoped>
.recommand-title {
  margin-top: 100px;
  margin-bottom: 72px;
  text-align: center;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 68px; /* 113.333% */
  letter-spacing: -0.24px;
  color: #0F7DFF;

  @include mobile {
    margin-top: 51px;
    margin-bottom: 30px;
    font-size: 28px;
    line-height: 36px;
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

    #recommand-swiper {
      padding-bottom: 104px;
    }
    .recommand-item {
      margin-right: 0;
      margin-top: 0;

      &-title {
        margin-block: 12px;
      }

      &-desc {
        font-size: 24px;
        line-height: 32px;
      }
    }

  }
}

</style>
<style>
.recommand-list .pagination-bullet {
  background-color: #D9D9D9;
}
.at-product .recommand-list .pagination-bullet-active {
  background-color: #D9D9D9;
}
</style>
