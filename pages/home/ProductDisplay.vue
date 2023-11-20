<template>
  <div>
    <!-- TODO: fix  mismatches Hydration  -->
    <div v-for="(product, index) of productsDisplay"
      :key="product.title"
      class="products-show-item"
    >
      <!-- <Navigate 
        :aLink="product.links[0].href"
        :route="product.links[0].route"
        :target="'_blank'"
        > -->
        <div @click='goProduct(product)'  class="products-show-item-content" :style="{backgroundImage: 'url('+ product.imgSrc +')'}">
          <div class="title-1 mt-xl mb-2xs bold">{{product.title}}</div>
          <div class="title-4 mb-s">{{product.description}}</div>
          <div class="products-show-btns horizontal-center">
            <div v-for="link of product.links" :key="link.href || link.route" class="products-show-item-btn" style="margin-top: 2px">
              <a v-if='link.shopLinks' class="snmk-link-btn font-2 mr-xs" @click.stop.prevent='openShopModal(link.shopLinks)' :target="'_blank'">
                {{link.text}} <span class="iconfont" >&#xe60a;</span>
              </a>
              <Navigate v-else-if="!link.isGroup" @click.stop :id="link.traceID" class="snmk-link-btn font-2 mr-xs" :route="link.route" :aLink="link.href" :target="'_blank'" >
                {{link.text}} <span class="iconfont">&#xe60a;</span>
              </Navigate>
              <a v-else class="snmk-link-btn font-2 mr-xs" :id="link.traceID"  @click.stop.prevent="onOpenModal(link.groups, index)" :target="'_blank'">
                {{link.text}} <span class="iconfont">&#xe60a;</span>
              </a>
            </div>
          </div>
        </div>
        <div @click.prevent class="product-modal" v-if="index === activeModalIndex && isShowModal">
          <div class="product-modal-content" @click.stop.prevent>
            <a class="product-modal-item" v-for="item of activeGroups" :key="item.text"
              :href="item.href" target="_blank" @click.stop :id="item.traceID"
              >
              <div class="product-modal-item-img">
                <img :src="item.imgSrc" :alt="item.text">
              </div>
              <div class="mt-s text-center">{{item.text}}</div>
            </a>
          </div>
        </div>
      <!-- </Navigate> -->
    </div>
  </div>
</template>


<script>
import Navigate from '@@/components/Navigate.vue'


export default {
  props: {
    device: {
      default: 'desktop'
    },
    productsDisplay: {
      default: function () {
        return {}
      }
    }
  },
  components: {
    Navigate
  },
  data: function () {
    return {
      isShowModal: false,
      activeModalIndex: -1,
      activeGroups: {}
    }
  },
  mounted () {
    window.addEventListener('click', this.onCloseModal)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.onCloseModal)
  },
  methods: {
    onOpenModal (groups, index) {
      this.activeGroups = groups
      this.activeModalIndex = index
      this.isShowModal = true
    },
    onCloseModal () {
      if (this.isShowModal) this.isShowModal = false
    },
    openShopModal(data) {
      this.$emit('openShopModal', data)
    },
    goProduct(product) {
      const link = product.links[0]
      if(link.shopLinks) {
        this.openShopModal(link.shopLinks)
      }else if(link.isGroup) {
        onOpenModal(link.groups, 0)
      }else if(link.href) {
        window.open(link.href, '_blank')
      }else {
        this.$router.push(link.route)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: $black_white_2;
  &:hover {
    color: none;
  }
}

@media (min-width: $breakPoint_xxxl) {
  .products-show{
    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }
}
// I'm sorry, I gona shit here :)
.products-show{
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  background-color: $black_white_4;
  max-width: $breakPoint_xxxl;

  .products-show-item {
    display: block;
    position: relative;
    // width: calc(50% - 1px) ;
    width: 50%;
    height: 680px;
    color: white;

    &::v-deep a{
      width: 100%;
      height: 100%;
    }

    &:nth-child(2n) .products-show-item-content {
      border-right: 0px;
    }

    &:hover {
      cursor: pointer;
      .products-show-item-btn:first-child:deep(.snmk-link-btn) {
        a, :deep(a) { color: $black_white_5 };
        &::after{
          width: 100%;
        }
      }

    }
  }

  .products-show-btns {

    &:hover {
      .products-show-item-btn:first-child:deep(.snmk-link-btn) {
        &::v-deep a { color: white };
        &::after{
          width: 0;
        }
      }
      .products-show-item-btn:first-child:hover:deep(.snmk-link-btn) {
        &::v-deep a { color: $black_white_5 };
        &::after{
          width: 100%;
        }
      }

    }
  }



  :deep(.snmk-link-btn::after) {
    background-color: $black_white_5;
  }

  .products-show-item-content {
    position: relative;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    background-position: center;
    background-size: 1280px 680px;
    border-right: 8px white solid;
    border-top: 8px white solid;
    padding-inline: 32px;

    @include mobile {
      padding-inline: 16px;
    }
    @media (min-width: 1440px) {
      padding-inline: 64px;
    }


    &::v-deep a {
      color: white;
      &:hover {
        color: $black_white_5;
      }
    }
  }
}


.product-modal {
  position: absolute;
  background-color: rgba(0,0,0,0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: auto;

  // .mask {
  //   cursor: none;
  //   width: 100%;
  //   height: 100%;
  // }
}

.product-modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 29.678vw;
  padding: 3.541vw;

  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
}
.product-modal-item {
  margin-right: 2.291vw;
  color: $black_white_2;
  cursor: pointer;


  &:hover {
    color: $black_white_1;
    .product-modal-item-img  {
      background-color: white;
      border: 1px solid $blue;
    }

  }

  &:last-child {
    margin-right: 0;
  }
}
.product-modal-item-img {
  padding: 1.145vw;
  border-radius: 8px;
  background-color: $black_white_8;
  border: 1px solid $black_white_8;
  line-height: 0;
}

@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
  .products-show {
    .products-show-item-content {
      height: 100%;
      background-size: 903px 480px;
    }
    .products-show-item {
      // width: calc(50% - 1px);
      width: 50%;
      height: 480px;
    }
  }
  .product-modal-content {
    width: calc(100% - 48px);
    a, :deep(a) {
      color: $black_white_1;
    }
  }
}

@media (max-width : $breakPoint_m) {
  .products-show{
    flex-direction: column;
    .products-show-item-content {
      border-right: 0px;
      height: 100%;
      background-size: 903px 480px;
    }

    .products-show-item {
      width: 100%;
      height: 480px;
      border-right: 0;
    }

    a, :deep(a) {
      color: white;
    }
  }

  .product-modal-content {
    width: calc(100% - 32px);
    &::v-deep a {
      color: $black_white_1;
    }
  }
}

</style>


