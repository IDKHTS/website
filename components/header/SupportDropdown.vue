<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue';
import { ComponentPublicInstance } from 'nuxt/dist/app/compat/capi';
defineProps<{
  support: any
}>()

const { locale } = useI18n()



// support type: hover and <a> linkage
const elRefs: any = {}
const recordEl = (el: Element | ComponentPublicInstance | null, name: string) => {
  elRefs[name] = el
}
const enterNavImg = (name: string) => {
  if (!elRefs[name]) return
  const target = elRefs[name]
  target.classList && target.classList.add('img-hover')
  // const target = this.$refs[name] && this.$refs[name][0]
  // target.classList && target.classList.add('img-hover')
}
const leaveNavImg = (name: string) => {
  if (!elRefs[name]) return
  const target = elRefs[name]
  target.classList && target.classList.remove('img-hover')
  // const target = this.$refs[name] && this.$refs[name][0]
  // target.classList && target.classList.remove('img-hover')
}
</script>

<template>
  <template v-if='locale !== "zh-CN"'>
    <div class="w-100 mt-xl support-dropdownItem-wrapper">
      <template v-for="(dropdownItem, index) of support.dropdowns" :key="dropdownItem.title">
        <div class="divide-line" :key="dropdownItem.title + 'divide'" v-if="index !== 0"></div>
        <div class="support-dropdownItem">
          <div class="font-1 bold-700 font-bw-1">{{ dropdownItem.title }}</div>
          <div class="mt-xs mb-l font-3 font-bw-3">{{ dropdownItem.desc }}</div>
          <div v-for="category of dropdownItem.categories" :key="category.name" class="support-category mb-m">
            <Navigate :aLink="category.link" :route="category.route" target="_blank"
              class="font-2 support-nav-main-title">
              <span class="snmk-link-btn font-bw-1" :ref="category.name">{{ category.name }}</span>
            </Navigate>
          </div>
        </div>
      </template>
    </div>
    <div class="w-100 text-center pb-l pt-xl">
      <Navigate :aLink="support.mainLinks.link" :route="support.mainLinks.route" target="_blank"
        class="snmk-link-btn all-products" :id="support.mainLinks.traceID">
        {{ support.mainLinks.text }}
      </Navigate>
    </div>
  </template>
  <template v-else>
    <div class="w-100 mt-xl cn-support">
      <div v-for="dropdownItem of support.dropdowns" :key="dropdownItem.title" class="support-dropdownItem"
        :style="{ width: locale === 'zh-CN' ? '100%' : '' }">
        <div v-for="category of dropdownItem.categories" :key="category.name" class="support-category">
          <Navigate :aLink="category.link" :route="category.route" target="_blank"
            class="mb-xs font-1 support-nav-main-title">
            <span class="snmk-link-btn" :ref="el => recordEl(el, category.name)">{{ category.name }}</span>
          </Navigate>
          <div class="mb-s font-3 support-nav-desc"> {{ category.desc }} </div>
          <div class="img-box mb-xl" @mouseenter="enterNavImg(category.name)" @mouseleave="leaveNavImg(category.name)">
            <Navigate :aLink="category.link" :route="category.route" target="_blank" :aClass="'img-link'"
              :id="category.traceID">
              <img class="support-nav-img" :src="category.img" alt="">
            </Navigate>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped lang='scss'>
.support-dropdownItem-wrapper {
  display: flex;
  justify-content: space-between;
}

.support-dropdownItem {
  width: calc((81.125% - 3px) / 4);

  .support-category {
    // width: calc(2 * (100vw - 84px * 2) / 12 - 24px)
  }
}

.divide-line {
  width: 1px;
  background-color: #EFEFEF;
}

.support-category .support-nav-main-title,
.community-category .support-nav-main-title {
  color: $black_white_1;

  &::v-deep a {
    color: inherit;
  }

  .snmk-link-btn::after {
    height: 1px;
  }

  &:hover~.img-box .support-nav-img {
    padding: 8px;
  }
}

.cn-support {
  .support-dropdownItem {
    display: flex;
    justify-content: space-between;

    .support-category {
      width: calc(2 * (100vw - 84px * 2) / 12 - 24px)
    }
  }

  .support-category .img-box {
    display: inline-block;
  }

  .snmk-link-btn.img-hover {
    color: $blue;

    &::after {
      width: 100%;
    }
  }

  .support-category .support-nav-desc {
    color: $black_white_3;
    height: 40px;

    &::v-deep a {
      color: inherit;
    }
  }

  .support-dropdownItem .img-link {
    display: inline-block;
    line-height: 0;
    background-color: $black_white_8;
    border-radius: 8px;
    // padding: 24px
  }

  .support-dropdownItem .support-nav-img {
    background-color: $black_white_8;
    width: calc(7.8125vw + 48px);
    padding: 24px;
    transition: all .3s;
    border-radius: 8px;

    &:hover {
      padding: 8px;
    }
  }
}
</style>