<template>
  <div class="spec-container">
    <SubNavBar :isFixed="false" :isAlwaysShow="false" :dataSource="snapmakerATNavBar" :with-modal='true'></SubNavBar>

    <div class="bg-box">
      <div class="snmk-container spec-content">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 main-content">
          <div class="page-title">{{atSpec.title}}<hr></div>

          <div class="select-wrapper" :style="{top: isHeaderShow ? headerCompHeight : '0'}">
            <div class="select-wrapper-item">
              <div class="select-item">
                <Select :options="leftSectionsOption.map(v=>v.name)" @onSelected="onSelected('left', $event)"/>
              </div>
            </div>
            <div class="select-wrapper-item">
              <div class="select-item">
                <Select :options="rightSectionsOption.map(v=>v.name)" @onSelected="onSelected('right', $event)"/>
              </div>
            </div>
          </div>

          <div class="machine-img-wrapper" >
            <div class="machin-img">
              <img :src="isMobile? leftMachine.imgSrc: leftMachine.mobImgSrc" :alt="leftMachine.title">
            </div>
            <div class="machin-img">
              <img :src="isMobile? rightMachine.imgSrc: rightMachine.mobImgSrc" :alt="rightMachine.title">
            </div>
          </div>

          <div class="main-wrapper">
            <div class="main-item">
              <div class="main-title">{{atSpec.dimensionTitle}}</div>
              <hr style="margin-bottom: 0; margin-top: 8px">
              <div class="col-container">
                <div class="col-item">
                  <div class="section-item">
                    <div class="section-value">{{leftMachine.Dimensions}}</div>
                  </div>
                </div>
                <div class="col-item">
                  <div class="section-item">
                    <div class="section-value">{{rightMachine.Dimensions}}</div>
                  </div>
                </div>
              </div>
            </div>

            <div v-for="(title, index) of secionsTitle" :key="title" class="main-item">
              <div class="main-title">{{title}}</div>

              <hr style="margin-bottom: 0; margin-top: 8px">

              <div class="col-container">
                <div v-for="(section, idx) of sectionData[index]" :key="idx === 0? 'left' + idx : 'right' + idx" class="col-item">
                  <div v-for="(item, i) of section" :key="item.value || i" class="section-item">
                    <template v-if="item.value">
                      <div class="section-title">{{item.title}}</div>
                      <div class="section-value">{{item.value}}</div>
                    </template>
                    <template v-else>
                      <div class="h-100">————</div>
                    </template>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SubNavBar from '@@/components/SubNavBar.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import Select from './Select.vue'
import head from '@@/resources/data/head'
import configuration from '@@/resources/data/configuration'

useHead(head.snapmaker2)
const { isMobile, isHeaderShow } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const snapmakerATNavBar = computed(() => i18n.tm('secondarynavbarData').snapmakerAT)
const atSpec = computed(() => i18n.tm('specData').snapmakerAT)
const headerCompHeight = configuration.headerCompHeight

const leftSectionsOption = computed(()=>{
  const {A350T, A250T} = atSpec.value.machines
  return [A350T, A250T]
})
const rightSectionsOption = computed(()=>{
  const {F350, F250} = atSpec.value.machines
  return [F350, F250]
})
const secionsTitle = computed(()=>{
  // dimensionTitle,
  const {workAreaTitle, generalTitle, PrintingTitle, LaseTitle, CNCTitle} = atSpec.value
  return [workAreaTitle, generalTitle, PrintingTitle, LaseTitle, CNCTitle]
})
const leftMachine = ref(atSpec.value.machines.A350T)
const rightMachine = ref(atSpec.value.machines.F350)
const sectionData = computed(() => {
  const {workArea: leftWA, general: leftG, printing: leftP, laser: leftL, cnc: leftC} = leftMachine.value
  const {workArea: rightWA, general: rightG, printing: rightP, laser: righttL, cnc: rightC} = rightMachine.value
  return [
    [leftWA, rightWA],
    [leftG, rightG],
    [leftP, rightP],
    [leftL, righttL],
    [leftC, rightC]
  ]
})


