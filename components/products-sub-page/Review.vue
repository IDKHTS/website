<template>
  <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar" :withModal='true'></SubNavBar>
  <modal v-if="showModal" @close="showModal = false" :videoSrc="videoLink">
  </modal>
  <div class='snmk-container mt-3xl'>
    <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
      <Swiper :swiperId="'preview-siwper'" :options="swiperOptions" @loaded="swiperLoaded">
        <div class="swiper-slide" v-for="item of dataSrc.content" :key="item.text">
          <div class="wrap" :style="{ backgroundImage: `url(${item.imgSrc})` }">
            <a class="icon" @click="showVideo(item.videoLink)">
              <img :src="dataSrc.iconImg" class="iconImg" alt="Placeholder image">
            </a>
            <p class="reviewTitle">
              {{ item.text }}
            </p>
          </div>
        </div>
      </Swiper>
      <!-- @changeSlide="selectedIndex" -->

      <section class="comment">
        <div class='snmk-container mt-3xl'>
          <div
            class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
            <div class="main-title text-center">{{ dataSrc.jdgmConfig.title }}</div>
            <div class="jdgm-widget jdgm-review-widget jdgm-outside-widget" :data-id="dataSrc.jdgmConfig.id"
              :data-product-title="dataSrc.jdgmConfig.title"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
    
<script setup lang='ts'>
import Swiper from '@@/components/swiper/Swiper.vue';
import SubNavBar from '@@/components/SubNavBar.vue'
import { storeToRefs } from 'pinia'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import { useGlobalStore } from '~/stores'
import { SwiperOptions } from 'swiper/types/swiper-options';
import Modal from '@@/components/VideoModal.vue';
const { isMobile } = storeToRefs(useGlobalStore())

const props = withDefaults(defineProps<{
  dataSrc: any
  subNavBar: ISubNavMenu
}>(), { dataSrc: {} })

const showModal = ref(false)
const videoLink = ref('')
const showVideo = (link: string) => {
  videoLink.value = link
  showModal.value = true
}

const swiperOptions = ref<SwiperOptions>({
  slidesPerView: 3,
  spaceBetween: 16,
  slidesPerGroup: 3,
  // slideToClickedSlide: false,
  // autoplayDisableOnInteraction: false,
  // watchSlidesProgress : true,
  // observer: true,
  // observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})
const swiper = ref({})
const swiperLoaded = (_swiper: any) => swiper.value = _swiper

const timerRef = ref()
const timer = () => {
  timerRef.value = setInterval(() => {
    const askQuestionBtn = document.querySelector('.jdgm-ask-question-btn');
    const questionBtn = document.querySelector('.jdgm-subtab__name[data-tabname="questions"]')
    const writeReviewBtn = document.querySelector('.jdgm-write-rev-link')
    const verifyIcon = document.querySelector('.jdgm-rev__buyer-badge')
    if (!!askQuestionBtn && !!questionBtn && !!writeReviewBtn && !!verifyIcon) {
      var style = document.createElement('style');
      document.head.appendChild(style);
      style.innerHTML = `
        .jdgm-ask-question-btn, .jdgm-subtab__name[data-tabname="questions"] { display: none !important; }
        .jdgm-rev__buyer-badge, .jdgm-rev__icon::after { background-color: #28A7E1 !important; }
        .jdgm-write-rev-link, .jdgm-paginate__page { color: #28A7E1 !important; }
      `;
      clearInterval(timerRef.value);
    }
  }, 500);
}
const loadJdgm = () => {
  let frag1 = document.createDocumentFragment();
  let htmlScript = document.createElement('script');
  htmlScript.innerHTML = 'jdgm = window.jdgm || {}; jdgm.SHOP_DOMAIN = \'snapmaker-eu.myshopify.com\';jdgm.PLATFORM = \'shopify\';jdgm.PUBLIC_TOKEN = \'vDxVkR-5uJG-BR98WulEFS23Fpk\';'
  htmlScript.setAttribute('id', window.location.pathname.split('/')[2]);
  htmlScript.setAttribute('class', 'judge-me-main');

  let titleElement = document.createElement('title');
  titleElement.innerHTML = 'Snapmaker original - Reviews';

  let normalScript = document.createElement('script')
  normalScript.setAttribute('data-cfasync', 'false');
  normalScript.setAttribute('type', 'text/javascript');
  normalScript.setAttribute('async', true);

  let firstScript = normalScript.cloneNode();
  let secondScript = normalScript.cloneNode();
  firstScript.setAttribute('src', 'https://cdn.judge.me/widget_preloader.js');
  secondScript.setAttribute('src', 'https://cdn.judge.me/assets/installed.js');
  firstScript.setAttribute('class', 'judge-me-second');
  secondScript.setAttribute('class', 'judge-me-third');
  frag1.appendChild(titleElement);
  frag1.appendChild(firstScript)
  frag1.appendChild(secondScript)
  frag1.appendChild(htmlScript);
  document.head.appendChild(frag1);
}

onMounted(() => {
  timer()
  loadJdgm()
})
</script>
    
    
<style lang="scss" scoped>
.main-title {
  margin-top: 80px;
  font-weight: bold;
  color: #272829;
  line-height: 35px;
  font-size: 30px;
  padding: 0 20px;
}

.wrap {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  height: 210px;
}

.icon {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: .8;
  width: 60px;
  height: 60px;
}

.reviewTitle {
  position: absolute;
  background: linear-gradient(180deg, rgba(39, 40, 41, 0) 0%, rgba(39, 40, 41, 0.5) 36%, rgba(39, 40, 41, 1) 100%);
  padding: 9px 0;
  bottom: -1%;
  width: 100%;
  text-indent: 1.5em;
  color: white;
}
</style>
    