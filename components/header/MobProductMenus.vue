<template>
  <div class='p-menu-wrapper'>
    <CollectionMenu
      v-for='(product, index) of dataSrc'
      :key='product.title'
      :isOpen="index == selectedProductIndex"
      @toggle="onToggleExpandMenu(index)"
      speed=".2s"
      class='collect-menu'
    >
    <template v-slot:triggle-bar>
      <div class="menu-item">
        <div class='p-trigger'>
          <div class='p-trigger-text'>
            <img :src="product.imgSrc" :alt="product.title">
            <div class='pt-title' v-html='product.title'></div>
          </div>
          <img :class="{'rotate-transition': index == selectedProductIndex}" class="left-icon" :src="'https://ditfjx9w4x3vl.cloudfront.net/assets/header/go-icon.svg'" alt="">
        </div>
      </div>
    </template>
    <template v-slot:content>
      <div class='modules-wrapper'>
        <template v-if='dataSrc[selectedProductIndex]'>
          <div class='r-title' v-html='dataSrc[selectedProductIndex].moduleGroupTitle'></div>
          <div class='module-container'>
            <div v-for='moduleItem of dataSrc[selectedProductIndex].moduleGroups' :key='moduleItem.name' class='module-item'>
              <Navigate :aLink='moduleItem.link' :route='moduleItem.route'>
                <img :src="moduleItem.imgMobSrc" alt="">
                <div class='mt-m mi-name' v-html='moduleItem.name'></div>
              </Navigate>
            </div>
          </div>
        </template>
      </div>
    </template>
    </CollectionMenu>
  </div>
</template>

<script>
import Navigate from '@@/components/Navigate.vue'
import CollectionMenu from '@@/components/CollectionMenu.vue'
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
      openMenuType: '',
      selectedProductIndex: -1
    }
  },
  computed: {
  },
  components: {
    CollectionMenu,
    Navigate
  },
  methods: {
    onToggleExpandMenu (index) {
      console.log(index)
      if (index === this.selectedProductIndex) {
        this.selectedProductIndex = -1
        return
      }
      this.selectedProductIndex = index
      this.$emit('onReCalcH')
      // this.openMenuType = this.openMenuType === menu.type ? '' : menu.type
      // this.selectedSpecificMenu = !this.selectedSpecificMenu
    }
  },
  mounted () {

  }

}
</script>

<style scoped lang='scss'>
.p-menu-wrapper {
  padding-block: 12px;
  // display: flex;

  .p-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
  }
  .p-trigger-text {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: auto;
      margin-right: 8px;
    }
    .pt-title {
      color: #1F1F1F;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

  }
  .collect-menu:first-child .p-trigger{
      margin-top: 0;
  }

  .modules-wrapper {
    padding-left: 8px;
    padding-top: 12px;
    padding-bottom: 32px;
    overflow: hidden;
    // background-color: #FAFAFA;
  }
  .r-title {
    margin-bottom: 12px;
    color: var(--unnamed, #1F1F1F);
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.24px;
  }
  .module-container {
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    padding-bottom: 10px;

    .module-item {
      // max-width: 210px;
      width: 210px;
      height: 230px;
      display: inline-block;
      background-color: #F1F1F1;
      margin-right: 10px;
      padding: 10px;
      vertical-align: top;
    }
    .mi-name {
      color: var(--unnamed, #5C5C5C);
      text-align: center;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      white-space: wrap;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
    }
  }
}


.left-icon {
  // float: right;
  // text-align: center;
  // width: 4em;
  transition: all .2s ease;
}
.rotate-transition {
  transform: rotate(90deg);
}
</style>