const showBuyModal = ref(false) 
const onBuyModal = () => showBuyModal.value = !showBuyModal.value
const onSelected = (side: string, option: string) => {
  if (side === 'left') {
    leftMachine.value = leftSectionsOption.value.find(v => v.name === option)
  }
  if (side === 'right') {
    rightMachine.value = rightSectionsOption.value.find(v => v.name === option)
  }
}
</script>


<style lang="scss" scoped>
$col-width: 22.979vw;

hr {
  background-color: #DCDCDC;
  height: 1px;
}
.spec-content {
  margin-top: 32px;
  padding-bottom: 7.29vw
}

.spec-container {
  background-color: #F5F5F7;
  // padding-top: 1.356vw;
}
.main-content {
  border-radius: 8px;
  background-color: white;
  padding: 3.33vw 2.5vw 9.583vw;
}
.page-title {
  margin-bottom: 2.5vw;
  font-weight: 700;
  font-size: 1.666vw;
  line-height: 2.08vw;
  color: #1F1F1F;
}

.select-wrapper {
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  margin: 0 4.427vw 0;
  padding-top: 4px;
  justify-content: space-between;
  transition: all 0.25s;
  margin-bottom: calc((16px + 1em) * 2);

  .select-wrapper-item {
    width: $col-width;
  }

  .select-item {
    max-width: 466px;
    display: flex;
    justify-content: center;
  }
}

.machine-img-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 4.583vw 4.427vw 3.333vw;

  .machin-img {
    width: $col-width;
  }
}
.main-item{
  margin-bottom: 64px;
}
.main-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  letter-spacing: -0.24px;

  color: #1F1F1F;
}

.main-wrapper {
  margin: 0 4.427vw;
}
.col-container {
  display: flex;
  justify-content: space-between;
}
.col-item {
  width: $col-width;
}
.section-item {
  display: flex;
  min-height: 72px;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
}
.section-title {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */


  color: #999999;
}
.section-value {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin-top: 8px;
  /* identical to box height, or 133% */


  /* 详情页标题黑 */

  color: #1F1F1F;
}


@include mobile {
  $col-width: calc(100% / 2);
  .bg-box{
    background-color: white;
  }
  .spec-container {
    padding-bottom: 20vw
  }
  .page-title {
    margin: 0;
    font-size: 4.2666vw;
    line-height: 5.333vw;
  }
  .spec-content {
    margin-top: 32px;
    padding-bottom: unset;
    // padding-bottom: 7.29vw
  }
  .select-wrapper{
    padding-top: 8px;
    // padding: 8px 10.88vw 0;
    background: rgba(255, 255, 255, 0.95);
    margin: 0;
    position: sticky;
    top: 0;
    transition: all 0.25s;
    margin-bottom: calc((16px + 1em) * 3);
  }
  .machine-img-wrapper {
    margin-right: 0;
    margin-left: 0;
  }
  .select-wrapper .select-wrapper-item {
    width: $col-width;
  }
  .machine-img-wrapper .machin-img, .col-item{
    width: $col-width;
  }
  .main-content {
    padding-right: 0;
    padding-left: 0;
  }
  .main-wrapper {
    margin-right: 0;
    margin-left: 0;
  }
  .main-item{
    margin-bottom: 8.533vw;
  }
  .main-title {
    font-size: 4.8vw;
    line-height: 5.866vw;
    // font-size: 36px;
    // line-height: 44px;
  }
  .section-item{
    min-height: 11.2vw;
    margin-top: 6.4vw;
    // margin-top: 5.333vw;
  }
  .section-title {
    // font-size: 24px;
    // line-height: 32px;
    font-size: 3.2vw;
    line-height: 4.2666vw;
  }
  .section-value {
    font-size: 3.733vw;
    line-height: 4.8vw;
    margin-top: 2.133vw;
    // font-size: 28px;
    // line-height: 36px;
  }
}



  @media (min-width: $breakPoint_s) {
    .logo-icon {
      position: relative;
      font-size: 32px;
      max-width: 182px;
      width: 100%;
      color: white;
      top: -7px;
    }
  }

</style>
