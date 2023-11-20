<template>
  <div class="countdown-text-banner">
    <div class="countdown-item title-2" v-for="(value, key) of timeUnits" :key="key" :style="{'background-color': styleConfig.countdownBgColor}">
      <div :id="'countdown-'+value+'-banner'" class="pt-2xs" :style="{color: styleConfig.countdownColor}"></div>
      <hr style="margin: 0" :style="{'background-color': styleConfig.hrColor}" />
      <div class="font-3" :style="{color: styleConfig.countdownTitleColor, fontWeight: 400}">{{key}}</div>
    </div>
  </div>
</template>

<script>
// import configuration from '@@/resources/data/configuration'

import countdownPlatform from '@/resources/js/countdownPlatform'
export default {
  name: 'Countdown',
  props: {
    device: {
      default: 'desktop'
    },
    end: {
      default () {
        return new Date()
      }
    },
    styleConfig: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      timer: null,
      timeUnits: {
        DAYS: 'day',
        HOURS: 'hour',
        MINUTES: 'minute',
        SECOND: 'second'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.timer = countdownPlatform(this.end, () => {
        this.$emit('countdownover')
      })
    })
  },
  beforeDestroy () {
    if (this.timer) {
      window.clearInterval(this.timer)
    }
  }
}

</script>

<style scoped lang="scss">
.countdown-text-banner {
  display: flex;
  justify-content: center;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;

  hr {
    height: 1px;
    opacity: 0.1;
  }
  .countdown-item {
    width: 72px;
    height: 68px;
    background-color: white;
    font-weight: bold;

    margin-left: 6px;

    border-radius: 7px;
    background-size: 100%;
    background-repeat: no-repeat;
    // font-family: Roboto-Bold;
    color: #e7163d;

    &:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: $breakPoint_m) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
  @media (max-width: $breakPoint_m) {
    .countdown-text-banner {
      margin-right: 3vw;
    }
    .countdown-item {
      width: 64px;
      height: 56px;
    }
  }
}
</style>
