<template>
  <div>
    <div class="hero-container" :style="{'background-image': `url('${topImg}')`}">
      <div class="snmk-container h-100">
        <div class="snmk-col-offset-4 snmk-col-l-offset-4 snmk-col-m-offset-2 snmk-col-4 snmk-col-l-4 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 h-100">
          <div class="hero-title c-black title-1 bold-700 text-center" v-html="userCaseData.title"></div>
        </div>
      </div>

      <div class="tabs-container" v-if="!isMobile">
        <div class="tab px-2xl py-l" v-for="option of showCasesOptions" :key="option" @click="selectTab(option)" :class="{'tab-active': option === selectedTab}">
          {{option}}
        </div>
      </div>
    </div>

    <div class="snmk-container">
      <div class="snmk-col-s-4 snmk-col-xs-4">
        <div class="tabs-container mt-l" v-if="isMobile">
          <div class="tab pb-m mr-m" v-for="option of showCasesOptions" :key="option" @click="selectTab(option)" :class="{'tab-active': option === selectedTab}">
            {{option}}
          </div>
        </div>
      </div>
    </div>

    <div class="snmk-container">
      <div class="snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 case-wrapper mt-2xl mb-3xl">
        <div v-for="meta of showCases[selectedTab]" :key="meta.title" class="case-container text-center mb-xl" >
          <NuxtImg style="width: 100%" :src="meta.imgSrc" alt=""  srcset='' loading="lazy" />
          <div class="font-1 font-bw-1 mt-l">{{meta.title}}</div>
          <div class="font-2 font-bw-3">{{meta.author}}</div>
        </div>
        <i class="case-container"></i>
        <i class="case-container"></i>
        <i class="case-container"></i>
        <i class="case-container"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import head from '@@/resources/data/head'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

useHead(head.community)
const selectedTab = ref('3D Printing')

const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const userCaseData = computed<any>(() => i18n.tm('userCaseData'))
const topImg = computed(() => isMobile.value ? userCaseData.value.topImg : userCaseData.value.topMobileImg)
const showCasesOptions = computed(() => {
  let options:any[] = []
  userCaseData.value.showcaseMetas.forEach((showcase: any) => {
    if (!options.find(v => v === showcase.tag)) {
      options.push(showcase.tag)
    }
  })
  return options
})
const showCases = computed(() => {
  const result: any = {}
  showCasesOptions.value.forEach(option => {
    result[option] = userCaseData.value.showcaseMetas.filter((v: any) => v.tag === option)
  })
  return result
})

const selectTab = (tab: string) => selectedTab.value = tab
const route = useRoute()
onMounted(() => {
    if (!route.query.type) return
    const typeParams = route.query.type.replace('-', ' ')
    if (!showCasesOptions.value.indexOf(typeParams)) return
    selectedTab.value = typeParams
})

</script>

<style lang="scss" scoped>

.hero-container {
  position: relative;
  height: 360px;
  width: 100%;

  background-size: 2560px 360px;
  background-position: center center;
}
.hero-title {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 100%;
  // height: 100%;
  display: flex;
  align-items: center;
}

@include no-mobile {
  .hero-title {
    margin-top: 70px;
  }
  .tabs-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;

    display: flex;
    line-height: auto;

    background: #D6D6D6;
    border-radius: 8px 8px 0px 0px;
  }
  .tab {
    position: relative;
    cursor: pointer;
    min-width: 132px;
    padding: 1.25vw 40px;
    box-sizing: content-box;
    text-align: center;
    color: white;

    &:hover {
      background: linear-gradient(0deg, rgba(12, 99, 226, 0.4), rgba(12, 99, 226, 0.4)), #D6D6D6;

    }
    &:hover::before, &:hover::after {
      width: 0;
    }

    &::before, &::after {
      content: '';
      width: 0.5px;
      height: calc(100% - 16px * 2);
      position: absolute;
      background-color: $black-white-3;
      margin: 16px 0;
      // left: 100%;
      top: 0;

    }
    &::before {
      right: 100%;
    }
    &::after {
      left: 100%;
    }
    &:first-child::before, &:last-child::after {
      width: 0;
    }
  }
  .tab-active {
    background-color: $blue;
    z-index: 1;
    &::before, &::after {
      content: '';
      width: 29px;
      height: 100%;
      position: absolute;
      margin: 0;
      // left: 100%;
      top: 0;
    }

    &::before {
      right: 100%;
      background: linear-gradient(90deg, rgba(12, 98, 223, 0.16) 0%, rgba(12, 98, 223, 0) 100%);
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    &::after {
      left: 100%;
      background: linear-gradient(90deg, rgba(12, 98, 223, 0.16) 0%, rgba(12, 98, 223, 0) 100%);
    }

    &:first-child::before, &:last-child::after {
      width: 0;
    }

  }
}

.case-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.case-container {
  width: calc((100% - 24px * 3 ) / 4);
  line-height: 0;
  // padding-right: 24px;
  img {
    border-radius: 8px;
  }

  // &:first-child {
  //   margin-bottom: 100px;
  // }
  // &:last-child {
  //   margin-bottom: 100px;
  // }
  &:nth-child(4n) {
    padding-right: 0;
  }
}


@include mobile{
  .hero-container {
    height: 156px;
    background-size: 587px 156px;
  }
  .hero-title {
    padding: 44px;
  }
  .tabs-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #D6D6D6;
  }
  .tab {
    position: relative;
    cursor: pointer;
    min-width: 103px;
    text-align: center;
    color: $black-white-4;
    width: calc((100% - 16px) / 2);

    &:last-child {
      margin-right: 0;
    }
  }
  .tab-active {
    color: $blue;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 1px;
      width: 100%;
      background-color: $blue;
    }
  }
  .case-container {
    width: calc((100% - 16px) / 2);
  }
}
@media (min-width: $breakPoint_xxxl) {
  .hero-container {
    height: 720px;
    background-size: 5120px 720px;
  }
  .hero-title {
    height: 100%;
    margin: 0;
  }
}
</style>
