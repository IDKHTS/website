<template>
  <div>
    <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar" :withModal='true'></SubNavBar>
    <div class='nav-machine' v-if="tabs && tabs.length > 1">
      <Tabs :tabs="tabs" :selectedIdx="selectedTabsIndex" @onSelectTab="onSelectTab"/>
    </div>
    <div class="snmk-container mb-2xl">
      <template v-for="(box, index) of dataSrc">
        <div v-if='!(index == 1 && selectedTabsIndex === 1)' :key="box.title" class="mt-2xl snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="mb-xl title-2 bold-700 c-black">
            {{box.title}}
          </div>
        </div>
        <div v-if='!(index == 1 && selectedTabsIndex === 1)' :key="box.title+'addons'" class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 addons-container">
          <div class="addon" v-for="addon of box.addons" :key="addon.title">
            <div class="addon-img">
              <img :src="addon.imgSrc" :alt="addon.name">
            </div>
            <div class="font-2 mt-l px-s" >
              <span class="font-bw-2" v-html="addon.name"></span><span v-if="addon.name2" class="c-blue"> × {{addon.count}}</span><br>
              <template  v-if="addon.name2">
                <span class="font-bw-2" v-html="addon.name2"></span><span class="c-blue"> × {{addon.count2}}</span><br>
              </template>
              <template  v-if="addon.count !== -1 && !addon.name2">
                <span class="c-blue"> × {{addon.count}}</span>
              </template>
            </div>
          </div>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </template>

    </div>

  </div>
</template>

<script setup lang='ts'>
import SubNavBar from '@@/components/SubNavBar.vue'
import Tabs from '@@/components/Tabs.vue'
import { storeToRefs } from 'pinia'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())

const props = withDefaults(defineProps<{
  dataSrc: any
  subNavBar: ISubNavMenu
  tabs?: {
    text: string
    key: string
  }[]
}>(), { dataSrc: {} })

const tabs = computed(() => props.tabs)

const selectedTabsIndex = ref(0)
const onSelectTab = (index: number) => {
  selectedTabsIndex.value = index
}

</script>


<style lang="scss" scoped>

.nav-machine {
  margin-top: calc(#{$header-height} + 120px);
  margin-bottom: 52px;
  display: flex;
  justify-content: center;

  &::v-deep .tabs-wrapper {
    background: #F5F5F5;;
  }
  &::v-deep .tab {
    background: #F5F5F5;;
  }
  &::v-deep .tab-active {
    background: $blue;
  }

  @include mobile {
    margin-top: calc(#{$header-height} + 40px);
    margin-bottom: 4px;
    &::v-deep .select-btn {
      width: 334px;
    }
    &::v-deep .tabs-wrapper {
      width: 334px;
    }
  }
}

.addons-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  .addon-img {
    padding: 22px 17px 0;

    img {
      width: 100%;
      // padding: 10%;
      // transition: all 0.25s ease;

      // &:hover {
      //   padding: 0;
      // }
    }
  }

  .addon {
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 34px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: $black-white-8;
    border-radius: 8px;
  }
  /* 和列表一样的宽度和margin值 */
  i {
    width: 15%;
  }
}

@include desktop{
  .addons-container .addon,.addons-container i {
    width: calc((100% - 24px * 5) / 6);
  }
}
@include device_l{
  .addons-container .addon,.addons-container i {
    width: calc((100% - 24px * 4) / 5);
  }
}

@include tablet {
  .addons-container .addon,.addons-container i {
    width: calc((100% - 16px * 3) / 4 );
  }
}

@include mobile {
  .addons-container .addon,.addons-container i {
    width: calc((100% - 16px) / 2);
  }
}

</style>
