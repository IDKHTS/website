<template>
  <div
    class="bar-burger burger"
    :class="{ 'is-active': isActive }"
    @click="onActive()"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      default: false
    }
  },
  data: function () {
    return {}
  },
  methods: {
    onActive () {
      this.$emit('toggleStatus')
    }
  }
}
</script>


<style lang="scss" scoped>
// editable
$width: 24px; // line's width
$space: 8px; // space between lines
$height: 2px; // line's weight

// not editable
$halfWidth: calc($width / 2);

.bar-burger {
  position: relative;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  width: 3.25rem;
  span {
    display: block;
    background-color: #4a4a4a;
    height: $height;
    left: calc(50% - #{$halfWidth});
    position: absolute;
    transform-origin: center;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    width: $width;
    &:first-child {
      top: calc(50% - #{calc($height / 2) + $space});
    }
    &:nth-child(2) {
      top: calc(50% - #{calc($height / 2)});
    }
    &:nth-child(3) {
      top: calc(50% + #{$space - calc($height / 2)});
    }
  }
}

.bar-burger.is-active {
  span:first-child {
    -webkit-transform: translateY($space) rotate(45deg);
    transform: translateY($space) rotate(45deg);
  }
  span:nth-child(2) {
    opacity: 0;
  }
  span:nth-child(3) {
    transform: translateY(-$space) rotate(-45deg);
  }
}
</style>
