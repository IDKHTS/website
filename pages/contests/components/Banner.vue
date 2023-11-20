<template>
    <div>
        <img :src="dataSrc.imgSrc" alt="" v-if='!isMobile' style="width: 100vw">
        <img :src="dataSrc.imgMobileSrc" alt="" v-else style="width: 100vw">
        <section class="moveit-3dp my-3xl">
            <div class="container">
                <h2 class="mainTitle">
                {{dataSrc.mainTitle}}
                </h2>
                <div class="subTitle" style="text-align: left; text-indent: 1.5em">
                    <template v-for="desc of dataSrc.desc" :key="desc" v-html="desc">
                        <p v-html="desc"></p>
                    </template>
                </div>
                <div class='subTitle' v-if='dataSrc.timeList'>
                    <p v-for='item of dataSrc.timeList' :key='item'>
                        {{ item }}
                    </p>
                </div>
                <p class="date" v-if='dataSrc.date' v-html='dataSrc.date'></p>
            </div>
        </section>
    </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
  themeColor?: string
}>(), { dataSrc: {}, themeColor: '#0C63E2' })
const { isMobile } = storeToRefs(useGlobalStore())

</script>

<style scoped lang='scss'>
@import '../style.scss';

.moveit-3dp {
    text-align: center;
    margin-top: 100px;
    @include mobile { margin-top: 13.9vw; }
    .date{
        border-radius: 4px;
        display: inline-block;
        padding: 0 20px;
        height: 48px;
        line-height: 48px;
        color: var(--themeColor);
        border: 1px solid var(--themeColor);
    }
}
</style>