<template>
  <div class="bg-black-2 pos-relative" :class="{'z-98': isTop, 'z-1000': isShowModal}">
    <Modal v-if="isShowModal" @close="isShowModal = false" :videoSrc="screen1.btn.link"></Modal>
    <div class="bg-video">
      <MediaViewAdapter
        :options="{
          imgSrc: isMobile ? screen1.imgMobSrc :screen1.imgSrc,
          alt: screen1.alt,
          mobAlt: screen1.mobAlt
        }"
      />
    </div>
    <div class="text-wrapper" >
      <div class="snmk-container py-3xl">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-center">
          <div id="screen1-title" class="big-title-2 bold-700 mb-xs" v-html="isMobile ? screen1.mobTitle : screen1.title"></div>
          <div id="screen1-desc" style='font-size: 24px;' v-html="screen1.desc"></div>
          <div id="screen1-btn" class="buy-btn title-4 bold-700" :class='{"mt-l": !isMobile, "mt-m": isMobile}' @click="$emit('onOpenShopModal')">
            {{screen1.buyBtn.text}}
          </div>
          <div id="screen1-btn" class="btn title-4 bold-700 mt-s" @click="isShowModal = true">
            <span class="iconfont mr-s" >&#xe612;</span>{{screen1.btn.text}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import Modal from '@@/components/VideoModal.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const screen1 = computed(() => ({
  title: `Snapmaker Artisan 3-in-1 3D Printer`,
  mobTitle: `Artisan 3-in-1 3D Printer`,
  desc: `Mastering your craftmanship.`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/38_PC-3.jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/refactor/38_web2.jpg`,
  buyBtn: {text: 'Buy Now', link: 'https://us.snapmaker.com/products/snapmaker-artisan-3-in-1-3d-printer'},
  btn: {text: 'Watch the video', link: 'https://www.youtube.com/embed/zuKmD2HHHiY?si=qrKMYwyeEd2SwZR7'}
}))

const isShowModal = ref(false)
const isTop = ref(true)

</script>


<style scoped lang="scss">
@import '../theme.scss';
.z-98 {
  z-index: 98;
}
.z-1000 {
  z-index: 1000;
}

.bg-black-2 {
  background-color:rgb(20, 20, 20) !important;
  height: calc(100vh - 60px);
}
.bg-video, .text-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text-wrapper {
  transition: all 1s ease-in-out;
  #screen1-title {
    color: #1C1E20;
    text-align: center;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 68px;

    @include mobile {
      color: var(--unnamed, #1C1E20);
      font-family: Roboto;
      font-size: 36px;
      line-height: 44px;
    }
  }
  #screen1-desc {
    color: #282828;
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.24px;

    @include mobile {
      color: var(--unnamed, #1C1E20);
      font-size: 20px;
      line-height: 28px;
    }
  }

  #screen1-title, #screen1-desc, #screen1-btn {
    opacity: 1;
    // transform: translateY(60px);
  }

  @include mobile {
    #screen1-title {
      margin-top: 30px;
    }
  }
}
.btn {
  --border-radius: 100px;
  --border-width: 2px;
  position: relative;
  padding: 18px 32px;
  border-radius: var(--border-radius);
  background-color: transparent;
  border: 2px solid;
  border-color: #1C1E20;
  // color: $primary-c;
  color: #1C1E20;

  z-index: 0;
  cursor: pointer;
  display: inline-block;
}
.btn:hover {
  // border-radius: var(--border-radius);
  // border-color: transparent;
  // background-origin: border-box;
  // // background-image: linear-gradient(87.26deg, #0C63E2 0%, #1A8CF5 100.55%);
  // color: white;
}
.buy-btn {
  width: 212px;
  margin-right: 20px;
  --border-radius: 100px;
  --border-width: 2px;
  position: relative;
  padding: 18px 32px;
  background-color: transparent;
  border: 2px solid;
  border-color: $primary-c ;
  // color: $primary-c;
  color: white;

  z-index: 0;
  cursor: pointer;
  display: inline-block;
  border-radius: var(--border-radius);
  border-color: transparent;
  background-origin: border-box;
  background-image: linear-gradient(87.26deg, #0C63E2 0%, #1A8CF5 100.55%);
  color: white;

  @include mobile {
    margin-right: 0;
  }
}

</style>
