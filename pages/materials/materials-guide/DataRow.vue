<template>
  <div class="data-row" :style="{ width: rowWidth + 'px' }">
    <div class="data-item" v-for="(item, idx) of dataCol" :style="{ width: countWidth(idx, dataCol.length) }"
      :key="dataCol[0].name + dataHeads[idx].text"
      :class="{ 'first-item': idx === 0 && !isTableScrollLeft, 'first-data-item': idx === 0 }">
      <div class="display-flex w-100" style="position: relative" :class="{ 'flex-col': idx !== 0 }">
        <div v-if="idx === 0" class="head-col title-4 w-100">
          <div class="head-col-icon">
            <div @click="onTriggleChildren()" v-if="dataCol[0].children && dataCol[0].children.length >= 1"
              class="iconfont" style="font-size: 28px;" :class="{ 'hide': !isShowChildren }">&#xe7b2;</div>
          </div>
          <div class="flex-col vertical-center head-col-text text-center">
            <div class="bold-700">{{ item.name }}</div>
            <Navigate class="btn" :route="item.btn.route" :aLink="item.btn.link" :id="item.btn.traceID">
              {{ item.btn.text }}
            </Navigate>
          </div>
        </div>
        <div v-else-if="idx === 1" class="color-col p-xs">
          <div class="color-circle" :style="{ backgroundColor: color }" v-for="(color) of item" :key="color + dataCol[0]"
            :class="{ 'white-circle-border': color.toUpperCase() === '#FFFFFF' }"></div>
        </div>
        <div v-else class="text-center title-4 p-xs font-bw-2 title-4 bold" v-html="item"
          :style="{ 'font-size': idx === dataCol.length - 1 ? '14px' : '' }"></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'

const props = withDefaults(defineProps<{
  dataCol: any[]
  dataHeads: any[]
  isShowChildren?: boolean
  isTableScrollLeft?: boolean
  isTableScrollRight?: boolean
}>(), { dataCol: [''], dataHeads: [], isShowChildren: false, isTableScrollLeft: true, isTableScrollRight: false })

const rowWidth = computed(() => props.dataHeads.length * 152 + 56 + 68)
const countWidth = (idx: number, len: number) => {
  switch (idx) {
    case 0: {
      return '208px'
    }
    case len - 1: {
      return '220px'
    }
    default: {
      return '152px'
    }
  }
}

const emit = defineEmits(['triggleChildren'])
const onTriggleChildren = () => emit('triggleChildren')

</script>

<style lang="scss" scoped>

.first-item {
  position: sticky;
  left: 0;
  z-index: 1;
  background-color: white;

  &::after {
    content: '';
    width: 16px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    background: linear-gradient(270deg, rgba(220, 220, 220, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
}

.data-row {
  display: flex;
}

.head-col {
  display: flex;

  .head-col-icon {
    width: 44px;
    padding: 8px;
    padding-top: 16px;
    user-select: none;

    .iconfont {
      cursor: pointer;
      transition: 0.25s all ease;
    }

    .hide {
      transform: rotate(-90deg);
    }
  }

  .head-col-text {
    flex: 1 1 auto;
    padding: 16px 24px 8px 8px;
  }

  .btn a {
    display: block;
    font-size: 12px;
    line-height: 20px;
    padding: 12px 24px;
    text-decoration: underline;
    text-underline-offset: 6px;
    color: $blue;
  }
}

.data-item {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row-end-cover-wrapper {
  position: absolute;
  top: 0;
  height: 100%;
  pointer-events: none;

  .row-end-cover {
    position: absolute;
    right: 0;
    top: 0;
    width: 123px;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
  }
}

.color-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.color-circle {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 50%;

  &:last-child {
    margin-right: 0;
  }
}

.white-circle-border {
  border: 1px solid #979797;
}</style>
