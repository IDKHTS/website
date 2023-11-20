<template>
  <BgMedia class='ray-banner' :screenId="'store'" :isFullPage='true' :screen="dataSrc" :isCustomText="true" :isImg="true">
    <template v-if='!isMobile'>
      <div class="snmk-container c-white">
        <div class="snmk-col-6 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="banner-title bold-700 mb-xs" v-html="dataSrc.title + '1'"></div>
          <div class="secondary-title banner-desc bold-700 mb-xs">
            <span class='mr-s ray-desc' v-html="dataSrc.desc"></span>
            <br>
            <span class='ray-discount' v-html='dataSrc.discount'></span>
            <div class='mt-l'>
              <div class="snmk-primary-btn text-center c-white mr-m"
                :id="dataSrc.buyBtn.traceID"
                @click='openShopModal()'>
                {{dataSrc.buyBtn.text}}
              </div>
              <div class='snmk-btn text-center' @click="showModal = true">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M11.5731 6.24986L1.33787 0.125619C1.06537 -0.0372756 0.725537 -0.0420607 0.448483 0.113096C0.171429 0.268253 6.78571e-05 0.559317 8.06644e-06 0.874852V13.1233C-0.00135384 13.4395 0.169826 13.7318 0.447491 13.8872C0.725155 14.0427 1.06589 14.0371 1.3382 13.8726L11.5734 7.74833C11.8382 7.58994 12 7.3057 12 6.99909C12 6.69248 11.8378 6.40824 11.5731 6.24986Z" fill="#1B1B1B"/>
                </svg>
                {{ dataSrc.videoBtn.text }}
              </div>
            </div>
            <div class='ray-desc-list' v-html='dataSrc.descList'></div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="snmk-container pt-2xl text-center pos-relative c-white">
        <div class="snmk-col-8 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-1">
          <div class="banner-title bold-700 mb-xs" v-html="dataSrc.title"></div>
          <div class="secondary-title banner-desc bold-700">
            <span class='mr-m mb-xs display-block text-center ray-desc' v-html="dataSrc.desc"></span>
            <span class='ray-discount' v-html='dataSrc.discount'></span>
            <div class='mt-xl mob-btn-box'> 
              <div class="snmk-primary-btn text-center c-white mb-s"
                :id="dataSrc.buyBtn.traceID"
                @click='openShopModal()'>
                {{dataSrc.buyBtn.text}}
              </div>
              <div @click="showModal = true" class='snmk-btn text-center' >{{ dataSrc.videoBtn.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <Modal v-if="showModal" @close="showModal = false" :videoSrc="dataSrc.videoSource">
    </Modal>
  </BgMedia>
</template>


<script setup lang='ts'>
import BgMedia from '@@/components/BgMedia.vue'
import loadKlaviyo from '@@/resources/js/klaviyo'
import Modal from '@@/components/VideoModal.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

const showModal = ref(false)
const emit = defineEmits(['openShopModal'])
const openShopModal = (data?: any) => emit('openShopModal', data)
onMounted(() => {
  loadKlaviyo()
})
</script>

<style scoped lang='scss'>
@import '../theme.scss';

.ray-banner {
  margin-top: $header-height;
  height: calc(100vh - #{$header-height} - 60px) !important;
  min-height: calc(100vh - #{$header-height} - 60px) !important;
}
.banner-title {
  color: #000;

  /* Display/1920/Gilroy Bold-60 */
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px; /* 113.333% */
  letter-spacing: -0.24px;
  @include mobile {
    color: #000;
    text-align: center;
    font-size: 36px;
    line-height: 44px; /* 113.333% */
    font-weight: 700;
  }
}
.snmk-primary-btn {
  background: linear-gradient(89deg, #02C8D8 0%, #062FEC 100%);
}
.snmk-primary-btn::v-deep a {
  width: 100%;
  text-align: center;
  display: block;
}
.snmk-btn {
  color: #1B1B1B;

  /* Heading/1920/Gilroy Bold-18 */
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
  border: 2px solid #1B1B1B;
  background-color: #0000;

  &:hover {
    border: 2px solid #062FEC;
    color: #062FEC;

    svg path{
      fill: #062FEC;
    }
  }
}
.ray-discount {
  // color: #fff;
  // display: inline-block;
  // padding: 4px 10px;
  // justify-content: center;
  // align-items: center;
  // gap: 10px;
  // background: linear-gradient(89deg, #02C8D8 0%, #062FEC 100%)
  color: var(--unnamed, #1F1F1F);
  text-align: left;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  display: block;
  letter-spacing: -0.24px;
  margin-top: 24px;
  @media (max-width: $breakPoint-xl) {
    margin-top: 16px;
  }
  @include mobile {
    text-align: center;
    font-size: 20px;
    line-height: 28px;
  }
}
.snmk-container  {
  position: relative;
}
.ray-desc {
  color: #6E6E6E;
  /* Heading/1920/Gilroy Bold-24 */
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.24px;
  // color: var(--unnamed, #5C5C5C);
  // font-family: Roboto;
  // font-size: 18px;
  // font-style: normal;
  // font-weight: 700;
  // line-height: 24px; /* 133.333% */
  // letter-spacing: -0.24px;

  @include mobile {
    font-family: Roboto;
    font-size: 16px;
    line-height: 24px; /* 150% */
    letter-spacing: -0.24px;
  }
}
.mob-btn-box {
  display: flex;
  flex-direction: column;
  max-width: 240px;
  margin: auto;
  margin-top: 16px;
}
.ray-desc-list {
  margin-top: 32px;
  color: var(--unnamed, #5C5C5C);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 177.778% */
  letter-spacing: -0.24px;

  @include mobile {
    margin-top: 16px;
  }
}

@media (min-width: 768px) and (max-width: 2560px) {
  .snmk-container  {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
@media (min-width: 2560px) {
  .snmk-container  {
    position: relative;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
.banner-desc {
  color: white;
  text-align: left;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
  @include mobile {
    color: #fff;
    text-align: center;

    /* Heading/375/Gilroy Bold-16 */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: -0.24px;
  }
}

</style>
<style lang='scss'>
.ray-banner .klaviyo-form-UJYEuw form {
  margin: 0 !important;
  max-width: 610px !important;
}
.klaviyo-form-UJYEuw input {
  padding-right: 40px !important;
  border-radius: 60px;
  background: var(--list-press, #F5F5F5) !important;
  backdrop-filter: blur(45px);

  color: var(--unnamed, #1F1F1F) !important;
  font-family: Roboto !important;
  font-size: 18px  !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important; /* 133.333% */
  letter-spacing: -0.24px !important;
  border: unset !important;
}
.klaviyo-form-UJYEuw input:hover {
  border: unset !important;
}
.klaviyo-form-UJYEuw input::placeholder {
  color:  var(--unnamed, #1F1F1F) !important;
  font-family: Roboto !important;
  font-size: 18px  !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important; /* 133.333% */
  letter-spacing: -0.24px !important;

  @media (max-width: 768px) {
    font-size: 14px !important;
  }
}
.klaviyo-form-UJYEuw button {
  margin-left: -60px;
  display: inline-flex !important;
  /* padding: 18px 56px !important; */
  padding-inline: 42px !important;
  justify-content: center !important;
  align-items: center !important;
  border-radius: 60px;
  background: #0C63E2;

  color: #FFF;
  text-align: center !important;
  /* Heading/1920/Gilroy Bold-18 */
  font-family: Roboto;
  font-size: 18px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: 24px !important; /* 133.333% */
  letter-spacing: -0.24px;

  @media (max-width: 768px) {
    padding-inline: 30px !important;
    font-size: 14px !important;
  }
}

</style>
