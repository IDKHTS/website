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
      <slide class="carousel-slide" v-for="(item,index) of carousels" :key="item" :index="index">
        <Navigate :aLink="link" :route="route">
          <img :src="item" alt="Snapmaker Luban">
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
      default: '/'
    },
    route: {
      default: '/'
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
      timeAry: [4.5 * 1000, 4.5 * 1000, 4.5 * 1000],
      carouselWidth: 948,
      carouselHeight: 534,
      space: 0.47,
      selectedIndex: 0
    }
  },
  computed: {
    options () {
      return {}
    }
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
      this.space = 0.35
    }
  },
  mounted () {
    const transitions = this.timeAry.map((v, index) => `#slide-item-${index}::before {transition-duration: ${v}ms}`).join('\n')
    const style = document.createElement('style')
    const root = this.$refs['main-content']
    style.innerHTML = `.pagination-bullet-active::before {width: 100%}` + transitions
    this.carousel = this.$refs['carousel']
    root.insertBefore(style, root.firstChild)

    this.startLoop(0)
  },
  methods: {
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
      this.startLoop(index)
      this.selectedIndex = index
      this.$emit('onActiveIndexChange', index)
      // console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
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
