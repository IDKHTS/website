<template>
  <div class='crc'>
    <div class="snmk-container pt-3xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 crc-title comp-title-color">
        Discover what's possible.
      </div>
    </div>
    <div class='carousel-wrapper py-3xl'>
      <div class='carousel-content' :class="{'stop-animation': stopLoop}">
        <div class='carousel-item' v-for='(item, index) of displayList' :key='index'>
          <div class='carousel-img'>
            <NuxtImg :src="isMobile ? item.imgMobSrc : item.imgSrc" :alt="item.title" loading='lazy'/>
          </div>
          <div>
            <div class='carousel-title' v-html='item.title'></div>
            <div class='carousel-type' v-html='item.type'></div>
            <div class='carousel-desc' v-html='item.desc'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const stopLoop = ref(false)

const dataSrc = computed(() => ({
  displays: [
    {
      title: `@Scheurmann Dominic`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Scheurmann-Dominic-3DP.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Scheurmann-Dominic-3DP.jpg`
    },
    {
      title: `@Bernd Michalak`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Bernd-Michalak-(3DP).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Bernd-Michalak-(3DP).jpg`
    },
    {
      title: `@Martin Falk Hansen`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Martin-Falk-Hansen-3DP.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Martin-Falk-Hansen-3DP.jpg`
    },
    {
      title: `@René Ruschetta`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@René-Ruschetta-3DP.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@René-Ruschetta-3DP.jpg`
    },
    {
      title: `@Rudi Jetten`,
      type: `3DP`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Rudi-Jetten-3DP.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Rudi-Jetten-3DP.jpg`
    },
    {
      title: `@Edward Alain Bernal`,
      type: `Laser`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Edward-Alain-Bernal-Laser.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Edward-Alain-Bernal-Laser.jpg`
    },
    {
      title: `@Florian Gabriel`,
      type: `Laser`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Florian-Gabriel-Laser.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Florian-Gabriel-Laser.jpg`
    },
    {
      title: `@Marcel Galli`,
      type: `CNC`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Marcel-Galli-CNC-1.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Marcel-Galli-CNC-1.jpg`
    },
    {
      title: `@Alexander Di Bernardo`,
      type: `CNC`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Alexander-Di-Bernardo-CNC.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Alexander-Di-Bernardo-CNC.jpg`
    },
    {
      title: `@Marcel Galli`,
      type: `CNC`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Marcel-Galli-CNC.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Marcel-Galli-CNC.jpg`
    },
    {
      title: `@Dean McGee`,
      type: `3DP, Laser`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Dean-McGee-（3DP，Laser）.jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/`
    },
    {
      title: `@Alexander Di Bernardo`,
      type: `Laser, CNC`,
      desc: ``,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Alexander-Di-Bernardo-(Laser,-CNC).jpg`,
      imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/usercases/@Alexander-Di-Bernardo-(Laser,-CNC).jpg`
    }
  ]

}))
const displayList = computed(() => {
  const arr = dataSrc.value.displays.concat(...dataSrc.value.displays.slice())
  return arr
})

</script>

<style scoped lang='scss'>
$carouselItemCount: 12;
$carouselItemWidth: 20vw;
$carouselItemMR: 20px;
$contentW: calc(#{$carouselItemCount * $carouselItemWidth} + #{$carouselItemCount * $carouselItemMR});

.crc-title {
  color: var(--unnamed, #1C1E20);
  text-align: center;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 68px; /* 113.333% */
  letter-spacing: -0.24px;
  @include mobile {
    color: var(--unnamed, #1C1E20);
    text-align: center;

    /* Heading/375/Gilroy Bold-28 */
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 36px; /* 128.571% */
    letter-spacing: -0.24px;

  }
}

@keyframes scrollLoop {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(calc(-1 * (#{$contentW})), 0, 0);
        transform: translate3d(calc(-1 * (#{$contentW})), 0, 0);
    }
}

.crc {
  background-color: white;
}
.carousel-wrapper {
  width: 100vw;
  overflow-x: hidden;

}
.carousel-content {
  display: flex;
  width: calc(2 * (#{$contentW}));
  -webkit-animation: #{$carouselItemCount * 2}s scrollLoop linear infinite normal;
  animation: #{$carouselItemCount * 4}s scrollLoop linear infinite normal;
  &:hover{
    animation-play-state: paused;
  }
}
.stop-animation {
  animation-play-state: paused;
}

.carousel-img {
  border-radius: 8px;
  overflow: hidden;
  line-height: 0;
  img {
    width: 100%;
  }
}
.carousel-item {
  display: inline-block;
  width: $carouselItemWidth;
  margin-right: $carouselItemMR;

}
.carousel-title {
  margin-top: 8px;
  color: #242424;

  /* Heading/1920/Gilroy Bold-24 */
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.24px;
}
.carousel-type {
  color: var(--unnamed, #5C5C5C);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.24px;
  margin-block: 8px;
}
.carousel-desc {
  color: var(--unnamed, #5C5C5C);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
}



@include mobile {
  $carouselItemWidth: 80vw;
  $carouselItemMR: 20px;
  // $contentW: #{$carouselItemCount} * #{$carouselItemWidth} + #{$carouselItemCount} * #{$carouselItemMR};
  $contentW: calc(#{$carouselItemCount * $carouselItemWidth} + #{$carouselItemCount * $carouselItemMR});

  @keyframes scrollLoop {
      0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
      }
      100% {
          -webkit-transform: translate3d(calc(-1 * (#{$contentW})), 0, 0);
          transform: translate3d(calc(-1 * (#{$contentW})), 0, 0);
      }
  }


  .carousel-content {
    display: flex;
    width: calc(2 * (#{$contentW}));
    -webkit-animation: #{$carouselItemCount * 3}s scrollLoop linear infinite normal;
    animation: #{$carouselItemCount * 3}s scrollLoop linear infinite normal;
  }
  .carousel-item {
    display: inline-block;
    width: $carouselItemWidth;
    margin-right: $carouselItemMR;

  }
}

</style>
