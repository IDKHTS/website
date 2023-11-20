<template>
  <div class="mb-xl checkout-nav-wrapper" v-if="isMobile">
    <div class="checkout-nav-text title-3 mb-l" v-if='withTitle'>{{currDisplay.text}}</div>
    <div class="horizontal-center w-100">
      <div v-for="(item, index) of options.displays" :key="item.text" @click="selectIndex(index)"
      class="checkout-nav title-4"
      :class="{'checkout-nav-active bold-700': index === currDisplayIdx, 'ml-0': index === 0}"
      :style="{
        width: options.displays.length > 2 ? 'unset' : '50%'
      }"
      >
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
const props = withDefaults(defineProps<{
  currDisplayIdx?: number
  options?: any
  autoPlay?: boolean
  isListWithDesc?: boolean
  withTitle?: boolean
}>(), {
  currDisplayIdx: 0,
  options: () =>({}),
  withTitle: true,
})
const { isMobile } = storeToRefs(useGlobalStore())
const emit = defineEmits(['selectIndex'])
const selectIndex = (index: number) => emit('selectIndex', index)
const currDisplay = computed(() => props.options.displays[props.currDisplayIdx])


</script>


<style scoped lang="scss">
// @import '../theme.scss';
// @import '../../../scss/theme/variables.scss';

@include mobile{
  .checkout-nav-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 24px;

    .checkout-nav {
      margin-left: 16px;

      &:first-child {margin-left: 0;}
    }
    .ml-0 {
      margin-left: 0;
    }
  }

}

</style>
