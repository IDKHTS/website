<template>
  <div class='crc'>
    <div class="snmk-container pt-3xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 crc-title title-color">
        Trusted by 60,000+ users.
      </div>
    </div>
    <div class='carousel-wrapper py-3xl'>
      <div class='carousel-content'>
        <div class='carousel-item' v-for='(item, index) of displayList' :key='index'>
          <div class='carousel-img'>
            <NuxtImg :src='isMobile ? item.imgMobSrc : item.imgSrc' loading="lazy"></NuxtImg>
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
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {}})
const { isMobile } = storeToRefs(useGlobalStore())
const displayList = computed(() => {
  return props.dataSrc.displays.concat(props.dataSrc.displays.slice())
})

</script>

<style scoped lang='scss'>
$carouselItemCount: 16;
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
  animation: #{$carouselItemCount * 2}s scrollLoop linear infinite normal;
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
