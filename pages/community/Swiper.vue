<template>
  <div>
    <div class='swiper-container' :id="'community-banner'+_uid">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="top-banner" :style="{'background-image': `url('${topImgSrc(bannerData[0])}')`}">
            <div class='text-container' :class="{'vertical-center-community': !bannerData[0].isCenter, 'center-style': bannerData[0].isCenter}">
              <div class="snmk-container">
                <div
                  :class="{
                    'snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 text-center': bannerData[0].isCenter,
                    'snmk-col-5 snmk-col-l-5 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4': !bannerData[0].isCenter
                  }"
                >
                    <div  v-if='!isMobile' class='change-color-container mb-l' :style="{'width': '261px' , 'margin-bottom':  '32px'  }">
                      <img class='change-color' :style="{'filter': `drop-shadow(white 261px 0 0)`}" :src="bannerData[0].logImgSrc" :alt="bannerData[0].desc">
                    </div>
                    <div v-if='bannerData[0].aheadDesc' class="ahead-desc" v-html='bannerData[0].aheadDesc'></div>
                    <div v-if='bannerData[0].title && isMobile' class="font-bw-1 title-1 bold-700" v-html='bannerData[0].title' style='color: white'></div>
                    <div v-if='bannerData[0].desc && !isMobile' class="font-bw-1 font-1 mt-m" :class="`s-banner-desc-0`" >{{bannerData[0].desc}}</div>
                    <Navigate
                        target="_blank"
                        :id="bannerData[0].btn.traceID"
                        class="snmk-primary-btn mt-l"
                        :class="{'pi-64': !bannerData[0].isCenter}"
                        :route="bannerData[0].btn.route"
                        :aLink="bannerData[0].btn.link"
                      >
                        {{bannerData[0].btn.text}}
                    </Navigate>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="top-banner" :style="{'background-image': `url('${topImgSrc(bannerData[1])}')`}">
            <div class='text-container' :style="{ top: isMobile ? 'unset' : '', height: isMobile ? '100%' : ''}"
            :class="{'vertical-center-community': !bannerData[1].isCenter, 'center-style': bannerData[1].isCenter}">
              <div v-if='isMobile' class='change-color-container mb-l mt-l' :style="{'width':'208px', 'margin-bottom':'24px', 'margin-inline': isMobile && 'auto' }">
                <img class='change-color' :style="{'filter': `drop-shadow(#0C63E2 208px 0 0)`}" :src="bannerData[1].logImgSrc" :alt="bannerData[1].desc">
              </div>
              <div class="snmk-container" :style="{position: isMobile &&'absolute', bottom: isMobile && '40px'}">
                <div
                  :class="{
                    'snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 text-center': bannerData[1].isCenter,
                    'snmk-col-5 snmk-col-l-5 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4': !bannerData[1].isCenter
                  }"
                >
                    <div v-if='!isMobile' class='change-color-container mb-l' :style="{'width':'208px', 'margin-bottom':'24px'}">
                      <img class='change-color' :style="{'filter': `drop-shadow(#0C63E2 208px 0 0)`}" :src="bannerData[1].logImgSrc" :alt="bannerData[1].desc">
                    </div>
                    <div v-if='bannerData[1].aheadDesc' class="ahead-desc" v-html='bannerData[1].aheadDesc'></div>
                    <div class="font-bw-1 title-1 bold-700" v-html='bannerData[1].title'></div>
                    <div v-if='bannerData[1].desc' class="font-bw-1 font-1 mt-m" :class="`s-banner-desc-1`" >{{bannerData[1].desc}}</div>
                    <Navigate
                        target="_blank"
                        :id="bannerData[1].btn.traceID"
                        class="snmk-primary-btn"
                        :class="{'pi-64': !bannerData[1].isCenter}"
                        :route="bannerData[1].btn.route"
                        :aLink="bannerData[1].btn.link"
                        style='border-radius: 5px;font-weight: 700;font-size: 16px;line-height: 24px;padding-inline: 14px;padding-block: 8px;
                        background: linear-gradient(306.33deg, #17CCCD 22.69%, #2ECBC0 26.64%, #61CAA3 36.5%, #8DC88A 46.57%, #B0C776 56.65%, #CCC666 66.74%, #E0C65B 76.86%, #ECC554 87.02%, #F0C552 97.32%); margin-top:32px'
                      >
                        {{bannerData[1].btn.text}}
                    </Navigate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination-community" slot="pagination"></div>
    </div>
  </div>
</template>


<script setup lang='ts'>
import Swiper from 'swiper'
import 'swiper/css';
import Navigate from '@@/components/Navigate.vue'
import _ from 'lodash'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const _uid = ref(_.uniqueId())
const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const bannerData = computed(() => i18n.tm('communityData').topBanners)
const topImgSrc = (banner) => isMobile ? banner.topMobileImg : banner.topImg
onMounted(() => {
  const swiper = new Swiper('#community-banner'+_uid.value, {
      // clickable: true,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.swiper-pagination-community'
      }
    })
})

</script>

<style lang="scss" scoped>

.top-banner{
  position: relative;
  display: block;
  height: 496px;
  background-size: 1920px 496px;
  background-position: center;
  cursor: grab;
}
.text-container {
  box-sizing: border-box;
  width: 100%;
}


$icon-width: 261px;
$icon-height: 36px;
.change-color-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: $icon-width;
  height: $icon-height;
  margin-right: 14px;
  position: relative;
}
.change-color {
  filter: drop-shadow(#0C63E2 $icon-width 0 0);
  // transform: translateX(-100%);
  transform: translate(-100%, -50%);
  position: absolute;
  top: 50%;
  left: 0px;
}
.video-play-icon {
  width: $icon-width;
  height: $icon-height;
  margin-right: 12px;
}


.s-banner-desc-0 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  letter-spacing: -0.0038em;
  color: white;
}
.s-banner-desc-1 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: left;
}
.ahead-desc {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #535353;
  margin-bottom: 8px;
  margin-top: 98px;
}
.vertical-center-community{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.snmk-primary-btn {
  padding-block: 16px;
  padding-inline: 64px;
  font-size: 20px;
  line-height: 24px;
  margin-top: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  background: #00DFC3;
}
.center-style .snmk-primary-btn{
  margin-top: 24px;
  padding-inline: 48px;
}
.pi-64 {
  padding-inline: 64px;
}
.mt-117 {
  margin-top: 117px;
}


@include mobile {
  .top-banner{
    background-position: center center;
    background-size: 100vw 133.33vw;
    height: 133.33vw;
    .text-container{
      text-align: center;
      top: 48px;
      transform: unset;

    }
    .title-1 {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
    }
    .ahead-desc  {
      margin-top: 32px;
      font-size: 12px;
      line-height: 16px;
      font-style: normal;
      font-weight: 600;
      color: #161616;
    }
    .font-1 {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      // color: $black-white-2;
    }
    .snmk-primary-btn {
      margin-top: 24px;
      padding-inline: 64px;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
  }
}
</style>

<style lang="scss">
.swiper-pagination-community {
  position: absolute;
  bottom: 10px;
  z-index: 1;
  display: flex;
  justify-content: center;

  .swiper-pagination-bullet {
    background: white;
    opacity: 1;

    &-active {
      background: #0C63E2;
    }
  }
}
@media (max-width: (747px)) {
  .not-mob {
    display: none !important;
  }
}
</style>
