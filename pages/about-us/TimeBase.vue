<template>
  <div>
    <div class="swiper not-mob" id='time-swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide mb-xl"   v-for="(item, index) in milestones" :key="index">
          <div class="time" :class="{'time-active': selectedIndex == index}">
            <div>{{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper not-mob" id='event-swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="(item, index) in milestones" :key="index">
          <!-- <div class="time" :class="{'time-active': selectedIndex == index}">
            <div>{{item.time}}</div>
          </div> -->
          <div class="events">
            <div class="title-1 font-bw-1 bold">{{item.time}}</div>
            <hr class="mt-s mb-l font-bw-1" >
            <div class="mt-m" v-for="event of item.events" :key="event.description">
              <span class="font-1 font-bw-1 bold mr-xs">{{event.month}}</span>
              <span>{{event.description}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TabPanel class="only-mob tab-panel" :options="TabsPanelOptions">
      <template v-for="item of milestones" v-slot:[item.time]>
        <div class="events pb-l pt-xl" :key="item.time">
          <div class="title-1 font-bw-1 bold">{{item.time}}</div>
          <hr class="mt-s mb-l font-bw-1" >
          <div v-for="event of item.events" :key="event.description">
            <span class="font-1 font-bw-1 bold mr-xs">{{event.month}}</span>
            <span>{{event.description}}</span>
          </div>
        </div>
      </template>
    </TabPanel>
  </div>
</template>

<script setup lang='ts'>
import Swiper from 'swiper'
import TabPanel from '@@/components/TabPanel.vue'
import { useGlobalStore } from '~/stores'
import { storeToRefs } from 'pinia'
const props = withDefaults(defineProps<{
  milestones?: any
}>(), { milestones: {} })
const { isMobile } = storeToRefs(useGlobalStore())


const selectedIndex = ref(0)
const TabsPanelOptions = computed(() => {
  const options = {
    isDark: false,
    tabs: []
  }
  props.milestones.forEach((v: any) => {
    options.tabs.push({tabLabel: v.time, slotName: v.time})
  })
  return options
})
onMounted(() => {
  let timeSwiper: Swiper, eventsSwiper: Swiper
  timeSwiper = new Swiper('#time-swiper', {
    slidesPerView: 4, // 显示三个轮播
    initialSlide: 0,
    slideToClickedSlide: true,
    centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
    // centerInsufficientSlides: true, // 开启这个参数，当slides的总数小于slidesPerView时，slides居中。不适用于loop模式和slidesPerColumn
    on: {
      slideChange () {
        selectedIndex.value = this.activeIndex
        eventsSwiper.slideTo(this.activeIndex)
      }

    }
  })
  eventsSwiper = new Swiper('#event-swiper', {
    slidesPerView: 3, // 显示三个轮播
    initialSlide: 0,
    spaceBetween: 24,
    centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
    // centerInsufficientSlides: true, // 开启这个参数，当slides的总数小于slidesPerView时，slides居中。不适用于loop模式和slidesPerColumn
    // centeredSlidesBounds: true, // 使得第一个和最后一个Slide 始终贴合边缘。
    controller: {
      control: timeSwiper
    },
    on: {
      slideChange () {
        selectedIndex.value = this.activeIndex
        timeSwiper.slideTo(this.activeIndex)
      }

    }
  })

})

</script>


<style lang="scss" scoped>
#time-swiper {
  width: 50%;
}
#event-swiper {
  z-index: unset;
  .swiper-slide {
    padding: 80px 0 100px;
    // border: 1px solid black;
  }
}

#time-swiper,#event-swiper {
  overflow: visible;
  background-color: $black_white_8;
  .swiper-wrapper {
    width: 414px;
  }
}

.time {
  position: absolute;
  top: 0;
  left: 50%;
  cursor: pointer;
  // transform: translateX(-50%);
  transform: translate(-50%, -50%);
  height: 48px;
  width: 48px;
  background-color: white;
  font-size: 12px;
  border: 0.5px solid $black_white_5;
  color: $black_white_1;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.time-active {
  font-size: 18px;

  height: 80px;
  width: 80px;
  background-color: $blue;
  color: white;

  &::before {
    content: '\e7b2';
    font-family: "iconfont" !important;
    font-size: 26px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 100%;
    color: $black_white_2;
  }
}

hr {
  height: 1px;
  background-color: $black_white_5;
}

.events {
  position: relative;
  left: calc(50% + 0px);
}




@media (max-width: $breakPoint_m) {
  .events {
    left: auto;
    background-color: $black_white_8;
    padding-right: 24px;
    padding-left: 24px;
    min-height: 250px;
  }

  .tab-panel {
    &::v-deep .tab-labels-white {
      justify-content: flex-start;
    }
    &::v-deep .tab-label-white {
      width: auto;
      margin-right: 25px;
    }
    &::v-deep .tab-label-active-white {
      width: auto;
      margin-right: 25px;
    }
  }
}

</style>
