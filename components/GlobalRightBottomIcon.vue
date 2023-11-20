<template>
  <div class="global-right-bottom-icon-content" v-if="this.show">
    <div class="icon-container">
      <div class="close-icon" @click="close" />
      <!-- <a href="https://us.snapmaker.com/pages/snapmaker-black-friday-sale" target="_blank" class="pointer">
        <img :src='`https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/black_friday.png`' alt='' />
      </a> -->
      <router-link to="/event/if-i-have-a-snapmaker-ray">
        <img :src='`https://ditfjx9w4x3vl.cloudfront.net/assets/contest/if-i-have-snapmaker-ray/ray-contest-icon.png`' alt='' />
      </router-link>
      <!-- <router-link to="/win-the-1st-artisan">
        <img :src='`https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/black friday.png`' alt='' />
      </router-link> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'global-right-bottom-icon',
  props: {
    device: {
      default: 'desktop'
    },
    show: {
      default: true
    }
  },
  methods: {
    close () {
      this.show = false
    }
  }
}

</script>

<style scoped lang="scss">
.global-right-bottom-icon-content {
  position: fixed;
  bottom: 120px;
  right: 24px;
  max-width: 180px;
  max-height: 180px;
  min-width: 80px;
  min-height: 80px;
  width: 9.375vw;
  z-index: 100;

  .icon-container {
    position: relative;
    .close-icon {
      max-width: 24px;
      max-height: 24px;
      width: 1.25vw;
      height: 1.25vw;
      min-height: 14px;
      min-width: 14px;
      position: absolute;
      right: 0px;
      background-size: cover !important;
      background: url('https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/action-one/close-icon.png');
      &:hover {
        cursor: pointer;
        background: url('https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/action-one/close-icon-hover.png');
      }
    }
  }

}
.pointer {
  cursor: pointer;
}

</style>
