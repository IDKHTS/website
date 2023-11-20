<template>
  <div class="comparison-wrapper only-pc">
    <div class="" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
      <h1 class="line-blue comparison-title">{{ comparison.title }}</h1>
      <p class="comparison-desc">
        <template v-for="(desc, index) of comparison.description" :key="desc">
          <span v-if="index == 0">{{ desc }}<span class="footnote">[2]</span></span>
          <span v-else-if="index == 1">{{ desc }}<span class="footnote">[3]</span></span>
          <span v-else>{{ desc }}</span>
        </template>
      </p>
    </div>
    <div class="comparison-data-wrapper">
      <div class="left" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
        <div v-for="(item, idx) of comparison.comparisonData" :key="item.title" class="comparison-speed">
          <div>
            <span style="font-size: 1.406vw">{{ item.title }}</span>
            <span style="font-size: 0.9375vw">{{ item.material }}</span>
          </div>
          <div class="bar-10w">
            <div class="bar w-100"></div>
            <span class="speed-text">{{ item.$10wSpeed }}</span>
          </div>
          <div class="bar-1600mw">
            <div class="bar"></div>
            <span class="speed-text">
              {{ item.$1600mwSpeed }}
              <span v-if="idx == 1"> ( Two Passes )</span>
            </span>
          </div>
        </div>
      </div>
      <div class="right" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
        <div class="comparison-video-wrapper">
          <video ref="video1600mW" muted autoplay class="video" @ended="videoEnd(video1600mW)">
            <source src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/video/1.6W.mp4">您的浏览器不支持 video 标签。
          </video>
        </div>
        <div class="comparison-video-wrapper">
          <video ref="video10W" muted autoplay class="video" @ended="videoEnd(video10W)">
            <source src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/video/10W.mp4">您的浏览器不支持 video 标签。
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())

const i18n = useI18n()
const comparison = computed(() => i18n.tm('laserData').comparison)


const video10W = ref()
const video1600mW = ref()
const can10WPlay = ref(false)
const can1600mWPlay = ref(false)
const videoEnd = (type: string) => {
  return type === '10W' ? (can10WPlay.value = true) : (can1600mWPlay.value = true)
}

watch(can10WPlay, (newV) => {
  if (newV && can1600mWPlay.value) {
    can10WPlay.value = false
    can1600mWPlay.value = false
  }
})
watch(can1600mWPlay, (newV) => {
  if (newV && can10WPlay.value) {
    can10WPlay.value = false
    can1600mWPlay.value = false
  }
})

</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang="scss" scoped>
.comparison-wrapper {
  width: 100%;
  min-height: 75.104vw;
  padding-top: 6.25vw;
  background-image: url('https://ditfjx9w4x3vl.cloudfront.net/assets/laser/comparison/bg.jpg');
  background-position: center;
  background-size: 100% 100%;
  text-align: center;
}

.comparison-title {
  font-size: 2.5vw;
  line-height: 1.2;
  margin: 0 27.93vw;
  letter-spacing: 1px;
  margin-bottom: 47px;
}

.comparison-desc {
  margin: 0 17.20vw;
  margin-bottom: 6.25vw;
  letter-spacing: 1px;
  font-size: 1.09vw;
}

.comparison-data-wrapper {
  padding: 0 10.26vw 6.25vw;
  display: flex;
}

.left {
  width: 31.458vw;
  margin-right: 10.729vw;
  text-align: left;
}

.comparison-speed {
  margin-top: 3.541vw;

  &:first-child {
    margin-top: 0;
  }
}

.bar-10w,
.bar-1600mw {
  width: 100%;
  display: flex;
  font-size: 1vw;
  align-items: center;

  .bar {
    height: 8px;
    border-radius: 4px;
    background-color: red;
    position: relative;

    &::after {
      position: absolute;
      top: calc(100% + .5vw);
      font-size: 0.95vw;
      left: 0;
    }
  }

  .speed-text {
    margin-left: 1.666vw;
    flex: 0 0 146px;
    // width: 11vw;
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 1920px) {

  .bar-10w,
  .bar-1600mw {
    .speed-text {
      flex: 0 0 175px;
    }
  }
}

.bar-10w {
  margin-top: 1.77vw;

  .bar::after {
    content: '10W';
  }

}

.bar-1600mw {
  margin-top: 2.77vw;
  justify-content: space-between;

  .bar {
    background-color: white;

    &::after {
      content: '1.6W';
    }
  }

  .speed-text {
    color: #C8C8C8;
  }
}

.comparison-speed:first-child .bar-10w {
  .bar {
    background: linear-gradient(87deg, #FFFFFF, #EEB953, #F98323);
  }

  .speed-text {
    background: linear-gradient(87deg, #FFFFFF 0%, #EEB953 40.9423828125%, #F98323 89.0869140625%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.comparison-speed:nth-child(2) .bar-10w {
  .bar {
    background: linear-gradient(87deg, #FFFFFF, #53BEEE, #2374F9);
  }

  .speed-text {
    background: linear-gradient(87deg, #FFFFFF 0%, #53BEEE 40.9423828125%, #2374F9 89.0869140625%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.comparison-speed:nth-child(3) .bar-10w {
  .bar {
    background: linear-gradient(87deg, #FFFFFF, #8A53EE, #2323F9);
  }

  .speed-text {
    background: linear-gradient(87deg, #FFFFFF 0%, #8A53EE 40.9423828125%, #2323F9 89.0869140625%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.comparison-speed:first-child .bar-1600mw .bar {
  width: 16.515%;
}

.comparison-speed:nth-child(2) .bar-1600mw .bar {
  width: 8.371%;
}

.comparison-speed:nth-child(3) .bar-1600mw .bar {
  width: 16.515%;
}


.right {
  width: 37.239vw;
  display: flex;
}

.comparison-video-wrapper {
  width: calc(50% - 1.093vw);

  video {
    border-radius: 18px;
  }

  &:first-child {
    margin-right: 1.093vw;
  }

  &:last-child {
    margin-left: 1.093vw;
  }
}</style>
