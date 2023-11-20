<template>
  <div>
    <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar" :withModal='true'></SubNavBar>
    <div class="mt-3xl">
      <div class="snmk-container">
        <div class="snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 bold-700 title-1 dark-black-font">
          {{ specsData.title }}
        </div>
      </div>
      <div class="snmk-container part-one pb-3xl">
        <div class="snmk-col-offset-1 snmk-col-l-offset-1 quality-part snmk-col-4 snmk-col-l-4 snmk-col-m-3 snmk-col-s-4">
          <div class="label-part">
            <div v-for="(quality, index) of specsData.partOne.qualityList" :key="index" class="quality-list">
              <div class="quality-title" @click="updateActiveQualityType(index)">
                <span class="title-3 bold-700" :class="{'light-grey-font': activeQualityType !== index}">{{ quality.title }}</span>
                <span>
                  <img :src="activeQualityType === index ? 'https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/specs/close.svg' : 'https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/specs/open.svg'" alt='' />
                </span>
              </div>
              <div :class="{'quality-params': true, 'quality-params-hidden': activeQualityType !== index}" v-for="param of quality.paramsList" :key="param.label" :style="[{height: activeQualityType === index ? 'auto' : 0}]">
                <span class="param-label">{{ param.label }}</span>
                <span class="param-value">{{ param.value }}</span>
              </div>
              <div class="quality-image w-100" v-if="isMobile && activeQualityType === index">
                <div class="w-100 display-flex text-center font-bw-3">
                  <div class="w-50 quality-img-text">{{specsData.partOne.demo1Text}}</div>
                  <div class="w-50 quality-img-text">{{specsData.partOne.demo2Text}}</div>
                </div>
                <img :src="specsData.partOne.qualityList[activeQualityType].boatImg" alt='' class="phone-quality-img" />
                <img :src="specsData.partOne.qualityList[activeQualityType].krsImg" alt='' class="phone-quality-img" />
              </div>
            </div>
          </div>
        </div>
        <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1" v-if="!isMobile">
          <div class="quality-img light-background pos-relative">
            <img :src="specsData.partOne.qualityList[activeQualityType].boatImg" alt='' />
            <div class="quality-img-text font-bw-1 font-2"><span>{{specsData.partOne.demo1Text}}</span></div>
          </div>
          <div class="quality-img dark-background pos-relative">
            <img :src="specsData.partOne.qualityList[activeQualityType].krsImg" alt='' />
            <div class="quality-img-text font-bw-1 font-2"><span>{{specsData.partOne.demo2Text}}</span></div>
          </div>
      </div>
      </div>
      <div class="snmk-container">
        <div class="general-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="general-part-title pr-l title-2 bold-700">
            {{specsData.generalData.title}}
          </div>
          <div class="general-part-params">
            <div class="params-item" v-for="item of specsData.generalData.paramsList" :key="item.label">
              <div class="params-item-label pr-l">{{item.label}}</div>
              <div class="params-item-value">
                <div v-for="(valueItem, index) of item.value" :key="index" :class="'params-item-value-label-' + (index + 1)">{{ valueItem }}</div>
                <img :src="item.imgSrc" v-if="item.imgSrc" alt="" />
                <div class="note-text font-bw-4" v-if="item.note">{{item.note}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="snmk-container">
        <div class="linear-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="linear-part-title pr-l title-3 bold-700">
            {{specsData.linearModuleData.title}}
          </div>
          <div class="linear-part-params">
            <div class="params-item" v-for="item of specsData.linearModuleData.paramsList" :key="item.label">
              <div class="params-item-label pr-l">{{item.label}}</div>
              <div class="params-item-value">
                <div v-for="(valueItem, index) of item.value" :key="index" :class="'params-item-value-label-' + (index + 1)">{{ valueItem }}</div>
                <img :src="item.imgSrc" v-if="item.imgSrc" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="snmk-container">
        <div class="controller-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="controller-part-title pr-l title-3 bold-700">
            {{specsData.controllerData.title}}
          </div>
          <div class="controller-part-params">
            <div class="params-item" v-for="item of specsData.controllerData.paramsList" :key="item.label">
              <div class="params-item-label pr-l">{{item.label}}</div>
              <div class="params-item-value">
                <div v-for="(valueItem, index) of item.value" :key="index" :class="'params-item-value-label-' + (index + 1)">{{ valueItem }}</div>
                <img :src="item.imgSrc" v-if="item.imgSrc" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="snmk-container">
        <div class="printing-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="printing-part-title pr-l title-3 bold-700">
            {{specsData.printingData.title}}
          </div>
          <div class="printing-part-params">
            <div class="params-item" v-for="item of specsData.printingData.paramsList" :key="item.label">
              <div class="params-item-label pr-l">{{item.label}}</div>
              <div class="params-item-value">
                <div v-for="(valueItem, index) of item.value" :key="index" :class="'params-item-value-label-' + (index + 1)">{{ valueItem }}</div>
                <img :src="item.imgSrc" v-if="item.imgSrc" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="snmk-container">
        <div class="laser-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="laser-part-title pr-l title-3 bold-700">
            {{specsData.laserData.title}}
          </div>
          <div class="laser-part-params">
            <div class="params-item" v-for="item of specsData.laserData.paramsList" :key="item.label">
              <div class="params-item-label pr-l">{{item.label}}</div>
              <div class="params-item-value">
                <div v-for="(valueItem, index) of item.value" :key="index" :class="'params-item-value-label-' + (index + 1)">{{ valueItem }}</div>
                <img :src="item.imgSrc" v-if="item.imgSrc" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="snmk-container mb-3xl">
        <div class="cnc-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="cnc-part-title pr-l title-3 bold-700">
            {{specsData.cncData.title}}
          </div>
          <div class="cnc-part-params">
            <div class="params-item" v-for="item of specsData.cncData.paramsList" :key="item.label">
              <div class="params-item-label pr-l">{{item.label}}</div>
              <div class="params-item-value">
                <div v-for="(valueItem, index) of item.value" :key="index" :class="'params-item-value-label-' + (index + 1)">{{ valueItem }}</div>
                <img :src="item.imgSrc" v-if="item.imgSrc" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notes">
        <div class="snmk-container">
          <div class="note-title snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1 vertical-center">Notes:</div>
        </div>
        <div class="snmk-container">
          <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1 vertical-center"
            v-for="note of specsData.note.label" :key="note"
          >
            <div class="note"> {{note}} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import head from '@@/resources/data/head'
import SubNavBar from '@/components/SubNavBar.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
import { ISubNavMenu } from '~/components/SubNavBar/type';

useHead(head.artisanSpecs)
const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const subNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').artisan)
const specsData = computed(() => i18n.tm('artisanData').specsData)
const activeQualityType = ref(0)

const updateActiveQualityType = (index: number) => activeQualityType.value = index

</script>

<style scoped lang="scss">
.bold-700 {
  font-weight: 700;
}
.dark-black-font {
  color: #1F1F1F;
}
.margin-top-100 {
  margin-top: 100px;
}
.light-background {
  background: #F0F0F0 ;
}
.dark-background {
  background: #d9d9d9;
}
.part-one {
  margin-top: 38px;
}
.light-grey-font {
  color: #999999;
}
.quality-part {
  .quality-list {
    padding: 30px 0 0;
    border-bottom: 1px solid #E0E0E0;
    .quality-title {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .quality-params {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      overflow: hidden;
    }
    .quality-params:last-child {
      margin-bottom: 30px;
    }
    .quality-params-hidden {
      margin-top: 0;
    }
    .quality-params-hidden:last-child {
      margin-bottom: 0;
    }
  }
  .quality-image {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0 24px;
    .phone-quality-img {
      height: 31vw;
      width: 50%;
    }
    .phone-quality-img:nth-child(2) {
      border-radius: 12px 0 0 12px;
    }
    .phone-quality-img:last-child {
      border-radius: 0 12px 12px 0;
    }
  }
}
.quality-img {
  height: 22.75vw;
  max-height: 370px;
  max-height: 370px;
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
    height: 100%;
  }

  &:first-child {
    border-radius: 12px 12px 0 0;
  }
  &:last-child {
    border-radius: 0 0 12px 12px;
  }
}
.note-text {
  font-size: 12px;
  line-height: 20px;
}

@include no-mobile {
  .quality-img-text {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
}
.general-part, .linear-part, .controller-part, .printing-part, .laser-part, .cnc-part {
  display: flex;
  border-top: 1px solid #e0e0e0;
  padding-top: 16px;
  &-title {
    width: 20%;
    color: #1F1F1F;
  }
  .general-part-params, .linear-part-params, .controller-part-params, .printing-part-params, .laser-part-params, .cnc-part-params  {
    width: 80%;
    .params-item {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
      padding: 26px 0;
      &:first-child {
        padding-top: 0px;
      }
      &-label {
        width: 25%;
      }
      &-value {
        width: 75%;
        color: #5C5C5C;
        div {
          padding-top: 16px;
        }
        img {
          width: 70%;
        }
        .params-item-value-label-1 {
          padding-top: 0px !important;
        }
      }
    }
    .params-item:last-child {
      border-bottom: none;
    }
  }
}
.general-part {
  padding-top: 40px;
}
@media (max-width: 768px) {
  .quality-img-text {
    font-size: 10px;
    line-height: 20px;
  }
  .general-part, .linear-part, .controller-part, .printing-part, .laser-part, .cnc-part {
    flex-direction: column;
    &-title {
      width: 100%;
      margin-bottom: 34px;
    }
    &-params {
      width: 100% !important;
      .params-item {
        flex-direction: column;
        border-bottom: none !important;
        width: 100%;
        padding-bottom: 0px !important;
        &-label {
          width: 100% !important;
          font-weight: bold;
          margin-bottom: 8px;
        }
        &-value {
          width: 100% !important;
          div {
            font-size: 14px;
            font-weight: 400;
          }
          img {
            width: 100% !important;
          }
        }
      }
      .params-item:last-child {
        padding-bottom: 26px !important;
      }
    }
  }
  .general-part {
    border-top: none;
    padding-top: 0px;
  }
  .note-text {
    font-size: 10px;
    line-height: 20px;
  }
}
.notes {
  padding-top: 5.2vw;
  padding-bottom: 5.2vw;
  z-index: 98;
  background-color: #F5F5F5;

  .note, .note-title{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    // color: $black-white-1;
    color: #5C5C5C;
    margin-bottom: 8px;
    // text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  }
}
</style>
