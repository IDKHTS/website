<template>
    <div class="contestBody">
      <div class="mainTitle has-text-centered" v-if='dataSrc.text' v-html='dataSrc.text'> </div>
      <div v-if='dataSrc.galleryId' :data-gallery-include="dataSrc.galleryId"></div>
      <a v-if='dataSrc.gleamTitle' class="e-widget no-button generic-loader" :href="dataSrc.gleamLink" rel="nofollow" v-html='dataSrc.gleamTitle'></a>
    </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

onMounted(() => {
  if(props.dataSrc.galleryId) {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://cdn.galleryjs.io/webpack/gallery-v2.launcher.js')
    document.head.appendChild(recaptchaScript)
  } else {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://widget.gleamjs.io/e.js')
    document.head.appendChild(recaptchaScript)
  }
})

</script>

<style scoped lang='scss'>
@import '../style.scss';
.contestBody{
    background-color: #F3F5FB;
    .mainTitle{
        padding: 80px 0 10px;
        @include mobile { padding: 8.33vw 0 1.39vw; }
    }
}

</style>