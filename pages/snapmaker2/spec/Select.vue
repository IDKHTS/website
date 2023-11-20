<template>
  <div class="select-container" @click.stop>
    <div class="selected-item" @click="onOpenSelectOption">
      {{selectedOption}}
      <span class="iconfont bold-700">&#xe7b2;</span>
    </div>
    <div class="select-other-options" v-if="isSelect" data-aos="fade-down" data-aos-duration="1000">
      <div class="select-option" v-for="item of otherOption" :key="item" @click="onSelect(item)" > {{item}} </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import AOS from 'aos'
if(process.client) {
  AOS.init()
}
const props = defineProps<{ options: any[] }>()

const selectedOption = ref(props.options && props.options[0])
const isSelect = ref(false)
const emit = defineEmits(['onSelected'])
const otherOption = computed(() => {
  const idx = props.options.indexOf(selectedOption.value)
  if (idx === -1) {
    console.error(`not exist options: ${selectedOption.value}`)
    return props.options
  }
  console.log(idx)
  return props.options.filter(v => v !== selectedOption.value)
})
const onOpenSelectOption = () => {
  console.log('select options',isSelect.value )
  isSelect.value = !isSelect.value
}
const onSelect = (value: any) => {
  selectedOption.value = value
  emit('onSelected', value)
}
const onClose = () => {
  isSelect.value = false
}

onMounted(() => window.addEventListener('click', onClose))
onBeforeMount(() => window.addEventListener('click', onClose))
</script>

<style lang="scss" scoped>
.iconfont {
  float: right;
}
.select-container {
  border-radius: 8px;
  width: 175px;
  color: #1F1F1F;
  position: relative;
}

.selected-item, .select-other-options{
  border-radius: 8px;
  padding: 0 16px;
}

.selected-item {
  background-color: $blue;
  margin-bottom: 8px;
  color: white;
  padding: 16px;
  cursor: pointer;
}
.select-other-options {
  background: white;
  border: 1px solid black;
  position: absolute;
  width: 100%;
}
.select-option {
  cursor: pointer;
  padding: 16px 0;
  border-top: 1px solid black;

  &:first-child {
    border-top: unset;
  }
}
@include mobile {
  .select-container {
    width: unset;
    // min-width: 175px;
  }
  .select-container {
    border-radius: 4px;
    min-width: 23.33vw;
  }
  .selected-item, .select-other-options{
    border-radius: 4px;
    padding: 0 8px;
  }
  .selected-item, .select-option {
    padding: 8px;
  }
}


</style>
