<template>
  <div class='bg-white' id='block'>
    <div ref='titleBlock' class="snmk-container"  style='z-index: 10;' >
      <div class="snmk-col-12 snmk-col-l-12 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4">
        <h1 class='title-1 text-center' v-html='dataSrc.title' ></h1>
        <div>
          <div class='case-1'></div>
        </div>
        <!--  data-aos='fade-up' -->
      </div>
    </div>
    <ul v-if='isMobile' id='slides-container'>
        <li class='slide-column' v-for='(img, index) of dataSrc.mobImgs' :key='index'>
          <!-- <div :class="`case-${index}`"></div> -->
          <NuxtImg v-for='col of img.imgs' class='slide-column-img' :key='col' :src="col" alt="" loading='lazy' />
          <NuxtImg v-for='col of img.imgs' :src="col" alt="" :key='col+"dulpicate"' class='slide-column-img' loading='lazy' />
        </li>
        <div class='slides-container-cover'></div>
    </ul>
    <ul v-else id='slides-container'>
        <li class='slide-column' v-for='(img, index) of dataSrc.imgs' :key='index'>
          <!-- <div :class="`case-${index}`"></div> -->
          <NuxtImg v-for='col of img.imgs' class='slide-column-img' :key='col' :src="col" alt="" loading='lazy' />
          <NuxtImg v-for='col of img.imgs' :src="col" alt="" :key='col+"dulpicate"' class='slide-column-img' loading='lazy'/>
        </li>
        <div class='slides-container-cover'></div>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import {
  ScrollMagic,
  TimelineMax
} from '@@/resources/js/scrollmagic/index'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import gsap from 'gsap'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

const titleBlock = ref()
const initScrollMagic = (columnHeight: number) => {
  const container = document.querySelector('#slides-container') as HTMLElement
  if(!container) return 
  const list = Array.from(container.children)
  const animFrameCount = 30
  const animPercent = 0.3
  let isSet = false
  const anim = gsap.timeline({useFrames: true})
  anim.to(container, animFrameCount, { width: '180%', left: '-30%' })
  anim.pause()
  columnHeight = document.documentElement.clientHeight - titleBlock.value.clientHeight
  let isInitedAos = false


  // init controller
  const controller = new ScrollMagic.Controller()
  new ScrollMagic.Scene({
    duration: window.innerHeight * 2, // the scene should last for a scroll distance of 100pxS
    // duration: (scrollH - columnHeight) * ratio * 2, // the scene should last for a scroll distance of 100pxS
    // duration: container.clientHeight, // the scene should last for a scroll distance of 100pxS
    // offset: container.clientHeight - window.innerHeight,
    triggerElement: '#block',
    triggerHook: 'onLeave'
  })
    .setPin('#block') // pins the element for the the scene's duration
    .addTo(controller)
    .on('progress', function (e: any) {
      const progress = e.progress.toFixed(3)
      if (progress < animPercent) {
        anim.seek(progress / (animPercent / animFrameCount))
        isSet && list.forEach((el, index) => { el.style.height = 'auto' })
        isSet = false
        container.style.height = columnHeight + 'px'
        return
      }
      if (!isSet) {
        columnHeight = document.documentElement.clientHeight - titleBlock.value.clientHeight
        list.forEach((el, index) => {
          const inlineHeight = 24 // window.innerHeight / 100 * 5
          let elHeight = 0
          switch (index) {
            case 0:
            case 8:
              elHeight = columnHeight - (2 * inlineHeight)
              break
            case 1:
            case 2:
            case 3:
              elHeight = columnHeight - ((index - 1) * inlineHeight)
              break
            case 4:
              elHeight = columnHeight - (1 * inlineHeight)
              break
            case 5:
            case 6:
            case 7: // calc(#{$inlineHeight * (ceil($columnCount/2 - 2) - 1)} - #{$inlineHeight * ($i - ceil($columnCount/2)-1)});
              elHeight = columnHeight - (inlineHeight * 2 - inlineHeight * (index - 5))
              break
            default:
              break
          }
          el._elHeight = elHeight
          el.style.height = `${elHeight}px`

          el.scrollTop = el.scrollHeight / 2
        })

        isSet = true
      }
      list.forEach((el, index) => {
        const scrollProgress = (progress - animPercent)
        const actualScrollProgress = scrollProgress / (1 - animPercent)
        el.scrollTop = index % 2 === 0
          ? (el.scrollHeight / 2) + ((el.scrollHeight / 2 - el._elHeight) * actualScrollProgress)
          : (el.scrollHeight / 2) - ((el.scrollHeight / 2) * actualScrollProgress)
      })
    })
}
const initMobScrollMagic = (columnHeight: number) => {
  const container = document.querySelector('#slides-container') as HTMLElement
  if(!container) return 
  const list = Array.from(container.children)
  columnHeight = document.documentElement.clientHeight - titleBlock.value.clientHeight
  list.forEach((el, index) => {
    const inlineHeight = 24 // window.innerHeight / 100 * 5
    let elHeight = index === 0 ? columnHeight : columnHeight - inlineHeight
    el._elHeight = elHeight
    el.style.height = `${elHeight}px`
    // el.scrollTop = index % 2 === 0 ? 0 : el.scrollHeight
    el.scrollTop = el.scrollHeight / 2
  })

  // init controller
  const controller = new ScrollMagic.Controller()
  new ScrollMagic.Scene({
    duration: window.innerHeight * 2, // the scene should last for a scroll distance of 100pxS
    triggerElement: '#block',
    triggerHook: 'onLeave'
  })
    .setPin('#block') // pins the element for the the scene's duration
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller)
    .on('progress', function (e: any) {
      const progress = e.progress.toFixed(3)
      list.forEach((el, index) => {
        const scrollProgress = parseFloat(progress)
        // el.scrollTop = index % 2 === 0
        //   ? (el.scrollHeight - columnHeight) * scrollProgress
        //   : (el.scrollHeight - columnHeight) - (el.scrollHeight - columnHeight) * scrollProgress
        el.scrollTop = index % 2 === 0
          ? (el.scrollHeight / 2) + ((el.scrollHeight / 2 - el._elHeight) * scrollProgress)
          : (el.scrollHeight / 2) - ((el.scrollHeight / 2) * scrollProgress)
      })
    })
}

