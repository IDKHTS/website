<template>
  <section class="top-banner" style="padding: 0;">

    <modal v-if="showModal" @close="closeModal"
        :videoSrc="videoSource"> </modal>

    <div class="preview">
      <!-- <video autoplay="autoplay" loop="loop" class="video"> -->
      <!-- <div class="pc" style="display: flex; max-height: calc(100vh - 56px - 80px);"> --> <!--  With banner -->
      <div  v-show="!imgSource" class="pc" style="display: flex; max-height: calc(100vh - 56px);"> <!-- without banner -->
        <video  ref="videoEl" muted :poster="previewSource" :autoplay="autoplay" webkit-playsinline playsinline :loop="loop" class="video" style="object-fit: cover;font-family: 'object-fit: cover;';object-position:center;vertical-align: bottom;width: 100%;">
          <source v-if="withSource === 'true'" :src="webmSource">
          <source v-if="withSource === 'true'" :src="mp4Source">
        </video>
      </div>
      <div v-show="imgSource" class="pc" style="display: flex; max-height: calc(100vh - 56px);">
        <img :src="imgSource" alt="">
      </div>
      <div class="mask"></div>

      <div class="overlay" :class="{'hasCountdown': hasCountdown}">
        <div v-if="showDefaultText === 'true'">
            <div class="has-text-centered"   style="margin-bottom: 30px;"  >
                <img style="height: 54px;" :src="bannerText.iconImg" :alt="bannerText.bannerH1Text">
            </div>
          <h1 style="font-weight: 300; font-size: 4.15rem;">{{bannerText.bannerH1Text}}</h1>
          <h2 class="subTitle">{{bannerText.bannerH2Text}}</h2>

          <Countdown v-if="hasCountdown === true && locale === 'en-US'"></Countdown>
          <div class="how_it_works_button">
            <a class="button button-white" style="font-size: 1.5rem;" @click="openModal">
              {{bannerText.bannerButText}}
            </a>
          </div>
        </div>
        <slot>
        </slot>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import objFitVideo from '@@/resources/js/object-fit-videos';
import Modal from '@@/components/VideoModal.vue';
import Countdown from '@@/components/CountdownPlatform.vue'

const props = withDefaults(defineProps<{
  previewSource?: string
  mp4Source?: string
  webmSource?: string
  videoSource?: string
  showDefaultText?: string
  withSource?: string
  bannerText?: any
  hasCountdown?: boolean
  showModal?: boolean
  imgSource?: boolean
  loop?: boolean
  autoplay?: boolean
  isPlay?: boolean
}>(), {
  previewSource: '/static/img/ec/banner-v2.jpg',
  mp4Source: '/static/img/ec/banner-v2.mp4',
  webmSource: '/static/img/ec/banner-v2.webm',
  videoSource: 'https://www.youtube.com/embed/uM7ZVgjp5iY',
  showDefaultText: 'true',
  withSource: 'true',
  bannerText: {},
  hasCountdown: false,
  showModal: false,
  imgSource: false,
  loop: true,
  autoplay: true,
  isPlay: false
})

const emit = defineEmits(['openModal', 'closeModal', 'videoStop'])
const openModal = () => emit('openModal')
const closeModal = () => emit('closeModal')
onMounted(() => { objFitVideo() })

const i18n = useI18n()
const locale = computed(() => i18n.locale.value)

const videoEl = ref()
watch(() => props.isPlay, (n, o) => {
  if(n){
    videoEl.value.play()
    videoEl.value.onended = () =>{
      emit('videoStop')
    }
  }else {
    videoEl.value.pause()
  }
})



</script>



<style type="text/css" scoped lang="scss">
@import '@@/resources/scss/variable.scss';


section {
  &.top-banner {
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;
    .preview {
      position: relative;
      min-width: 100%;
      min-height: 100%;
      video {
        width : 100%;
        // height : 100%;
      }

      .play-btn {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 60px;
          height: 60px;
          z-index: 2;
      }



      .mask {
        content : '';
        display : inline-block;
        width: 100%;
        height: 100%;
        position: absolute;
        top : 0;
        right : 0;
        bottom: 0;
        left : 0;
        opacity: 0.4;
        background: #191919;
      }

      .overlay {
        position: absolute;
        top : 30%;
        left : 0;
        right : 0;
        z-index: 3;
        color : white;

        h1 {
          text-align : center;
          color: white;
        }
        h2 {
          text-align : center;
          color: white;
          font-size: 2rem;
        }
        .subTitle{
            font-size: 2rem;
            margin-bottom: 90px;
            opacity: .7;
        }
        @media (min-width: 760px) and (max-width: 1007px) {
          h1 {
            font-size: 2rem;
          }
          h2 {
            font-size: 1.5rem;
          }
        }

        .how_it_works_button {
          text-align: center;

          height : 45px;
          margin : 30px auto;
          .button {
            width: 260px;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            border-color: white;
            /*border-radius: 20px;*/
            width: 196px;
            border-width: 2px;
            padding: 18px;

            &:hover {
              background-color: white;
              color: black;
            }
          }
        }

        .countdown-text {
          margin-left: auto;
          margin-right: auto;
          margin-top: 1rem;
          span {
            position: relative;
            top: -5px;
            left: 1px;
            &:not(:last-child) {
              margin: 0 22px 0 0;
            }
            font-size: 48px;
            color: $black;
            font-family: "Arial";
          }
        }

      }
      .overlay.hasCountdown{
          top: 10% ;
          .subTitle{
              margin-bottom: 40px;
          }
      }
    }
  }
}
</style>
