<template>
    <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar" :withModal='true'></SubNavBar>
    <div class='specs'>
        <div class='snmk-container'>
            <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 specs-container'
                v-for="(section, index) in dataSrc.sections" :key="index">
                <div class='specs-title' v-html='section.title'></div>
                <div>
                    <DataBlock v-for="(block, index) in section.blocks" :key="block.header" :dataSrc='block'></DataBlock>
                </div>
                <div class='specs-notes' v-html='section.notes'></div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import DataBlock from './components/DataBlock.vue';
import SubNavBar from '@@/components/SubNavBar.vue'
import AddonSections from './components/AddonSections.vue';
import { storeToRefs } from 'pinia'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())

const props = withDefaults(defineProps<{
    dataSrc: any
    subNavBar: ISubNavMenu
}>(), { dataSrc: {} })

</script>
    
    
<style lang="scss" scoped>
.specs {
    background-color: #fafafa;
    padding-top: 60px;
}

.specs-container {
    background-color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 40px;
    margin-bottom: 50px;
}

.specs-title {
    color: #272829;
    font-size: 28px;
    font-weight: bold;

    background-color: white;
    padding: 0 20px 20px 0;
}

.specs-notes {
    border-top: 1px solid #dbdbdb;
    color: #979899;
    font-weight: 400;
    line-height: 19px;
    padding-left: 180px;
    padding-block: 30px;
}
</style>
    