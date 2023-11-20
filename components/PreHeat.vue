<template>
    <div id="home-pre-heat" class="pre-heat">
      <div v-if="isMobile || preHeat.bgImgSrc" class="bg-mobile" :style="{'background-image': `url('${fullViewImg}')`,
        'background-size': `${fullViewImgWidth}px ${fullViewImgHeight}px`}">
      </div>
      <div class="bg-contaier" v-else>
        <div class="bg-mask"></div>
        <video v-if="!preHeat.bgImgSrc" :poster="preHeat.coverImgSrc" muted autoplay
          webkit-playsinline playsinline loop
          class="video preheat-video"
        >
          <source :src="preHeat.webmSource">
          <source :src="preHeat.mp4Source">
        </video>
      </div>
      <div class="text-img-layer" >
        <div class="snmk-container">
          <div v-if='preHeat.propagandaIcon || preHeat.propagandaIcon2' :class="{'horizontal-center': isMobile}"
          class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 line-h-0 display-flex">
            <img v-if='preHeat.propagandaIcon' class='propaganda-icon' :class="{'mr-m': !!preHeat.propagandaIcon2 || !!preHeat.propagandaIcon3}" :src="preHeat.propagandaIcon" :alt="preHeat.title">
            <img v-if='preHeat.propagandaIcon2' class='propaganda-icon' :class="{'mr-m': !!preHeat.propagandaIcon3}" :src="preHeat.propagandaIcon2" :alt="preHeat.title">
            <img v-if='preHeat.propagandaIcon3' class='propaganda-icon' :src="preHeat.propagandaIcon3" :alt="preHeat.title">
          </div>
          <div class="snmk-col-5 snmk-col-l-6 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 c-white">
            <div class='horizontal-center mb-s'  v-if='preHeat.hasCoupon && isMobile' >
              <img :src="preHeat.couponIcon" alt="coupon icon">
              <!-- <div class='coupon'>
                <div class='up-to-text'><span>UP</span><span>TO</span></div>
                <div class='coupon-text'>33%</div>
                <div class='off-text'>OFF</div>
              </div> -->
            </div>
            <div v-if='preHeat.date' class="preheat-date mb-l" v-html='preHeat.date'></div>
            <div class="big-title-2 bold-700" v-html='preHeat.title'></div>
            <div class="big-title-2 bold-700">{{preHeat.title2}}</div>
          </div>
          <div class="snmk-col-12 snmk-col-l-12 snmk-col-m-8"></div>
          <div class="snmk-col-4 snmk-col-l-4 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 c-white">
            <div class="preheat-desc title-3 mt-l" :class='{"vertical-center": !isMobile}' >
              {{preHeat.desc}}
              <img class='ml-s' v-if='preHeat.hasCoupon && !isMobile' :src="preHeat.couponIcon" alt="coupon icon">
              <!-- <div v-if='preHeat.hasCoupon && !isMobile' class='coupon'>
                <div class='up-to-text'><span>UP</span><span>TO</span></div>
                <div class='coupon-text'>33%</div>
                <div class='off-text'>OFF</div>
              </div> -->
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
      </div>
      <VideoModal v-if="showModal" @close="showModal = false" :videoSrc="preHeat.videoSource">
      </VideoModal>
      </div>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import useBgImgHandle from '~/composables/useBgImgHandle'
import VideoModal from '@@/components/VideoModal.vue'
import { useGlobalStore } from '~/stores'
import { storeToRefs } from 'pinia'
import { DeviceType } from '~/constant'

const props = withDefaults(defineProps<{
  preHeat: any
}>(), { preHeat: {}})

const { isMobile, device } = storeToRefs(useGlobalStore())
const isPC = computed(() => device.value === DeviceType.PC)

const showModal = ref(false)

// handle with bg assets(img/video) size
const fullViewImg = computed(() => {
  if (props.preHeat.bgImgSrc) {
    return isMobile.value ? props.preHeat.bgImgMobile : (isPC.value ? props.preHeat.bgImgSrc : props.preHeat.bgImgPad)
  }
  return isMobile.value ? props.preHeat.coverImgMobile : (isPC.value ? props.preHeat.coverImgSrc : props.preHeat.coverImgPad)

})
const { 
    fullViewImgWidth,
    fullViewImgHeight,
    initBgWH
  } = useBgImgHandle(fullViewImg.value)
watch(fullViewImg, () => {
  initBgWH(true)
})



</script>

<style scoped lang="scss">


.pre-heat {
  height: 100vh;
  position: relative;
  background-position: center center;

  &:nth-child(1) {
    height: calc(100vh - 60px);
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
    color: white;
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

  .snmk-container{
    left: 0;
    position: relative;
    top: 50%;
    transform: translateY(-54%);
    color: white;
  }
  .propaganda-icon {
    // width: 4.583vw;
    max-height: 48px;
    margin-bottom: 24px;
    @include mobile {
      max-height: 48px;
      margin-bottom: 21px;
    }
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
    top: 12vw;
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
  .pre-heat-btn {
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
