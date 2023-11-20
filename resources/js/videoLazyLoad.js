/* eslint-disable */
import $ from './jquery-vendor';
const videoLazyLoader = function(id) {
    $(window).scroll(function() {
        const idString = '#' + id;
        const els = document.querySelectorAll(idString);
        els.forEach(function(el) {
          const { top, right, bottom, left } = el.getBoundingClientRect();
          if(top >= -200 && left >= -200 && right <= window.innerWidth + 200 && bottom <= window.innerHeight + 200) {
            let videoEls = el.querySelectorAll('video')
            videoEls.forEach(function(videoEl) {
              if($(videoEl).hasClass('lazyload') || $(videoEl).hasClass('lazyloaded')) {
                const sourceEls = videoEl.querySelectorAll('source');
                sourceEls.forEach(function(sourceEl) {
                    let dataSrc = sourceEl.getAttribute('data-src');
                    !!dataSrc && sourceEl.setAttribute('src', dataSrc)
                    !!dataSrc && sourceEl.parentNode.load();
                    $(videoEl).removeClass('lazyload');
                    $(videoEl).removeClass('lazyloaded');          
                }) 
              }
            })
              // sourceEl.removeAttribute('data-src')
          }
         
        })
      })
}

export default videoLazyLoader;