onMounted(() => {
    const columnHeight = document.documentElement.clientHeight - titleBlock.value.clientHeight
    !isMobile.value ? initScrollMagic(columnHeight) : initMobScrollMagic(columnHeight)

})
</script>

<style scoped lang='scss'>
@import '../theme.scss';

.secondary-title, .title-1 {
  margin-top: 12.96vh;
  color: black;
  color: var(--unnamed, #1C1E20);

  /* Heading/1920/Gilroy Bold-44 */
  font-family: Roboto;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 127.273% */
  letter-spacing: -0.24px;

  @include mobile {
    font-size: 28px;
    line-height: 36px;
  }
}
.bg-white {
  background-color: white;
}



ul {
  padding: 0;
  margin: 0;
}
#slides-container {
  width: 100%;
  left: 0;
  // width: 90%;
  // left: 5%;
  display: flex;
  justify-content: space-between;
  position: relative;
  transform: translate(0);
  // transform: translateY(-25%) scale(0.5);
  @include mobile {
    width: 100%;
    left: 0;
    margin-top: 31px;
  }

  .slides-container-cover {
    position: absolute;
    top: 0;
    left: 0;
    height: 200px !important;
    width: 100%;
    background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
   }
}
.slide-column {
  $num: 9;
  // width: calc((100% - (#{$num} - 1)*10px) / #{$num});
  width: calc(100% / #{$num});
  position: relative;
  // height: 700px;
  list-style: none;
  // overflow: auto;
  overflow: hidden;
  padding-inline: 5px;
  padding-block: 10px;
  // @include no-mobile {
  //   $columnCount: 9;
  //   $inlineHeight: 24px;
  //   @for $i from 1 to ceil($columnCount/2)+1 {
  //     &:nth-child(#{$i}) {
  //       margin-top: calc( #{$inlineHeight * ($i - 1)});
  //     }
  //   }
  //   @for $i from ceil($columnCount/2)+1 to $columnCount {
  //     &:nth-child(#{$i}) {
  //       margin-top: calc( #{$inlineHeight * ceil($columnCount/2)} -  #{$inlineHeight * ($i - ceil($columnCount/2))});
  //     }
  //   }
  // }
  @include no-mobile {
    $columnCount: 9;
    $inlineHeight: 24px;
    &:nth-child(1) {
      margin-top: calc(#{$inlineHeight * 2});
    }
    @for $i from 2 to ceil($columnCount/2 - 2)+2 {
      &:nth-child(#{$i}) {
        margin-top: calc( #{$inlineHeight * ($i - 2)});
      }
    }
    &:nth-child(#{ceil($columnCount/2)}) {
      margin-top: calc(#{$inlineHeight * 1});
    }
    @for $i from ceil($columnCount/2)+1 to ($columnCount - 1) {
      &:nth-child(#{$i}) {
        margin-top: calc(#{$inlineHeight * (ceil($columnCount/2 - 2) - 1)} - #{$inlineHeight * ($i - ceil($columnCount/2)-1)});
      }
    }
    &:nth-child(#{$columnCount}) {
      margin-top: calc(#{$inlineHeight * 2});
    }
  }

  @include mobile {
    $num: 2;
    $inlineHeight:24px;
    width: 50%;
    // box-shadow: 0px -46.48607px 108.4675px 0px rgba(103, 110, 118, 0.08), 0px -15.49536px 46.48607px 0px rgba(0, 0, 0, 0.12);
    &:nth-child(2) {
      margin-top:  $inlineHeight;
    }
  }

  .slide-column-img {
    transform: translate(0); // speed up
    // overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-block: 10px;
    border-radius: 20px;
    box-shadow: 0px 46.4860725402832px 108.46749877929688px 0px rgba(103, 110, 118, 0.08), 0px 15.495357513427734px 46.4860725402832px 0px rgba(0, 0, 0, 0.12)

    // &::after {
    //   content: '';
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   width: 100%;
    //   height: 100%;
    //   border-radius: 20px;
    //   box-shadow: 0px 15.495357513427734px 46.4860725402832px 0px rgba(0, 0, 0, 0.12);
    // }

    // img {
    //   border-radius: 20px;
    // }
    // box-shadow: 10px 10.60309600830078px 10.07388305664062px 0px rgba(103, 110, 118, 0.08), 10px -10.60309600830078px 10.07388305664062px 0px rgba(103, 110, 118, 0.08), -10px 10.60309600830078px 10.07388305664062px 0px rgba(103, 110, 118, 0.08), -10px -10.60309600830078px 10.07388305664062px 0px rgba(103, 110, 118, 0.08);
  }
}
.block {
    margin-block: 10px;
    /* width: 250px;  */
    width: 100%;
    height: 400px;
}
.block:last-child {
    margin-bottom: 0;
}
.block:first-child {
    margin-top: 0;
}
</style>


<!-- <style scoped>
.case-12 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -0px -0px no-repeat;
 background-size: 361px, 361px;
 width: 361px;
 height:361px;
}
.case-13 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -361px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-16 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -722px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-17 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -1083px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-38 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -1444px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-39 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -1805px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-20 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -2166px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-21 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -2527px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-22 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -2888px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-23 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -3249px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-27 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -3610px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-34 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -3971px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-35 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -4332px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-36 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -4693px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-33 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -5054px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-37 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -5415px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-4 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -5776px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-18 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -6137px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-19 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -6498px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-24 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -6859px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-25 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -7220px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-26 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -7581px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-30 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -7942px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-31 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -8303px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-42 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -8664px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-5 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -9025px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-32 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -9386px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-7 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -9747px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-40 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -10108px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-2 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -10469px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-6 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -10830px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-43 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -11191px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-44 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -11552px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-50 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -11913px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-3 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -12274px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-8 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -12635px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-41 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -12996px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-45 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -13357px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-28 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -13718px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-14 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -14079px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-48 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -14440px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-46 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -14801px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-52 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -15162px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-1 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -15523px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-49 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -15884px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-47 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -16245px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-15 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -16606px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-9 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -16967px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-11 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -17328px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-10 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -17689px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-51 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -18050px -0px no-repeat;
 width: 361px;
 height:361px;
}
.case-29 {
 background: url(https://ditfjx9w4x3vl.cloudfront.net/assets/laser-modules/css_sprites.png) -18411px -0px no-repeat;
 width: 361px;
 height:361px;
}


</style> -->
