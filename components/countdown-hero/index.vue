<template>
    <a v-on='$listeners' :href="resources.link" :style="{'background-color': styleConfig.bgColor || '#0C63E2', 'background-image': styleConfig.bgImage}" target="_blank" >
      <div class="snmk-container" style="flex: 1 1 0;" >
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 count-down-part" >
            <div class="countdown-logo">
              <img :src="resources.logo" alt="countdown logo" />
              <!-- <span class="">Black Friday Sale</span> -->
            </div>
            <CountdownPlatform
              @countdownOver="countdownOver"
              class="countdown"
              :styleConfig="styleConfig"
              :device="device"
              :end="this.end"
            ></CountdownPlatform>
            <div class="count-down-text title-4 vertical-center horizontal-center" :style="{color: styleConfig.textColor || '#0C63E2'}">
              <template v-for="(item,index) of resources.description">
                <span
                  v-if="!item.route && !item.link"
                  v-html="item.text"
                  :key="item.text+index"
                  :style="item.style"
                ></span>
                <Navigate
                  v-else
                  class="countdown-btn snmk-link-btn"
                  :route="item.route"
                  :aLink="item.link"
                  :key="item.text+0+index"
                  :target="'_blank'"
                >{{item.text}}</Navigate>
              </template>
            </div>
        </div>
      </div>
    </a>
</template>

<script>
import CountdownPlatform from './Countdown.vue'
import Navigate from '@@/components/Navigate'
// import configuration from '@@/resources/data/configuration'
export default {
  name: 'Countdown',
  props: {
    end: {
      default () {
        return new Date()
      }
    },
    start: {
      default () {
        return new Date()
      }
    },
    device: {
      default: 'desktop'
    },
    resources: {
      type: Object,
      default () {
        return {}
      }
    },
    styleConfig: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    CountdownPlatform,
    Navigate
  },
  data () {
    return {
      timer: null,
      enableBanner: false
    }
  },
  methods: {
    countdownOver () {
      this.enableBanner = false
      // this.$emit('onEnableCountdownBanner', false)
    }
  }
}
</script>

<style scoped lang="scss">
.count-down-part {
  z-index: 90;
  position: relative;

  display: flex;
  justify-content: space-between;

  .font-gradient {
    background: linear-gradient(to right, #e08e00, #fff1c6, #e08e00);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}

.countdown-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 12px;

  img {
    // width: 193px;
    width: 16.09375vw;
    max-width: 172px;
    @include mobile {
      max-width: 172px;
    }
  }
}

.count-down-text {
  max-width: 355px;
  font-weight: 700;
}
.countdown-btn {
  display: inline-block;
  // color: $yellow;
  color: white;
  // text-decoration: underline;
  margin-left: 8px;

  &::after {
    // background-color: $yellow;
    width: 100%; // aways show underline
    background-color: white;
  }

  &:hover {
    // color: $yellow;
    color: white;
  }
}

@media (max-width: $breakPoint_m) {
  .count-down-part {
    flex-direction: column;
  }
  .countdown-logo {
    // margin-top: 12px;
    // margin-bottom: 16px;
    height: 68px;

    img {
      // width: 145px;
      width: 65.333vw;
    }
  }
  .count-down-text {
    margin-top: 24px;
    margin-bottom: 24px;
    width: 100%;
    text-align: center;
    max-width: unset;
  }

  .countdown-btn {
    &::after {
      width: 100%;
    }
  }
}
@media (min-width: $breakPoint_m) and (max-width: $breakPoint_l) {
  .count-down-text {
    max-width: 270px;
  }

}
</style>
