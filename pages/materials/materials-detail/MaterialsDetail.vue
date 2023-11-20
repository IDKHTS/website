<template>
  <div>
    <ViewModal :feats="keyFeat.feats ? keyFeat.feats : {}"
      :selectedIdx="selectedFeatIndex"
      v-if="keyFeat && !isMobile"
      v-show="isModalOpen"
      @onClose="onModal(false)"
      @onSelectPage="onSelectPage"
      />
    <div class="bg-bw-8">
      <div class="snmk-container">
        <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-offset-1 hero-tabs">
          <div class="text-wrapper">
            <div class="text-title big-title-2 bold-700 mt-2xl c-black">{{materialsDetailData.mainTitle}}</div>
            <div class="text-desc mt-l mb-2xl font-bw-2">{{materialsDetailData.mainDesc}}</div>
          </div>
          <div class="tabs-wrapper"  style="position: relative">
            <Tabs v-if="tabs.length > 1" :tabs="tabs" :selectedIdx="selectedTabsIndex" @onSelectTab="onSelectTab"/>
          </div>
          <div class="dispay-img">
            <img :src="material.imgSrc" :alt="material.mainTitle">
          </div>
        </div>
      </div>
    </div>


    <div class="" v-if="keyFeat">
      <div class="snmk-container">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 mb-3xl">
          <div class="title-1 font-bw-1 bold text-center mt-3xl mb-2xl">{{keyFeat.title}}</div>
          <div class="feat-wrapper">
            <div v-for="(item,index) of keyFeat.feats" :key="item.title" class="feat" @click="onModal(true);selectedFeatIndex=index">
              <div class="feat-img"><img :src="item.imgSrc" :alt="item.title"></div>
              <div>
                <div class="font-1 bold text-center font-bw-1 bold mt-l">{{item.title}}</div>
                <div class="font-2 text-center font-bw-2 mt-xs mb-xl">{{item.desc}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-bw-8 pt-3xl  case-display" v-if="canPrint">
      <div class="big-title-2 bold text-center font-bw-1 px-m">{{canPrint.title}}</div>
      <!-- <div class="snmk-container">
        <div class="snmk-col-5 snmk-col-l-5 snmk-col-offset-1 snmk-col-l-offset-1 g-card px-xl"> -->
          <CaseDisplay class="pt-2xl" :canPrint="canPrint"/>
        <!-- </div>
      </div> -->
    </div>

    <div class="my-3xl">
      <div class="snmk-container">
        <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 g-card px-xl">
            <div class="card-title title-1 mt-2xl mb-xl w-100 text-center font-bw-1 bold-700">{{params[0].title}}</div>
            <div v-for="item of params[0].keys" :key="item.value" class="params-col-wrapper w-100 mb-xl">
              <div class="key-col title-4 bold pr-xs">{{item.key}}</div>
              <div class="value-col title-4 font-bw-3 vertical-center">{{item.value}}</div>
            </div>
            <!-- <div>{{d}}</div> -->
        </div>
        <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 g-card px-xl">
            <div class="card-title title-1 mt-2xl mb-xl w-100 text-center font-bw-1 bold-700">{{params[1].title}}</div>
            <div class="horizontal-center mt-x mb-2xl">
              <div class="color-circle"
                :style="{
                  backgroundColor: color,
                  border: color.toUpperCase() === '#FFFFFF' ? '1px solid #D9D9D9': ''
                }"
                v-for="color of params[1].colors"
                :key="color + params[1].text"
              >
              </div>
            </div>
            <div class="mt-2x" style="margin-bottom: 6.354vw" >
              <Navigate class="snmk-primary-btn text-center" v-if="params[1].btn" :target="'_blank'"
                :route="params[1].btn.route" :aLink="params[1].btn.link" :id="params[1].btn.traceID">
                {{params[1].btn.text}}
              </Navigate>
            </div>
            <div>
              <img :src="params[1].imgSrc" :alt="params[1].text">
            </div>
        </div>
      </div>
    </div>


    <div  class="bg-bw-8 compatiable-section" >
      <div class="snmk-container">
        <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-offset-1 text-center title-1 font-bw-1 mt-3xl mb-2xl bold">
          {{compatible.title}}
        </div>
        <template v-if="compatible.machines.length > 1" >
          <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 w-card text-center" :class="{'snmk-col-offset-1 snmk-col-l-offset-1': index === 0}"
            v-for="(machine,index) of compatible.machines" :key="machine.name">
              <div>
                <div class="card-title title-2 mt-2xl font-bw-1 bold-700" v-html="machine.name"></div>
                <div class="mt-m bold-700 font-bw-1 title-4" v-if="machine.sologan" v-html="machine.sologan"></div>
                <div class="card-desc mt-m title-4">{{machine.desc}}</div>
              </div>
              <div class="card-img">
                <div class="mt-xl horizontal-center">
                  <Navigate class="snmk-primary-btn"
                    :route="machine.btn.route" :aLink="machine.btn.link" :id="machine.btn.traceID">
                    {{machine.btn.text}}
                  </Navigate>
                </div>
                <img class="mb-2xl" :src="machine.imgSrc" :alt="machine.name">
              </div>
          </div>
        </template>
        <template v-else>
          <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 s-card"
            v-for="(machine) of compatible.machines" :key="machine.name">
              <div class="card-img">
                <img :src="machine.imgSrc" :alt="machine.name">
              </div>
              <div class="card-text">
                <div class="card-title title-2 mt-2xl mb-m bold" v-html="machine.name"></div>
                <div class="card-desc title-4">{{machine.desc}}</div>
                <div class="my-xl">
                  <Navigate class="snmk-primary-btn"
                    :route="machine.btn.route" :aLink="machine.btn.link" :id="machine.btn.traceID">
                    {{machine.btn.text}}
                  </Navigate>
                </div>
              </div>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import { materialsHead } from '@@/resources/data/head'
