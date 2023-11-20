<template>
  <div :class="'swiper'" :id="id" style='overflow-y: visible;'>
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script lang='ts' setup>
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import _ from 'lodash'


const props = defineProps<{
  id: string,
  options: any
}>()
const paginationsTimeAry = ref([])
const enhancedOption = ref({})
const timerRef = ref(0)
const swiper = ref({})
const _uid = _.uniqueId()
const emit = defineEmits(['slideChange', 'onReady'])

onMounted(() => {
  paginationsTimeAry.value = props.options.timeAry || []
    const inputInitEvent = props?.options?.on?.init || function () {}
    const inputSlideChangeEvent = props?.options?.on?.slideChange || function () {}
    const defaultOptions = {
      modules: [ Pagination ],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'pagination-bullet-active',
        bulletClass: 'pagination-bullet',
        renderBullet: function (index: number, className:string) {
          return `
          <div id="slide-item${_uid}-${index}" class="${className}"></div>
          `
        }
      },
      on: {
        slideChange: function () {
          clearTimeout(timerRef.value)
          emit('slideChange', this.activeIndex)
          // loop
          timerRef.value = setTimeout(() => {
            if (props.options.loop) {
              this.slideNext()
              return
            }
            let nextIndex = -1
            if (this.activeIndex === paginationsTimeAry.value.length - 1 && !this.loop) {
              nextIndex = 0
            } else {
              nextIndex = this.activeIndex + 1
            }
            this.slideTo(nextIndex)
          }, paginationsTimeAry.value[this.realIndex] + 100)

          inputSlideChangeEvent.call(this, ...arguments)
        },
        init: function () {
          // add tansition-duration style
          const transitions = paginationsTimeAry.value.map((v, index) => `#slide-item${_uid}-${index}::before {transition-duration: ${v}ms}`).join('\n')
          const style = document.createElement('style')
          style.innerHTML = `.pagination-bullet-active::before {width: 100%}` + transitions

          // active first slide pagination progress
          setTimeout(() => {
            this.el.insertBefore(style, this.el.firstChild)
          })

          // call parent component
          emit('slideChange', 0)

          // start loop
          if (!props.options.customStart) {
            timerRef.value = setTimeout(() => {
              if (props.options.loop) {
                this.slideNext()
              } else {
                this.slideTo(1)
              }
            }, paginationsTimeAry.value[0] + 100)
          }


          inputInitEvent.call(this, ...arguments)
        }
      }
    }
    const event = {
      on: Object.assign(props.options.on || {}, defaultOptions.on)
    }
    const pagination = {
      pagination: Object.assign(defaultOptions.pagination, props.options.pagination || {})
    }
    enhancedOption.value = Object.assign(defaultOptions, props.options, event, pagination)
    swiper.value = new Swiper('#' + props.id, enhancedOption.value)
    emit('onReady', swiper.value)
})
</script>


<style lang="scss">

// do not scoped beacuse the insert style element css won't work
.pagination-bullet {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 100%;
  background: #595959;
  opacity: 0.8;
  margin: 0 4px;
  border-radius: 6px;
  cursor: pointer;

  &::before {
    border-radius: 6px;
    content: '';
    width: 0;
    height: 100%;
    background: #595959;
  }
}

.pagination-bullet-active {
  background-color: #595959;
  height: 6px;
  width: 100px;
  border-radius: 6px;
  opacity: 0.8;

  &::before {
    border-radius: 6px;
    display: block;
    content: '';
    height: 100%;
    background: linear-gradient(to right,#2360ff, #23ffd7);
    transition: all cubic-bezier(0.0, 0.0, 1.0, 1.0);
    opacity: 1;
  }
}

</style>
