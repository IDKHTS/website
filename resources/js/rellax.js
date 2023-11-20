


class Parallax {
  constructor (el, options) {
    if (typeof el === 'string') {
      this.el = document.querySelector(el)
    } else {
      this.el = el
    }
    if (typeof options.wrapper === 'string') {
      options.wrapper = document.querySelector(options.wrapper)
    } else {
      options.wrapper = options.wrapper
    }

    this.options = {
      ...getDefaultOptions(),
      ...options
    }
    this.isWork = false
    this.scrollEl = document.documentElement

    this.loop = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) { return setTimeout(callback, 1000 / 60) }

    this.update = this.update.bind(this)
  }

  start () {
    this.isWork = true
    window.addEventListener('scroll', this.update)
  }

  update () {
    const clientWidth = document.body.clientWidth
    if (this.isWork && clientWidth > this.options.overWidth && isEntryViewport(this.options.wrapper)) {
      this.animate()
    }
  }

  animate () {
    const moveDistance = this.getMoveDistance()

    // Move that element
    // (Set the new translation.)
    const translate = `translate3d(0, ${moveDistance * this.options.speed * -0.05}px, 0)`
    this.el.style.transform = translate
  }

  getMoveDistance () {
    return -this.options.wrapper.getBoundingClientRect().top
  }

  stop () {
    this.isWork = false
    window.removeEventListener('scroll', this.update)
  }
}

function getDefaultOptions () {
  return {
    wrapper: document.documentElement, // trigger element, only start animate if the trigger element entries the viewport
    speed: 0.1,
    overWidth: 0 // apply this when device's width more than "overwith"
  }
}

function isEntryViewport (el) {
  return el.getBoundingClientRect().top <= 0
}

export default Parallax
