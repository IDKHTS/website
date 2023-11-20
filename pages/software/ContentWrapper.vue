<template>
  <div v-bind="$attrs" class="wrapper">
    <div class="title-1 pt-3xl bold" style="color: white">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
defineProps<{
  title: string
}>()

</script>


<style lang="scss" scoped>
.wrapper {
  background-color:  #151617;
  text-align: center;
}
</style>
