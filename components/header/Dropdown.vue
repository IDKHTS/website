<!-- 
demo:
  <template>
    <Dropdown
      :data="{type：'demo-type'}"
      :activeType="activeType"
    >
      dropdown main content
    </Dropdown>
  </template>

  <script>
    export default {
      data: {
        activeType:''
      }
      methods: {
        openDropdown() {
          this.activeType = 'demo-type'
        },
        closeDropdown() {
          this.activeType = ''
        }
      }
    }
  </script>
 -->

<template>
  <div ref="currEl" class="dropdown" style="background-color: white" v-bind="$attrs">
    <div :class='{"snmk-container": withGrid}' class="w-100" ref="currContentEl">
      <div :class='{"snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1": withGrid}' class='content-wrapper'>
          <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { calcChildsHeight } from '@@/resources/js/calcHeight'
const props = withDefaults(defineProps<{
  data?: any
  reCalcHTrigger?: number
  activeType?: string
  withGrid?: boolean
}>(), { data: {}, reCalcHTrigger: 1, activeType: '', withGrid: true})
const { data, activeType, reCalcHTrigger } = toRefs(props)
const currEl = ref<HTMLDivElement | null>(null)
const currContentEl = ref(null)
const intervalRef = ref<any>(null)
const timerRef = ref<any>(null)

// activeType
watch(activeType, (newV, o) => {
  if(!currEl.value) return 
  if (newV === data.value.type) {
    currEl.value.style.height = calcChildsHeight(currContentEl.value) + 'px'
    currEl.value.style.borderTop = '1px solid #ebebeb'
  } else {
    currEl.value.style.height = `0`
    currEl.value.style.borderTop = 'none'
  }
}, {flush: 'post'})
// reCalcHTrigger
watch(reCalcHTrigger, (newV, old) => {
  clearInterval(intervalRef.value)
  clearTimeout(timerRef.value)
  intervalRef.value = setInterval(() => {
    if (data.value.type !== activeType.value || !currEl.value) return
    currEl.value.style.height = calcChildsHeight(currContentEl.value) + 'px'
  }, 200)
  timerRef.value = setTimeout(() => clearInterval(intervalRef.value), 5000)
}, {flush: 'post'})
</script>