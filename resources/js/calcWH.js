/**
 *
 * @param {number} width imgOrignalWidth
 * @param {number} height imgOrignalHeight
 * @param {number} viewWidth viewWidth
 * @param {number} viewHeight viewHeight
 * @returns
 */

export default function calcWH (width, height, viewWidth, viewHeight) {
  let targetWidth, targetHeight
  const originAspectRatio = width / height

  const fullHeighImgWidth = originAspectRatio * (viewHeight) // one viewHeight and 96px
  if (fullHeighImgWidth > viewWidth) {
    // options.isWidthCenter = true
    targetWidth = fullHeighImgWidth
    targetHeight = viewHeight
  } else {
    // options.isWidthCenter = false
    targetHeight = viewWidth / originAspectRatio
    targetWidth = viewWidth
  }
  return {targetWidth, targetHeight}
}
