<template>
  <section class='bg-black'>
    <div class='comparison text-center secondary-title' v-html='dataSrcMap.title' ></div>
    <div class="snmk-container">
      <div v-if='!isMobile' class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 tab-options">
        <div
          v-for='(type, index) of dataSrc.types'
          :key='type.title'
          class='tab-option'
          v-html='type.title'
          @click='selectedOption(index)'
          :class="{'tab-option-active': selectedIndex === index}"
        ></div>
      </div>
      <template v-for='(type, typesIndex) of dataSrcMap.types'>
        <div v-if='isMobile' class="snmk-col-s-4 snmk-col-xs-4 tab-option" v-html='type.title' :key="'mobile' + type.title"></div>
        <div v-for='(comparison, comparisonIndex) of  type.comparisons'
          v-if='selectedIndex === typesIndex || isMobile'
          :key='dataSrcMap.title + typesIndex + comparisonIndex'
          class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4"
          :class="{'snmk-col-offset-1 snmk-col-l-offset-1': comparisonIndex == 0, 'snmk-fullscreen-w mob-order': isMobile}"
        >
          <MediaViewAdapter v-show='type.inited || isMobile'
            :style="{ 'width': isMobile ? '100vw' : '' }"
            :options="{
              isAutoHeigh: true,
              gifSrc: comparison.gifSrc,
              videoWebm: comparison.videoWebm,
              videoMp4: comparison.videoMp4,
              videoOriginalWidth: 1508,
              videoOriginalHeight: 786,
              alt: comparison.alt,
              mobAlt: comparison.mobAlt
            }"
            @videoLoad="onVideoLoad($event, typesIndex, comparisonIndex)"
          >
          <div :slot="'view-port-content'" class='time-speed' >8<span>×</span></div>
          </MediaViewAdapter>
          <div class='w-100' v-if='comparison.imgSrc' >
            <NuxtImg class='w-100' :src="comparison.imgSrc" alt="" loading='lazy' />
          </div>
          <div class='comparison-text' :class="{'snmk-mx': isMobile}">
            <div class='vertical-center'>
              <NuxtImg :src="comparison.imgSvgSrc" alt="" loading='lazy' />
            </div>
            <div class='comparison-hr'></div>
            <div class='comparison-params'>
              <div v-html='comparison.material'></div>
              <div v-html='comparison.thickness'></div>
              <div v-html='comparison.speed'></div>
              <div v-html='comparison.power'></div>
              <div v-html='comparison.other'></div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang='ts'>
import MediaViewAdapter from '@@/components/MediaViewAdapter.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

const canplay = ref(false)
const dataSrcMap = computed(() => {
  if (!props.dataSrc.types || !isMobile.value) return props.dataSrc
  props.dataSrc.types.forEach(type => (type.comparisons = type.comparisons.reverse()))
  return props.dataSrc
})
const currComparison = ref<any>(props.dataSrc.types[0])
const selectedIndex = ref(0)
currComparison.value.inited = true
const onVideoLoad = (video: HTMLVideoElement, typeIndex: number, comparisonIndex: number) => {
  if (
    !props.dataSrc ||
    !props.dataSrc.types ||
    !props.dataSrc.types[typeIndex] ||
    !props.dataSrc.types[typeIndex].comparisons ||
    !props.dataSrc.types[typeIndex].comparisons[comparisonIndex]
  ) return
  const comparison = props.dataSrc.types[typeIndex].comparisons[comparisonIndex]
  comparison.video = video
  if(!canplay.value) {
    canplay.value = true
    video.pause()
  } else {
    const [preComparison1, preComparison2] = currComparison.value.comparisons
    preComparison1.video.play()
    preComparison2.video.play()
  }
}
const selectedOption = (index: number) => {
  selectedIndex.value = index
  currComparison.value = props.dataSrc.types[index]
  currComparison.value && (currComparison.value.inited = true)
  canplay.value = false
}

onMounted(() => {
  selectedOption(selectedIndex.value)
})

</script>

<style scoped lang='scss'>
@import '../theme.scss';
.bg-black-2 {
  background-color:rgb(20, 20, 20) !important;
  // height: calc(100vh - 60px);
}
.comparison {
  padding-top: 10.277vh;
  padding-bottom: 6vh;

  @include mobile {
    padding-top: 8.277vh;
  }
}
.tab-options {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #767676 solid;
  padding-bottom: 20px;
  margin-bottom: 88px;
}
.tab-option {
  position: relative;
  width: 50%;
  color: #5C5C5C;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.24px;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -20px;
    background-color: transparent;
    height: 4px;
    // width: 100%;
    left: 50%;
    width: 1px;
    margin: 0 auto;
    border-radius: 4px;
    transition:  0.5s ease-in-out;
  }

  &-active {
    color: #00FFD1;
    font-weight: 500;
    border: 4px;

    &::after {
      background-color: #00FFD1;
      left: 0;
      width: 100%;
    }
  }

  @include mobile {
    width: 100%;
    color: #00FFD1;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 32px;
  }
}
.comparison-text {
  display: flex;
  justify-content: flex-start;
  // justify-content: space-between;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  margin-top: 33px;
  margin-bottom: 12.777vh;

  @include mobile {
    margin-bottom: 48px;
  }
}
.comparison-hr {
  width: 1px;
  background-color: #FFF;
  margin-inline: 24px;
}
.comparison-params {
  flex: 1 1 auto
}
.time-speed {
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 3.5416666666666666vw;
  font-weight: 700;
  color: #00FFD1;

  span {
    font-size: 1.875vw;
  }

  @include mobile {
    font-size: 32px;

    span {
      font-size: 18px;
    }
  }
}
</style>
