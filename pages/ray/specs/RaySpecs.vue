<template>
  <div class='pt-m'>
    <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar"></SubNavBar>
    <div class="mt-3xl">
      <template v-if='!isMobile'>
        <SpecListPC :dataSrc='specsData.specs.slice(0,1)'></SpecListPC>
        <div class="snmk-container">
          <div class="printing-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
            <div class="printing-part-title pr-l title-3 bold-700"></div>
            <div class="printing-part-params">
              <div class="params-item my-3xl">
                <div class="params-item-label"> </div>
                  <div class="params-item-title" v-for='(title, index) of specsData.paramsTitles' :key='index'>
                    {{title}}
                  </div>
              </div>
            </div>
          </div>
        </div>
        <SpecListPC :dataSrc='specsData.specs.slice(1)'></SpecListPC>
      </template>
      <template v-else>
        <div v-for='(type, typeIndex) of specsData.paramsTitles' :key='typeIndex'>
          <div class="snmk-mx params-title">
            {{type}}
          </div>
          <div class="snmk-container" v-for='(spec, index) of specsData.specs' :key='index'>
            <div class="printing-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
              <div class="printing-part-title pr-l title-3 bold-700">
                {{spec.title}}
              </div>
              <div class="printing-part-params">
                <div class="params-item" v-for="item of spec.paramsList" :key="item.label">
                  <div class="params-item-label pr-l">{{item.label}}</div>
                  <div class="params-item-value" :style="{'flex-direction': item.imgSrc ? 'column' : ''}">
                    <!-- {{typeIndex}} {{item.params[typeIndex].value}} -->
                    <div v-for="(valueItem, index) of item.params[typeIndex].value" :key="index" :class="'params-item-value-label-' + (index + 1)" v-html='valueItem'> </div>
                    <div class="">
                      <img :src="item.imgSrc" v-if="item.imgSrc" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
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
// import SecondaryNavBar from '@/components/SecondaryNavBarArtisan.vue/'
import SubNavBar from '@@/components/SubNavBar.vue'
import SpecListPC from './SpecListPC.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())
useHead(head.raySpecs)
const i18n = useI18n()
const ray = computed<any>(() => i18n.tm('ray'))
const specsData = computed(() => ray.value.specsData)
const subNavBar = computed(() => {
  const data = i18n.tm('secondarynavbarData').ray
  data.mainTitle = isMobile.value ? data.mobMainTitle : data.mainTitle
  return data
})

const activeQualityType = ref(0)
const updateActiveQualityType = (index: number) => activeQualityType.value = index
</script>


<style scoped lang="scss">
@import '../theme.scss';
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

.general-part, .linear-part, .controller-part, .printing-part, .laser-part, .cnc-part {
  display: flex;
  // border-top: 1px solid #e0e0e0;
  padding-top: 16px;
  &-title {
    width: 20%;
    color: #1F1F1F;
  }
  .general-part-params, .linear-part-params, .controller-part-params, .printing-part-params, .laser-part-params, .cnc-part-params  {
    width: 80%;
  }
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
    &-title {
      width: 75%;
      color: var(--unnamed, #1F1F1F);
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 133.333% */
      letter-spacing: -0.24px;
      margin-right: 22px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .params-item:last-child {
    border-bottom: none;
  }
}
.general-part {
  padding-top: 40px;
}
@include no-mobile {
  .printing-part .printing-part-params .params-item-label {
    flex: 0 0 auto;
    width: 250px;
  }
  .quality-img-text {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
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
        // border-bottom: none !important;
        width: 100%;
        padding-block: 24px;

        &-label {
          width: 40%;
          font-weight: bold;
          // margin-bottom: 8px;
          padding-right: 0;
          margin-right: 24px;

          color: var(--unnamed, #5C5C5C);
          font-family: Roboto;
          font-size: 10px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px; /* 120% */
        }
        &-value, &-value-label-1 {
          width: 100%;
          color: var(--unnamed, #1F1F1F);
          font-family: Roboto;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 16px; /* 133.333% */
          margin-right: 0;
          img {
            width: 100% !important;
          }
        }
        &-value {
          display: flex;
          align-items: center;
        }
        &-value-label-1 {
          display: block;
        }
      }
      .params-item:last-child {
        padding-bottom: 26px;
        border-bottom: 1px solid #e0e0e0;
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

  .params-title {
    color: var(--unnamed, #1F1F1F);
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 114.286% */
    letter-spacing: -0.24px;

    padding-top: 60px;
    padding-bottom: 30px;
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
