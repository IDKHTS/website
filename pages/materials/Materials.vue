<template>
  <div>
    <div class="bgimg-text-wrapper">
      <div class="bgimg-wrapper page-top-img" :style="{'background-image': `url('${!isMobile ? materialsData.imgSrc : materialsData.mobileImgSrc}')`}">
        <!-- <img :src="materialsData.imgSrc" alt=""> -->
      </div>
      <div class="text-wrapper text-center" style="width: 100vw">
        <div class="snmk-container">
          <div class="text-title font-bw-1 big-title-2 bold
            snmk-col-6 snmk-col-l-6 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-6 snmk-col-m-1 snmk-col-s-4 snmk-col-xs-4"
          >{{materialsData.mainTitle}}</div>
          <div class="black_white_2 font-2
            snmk-col-6 snmk-col-l-6 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-6 snmk-col-m-1 snmk-col-s-4 snmk-col-xs-4"
          >
            <template v-for="item of materialsData.mainDesc" :key="item">
              <span v-html="item"></span>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-xl">
      <SecondaryNavBar
        class="secondary-nav-bar"
        :navData="navData"
        @onToggleMobMenu="onToggleMobMenu"
        >
      </SecondaryNavBar>
      <div class="snmk-container">
        <div v-for="(productCategory,index) of productsData" :key="productCategory.title"
          class="snmk-col-s-4 snmk-col-xs-4 product-category mb-3xl"
          :class="{
            'product-category-header-show': isHeaderShow,
            'snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-offset-1 snmk-col-l-offset-1': index <= 1,
            'snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-offset-1 snmk-col-l-offset-1 only-one': index > 1 && index % 2===0,
            'snmk-col-5 snmk-col-l-5 snmk-col-m-4 only-one': index > 1 && index % 2!==0,
            }"

          >
          <div class="product-category-target" :id="productCategory.title.replace(/ /ig, '-')"></div>
          <div class="product-category-text" >
            <div class="product-category-title title-1 font-bw-1 bold mr-xs">{{productCategory.title}}</div>
            <div v-if="productCategory.description" class="product-category-desc font-2 font-bw-1 mt-m pr-m">{{productCategory.description}}</div>
          </div>
          <div class="product-category-products" :class="{'is-recommend': productCategory.products.some(v=>v.isRecommend) }">
            <div v-for="product of productCategory.products" :key="product.title"
            :class="{'recommend': product.isRecommend, 'normal': !product.isRecommend, }"
            class="product-category-product mt-2xl"
            >
            <!-- :class="{'w-50': product.isRecommend, 'w-25': !product.isRecommend}" -->
              <div class="product-img font-bw-8">
                <Navigate class="img-link-box" :route="product.btns[0].route" :aLink="product.btns[0].link">
                  <img :src="product.imgSrc" :alt="product.title">
                </Navigate>
              </div>

              <div class="title-3 font-bw-1 bold mt-m vertical-center">
                <span>{{product.title}}</span>
                <span class="badge-new font-3" v-if="product.isNew">{{newProductBadage}}</span>
              </div>

              <div class="font-1 font-bw-2 mb-xs mt-s">{{product.price}}</div>

              <div class="hover-target">
                <Navigate class="snmk-link mr-l" v-for="btn of product.btns" :key="btn.text"
                :route="btn.route" :aLink="btn.link" target="_blank" :id="btn.traceID"
                >
                {{btn.text}}
                </Navigate>
              </div>

            </div>
          </div>
        </div>

        <div class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-l-offset-1" v-if="!isMobile">

          <div class="bgimg-text-wrapper mb-3xl" >
            <div class="bgimg-wrapper page-bottom-img">
              <img :src="materialsData.guideImgSrc" alt="" style="width: 100%;">
            </div>
            <div class="text-wrapper text-center w-100" style="color: white;">
              <div class="text-title black_white_1 title-2 bold">{{materialsData.guideTitle}}</div>
              <div class="text-desc black_white_2 font-2" style="margin: 0px 11.979vw;">
                <template v-for="item of materialsData.guideDesc" :key="item">
                  <span v-html="item"></span>
                </template>
              </div>
              <Navigate class="snmk-primary-btn mt-s"  :key="materialsData.btn.text"
              :route="materialsData.btn.route" :aLink="materialsData.btn.link" target="_blank" :id="materialsData.btn.traceID"
              >
                {{materialsData.btn.text}}
              </Navigate>
            </div>
          </div>

        </div>
      </div>

      <div class="bgimg-text-wrapper" style="margin-top: 80px" v-if="isMobile">
        <div class="bgimg-wrapper page-bottom-img" :style="{'background-image': `url('${materialsData.guideMobileImgSrc}')`}"></div>
        <div class="text-wrapper text-center w-100" style="color: white;">
          <div class="text-title black_white_1 title-2 bold">{{materialsData.guideTitle}}</div>
          <div class="text-desc black_white_2 font-2" style="margin: 0px 11.979vw;">
            <template v-for="item of materialsData.guideDesc" :key="item">
              <span v-html="item"></span>
            </template>
          </div>
          <Navigate class="snmk-primary-btn mt-s"  :key="materialsData.btn.text"
          :route="materialsData.btn.route" :aLink="materialsData.btn.link" target="_blank" :id="materialsData.btn.traceID"
          >
            {{materialsData.btn.text}}
          </Navigate>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang='ts'>
