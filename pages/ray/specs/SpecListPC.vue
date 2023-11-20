<template>
  <div>
    <div class="snmk-container" v-for='(spec, index) of dataSrc' :key='index'>
      <div class="printing-part snmk-col-l-10 snmk-col-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class="printing-part-title pr-l title-3 bold-700">
          {{spec.title}}
        </div>
        <div class="printing-part-params">
          <div class="params-item" v-for="item of spec.paramsList" :key="item.label">
            <div class="params-item-label pr-l">{{item.label}}</div>
            <template v-if='item.isOneLine'>
              <div class="params-item-value" v-for='(paramValue, index) of item.params.slice(0, 1)' :key='index'>
                <div v-for="(valueItem, index) of paramValue.value" :key="index" :class="'params-item-value-label-' + (index + 1)" v-html='valueItem'></div>
                <img style='margin-top: 48px;' :src="item.imgSrc" v-if="item.imgSrc && !isMobile" alt="" />
              </div>
            </template>
            <template v-else>
              <div class="params-item-value" v-for='(paramValue, index) of item.params' :key='index'>
                <div v-for="(valueItem, index) of paramValue.value" :key="index" :class="'params-item-value-label-' + (index + 1)" v-html='valueItem'> </div>
                <img style='margin-top: 48px;' :src="item.imgSrc" v-if="item.imgSrc && !isMobile" alt="" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())
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

@include no-mobile {
  .quality-img-text {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
}
.printing-part{
  display: flex;
  // border-top: 1px solid #e0e0e0;
  padding-top: 16px;
  &-title {
    width: 20%;
    color: #1F1F1F;
  }
  .printing-part-params  {
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
        margin-right: 22px;
        &:last-child {
          margin-right: 0;
        }
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
.printing-part .printing-part-params .params-item-label {
  flex: 0 0 auto;
  width: 250px;
  color: var(--unnamed, #1F1F1F);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.printing-part .printing-part-params .params-item-value {
  color: var(--unnamed, #5C5C5C);
  /* Normal/Gilroy Regular-14 */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
</style>