import Tabs from './Tabs.vue'
import ViewModal from './ViewModal.vue'
import CaseDisplay from './CaseDisplay.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const route = useRoute()
const type = route.params.type
useHead(materialsHead(type?.toUpperCase()))

const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const materialsDetailData = computed(() => i18n.tm('materialsDetailData')?.find(v => v.type === type))
const tabs = computed(() => materialsDetailData.value?.tabs)
const selectedMaterialKey = ref('normal')
const material = computed(() => materialsDetailData.value[selectedMaterialKey.value])
const keyFeat = computed(() => material.value.keyFeat)
const canPrint = computed(() => material.value.canPrint)
const params = computed(() => material.value.params || [0, 1])
const compatible = computed(() => materialsDetailData.value.compatible)

const hoverIdx = ref(-1)
const hoverBtn = (index: number) => hoverIdx.value = index

const selectedFeatIndex = ref(0)
const onSelectPage = (index: number) => {
  if (index < 0) {
    index = keyFeat.value.feats.length - 1
  }
  if (index >= keyFeat.value.feats.length) {
    index = 0
  }
  selectedFeatIndex.value = index
}

const isModalOpen = ref(false)
const onModal = (v: boolean) => {
  if (isMobile.value) return
  isModalOpen.value = v
  if (isModalOpen.value) {
    document.documentElement.classList.add('body-no-scroll')
  // document.body.addEventListener('touchmove', function (e) { e.preventDefault() }, false)
  } else {
    document.documentElement.classList.remove('body-no-scroll')
  }
}

const selectedTabsIndex = ref(0)
const onSelectTab = (index: number, key: string) => {
  selectedTabsIndex.value = index
  selectedMaterialKey.value = key || 'normal'
  const path = `/materials/${type}/${key === 'normal' ? '' : key}`
  window.history.pushState({url: path, title: document.title}, document.title, path) // not to refresh component, which will scroll to top
}

const initCurrentTab = () => {
  const item = route.params.item || 'normal'

  if (item) {
    selectedMaterialKey.value = item as string
    for (let i = 0; i < tabs.value.length; i++) {
      if (tabs.value[i].key === selectedMaterialKey.value) {
        selectedTabsIndex.value = i
      }
    }
  } else {
    selectedMaterialKey.value = tabs.value && tabs.value[0] && tabs.value[0].key
    selectedTabsIndex.value = 0
  }

  if (selectedMaterialKey.value === 'normal' && process.browser) {
    const path = `/materials/${type}/${selectedMaterialKey.value === 'normal' ? '' : selectedMaterialKey.value}`
    history.pushState({url: path, title: document.title}, document.title, path) // not to refresh component, which will scroll to top
  }

}

onBeforeMount(() => {
  initCurrentTab()
})

watch(route, ()=> {
  initCurrentTab()
})


</script>

<style lang="scss" scoped>
.hero-tabs {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dispay-img{
  width: 23.854vw;
}

.feat-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.feat {
  cursor: pointer;
  width: calc((100% - 48px) / 3);
  margin-right: 24px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    .font-1, .font-2 {
      color: $blue;
    }
    .feat-img {
      border: 1px solid $blue;
    }
  }
}
.feat-img {
  line-height: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #F5F5F5;
}

.w-card , .g-card,.s-card {
  display: flex;
  align-items: center;
  border-radius: 8px;

}
.g-card {
  flex-direction: column;
  // justify-content: space-between;
  background: $black-white-8;
  // color: white;
}
.params-col-wrapper {
  display: flex;
}
.key-col {
  flex: 6 6;
}
.value-col {
  flex: 4 4;
}
.color-circle {
  width: 53px;
  height: 53px;
  margin-right: 12px;
  border-radius: 50%;

  &:last-child {
    margin-right: 0;
  }
}


.w-card {
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  padding: 0 3.645vw;
  .card-desc {
    color: #5b5b5b;
  }
  .card-img img{
    margin-top: 32px
  }
  :deep(.snmk-primary-btn):hover {
    color: white;
  }
}
.s-card {
  background: #FFFFFF;
  padding-right: 6.614vw;
  padding-left: 3.958vw;

  .card-img {
    margin-right: 6.25vw;
    width: 27.185vw;

    img{
      width: 100%;
    }
  }

  .card-text {
    flex: 1 1 0;
    .card-desc {
      color: #5b5b5b;
    }
  }
}
.compatiable-section {
  padding: 1.562vw 0 6.77vw;
}
@media (min-width: $breakPoint_m){
  .case-display {
    padding-right: 24px;
    padding-left: 24px;
  }
}

@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
  .dispay-img{
    width: 23.854vw;
  }
}

@media (max-width : $breakPoint_m) {
  .dispay-img{
    width: 60%;
  }
.color-circle {
  width: 24px;
  height: 24px;
  margin-right: 12px;

}

  .feat {
    width: 100%;
    margin-right: unset;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  .w-card:first-child {
    margin-top: 0;
  }
  .w-card,.g-card {
    margin-top: 16px;
  }
  .s-card {
    background: #FFFFFF;
    flex-direction: column-reverse;
    padding-right: 3.958vw;
    padding-left: 6.614vw;

    .card-img {
      margin-right: 6.25vw;
      width: 100%;

      img{
        width: 100%;
      }
    }
    .card-text {
      text-align: center;
    }
  }
  .compatiable-section {
    padding: 1.562vw 0 5.33 vw;
  }
}



</style>
