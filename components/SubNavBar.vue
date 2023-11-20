<template>
  <!--  top: (!isFixed || !isHeaderShow) ? 0 : headerHeight+'px', -->
  <nav class="pos-relative" :class="{'fixed-bar': isFixed }"
    :style="{
      'z-index': 99,
      top: (!isFixed || !isHeaderShow) ? 0 : headerHeight+'px',
      height: (isAlwaysShow || isHeaderShow) ? '60px' : '0',
      'overflow': (isActive || isHeaderShow) ? 'unset' : 'hidden'
    }"
  >
  <Teleport to='body' v-if='withModal'>
    <ShopModal v-show="showBuyModal" :onCancel="onCloseModal" :dataSrc="modalData"> </ShopModal>
  </Teleport>
    <div class="snmk-container pos-relative z-10">
      <div class="line" v-if="isMobile && isActive"></div>
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 bar-wrapper">
        <div class="main-title">
          <Navigate :title="dataSource.mainTitle" v-if="!isMobile"
            :aLink="dataSource.link" :route="dataSource.route" :id="dataSource.traceID"
            class="font-1 text"
            @click='removeBanScroll'
          >
            {{dataSource.mainTitle}}
          </Navigate>
          <template v-if="isMobile">
            <Navigate :title="dataSource.mainTitle"
              :aLink="dataSource.link" :route="dataSource.route" :id="dataSource.traceID"
               class="text c-white"
              @click='removeBanScroll'
            >
              {{dataSource.mainTitle}}
            </Navigate>
            <span @click="openDrawer" :class="{'iconfont-active': isActive}"  class="iconfont c-white">&#xe7b2;</span>
          </template>
        </div>
        <div class="right-bar">
          <div class="menus mr-2xl" v-if="!isMobile">
            <Navigate class="menu mr-2xl" :title="menu.content" :target="'_blank'"
              v-for="menu of dataSource.menus" :key="menu.content"
              :aLink="menu.link" :route="menu.route && (`${dataSource.route}${menu.route}`)" :id="menu.traceID"
              @click='removeBanScroll'
            >
              {{menu.content}}
            </Navigate>
          </div>
          <div class="barend">
            <template v-for="barend of dataSource.barend">
              <Navigate class="snmk-primary-btn bar-btn" :target="'_blank'"
                :aLink="barend.link" :route="barend.route" :id="barend.traceID"
                :key="barend.text" v-if="!barend.modalType"
                @click='removeBanScroll'
              >
                {{barend.text}}
              </Navigate>
              <div v-else class="snmk-primary-btn bar-btn" @click="onBuyClick(barend.data)">
                {{barend.text}}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div ref="drawer" style="display: none" class="drawer pos-absolute w-100">
      <div class="cover" @click="openDrawer"></div>
      <div class="snmk-container pos-relative z-10">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 bar-wrapper">
          <div class="menus mr-2xl" v-if="isMobile">
            <Navigate class="menu mr-2xl" :title="menu.content"
              :aLink="menu.link" :route="menu.route && (`${dataSource.route}${menu.route}`)" :id="menu.traceID"
              v-for="menu of dataSource.menus" :key="menu.content"
              @click='removeBanScroll'
            >
              {{menu.content}}
            </Navigate>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import $ from '@@/resources/js/jquery-vendor'
import ShopModal from '@@/components/ShopModal.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
import { ISubNavMenu } from './SubNavBar/type';

const props = withDefaults(defineProps<{
  dataSource: ISubNavMenu
  isFixed?: boolean
  isAlwaysShow?: boolean
  withModal?: boolean
}>(), { dataSource: {}, isFixed: true, isAlwaysShow: true, withModal: false })
const emit = defineEmits(['onBuyModal'])
const { isMobile, isHeaderShow } = storeToRefs(useGlobalStore())

const hasModal = computed(() => props.dataSource.barend && props.dataSource.barend.some(v => v.modalType))

const showBuyModal = ref(false)
const modalData = ref({})
const onBuyClick = (data: any) => {
  if(data.needSelectedType && !props.withModal) {
    emit('onBuyModal', data.shopModalData)
    return
  }
  modalData.value = data.shopModalData
  showBuyModal.value = true
  document.documentElement.classList.add('body-no-scroll')
  emit('onBuyModal', data.shopModalData)
}

const onCloseModal = () => {
  showBuyModal.value = false 
  document.documentElement.classList.remove('body-no-scroll')
}

const isActive = ref(false)
const drawer = ref<Element | ComponentPublicInstance | null>(null)
const openDrawer = () => {
  if(!drawer.value) return
  isActive.value = !isActive.value
  isActive.value ? document.documentElement.classList.add('body-no-scroll') : document.documentElement.classList.remove('body-no-scroll')
  $('.drawer').slideToggle(300)
}

const removeBanScroll = () => document.documentElement.classList.remove('body-no-scroll')

const headerHeight = ref(0)
onMounted(() => {
  const headerEl = document.querySelector('.header-height')
  if(!headerEl) return 

  const heightWithUnit = getComputedStyle(headerEl).height || '0'
  headerHeight.value = Math.max(parseInt(heightWithUnit.slice(0, -2)), 60)
})
</script>

<style scoped lang="scss">
.z-10 {
  z-index: 10;
}
nav {
  background-color: rgba(28, 30, 32, 0.92);
  backdrop-filter: blur(4px);
  // overflow: hidden;
  transition: all .2s ease-in-out;

  &::v-deep a {
    color: white;
  }
}
.bar-wrapper {
  display: flex;
  justify-content: space-between;
  // flex-wrap: wrap;
}

.main-title {
  height: 60px;
  display: flex;
  align-items: center;
  margin-right: 12px;
  max-width: calc(100% - 24px - 48px - 8px);
  flex: 1 1 auto;

  :deep(.text) {
    font-weight: 600;
    margin-right: 12px;
    max-width: calc(100% - 28px);
  }
  :deep(.text) a {
    font-size: 16px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.right-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  flex: 0 0 auto;
}

.menus {
  display: flex;
  justify-content: space-between;

  :deep(.menu) {

  }

  :deep(.menu):last-child {
    margin-right: 0;
  }
}

.barend {
  :deep(.bar-btn) {
    padding: 0.5rem 1rem;
    font-size: 16px;
    line-height: 20px;
    min-width: unset;
  }

}

.fixed-bar {
  position: fixed;
  width: 100%;
}
.top-0 {
  top: 0;
}

@include mobile {
  .line {
    position: absolute;
    bottom: 0;
    left: -8px;
    width: 100vw;
    background-color: #505253;
    height: 1px;
  }
  .cover {
    position: absolute;
    top: -60px;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: 0.4;
  }
  .drawer {
    background-color: rgba(28, 30, 32, 0.92);
    backdrop-filter: blur(4px);
  }
  .main-title {
    cursor: pointer;
    :deep(.text) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &::v-deep a { font-size: 14px; }
    }
  }
  .menus {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;

    :deep(.menu) {
      width: 100%;
      margin: 0;
      padding-block: 16px;
      border-bottom: 1px solid #505253;

      &:last-child {
        border-bottom: none;
      }
    }

    :deep(.menu) a {
      display: block;
      text-align: center;
      width: 100%;
      padding: 16px 0;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .barend:deep(.bar-btn) {
    font-size: 12px;
    padding: 0.5em 1.5em;
  }
  .iconfont {
    transition: 0.25s all ease-in-out;
  }
  .iconfont-active {
    transform: rotate(180deg);
  }
}


</style>
