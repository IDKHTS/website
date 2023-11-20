<template>
  <div class="view-port" ref='viewPort'>
    <div class="whole-picture" :style="{
      width: `${bgImgWidth}px`,
      height: `${bgImgHeight}px`
    }">
      <NuxtImg v-if="isImg" :src="options.imgSrc" :loading='options.lazyLoad ? "lazy" : ""' ></NuxtImg>
      <NuxtImg v-if="isMobile && options.gifSrc" :src="options.gifSrc" :loading='options.lazyLoad ? "lazy" : ""' ></NuxtImg>
      <video v-if="!isImg && !isMobile && options.videoWebm" ref="videoRef"
        muted :poster="options.poster" :autoplay="!options.noAutoPlay"
        :preload="!options.videoNotLoop ? 'metadata' : 'auto'"
        :loop="!options.videoNotLoop" webkit-playsinline
        playsinline
        x5-video-player-type="h5-page"
        @canplay='canplay'
        @ended='videoEnded'
        @timeupdate='timeupdate'
      >
        <source :src="options.videoWebm">
        <source :src="options.videoMp4">
      </video>
      <!-- <slot></slot> -->
    </div>
  </div>
</template>

<script setup lang='ts'>
import _ from 'lodash'
import calcWH from '@@/resources/js/calcWH.js'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

function adapteHeight (width: number, height: number, viewWidth: number, viewHeight: number) {
  let targetWidth, targetHeight
  const originAspectRatio = width / height
  const fullHeighImgWidth = originAspectRatio * (viewHeight)
  targetWidth = fullHeighImgWidth
  targetHeight = viewHeight
  return {targetWidth, targetHeight}
}

interface IMediaViewAdapterOptions {
  imgSrc?: string;
  imgOriginalWidth?: number;
  imgOriginalHeight?: number;
  viewWidth?: number;
  viewHeight?: number;

  videoWebm?: string
  videoMp4?: string
  gifSrc?: string;
  poster?: string
  videoOriginalWidth?: number;
  videoOriginalHeight?: number;
  isAutoHeigh?: boolean;
  noAutoPlay?: boolean;
  lazyLoad?: boolean;
  videoNotLoop?: boolean;
  isAdapteHeight?: boolean;

  alt?: string
  mobAlt?: string
}
const props = withDefaults(defineProps<{ options: IMediaViewAdapterOptions }>(), {
  options: () => ({
    isAutoHeigh: false,
    noAutoPlay: false,
    lazyLoad: true,
    videoNotLoop: false,
    isAdapteHeight: false
  })
});
const emit = defineEmits(['adapterHeight', 'videoLoad', 'loaded', 'videoEnd', 'videoTimeupdate'])


const bgImgWidth = ref(0)
const bgImgHeight = ref(0)
const _uid = ref(_.uniqueId())
const isImg = computed(() => !!props.options.imgSrc)
const viewWidth = ref(0)
const viewHeight = ref(0)
const viewPort = ref<Element | null>(null)
const timerRef = ref<number | undefined>(0)
const videoRef = ref()
const loaded = () => emit('loaded')

const imgAdapteWidth = () => {
  if(!viewPort.value) return
  const el = viewPort.value
  viewWidth.value = el.clientWidth
}
const imgAdapteHeight = () => {
  if(!viewPort.value) return
  const el = viewPort.value
  if (props.options.isAutoHeigh) {
    // TODO: Handle the case when imgOriginalWidth/imgOriginalHeight is not passed in
    const width = (isImg.value ? props.options.imgOriginalWidth : props.options.videoOriginalWidth) || 1
    const height = (isImg.value ? props.options.imgOriginalHeight : props.options.videoOriginalHeight) || 1
    viewHeight.value = height / width * el.clientWidth
  } else {
    viewHeight.value = el.clientHeight
  }
}

const initBg = (options: IMediaViewAdapterOptions): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!options) reject(new Error('no options'))
    if (!options.imgSrc && !options.gifSrc) reject(new Error('no img/gif src'))
    let width = 0
    let height = 0
    if (options.imgOriginalWidth && options.imgOriginalHeight) {
      width = options.imgOriginalWidth
      height = options.imgOriginalHeight
      let result
      if (options.isAdapteHeight) {
        result = adapteHeight(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth)
      } else {
        result = calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth)
      }
      // this.$emit('adapterHeight', result.targetHeight)
      emit('adapterHeight', result.targetHeight)
      resolve(result)
      return
    }

    const img = new Image()
    img.src = options.imgSrc || options.gifSrc
    img.onload = function () {
      const width = options.imgOriginalWidth || img.width
      const height = options.imgOriginalHeight || img.height
      let result
      if (options.isAdapteHeight) {
        result = adapteHeight(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth)
      } else {
        result = calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth)
      }
      // vm.$emit('adapterHeight', result.targetHeight)
      emit('adapterHeight', result.targetHeight)
      resolve(result)
    }
    img.onerror = err => { console.log(err); reject(err) }
  })
}
const initVideo = (options: IMediaViewAdapterOptions) => {
  if (!options) {
    console.error(new Error('no options'))
    emit('adapterHeight', 0)
    return {targetWidth: 0, targetHeight: 0}
  }
  if (!isImg.value && (!options.videoOriginalWidth || !options.videoOriginalHeight)) {
    console.error(new Error('no videoOriginalWidth, or videoOriginalHeight'))
    emit('adapterHeight', 0)
    return {targetWidth: 0, targetHeight: 0}
  }
  let width: number | undefined = 0
  let height: number | undefined  = 0
  width = options.videoOriginalWidth!
  height = options.videoOriginalHeight!
  let result
  if (options.isAdapteHeight) {
    result = adapteHeight(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth)
  } else {
    result = calcWH(width, height, options.viewWidth || window.innerWidth, options.viewHeight || window.innerWidth)
  }
  // this.$emit('adapterHeight', result.targetHeight)
  emit('adapterHeight', result.targetHeight)
  return result
}

