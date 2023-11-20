import $ from '@/js/jquery-vendor.js'
// import { throttle } from 'lodash'


const scrollAnimationTime = 500


export default {
  name: 'scrollMagic',
  // props: {
  //   scrollAnimations: {
  //     default: function () {
  //       return []
  //     }
  //   }
  // },
  data () {
    return {
      canScrollWork: true,
      isScrolling: false
      // smEl: '' // define at component's data
    }
  },
  mounted () {
    this.canScrollWork && this.initScrollMagic()
  },
  beforeDestroy () {
    this.scrollmagicDestroy()
  },
  methods: {
    scrollFoucus (el) {
      $('html,body').animate({
        scrollTop: $(el).offset().top - ($(window).height() - $(el).outerHeight(true)) / 2
      }, scrollAnimationTime)
    },
    initScrollMagic () {
      const vue = this
      if (process.browser) {
        const ScrollMagic = require('scrollmagic')
        vue.controller = new ScrollMagic.Controller()

        const el = vue.smEl
        setTimeout(() => {
          if (!document.querySelector(el)) return
          const clientHeight = document.querySelector(el) && document.querySelector(el).clientHeight
          const offset = 100
          const preTriDuration = clientHeight / 2 - offset
          const nextTriDuration = clientHeight / 2 + offset
          const bottomTriDuration = clientHeight
          // const scrollNext = () => $('html,body').animate({ scrollTop: $(el).offset().top + clientHeight }, scrollAnimationTime, 'swing', () => (vue.isScrolling = false)) // throttle(() => $('html,body').animate({ scrollTop: $(el).offset().top + clientHeight }, scrollAnimationTime, 'swing', () => (vue.isScrolling = false)), 1000)
          // const scrollPre = () => $('html,body').animate({ scrollTop: $(el).offset().top - innerHeight }, scrollAnimationTime, 'swing', () => (vue.isScrolling = false)) // throttle(() => $('html,body').animate({ scrollTop: $(el).offset().top - innerHeight }, scrollAnimationTime, 'swing', () => (vue.isScrolling = false)), 1000)
          // const scrollCurr = () => $('html,body').animate({ scrollTop: $(el).offset().top }, scrollAnimationTime, 'swing', () => (vue.isScrolling = false)) // throttle(() => $('html,body').animate({ scrollTop: $(el).offset().top }, scrollAnimationTime, 'swing', () => (vue.isScrolling = false)), 1000)
          const scrollNext = () => {
            vue.scrollAnimations.push({
              el: el,
              scrollTop: $(el).offset().top + clientHeight,
              start: $(el).offset().top + nextTriDuration,
              end: $(el).offset().top + clientHeight + innerHeight
            })
          }
          const scrollPre = () => {
            vue.scrollAnimations.push({
              el: el,
              scrollTop: $(el).offset().top - innerHeight,
              start: $(el).offset().top - innerHeight,
              end: $(el).offset().top + preTriDuration
            })
          }
          const scrollCurr = () => {
            vue.scrollAnimations.push({ el: el, scrollTop: $(el).offset().top + (this.scrollOffsetTop || 0), start: $(el).offset().top, end: $(el).offset().top + innerHeight })
          }

          let direction, state
          vue.canScrollWork && new ScrollMagic.Scene({triggerElement: el, duration: preTriDuration})
            .addTo(vue.controller)
            // .addIndicators()
            .on('update', function (e) {
              direction = e.target.controller().info('scrollDirection')
            })
            .on('enter leave', function (e) {
              state = e.type === 'enter' ? 'inside' : 'outside'
              return state
            })
            .on('start', function (e) {
              if (direction === 'FORWARD') {
                scrollCurr()
              }
            })
            .on('end', function (e) {
              if (direction === 'REVERSE') {
                scrollPre()
              } else if (direction === 'FORWARD') {
              }
            })

          vue.canScrollWork && new ScrollMagic.Scene({triggerElement: el, duration: nextTriDuration})
            .addTo(vue.controller)
            // .addIndicators()
            .on('update', function (e) {
              direction = e.target.controller().info('scrollDirection')
            })
            .on('end', function (e) {
              if (direction === 'REVERSE') {
              } else if (direction === 'FORWARD') {
                scrollNext()
              }
            })
          vue.canScrollWork && new ScrollMagic.Scene({triggerElement: el, duration: bottomTriDuration})
            .addTo(vue.controller)
          // .addIndicators()
            .on('update', function (e) {
              direction = e.target.controller().info('scrollDirection')
            })
            .on('end', function (e) {
              if (direction === 'REVERSE') {
                scrollCurr()
              }
            })
        }, 800)
      }
    },
    scrollmagicDestroy () {
      if (this.isSMDestroy) return
      this.controller && this.controller.destroy()
      this.controller2 && this.controller2.destroy()
      this.controller3 && this.controller3.destroy()
      this.isSMDestroy = true
    }

  }
}
