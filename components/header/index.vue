<script lang='ts' setup>
import Navigate from '@@/components/Navigate.vue';
import ShopModal from '@@/components/ShopModal.vue';
import Dropdown from '@@/components/header/Dropdown.vue';
import SoftwareDropdown from './SoftwareDropdown.vue';
import SupportDropdown from './SupportDropdown.vue';
import MaterialDropdown from './MaterialDropdown.vue';
import CommunityDropdown from './CommunityDropdown.vue'
import ActiveCollectIcon from './ActiveCollectIcon.vue';
import CollectionMenu from '../CollectionMenu.vue'
import MobProductMenus from './MobProductMenus.vue';
import { useGlobalStore } from '~/stores';
import { storeToRefs } from 'pinia';
import ProductMenus from './ProductMenus.vue';
import { DeviceType } from '~/constant';
import { getLastBlog, getLastForumTopics } from '~/service';

const i18n = useI18n()

const globalStore = useGlobalStore()
const { isMobile, device, isHeaderShow } = storeToRefs(globalStore) 
const isPC = computed(() => device.value === DeviceType.PC)
const route = useRoute()
const activeType = ref('')
const hasCountDown = ref(false)
const headerHeight = ref('60px')

const header = ref()
const headerPlaceholder = ref()
const logo = computed<any>(() => {
  return (i18n.tm('headerData') as any).logo
})
const menus = computed(() => {
  return (i18n.tm('headerData') as any).menus
})

const isBlack = computed(() => {
  return route.path === '/snapmaker-luban'
})
const setHeaderHeight = () => {
  if (!header.value) return
  header.value.style.height = ''
  setTimeout(function () {
    if (!headerPlaceholder.value) {
      return
    }
    const calcHeaderHeight = window.getComputedStyle(header.value).height
    headerPlaceholder.value.style.height = calcHeaderHeight
  })
}
onMounted(() => {
  setHeaderHeight()
})
const headerStyle = computed<number>(() => {

  const path = route.path
  const name = route.name
  const headerStyle: any = {
    // 'background-color': !!this.activeType || !!this.isActivedIcon ? 'white' : (path === '/snapmaker-luban' ? '#151617' : '#f5f5f5'),
    'color': path === '/snapmaker-luban' ? 'white' : ''
  }
  if (!!activeType.value || !!isActivedIcon.value) {
    headerStyle['background-color'] = 'white'
  } else if (name === 'support-products') {
    headerStyle['background-color'] = 'white'
    headerStyle['border-bottom'] = '1px solid rgb(235, 235, 235)'
  } else if (path === '/snapmaker-luban') {
    headerStyle['background-color'] = '#151617'
  } else {
    headerStyle['background-color'] = '#f5f5f5'
  }

  if (!isMobile) {
    headerStyle['height'] = hasCountDown ? '140px' : headerHeight.value + 'px'
    setHeaderHeight()
  }
  return headerStyle
})

// scroll and hide
const lastScrollPosition = ref(0)
const headerToggleEmit = defineEmits(['headerToggle'])
const toggleHeader = (e: Event) => {
  // Get the current scroll position
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  // if (currentScrollPosition < 0) {
  //   return
  // }

  if (currentScrollPosition < 80) {
    globalStore.$patch((state)=> {
      state.isHeaderShow = true
    })
    return
  }


  // Stop executing this function if the difference between
  // current scroll position and last scroll position is less than some offset
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 100) {
    return
  }

  // Here we determine whether we need to show or hide the navbar
  headerToggleEmit('headerToggle', isHeaderShow.value)
    globalStore.$patch((state)=> {
      state.isHeaderShow = currentScrollPosition < lastScrollPosition.value
  })
  // Set the current scroll position as the last scroll position
  lastScrollPosition.value = currentScrollPosition
}
onMounted(() => {
  window.addEventListener('scroll', toggleHeader)
})
onUnmounted(() => {
  window.removeEventListener('scroll', toggleHeader)
})


