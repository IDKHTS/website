// function FullPageScroll (options) {
//   const defaulOption = {
//     fps: 60,
//     duration: 1800
//   }


//   init() {

//   }
//   this.
// }

// let timer, scrollTimer

import $ from '@@/resources/js/jquery-vendor'

export default class FullPageScroll {
  constructor (options) {
    this._timer = null
    this._scrollTimer = null
    this.containerEl = options.containerEl || ''
    this.selector = options.selector || 'full-page-scroll'
    this.duration = options.duration || 500
    this.offsetTop = window.innerHeight * 0.15
  }

  scrollScreenTo (pos) {
    $('html,body').stop().animate({scrollTop: pos}, this.duration)
    // const fps = 60
    // const duration = 1800
    // const times = duration / fps
    // const st = window.scrollY
    // const delta = pos - st
    // let turn = 0
    // this._scrollTimer = setInterval(() => {
    //   if (turn > times + 3) {
    //     clearInterval(this._scrollTimer)
    //   } else {
    //     turn++
    //     const dis = turn > times ? times : turn
    //     const step = st + delta * Math.sin(((dis) / times * Math.PI / 2))
    //     // console.log('-------', st, '->', pos, 'delta', delta, 'steps--', step, Math.sin(((dis) / times * Math.PI / 2)))
    //     window.scrollTo(0, step)
    //   }
    // }, 1000 / fps)
  }
  checkScreenScroll (e, cb) {
    // if(typeof this.containerEl !== Node){
    //   this.containerEl == document.querySelector(this.containerEl)
    // }
    let target = null
    for (let i = 0; i < this.containerEl.children.length; i++) {
      const el = this.containerEl.children[i]
      if (cb && cb.apply(this, [el, e])) {
        target = el
        break
      }
    }
    return target
  }

  checkScreenArea (el, e) {
    if (!el.classList.contains(this.selector.slice(1))) {
      return null
    }
    const rect = el.getBoundingClientRect()
    if (rect.y < 0 && rect.y + rect.height >= window.innerHeight / 2) {
      return el
    } else if (rect.y > 0 && window.innerHeight / 2 > rect.y) {
      return el
    }
    return null
  }
  mouseupHandler (e) {
    clearTimeout(this._timer)
    this._timer = setTimeout(() => {
      let target = this.checkScreenScroll(e, this.checkScreenArea)
      target && this.scrollScreenTo(target.offsetTop)
    }, 100)
  }

  isScreenScroll (el, e) {
    if (!el.classList.contains(this.selector.slice(1))) {
      return false
    }
    const rect = el.getBoundingClientRect()
    if (e.deltaY > 0) { // 内容向下滚
      if (rect.y >= this.offsetTop && rect.y <= window.innerHeight) {
        return true
      }
    } else {
      if (rect.y <= this.offsetTop && rect.y + window.innerHeight >= 0) {
        return true
      }
    }
    return false
  }
  mousewheelHandler (e) {
    clearInterval(this._scrollTimer)
    clearTimeout(this._timer)
    this._timer = setTimeout(() => {
      let target = this.checkScreenScroll(e, this.isScreenScroll)
      target && this.scrollScreenTo(target.offsetTop)
    }, 500)
  }

  init () {
    window.addEventListener('mouseup', e => this.mouseupHandler(e))
    window.addEventListener('mousewheel', e => this.mousewheelHandler(e))
  }
  destroy () {
    window.removeEventListener('mouseup', e => this.mouseupHandler(e))
    window.removeEventListener('mousewheel', e => this.mousewheelHandler(e))
  }
}


