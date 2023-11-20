// export default function getScrollMagic () {
//   if (process.browser) {
//     const ScrollMagic = require('scrollmagic')
//     const indicators = require('../../js/indicators')
//     const animationGsap = require('../../js/animation.gsap')
//     const { TweenMax, TimelineMax } = require('gsap')
//     indicators.default(ScrollMagic)
//     animationGsap.default(ScrollMagic, {version: '2.1.3'}, TweenMax, TimelineMax)
//     return ScrollMagic
//   }
//   return {}
// }

// import ScrollMagic from 'scrollmagic'
import AnimationGsap from './animation.gsap'
import GSAP from 'gsap'
import Indicators from './indicators'

interface IScrollMagic {
  Scene: ScrollMagic.Scene
  Controller: ScrollMagic.Controller
}

let ScrollMagic: IScrollMagic = { } as IScrollMagic
let TweenMax = {}
let TimelineMax = {}
;(async function () {
  if (process.browser) {
    ScrollMagic = await import('scrollmagic')
    // const indicators = require('./indicators')
    // const animationGsap = require('./animation.gsap')
    // const gsap = require('gsap')
    const gsap = GSAP
    const indicators = Indicators
    const animationGasp = AnimationGsap
    TimelineMax = gsap.core.Timeline
    TweenMax = gsap.core.Tween
    indicators(ScrollMagic)
    animationGasp(ScrollMagic, gsap.core.Tween, gsap.core.Timeline)
    // return ScrollMagic
  }

})()

export default ScrollMagic
export {
  ScrollMagic,
  TweenMax,
  TimelineMax,
  GSAP,
}