const onActiveMenu = (type: string) => {
  activeType.value = type
}
const onCheckMenu = (type: string) => {
  activeType.value = ''
}






// header main menu btns
const isCN = computed(() => {
  return i18n.locale.value == 'zh-CN'
})
const btns = computed(() => {
  return (i18n.tm('headerData') as any).btns
})

// shopModal
const isShowModal = ref(false)
const shopData = ref([])
const onCancelModal = () => {
  isShowModal.value = false
  shopData.value = []
}
const showModal = () => {
  isShowModal.value = true
}
const openShop = (data = [
  {
    text: `US Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/us.png`,
    link: `https://us.snapmaker.com/collections/snapmaker-back-to-school-3d-printer-sale?SkipCozyRedirect=yes`
  },
  {
    text: `EU Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/eu.png`,
    link: `https://eu.snapmaker.com/collections/snapmaker-back-to-school-3d-printer-sale?SkipCozyRedirect=yes`
  },
  {
    text: `Global Store`,
    icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/others.png`,
    link: `https://shop.snapmaker.com/collections/snapmaker-back-to-school-3d-printer-sale?SkipCozyRedirect=yes`
  }
]) => {
  shopData.value = data
  showModal()
}


// data
const products = computed(() => {
  return menus.value.find((v: any) => v.type === 'Products')
})
const allProducts = computed(() => {
  return (i18n.tm('headerData') as any).allProducts
})
const software = computed(() => {
  return menus.value.find((v: any) => v.type === 'Software')
})
const support = computed(() => {
  return menus.value.find((v: any) => v.type === 'Support')
})
const materials = computed(() => {
  return menus.value.find((v: any) => v.type === 'Materials')
})
const community = computed(() => {
  return menus.value.find((v: any) => v.type === 'Community')
})
const getCommunityData = async () => {
  const topics = await getLastForumTopics()
  const blogs = await getLastBlog(3) // getLastThreeBlog()
  const dropdowns = community.value.dropdowns
  const blog = dropdowns.find((v: any) => v.title === 'Blog')
  const forum = dropdowns.find((v: any) => v.title === 'Forum')

  blog.categories = blogs.data.map((blog: any) => {
    const img = blog && blog.yoast_head_json && blog.yoast_head_json.og_image && blog.yoast_head_json.og_image[0]
    const title = blog && blog.yoast_head_json && blog.yoast_head_json.title
    return {
      name: title,
      imgSrc: img.url,
      link: blog.link
    }
  })
  forum.categories = topics.data.map((v: any) => ({
    name: v.title,
    link: v.link,
    imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/header/comunity/Forum icon.svg` // v.imgSrc
  }))
}
if(!import.meta.env.SSR) {
  getCommunityData().catch(err => console.log(err))
}



// mob 
const isActivedIcon = ref(false)
const dropdownMenusRef = ref<Element | ComponentPublicInstance | null>(null)
const openMenuType = ref('')
const selectedSpecificMenu = ref(false)

// collectMenu
const reCalcHTrigger = ref(0)
const handleMobMenu = () => {
  if(!dropdownMenusRef.value) return 
  // dropdownMenusRef.style.height = this.isActivedIcon ? 'calc(100vh - 100%)' : '0'
  dropdownMenusRef.value.style.opacity = isActivedIcon.value ? '1' : '0'
  dropdownMenusRef.value.style.zIndex = isActivedIcon.value ? '100' : '-1'
  dropdownMenusRef.value.style.pointerEvents = isActivedIcon.value ? 'auto' : 'none'

  if(process.client) {
    if (isActivedIcon.value) {
      document.documentElement.classList.add('body-no-scroll')
    } else {
      document.documentElement.classList.remove('body-no-scroll')
    }
  }
}
const onChangeActive =  () => {
  isActivedIcon.value = !isActivedIcon.value
  handleMobMenu()
}



const onToggleExpandMenu =  (menu: any)=>  {
  openMenuType.value = ((openMenuType.value === menu.type) ? '' : menu.type)
  selectedSpecificMenu.value = !selectedSpecificMenu.value
}
const onReCalcH = () => {
  reCalcHTrigger.value += 1
}



const mobHasSubTile = (menu: any) => {
  return menu.type === products.value.type || (menu.type === support.value.type && i18n.locale.value === 'en-US') || (community.value && menu.type === community.value.type)
}




const badge_NEW =  computed(() => {
  return isCN.value  ? '新款' : 'NEW'
})
const pre_Heat = computed(() => {
  return isCN.value ? '敬请期待' : 'Preorder'
})

// product dropdown
const dropdownReCalcHTrigger = ref(0)
</script>


<template>
  <div class='header-container'>
    <div ref='header' id="header" class="header-wrapper" :style='headerStyle' 
    :class="{'header-wrapper-hidden': !isHeaderShow,
      'scroll-fixed': true,
      'scroll-not-fixed': !true,
    }">
      <div class="snmk-container" :style="{ height: headerHeight, zIndex: 100 }">
        <div v-if='isPC' class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 header">

          <div class="logo">
            <NuxtLink to="/" class="logo-wrapper" :id="logo.traceID">
              <span class="iconfont font-bw-1" :style="{ 'color': !activeType && isBlack ? 'white' : '' }">&#xe618;</span>
            </NuxtLink>
          </div>

          <div class="menus" :style="{ height: headerHeight }">
            <template v-for="menu of menus">
              <!-- with dropdown -->
              <div class="menu" v-if="!!menu.dropdowns" @mouseenter="onActiveMenu(menu.type)"
                @mouseleave="onCheckMenu(menu.type)" :key="menu.type"
                :class="{ active: activeType === menu.type, 'menu-black': !activeType && isBlack }">

                <Navigate :aLink="menu.aLink" :route="menu.route" :id="menu.traceID">
                  {{ menu.typeText }}
                </Navigate>
              </div>

              <!-- without dropdown -->
              <div class="menu" v-if="!menu.dropdowns" :key="menu.type"
                :class="{ active: activeType === menu.type, 'menu-black': !activeType && isBlack }">
                <Navigate :aLink="menu.aLink" :route="menu.route" :id="menu.traceID">
                  {{ menu.typeText }}
                </Navigate>
              </div>
            </template>

            <!-- update dropdown height by using this to <Dropdown :reCalcHTrigger='dropdownReCalcHTrigger'>(update dropdownReCalcHTrigger)-->
            <Dropdown v-if="products" :data="products" :withGrid='false'
              :reCalcHTrigger='dropdownReCalcHTrigger' :activeType="activeType"
              @mouseenter="onActiveMenu(products.type)" @mouseleave="onCheckMenu(products.type)"
            >
              <ProductMenus :device='device' :dataSrc='products.dropdowns' @onSelecedProduct='dropdownReCalcHTrigger +=1' @closeDropdown='onCheckMenu' ></ProductMenus>
            </Dropdown>

            <Dropdown v-if="software" :data="software" :activeType="activeType" @mouseenter="onActiveMenu(software.type)"
              @mouseleave="onCheckMenu(software.type)">
              <SoftwareDropdown :software="software"></SoftwareDropdown>
            </Dropdown>


            <Dropdown v-if="support" :data="support" :activeType="activeType" @mouseenter="onActiveMenu(support.type)"
              @mouseleave="onCheckMenu(support.type)">
              <SupportDropdown :support='support'></SupportDropdown>
            </Dropdown>

            <Dropdown v-if="materials" :data="materials" :activeType="activeType" @mouseenter="onActiveMenu(materials.type)" @mouseleave="onCheckMenu(materials.type)">
              <MaterialDropdown :materials='materials'></MaterialDropdown>
            </Dropdown>

            
            <Dropdown  v-if="!isCN && community" :data="community" :activeType="activeType"  @mouseenter="onActiveMenu(community.type)" @mouseleave="onCheckMenu(community.type)">
              <CommunityDropdown :community='community'></CommunityDropdown>
            </Dropdown>
          </div>

          <div class="btns">
            <template v-if="isCN">
              <Navigate v-for="(item, btnIdx) of btns" :key="item.text"
                class="my-s mr-l header-shop-btn header-shop-btn-cn" :route="item.route" :aLink="item.link"
                :id="item.traceID" :target="'_blank'">
                <img :src="item.src" alt="">
              </Navigate>
            </template>
            <template v-else>
              <div v-for="(item) of btns" :key="item.text" class="my-s mr-l header-shop-btn snmk-primary-btn link-btn"
                @click="showModal">
                <span>{{ item.text }}</span>
              </div>
            </template>
            <!-- <button v-for="item of btns" :key="item.text" class="snmk-primary-btn">{{item.text}}</button> -->
          </div>
        </div>
        
        <!-- tablet/mobile -->
        <div v-if='!isPC' class="snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 header">
          <ActiveCollectIcon :isActive="isActivedIcon" @toggleStatus="onChangeActive"
            :class="{'header-black': !isActivedIcon && isBlack }"
            />
          <div class="menus-tablet" ref="dropdownMenusRef">
            <div class="snmk-container ">
              <div class="snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4">
                <template v-for="menu of menus">
                  <CollectionMenu v-if="(openMenuType == menu.type && selectedSpecificMenu) || !selectedSpecificMenu"
                  :isOpen="openMenuType == menu.type"
                  @toggle="onToggleExpandMenu(menu)"
                  speed=".2s"
                  :reCalcHTrigger='reCalcHTrigger'
                  :key="menu.type">
                    <template v-slot:triggle-bar>
                      <div class="menu-item">
                        <template v-if="!!menu.dropdowns">
                          {{menu.typeText}}
                          <img :class="{'rotate-transition': openMenuType == menu.type}" class="left-icon" :src="'https://ditfjx9w4x3vl.cloudfront.net/assets/header/go-icon.svg'" alt="">
                        </template>
                        <template v-if="!menu.dropdowns">
                          <Navigate :aLink="menu.link" :route="menu.route" class="menu-link-item" :id="menu.traceID">
                            <div>{{menu.typeText}}</div>
                          </Navigate>
                        </template>
                      </div>
                    </template>
                    <template v-slot:content>
                      <div style='overflow: hidden;'>
                        <template v-if="openMenuType === products.type">
                          <MobProductMenus  :device='device' :dataSrc='products.dropdowns' @onReCalcH='onReCalcH'></MobProductMenus>
                        </template>
                        <template v-else>
                          <div class="" v-for="dropdownItem of menu.dropdowns" :key="dropdownItem.title">
                            <div  v-if="mobHasSubTile(menu)" class="dropdown-item-title font-3 mt-m">{{dropdownItem.title}}</div>
                            <Navigate v-for="category of dropdownItem.categories"
                              class="mb-l mx-m category font-2 mt-s"
                              :aLink="category.link"
                              :route="category.route"
                              target="_blank"
                              :key="category.name"
                              :id="category.traceID"
                              @click="onChangeActive"
                              >
                              <div v-if="dropdownItem.title === 'Blog' || dropdownItem.title === 'Forum'"
                                class="community-category-img mr-xs"
                                :class="{'community-category-blog-img': dropdownItem.title === 'Blog'}"
                              >
                                <img :src="category.imgSrc" :alt="category.name">
                              </div>
                              <span class="two-line-ellipsis">{{category.name}}</span>

                              <span v-if="category.isPreHeat" class="badge-new font-3">{{pre_Heat}}</span>
                              <span v-if="category.isNew" class="badge-new font-3">{{badge_NEW}}</span>
                            </Navigate>
                          </div>
                        </template>
                      </div>
                    </template>
                  </CollectionMenu>
                </template>
              </div>
              <div class="snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 pb-xl all-products font-2" v-if="openMenuType == products.type">
                <router-link :to="allProducts.link"  :id="allProducts.traceID">
                  <span @click="onChangeActive">{{allProducts.text}}</span>
                </router-link>
              </div>
              <div class="snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 pb-xl pt-l all-supports font-2" v-if="(openMenuType == support.type && $i18n.locale === 'en-US')">
                <Navigate
                  :aLink="support.mainLinks.link"
                  :route="support.mainLinks.route"
                  target="_blank"
                  @click="onChangeActive"
                  :id="support.mainLinks.traceID"
                >
                    <span @click="onChangeActive">{{support.mainLinks.text}}</span>
                </Navigate>
              </div>
              <template v-if="materials">
                <div class="snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 pb-xl material-links font-2" v-if="openMenuType == materials.type">
                  <template  v-for="(link,index) of materials.extraLinks" :key="link.text">
                    <Navigate
                      class="material-links-item"
                      :aLink="link.link"
                      :route="link.route"
                      target="_blank"
                      :id="link.traceID"
                      @click="onChangeActive"
                    >
                      {{link.text}}
                    </Navigate>
                    <div v-if="index !== materials.extraLinks.length - 1" class="materials-nav-separator"></div>
                  </template>
                </div>
              </template>
              <div class="snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 pb-xl pt-l all-supports font-2" v-if="($i18n.locale === 'en-US' && openMenuType == community.type )">
                <router-link :to="community.mainLinks.route"  :id="community.mainLinks.traceID">
                  <span @click="onChangeActive">{{community.mainLinks.text}}</span>
                </router-link>
              </div>
            </div>
          </div>


          <div class="logo">
            <router-link to="/" class="logo-wrapper" :id="logo.traceID" >
              <!-- <img :src="logo.img" alt="Snapmaker: 3D printer"> -->
              <span @click="isActivedIcon=true;onChangeActive()" class="iconfont font-bw-1" :style="{'color': !isActivedIcon && isBlack ? 'white' : ''}">&#xe618;</span>
            </router-link>
          </div>

          <div class="btns">
            <!-- <button v-for="item of btns" :key="item" class="snmk-primary-btn btn">{{item}}</button> -->
            <template v-if="$i18n.locale === 'zh-CN'">
              <Navigate
              v-for="item of btns"
              :key="item.text"
              class="my-s mr-l header-shop-btn"
              :class="{'snmk-primary-btn link-btn': $i18n.locale !== 'zh-CN', 'header-shop-btn-cn': $i18n.locale !== 'en-US'}"
              :route="item.route"
              :aLink="item.link"
              :id="item.traceID"
              :target="'_blank'"
              >
                <img v-if="$i18n.locale === 'zh-CN'" :src="item.src" alt="">
                <span v-else>{{item.text}}</span>
              </Navigate>
            </template>
            <template v-else>
              <div
                v-for="(item) of btns"
                :key="item.text"
                class="my-s mr-l header-shop-btn"
                :class="{'snmk-primary-btn link-btn': $i18n.locale !== 'zh-CN', 'header-shop-btn-cn': $i18n.locale !== 'en-US'}"
                @click="showModal"
              >
                <span>{{item.text}}</span>
              </div>
            </template>
          </div>

        </div>
      </div>
    </div>

    <div class="header-height" ref="headerPlaceholder"></div>

    <ShopModal v-show="isShowModal" :onCancel="onCancelModal" :dataSrc='shopData' />
  </div>
</template>

<style> a {
   text-decoration: unset;
 }
</style>
<style scoped lang="scss">
.top-tip-banner {
  cursor: pointer;
  position: relative;
  line-height: 0;
  height: 100%;
  height: 80px;
  max-height: 80px;
  text-align: center;
  background-size: 100% 100%;
  background-position: center;
  background-color: white;

  @include mobile {
    height: 100%;
    max-height: 400px;
  }

  .text-content {
    // position: absolute;
    width: 100%;
    height: 100%;
    // top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #242424;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    /* 133.333% */
    letter-spacing: -0.24px;

    @include mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 24px;
    }

    .save-text {
      color: #FF392C;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.24px;
      text-decoration-line: underline;
      margin-left: 6px;

    }

    img {
      height: 100%;
      margin-right: 100px;
      max-width: 178px;
      max-height: 48px;

      @include mobile {
        margin-top: 48px;
        margin-bottom: 24px;
        margin: 48px 63px 24px;
        max-width: 249px;
        max-height: 74px;
      }
    }
  }
}

.bg-white {
  background-color: white;
}

.scroll-fixed {
  position: fixed;
  top: 0;
}

.scroll-not-fixed {
  position: relative;
}

.header-wrapper {
  // position: relative;
  z-index: 100;
  // height: 80px;
  width: 100%;
  background-color: $black_white_8;
  // border-bottom: 1px solid $black_white_7;
  transition: all .2s ease-in-out;
  transition: all .2s ease-in-out, background-color 1.2s ease-in-out;
  overflow: visible;


  &-hidden {
    transform: translate3d(0, -100%, 0);
  }

}

// .software-bg-img {
//   background-image: url(https://ditfjx9w4x3vl.cloudfront.net/assets/luban/pc/pic_top-bg-2560x884.jpg);
//   background-position: 100% ;
// }

.header-container {
  &::v-deep .modal-wrapper .modal-container {
    max-width: 560px;
    min-height: 400px;
    width: 80%;
  }

  &::v-deep .modal-wrapper .mask {
    background: rgba(0, 0, 0, 0.7);
  }
}

.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  float: left;
  height: 100%;
  // flex: 0 0;
  // width: 9.4vw;
  // margin: 0 1.1vw;
  z-index: 100;

  img {
    height: 100%;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 32px;

  }
}

.menus {
  position: absolute;
  width: 100%;
  left: 0;
  flex: 1 1;
  display: flex;
  justify-content: center;
  height: 100%;
  // border-bottom: 1px solid #f5f5f5;

  .menu {
    position: relative;
    padding: 0 1.5625vw;
    // margin: 0 1.5625vw;
    cursor: pointer;
    display: flex;
    align-items: center;

    &::v-deep a {
      color: $black_white_2;
    }

    &::v-deep a {
      color: $black_white_2;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 1.5625vw;
      width: calc(100% - 2 * 1.5625vw);
      height: 2px;
      transform: scale(0);
      background-color: #333;
      // border-bottom: 1px black solid;
      // border-bottom: 1px black solid;
      transition: all 0.5s ease-in-out;
    }

    &:hover {

      &::before {
        transform: scale(1);
      }

      &::v-deep a {
        color: $black_white_1
      }

      &::v-deep a {
        color: $black_white_1
      }
    }

  }

  .menu-black {

    a,
    &::v-deep a {
      color: white;
    }

    &:hover a,
    &:hover::v-deep a {
      color: white;
    }

  }

  .active {
    &::before {
      transform: scale(1);
    }
  }

  .dropdown {
    position: absolute;
    width: 100%;
    height: 0;
    // max-height: 0;
    left: 0;
    top: 100%;
    // background-color: #f7f7f7;
    z-index: 100;
    overflow: hidden;
    transition: height .25s ease-in-out;
    transition-delay: .3s;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px;
  }
}

.menu:hover~.dropdown .all-products {
  color: #0C63E2;

  &::after {
    width: 100%;
  }

  &::v-deep a {
    color: #0C63E2;
    text-decoration: none;
  }
}

.menu:hover~.dropdown .materials-nav {
  color: #0C63E2;

  &::after {
    width: 100%;
  }
}

.content-wrapper {
  // width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-dropdown-item {
  display: flex;
  justify-content: space-between;
}

.product-item {
  width: 20%;
  max-width: 268px;
  display: flex;
  flex-direction: column;
  color: black;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }

  .dropdownItem-img-content {
    // width: 10.156vw;
    // height: 10.156vw;
    position: relative;

    &:hover .dropdownItem-img,
    &-hover .dropdownItem-img {
      padding: 8px;
      // width: 9vw;
    }

    // hover img as hover link ...... what a design!
    &:hover~.dropdownItem-text {
      .dropdownItem-link-active {

        a,
        &::v-deep a {
          color: $blue;
        }

        &::after {
          width: 100%;
        }
      }
    }

    a,
    &::v-deep a {
      // width: 10.156vw;
      // height: 10.156vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f5f5f5;
      border-radius: .5vw;
    }
  }

  .dropdownItem-propagandaIcon {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 3.75vw;
    max-height: 48px;
    max-width: 72px;
  }

  .dropdownItem-img {
    // width: 7.815vw;
    width: 440px;
    padding: 24px;
    transition: all .2s ease;
  }


  .dropdownItem-title {
    color: #1e1e1e;
    font-weight: bold;
  }

  .dropdownItem-description {
    color: #8e8e8e;
  }

  .dropdownItem-link {
    position: relative;
    display: inline;

    a,
    &::v-deep a {
      // display: block;
      color: black;
      font-size: 14px;
      margin-bottom: 16px;
      line-height: 22px;
    }

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: $blue;
      transition: all 0.3s ease-in-out;
    }

    &:hover {

      a,
      &::v-deep a {
        color: $blue;
      }

      &::after {

        width: 100%;
      }
    }
  }

  .dropdownItem-link-active {

    a,
    &::v-deep a {
      color: $blue;
    }

    &::after {
      width: 100%;
    }
  }
}

.badge-new {
  margin-left: 4px;
  border-radius: 4px;
  background-color: $yellow;
  color: white;
  padding: 0 8px;
  min-width: 40px;
}



.divide-line {
  width: 1px;
  background-color: #EFEFEF;
}

.cn-support {
  .support-dropdownItem {
    display: flex;
    justify-content: space-between;

    .support-category {
      width: calc(2 * (100vw - 84px * 2) / 12 - 24px)
    }
  }

  .support-category .img-box {
    display: inline-block;
  }

  .snmk-link-btn.img-hover {
    color: $blue;

    &::after {
      width: 100%;
    }
  }

  .support-category .support-nav-desc {
    color: $black_white_3;
    height: 40px;

    &::v-deep a {
      color: inherit;
    }
  }

  .support-dropdownItem .img-link {
    display: inline-block;
    line-height: 0;
    background-color: $black_white_8;
    border-radius: 8px;
    // padding: 24px
  }

  .support-dropdownItem .support-nav-img {
    background-color: $black_white_8;
    width: calc(7.8125vw + 48px);
    padding: 24px;
    transition: all .3s;
    border-radius: 8px;

    &:hover {
      padding: 8px;
    }
  }
}

//
.header {
  &::v-deep .bar-burger span {
    left: 0;
  }
}

.header-black.bar-burger {
  &::v-deep span {
    background-color: white;
  }

}


.community-dropdownItem {
  width: calc(100% / 4);
  padding-left: 24px;
  padding-right: 24px;
}
.community-category-blog-img {
  width: 84px;
}
.community-category-img{
  border-radius: 3px;
  flex: 0 0 auto;
  overflow: hidden;
  line-height: 0;

  &:hover ~ .community-category-text span {
    color: $blue;
    background-size: 100% 1px;
  }
}
.two-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 40px;
  display: -webkit-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
.community-category .community-category-text span{
  // multi line text underline css animation
  display: inline;
  background-image: linear-gradient(120deg, $blue 0%, $blue 100%);
  background-repeat: no-repeat;
  background-size: 0 1px;
  background-position: 0 100%;
  transition: background-size 0.25s ease-in;

  &:hover {
    color: $blue;
    background-size: 100% 1px;
  }
}

.menus-tablet {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh - 100%);
  height: calc(var(--vh, 1vh) * 100 - 100%);
  overflow: auto;
  // height: 0;
  z-index: -1;
  opacity: 0;
  background-color: white;
  transition: all .2s ease-in-out;
  border-top: 1px solid $black_white_7;
  pointer-events: none;


  .menu-item {
    height: 64px;
    border-bottom: $black_white_7 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $black_white_1;

    a,
    &::v-deep a {
      color: $black_white_1;
    }
  }

  .menu-link-item {
    width: 100%;
    height: 100%;

    a,
    &::v-deep a {
      display: block;
      height: 100%;
      width: 100%;
      line-height: 64px;
    }

  }

  .dropdown-item-title {
    color: $black_white_3;
  }

  .category, :deep(.category) {
    display: block;
    color: $black_white_1;
    display: flex;
  }

  .left-icon {
    float: right;
    text-align: center;
    // width: 4em;
    transition: all .2s ease;
  }

  .rotate-transition {
    transform: rotate(90deg);
  }
}

.all-products {
  bottom: 0;
  left: 0;
  text-align: center;
  // a , &::v-deep a{
  //   color: $black;
  //   text-decoration: underline;
  // }
}

.btns {
  float: right;
  flex: 0 0;
  display: flex;
  align-items: center;

  img {
    width: 36px;
    max-width: unset;
  }


  .shop-btn-cover {
    position: absolute;
    /* height: 100%; */
    background-color: #1c1e20;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    opacity: 0.15;
  }

  .link-btn {
    margin-right: 0.5em;
    min-width: 80px;
    padding: 0.35em 1em;
    line-height: 1.5;
    display: flex;
    justify-content: center;

    &:last-child {
      margin-right: 0;
    }

    &::v-deep a {
      color: white;
    }

    a {
      color: white;
    }
  }

  :deep(.header-shop-btn) {
    position: relative;
    display: flex;
    min-width: unset;
    background-image: linear-gradient(106.08deg, #0C63E2 13.29%, #08BFF7 91.26%); //
  }

  :deep(.header-shop-btn-cn) {
    z-index: 10;
    height: 36px;
    display: block;
    z-index: 1000;
    background-image: unset;

    &:last-child {
      margin-right: 0;
    }
  }

  .christmas-shop-btn {
    background: linear-gradient(90deg, #FFCB13 0%, #FFA313 100%);
  }
}

.header-height {
  height: $header-height;
}


.countdown-hero {
  z-index: 99;
  width: 100%;
  min-height: 80px;

  // position: fixed;
  // top: 80px;

  display: flex;
  align-items: center;
  background-size: 100% 100%;
  background-position: center;

  transition: all .2s ease-in-out;

  &:hover::v-deep .countdown-btn::after {
    width: 100%;
  }
}



@media (max-width: $breakPoint_xl) {
  .btns .link-btn {
    padding: 0.25em 0.8em;
  }
}

@media (max-width: $breakPoint_l) {
  .logo {
    float: left;
    width: auto;

    img {
      height: 100%;
    }

    .logo-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 25px;

    }
  }

  .all-products {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    background: linear-gradient(to bottom, #ffffff00 0%, #ffffff99 50%, white 100%);

    a,
    &::v-deep a {
      color: $black;
      text-decoration: underline;
    }
  }

  .all-supports {
    // position: absolute;
    // bottom: 0;
    // left: 0;

    position: sticky;
    bottom: 0;
    text-align: center;
    background: linear-gradient(176.7deg, rgba(255, 255, 255, 0) 2.72%, #FFFFFF 63.24%);

    a,
    &::v-deep a {
      color: $black;
      text-decoration: underline;
    }
  }

  .material-links {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;

    a,
    &::v-deep a {
      color: $black;
    }

    .material-links-item {
      &:first-child {
        margin-left: 16px;
      }

      &:last-child {
        margin-right: 16px;
      }
    }

    .materials-nav-separator {
      height: unset;
      width: 2px;
      margin: unset;
      background-color: #efefef;
    }
  }

  .btns .header-shop-btn {
    font-size: 14px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .btns .header-shop-btn-cn {
    z-index: 10;
    height: 28px;
    padding-top: 0;
    padding-bottom: 0;
    background-image: unset;
  }

  .btns img {
    width: 28px;
    max-width: unset;
  }
}

@media (max-width: $breakPoint_m) {
  .countdown-hero {
    height: auto;
  }
}

@media (min-width: $breakPoint_xxxl) {
  .menus {
    .dropdown {
      position: fixed;
      width: 100vw;
      left: unset;
      top: $header-height;
    }
  }
}
</style>
