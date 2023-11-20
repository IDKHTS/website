<template>
  <div class='p-menu-wrapper'>
    <div class='close-btn' @click='onCloseDropdown'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16" stroke="black" stroke-width="1" aria-hidden="true"><path d="M8,7.29300149 L13.086003,2.20699851 C13.4764675,1.81653401 14.1095355,1.81653401 14.5,2.20699851 L8.70699851,8 L13.7930015,13.086003 C14.183466,13.4764675 14.183466,14.1095355 13.7930015,14.5 L8,8.70699851 L2.91399702,13.7930015 C2.52353252,14.183466 1.89046449,14.183466 1.5,13.7930015 L7.29300149,8 L2.20699851,2.91399702 C1.81653401,2.52353252 1.81653401,1.89046449 2.20699851,1.5 L8,7.29300149 Z"></path></svg>
    </div>
    <div class='left-side-block'>
      <Navigate
        :aLink='product.link'
        :route='product.route'
        v-for='(product, index) of dataSrc' :key='product.title' @mouseenter='onSelectProduct(index)'
        class='product-item-box'
        :aClass="'product-item ' + (index === selectedProductIndex && 'selected-product-item') "
      >
        <div class='l-img-box'><img :src="product.imgSrc" alt=""></div>
        <div class='l-text'>
          <div class='l-title' v-html='product.title'></div>
          <div class='l-desc' v-html='product.desc'></div>
        </div>
      </Navigate>
      <hr>
      <router-link style='font-size: 16px;' class='snmk-link-btn' to='/products'>See All Products</router-link>
    </div>
    <div class='right-side-block'>
      <div class='r-title' v-html='dataSrc[selectedProductIndex].moduleGroupTitle'></div>
      <div class='grid-container'>
        <!-- :aClass='`module-item ${moduleItem.type === "main" && "r-mi-main"} ${moduleItem.type === "submain" && "r-mi-submain"}`'' -->
        <div 
          v-for='moduleItem of dataSrc[selectedProductIndex].moduleGroups' :key='moduleItem.name'
          
          class='module-item'
          :class='{"r-mi-main": moduleItem.type === "main", "r-mi-submain": moduleItem.type === "submain"}'
        >
          <Navigate :aLink='moduleItem.link' :route='moduleItem.route'>
            <div>
              <img :src="moduleItem.imgSrc" alt="">
              <div class='text-center r-m-name' v-html='moduleItem.name' ></div>
            </div>
          </Navigate>
        </div>
      </div>
      <!-- <div class='text-center' style='margin-top: 32px;'>
        <router-link style='font-size: 16px;' class='snmk-link-btn' to='/products'>See All Products</router-link>
      </div> -->

    </div>
  </div>
</template>


<script>
import Navigate from '@@/components/Navigate.vue'
// import { calcChildsHeight } from '@/js/calcHeight'

export default {
  props: {
    device: {
      default: 'desktop'
    },
    dataSrc: {
      default: function () {
        return {}
      }
    }
  },
  data: function () {
    return {
      selectedProductIndex: 0
    }
  },
  computed: {
  },
  components: {
    Navigate
  },
  methods: {
    onSelectProduct(index) {
      this.selectedProductIndex = index
      this.$emit('onSelecedProduct')
    },
    onCloseDropdown() {
      this.$emit('closeDropdown')
    }
  },
  mounted () {

  }

}
</script>

<style scoped lang='scss'>
.p-menu-wrapper {
  position: relative;
  width: 1200px;
  padding-top: 24px;
  padding-bottom: 30px;
  display: flex;
  margin-inline: auto;

  .close-btn {
    z-index: 1;
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 24px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;


    &:hover {
      background-color: #F8F8F8;
    }
  }

  .left-side-block {
    flex: 0 0 auto;
    margin-right: 32px;

    &::v-deep {
      .product-item {
        position: relative;
        margin-top: 40px;
        display: flex;
        // padding: 10px;


        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 68px;
          height: 100%;
          background-color: transparent;
          transition: all 0.5s linear;
        }

        &:hover {
          // background-color: #F4F4F4;

          &::before {
            background-color: #F4F4F4;
            width: 100%;
          }
        }
      }

      .selected-product-item {
        &::before {
          background-color: #F4F4F4;
          width: 100%;
        }
      }
    }
    .product-item-box:first-child::v-deep .product-item  {
      margin-top: 0;
    }

    .l-img-box  {
      width: 68px;
      margin-right: 12px;
      border-radius: 4px;
      line-height: 0;

      img {
        border-radius: 4px;
      }
    }

    .l-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 188px;
    }
    .l-title {
      color: #000;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }
    .l-desc {
      margin-top: 8px;
      color: #747474;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    .l-img-box, .l-text {
      z-index: 2;
    }
  }
  .right-side-block {
    position: relative;
    flex: 1 1 auto;

    .r-title {
      color: #000;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.24px;

      margin-top: 10px;
      margin-bottom: 20px;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 10px;
      grid-column-gap: 10px;
    }

    .module-item {
      padding: 10px;
      background-color: #F1F1F1;
      border-radius: 4px;
    }
    .module-item img {
      transform: scale(0.9);
      transition: all 0.5s;
    }
    .module-item:hover img {
      transform: scale(1);
    }
    .r-mi-main {
      grid-column: span 2;
      grid-row: span 2;

      .r-m-name {
        margin-top: 6px;
      }
    }
    .r-mi-submain {
      grid-column: span 2;
      // img { width: calc(100% - 32px);}
    }

    .r-m-name {
      display: block;
      min-height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      text-align: center;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 150% */

      &::v-deep a {
        color: #000;
      }
    }

    img {
      width: 100%;
    }
  }

}


</style>
