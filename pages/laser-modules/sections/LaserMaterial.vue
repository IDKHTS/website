<template>
  <section class='bg-black'>
    <div class="snmk-container pos-relative">
      <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 lm-text-block">
        <h1 class='lm-title' v-html='dataSrc.title'></h1>
        <!--  data-aos='fade-up' -->
        <div class='lm-desc' v-html='dataSrc.desc' ></div>
        <!-- data-aos='fade-up' data-aos-delay='300' -->
        <div v-if='!isMobile' class='lm-materials-list' >
          <div class='lm-material' v-for='material in dataSrc.materials' :key='material.name'>
            <NuxtImg :src="material.imgSrc" :alt="material.name" loading='lazy'/>
            <div class='lm-material-name' v-html='material.name'></div>
          </div>
        </div>
      </div>
      <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-offset-1 vertical-center">
        <div class='pos-relative line-h-0'>
          <video
              muted
              autoplay
              x-webkit-airplay="allow"
              playsinline="true"
              x5-playsinline="true"
              webkit-playsinline="true"
              x5-video-player-fullscreen="true"
              x5-video-player-type="h5"
              x5-video-orientation="portraint"
              loop
            >
            <source :src="dataSrc.video" type="video/mp4" />您的浏览器不支持 video 标签。
          </video>
          <!-- <img :src="dataSrc.imgSrc" alt="">
          <div class='video-zone'>
            something ...good
          </div> -->
        </div>
      </div>
      <div v-if='isMobile' class="snmk-col-s-4 snmk-col-xs-4 lm-materials-list">
          <div class='lm-material' v-for='material in dataSrc.materials' :key='material.name'>
            <NuxtImg :src="material.imgSrc" :alt="material.name" loading='lazy' />
            <div class='lm-material-name' v-html='material.name'></div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())
</script>

<style scoped lang='scss'>
@import '../theme.scss';
section.bg-black {
  background-color: #000;
}
@include no-mobile {
  .bg-black {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-block: 100px;
    // margin-block: 100px;
  }
}
.lm-text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.lm-title {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px; /* 170% */
  letter-spacing: -0.24px;
  @include mobile {
    margin-top: 40px;
    text-align: center;
    font-size: 28px;
    line-height: 36px;
  }
}
.lm-desc {
  color: #C5C5C5;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
  letter-spacing: -0.24px;

  margin-top: 24px;
  margin-bottom: 48px;
  @include mobile {
    margin-top: 16px;
    margin-bottom: 32px;
    text-align: center;
    color: #C2C2C2;
    font-size: 18px;
    line-height: 24px;
  }
}
.lm-materials-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @include mobile {
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 46px;
  }
}
.video-zone {
  position: absolute;
  left: 4.5662100456621%;
  top: 7.412587412587412%;
  background-color: white;
  width: 90.98%;
  height: 60.97902097902098%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lm-material {
  margin-top: 12px;
  width: calc((100% - 3 * 24px) / 4);
  margin-right: 24px;
  // flex: 1 1 auto;
  // margin-right: 1.25vw;
  word-break: break-all;
  // min-width: 2.604vw;
  img {
    // width: 2.604vw;
    // height: 2.604vw;
    border-radius: 50%;
  }

  &:nth-child(4), &:last-child {
    margin-right: 0;
  }

  @include mobile {
    margin-right: 20px;
    margin-bottom: 30px;
    width: calc((100% - 24px * 3) / 4);
    &:nth-child(4), &:nth-child(8) {
      margin-right: 0;
    }
    img {
      width: unset;
      height: unset;
    }
  }
}
.lm-material-name {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: -0.24px;
  word-break: keep-all;


  @include mobile {
    margin-top: 24px;
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
