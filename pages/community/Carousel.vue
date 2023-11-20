<template>
  <div>
    <SwiperActiveProgress
      ref="swiper"
      @onReady="swiperInited"
      :id="'community'+_uid"
      :options="swiperOptions"
      class="video-tutorials-content"
      :style="{height: slideHeight+'px'}"
    >
      <div class="swiper-slide"  v-for="(community, index) of dataSource" :key="community.mainTitle" @mouseover="hoverIndex=index" @mouseleave="hoverIndex=-1">
        <div class="community" @click="()=>{}">
          <div style="position: relative; line-height: 0">
            <img style="width: 100%" :src="community.imgSrc" alt="">
            <button v-if="activeIndex == index" :class="{'community-btn-hover': hoverIndex === index}"  class="community-btn snmk-primary-btn font-2 only-pc active-show" @click="routeTo(community)">
              Learn More
            </button>
          </div>
          <!-- v-if="isMobile" -->
          <template >
            <div class="community-title bold mb-xs active-show text-center" style="color: black">{{community.mainTitle}}</div>
            <div class="font-bw-3 font-2 active-show-box text-center community-abstract">{{community.abstract}}</div>
            <div class="font-bw-3 font-2 active-show text-center">
              <Navigate
                :aLink="community.link"
                :route="community.route"
                target="_blank"
                :style="btnStyle(community)"
                class="snmk-btn font-3 text-center bold-500 community-date mt-l"
                >
                {{dateFormat(community.date)}}
              </Navigate>
            </div>
          </template>
        </div>
      </div>
    </SwiperActiveProgress>
  </div>
</template>

<script>
import Navigate from '@@/components/Navigate.vue'
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import Modal from '@@/components/VideoModal'
import configuration from '@@/resources/data/configuration'
import { calcChildsHeight } from '@@/resources/js/calcHeight'
// import $ from '@/js/jquery-vendor.js'


export default {
  props: {
    device: {
      default: 'desktop'
    },
    intrinsicAspectRatio: {
      default: 533 / 960
    },
    heightestIndex: {
      default: 0
    },
    needFormat: {
      default: false
    },
    dataSource: {
      default: function () {
        return { }
      }
    }
  },
  components: {
    Navigate,
    Modal,
    SwiperActiveProgress
  },
  data: function () {
    return {
      isShowModal: false,
      activeIndex: 0,
      swiperOptions: {},
      slideWidth: 0,
      slideHeight: null,

      swiper: {},
      hoverIndex: -1
    }
  },
  computed: {
    isMobile () {
      return this.device === configuration.Mobile
    }
  },
  beforeMount () {
    const vue = this
    this.swiperOptions = {
      timeAry: new Array(this.dataSource.length).fill(4.5 * 1000), // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
      slidesPerView: this.isMobile ? 1.5 : 2,
      spaceBetween: this.isMobile ? 16 : 24,
      // watchSlidesProgress: true,
      speed: 1000,
      centeredSlides: true,
      updateOnImagesReady: true,
      // loop: true,
      pagination: {
        clickable: false,
        renderBullet: function (index, className) {
          const swiperComp = vue.$refs.swiper
          // console.log(vue.$refs, swiperComp)
          let paginationItem = `
          <div id="slide-item${swiperComp._uid}-${index}" class="${className}"></div>
          `
          if (index === 0) {
            paginationItem = `<div class="iconfont pagination-nav-pre pre-${vue._uid}" >&#xe743;</div>` + paginationItem
          }
          if (index === vue.dataSource.length - 1) {
            paginationItem = paginationItem + `<div class="iconfont pagination-nav-next next-${vue._uid}">&#xe743;</div>`
          }
          return paginationItem
        }
      },

      on: {
        slideChange () {
          vue.activeIndex = this.realIndex
        }
      }
    }
  },
  mounted () {
    const img = new Image()
    img.src = this.dataSource[0].imgSrc
    const testPCImg = () => {
      let normalSlideImgHeight = (this.slideWidth * 0.5 - 6) * this.intrinsicAspectRatio
      document.documentElement.style.setProperty('--normalSlideImgHeight', `${normalSlideImgHeight}px`)
      const ref = setInterval(() => this.getSlideHeight(60), 200)
      setTimeout(() => {
        clearInterval(ref)
      }, 2000)
    }
    const testMobilImg = () => {
      let normalSlideImgHeight = this.slideWidth * this.intrinsicAspectRatio
      document.documentElement.style.setProperty('--normalSlideImgHeight', `${normalSlideImgHeight}px`)
      const ref = setInterval(() => this.getSlideHeight(60), 200)
      setTimeout(() => {
        clearInterval(ref)
      }, 2000)
    }
    img.onload = this.isMobile ? testMobilImg() : testPCImg()
  },
  methods: {
    hexToRgbA (hex) {
      let c
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('')
        if (c.length === 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]]
        }
        c = '0x' + c.join('')
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.4)'
      }
      return hex
    },
    isAlive (item) {
      let isAlive = false
      if (typeof item.isAlive === 'undefined') {
        const now = new Date()
        isAlive = now >= item.start && now <= item.end
      } else {
        isAlive = item.isAlive
      }
      return isAlive
    },
    btnStyle (dataSource) {
      return this.isAlive(dataSource) ? {borderColor: this.hexToRgbA(dataSource.themeColor || '#0C63E2'), color: dataSource.themeColor || '#0C63E2'} : {
        borderColor: `rgba(214, 214, 214, 0.4)`, color: `rgba(153, 153, 153, 1)`
      }
    },
    swiperInited (swiper) {
      this.swiper = swiper
      this.slideWidth = (this.isMobile ? this.swiper.width * (2 / 3) : this.swiper.width / 2 - 12)
      // console.log(swiper.width)

      setTimeout(() => {
        const pre = document.querySelector(`.pre-${this._uid}`)
        const next = document.querySelector(`.next-${this._uid}`)
        pre && pre.addEventListener('click', () => {
          this.swiper.slidePrev()
        })
        next && next.addEventListener('click', () => {
          this.swiper.slideNext()
        })
        for (let i = 0; i < this.dataSource.length; i++) {
          const bullet = document.querySelector(`#slide-item${this.$refs.swiper._uid}-${i}`)
          bullet && bullet.addEventListener('click', () => {
            this.swiper.slideTo(i)
          })
        }
      })
    },
    getSlideHeight (offset) {
      const slides = document.querySelectorAll('.swiper-slide')
      this.slideHeight = calcChildsHeight(slides[this.activeIndex]) + offset
    },
    dateFormat (date) {
      if (!this.needFormat) return date
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
      const formatedDate = new Date(date).toLocaleDateString('en-US', options)
      return formatedDate
    },
    routeTo (item) {
      if (!item || !process.browser) return
      if (item.link) {
        window.open(item.link)
      } else if (item.route) {
        this.$router.push(item.route)
      }
    }
  }

}
</script>


