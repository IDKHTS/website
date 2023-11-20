
export default function(fullViewImg: string) {
  const fullViewImgOringinalWidth =  ref(0)
  const fullViewImgOringinalHeight =  ref(0)
  const fullViewImgWidth =  ref(0)
  const fullViewImgHeight =  ref(0)
  const originAspectRatio =  ref(0)
  const isWidthCenter =  ref(true)

  const initBgWH = (isReset?: boolean) => {
    const img = new Image()
    img.src = fullViewImg
    img.onload = function () {
      if (isReset) {
        fullViewImgOringinalWidth.value = img.width
        fullViewImgOringinalHeight.value = img.height
      } else {
        fullViewImgOringinalWidth.value = fullViewImgOringinalWidth.value || img.width
        fullViewImgOringinalHeight.value = fullViewImgOringinalHeight.value || img.height
      }

      const innerHeight = window.innerHeight
      const innerWidth = window.innerWidth
      originAspectRatio.value = fullViewImgOringinalWidth.value / fullViewImgOringinalHeight.value

      const fullHeighImgWidth = originAspectRatio.value * innerHeight
      if (fullHeighImgWidth > innerWidth) {
        isWidthCenter.value = true
        fullViewImgWidth.value = fullHeighImgWidth
        fullViewImgHeight.value = innerHeight
      } else {
        isWidthCenter.value = false
        fullViewImgHeight.value = innerWidth / originAspectRatio.value
        fullViewImgWidth.value = innerWidth
      }
    }
  }


  const resize = () => initBgWH()
  onMounted(() => {
    initBgWH()
    window.addEventListener('resize', resize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })

  return {
    fullViewImgOringinalWidth,
    fullViewImgOringinalHeight,
    fullViewImgWidth,
    fullViewImgHeight,
    originAspectRatio,
    isWidthCenter,
    initBgWH
  }
}