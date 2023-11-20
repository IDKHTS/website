<template>
  <div class='ease-of-use'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class="page-title" v-html="dataSrc.title"></div>
        <div class="eou-display-list">
          <div class="eou-display" v-for="display of dataSrc.displayList" :key="display.title">
            <NuxtImg class="w-100" :src="display.imgSrc" :alt="display.title" loading='lazy' />
            <div class="display-title" v-html="display.title"></div>
            <div v-html="display.desc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const dataSrc = computed(() => ({
  title: `Ease of use.`,
  displayList: [
    {
      title: `Wi-Fi Connectivity`,
      desc: `With the Wi-Fi feature and the USB port, you can connect your machine to any configuration for your convenience. You can upload designs via Wi-Fi or USB flash drive and print with the touch of a button. In addition, you can update the firmware over Wi-Fi directly.`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_Wi-Fi-Connectivity.jpg`
      // imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT`
    },
    {
      title: `Power Loss Recovery`,
      desc: `You don't have to worry about power outages anymore. A350T/A250T can automatically detect power loss, and then resumes exactly where it left off. You can recover any project and get perfect results all the time.`,
      imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT/Pc_Power-Loss-Recovery.jpg`
      // imgMobSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/snapmakerAT`
    }
  ]
}))
</script>


<style lang='scss' scoped>
@import '../common.scss';
.ease-of-use {
  padding-block: 140px;
  @include mobile {
    padding-block: 40px 56px;
  }
}
.eou-display-list {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  @include mobile {
    flex-direction: column;
    margin-top: 0px;
    width: 100%;
  }
}
.eou-display {
  width: calc((100% - 24px)  / 2);

  .display-title {
    color: #1F1F1F;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 122.222% */
    margin-block: 20px;

    @include mobile {
      margin-bottom: 16px;
      text-align: center;
    }
  }
  .display-desc {
    color: var(--unnamed, #5C5C5C);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */

    @include mobile {
      text-align: center;
    }
  }

  @include mobile {
    width: 100%;
    img {
      margin-top: 56px;
    }
  }
}

</style>