import SecondaryNavBar from '@@/components/SubmenuStickyBar.vue'
import Navigate from '@@/components/Navigate.vue'
import { calcChildsHeight } from '@@/resources/js/calcHeight'
import head from '@@/resources/data/head'
import { useGlobalStore } from '~/stores'
import { storeToRefs } from 'pinia'

useHead(head.materials)
const { isMobile, isHeaderShow } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const isCN = computed(() => i18n.locale.value === 'zh-CN')
const materialsData = computed<any>(() => i18n.tm('materialsData'))
const productsData = computed(() => materialsData.value.materialProducts)
const navData = computed(() => ({
  title: isCN.value ? '材料' : 'Materials',
  navList: productsData.value.map((v: any) => ({
    text: v.title, href: v.title.replace(/ /ig, '-')
  }))
}))
const newProductBadage = computed(() => isCN.value ? '新款' : 'New')
const isOpenMobMenu = ref(false)
const onToggleMobMenu = (isOpen: boolean) => {
  isMobile.value && window.scrollTo(0, window.innerHeight)
  isOpenMobMenu.value = isOpen
}
const headerHeight = ref(0)
onMounted(() => calcChildsHeight(document.getElementById('header')))




</script>

<style lang="scss" scoped>
.secondary-nav-bar {
  transition: all .2s ease-in-out;
  // margin-top: 48px
}

.header-show-top {
  top: 57px;
}

.badge-new {
  margin-left: 8px;
  border-radius: 4px;
  background-color: $yellow;
  color: $black_white_8;
  padding: .1em 8px;
}

