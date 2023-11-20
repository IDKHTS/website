<template>
  <div class="pos-relative">
    <div class="hero-img text-center">
      <img :src="materialGuideData.imgSrc" alt="">
      <div class="hero-text-wrapper horizontal-center w-100">
        <div class="hero-text" v-if="!isMobile">
          <div class="big-title-2 mb-m bold-700" style="color: white">{{materialGuideData.mainTitle}}</div>
          <div class="font-2 font-bw-5">{{materialGuideData.desc}}</div>
        </div>
        <div class="snmk-container" v-if="isMobile">
          <div class="snmk-col-12 snmk-col-l-12 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 ">
            <div class="hero-text">
              <div class="big-title-2 mb-m bold-700" style="color: white">{{materialGuideData.mainTitle}}</div>
              <div class="font-2 font-bw-5">{{materialGuideData.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template v-if="!isMobile">
      <div class="snmk-container mt-xl pos-relative">
        <div ref="tableEl" @scroll="handleTableScroll()" class="table-container snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="head-row" :style="{width: rowWidth+'px'}">
            <div class="data-item title-4 bold-700 text-center py-l"
              v-for="(head, index) of dataHeads" :key="head.text"
              :style="{width: countWidth(index, dataHeads.length)}"
              :class="{'first-item': index === 0 && !isTableScrollLeft}"
            >
              {{head.text}}
            </div>
          </div>
          <DataRow
            v-for="(dataCol, i) of dataSource"
            :key="dataCol[0].name"
            :dataCol="dataCol"
            :dataHeads="dataHeads"
            :isTableScrollRight="isTableScrollRight"
            :isTableScrollLeft="isTableScrollLeft"
            :isShowChildren="paramsData[i].isOpen"
            @triggleChildren="onTriggleChildren(i)"
          >
            <template  v-if="dataCol[0].children && dataCol[0].children.length >= 1">
              <transition-group name="slide-fade">
                <DataRow
                  v-show="paramsData[i].isOpen"
                  class="children-row"
                  v-for="(dataChildCol) of dataCol[0].children"
                  :key="dataChildCol[0] && dataChildCol[0].name"
                  :dataCol="dataChildCol"
                  :dataHeads="dataHeads"
                  :isTableScrollRight="isTableScrollRight"
                  :isTableScrollLeft="isTableScrollLeft"
                />
              </transition-group>
            </template>
          </DataRow>
        </div>
        <div class="row-end-cover-wrapper snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div :class="{'row-end-cover':  !isTableScrollRight}"></div>
        </div>
      </div>
    </template>

    <div :class="{'mb-3xl': !isMobile}"></div>

    <template v-if="isMobile">
      <div class="pos-relative"  v-for="(pairMaterials, pairIndex) of dataSourceMob" :key="pairIndex">
        <div class="data-wrapper"
          :class="{ 'col-sticky': item.head === `Materials`, 'col-shadow': scrollController[pairIndex]}"
          :style="{top: isHeaderShow ? '60px' : '0' }"
          v-for="(item, index) of pairMaterials" :key="item.head +index"
        >
          <div class="snmk-container w-100" style="position: relative">
            <div :style="{'background-color' : index%2 == 1 ? '#F6F5F5' : 'white'}" class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-s-4 snmk-col-xs-4 col-bg"></div>
            <div v-if="item.head !== `Materials`" class="snmk-col-2 snmk-col-l-2 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-s-4 snmk-col-xs-4 title-4 bold py-xl pl-l head-col">
              {{item.head}}
            </div>
            <template v-if="item.head === `Materials`">
              <div class="snmk-col-2 snmk-col-l-2 snmk-col-s-2 snmk-col-xs-2 text-center title-4 name-col py-xl"
                v-for="(param, i) of item.data" :key="param + i"
              >
                <div class="flex-col head-col-text text-center ">
                  <div class="bold-700">{{param.name}}</div>
                  <Navigate class="btn mt-l" :route="param.btn.route" :aLink="param.btn.link" :id="param.btn.traceID">
                    {{param.btn.text}}
                  </Navigate>
                </div>
              </div>
            </template>
            <template v-else-if="item.head === `Colors Available`">
              <div class="snmk-col-2 snmk-col-l-2 snmk-col-s-2 snmk-col-xs-2 color-col material-col py-xl"  v-for="(param, i) of item.data" :key="param+i" >
                <div class="color-circle" :style="{backgroundColor: color}"  v-for="(color, idx) of param" :key="color + idx" ></div>
              </div>
            </template>
            <template v-else>
              <div class="snmk-col-2 snmk-col-l-2 snmk-col-s-2 snmk-col-xs-2 text-center font-bw-1 font-1 bold material-col py-xl px-l"
                v-for="(param, idx) of item.data" :key="param + idx"
                v-html="param"
              >
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import DataRow from '@@/pages/materials/materials-guide/DataRow.vue'
import head from '@@/resources/data/head'
import _ from 'lodash'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

useHead(head.materialGuide)
const { isMobile, isHeaderShow } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const materialGuideData = computed<any>(() => i18n.tm('materialGuideData'))
const paramsData = computed(() => materialGuideData.value.materialsParams)
const btns = computed(() => paramsData.value.map((v:any) =>v.btn))
const dataHeads = computed(() => materialGuideData.value.materialGuideTiles)
const rowWidth = computed(()=> dataHeads.value.length * 152 + 56 + 68)
const dataSource = computed(() => {
  // object transform to array, then use v-for render table-row.
  // in here is transform. Note that children only need once
  // transform (if not,children {} => [], data change, children will be transformed
  // again, it will [] => [] and throw err)
  const titles = dataHeads.value
  const params = paramsData.value.map((curr: any) => {
    const children = curr.materials.children
    if (children && children.length > 0) {
      curr.materials.children = children.map(materials => Array.isArray(materials) ? materials : titles.map(title => materials[title.key] || '-'))
    }
    return curr
  })
  const result = params.map(materials => titles.map(title => materials[title.key] || '-'))
  return result
})
const dataSourceMob = computed(() => {
      const titles = materialGuideData.value.materialGuideTiles
      // flat all parent or children in a Array
      // [{ materials: { children: [] } }, { materials: { children: [] } } , ...]
      // ===> [{ materials: { } }, ...children,  { materials: { } }, ...children, ...]
      const allParams = paramsData.value.reduce((pre: any, curr: any) => {
        const children = curr.materials.children
        let result = pre.concat(curr)
        if (children && children.length > 0) {
          result = result.concat(children)
        }
        return result
      }, [])

      // two element be a group
      // [obj1, obj2, obj3, obj4]
      // ===> [ [obj1, obj2], [obj3, obj4], ...]
      const pairParams = allParams.reduce((pre: any, curr: any) => {
        if (pre[pre.length - 1].length < 2) {
          pre[pre.length - 1].push(curr)
        } else {
          pre.push([curr])
        }
        return pre
      }, [[]])

      // transform as UI data form
      const transformKeyValArr = param => titles.map(title => ({ head: title.text, data: param.map(v => v[title.key] || `—`) }))
      const reulst = pairParams.map(transformKeyValArr)
      return reulst
})

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

const tableEl = ref(null)
const isTableScrollLeft = ref(true)
const isTableScrollRight = ref(false)
const handleTableScroll = () => {
  if (!tableEl.value) return
  if (tableEl.value.scrollLeft === 0) {
    isTableScrollLeft.value = true
  } else if (tableEl.value.scrollLeft + tableEl.value.clientWidth >= tableEl.value.scrollWidth - 80) {
    isTableScrollRight.value = true
  } else {
    isTableScrollLeft.value = false
    isTableScrollRight.value = false
  }
}
const onTriggleChildren = (index: number) => {
  paramsData.value[index].isOpen = !paramsData.value[index].isOpen
}


const scrollController = ref([false, false, false, false, false])
onMounted(() => {
    const elements = document.querySelectorAll('.col-sticky')
    const len = elements.length
    const vue = this
    window.addEventListener('scroll', _.throttle(function () {
      for (let i = 0; i < len; i++) {
        const curr = elements[i]
        scrollController.value[i] = curr.offsetTop !== 0
        // if (curr.offsetTop !== 0) {
        //   vue.$set(vue.scrollController, i, true)
        // } else {
        //   vue.$set(vue.scrollController, i, false)
        // }
      }
    }, 300))
})



</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;//cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

.hero-img {
  height: 25.8333vw;
  width: 100%;
  position: relative;
  background-position: center center;
  background-size: 2560px 496px;
  overflow: hidden;
  img {
    height: 100%;
    width: auto;
    max-width: unset;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .hero-text-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .hero-text {
    width: 44.329vw;
  }
}



.table-container {
  display: flex;
  flex-direction: column;
  position: relative;
  .head-row {
    $head-row-bg: #F6F5F5;
    display: flex;
    background: $head-row-bg;
    .first-item { background: $head-row-bg; }
    .data-item { background: $head-row-bg; }
  }
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

  .data-row{
    display: flex;
    flex-wrap: wrap;
  }
  .data-item {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .children-row {
    background: rgba(12, 99, 226, 0.05);
    &::v-deep .first-item { background-color: rgb(243, 247, 254);}
  }

  &::-webkit-scrollbar {
    // display: none;
    width: 9px;
    height: 9px;
  }
  &::-webkit-scrollbar-track {
      border-radius: 3px;
      background: rgba(0,0,0,0.06);
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
  }
  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0,0,0,0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);

    &:hover {
      background: rgba(0,0,0,0.32);
    }
  }

}

.data-wrapper {
  display: flex;
}

.col-bg {
  position: absolute;
  height: 100%;
}
.material-col, .head-col {
  z-index: 1;
}
.head-col {
  color: #131313;
}
.material-col {
  color: $black_white-2;
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

@include mobile {
  .hero-img {
    height: 112vw;
    .hero-text {
      width: unset;
    }
  }

  .col-sticky {
    position: sticky;
    top: 0;
    transition: all .2s ease-in-out;
  }
  .col-shadow {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  }
  .data-wrapper {
    overflow: hidden;
    z-index: 8;
  }
  .col-bg {
    width: 200vw;
    left: -50%;
  }
  .head-col {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 24px 0;
    color: $black_white-2;
  }
  .name-col {
    position: relative;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.24px;

    color: $black-white-1;
  }
  .head-col-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0;

    a {
      font-size: 12px;
      text-decoration: underline;
      text-underline-offset: 6px;
      color: $blue;
    }
  }
  .material-col {
    padding: 0 0 24px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.24px;
    color: $black_white-1;
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
  }
}

</style>
