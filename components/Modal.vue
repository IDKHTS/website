<template>
  <div class="modal-wrapper">
    <div class="mask" @click="onCancel"></div>
    <div class="modal-container">
      <div class="title-part" v-if="withTitle">
        <span>{{title}}</span>
        <i class="fa fa-close" aria-hidden="true" v-if="isClose" @click="onCancel"></i>
      </div>
      <div v-else-if="isClose" class="overflow-hidden">
        <div class="close-icon" @click="onCancel" />
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
   name: 'Modal',
   props: {
     isClose: {
       default: true
     },
     title: {
       default: 'Modal'
     },
     onCancel: {
       require: true
     },
     withTitle: {
       default: true
     }
   }
}
</script>

<style scoped lang='scss'>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2001;
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2002;
      background: #00000020;
    }
    .modal-container {
      min-width: 300px;
      min-height: 200px;
      background: #fff;
      border-radius: 8px;
      display: block;
      position: absolute;
      z-index: 2003;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .title-part {
        height: 13vw;
        max-height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0 22px;
        align-items: center;
        border-bottom: 1px solid #c7c8c9;
        font-size: 24px;
        white-space: nowrap;
        color: #272829;
        .fa-close {
          color: #00000050;
          &:hover {
            cursor: pointer;
          }
        }
        @media (max-width: 767px) {
            font-size: 1.2rem;
        }
      }
    }
    .close-icon {
      max-width: 24px;
      max-height: 24px;
      width: 1.25vw;
      height: 1.25vw;
      min-height: 14px;
      min-width: 14px;
      // position: absolute;
      // right: 0px;
      float: right;
      background-size: cover !important;
      background: url('https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/action-one/close-icon.png');
      margin: 12px auto;
      margin-right: 36px;
      &:hover {
        cursor: pointer;
        background: url('https://ditfjx9w4x3vl.cloudfront.net/assets/artisan/action-one/close-icon-hover.png');
      }
    }
  }
</style>