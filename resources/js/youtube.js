
export function setIframeVideoHeight(id) {
  const iframeVideo = document.getElementById(id)
  const width = getComputedStyle(iframeVideo).width.slice(0, -2)
  iframeVideo.style.height = width * (9 / 16) + 'px'
}
