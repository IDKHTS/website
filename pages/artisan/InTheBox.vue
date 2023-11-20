<template>
  <InTheBox :sub-nav-bar='subNavBar' :data-src='boxes' :tabs='tabs'></InTheBox>
</template>

<script setup lang='ts'>
import InTheBox from '@@/components/products-sub-page/InTheBox.vue'
import { ISubNavMenu } from '~/components/SubNavBar/type';
const tabs = ref([
  { text: 'Snapmaker Artisan 3-in-1 3D Printer', key: 'Snapmaker Artisan 3-in-1 3D Printer' },
  { text: 'Snapmaker 3D Printing Version', key: 'Snapmaker 3D Printing Version' }
])
const i18n = useI18n()
const subNavBar = computed<ISubNavMenu>(() => i18n.tm('secondarynavbarData').artisan)
const boxes = computed(() => i18n.tm('artisanData').boxes)
</script>


<style lang="scss" scoped>
@import './theme.scss';

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
    justify-content: space-between;
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