$gutter: 24px;
.recommend {
  width: calc((100% - #{$gutter}*3) / 2 + #{$gutter});
}
.only-one .recommend{
  width: 100%;
}
.normal {
  width: calc((100% - #{$gutter}*3) / 4);

}
.product-category-desc {
  margin-left: 8px;
  width: calc(((50% - 4*24px) / 5)*4 + 3*24px);
}


.product-category {
  position: relative;
  // &:target {
  //   padding-top: 83px !important;
  // }
  .product-category-target{
    top: -143px !important;
  }
  &:last-child {
    // margin-bottom: 100px;
  }
  &:first-child{
    padding-top: 68px;
    margin-bottom: 64px;
    .product-category-text {
      margin-top: 0;
    }
  }

}
.product-category-target {
  position: absolute;
  top: 83px;
}

.product-category-header-show {
  // &:target {
  //   padding-top: 143px !important;
  // }
  .product-category-target{
    top: -143px !important;
  }
}

.product-category-text{
  display: flex;
  align-items: center;
}

.product-category-products {
  display: flex;
  justify-content: flex-start;
  // justify-content: space-between;
  flex-wrap: wrap;
}
.only-one {
  .product-img {
    text-align: center;
    // height: 50%;
  }
  .img-link-box {
    // height: 100%;
  }
  img {
    width: 43%;
    max-height: 100%;
    // transform: scale(0.8);
  }
  :deep(.img-link-box) {
    display: block;
    height: 100%;
  }
}
.product-category-product {
  margin-right: $gutter;

  .product-img {
    cursor: pointer;
    padding: 1.68vw;
    border-radius: 8px;
    background-color: $black_white_8;
    transition: all .3s ease-in-out;
    line-height: 0;
    overflow: hidden;

    &:hover {
      padding: 0;
    }

    &:hover ~ .hover-target :deep(.snmk-link):first-child  {
      color: $blue;
      &::after {
        background-color: $blue;
      }
    }

    img{ transition: all .3s ease-in-out;}
  }

  // img {
  //   border-radius: 8px;
  //   background-color: $black_white_8;

  // }

  &:last-child {
    margin-right: 0;
  }
  &:nth-child(4n) {
    padding-right: 0;
    margin-right: 0;
  }

  .snmk-link {
    display: inline-block;
    &::v-deep a {
      color: $black_white_1;
      font-size: 14px;
      &:hover {
        color: $blue;
      }
    }
  }
}
.product-category-product.recommend .product-img{
  padding: 0;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.1);
      // width: calc(100% + 3.36vw);
      // max-width: none;
    }
  }
}
// .only-one .product-category-product.recommend .product-img:hover img{
//   transform: scale(1);
// }

.bgimg-text-wrapper {
  position: relative;
  .bgimg-wrapper{
    line-height: 0;
  }
  .text-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text-title {
    margin-bottom: 18px;
  }
  :deep(.snmk-primary-btn):hover {
    color: white;
  }
}
.page-top-img {
  height: 496px;
  background-position: center center;
  background-size: 2560px 496px;
}
.page-bottom-img~.text-wrapper {
  top: 3.541vw;
  transform: translateX(-50%);
}
.page-bottom-img {
  border-radius: 8px;
  overflow: hidden;
}



@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {

  .product-category-desc {
    margin-left: 0;
    padding-left: 16px;
    width: 50%;
  }


  .recommend {
    width: 66.66%;
  }
  .normal {
    width: calc(33.33% - #{$gutter});
  }

  .product-category-product {
    &:last-child {
      margin-right: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:nth-child(4n) {
      margin-right: $gutter;
    }

  }

  .product-category-products.is-recommend .product-category-product:nth-child(2n) {
    margin-right: 0;
  }
  // .product-category-products.is-recommend .product-category-product:first-child {
  //   margin-right: 0;
  // }
}

@media (max-width : $breakPoint_m) {
  // .secondary-nav-bar {
  //   margin-top: 24px
  // }
  .product-category .product-category-target{
    top: -83px !important;
  }
  .product-category:target {
    .product-category-text {
      margin-top: unset;
    }
  }
  .product-category-text {
    margin-top: 60px;
    flex-direction: column;
    align-items: flex-start;
  }
  .product-category-title {
    width: 100%;
  }
  .product-category-desc {
    margin-left: 0;
    width: 100%;
  }

  $gutter: 16px;
  .recommend {
    width: 100%;
  }
  .normal {
    width: calc((100% - #{$gutter}) / 2);
  }

  .product-category-product{
    margin-right: $gutter;

    &:last-child {
      margin-right: 0;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }

  }

  .product-category-products.is-recommend .product-category-product:nth-child(2n) {
    margin-right: $gutter;
  }
  .product-category-products.is-recommend .product-category-product:first-child {
    margin-right: 0;
  }


  .page-top-img {
    height: 420px;
    background-position: center center;
    background-size: 680px 420px;
  }

  .page-bottom-img {
    border-radius: 0;
    height: 545px;
    background-position: center center;
    background-size: 680px 545px;

    &~.text-wrapper{
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translate(-50%);

    }
  }
}



</style>
