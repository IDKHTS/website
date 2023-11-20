/* eslint-disable */
import $ from 'jquery'
import blowup from './blowup'

  // $.fn.isInViewport = function() {
  //   var elementTop = $(this).offset().top;
  //   var elementBottom = elementTop + $(this).outerHeight();
  
  //   var viewportTop = $(window).scrollTop();
  //   var viewportBottom = viewportTop + $(window).height();
  
  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };
  // (function () {
  //   let lastScrollTop = 0
  //   $.fn.isUP = function() {
  //     const st = $(this).scrollTop();
  //     let result
  //     if (st > lastScrollTop){
  //       result = false
  //     } else {
  //       result = true
  //     }
  //     lastScrollTop = st;
  //     return result
  //   };
  // })()
  
  // load plugin blowup
  // $(blowup)
  blowup($)
// if (typeof window !== 'undefined') {
//   const $ = 
//   window.$ = $
//   window.jQuery = window.$
// } else {
//   var window = {}
// }


export default $
