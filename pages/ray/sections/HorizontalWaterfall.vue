<template>
  <section>
    <div class="snmk-container py-3xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
        <div class='secondary-title text-center' v-html='dataSrc.title'></div>
      </div>
      <div v-if='isMobile' class='snmk-col-s-4 snmk-col-xs-4 case-displays'>
        <div class='case-display' v-for='display of dataSrc.displays' :key='display.imgMobSrc'>
          <NuxtImg class='w-100' :src="display.imgMobSrc" alt="work of snapmaker ray" loading='lazy' />
        </div>
      </div>
    </div>
    <div v-if='!isMobile'>
      <ul id="container">
        <li v-for='(row, index) of pcList' :key='index'>
          <div class="row">
            <!-- <div class='block' v-for='display of row' :key='display.title'>
              <img :src="display.imgSrc" :alt="display.title">
            </div> -->
            <div class='block'>
              <NuxtImg :src="row" alt="" loading='lazy' />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { ScrollMagic } from '@@/resources/js/scrollmagic/index'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

const pcList = computed(() => props.dataSrc.pcDisplays)

onMounted(() => {
    if (isMobile.value) return
    const container = document.querySelector('#container') as HTMLElement
    const list = Array.from(container.children)
    list.forEach((el, index) => {
      el.scrollLeft = index % 2 === 0 ? el.clientWidth : 0
    })
    let scrollW = list[0].scrollWidth
    let clientW = window.innerWidth

    // init controller
    var controller = new ScrollMagic.Controller()

    // create a scene
    new ScrollMagic.Scene({
      duration: window.innerHeight + 200, // the scene should last for a scroll distance of 100pxS
      // duration: container.clientHeight, // the scene should last for a scroll distance of 100pxS
      offset: -(window.innerHeight * 0.3),
      triggerElement: '#container',
      triggerHook: 'onLeave'
    })
    // .setPin('#container') // pins the element for the the scene's duration
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller) // assign the scene to the controller
      .on('progress', function (e) {
        //   console.log(e.progress.toFixed(3))
        //   console.log(e.progress)
        // console.log(scrollW - scrollW * e.progress.toFixed(3), scrollW * e.progress.toFixed(3))
        list.forEach((el, index) => {
          el.scrollLeft = index % 2 === 0 ? (scrollW - clientW) - (scrollW - clientW) * e.progress.toFixed(3) : (scrollW - clientW) * e.progress.toFixed(3)
        })
      })
})
</script>

<style scoped lang='scss'>
@import '../theme.scss';

ul {
  display: flex;
  padding: 0;
  margin: 0;
}
#container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
li {
  width: 100%;
  overflow: hidden;
}
.row {
  /* width: 25%; */
  width: 150vw;
  // width: calc(4573 * 20vh / 481);
  position: relative;
  // height: 220px;
  list-style: none;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
}
.block {
  display: inline-block;
  line-height: 0;
  /* flex: 1 1 200px; */
  // margin-top: 10px;
  margin-top: 0.8vw;
  /* width: 250px;  */
  /* width: 100%; */
  /* height: 400px; */
  width: 100%;
  // height: 200px;

  img {
    width: 100%;
    // height: 20vh;
    // width: auto;
  }

  @media (min-width: 2560px) {
    img {
      width: auto;
      max-height: 481px;
    }
  }
}

.case-displays {
  display: flex;
  flex-wrap: wrap;

  @include mobile {
    margin-top: 40px;
  }

  .case-display {
    width: calc(50% - 2px);
    margin-right: 4px;
    margin-top: 4px;
    line-height: 0;

    &:nth-child(2n) {
      margin-right: 0;
    }
    &:nth-child(1), &:nth-child(2) {
      margin-top: 0;
    }

    @include mobile {
      width: calc(50% - 2px);
    }
  }
}
</style>
