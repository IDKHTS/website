<template>
  <div>
    <div class="first-screen" :style="{'background-image': `url(${firstScreenImgSrc})`}">
      <div class="title-1 bold">{{firstScreen.title}}</div>
    </div>

    <div class="company-profile">
      <div class="snmk-container ">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="text-center title-1 font-bw-1 bold mt-3xl">{{companyProfile.title}}</div>
          <div class="name-meaning mt-xl">
            <div v-for="(meaning, index) of companyProfile.nameMeanings" :key="index">
              <span class="font-1 bold font-bw-1" v-for="sentence of meaning" :key="sentence.words" :class="{'key-word': sentence.isKey}" >{{sentence.words}}</span>
            </div>
            <p class="mt-l" v-for="description of companyProfile.nameDesciption" :key="description">
              {{description}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="idea mb-xl mt-3xl">
      <div class="snmk-container ">
        <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <VideoBanner
            :hasCountdown="false"
            showDefaultText="false"
            :webmSource="ideaVideoSrcWebm"
            :mp4Source="ideaVideoSrcMp4"
            :previewSource="''"
            :loop="true"
            :autoplay="true"
            :isPlay="true"
            :imgSource="ideaVideoSnap"
            :showModal="showVideoModal"
            @closeModal="showVideoModal = false"
            :videoSource="idea.videoBtn.link"
            >
              <div class="idea-content">
                <div class="title-1 bold">{{idea.title}}</div>
                <div class="my-l">{{idea.description}}</div>
                <div>{{idea.manager}}</div>
                <div class="mt-xl">
                  <a  @click="showVideoModal = true" class="snmk-btn" :id="idea.videoBtn.traceID">
                    <span class="iconfont mr-xs">&#xe612;</span>{{idea.videoBtn.text}}
                  </a>
                </div>
              </div>
            </VideoBanner>
        </div>
      </div>
    </div>

    <div class="milestones">
      <div class="text-center title-1 font-bw-1 bold mt-3xl">{{milestones.title}}</div>
      <div class="milestones-content">
        <TimeBase class="" :milestones="milestones.timeBase"></TimeBase>
      </div>
    </div>

    <div class="join-us text-center" :style="{'background-image': `url(${joinUsImgSrc})`}">
      <div class="snmk-container w-100">
        <div class="join-us-content snmk-col-6 snmk-col-l-6 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-3 snmk-col-l-offset-3 snmk-col-m-offset-1">
          <div class="title-1 bold">{{joinUs.title}}</div>
          <div class="font-1 mt-l mb-xl">
              {{joinUs.description}}<br>
              <template v-if="joinUs.description2">{{joinUs.description2}}</template>
            </div>
          <a class="snmk-primary-btn" :id="joinUs.btn.traceID" :href="joinUs.btn.link" target="_blank">{{joinUs.btn.text}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import TimeBase from './TimeBase.vue'
import VideoBanner from '@@/components/VideoBanner.vue'
import head from '@@/resources/data/head'

import { storeToRefs } from 'pinia'
import { DeviceType } from '~/constant'
import { useGlobalStore } from '~/stores'
const { isMobile, device } = storeToRefs(useGlobalStore())

useHead(head.about)
const i18n = useI18n()

const showVideoModal = ref(false)

const aboutUs = computed<any>(() => i18n.tm('aboutUsData'))
const firstScreen = computed(() => aboutUs.value.firstScreen)
const firstScreenImgSrc = computed(() => {
  console.log(device.value, )
  if (device.value === DeviceType.MOBILE) {
    return firstScreen.value.mobImgSrc
  }
  if (device.value === DeviceType.TABLET) {
    return firstScreen.value.tabletImgSrc
  }
  return firstScreen.value.imgSrc
})

const companyProfile = computed(() => aboutUs.value.companyProfile)
const idea = computed(() => aboutUs.value.idea)
const ideaVideoSrcWebm = computed(() => {
  return isMobile.value ? '' : idea.value.videoSrc.webm
})
const ideaVideoSrcMp4 = computed(() => {
  return isMobile.value ? '' : idea.value.videoSrc.mp4
})
const ideaVideoSnap = computed(() => {
  return isMobile.value ? idea.value.imgSrc : false
})

const milestones = computed(() => aboutUs.value.milestones)
const TabsPanelOptions = computed(() => {
  const options = {
    isDark: false,
    tabs: []
  }
  milestones.value.timeBase.forEach((v: any) => {
    options.tabs.push({tabLabel: v.time, slotName: v.time})
  })
  return options
})
const joinUs = computed(() => {
  return aboutUs.value.joinUs
})
const joinUsImgSrc = computed(() => {
  if (device.value === DeviceType.MOBILE) {
    return joinUs.value.mobImgSrc
  }
  if (device.value === DeviceType.TABLET) {
    return joinUs.value.tabletImgSrc
  }
  return joinUs.value.imgSrc
})


</script>


<style lang="scss" scoped>
.first-screen {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 21.875vw;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  // height: 480px;
  // background-position: center;
  // background-size: 1920px 420px;
  // background-repeat: no-repeat;
  // background-color: black;
}

.idea {
  &::v-deep .mask {
    border-radius: 12px;
  }

  &::v-deep section.top-banner .preview {
    .overlay {
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }

    video,img {
      border-radius: 12px;
      width: 100%;
    }

  }

  .snmk-btn {
    font-size: 18px;
    background-color: transparent;
    border-color: white;
    color: white;

    &:hover {
      border-color: $black_white_5;
      color: $black_white_5;
    }
  }

  .idea-content {
    margin: 0 15vw;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

  }
}


.milestones {
  overflow: hidden;
}
.milestones-content {
  margin-top: 84px;
  background-color: $black_white_8;

  hr {
    height: 1px;
    background-color: $black_white_5;
  }
}


.join-us {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 28.54vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
}
.key-word {
  color: $yellow;
}
.join-us-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .snmk-primary-btn {
    color: white;
  }
}


@media (min-width: $breakPoint_l) and (max-width: $breakPoint_xl) {

  .idea .idea-content {
    margin: 0 10vw;
  }

}

@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
  .about-us {
    height: 41.01vw;
  }

  .idea .idea-content {
    margin: 0 9.66vw;
  }
  .idea::v-deep section.top-banner .preview img{
    width: 100%;
  }

  .join-us{
    height: 33.3vw;
  }
}


@media (max-width: $breakPoint_m) {
  .first-screen {
    height: 112vw;
  }

  .idea .idea-content {
    text-align: center;
    margin: 0 4vw;
  }

  .milestones-content {
    margin-top: 24px;
    background-color: white;

  }


  .join-us {
    height: 116vw;
  }
}

</style>
