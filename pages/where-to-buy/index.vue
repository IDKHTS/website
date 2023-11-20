<template>
    <Distributor v-if="isCN"/>
    <div v-else>
      <Banner :dataSrc='banner'></Banner>
  
        <div class='snmk-container'>
          <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
            <div class='store-title' v-html='onlineStore.title'></div>
            <div class='store-card-container'>
              <template v-for='store of onlineStore.columnsCon' :key='store.title'>
                <a v-if='!store.childrenPart' class='store-card' :href="store.aHref" target='_blank'>
                  <div class='official-icon'><img :src="onlineStore.iconSrc" alt=""></div>
                  <div class='img-container'>
                    <img  :src="store.aImgSrc" :alt="store.name">
                  </div>
                  <div class='store-name' v-html='store.name.toUpperCase()'></div>
                </a>
                <div v-else class='store-card'  @click="visibleModal">
                  <div class='official-icon'><img :src="onlineStore.iconSrc" alt=""></div>
                  <div class='img-container'>
                    <img  :src="store.aImgSrc" :alt="store.name">
                  </div>
                  <div class='store-name' v-html='store.name.toUpperCase()'></div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <template v-for='store of onlineStore.columnsCon'>
          <Modal v-if='store.childrenPart' v-show="modalShow"
            :title="store.modalTitle"
            :onCancel="cancelModal"
            :key='store.name + "modal"'
          >
            <div class='amazon-modal-body'>
              <div class="amazon-region" v-for="childItem in store.childrenPart" :key='childItem.aDivCon'>
                <a :href='childItem.aHref' target="_blank">
                  <div class="card children-card">
                    <img :src="childItem.aImgSrc" />
                    <div class="region">{{ childItem.aDivCon }}</div>
                  </div>
                </a>
              </div>
            </div>
          </Modal>
        </template>
  
        <div class='snmk-container' :style="{'padding-bottom': isMobile ? '60px' : '100px' }">
          <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
            <div class='store-title' v-html='globalResellerNetwork.title'></div>
            <div class='pos-relative line-h-0'>
              <Navigate :aLink="globalResellerNetwork.link" :route="globalResellerNetwork.route">
                <img class='w-100' :src="isMobile ? globalResellerNetwork.imgMobSrc :globalResellerNetwork.imgSrc" :alt="globalResellerNetwork.title">
              </Navigate>
              <div class='gtn-desc'>
                <span>{{ globalResellerNetwork.desc }}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
  

<script setup lang='ts'>
import head from '@@/resources/data/head'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import Modal from '~/components/Modal.vue'
import Navigate from '@@/components/Navigate.vue'
import Banner from './components/Banner.vue'
import Distributor from './DistributorsCN.vue'



useHead(head.distributor)
const i18n = useI18n()
const { isMobile } = storeToRefs(useGlobalStore())
const isCN = computed(() => i18n.locale.value == 'zh-CN') 
const whereToBuy = computed<any>(() => i18n.tm('whereToBuy'))
const banner = computed(() => whereToBuy.value.banner)
const onlineStore = computed(() => whereToBuy.value.onlineStore)
const globalResellerNetwork = computed(() => whereToBuy.value.globalResellerNetwork)
const modalShow = ref(false)
const visibleModal = () => modalShow.value = true
const cancelModal = () => modalShow.value = false
</script>
  
<style scoped lang="scss">  
  .store-card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .store-title {
    margin-top: 100px;
    margin-bottom: 68px;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height, or 122% */
  
    letter-spacing: -0.24px;
  }
  .store-card {
    cursor: pointer;
    position: relative;
    width: 30%;
    // border-image: linear-gradient(180deg, #CAAD82 100%, #F9E3BE 100%);
    // border-image-slice: 1;
    border-color: #CAAD82;
    border-width: 3px;
    border-style: solid;
    border-radius: 5px;
    margin-top: 24px;
  
    .official-icon {
      position: absolute;
      top: 0;
      right: 26px;
    }
  }
  .img-container {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    @media (min-width: $breakPoint_m) and (max-width: ($breakPoint_xxl - 1px)){
      margin-top: 40px;
    }
    img {
      width: 13.85vw;
    }
  }
  @include no-mobile {
    .store-card:nth-child(1),.store-card:nth-child(2),.store-card:nth-child(3) {
      margin-top: 0;
    }
  }
  // .store-card:first-child img{
  //   background-color: #F7F7F7;
  // }
  .store-name {
    padding-block: 14px 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
  
    text-align: center;
    letter-spacing: -0.0990544px;
    text-transform: uppercase;
  
    color: #676767;
  }
  .gtn-desc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height, or 122% */
  
    letter-spacing: -0.24px;
  
    color: #EDB665;
  }
  
  @include mobile {
    .store-card {
      width: 100%;
      margin-top: 20px;
    }
    .img-container {
      margin-top: 58px;
      img {
        width: 220px;
      }
    }
    .store-card .official-icon{
      width: 52px;
      right: 20px;
    }
    .store-name {
      padding-block: 12px 20px;
    }
    .store-title {
      margin-top: 60px;
      margin-bottom: 20px;
      text-align: center;
      font-size: 25px;
      line-height: 29px;
    }
    .gtn-desc {
      text-align: center;
      width: 100%;
      font-weight: 500;
      font-size: 25px;
      line-height: 29px;
    }
  }
  
  
  
  
  .amazon-modal-body {
    width: 760px;
    height: 365px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    @media (min-width: 1087px) {
      &:first-child{
        padding-left: 2px;
      }
    }
    .children-card, .amazon-region {
      width: 220px;
      height: 137px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:hover {
        cursor: pointer;
      }
      img {
        width: 92px;
        height: 48px;
      }
      .region {
        font-size: 18px;
        margin-top: 6px;
      }
    }
    .amazon-region {
      margin: 30px 0 0 24px;
    }
    @media (max-width: 1087px) {
      width: 95vw;
      height: 100%;
      overflow: auto;
      padding: 0 7vw;
      justify-content: space-between;
      .amazon-region {
          // margin: 30px 4.6vw 0;
          width: 38vw;
          height: 23vw;
          margin: 24px 0 0 0;
          &:last-child {
              margin-bottom: 24px;
          }
          .children-card {
              width: 100%;
              height: 23vw;
              padding: 1.3rem 1rem 0.7rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              img {
                  width: 18vw;
                  height: 9.5vw;
              }
              .region {
                  font-size: 4vw;
                  white-space: nowrap;
              }
          }
      }
    }
  }
  
</style>
  