const initBgImg = _.throttle(async (options: IMediaViewAdapterOptions) => {
  if(!viewPort.value) return
  if (isMobile.value && innerHeight !== window.innerHeight) return
  innerHeight = window.innerHeight

  options.isAutoHeigh && (viewPort.value.style.height = 0)
  imgAdapteWidth()
  imgAdapteHeight()
  const res = await initBg({
    imgSrc: options.imgSrc,
    gifSrc: options.gifSrc,
    imgOriginalWidth: options.imgOriginalWidth || 0,
    imgOriginalHeight: options.imgOriginalHeight || 0,
    viewWidth: viewWidth.value,
    viewHeight: viewHeight.value,
    isAdapteHeight: options.isAdapteHeight
  })
  
  bgImgWidth.value = res.targetWidth
  bgImgHeight.value = res.targetHeight
  options.isAutoHeigh && (viewPort.value.style.height = bgImgHeight.value + 'px')

}, 100)
const initVideoWH = _.throttle((options: IMediaViewAdapterOptions) => {
  if ((isMobile.value && innerHeight !== window.innerHeight) || !viewPort.value) return
  innerHeight = window.innerHeight
  options.isAutoHeigh && (viewPort.value.style.height = 0)
  imgAdapteWidth()
  imgAdapteHeight()
  const {targetWidth, targetHeight} = initVideo({
    gifSrc: options.gifSrc,
    videoOriginalWidth: options.videoOriginalWidth || 0,
    videoOriginalHeight: options.videoOriginalHeight || 0,
    viewWidth: viewWidth.value,
    viewHeight: viewHeight.value,
    isAdapteHeight: options.isAdapteHeight
  })
  bgImgWidth.value = targetWidth
  bgImgHeight.value = targetHeight
  options.isAutoHeigh && (viewPort.value.style.height = targetHeight + 'px')
})

const canplay = (event: Event) => {
  emit('videoLoad', videoRef.value)
  loaded()
}
const videoEnded = (event: Event) => emit('videoEnd')
const timeupdate = (event: Event) => emit('videoTimeupdate', videoRef.value)
const init = () => {
  const options = props.options
  clearInterval(timerRef.value)
  options.lazyLoad = typeof options.lazyLoad === 'undefined' ? true : options.lazyLoad
  let innerHeight = window.innerHeight

  if (isMobile.value && !!options.gifSrc) {
    timerRef.value = setInterval(() => initBgImg(options), 200)
    setTimeout(() => clearInterval(timerRef.value), 2000)
    window.addEventListener('resize',() => initBgImg(options))
    // this.$once('hook:beforeDestroy', () => {
    //   window.removeEventListener('resize', initBgImg)
    // })
  } else {
    if(isImg.value) {
      timerRef.value = setInterval(() => initBgImg(options), 200)
      window.addEventListener('resize', () => initBgImg(options))
    } else {
      timerRef.value = setInterval(() => initVideoWH(options), 200)
      window.addEventListener('resize', () => initVideoWH(options))
    }
    setTimeout(() => clearInterval(timerRef.value), 2000)
    // this.$once('hook:beforeDestroy', () => {
    //   this.isImg && window.removeEventListener('resize', initBgImg)
    //   !this.isImg && window.removeEventListener('resize', initVideoWH)
    // })
  }
  // this.$Lazyload.$once('loaded', (event, cb) => { this.$emit('lazyloaded', event, cb); this.loaded() })

  if(!isImg.value && props.options.videoNotLoop && videoRef.value) {
    videoRef.value.addEventListener('canplay', canplay)
    videoRef.value.addEventListener('ended', videoEnded)
    videoRef.value.addEventListener('timeupdate', timeupdate)
    if(videoRef.value.readyState > 3) {
      canplay(videoRef.value)
    } 
  }

}
onMounted(() => {
  init()
})
watch(() => props.options.imgSrc, () => {
  init()
}, {flush: 'post'})

const { isMobile } = storeToRefs(useGlobalStore())



</script>


<style lang="scss" scoped>
.view-port {
  height: 100%;
  width: 100%;

  position: relative;
  overflow: hidden;

}

.whole-picture {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 0;

  img, video {
    width: 100%;
    height: 100%;
    line-height: 0;
  }
  video {
    object-fit: cover;
  }
}


</style>
