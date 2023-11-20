<template>
  <div class="laser-page-container">
    <!-- @onBuyModal='showModal' <SubNavBar :device="device" :isHeaderShow="isHeaderShow" :isFixed="true" :isAlwaysShow="false" :dataSource="laser10wNavBar"></SubNavBar> -->
    <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar"></SubNavBar>

    <banner></banner>

    <Materials></Materials>

    <ComparisonPC></ComparisonPC>

    <!-- 改版 new1-->
    <step-up></step-up>

    <!-- new2 -->
    <comparison></comparison>

    <!-- 第二部分黑色  视频+ 文字 -->
    <finesse></finesse>

    <!-- 第三部分黑色  视频—+文字 -->
    <cracking></cracking>

    <!-- 第四部分 蓝色三角 -->
    <auto-focus></auto-focus>

    <!-- 第五部分 -->
    <camera-capture></camera-capture>

    <!-- 第七部分 -->
    <tailor-made></tailor-made>

    <!-- 第八部分 -->
    <orientation></orientation>

    <!-- 第九部分 -->
    <systems></systems>

    <!-- 第十部分 -->
    <overheat></overheat>

    <!-- 第十一 -->
    <expendability></expendability>

    <!-- 第十二 -->
    <bottom-box></bottom-box>
  </div>
</template>

<script setup lang='ts'>

// import 'video.js/dist/video-js.css'
import Banner from './sections/Banner.vue'
import Materials from './sections/Materials.vue'
import ComparisonPC from './sections/ComparisonPC.vue'
import StepUp from './sections/StepUp.vue'
import Comparison from './sections/Comparison.vue'
import Finesse from './sections/Finesse.vue'
import Cracking from './sections/Cracking.vue'
import AutoFocus from './sections/AutoFocus.vue'
import CameraCapture from './sections/CameraCapture.vue'
import TailorMade from './sections/TailorMade.vue'
import Orientation from './sections/Orientation.vue'
import Systems from './sections/Systems.vue'
import Overheat from './sections/Overheat.vue'
import Expendability from './sections/Expendability.vue'
import BottomBox from './sections/BottomBox.vue'

import SubNavBar from '@@/components/SubNavBar.vue'
import head from '@@/resources/data/head'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import { ISubNavMenu } from '~/components/SubNavBar/type'
import Aos from 'aos'

const { isMobile } = storeToRefs(useGlobalStore())
useHead(head.hightPowerLaser)
const i18n = useI18n()
const subNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').laser10w)

onMounted(() => {
  Aos.init({
    easing: 'ease-out-back'
  })
})
</script>

<style src="./laser.common.css" scoped></style>
<style src="./bootstrap-mini.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.laser-page-container {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c8c8c8;
}

.video-js {
  width: 100%;
  height: auto;
  border-radius: 15px;
}

</style>
