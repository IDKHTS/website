<template>
  <div>
    <div class="triggle-bar" ref="triggle-bar" @click="onToggle()">
      <slot name="triggle-bar"></slot>
    </div>
    <div ref="content" class="content" :style="`transition-duration: ${speed}`">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { calcChildsHeight } from '@@/resources/js/calcHeight'

export default {
  props: {
    speed: {
      type: String,
      default: '1s'
    },
    isOpen: {
      // type: Boolean,
      default: false
    },
    reCalcHTrigger: {
      default: 0
    }
  },
  data: function () {
    return {}
  },
  mounted () {
    if(this.$refs['content'].firstChild) { return }
    // Let the fist child become a BFC
    // so that the child marign-top will be include the content's el height
    let overflow = this.$refs['content'].firstChild.style.overflow
    this.$refs['content'].firstChild.style.overflow = overflow && overflow !== 'visible' ? overflow : 'hidden'
  },
  methods: {
    onToggle () {
      this.$emit('toggle')
    },
    reCalcH() {
      const height = calcChildsHeight(this.$refs['content'])
      this.$refs['content'].style.height = this.isOpen ? height + 'px' : '0'
    }
  },
  watch: {
    isOpen (newV, oldV) {
      const calc = () => {
        const height = calcChildsHeight(this.$refs['content'])
        this.$refs['content'].style.height = newV ? height + 'px' : '0'
      }
      setTimeout(calc, 100)
    },
    reCalcHTrigger(newV, oldV) {
      const ref = setInterval(() => { this.reCalcH() }, 200)
      setTimeout(() => clearInterval(ref), 5000)
    }
  }
}

</script>


<style lang="scss" scoped>
  .triggle-bar {
    cursor: pointer;
  }
  .content {
    height: 0;
    transition: all ease-in-out;
    overflow: hidden;
  }
</style>
