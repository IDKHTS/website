<template>
  <div class='store'>
    <div class="snmk-container">
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2">
        <div class="page-title" v-html='dataSrc.title'></div>
        <div class='s-price' v-html='dataSrc.price'></div>
        <div class='snmk-primary-btn' @click="showShopModal">{{ dataSrc.btnText }}</div>
        <NuxtImg class='w-100 mt-xl' :src="isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy' />
        <div v-if='!isMobile' class='fs-wrapper'>
          <div class='fs-tag' v-for='tag in dataSrc.tags' :key='tag' v-html='tag'></div>
        </div>
        <div v-else  class='fs-wrapper'>
          <div v-for='(pair, index) of mobSellPoints' :key='index' class='fs-pair'>
            <div class='fs-tag' :style='{marginRight: pair.length == 1 ? "0" : ""}' v-for='tag in pair' :key='tag' v-html='tag'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
const { isMobile } = storeToRefs(useGlobalStore())
const dataSrc = computed<any>(() => ({
  title: `Snapmaker 2.0 3-in-1 3D Printer`,
  price: `A350T <span style="color: #0C63E2">$1,199</span> | A250T <span style="color: #0C63E2">$999</span>`,
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/PC_Snapmaker-2.0-3-in-1-3D-Printer.jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/web_Snapmaker-2.0-3-in-1-3D-Printer.jpg`,
  btnText: 'Buy Now',
  tags: [
    '3-in-1: 3DP, Laser, CNC',
    '10+ Modules Available for Upgrade',
    '350mm × 350mm × 350mm',
    'All-metal Design',
    '5" Touchscreen'
  ]
}))
const mobSellPoints = computed(() => {
  const sp = dataSrc.value.tags  
  return [
    [sp[0]],
    [sp[1]],
    [sp[2]],
    [sp[3], sp[4]]
  ]
})

const emit = defineEmits(['showShopModal'])
const showShopModal = () => emit('showShopModal')

</script>


<style lang='scss' scoped>
@import '../common.scss';

.store {
  background: #F7F7F7;
  padding-block: 136px 112px;
  text-align: center;
  .s-price {
    color: #383939;
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.24px;

    margin-block: 8px 24px;
    @include mobile {
      margin-block: 16px 48px;
    }
  }
}

.fs-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.fs-tag {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1px solid #171717;

  color: #171717;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.24px;
  margin-right: 10px;
  margin-top: 10px;
  &:last-child {
    margin-right: 0;
  }

  @include mobile {
    // width: 50%;
    flex: 1 1 auto;
  }
}
.fs-pair {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
