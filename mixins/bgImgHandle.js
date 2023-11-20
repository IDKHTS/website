// require: component has a prop: this.fullViewImg
// optional: component can set fullViewImgOringinalWidth, fullViewImgOringinalHeight, or will read img mata-data
// functional:
// 1. can get img original or rendering in view W/H, rendering W/H will auto change when window.resize
export default {
  name: 'bgImgHandle',
  props: {
  },
  data () {
    return {
      fullViewImgOringinalWidth: 0,
      fullViewImgOringinalHeight: 0,
      fullViewImgWidth: 0,
      fullViewImgHeight: 0,
      originAspectRatio: 0,
      isWidthCenter: true
    }
  },
  mounted () {
    this.initBgWH()
    window.addEventListener('resize', this.initBgWH)
  },
  methods: {
    initBgWH (isReset) {
      const vue = this
      const img = new Image()
      img.src = this.fullViewImg
      img.onload = function () {
        if (isReset) {
          vue.fullViewImgOringinalWidth = img.width
          vue.fullViewImgOringinalHeight = img.height
        } else {
          vue.fullViewImgOringinalWidth = vue.fullViewImgOringinalWidth || img.width
          vue.fullViewImgOringinalHeight = vue.fullViewImgOringinalHeight || img.height
        }

        const innerHeight = window.innerHeight
        const innerWidth = window.innerWidth
        const originAspectRatio = vue.originAspectRatio = vue.fullViewImgOringinalWidth / vue.fullViewImgOringinalHeight

        const fullHeighImgWidth = originAspectRatio * innerHeight
        if (fullHeighImgWidth > innerWidth) {
          vue.isWidthCenter = true
          vue.fullViewImgWidth = fullHeighImgWidth
          vue.fullViewImgHeight = innerHeight
        } else {
          vue.isWidthCenter = false
          vue.fullViewImgHeight = innerWidth / originAspectRatio
          vue.fullViewImgWidth = innerWidth
        }
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.initBgWH)
  }
}



// const fullViewImgOringinalWidth = ref(0)
// const fullViewImgOringinalHeight = ref(0)
// const fullViewImgWidth = ref(0)
// const fullViewImgHeight = ref(0)
// const originAspectRatio = ref(0)
// const isWidthCenter = ref(true)

// // 初始化背景图片宽度和高度
// const initBgWH = (isReset) => {
//   const img = new Image()
//   img.src = props.fullViewImg

//   img.onload = function () {
//     if (isReset) {
//       fullViewImgOringinalWidth.value = img.width
//       fullViewImgOringinalHeight.value = img.height
//     } else {
//       fullViewImgOringinalWidth.value = fullViewImgOringinalWidth.value || img.width
//       fullViewImgOringinalHeight.value = fullViewImgOringinalHeight.value || img.height
//     }

//     const innerHeight = window.innerHeight
//     const innerWidth = window.innerWidth
//     const originAspectRatioValue = originAspectRatio.value = fullViewImgOringinalWidth.value / fullViewImgOringinalHeight.value

//     const fullHeighImgWidth = originAspectRatioValue * innerHeight
//     if (fullHeighImgWidth > innerWidth) {
//       isWidthCenter.value = true
//       fullViewImgWidth.value = fullHeighImgWidth
//       fullViewImgHeight.value = innerHeight
//     } else {
//       isWidthCenter.value = false
//       fullViewImgHeight.value = innerWidth / originAspectRatioValue
//       fullViewImgWidth.value = innerWidth
//     }
//   }
// }

// // 生命周期钩子
// onMounted(() => {
//   initBgWH()
//   window.addEventListener('resize', initBgWH)
// })

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', initBgWH)
// })