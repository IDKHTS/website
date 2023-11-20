<template>
  <div class="first-screen-content h-100vh" >
    <modal v-if="isShowModal" @close="isShowModal = false" :videoSrc="firstScreen.videoBtn.link"> </modal>
    <div class="bg-video" v-if="!isMobile">
      <video ref="video " muted autoplay loop class="video h-100vh">
        <source :src="firstScreen.videoSrc.webm">
        <source :src="firstScreen.videoSrc.mp4">
      </video>
    </div>
    <div v-if="videoSnapImgSrc" class="bg-img h-100vh">
      <img :src="videoSnapImgSrc" alt="">
    </div>
    <div class="text-wrapper">
      <div class="snmk-container">
        <div class="snmk-col-5 snmk-col-l-6 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 ">
          <div class="big-title-1 bold" >{{firstScreen.title}}</div>
          <div class="my-l title-3">{{firstScreen.text}}</div>
          <div class="mt-2xl">
            <template v-if="!isCN">
              <router-link  :id="firstScreen.buyBtn.traceID" v-if="firstScreen.buyBtn" :to="{route: firstScreen.buyBtn.route}" class="snmk-primary-btn">
                {{firstScreen.buyBtn.text}}
              </router-link>
            </template>
            <template v-else>
              <a
                v-if="firstScreen.buyBtn"
                target="_blank"
                :id="firstScreen.buyBtn.traceID"
                class="snmk-primary-btn"
                :href="firstScreen.buyBtn.link"
                >{{firstScreen.buyBtn.text}}</a>
            </template>
            <!-- <a class="snmk-btn" :href="firstScreen.videoBtn.link" :key="firstScreen.videoBtn.link">{{firstScreen.videoBtn.text}}</a> -->
            <button :id="firstScreen.videoBtn.traceID" @click="isShowModal = true" class="snmk-btn mt-m">
              <span class="iconfont mr-xs" >&#xe612;</span>{{firstScreen.videoBtn.text}}
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import configuration from '@@/resources/data/configuration'
import Modal from '@@/components/VideoModal.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const i18n = useI18n()
const { isMobile, device } = storeToRefs(useGlobalStore()) 

const isShowModal = ref(false)

const isCN = computed(() => i18n.locale.value === 'zh-CN')
const homeData = computed(() => i18n.tm('homeData'))
const firstScreen = computed(() => homeData.value.firstScreen)
const videoSnapImgSrc = computed(() => isMobile ? firstScreen.value.imgSrc : false)

onMounted(() => {
    window.scrollTo(0, 0)
    const firstScreenEl =  document.querySelector('div.first-screen-content')
    const video = document.querySelector('video.video')
    if(firstScreenEl) {
      firstScreenEl.classList.remove('h-100vh')
    }
    if(video) {
      video.classList.remove('h-100vh')
    }
  })

</script>


<style scoped lang="scss">
$banner-height: calc( 100vh - 60px ) ;

.first-screen-content {
  overflow: hidden;
  background-color: black;
  position: relative;
}

@include desktop{
  .first-screen-content {
    height: $banner-height;
  }
  .h-100vh {
    height: 100vh !important;
  }

}
@include tablet{
  .first-screen-content {
    height: $banner-height;
  }
  .h-100vh {
    height: 100vh !important;
  }
}
@include mobile{
  .h-100vh {
    height: 130.1vw !important;
  }
}

.bg-video {
  height: $banner-height;
  position: relative;
  top: 0;
  left: 0;
  // min-width: 2391px;
  // min-height: 1000px;
  left: 50%;
  transform: translateX(-50%);

  video {
    height: $banner-height;
    width: 100%;
    object-fit: cover;
    font-family: 'object-fit: cover;';
    object-position:center;
    vertical-align: bottom;
  }
}
.bg-img {
  width: 100%;
  line-height: 0;
  img {
    width: 100%;
  }
}

.text-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  // top: 50%;
  // transform: translateY(-55%);
  left: 0;
  top: 0;
  color: white;
  background-color: rgba(0,0,0,0.2);

  .snmk-container {
    position: relative;
    top: 50%;
    transform: translateY(-54%);
  }


  .snmk-btn,.snmk-primary-btn {
    font-size: 18px;
  }

  .snmk-primary-btn {
    color: white;
    margin-right: 0.5em
  }
  .snmk-btn {
    background-color: transparent;
    border-color: white;
    color: white;

    &:hover {
      border-color: $black_white_5;
      color: $black_white_5;
    }
  }

}


@media (min-width: $breakPoint_m) and (max-width : $breakPoint_xl) {
  .bg-video {
    height: $banner-height;
    min-width: 1339px;
    min-height: 560px;
  }

}

@media (max-width: $breakPoint_m) {
  .text-wrapper .snmk-primary-btn {
    margin-right: 0
  }
  .text-wrapper {
    text-align: center;
  }
}
@media (min-width: $breakPoint_xxxl) {
  .snmk-container{
    left: 0;
  }
}


</style>
