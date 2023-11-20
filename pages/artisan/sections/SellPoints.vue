<template>
  <div class='pt-xl pb-3xl sp-wrapper' style='background-color: black;'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 sell-point-wrapper"
      >
        <!-- <div class='sell-point' :style="{'height': `${item * 100}px`}" ></div> -->
        <template v-if='!isMobile'>
          <div class='sell-points-col sp-col-1'>
            <div class='sell-point sell-point-0'>
              <!-- <img :src="dataSrc.cols[0].svgSrc" :alt="dataSrc.cols[0].text"> -->
              <img :src="dataSrc.cols[0].imgSrc" :alt="dataSrc.cols[0].text">
              <div class='sell-point-text' v-html='dataSrc.cols[0].text'></div>
            </div>
            <div class='sell-point sell-point-1'>
              <img :src="dataSrc.cols[1].svgSrc" :alt="dataSrc.cols[1].text">
              <div class='sell-point-text' v-html='dataSrc.cols[1].text'></div>
            </div>
            <div class='sell-point sell-point-2'>
              <img :src="dataSrc.cols[2].svgSrc" :alt="dataSrc.cols[2].text">
              <div class='sell-point-text' v-html='dataSrc.cols[2].text'></div>
            </div>
            <div class='sell-point sell-point-3'>
              <img :src="dataSrc.cols[3].svgSrc" :alt="dataSrc.cols[3].text">
              <div class='sell-point-text' v-html='dataSrc.cols[3].text'></div>
            </div>
          </div>
          <div class='sell-points-col sp-col-2'>
            <div class='sell-points-row'>
              <div class='sell-point sell-point-4'>
                <div class='sell-point-text' v-html='dataSrc.cols[4].text'></div>
                <img :src="dataSrc.cols[4].imgSrc" :alt="dataSrc.cols[4].text">
              </div>
              <div class='sell-point sell-point-5'>
                <div class='sell-point-text' v-html='dataSrc.cols[5].text'></div>
                <img :src="dataSrc.cols[5].imgSrc" :alt="dataSrc.cols[5].text">
              </div>
              <div class='sell-point sell-point-6'>
                <div class='sell-point-text' v-html='dataSrc.cols[6].text'></div>
                <img :src="dataSrc.cols[6].imgSrc" :alt="dataSrc.cols[6].text">
              </div>
            </div>
            <div class='sell-points-row'>
              <div class='sell-point sell-point-7'>
                <div class='sell-point-text' v-html='dataSrc.cols[7].text'></div>
                <img :src="dataSrc.cols[7].imgSrc" :alt="dataSrc.cols[7].text">
              </div>
              <div class='sell-point sell-point-8'>
                <div class='sell-point-text' v-html='dataSrc.cols[8].text'></div>
                <img :src="dataSrc.cols[8].imgSrc" :alt="dataSrc.cols[8].text">
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class='sell-points-col sp-col-1'>
            <div class='sell-point sell-point-0'>
              <div class='sell-point-text' v-html='dataSrc.cols[0].text'></div>
              <!-- <img :src="dataSrc.cols[0].svgSrc" :alt="dataSrc.cols[0].text"> -->
              <img :src="dataSrc.cols[0].imgMobSrc" :alt="dataSrc.cols[0].text">
            </div>
            <div class='sell-point sell-point-1'>
              <div class='sell-point-text' v-html='dataSrc.cols[1].text'></div>
              <img :src="dataSrc.cols[1].svgSrc" :alt="dataSrc.cols[1].text">
            </div>
            <div class='sell-point sell-point-2'>
              <div class='sell-point-text' v-html='dataSrc.cols[2].text'></div>
              <img :src="dataSrc.cols[2].svgSrc" :alt="dataSrc.cols[2].text">
            </div>
            <div class='sell-point sell-point-3'>
              <div class='sell-point-text' v-html='dataSrc.cols[3].text'></div>
              <img :src="dataSrc.cols[3].svgSrc" :alt="dataSrc.cols[3].text">
            </div>
          </div>
          <div class='sell-points-col'>
            <div class='sell-points-row'>
              <div class='sell-point sell-point-4'>
                <div class='sell-point-text' v-html='dataSrc.cols[4].text'></div>
                <img :src="dataSrc.cols[4].imgMobSrc" :alt="dataSrc.cols[4].text">
              </div>
              <div class='sell-point sell-point-5'>
                <div class='sell-point-text' v-html='dataSrc.cols[5].text'></div>
                <img :src="dataSrc.cols[5].imgMobSrc" :alt="dataSrc.cols[5].text">
              </div>
            </div>
            <div class='sell-points-row'>
              <div class='sell-point sell-point-7'>
                <div class='sell-point-text' v-html='dataSrc.cols[7].text'></div>
                <img :src="dataSrc.cols[7].imgMobSrc" :alt="dataSrc.cols[7].text">
              </div>
            </div>
            <div class='sell-points-row'>
              <div class='sell-point sell-point-8'>
                <div class='sell-point-text' v-html='dataSrc.cols[8].text'></div>
                <img :src="dataSrc.cols[8].imgMobSrc" :alt="dataSrc.cols[8].text">
              </div>
              <div class='sell-point sell-point-6'>
                <div class='sell-point-text' v-html='dataSrc.cols[6].text'></div>
                <img :src="dataSrc.cols[6].imgMobSrc" :alt="dataSrc.cols[6].text">
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/ray/sell-points/v4.png',
  imgMobSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/ray/sell-points/v4.png',
  cols: [
    {
      // svgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/300°C.svg`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/Pc_Dual-Extrusion-3D-Printing.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_Dual Extrusion 3D Printing.jpg`,
      text: `Dual Extrusion 3D Printing`
    },
    {
      svgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/10W.svg`,
      // imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/Pc_Modular Design.jpg`,
      // imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_Modular Design.jpg`,
      text: `Laser`
    },
    {
      svgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/200W.svg`,
      // imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/Pc_Modular Design.jpg`,
      // imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_Modular Design.jpg`,
      text: `CNC`
    },
    {
      svgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/400X400X400.svg`,
      // imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/Pc_Modular Design.jpg`,
      // imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_Modular Design.jpg`,
      text: `Large Work Area`
    },


    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/Pc_All-metal Design.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_All-metal Design.jpg`,
      text: `All-metal Design`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/PC_Class 1 Safety Enclosure.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_Class 1 Safety Enclosure.jpg`,
      text: `Laser Class 1 Safety`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/Pc_7_ Touchscreen.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_Class 1 Safety Enclosure-1.jpg`,
      text: `7" Touchscreen`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/Pc_Industrial-grade-Linear-Rails.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_Industrial-grade Linear Rails.jpg`,
      text: `Industrial-grade Linear Rails`
    },
    {
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/PC_3-in-1 Software Luban.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/sell-points/web_3-in-1 Software Luban.jpg`,
      text: `3-in-1 Software`
    }
  ]
}))
</script>

<style scoped lang='scss'>
@import '../theme.scss';
.sp-wrapper {
  @include no-mobile {
    padding-block: 120px;
  }
}
.sell-point-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include mobile {
    flex-direction: column;
  }
}
.sell-points-col {
  display: flex;
  flex-direction: column;

  .sell-point {
    margin-top: 16px;
    width: 100%;
    // background-color: white;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:first-child {
      flex: 1 1 auto;
    }

    @include mobile {
      width: 100%;
      margin-top: 10px;
      margin-right: 0;
      justify-content: flex-start;
      width: calc((100% - 10px) / 2);
      &:first-child {
        flex: unset;
      }
    }
  }
}
.sp-col-1 {
  margin-right: 16px;
  width: calc((100% - (16px * 1)) / 3);
  @include mobile {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 10px;
  }
}
.sp-col-2 {
  width: calc((100% - (16px * 1)) / 3 * 2);
}
.sell-points-row {
  flex: 1 1 auto;
  display: flex;

  .sell-point {
    position: relative;
    margin-top: 16px;
    margin-right: 16px;
    width: 100%;
    // background-color: white;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    &:last-child {
      margin-right: 0;
    }

    .sell-point-text {
      position: absolute;
      top: 0;
      padding: 16px;
    }
  }

  @include mobile {

    .sell-point {
      margin-top: 10px;
      margin-right: 10px;
    }
  }
}
.sell-point-text {
  color: #FFF;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.24px;

  @include mobile {
    font-size: 14px;
    line-height: 14px; /* 140% */
  }
}


@include no-mobile {
  .sell-point-0, .sell-point-1, .sell-point-2, .sell-point-3 {
    flex: 1 1 auto;
    text-align: center;
    line-height: 0;
    padding: 24px;

    img {
      margin-bottom: 16px;
    }
  }


  .sell-point-4, .sell-point-5, .sell-point-6, .sell-point-7, .sell-point-8 {
    .sell-point-text {
      margin-top: 32px;
      text-align: center;
    }
  }
  .sell-points-row .sell-point-7 {
    width: calc(55% - 8px);
  }
  .sell-points-row .sell-point-8 {
    width: calc(45% - 8px);
  }

  .sell-point-0 {
    padding: 0;
    position: relative;
    .sell-point-text {
      text-align: center;
      position: absolute;
      margin-top: 32px;
      top: 0;
      width: 100%;
    }
    img {
      width: 100%;
      margin-bottom: 0;
    }
  }
}
@include mobile {
  .sell-point-0 {
    padding: 0;
    position: relative;
    .sell-point-text {
      text-align: center;
      position: absolute;
      margin-top: 24px;
      width: 100%;
    }
    img {
      width: 100%;
    }

  }
  .sell-points-col .sell-point-1,.sell-point-2,.sell-point-3 {
    padding: 20px;
    .sell-point-text {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 24px;
      text-align: center;
    }
  }
  .sell-point-0, .sell-point-4, .sell-point-5, .sell-point-6, .sell-point-7, .sell-point-8 {
    .sell-point-text {
      font-size: 12px;
      line-height: 20px;
    }
  }
  .sell-points-row .sell-point .sell-point-text{
    padding-block: 0;
  }
  .sell-point-1 {

    img {
      width: 80px;
    }
  }
  .sell-point-2 {

    img {
      width: 112px;
    }
  }
  .sell-point-3 {

    img {
      margin-top: 7px;
      width: 144px;
    }
  }

  .sell-points-col .sell-points-row .sell-point-4, .sell-point-5, .sell-point-6, .sell-point-7, .sell-point-8 {
    .sell-point-text {
      margin-top: 20px;
      text-align: center;
    }
  }
  .sell-points-col .sell-points-row .sell-point-7 {
    width: 100%;
  }
}

@media (min-width: $breakPoint_xxl) {
  .sell-point-wrapper {
    justify-content: center;
  }
  // .sell-points-col {
  //   max-width: 414px;
  //   margin-left: 16px;
  // }
  // .sell-point-0 {
  //   padding-inline: 113px;
  //   text-align: center;
  // }

}


</style>
