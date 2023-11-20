
// https://www.zhangxinxu.com/wordpress/2012/10/more-display-show-hide-tranisition/
export function calcChildsHeight (eleMore) {
  var height = 0
  Array.prototype.slice.call(eleMore.childNodes).forEach(function (child) {
    if (child.nodeType === 1) {
      var oStyle = window.getComputedStyle(child)
      height = child.clientHeight + (parseInt(oStyle.borderTopWidth) || 0) + (parseInt(oStyle.borderBottomWidth) || 0)
    }
  })
  return height
}
