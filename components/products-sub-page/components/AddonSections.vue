
<template>
    <div class='addons-secitons py-3xl'>
        <div class='as-text-container' :class='{"order-1": isImgLeft}'>
            <div class='as-title' v-html='dataSrc.mainTitle'></div>
            <div class='as-desc' v-html='dataSrc.content'></div>
            <div class='as-key-text' v-html='dataSrc.keyText'></div>
            <div class='as-key-feature' v-html='dataSrc.keyFeature'></div>
            <div class='as-btns'>
                <a class='button button-fill-blue' :href="dataSrc.buyBtnHref" v-html='dataSrc.buyBtnText'></a>
                <NuxtLink class='button button-basic' v-if='dataSrc.learnMoreHref' :to="dataSrc.learnMoreHref" v-html='dataSrc.learnMoreText'></NuxtLink>
            </div>
        </div>
        <div class='as-img-container'>
            <NuxtImg class='as-img' :src='dataSrc.img' :alt='dataSrc.mainTitle' loading='lazy' />
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())

const props = withDefaults(defineProps<{
    dataSrc: any
    isImgLeft?: boolean
}>(), { dataSrc: {}, isImgLeft: false })
</script>
    
    
<style lang="scss" scoped>
.addons-secitons {
    display: flex;
    justify-content: space-between;
}
.as-text-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .as-title {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 20px;
        color: #272829;
    }
    .as-desc {
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 400;
        color: #272829;
        line-height: 32px;
        font-size: 16px;
    }
    .as-key-text {
        font-size: 14px;
        font-weight: 400;
        color: #979899;
        line-height: 16px;
    }
    .as-key-feature {
        font-weight: 400;
        font-size: 18px;
        color: #272829;
        line-height: 32px;
    }
    .as-btns {
        margin-top: 50px;
        .button {
            height: 40px;
            width: 125px;
        }
        .button-basic {
            color: #28a7e1;
            border-color: #28a7e1;
            margin-left: 10px;
        }
    }
}
.as-img-container {
    width: 55%;
    .as-img {
        width: 100%;
        transition: all .25s;

        &:hover {
            transform: scale(1.05);
        }
    }
}

.order-1 {
    order: 1;
}

</style>
    