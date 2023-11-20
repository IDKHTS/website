<template>
  <div id="home-pre-heat" class="pre-heat" :style="{
  'background-image': `url('${fullViewImg}')`,
  'background-size': `${fullViewImgWidth}px ${fullViewImgHeight }px`,
  'background-repeat': 'no-repeat',
  'background-position': 'center'
  }">
    <div class="text-img-layer" >
      <div class="snmk-container">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 text-container" :class="{'text-container-mb': device === 'phone'}">
          <div class="big-title-1 bold-700" v-html="bannerData.title" style="margin-top: 7.5vw;"></div><!--  bold-family  -->
          <div class="title-3 mt-s font-bw-2" v-html="bannerData.title2"></div>
          <div v-if="bannerData.date" class="text-date title-4 bold-700" v-html="bannerData.date"></div>
          <div v-if="bannerData.price" class="title-3 artisan-desc-wrapper bold-700 mt-l">
            <!-- <span class="artisan-desc">{{bannerData.desc}}</span> -->
            <div :class="{'mt-l': device === 'phone'}">
              <span><del>{{ bannerData.price }}</del>&nbsp;<span class="red-font">{{ bannerData.price2 }}</span>&nbsp;<span>{{ bannerData.tip1 }}</span>&nbsp;&nbsp;<span class="font-bw-4">|</span>&nbsp;&nbsp; <span>{{ bannerData.shipping }}</span></span>
            </div>
          </div>
          <div class="mt-2xl horizontal-center w-100" >
            <Navigate class="snmk-primary-btn" :aLink="bannerData.preorder.link" :route="bannerData.preorder.route" target="_blank" > <!-- @click="onShopClick()"  -->
              {{bannerData.preorder.text}}
            </Navigate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MailchimpSubscribe from '@@/components/MailchimpSubscribe'
import configuration from '@@/resources/data/configuration'
import Navigate from '@@/components/Navigate'
import bgImgHandle from '@@/mixins/bgImgHandle'


export default {
  props: {
    isHeaderShow: {
      default: true
    },
    device: {
      default: 'desktop'
    },
    bannerData: {
      default: function () {
        return {}
      }
    }
  },
  mixins: [bgImgHandle],
  components: {
    MailchimpSubscribe, Navigate
  },
  computed: {
    isMobile () {
      return this.device === configuration.Mobile
    },
    isPC () {
      return this.device === configuration.PC
    },
    fullViewImg () {
      return this.isMobile ? this.bannerData.bgImgMobile : (this.isPC ? this.bannerData.bgImgSrc : this.bannerData.bgImgPad)
    }
  },
  methods: {
    onShopClick () {
      this.$emit('onShopClick')
    }
  }
}
</script>

<style scoped lang="scss">


.bold-family {
  font-family:  San Francisco Pro, PingFangSC-Medium, sans-serif, Noto Sans Han, Roboto;
  font-weight: 700;
}

.pre-heat {
  min-height: 100vh;
  position: relative;
  z-index: 98;
  background: #eeeeee;

  .artisan-desc-wrapper {
    .red-font {
      color: #E12E42;
    }
  }
}
.text-img-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  .snmk-container{
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    color:  $black_white_1;
  }
  .text-container {
    text-align: center;
    .text-date {
      margin-top: 8px;
    }
  }
  .funs-container {
    margin-bottom: 5.208vw;
    text-align: center;
  }
  .funs-item {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    position: relative;

    &:last-child {
      border-right: unset;
      hr { display: none;}
    }

    .hr-container {
      transform: translate(50%, -50%);
      position: absolute;
      right: 0px;
      top: 50%;
    }
    hr {
      width: 60px;
      transform: rotate(90deg);
      height: 1px;
    }


    .funcs-wrapper {
      width: 100%;
    }
  }

  @media (min-width: $breakPoint_l) and (max-height: 800px) {
    .big-title-1 {
      font-size: 64px;
      line-height: 72px;
    }
  }
}


@include mobile {
  .success-img {
    width: 80px;
  }
  .pre-heat {
    min-height: calc(100vh - 200px);
  }
  .big-title-1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.24px;
  }
  .title-3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: -0.24px;
  }
}

.bold-700 {
  font-weight: 700;
}
.date-tag {
  font-weight: 700;
  color: white;
  background-color: #F5CE00;
}
.subscribe-btn {
  margin-bottom: 2.916vw;
  &::v-deep .parent{
    max-width: 523px;
  }
  &::v-deep .input-wrapper {
    background-color: rgb(160, 160, 160);
    &:focus-within {
      background: #ffffff;
    }
    input {
      background-color: transparent ;
      color: white;
      &::-webkit-input-placeholder {
        color: white;
        font-weight: 400;
      }
    }
    input:focus {
      background-color: #fff;
      color: #000000;
    }
  }
  &::v-deep .submit-wrapper input {
    background-color: #F15A24;
  }
}
.snmk-primary-btn {
  min-width: 240px;
  font-weight: 700;
  padding-top: 18px;
  padding-bottom: 18px;
  font-size: 18px;
  @include mobile {
    font-size: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  // background: linear-gradient(90deg, #FFCB13 0%, #FFA313 100%);
  // &:hover {
  //   background: linear-gradient(90deg, #FFCB13 0%, #FFA313 100%);
  // }
}
</style>
