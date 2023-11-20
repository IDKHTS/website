<template>
  <div>
    <div class="checkout-nav-bar-wrapper">
      <div v-for="(item, index) of options.displays" :key="item.text" @click="selectIndex(index)"
      class="checkout-nav-bar"
      :class="{'checkout-nav-active-bar': index === currDisplayIdx}"
      >
      </div>
    </div>
    <div class="ml-l display-block">
      <div v-for="(item, index) of options.displays" :key="item.text" @click="selectIndex(index)"
      class="mt-m checkout-nav title-4"
      :class="{'checkout-nav-active bold-700': index === currDisplayIdx}"
      >
        <!-- {{item.text}} 'nav-bar-desc'+index-->
        {{item.text}}
        <div v-if='isListWithDesc' class="title-4 sf-desc mt-m" :ref="(el) => mapRef(el, index)" v-html='item.desc'></div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import $ from '@@/resources/js/jquery-vendor'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const props = withDefaults(defineProps<{
  currDisplayIdx?: number
  options?: any
  autoPlay?: boolean
  isListWithDesc?: boolean
}>(), {
  currDisplayIdx: 0,
  options: () =>({}),
  autoPlay: false,
  isListWithDesc: false
})

const emit = defineEmits(['selectIndex'])
const { isMobile } = storeToRefs(useGlobalStore())
const refTimer = ref(null)
const selectIndex = (index: number) => {
  emit('selectIndex', index)
  if (!props.autoPlay) return
  clearTimeout(refTimer.value)
  const displays = props.options.displays
  refTimer.value = setTimeout(() => {
    selectIndex(index === displays.length - 1 ? 0 : index + 1)
  }, 5 * 1000)
}

const descRefs = ref<(Element | ComponentPublicInstance | null)[]>([])  
const mapRef = (el: Element | ComponentPublicInstance | null, index: number) => descRefs.value[index] = el
watch(() => props.currDisplayIdx, (newV: number, oldV: number) => {
  if (isMobile.value || typeof newV === 'undefined' || newV === oldV) return
  $(descRefs.value[oldV]).stop(true).slideUp('slow')
  $(descRefs.value[newV]).stop(true).slideDown('slow')
  // $(this.$refs['nav-bar-desc' + oldV]).stop(true).slideUp('slow')
  // $(this.$refs['nav-bar-desc' + newV]).stop(true).slideDown('slow')
})
</script>


<style scoped lang="scss">
//@import '../theme.scss';
//@import '../../../scss/theme/variables.scss';


.sf-desc {
  display: none;
  color: var(--white, #C2C2C2);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.24px;
  transition: all 0.5 ease-in-out;
  overflow: hidden;


  @include mobile {
    color: white;
    display: block;
    margin-top: 16px;
    text-align: center;
  }
}
.checkout-nav:first-child .sf-desc{
  display: block;
}

@include mobile{
  .checkout-nav-wrapper {
    flex-wrap: wrap;
    justify-content: center;

    .checkout-nav {
      margin-left: 16px;

      &:first-child {margin-left: 0;}
    }
  }

}

</style>
