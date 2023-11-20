<template>
  <div >
    <div v-if="isMobile" @click="onSelect" class="select-btn">
        {{tabs[selectedIdx].text}}
        <span class="iconfont icon-dropdown">&#xe7b2;</span>
      </div>
    <div v-if="isMobile" v-show="isOpen"  class="tabs-wrapper">
      <template v-for="(tab,idx) of tabs">
        <div  @click="selectTab(idx, tab.key)"
        v-if="idx !== selectedIdx"
        :key="tab.key" class="tab font-1 bold-700"
        :class="{'tab-active': idx == selectedIdx}">
          {{tab.text}}
        </div>
      </template>
    </div>
    <div class="tabs-wrapper" v-if="!isMobile">
      <div v-for="(tab,idx) of tabs" @click="selectTab(idx, tab.key)"
      :key="tab.key" class="tab font-1 bold-700"
      :class="{'tab-active': idx == selectedIdx}">
        {{tab.text}}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  tabs: any
  selectedIdx?: number
}>(), { tabs: [], selectedIdx: 0 })
const { isMobile } = storeToRefs(useGlobalStore())
const emit = defineEmits(['onSelectTab'])
const isOpen = ref(false)
const selectTab = (index: number, key: string) => {
  if (isMobile.value) {
    isOpen.value = false
  }
  // this.selectedIdx = index
  emit('onSelectTab', index, key)
}
const onSelect = () => {
  isOpen.value = !isOpen.value
}


</script>

<style lang="scss" scoped>
.tabs-wrapper {
  display: flex;
  background-color: white;
  border-radius: $radius;
}

.tab, .tab-active  {
  display: inline-block;
  position: relative;
  min-width: 9em;
  padding: 1em 2em;
  border: none;
  cursor: pointer;
  border-radius: $radius;
}
.tab {
  background-color: white;
}
.tab-active {
  background-color: $blue;
  color: white;
  border-radius: $radius;

  a {
    color: inherit;

    &:hover{ color: inherit;}
  }
}

.icon-dropdown {
  float: right;
  transition: all 0.2s ease-in-out;
}

.select-btn {
  text-align: left;
  width: 100%;
  display: inline-block;
  position: relative;
  min-width: 9em;
  padding: 8px 32px;
  border: none;
  cursor: pointer;
  border-radius: $radius;
  background-color: $blue;
  color: $black-white-8
}

@include mobile {
  .tabs-wrapper {
    position: absolute;
    width: 260px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    margin-top: 12px;
    border-radius: 8px;

  }

}

</style>
