<template>
  <div class="contact-us" v-bind="$attrs">
    <div class="contact-us-title font-1">{{contactUs.title}}</div>
    <div class="mt-l contact-way" v-for="contactWay of contactUs.contactWays" :key="contactWay.icon">
      <div style="flex: 0 0 44px;" class="vertical-center mr-m">
        <img style="width: 44px" :src="contactWay.icon" alt="">
      </div>
      <div style="flex: 1 1;">
        <div class="font-2" style="line-height: 24px" v-for="way of contactWay.ways" :key="way">{{way}}</div>
      </div>
    </div>
    <div class="mt-xl social-apps-icons-wrapper" >
      <div class="mr-m social-apps-icons" v-for="(icon,index) of contactUs.socialApps" :key="icon.link">
        <template v-if="icon.popSrc">
          <a v-show="icon.isShowPop" class="social-apps-icon-pop" :href="icon.link" :id="icon.traceID" target="_blank">
            <img style="width: 179px;height: 179px" :src="icon.popSrc" alt="">
          </a>
        </template>
        <a :href="icon.link" :id="icon.traceID" @mouseover="showPop(index)" @mouseout="closePop(index)" target="_blank">
          <img  style="width: 32px" :src="icon.img" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contactUs: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    newsLetter () {
      return this.contactUs.newsLetter
    }
  },
  methods: {
    showPop (index) {
      const curr = this.contactUs.socialApps[index]
      curr.isShowPop = true
      this.contactUs.socialApps[index] = curr
      // this.$set(this.contactUs.socialApps, index, curr)
    },
    closePop (index) {
      const curr = this.contactUs.socialApps[index]
      curr.isShowPop = false
      this.contactUs.socialApps[index] = curr
      // this.$set(this.contactUs.socialApps, index, curr)
    }
  }
}
</script>


<style lang="scss" scoped>
  .contact-us {
    .contact-us-title {
      color: white;
      font-weight: 500;
    }

    .newsletter-input {
      background-color: $black_white_2;
      font-size: 16px;
      line-height: 24px;
      padding: 0.4166vw 1.82vw 0.4166vw 1vw;
      border: none;
      color: white;

    }
    .newsletter-btn {
      background-color: #0C63E2;
      color: #FBFFFF;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      padding: 0.4166vw 0.832vw;
      border: none;
    }

    .contact-way {
      display: flex;
    }

  }

  .social-apps-icons-wrapper {
    display: flex;
  }
  .social-apps-icons {
    position: relative;
    display: flex;
    align-items: center;

    img {
      max-width: unset;
    }
  }
  .social-apps-icon {
    position: relative;
  }
  .social-apps-icon-pop {
    position: absolute;
    transform: translateX(-100%);
    bottom: 0;
    left: -20px;
    line-height: 0;
    box-shadow: 0 0 10px #999;
    border-radius: 4px;

  }
  .social-apps-icons:last-child .social-apps-icon-pop {
    transform: unset;
    left: calc(100% + 20px);

  }
  .social-apps-icons::v-deep a {
    display: block;
    line-height: 0;
  }



  // mobile
  @media (max-width: $breakPoint_m) {
    .social-apps-icons-wrapper {
      display: flex;
      justify-content: center;
    }
    .social-apps-icon-pop {
      bottom: calc(100% + 8px) ;
      left: -48px;
      transform: unset;
    }
  }
</style>
