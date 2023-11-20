<template>
  <div class="mb-2xl" ref="main-content">
    <carousel-3d
      ref="carousel"
      :perspective="0"
      :space="carouselWidth*space"
      :display="3"
      :width="carouselWidth"
      :height="carouselHeight"
      @before-slide-change="onBeforeSlideChange"
      >
      <slide class="carousel-slide" v-for="(item,index) of carousels" :key="item.videoMp4Src" :index="index">
        <Navigate :aLink="link" :route="route">
          <template  v-if="$i18n.locale !== 'zh-CN'">
            <video  :ref="'carousel-video'+index" v-if="!isMobile"
              muted :poster="item.poster"
              loop webkit-playsinline
              playsinline
              x5-video-player-type="h5-page"
              @canplay="videoCanplay(item, index)"
            >
              <source :src="item.videoWebmSrc">
              <source :src="item.videonMp4Src">
            </video>
            <img v-else :src="item.imgSrcMob" alt="Snapmaker Luban">
          </template>
          <img v-else :src="item" alt="Snapmaker Luban">
        </Navigate>
        <!-- <a :href="link"  target="_blank"><img :src="item" alt="Snapmaker Luban"></a> -->
      </slide>
    </carousel-3d>

    <div class="carousel-pagination mt-xl">
      <div style="display: flex;">
        <div v-for="(item, index) of timeAry" :key="index" @click="onGoSlide(index)">
          <div class="slide-item pagination-bullet" :id="'slide-item-'+index"
          :class="{'pagination-bullet-active': index == selectedIndex}"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import configuration from '@@/resources/data/configuration'
// import Vue from 'vue'
import Navigate from '@@/components/Navigate.vue'
let Carousel3d, Slide
if (process.browser) {
  const carsousel = require('vue-carousel-3d')
  Carousel3d = carsousel.Carousel3d
  Slide = carsousel.Slide
}


export default {
  name: 'Map',
  props: {
    device: {
      default: 'desktop'
    },
    link: {
    },
    route: {
    },
    carousels: {
      default: function () { return {} }
    }
  },
  components: {
    Carousel3d,
    Navigate,
    Slide
  },
  data () {
    return {
      carsousel: {},
      timeAry: [3.7 * 1000, 3.8 * 1000, 3.2 * 1000],
      carouselWidth: 948,
      carouselHeight: 534,
      space: 0.47,
      selectedIndex: -1
    }
  },
  computed: {
    isMobile () {
      return this.device === configuration.Mobile
    }
  },
  beforeCreate () {
  },
  beforeMount () {
    const innerWidth = window.innerWidth
    if (this.device === configuration.PC) {
      this.carouselWidth = innerWidth * 0.49427
      this.carouselHeight = this.carouselWidth * (534 / 949)
    } else if (innerWidth > 1024 && innerWidth < 1100) {
      this.carouselWidth = innerWidth * 0.5882
      this.carouselHeight = this.carouselWidth * (534 / 949)
      this.space = 0.33
    } else if (this.device === configuration.Tablet) {
      this.carouselWidth = innerWidth * 0.6582
      this.carouselHeight = this.carouselWidth * (534 / 949)
      this.space = 0.45
    } else if (this.device === configuration.Mobile) {
      this.carouselWidth = innerWidth * 0.68133
      this.carouselHeight = this.carouselWidth * (534 / 949)
      this.space = 0.43
    }
  },
  mounted () {
    const transitions = this.timeAry.map((v, index) => `#slide-item-${index}::before {transition-duration: ${v}ms}`).join('\n')
    const style = document.createElement('style')
    const root = this.$refs['main-content']
    style.innerHTML = `.pagination-bullet-active::before {width: 100%}` + transitions
    this.carousel = this.$refs['carousel']
    root.insertBefore(style, root.firstChild)


    const intersectionObseverOption = {
      threshold: new Array(20).fill(1).map((v, i) => (i + 1) / 20)
      // rootMargin: '300px'
    }
    const observer = new IntersectionObserver((entries) => {
      if (this.isViewed) {
        observer.unobserve(root)
        observer.disconnect()
      }
      entries.forEach(entry => {
        if (entry.intersectionRatio < 0.5) {
          this.isViewed = false
        } else {
          this.isViewed = true
          this.startLoop(0)
          this.selectedIndex = 0
          this.videoPlay(this.carousels[this.selectedIndex].video)
        }
      })
    }, intersectionObseverOption)

    observer.observe(root)

    this.$once('hook:beforeDestroy', () => {
      observer.unobserve(root)
      observer.disconnect()
    })
  },
  methods: {
    videoCanplay (item, index) {
      const video = this.$refs[`carousel-video${index}`][0]
      item.video = video
    },
    startLoop (index) {
      clearTimeout(this.timeRef)
      const len = this.timeAry.length
      let nextIndex = 0
      if (index + 1 < len) {
        nextIndex = index + 1
      }
      this.timeRef = setTimeout(() => {
        this.carousel.goSlide(nextIndex)
      }, this.timeAry[index])
    },
    onGoSlide (index) {
      this.carousel.goSlide(index)
      this.startLoop(index)
    },
    onBeforeSlideChange (index) {
      this.videoStop(this.carousels[this.selectedIndex].video)
      this.startLoop(index)
      this.selectedIndex = index
      this.videoPlay(this.carousels[this.selectedIndex].video)
      this.$emit('onActiveIndexChange', index)
      // console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
    },
    videoPlay (video) {
      if (!video || typeof video.play !== 'function' || this.isMobile) return
      video.currentTime = 0
      video.play()
    },
    videoStop (video) {
      if (!video || typeof video.pause !== 'function' || this.isMobile) return
      video.pause()
    }
  }
}



</script>
<style lang="scss" scoped>

.carousel-pagination {
  display: flex;
  justify-content: center;

  .pagination-bullet  {
    background: $black_white_5;
  }
}
.carousel-slide {
  border-radius: 8px;
  border-width: 4px !important;
  border-color: $black_white_2 ;
}

</style>
