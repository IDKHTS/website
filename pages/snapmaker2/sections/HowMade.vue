<template>
  <div class='all-metal'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class="page-title" v-html="dataSrc.title"></div>
        <div v-if='dataSrc.desc' class="page-desc" v-html="dataSrc.desc"></div>
        <div v-if="!isMobile" class="snmk-btn" @click="isShowModal = true">
          <span class="iconfont mr-s" >&#xe612;</span>{{dataSrc.videoBtn}}
        </div>
      </div>
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1">
        <div class="img-box">
          <NuxtImg v-if='isMobile' :src="dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy' />
          <video v-else
            muted autoplay
            :preload="'metadata'"
            loop webkit-playsinline
            playsinline
            x5-video-player-type="h5-page"
          >
            <source :src="dataSrc.videoSrc">
          </video>
        </div>
        <div v-if="isMobile" class="snmk-btn" @click="isShowModal = true">
          <span class="iconfont mr-s" >&#xe612;</span>{{dataSrc.videoBtn}}
        </div>
      </div>
    </div>
    <Modal v-if="isShowModal" @close="isShowModal = false" :videoSrc="dataSrc.videoLink"></Modal>
  </div>
</template>

<script setup lang='ts'>
import Modal from '@@/components/VideoModal.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed(() => ({
  title: `Precision manufacture.`,
  // title2: `Powerful Controller`,
  // desc: `.All the Snapmaker models are built to last. For Snapmaker 2.0 series, we pushed the boundaries of all-metal construction even further. All modules and major components are made of high-strength metal.`,
  videoBtn: `How Snapmaker 2.0 was made`,
  videoLink: `https://www.youtube.com/embed/6YV8Ht0JXd4?si=QKrDhuY0W-U0fOs6`,
  // imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_An-evolving-modular-system.-3.jpg`,
  // imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_An-evolving-modular-system.-3.jpg`
  videoSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Precision-manufacture.webm`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Precision-manufacture.webp`
}))

const isShowModal = ref(false)
</script>


<style lang='scss' scoped>
@import '../common.scss';
.all-metal {
  background-color: black;
  text-align: center;
  padding-block: 188px;

  @include mobile {
    padding-block: 48px 72px;
  }

  .snmk-btn {
    margin-top: 40px;
    border-color: white;
    background-color: transparent;

    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;

    @include mobile {
      padding-inline: 24px;
    }
  }
}
.page-desc {
  margin-top: 16px;

  @include mobile {
    margin-top: 24px;
  }
}
.img-box {
  margin-top: 60px;
  line-height: 0;
  @include mobile {
    margin-top: 40px;
  }
}

</style>
