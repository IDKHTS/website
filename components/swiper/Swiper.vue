<template>
  <div>
    <div class="swiper" :id="swiperId">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Swiper from 'swiper'

const props = withDefaults(defineProps<{
  swiperId?: string
  autoPlay?: boolean
  isInnerWidth?: boolean
  centeredSlides?: boolean
  options?: any
}>(), {
  swiperId: 'screen',
  autoPlay: false,
  isInnerWidth: false,
  centeredSlides: false,
  options: () => ({})
})

const emit = defineEmits(['changeSlide', 'loaded'])
const selectedIndex = ref(0)
const swiper = ref()
onMounted(() => {
  const options = {
    ...props.options,
    centeredSlides: props.centeredSlides,
    on: {
      slideChange () {
        selectedIndex.value = this.activeIndex
        emit('changeSlide', selectedIndex.value)
      }
    }
  }
  props.isInnerWidth && (options.width = window.innerWidth)
  options.autoPlay = props.autoPlay
  swiper.value = new Swiper('#' + props.swiperId, options)
  emit('loaded', swiper.value)
})

</script>


<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
  background-color: $black_white_8;
  width: 100%;
}
</style>
