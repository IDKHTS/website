<template>
  <div class="bg-black-2 pos-relative" :class="{'z-10': isTop}"  id="first">
    <div class="bg-img pos-relative" ref="bg-img" v-if="isMobile">
      <div class="img-wrapper">
        <MediaViewAdapter
          :options="{
            imgSrc: dataSrc.imgSrcMob,
            lazyLoad: false,
            imgOriginalWidth: 720,
            imgOriginalHeight: 1440,
            alt: dataSrc.alt,
            mobAlt: dataSrc.mobAlt
          }"
          @loaded="loaded"
        />
      </div>
    </div>
    <div class="text-wrapper">
      <div class="snmk-container py-3xl">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-center">
          <div id="screen1-title" class="first-title bold-700 mb-xs" v-html="dataSrc.title"></div>
          <div id="screen1-desc" v-html="dataSrc.desc"></div>
          <a id="screen1-btn" class="buy-btn title-4 bold-700 mt-l"  @click.stop='openShopModal'>
            <!-- :href="screen1.buyBtn.link" :target="'_blank'" -->
            {{dataSrc.buyBtn.text}}
          </a>
          <!-- <div id="screen1-btn" class="btn title-4 bold-700 mt-l" @click="isShowModal = true">
            <span class="iconfont mr-s" >&#xe612;</span>{{dataSrc.btn.text}}
          </div> -->
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import gsap from 'gsap'

import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })

const emit = defineEmits(['openShopModal', 'loaded'])
let anim: gsap.core.Timeline | null
const isTextShow = ref(false)
const isTop = ref(false)
const isShowModal = ref(false)

const openShopModal = () => emit('openShopModal')
const loaded = () => emit('loaded')
</script>


<style scoped lang="scss">
@import '../theme.scss';

$leaveHeight: 60px + 53px;

.bg-img {
  position: sticky;
  top: $leaveHeight;
  left: 0;
  opacity: 1;
  height: calc(100vh - #{$leaveHeight});
  background-color: #0f0f11;

  .img-wrapper {
    position: sticky;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
.bg-video {
  opacity: 0;
}

.bg-black-2 {
  background-color:#030303 !important;
  height: calc(100vh - #{$leaveHeight});
}
.bg-video, .text-wrapper{
  position: fixed;
  top: $leaveHeight;
  left: 0;
  width: 100%;
  height: calc(100vh - #{$leaveHeight});
}
.text-wrapper {
  position: absolute;
  top: calc(#{$leaveHeight} - 53px);
  transition: all 1s ease-in-out;

  // #screen1-title, #screen1-desc, #screen1-btn, #screen1-fa-text{
  //   opacity: 0;
  //   transform: translateY(60px);
  // }
}


.btn {
  --border-radius: 100px;
  --border-width: 2px;
  position: relative;
  padding: 18px 32px;
  border-radius: var(--border-radius);
  background-color: transparent;
  border: 2px solid;
  border-color: black ;
  color: white;

  z-index: 0;
  cursor: pointer;
  display: inline-block;
}
.btn:hover {
  border-radius: var(--border-radius);
  border-color: transparent;
  background-origin: border-box;
  background-image: linear-gradient(87.26deg, #0C63E2 0%, #1A8CF5 100.55%);
  color: white;
}
.buy-btn {
  width: 212px;
  --border-radius: 100px;
  --border-width: 2px;
  position: relative;
  padding: 18px 32px;
  background-color: transparent;
  border-color: black ;
  color: white;

  z-index: 0;
  cursor: pointer;
  display: inline-block;
  border-radius: var(--border-radius);
  border-color: transparent;
  background-origin: border-box;
  background: var(--unnamed, linear-gradient(90deg, #00FFD1 0%, #0704F1 100%));
  color: white;
}
.pre-heat-modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  .modal-overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .pre-heat-modal-content {
    position: absolute;
    width: 560px;
    min-width: 560px;
    background-color: white;
    border-radius: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .main-content {
      display: flex;
      flex-direction: column;

      justify-content: start;
      align-items: center;
      height: calc(100% - 36px);
      padding: 0 24px;
    }

    .sign-form-title {
      color: #222222;
      font-size: 24px;
      line-height: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: normal;
      text-align: center;
      box-sizing: border-box !important;
    }

    .artisan-subscribe-msg {
      color: #222222;
    }
  }
  .close {
    height: 24px;
    width: 24px;
    font-size: 24px;
    background-color: white;
    color:  $black-white-6;
    line-height: 24px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: $black-white-2 ;
    }
  }

  .artisan-subscribe {
    &::v-deep {
      .input-wrapper {
        background-color: $black_white_7;
      }
      .input-wrapper input {
        background-color: $black_white_7;
        color: $black_white_3;
      }
      .message {
        padding-left: 0;
      }
    }
  }
}

.success-img {
  width: 80px;
}
@include mobile {
  .pre-heat-modal {
    .pre-heat-modal-content {
      width: calc(100% - 30px);
      min-width: 340px;
      // height: 280px;
      // min-height: 280px;
      overflow: hidden;

      .main-content {
        width: 100%;
        display: flex;

        // min-height: 280px;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        // height: 100%;
        padding-right: 12px;
        padding-left: 12px;
      }

    }
    .close {
      // position: absolute;
      top: 48px;
      right: 48px;
      float: right;
      height: 24px;
      width: 24px;
      background-color:  $black-white-7;
      color: $black-white-8;
      line-height: 24px;
      text-align: center;
      border-radius: 50%;
      cursor: pointer;

    }
    .main-content .sign-form-title {
      font-size: 20px ;
      line-height: 28px;
    }
    .artisan-subscribe {
      padding: 9px 18px;
      &::v-deep {

      }
    }

  }
}


.bg-video{
  top: 60px;
  height: calc(100vh - 60px);
}
.bg-img {
  height: calc(100vh - 60px);
}
</style>

<style>
.font-strong {
  font-weight: 800;
}
</style>
