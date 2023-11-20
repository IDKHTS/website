<template>
  <div class="bg-black-2 py-3xl" id="notes">
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 font-bw-4">
        <div class="" v-html="dataSrc.title"></div>
        <p class="mt-xs" v-for="item of dataSrc.notes" v-html="item" :key="item"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
</script>


<style scoped lang="scss">
@import '../theme.scss';

#notes {
  background-color: $black;
}


</style>

