<template>
  <div class='cp-container'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <NuxtImg class="w-100" :src="isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy' />
        <div class="cp-tab-container" v-if="!isMobile">
          <div class="cp-tabs">
            <div class="cp-tab" v-for="(tab, index) of dataSrc.tabs" :key="tab.title" v-html="tab.title" @click="selectTab(index)" :class="{'cp-tab-active': index === selectedTabIndex}"></div>
          </div>
          <div class="cp-content">
            <div class="cp-fitting" v-for="item of currTab.fittings" :key="item.name">
              <div class="cp-fitting-img">
                <NuxtImg :src="item.imgSrc" :alt="item.name" />
              </div>
              <div class="cp-fitting-name" v-html="item.name"></div>
            </div>
          </div>
        </div>
        <div class="cp-tab-container" v-else>
          <div class="mt-3xl" v-for="tab of dataSrc.tabs" :key="tab.title">
            <div class="cp-tab" v-html="tab.title"></div>
            <div class="cp-content">
              <div class="cp-fitting" v-for="item of tab.fittings" :key="item.name">
                <div class="cp-fitting-img">
                  <NuxtImg :src="item.imgSrc" :alt="item.name" loading='lazy' />
                </div>
                <div class="cp-fitting-name" v-html="item.name"></div>
              </div>
            </div>
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
const selectedTabIndex = ref(0)
const dataSrc = computed<any>(() => ({
  imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/Pc_snapmaker.jpg`,
  imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/web_snapmaker.jpg`,
  tabs: [
    {
      title: `Improve Efficiency & Safety`,
      fittings: [
        {
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/Pc_2.0 Quick Swap.jpg`,
          name: `2.0 Quick Swap`
        },
        {
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/Pc_Enclosure for 2.0.jpg`,
          name: `Enclosure for 2.0`
        },
        {
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/Pc_Air Purifier.jpg`,
          name: `Air Purifier`
        },
        {
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/Emergency Stop Button.jpg`,
          name: `Emergency Stop Button`
        }
      ]
    },
    {
      title: `Advance in 3DP & Laser & CNC`,
      fittings: [
        {
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/pc_Dual Extrusion 3D Printing Module.jpg`,
          name: `Dual Extrusion Printing Module`
        },
        {
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/Pc_10W.jpg`,
          name: `10W Laser Module`
        },
        {
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/pc_40W.jpg`,
          name: `40W Laser Module`
        },
        {
          imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/compatible/Pc_Module.jpg`,
          name: `Rotary Module`
        }
      ]
    }
  ]
}))
const currTab = computed(() => dataSrc.value.tabs[selectedTabIndex.value])
const selectTab = (index: number) => selectedTabIndex.value = index
</script>


<style lang='scss' scoped>
@import '../common.scss';
.cp-container {
  background-color: black;
  padding-block: 100px;

}
.cp-tab-container {

  .cp-tabs {
    margin-top: 48px;
    display: flex;
    position: relative;
  }
  .cp-tab {
    color: #5C5C5C;
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.24px;
    @include no-mobile {
      width: 50%;
      padding-inline: 16px;
      padding-bottom: 21px;
      border-bottom: 1px solid #767676;
      cursor: pointer;
    }

    @include mobile {
      color: var(--White, #FFF);
      font-size: 36px;
      font-weight: 700;
      line-height: 44px;
    }
  }
  .cp-tab-active {
    color: #0078E2;
    border-bottom: 5px solid #0078E2;;
    font-weight: 400;
  }

  .cp-content {
    display: flex;
    justify-content: flex-start;
    @include no-mobile { min-height: 350px;}
    @include mobile {
      margin-top: 12px;
      flex-wrap: wrap;
    }
  }
  .cp-fitting {
    width: calc((100% - 20px * 3) / 4);
    margin-top: 48px;
    // max-width: 344px;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    @include mobile {
      margin-top: 24px;
      width: calc((100% - 16px) / 2);
      margin-right: 16px;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  .cp-fitting-img {
    padding: 20px;
    background: #171717;
  }
  .cp-fitting-name {
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;
    margin-top: 16px;

    @include mobile {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      margin-top: 6px;
    }
  }

}

</style>
