<template>
  <div class='contest-gallery'>
    <div class='gallery-container'>
      <div class='cg-col' v-for='(col, index) in displayList' :key='index + "col"'>
        <div class='cg-item' v-for='item in col' :key='item.name'>
          <NuxtImg class='cg-img' :src="item.imgSrc" :alt="item.name" loading='lazy' />
          <div class='cg-msg'>
            <div class='cg-name'>{{ item.name }}</div>
            <div class='cg-author'>by {{ item.author }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class='snmk-container'>
      <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 gallery-container'>

      </div>
    </div> -->
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
    dataSrc: any[]
}>(), { dataSrc: [] })
const { isMobile } = storeToRefs(useGlobalStore())

const displayList = computed(() => {
  if (isMobile.value) return [props.dataSrc]
  const res: any[] = []
  const colCount = 3
  props.dataSrc.reduce((result: any[], value: any, index: number) => {
    const groupIndex = index % colCount
    if (!result[groupIndex]) {
      result[groupIndex] = []
    }
    result[groupIndex].push(value)
    return result
  }, res)
  return res
})

</script>

<style scoped lang='scss'>
.contest-gallery {
  background: rgba(243,246,249, 1) !important;
  padding: 15px;

}
.gallery-container {
  max-width: 1152px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  $colCount: 3;
  .cg-col {
    width: calc((100% - 26px * #{$colCount - 1}) / #{$colCount}) ;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .cg-item {
    border-radius: 6px;
    border: 2px sold #f2f4f6;
    margin-top: 26px;
    background-color: white;
    overflow: hidden;
  }

  .cg-img {
    // border-radius: 6px;
    width: 100%;
  }

  .cg-msg {
    padding: 13px;
    background-color: white;
  }

  .cg-name {
    color: #32383d;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .cg-author {
    color: #a3afb8;
    font-size: 12px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @include mobile {
    $colCount: 1;
    .cg-col {
      width: calc((100% - 26px * #{$colCount - 1}) / #{$colCount}) ;
    }
  }

}


</style>
