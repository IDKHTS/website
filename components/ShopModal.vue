<template>
  <Modal :isClose="true" :withTitle="false" :onCancel="onCancel">
    <div class="mt-xs mx-xl title-3 bold-700 text-center" style="color: black">Please select a store according to your shipping address.</div>
    <div class="btn-wrapper my-xl">
      <a class="snmk-btn" v-for="item of shop"  :href="item.link" :key="item.text" target="_blank">
        <img :src="item.icon" :alt="item.text">
        <span v-html="item.text"></span>
      </a>
    </div>
  </Modal>
</template>

<script>
import Modal from '@@/components/Modal.vue'
export default {
  props: {
    device: {
      default: 'desktop'
    },
    onCancel: {
      default: function () {
      },
      require: true
    },
    dataSrc: {
      default: function() {
        return []
      }
    }
  },
  components: {
    Modal
  },
  computed: {
    shop () {
      return this.dataSrc.length > 0 ? this.dataSrc : [
        {
          text: `US Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/us.png`,
          link: `https://us.snapmaker.com/?SkipCozyRedirect=yes`
        },
        {
          text: `EU Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/eu.png`,
          link: `https://eu.snapmaker.com/?SkipCozyRedirect=yes`
        },
        {
          text: `Global Store`,
          icon: `https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/others.png`,
          link: `https://shop.snapmaker.com/?SkipCozyRedirect=yes`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .snmk-btn {
    margin-top: 16px;
    width: 220px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    &:first-child{ margin-top: 0}
  }
  img {
    height: 32px;
    width: 32px;
    margin-right: 16px;
  }
}
</style>
