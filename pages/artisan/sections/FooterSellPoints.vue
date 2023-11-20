<template>
  <div style='background-color: black;'>
    <div class="snmk-container py-2xl text-center text-wrapper vertical-center">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class='fs-title page-title-color' v-html='isMobile ? dataSrc.title : "Snapmaker " + dataSrc.title'></div>
        <!-- <div class='fs-slogan' v-if='!isMobile' v-html='dataSrc.slogan'></div> -->
        <div class='fs-desc' v-html='dataSrc.desc'></div>
        <div class='snmk-primary-btn mt-l' v-html='dataSrc.btnText' @click='openShopModal'></div>
      </div>
      <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-offset-1">
        <div class='fs-img'>
          <NuxtImg :src="isMobile ? dataSrc.imgMobSrc : dataSrc.imgSrc" :alt="dataSrc.title" loading='lazy' />
        </div>
      </div>
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div v-if='!isMobile' class='fs-wrapper'>
          <div class='fs-tag' v-for='tag in dataSrc.sellPoints' :key='tag' v-html='tag'></div>
        </div>
        <div v-else  class='fs-wrapper'>
          <div v-for='(pair, index) of mobSellPoints' :key='index' class='fs-pair'>
            <div class='fs-tag' v-for='tag in pair' :key='tag' v-html='tag'></div>
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

const mobSellPoints = computed(() => {
  const sp = props.dataSrc.sellPoints
  return [
    [sp[0], sp[3]],
    [sp[1], sp[2]],
    [sp[4], sp[5]],
    [sp[6], sp[7]]
  ]
})

const emit = defineEmits(['openShopModal'])
const openShopModal = () => emit('openShopModal')
</script>

<style scoped lang='scss'>
@import '../theme.scss';

.fs-title {
  text-align: center;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px; /* 113.333% */
  letter-spacing: -0.24px;

  @include mobile {
    font-size: 36px;
    line-height: 44px;
  }
}
.fs-slogan {
  margin-top: 8px;

  color: var(--White, #FFF);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
}
.fs-desc {
  margin-top: 24px;

  color: var(--unnamed, #FFF);
  text-align: center;

  /* Heading/1920/Gilroy Bold-24 */
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.24px;

  @include mobile {
    font-size: 28px;
    line-height: 36px;
  }
}
.fs-img {
  line-height: 0;
  margin-block: 20px 40px;

  @include mobile {
    margin-top: 40px;
  }
}

.fs-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.fs-tag {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1px solid #FFF;

  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.24px;
  margin-right: 10px;
  margin-top: 10px;
  &:last-child {
    margin-right: 0;
  }

  @include mobile {
    // width: 50%;
    flex: 1 1 auto;
  }
}
.fs-pair {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}



</style>
