<template>
  <div>
    <div :class='{"text-center": isMobile}' id="at-versions">
      <div class="versions-title">Two Versions</div>
      <div class="snmk-switch">
        <div class="snmk-switch-option" :class="{'snmk-btn-active': selectedType ===  types.ThreeInOne}" @click="onClickType(types.ThreeInOne)">3-in-1</div>
        <div class="snmk-switch-option" :class="{'snmk-btn-active': selectedType ===  types.ThreeDirectionPrinting}" @click="onClickType(types.ThreeDirectionPrinting)">3D Printing</div>
      </div>
      <div v-if='isMobile' class="version-container">
        <template v-for="type of versions.types" >
          <div v-if="selectedType === type.name" :key="type.name" >
            <div class="text-content-container">
              <div class="common-title">
                {{type.name}}
              </div>
              <div class="common-desc">
                {{type.desc}}
              </div>
              <div class="select-size">
                <div v-for="(item, index) of versions.sizes" :key="item.size" class="size-option" :class="{'size-option-active': index === selectedSizeIdx}">
                  <div @click="selectedVersion(index)">{{item.size}}</div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="version-img">
          <img class="toolhead-img" :style="{visibility: selectedType === types.ThreeInOne ? 'unset' : 'hidden'}" :src="versions.toolHeadImgSrc" alt="three tool heads">
          <img :src="versionImgSrc">
        </div>
      </div>
      <div v-else class='snmk-container'>
        <div class='snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-offset-2 snmk-col-l-offset-2'>
          <template v-for="type of versions.types" >
            <div v-if="selectedType === type.name" :key="type.name" >
              <div class="text-content-container">
                <div class="common-title">
                  {{type.name}}
                </div>
                <div class="common-desc">
                  {{type.desc}}
                </div>
                <div class="select-size">
                  <div v-for="(item, index) of versions.sizes" :key="item.size" class="size-option" :class="{'size-option-active': index === selectedSizeIdx}">
                    <div @click="selectedVersion(index)">{{item.size}}</div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class='snmk-col-5 snmk-col-l-5 snmk-col-m-5'>
          <img class="toolhead-img" :style="{visibility: selectedType === types.ThreeInOne ? 'unset' : 'hidden'}" :src="versions.toolHeadImgSrc" alt="three tool heads">
          <img :src="versionImgSrc">
        </div>
      </div>
    </div>
    <div class='snmk-container enclosure'>
      <div class='snmk-col-3 snmk-col-l-3 snmk-col-m-3 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 text-box'>
        <div class='enclosure-comment' v-html='enclosure.comment'></div>
        <div class='enclosure-title' v-html='enclosure.title'></div>
        <div>
          <Navigate :route="enclosure.route" :aLink="enclosure.link" class='snmk-btn'>{{ enclosure.btnText }}</Navigate>
        </div>
      </div>
      <div class='snmk-col-5 snmk-col-l-5 snmk-col-m-5 snmk-col-s-4 snmk-col-xs-4'>
        <NuxtImg class='w-100' :src="isMobile ? enclosure.imgSrcMob : enclosure.imgSrc" :alt="enclosure.title" loading='lazy' />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const snapmaker2 = computed(() => i18n.tm('snapmaker2Data'))
const versions = computed(() => snapmaker2.value.versions || {})
// const largeMachineImgSrc = computed( () => isMobile.value ? versions.value.sizes[0].mobileImgSrc : versions.value.sizes[0].imgSrc)
// const smallMachineImgSrc = computed(() => isMobile.value ? versions.value.sizes[1].mobileImgSrc : versions.value.sizes[1].imgSrc)
const enclosure = computed(() => versions.value.enclosure)
// const canScrollWork = ref(!isMobile.value)

const versionImgSrc =  ref('')
onMounted(() => {
  if (versions.value && versions.value.sizes && versions.value.sizes[0]) {
    versionImgSrc.value = isMobile.value ? versions.value.sizes[0].mobileImgSrc : versions.value.sizes[0].imgSrc
  }
})

const selectedSizeIdx = ref(0)
const selectedType = ref('3-in-1')
const types = ref({
  ThreeInOne: '3-in-1',
  ThreeDirectionPrinting: '3D Printing'
})
const selectedVersion = (index: number) => {
  selectedSizeIdx.value = index
  const selectedSize = versions.value.sizes[index]
  versionImgSrc.value = isMobile.value ? selectedSize.mobileImgSrc : selectedSize.imgSrc
}
const onClickType = (type: string) => {
  selectedType.value = type
  selectedVersion(0)
}



</script>


<style lang="scss" scoped>

  #at-versions {
    padding: 7.65vw 0 6.25vw;
    text-align: center;
  }

.versions-title {
  color: $black-white-1;
  margin-bottom: 6.25vw;
  text-align: center;
  font-weight: 700;
  font-size: 72px;
  line-height: 80px;
}

