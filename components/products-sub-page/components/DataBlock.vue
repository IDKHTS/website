<template>
    <div class='db-block'>
        <div class='db-header' ><span  v-if='dataSrc.header' v-html='dataSrc.header'></span></div>
        <ul class='db-list'>
            <li class='db-row' v-for="(row, index) in dataSrc.blockList" :key="row.title">
                <div class='db-title' v-html='row.title'></div>
                <div class='db-data'>
                    <NuxtImg v-if='row.imgSrc' :src='row.imgSrc' loading='lazy'></NuxtImg>
                    <span v-if='row.text' v-html='row.text'> </span>
                </div>
            </li>
        </ul>
    </div>
</template>
    
<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())

const props = withDefaults(defineProps<{
    dataSrc: any
}>(), { dataSrc: {} })

</script>
    
    
<style lang="scss" scoped>
.db-block {
    border-top: 2px solid #dbdbdb;
    display: flex;
    justify-content: space-between;

    .db-header {
        
        flex: 0 0 180px;
        width: 180px;

        font-weight: 500;
        color: #272829;
        line-height: 28px;
        font-size: 24px;
        letter-spacing: -1px;
        width: 180px;
        padding: 16px 12px;
        padding-left: 0;
    }
    .db-list {
        flex: 1 1 100%;
    }
    .db-row {
        display: flex;
    }
    .db-title {
        flex: 0 0 242px;
    }
    .db-data {
        flex: 1 1 100%;
    }
    .db-title, .db-data {
        border: 1px solid #dbdbdb;
        border-width: 0 0 1px;
        padding: 16px 12px;
        vertical-align: top;
    }
    .db-row:last-child .db-title, .db-row:last-child .db-data{
        border: none;
    }
}


</style>
    