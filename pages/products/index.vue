<template>
  <div>
    <SecondaryNavBar
      class="secondary-nav-bar"
      :navData="navData"
      @onToggleMobMenu="onToggleMobMenu"
      >
    </SecondaryNavBar>
    <div class="snmk-container" >
      <div v-for="productCategory of productsData" :key="productCategory.title" :id="productCategory.title.replace(/ /ig, '-')"
        class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-l-offset-1 product-category"
        :class="{'is-mob': isMobile, 'is-pc-target': isHeaderShow && !isMobile}"
        >
        <div class="product-category-text mt-3xl" >
          <div class="product-category-title title-1 font-bw-1 bold mr-xs">{{productCategory.title}}</div>
          <div class="product-category-desc font-2 font-bw-1 mt-m pr-m">{{productCategory.description}}</div>
        </div>
        <div class="product-category-products" :class="{'is-recommend': productCategory.products.some(v=>v.isRecommend) }">
          <div v-for="product of productCategory.products" :key="product.title"
           :class="{'recommend': product.isRecommend, 'normal': !product.isRecommend, }"
           class="product-category-product mt-2xl"
           >
            <div class="product-img font-bw-8">
              <Navigate :route="product.btns[0].route" :aLink="product.btns[0].link" target="_blank">
                <img :src="product.imgSrc" :alt="product.title">
              </Navigate>
            </div>

            <div class="title-3 font-bw-1 bold mt-m vertical-center">
              <span>{{product.title}}</span>
              <span class="badge-new font-3" v-if="product.isNew">{{newProductBadage}}</span>
              <span class="badge-new font-3" v-if="product.isPreHeat">{{preHeatBadage}}</span>
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
    </div>
  </div>
</template>

<script setup lang='ts'>
import { calcChildsHeight } from '@@/resources/js/calcHeight'
import SecondaryNavBar from '@@/components/SubmenuStickyBar.vue'
import Navigate from '@@/components/Navigate.vue'
import head from '@@/resources/data/head'
import { useGlobalStore } from '~/stores'
import { storeToRefs } from 'pinia'


useHead(head.products)
const { isMobile, isHeaderShow } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const isOpenMobMenu = ref(false)
const headerHeight  = ref(0)

const isCN = computed(() => i18n.locale.value === 'zh-CN')
const productsData = computed<any>(() => i18n.tm('productsData'))
const navData = computed(() => ({
  title: isCN.value ? '产品' : 'Products',
  navList: productsData.value.map(v => ({
    text: v.title, href: v.title.replace(/ /ig, '-')
  }))
}))
const newProductBadage = computed(() => isCN.value ? '新款' : 'New')
const preHeatBadage = computed(() => isCN.value ? '敬请期待' : 'PREORDER')

const onToggleMobMenu = (isOpen: boolean) => isOpenMobMenu.value = isOpen

onMounted(() => {
  headerHeight.value = calcChildsHeight(document.getElementById('header'))
})

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
.normal {
  width: calc((100% - #{$gutter}*3) / 4);

}
.product-category-title {
  width: 50%;
}
.product-category-desc {
  margin-left: 8px;
  width: calc(((50% - 4*24px) / 5)*4 + 3*24px);
}



.product-category {
  &.is-pc-target:target {
    padding-top: 60px;
  }
  &.is-mob:target {
    padding-top: 72px;
  }
  &:first-child.is-mob:target {
    padding-top: 140px;
  }
  &:last-child {
    margin-bottom: 100px;
  }
  &:first-child:target {
    padding-top: 140px;
  }
  &:first-child{
    // margin-top: 68px;
    padding-top: 68px;
    .product-category-text {
      margin-top: 0;
    }
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

    &:hover ~ .hover-target .snmk-link:first-child  {
      &::v-deep a { color: $blue; }
      &::after {
        background-color: $blue;
      }
    }

    img{ width: 100%;transition: all .3s ease-in-out; }
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
    display: inline;
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


@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
  // .secondary-nav-bar {
  //   margin-top: 24px
  // }
  // .product-category-text {
  //   flex-direction: flex;
  //   align-items: flex-start;
  // }
  .product-category-title {
    width: 50%;
  }
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
  .product-category-text {
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
}
</style>
