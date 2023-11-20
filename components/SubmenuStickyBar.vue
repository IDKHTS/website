<template>
    <div class="nav-bar-wrapper" style="background-color: white" :style="{top: isHeaderShow ?'60px' : '0'}">
      <div class="snmk-container">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-l-offset-1 content-wrapper py-m mt-l">
          <div class="title-4 bold font-bw-1 vertical-center nav-bar-title">{{navData.title}}</div>
          <div class="only-mob font-blue mob-menu-toggle" @click="onSelectedMenu()">
            {{currSelected}}
            <span v-if="!isOpenMenu" class="iconfont">&#xe7b2;</span>
            <span v-if="isOpenMenu" class="iconfont">&#xe743;</span>
          </div>
          <div class="nav-list-wrapper" @click="onCloseMenu()" :class="{'not-mob': !isOpenMenu, 'ml-2xl': !isMobile}">
            <div class="nav-list" @click.stop="">
              <div class="nav-item font-1" @click="onCloseMenu()" v-for="(item, index) of navData.navList" :key="item.text" :class="{'selected': selected === index}">
                <a :href="'#'+item.href">{{item.text}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const props = defineProps<{navData: any}>()
const { isMobile, isHeaderShow } = storeToRefs(useGlobalStore())
const currSelected = ref('')
const selected = ref(0)
const isOpenMenu = ref(false)
const emit = defineEmits(['onToggleMobMenu'])

onMounted(() => {
    currSelected.value = props.navData.navList[0].text
  
    // load img will take time, we can't just use nextTick
    // (i konw,i konw....but)
    setTimeout(function () {
    const sectionOffsetTopAry = props.navData.navList
        .map((v:any) => (document?.getElementById(v?.href)?.getBoundingClientRect()?.top || 0) + window.scrollY)

    window.addEventListener('scroll', function () {
        let lastIndex = 0
        for (let i = 0; i < sectionOffsetTopAry.length; i++) {
        const curr = sectionOffsetTopAry[i]
        const currScroll = document.documentElement.scrollTop || document.body.scrollTop

        if (curr > currScroll + 10) {
            break
        }
        lastIndex = i
        }
        selected.value = lastIndex
        currSelected.value = props.navData.navList[lastIndex].text
    })
    }, 2000)
})
const onSelectedMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
    if (isOpenMenu.value) {
        document.documentElement.classList.add('body-no-scroll')
        // document.body.addEventListener('touchmove', function (e) { e.preventDefault() }, false)
    } else {
        document.documentElement.classList.remove('body-no-scroll')
    }
    emit('onToggleMobMenu', isOpenMenu.value)
}
const onCloseMenu = () => {
    isOpenMenu.value = false
    emit('onToggleMobMenu', isOpenMenu.value)
    document.documentElement.classList.remove('body-no-scroll')
}
</script>
  
<style lang="scss" scoped>  
  
  .nav-bar-wrapper {
    position: sticky;
    top: 0;
    z-index: 80;
  
    :deep(a) {
      color: $black_white_2;
  
      &:hover {
        color: $blue;
      }
    }
  
    .selected {
      a {
        color: $blue;
      }
    }
  }
  
  .content-wrapper {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $black_white_7;
  }
  
  
  .nav-list {
    display: flex;
  }
  .nav-item {
    margin-right: 48px;
    &:last-child {
      margin-right: 0;
    }
  
  }
  
  @media (min-width: $breakPoint_m) {
    .nav-bar-title {
      min-width: 100px;
    }
  }
  
  @media (max-width : $breakPoint_m) {
    .mob-menu-toggle {
      cursor: pointer;
    }
    .nav-list-wrapper {
      position: absolute;
      top: 100%;
      left: 0;// -24px;
      width: 100vw;//calc(100% + 24px);
      height: 100vh;
      background-color: rgba(10, 10, 10, 0.6);
    }
    .nav-list {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      padding-bottom: 36px;
    }
    .nav-item {
      margin: 36px 0 0;
  
    }
  
  
  }
  </style>
  