<template>
  <div id="home-pre-heat" class="pre-heat">
    <div class="bg-contaier" v-if='!isMobile'>
      <div class="bg-mask"></div>
      <video :poster="preHeat.coverImgSrc" muted autoplay
        webkit-playsinline playsinline loop
        class="video preheat-video"
      >
        <source :src="preHeat.webmSource">
        <source :src="preHeat.mp4Source">
      </video>
    </div>
    <div class="text-img-layer" >
      <div class="snmk-container">
        <div class="snmk-col-5 snmk-col-l-6 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 c-white">
          <div class="big-title-2 bold-700" v-html='preHeat.title'></div>
          <div class="big-title-2 bold-700">{{preHeat.title2}}</div>
        </div>
        <div class="snmk-col-12 snmk-col-l-12 snmk-col-m-8"></div>
        <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 c-white">
          <div class="preheat-desc title-3 mt-l" :class='{"vertical-center": !isMobile}' >
            {{preHeat.desc}}
          </div>
        </div>
        <div class="snmk-col-12 snmk-col-l-12 snmk-col-m-8"></div>
        <div class="snmk-col-5 snmk-col-l-6 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 c-white">
          <div class="btn-area mt-2xl" v-if='!preHeat.isFixedBtn || !isMobile'>
            <Navigate
              class="snmk-primary-btn c-white pre-heat-btn"
              :class="{'mt-xs': isMobile, 'mr-xs': !isMobile}"
              target="_blank"
              v-for="btn of preHeat.btns"
              :route="btn.route"
              :id="btn.traceID"
              :aLink="btn.link"
              :key="btn.text"
              @click='showShopModal($event, btn.shopData)'
            >{{btn.text}}
            <!-- <span class="iconfont ml-xs" style="display: inline-block; transform: rotate(-90deg)">&#xe7b2;</span> -->
            </Navigate>
            <div v-if="preHeat.videoSource" class="snmk-btn preheat-player-btn" @click="showModal = true">
              <span class="iconfont mr-xs">&#xe612;</span>{{ preHeat.playBtnText }}
            </div>
          </div>
        </div>
      </div>
      <div class="btn-area fixbtn mt-2xl" v-if='preHeat.isFixedBtn && isMobile'>
        <Navigate
          class="snmk-primary-btn c-white pre-heat-btn mr-xs"
          :class="{'mt-xs': isMobile}"
          target="_blank"
          v-for="btn of preHeat.btns"
          :route="btn.route"
          :id="btn.traceID"
          :aLink="btn.link"
          :key="btn.text"
          @click='showShopModal($event, btn.shopData)'
        >{{btn.text}}
        <!-- <span class="iconfont ml-xs" style="display: inline-block; transform: rotate(-90deg)">&#xe7b2;</span> -->
        </Navigate>
        <div v-if="preHeat.videoSource" class="snmk-btn preheat-player-btn" @click="showModal = true">
          <span class="iconfont mr-xs">&#xe612;</span>{{ preHeat.playBtnText }}
        </div>
      </div>
      <div v-if='isMobile' class='mt-xl mx-2xl'>
        <img src="https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_2.0.jpg" alt="">
      </div>
    </div>
    <modal v-if="showModal" @close="showModal = false" :videoSrc="preHeat.videoSource">
    </modal>
    </div>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import Modal from '@@/components/VideoModal.vue'
// import bgImgHandle from '@/mixins/bgImgHandle'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'



const { isMobile } = storeToRefs(useGlobalStore())

const preHeat = computed<any>(() => ({
  title: `Snapmaker 2.0 Modular <span style='white-space: nowrap;'>3-in-1</span> 3D Printer`,
  title2: '',
  desc: `A powerful and expandable modular system.`,
  coverImgMobile: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_2.0.jpg`,
  btns: [
    {
      text: `Buy Now`,
      // link: `https://us.snapmaker.com/collections/snapmaker-2-0/products/snapmaker-2-0-modular-3-in-1-3d-printer-a350t-a250t`,
      shopLinks: [
        {
          text: `US Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/us.png`,
          link: `https://us.snapmaker.com/products/snapmaker-2-0-modular-3-in-1-3d-printer-a350t-a250t?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-a350t-buy-now&SkipCozyRedirect=yes`
        },
        {
          text: `EU Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/eu.png`,
          link: `https://eu.snapmaker.com/products/snapmaker-2-0-bundle-a350t-a250t?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-a350t-buy-now&SkipCozyRedirect=yes`
        },
        {
          text: `Global Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/others.png`,
          link: `https://shop.snapmaker.com/products/snapmaker-2-0-modular-3-in-1-3d-printer-a350t-a250t?utm_source=officialwebsite&utm_medium=subdomain&utm_content=landing-page-a350t-buy-now&SkipCozyRedirect=yes`
        }
      ]
    }
  ],
  mp4Source: 'https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/at-banner.webm',
  webmSource: 'https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/at-banner.webm',
  videoSource: 'https://www.youtube.com/embed/s71WvJfo7J0?si=0RlulzhT799OBM38',
  playBtnText: 'Watch the video'
}))
const showModal = ref(false)

