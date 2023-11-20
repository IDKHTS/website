<template>
    <Navigate
      :aLink="dataSource.link"
      :route="dataSource.route"
      target="_blank"
      @mouseover="isHover=true"
      @mouseleave="isHover=false"
    >
      <div class="snmk-container card-container">
          <div class="snmk-col-5 snmk-col-l-5 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 card-img" >
            <img :style="{'border-radius': isMobile ? `8px 8px 0 0` : `8px`}" :src="img" alt="">
          </div>
          <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 card-text">
            <div>
              <div class="font-bw-1 font-1 bold-700 card-date">
                {{!needDateFormat ? dataSource.date : dateFormat(dataSource.date)}}
                <div class="ml-s" v-if="hasBtn">
                  <Navigate
                    :aLink="dataSource.link"
                    :route="dataSource.route"
                    target="_blank"
                    :style="btnStyle(dataSource)"
                    class="card-btn font-3 text-center bold-500"
                    >
                    {{btnText}}
                  </Navigate>
                </div>
              </div>
              <div class="mt-m title-3 bold-700">{{dataSource.mainTitle}}</div>
              <div class="mt-2xs font-bw-3 font-2 card-abstract" >{{dataSource.abstract}}</div>
            </div>
            <div class="card-text-bottom mt-l" v-if="!isMobile">
              <Navigate
                :aLink="dataSource.isDeffLink ? dataSource.orgLink : dataSource.link"
                :route="dataSource.isDeffLink ? dataSource.orgRoute : dataSource.route"
                target="_blank"
                class="snmk-link-btn font-2 text-center mt-l mb-s c-blue"
                :class="{'card-hover': isHover}"
                >
                Learn More
                <span class="iconfont left-icon">&#xe7b2;</span>
              </Navigate>
            </div>
          </div>
      </div>
    </Navigate>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
import { DateTimeOptions } from '@nuxtjs/i18n/dist/runtime/composables'

const props = withDefaults(defineProps<{
  dataSource: any
  needDateFormat?: boolean
  hasBtn?: boolean
}>(), {dataSource: {}, needDateFormat: false, hasBtn: false})

const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const isCN = computed(() => i18n.locale.value === 'zh-CN')

const isHover = ref(false)

const isAlive = (item: any) => {
    let isAlive = false
    if (typeof item.isAlive === 'undefined') {
      const now = new Date()
      isAlive = now >= item.start && now <= item.end
    } else {
      isAlive = item.isAlive
    }
    return isAlive
}
const btnText = computed(() => isAlive(props.dataSource) ? (isCN.value ? '立即进入' : 'Enter Now') : (isCN.value ? '已结束' : 'View Entries'))
const img = computed(()=> props.dataSource.imgSrc)

const hexToRgbA = (hex: string) => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.4)'
  }
  return hex
}
const btnStyle = (dataSource: any) => {
    return isAlive(dataSource) ? {borderColor: hexToRgbA(dataSource.themeColor), color: dataSource.themeColor} : {
      borderColor: `rgba(214, 214, 214, 0.4)`, color: `rgba(153, 153, 153, 1)`
    }
}
const dateFormat = (date: string) => {
    const options:DateTimeOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    const formatedDate = new Date(date).toLocaleDateString('en-US', options)
    return formatedDate
}


</script>

<style lang="scss" scoped>
.hero-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card-img {
  line-height: 0;
}
.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
}
.card-date {
  margin-top: 12px;
  display: flex;
  align-items: center;
}
.card-abstract {
  width: 29.218vw;
  max-height: calc(20px * 3);
  overflow: hidden;
  text-overflow: ellipsis;
  // white-space: nowrap;
  // line-clamp: 3;

  display: -webkit-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}
.card-btn {
  display: inline-block;
  border: 1px solid;
  padding: 2px 8px;
  border-radius: 8px;
  &::v-deep a {
    color: inherit;
  }
}

.card-text-bottom {
  border-top: 1px solid $black-white-5;
  :deep(.card-hover)::after {
    width: 100%;
  }
}
.left-icon {
  display: inline-block;
  transform: rotate(-90deg)
}
@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
}

@include mobile {
  .card-text {
    border-left: 1px solid $black-white-6;
    border-right: 1px solid $black-white-6;
    border-bottom: 1px solid $black-white-6;
    border-radius: 0 0 8px 8px;
    padding: 24px 12px;
  }
  .card-date {
    font-size: 14px;
    line-height: 20px;
    margin-top: 0;
  }
  .card-abstract {
    width: 100%;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

}
</style>