<style lang="scss" scoped>

.video-tutorials-content {
  // padding-bottom: 130px;

  // height: calc(31.435vw + 130px);

  &::v-deep .swiper-pagination {
    text-align: left;
    display: flex;
    align-items: center;
    height: 10px;
    color: $black-white-5;
    bottom: 0;

    .pagination-nav-pre, .pagination-nav-next {
      font-family: "iconfont" !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: $black;
      }
    }
    .pagination-nav-pre {
      content: "\e743";
      transform: rotate(-90deg);
      margin-right: 13px;
    }
    .pagination-nav-next {
      content: "\e743";
      transform: rotate(90deg);
      margin-left: 13px;
    }

    .pagination-bullet::before {
      background: $blue;
    }


  }
  &::v-deep .swiper-pagination  {
    .pagination-bullet, .pagination-bullet-active {
      background-color: $black-white-5;
    }
    .pagination-bullet-active {
      width: 44px;
    }
  }
}
.swiper-wrapper {
  display: flex;
  align-items: flex-start;
}
.swiper-slide-prev {
  .community {
    display: block;
    float: right;
  }
}
.swiper-slide-active {
  position: relative;
  // display: flex;
  justify-content: center;

  .community {
    width: 100%
  }

  .active-show {
    display: block;
  }
  .active-show-box {
    display: -webkit-box;
  }
}
.swiper-slide-next {
  display: block;
  float: left;
}
.community {
  cursor: pointer;
  width: calc(50% - 12px);
  transition: all 0.5s ease-in-out;
  img {
    border-radius: 12px;
  }

  &:hover .community-btn{
    color: $link;
  }
}
.community-title {
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 8px;
}
.community-abstract {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 40px;
  display: -webkit-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
.community-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  min-width: 6em;
  transform: translateX(-50% );
  margin-bottom: 26px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px); /* Note: backdrop-filter has minimal browser support */
  border-radius: 8px;

  // bottom: 52px;
  // right: 44px;
  color: $black;

  // &:hover {
  //   color: $black;
  // }
}
.community-btn-hover {
  color: $blue;
}
.community-date {
  display: inline-block;
  border: 1px solid;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid $black-white-6;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;

  &::v-deep a {
    color: inherit;
  }
}

.active-show,.active-show-box {
  display: none;
}



@media (min-width: $breakPoint_m) and (max-width: $breakPoint_xl) {
  .video-tutorials-content{
    height: calc(33.435vw + 100px);
  }

}


@media (min-width: $breakPoint_m) {
  .video-tutorials-content{
    overflow: visible;
    &::v-deep .swiper-pagination {
      // top: calc(var(--normalSlideImgHeight) + 40px);
      // left: calc(75% + 16px);
      justify-content: center;
      left: 50%;
      transform: translateX(-50%);
      bottom: -18px;
    }
  }
}


@media (max-width: $breakPoint_m) {
  .community {
    width: 100%;
    img {
      border-radius: 4px;
    }
  }
  .community-title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    margin-top: 60px;
    margin-bottom: 6px;
  }
  .video-tutorials-content{
    height: auto;

    &::v-deep .swiper-pagination {
      // top: calc(var(--normalSlideImgHeight) + 25px);
      left: 50%;
      transform: translateX(-50%);
      justify-content: center;
      text-align: center;
      color: $black-white-5;
      // bottom: 80px
    }
  }


}


</style>
