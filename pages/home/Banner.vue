<template>
  <div class="pre-heat mb-xs">
    <div class="bg-mobile" :style="{'background-image': `url('${fullViewImg}')`,
      'background-size': `${fullViewImgWidth}px ${fullViewImgHeight}px`}">
    </div>
    <div class="text-img-layer" >
      <div class="snmk-container">
        <div v-if='banner.propagandaIcon || banner.propagandaIcon2' :class="{'horizontal-center': isMobile}"
        class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 line-h-0 display-flex">
          <img v-if='banner.propagandaIcon' class='propaganda-icon' :class="{'mr-m': !!banner.propagandaIcon2}" :src="banner.propagandaIcon" :alt="banner.title">
        </div>
        <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 c-white">
          <div v-if='isMobile' class='line-h-0'><img :src='banner.saleImgSrc' /></div>
          <div class="banner-title bold-700" v-html='banner.title'></div>
          <div class="banner-desc" :class='{"vertical-center": !isMobile}' >
            <span v-html='banner.desc'></span>
            <div v-if='!isMobile' class='line-h-0'><img :src='banner.saleImgSrc' /></div>
          </div>
          <template v-if='!isMobile'>
            <div
              v-for="btn of banner.btns"
                :key="btn.text"
              class="snmk-primary-btn c-white"
              @click="showModal"
            >
              <span>{{btn.text}}</span>
            </div>
            <!-- <Navigate
              class="snmk-primary-btn c-white"
              target="_blank"
              v-for="btn of banner.btns"
              :route="btn.route"
              :id="btn.traceID"
              :aLink="btn.link"
              :key="btn.text"
            >{{ btn.text }}
            </Navigate> -->
          </template>
        </div>
      </div>
      <template v-if='isMobile'>
        <div class='btns-container'>
          <div
            v-for="btn of banner.btns"
              :key="btn.text"
            class="snmk-primary-btn c-white"
            @click="showModal"
          >
            <span>{{btn.text}}</span>
          </div>
          <!-- <Navigate
            class="snmk-primary-btn c-white"
            target="_blank"
            v-for="btn of banner.btns"
            :route="btn.route"
            :id="btn.traceID"
            :aLink="btn.link"
            :key="btn.text"
          >{{ btn.text }}
          </Navigate> -->
        </div>
      </template>
    </div>
    <ShopModal v-show="isShowModal" :onCancel="onCancelModal" :dataSrc='shopDataSrc' />
  </div>
</template>

<script>
import configuration from '@@/resources/data/configuration'
import Navigate from '@@/components/Navigate'
import bgImgHandle from '@@/mixins/bgImgHandle'
import ShopModal from '@@/components/ShopModal.vue'

export default {
  mixins: [bgImgHandle],
  props: {
    device: {
      default: configuration.PC
    },
    banner: {
      default: function () { return {} }
    }
  },
  components: {
    Navigate, ShopModal
  },
  data: function () {
    return {
      isShowModal: false,
      scrollAnimations: [],
      smEl: '#home-pre-heat'
    }
  },
  computed: {
    isMobile () {
      return this.device === configuration.Mobile
    },
    isPC () {
      return this.device === configuration.PC
    },
    fullViewImg () {
      if (this.banner.bgImgSrc) {
        return this.isMobile ? this.banner.bgImgMobile : (this.isPC ? this.banner.bgImgSrc : this.banner.bgImgPad)
      }
      return this.isMobile ? this.banner.coverImgMobile : (this.isPC ? this.banner.coverImgSrc : this.banner.coverImgPad)
    },
    shopDataSrc () {
      return [
        {
          text: `US Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/us.png`,
          link: `https://us.snapmaker.com/pages/snapmaker-anniversary-sale?SkipCozyRedirect=yes`
        },
        {
          text: `EU Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/eu.png`,
          link: `https://eu.snapmaker.com/pages/snapmaker-anniversary-sale?SkipCozyRedirect=yes`
        },
        {
          text: `Global Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/others.png`,
          link: `https://shop.snapmaker.com/pages/snapmaker-anniversary-sale?SkipCozyRedirect=yes`
        }
      ]
    }
  },
  methods: {
    onCancelModal () {
      this.isShowModal = false
    },
    showModal () {
      this.isShowModal = true
    }
  }
}
</script>


<style scoped lang="scss">
.pre-heat {
  height: calc(100vh - 60px);
  position: relative;
  background-position: center center;

  &:nth-child(1) {
    height: calc(100vh - 60px);
  }
}
.bg-mobile {
  height: 100%;
  width: 100%;
  background-position: center center;
}
.text-img-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  // background-color: rgba(0,0,0,0.3);

  .snmk-container{
    left: 0;
    position: relative;
    top: 317px;
    top: 43%;
    transform: translateY(-50%);
    color: white;
  }
  .propaganda-icon {
    // width: 4.583vw;
    // width: 185px;
    margin-bottom: 16px;
    @include mobile {
      margin-bottom: 8px;
    }
  }

  .snmk-primary-btn {
    padding: 18px 82px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    text-align: center;
    letter-spacing: -0.24px;
    background: #00DFC3;
  }
}
.banner-title {
  font-style: normal;
  font-weight: 700;
  font-size: 84px;
  line-height: 92px;
  /* or 110% */

  letter-spacing: -0.24px;
}
.banner-desc {
  margin-top: 22px;
  margin-bottom: 65px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  letter-spacing: -0.24px;

  color: #FFFFFF;
  img {
    margin-left: 16px;
  }
}
// special modify ....
@include mobile{
  .pre-heat {
    // height: auto;
  }
  .banner-title {
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 36px;
    line-height: 44px;
  }
  .banner-desc {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
  }
  .text-img-layer .snmk-container{
    top: 56px;
    transform: unset;
  }
  .text-img-layer {
    text-align: center;
    .propaganda-icon {
      width: 162px;
    }
    .btns-container {
      width: 100%;
      position: absolute;
      bottom: 7%;
      left: 50%;
      transform: translateX(-50%);

      .snmk-primary-btn {
        padding: 16px 72px;
      }
    }
  }
}

</style>
