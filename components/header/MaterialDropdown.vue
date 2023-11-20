<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue';
defineProps<{
  materials: any
}>()

// products type: hover and <a> linkage
const hoverLink = ref('')
const imgRefs:any = {}
const recordImgRefs = (el:  Element | ComponentPublicInstance | null, name: string) => {
  imgRefs[name] = el
}
const hoverLinkORImg =  (link: string) => {
  hoverLink.value = link
}
const changeImg =  (category: any, dropdownItem: any) => {
  if (!category.img) return
  dropdownItem.defaultRoute = category.route
  dropdownItem.defaultLink = category.link
  imgRefs[dropdownItem.title].src = category.img
  hoverLinkORImg(category.link || category.route)
}
const moveOut =  (dropdownItem: any) => {
  if(!dropdownItem || !imgRefs[dropdownItem.title]) return 
  imgRefs[dropdownItem.title].src = dropdownItem.img
}
</script>

<template>
  <div class="w-100 mt-xl pr-3xl overflow-hidden display-flex">
    <template v-for="dropdownItem of materials.dropdowns" :key="dropdownItem.title">
      <div class="materials-options">
        <div v-for="category of dropdownItem.categories" :key="dropdownItem.title + category.name"
          @mouseover="changeImg(category, dropdownItem)" @mouseleave="hoverLink = ''"
          class='materials-dropdownItem'
        >
          <Navigate 
            :aLink="category.link" :route="category.route" target="_blank" class="mb-xs "
            :aClass="'snmk-link-btn'"  :class="{
              'materials-link-active': hoverLink === category.link || hoverLink === category.route
            }">
            <div :ref="category.name" class="materials-category w-100 font-bw-2">{{ category.name }}</div>
          </Navigate>
        </div>
      </div>
      <Navigate class="materials-dropdownItem-img-content"
        :route="dropdownItem._defaultRoute" :aLink="dropdownItem._defaultLink"
        @mouseover="hoverLinkORImg(dropdownItem._defaultRoute || dropdownItem._defaultLink)" @mouseleave="hoverLink = ''"
        :class="{ 'materials-img-active': hoverLink !== '' }">
        <img :ref="el => recordImgRefs(el, dropdownItem.title)" class="materials-dropdownItem-img" :src="dropdownItem.img"
          :alt="dropdownItem.title">
      </Navigate>
    </template>
  </div>
  <div class="w-100 text-center horizontal-center" style="margin-top: 50px; margin-bottom: 34px">
    <template v-for="(link, index) of materials.extraLinks" :key="link.text">
      <Navigate :aLink="link.link" :route="link.route" target="_blank" class="snmk-link-btn"
        :class="{ 'materials-nav': index === 1 }" :id="link.traceID">
        {{ link.text }}
      </Navigate>
      <div v-if="index !== materials.extraLinks.length - 1" class="materials-nav-separator" :key="link.text + 'text'"></div>

    </template>
  </div>
</template>

<style scoped lang='scss'>
.materials-dropdownItem {
  display: flex;

  // justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }

}

.materials-options {
  display: inline-block;
  padding-right: 100px;
  border-right: 1px solid #EFEFEF;

  .materials-link-active {
    &::v-deep a {
      color: $blue;

      &::after {
        width: 100%;
      }
    }

    .materials-category {
      color: $blue
    }
  }
}

.materials-dropdownItem {
  min-width: 210px;
  text-align: left;
  padding: 2px 13px;

  :deep(a) {
    font-size: 14px;
    border-radius: 60px;
  }
}

.materials-category {
  color: black;
  white-space: nowrap;
}

.materials-link-active {
  .materials-category {
    font-weight: bold;
    color: $blue;
  }
}

.materials-img-active img {
  transform: scale(1.2);
}

:deep(.materials-dropdownItem-img-content) {
  float: right;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  background-color: $black-white-8;
  margin-left: 60px;

  &::v-deep a {
    display: block;
    height: 238px;
    width: 462px;
  }

  img {
    max-height: 100%;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
}

.materials-nav-separator {
  height: 100%;
  width: 1px;
  margin: 0 32px;
  background-color: #efefef;
}
</style>