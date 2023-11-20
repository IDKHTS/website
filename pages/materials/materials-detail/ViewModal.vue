<template>
  <div class="modal-container scroll-fixed" >
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <div class="feat">
        <div style="line-height: 0;width: 100%;"><img style="width: 100%; max-width: unset" :src="feats[selectedIdx].imgSrc" :alt="feats[selectedIdx].title"></div>
        <div>
          <div class="title-2 bold text-center c-white bold mt-l">{{feats[selectedIdx].title}}</div>
          <div class="title-4 text-center font-bw-6 mt-s mb-xl">{{feats[selectedIdx].desc}}</div>
        </div>

        <div class="pages">
          <div v-for="(item,index) of feats" class="page-bullet"
          :key="item.title+'page-bullet'"
          @click="selectPage(index)"
          :class="{'page-bullet-active': selectedIdx === index}"></div>
        </div>
      </div>

            <!-- <div v-for="item of feats" :key="item.title" class="feat">
              <div style="line-height: 0"><img :src="item.imgSrc" :alt="item.title"></div>
              <div>
                <div class="font-1 bold text-center font-bw-1 bold mt-l">{{item.title}}</div>
                <div class="font-2 bold text-center font-bw-2 mt-xs mb-xl">{{item.desc}}</div>
              </div>
            </div> -->
    </div>
    <div class="select-pre" @click="selectPage(selectedIdx - 1)">
      <div class="select-pre-icon icon-left">
        <span class="iconfont select-icon ">&#xe7b2;</span>
      </div>
    </div>
    <div class="select-next" @click="selectPage(selectedIdx + 1)">
      <div class="icon-right">
        <span class="iconfont select-icon ">&#xe7b2;</span>
      </div>
    </div>
    <div class="close" @click="close">X</div>
  </div>
</template>

<script setup lang='ts'>
// import { storeToRefs } from 'pinia';
// import { useGlobalStore } from '~/stores';


const props = withDefaults(defineProps<{
  feats: []
}>(), { feat: [] } ) 
// const { isMobile } = storeToRefs(useGlobalStore())

const selectedIdx = ref(0)
const emit = defineEmits(['onSelectPage', 'onClose'])
const selectPage = (index: number) => emit('onSelectPage', index)
const close = () => emit('onClose')


</script>

<style lang="scss" scoped>

.modal-container {
  z-index: 1111;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  .modal-overlay {
    height: 100%;
    width: 100%;
    background: #000000;
    opacity: 0.9;
  }
  .close {
    position: absolute;
    top: 48px;
    right: 48px;
    // margin-top: 48px;
    // margin-right: 48px;
    float: right;
    height: 24px;
    width: 24px;
    background-color:  $black-white-7;
    line-height: 24px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;

  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background-color: white;
    background-color: transparent;

    width: 59.375%;
    // height: 73.85vh;
  }
  .feat {
    display: flex;
    flex-direction: column;
    align-items: center;
    // width: calc((100% - 48px) / 3);
    // margin-right: 24px;

    &:nth-child(3n) {
      margin-right: 0;
    }


    // background-color:  $black-white-7;
  }

  .pages {
    display: flex;

    .page-bullet{
      height: 6px;
      width: 6px;
      background-color:  $black-white-5;
      border-radius: 50%;
      cursor: pointer;
      margin-right: 8px;
    }
    .page-bullet-active {
      background-color: $blue;
    }
  }

  .select-pre,.select-next  {
    position: absolute;
    width: 30%;
    height: 100%;
    top: 0;
    cursor: pointer;
    &:hover .select-icon {
      color: $black-white-8;
      background-color: rgba(255, 255, 255, 0.35);;
    }
  }
  .select-pre {
    left: 0;
  }
  .select-next {
    right: 0;
  }

  .select-icon {
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 50%;

    &:hover {
      color: $black-white-8;
      background-color: rgba(255, 255, 255, 0.35);;
    }
    &:active {
      color: $black-white-2;
    }
  }
  .icon-left, .icon-right{
    user-select: none;
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 36px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-self: center;
    align-items: center;
  }
  .icon-left {
    left: 13vw;
    transform: rotate(90deg);
  }
  .icon-right {
    right: -13vw;
    transform: rotate(-90deg);
  }

}

</style>
