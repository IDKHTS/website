
<template  >
  <div class="loading-wrapper" v-if="isLoading">
    <div class="loading-container">
      <div class="loading-inner"></div>
    </div>
    <div class="loading">
      <span class="iconfont logo-icon">&#xe618;</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
const props = withDefaults(defineProps<{
  isLoading?: boolean
}>(), { isLoading: false })
</script>


<style scoped lang='scss'>
.loading-wrapper{
  $len: 34.35vh;
  @include mobile { $len: 30.53vh; }
  $bg-c: black;
  $bw: 5px;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  position: fixed;
  background-color: $bg-c;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  .loading-container {
    position: relative;
    width: $len;
    height: $len;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $bg-c;
    // border: 5px white solid;
    border-radius: 50%;
    border-bottom-color: transparent;
    border-right-color: transparent;
    background-image: linear-gradient(to right, rgba(144, 144, 144, 1),rgba(92, 92, 92, 0));

    animation-name: loading;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    background-origin: border-box;
  }
  .loading-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(#{$len} - #{$bw});
    height: calc(#{$len} - #{$bw});
    transform: translate(-50%, -50%);
    background-color: $bg-c;
    box-sizing: border-box;
    border-radius: 50%;

  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto 0;
    text-align: center;
    color: $black-white-5;
    font-size: 36px;
  }
  @include mobile {
    .loading {
      font-size: 22px;
    }
  }
}

@keyframes loading {
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