const eimt = defineEmits(['showShopModal'])
const showShopModal = (event: Event, data: any) => {
  event.preventDefault()
  eimt('showShopModal', data)
}

</script>


<style scoped lang="scss">
.pre-heat {
  height: calc(100vh - #{$header-height} - 60px);
  position: relative;
  background-position: center center;

  &:nth-child(1) {
    height: calc(100vh - 60px);
  }
  @include mobile {
    background-color: black;
    height: auto;
  }
}
.btn-area {
  display: flex;
  @media (max-width: $breakPoint_m) {
    flex-direction: column;
    width: 240px;
    margin: 0 auto;
  }
}
.preheat-date {
  display: inline-flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #FFB802;
}
.pre-heat:deep(.pre-heat-btn) {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  padding: 18px 50px;
  border: 1px solid $blue;
  &:hover {
    border: 1px solid $btn-hover-blue;
  }
}
.preheat-player-btn {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  padding: 16px 32px;
  margin-left: 8px;
  &:hover {
    border-color: #d6d6d6;
    color: #d6d6d6;
  }
  @media (max-width: $breakPoint_m) {
    margin-left: 0;
    margin-top: 8px;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 32px;
  }
}
.bg-mobile {
  height: 100%;
  width: 100%;
  background-position: center center;
}
.bg-contaier {
  position: relative;
  height: 100%;
  width: 100%;

  .bg-mask {
    background-color: rgba(0,0,0,.4);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .preheat-video {
    object-fit: cover;
    font-family: 'object-fit: cover;';
    object-position:center;
    vertical-align: bottom;
    width: 100%;
    height: 100%;
  }
}
.text-img-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  // background-color: rgba(0,0,0,0.3);
  @include mobile {
    position: relative;
    background-color: black;
    padding-bottom: 30px;
  }

  .snmk-container{
    left: 0;
    position: relative;
    top: 50%;
    transform: translateY(-54%);
    color: white;
  }
}
.bold-700 {
  font-weight: 700;
}
.coupon {
  position: relative;
  background-color: #0DEE75;
  display: flex;
  color: #081114;
  padding: 6px 1px;
  border: 0px #0DEE75 solid;
  @include desktop {
    margin-left: 20px;
  }

&::after, &::before {
  content: '';
  width: 0;
  position: absolute;
  top: 0;
  border: 18px #0DEE75 solid;
  border-inline: 6px #0DEE75 solid;
}
&::before {
  left: -11px;
  border-left: 6px transparent solid;
}
&::after {
  right: -11px;
  border-right: 6px transparent solid;
}
.up-to-text {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 12px;
}
.coupon-text {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  margin-left: 0.3vw;
}

.off-text {
  font-size: 24px;
  line-height: 24px;
}
}
.fixbtn {
  position: absolute;
  bottom: 9.41vh;
  transform: translatex(-50%);
  left: 50%;
}

// special modify ....
@include mobile{
  .pre-heat:deep(.pre-heat-btn) {
  font-size: 16px;
  line-height: 24px;
  padding: 12px 48px;
}

.text-img-layer .snmk-container{
  padding-top: 12vw;
  position: relative;
  top: 0;
  transform: unset;
}
.text-img-layer {
  text-align: center;
}
.big-title-2 {
  font-size: 28px;
  line-height: 36px;
}

.title-3{
  font-size: 14px;
  line-height: 20px;
}
.font-1 {
  font-size: 14px;
  line-height: 20px;
}

.mt-l {
  margin-top: 16px;
}
.mt-2xl{
  margin-top: 26px;
}
}
@include tablet{
  .pre-heat:deep(.pre-heat-btn) {
    padding: 16px 48px;
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

}


</style>