.snmk-switch {
  background: #F1F1F1;
  border-radius: $radius;
    display: inline-block;

  .snmk-switch-option {
    text-align: center;
    display: inline-block;
    position: relative;
    min-width: 9em;
    padding: 1em 2em;
    border: none;
    cursor: pointer;
    border-radius: $radius;


    color: #1F1F1F;
    background: #F1F1F1;
    border: none;
  }

  .snmk-switch-option:nth-child(2){
    margin-left: -1em;
  }


  // .snmk-switch-option:nth-child(1){
  //   padding-right: 5em;
  // }
  // .snmk-switch-option:nth-child(2){
  //   margin-left: -4em;
  //   padding-left: 5em;
  // }
  // .snmk-switch-option:nth-child(1).snmk-btn-active{
  //   padding-right: 2em;
  // }
  // .snmk-switch-option:nth-child(2).snmk-btn-active{
  //   margin-left: -2em;
  //   padding-left: 2em;
  // }



  .snmk-btn-active {
    color: white;
    background: $blue;
    z-index: 1;
  }
}



.version-container {
  display: flex;
  justify-content: center;
  text-align: left;
  margin-top: 3.8vw;
  margin-bottom: 6.87vw;
}

.text-content-container {
  width: 21.56vw;
  text-align: left;
  @include mobile {
    text-align: center;
  }
}

.common-title {
  margin: 2.45vw auto 1.66vw;
  font-weight: 700;
  font-size: 2.5vw;
  line-height: 2.91vw;
  // font-size: 24px;
  // line-height: 32px;

  color: #1F1F1F;
}
.common-desc {
  // font-size: 16px;
  // line-height: 24px;
  font-size: 0.8vw;
  line-height: 1.25vw;
  color: #1F1F1F;
}

.select-size {
  display: flex;
  flex-direction: column;
  margin-top: 3.28vw;

  .size-option {
    cursor: pointer;
    position: relative;
    padding: 1.71vw 0;
    padding-left: 1.3vw;
    font-size: 1.25vw;
    line-height: 1.6vw;
    // font-size: 24px;
    // line-height: 32px;


    color: #AAAAAA;

    &::before {
      content: ".";
      position: absolute;
      left: 1.5px;
      top: 0;
      overflow: hidden;
      height: 100%;
      width: 1px;
      background-color: #D1D1D1;
      display: block;
    }

    &-active {
      font-weight: 700;
      font-size: 1.25vw;
      line-height: 1.6vw;
      // font-size: 24px;
      // line-height: 32px;
      color: #1F1F1F;

      &::before {
        width: 4px;
        left: 0;
        background-color: #1F1F1F;
        border-radius: 2px;
        z-index: 1;
      }
    }
  }
}
.machine-active, .machine-img {
  position: absolute;
  top: 0;
  left: 0;
}

.machine-img {
  // display: none;
}

.version-img {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 40.05vw;
}
.toolhead-img {
  margin-top: 32px;
  width: 7.34vw;
}


.enclosure {
  margin-block: 120px;
  @include mobile {
    text-align: center;
  }
}
.text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .enclosure-comment {
    color: #1F1F1F;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 133.333% */

    @include mobile {
      font-size: 24px;
      font-weight: 600;
      line-height: 28px; /* 116.667% */
    }
  }
  .enclosure-title {
    color: #1F1F1F;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
    letter-spacing: -0.24px;

    margin-block: 32px 55px;

    @include mobile {
      text-align: center;
      font-size: 36px;
      line-height: 40px;
      margin-block: 15px 30px;
    }
  }
  .snmk-btn {
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
  }
}


@include mobile {
  #at-versions {
    padding-right: 24px;
    padding-left: 24px;
  }
  .version-container {
    flex-direction: column;
  }
  .versions-title {
    margin: 11.73vw auto 8.53vw;
    font-size: 9.6vw;
    line-height: 10.6vw;
  }
  .text-content-container {
    width: 100%;
    // margin: 0 24px;
  }
  .common-title {
    font-size: 6.4vw;
    line-height: 7.4vw;
    // font-size: 48px;
    // line-height: 56px;
    text-align: center;
  }
  .common-desc {
    font-size: 4.2vw;
    line-height: 6.4vw;
    // font-size: 32px;
    // line-height: 48px;
  }

  .snmk-switch .snmk-switch-option:nth-child(2){
    margin-left: -1em;
  }
  .select-size {
    flex-direction: row;
    margin-top: 8.5vw;
    justify-content: center;

    .size-option {
      padding: 1.71vw 12px;
      font-size: 3.2vw;
      line-height: 4.2vw;

      color: #AAAAAA;

      &::before {
        height: 1px;
        width: 100%;
        bottom: 1.5px;
        top: unset;
      }

      &-active {
        font-weight: 700;
        color: #1F1F1F;


        &::before {
          height: 4px;
          z-index: 1;
          bottom: 0;
        }
      }
    }
  }
  .version-img {
    flex-direction: column;
    width: 100%;
    margin: 5.3vw auto;
    padding: 0 24px;
  }
  .toolhead-img {
    margin-top: 5.333vw;
    margin-bottom: 9.733vw;
    width: 18.8vw;
  }


}


</style>
