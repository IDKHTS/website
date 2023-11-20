<template>
  <div class="snmk-container">
    <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-offset-1 snmk-col-l-offset-1 w-100">
      <div class="list-header">
        <div class="font-bw-1 title-1 bold-700">{{dataSource.title}}</div>
        <div class="pagination" v-if="!isMobile">
          <div class="last-page title-3 iconfont" :class="{'ban': currPage <= 0}" @click="prePage">
            &#xe625;
          </div>
          <div class="next-page title-3 iconfont" :class="{'ban': currPage >=  listPageCount - 1 }" @click="nextPage">
            &#xe626;
          </div>
        </div>
      </div>

      <div @scroll="onScroll" ref="articleList" class="article-list mt-xl overflow-auto hidden-scroll-bar pos-relative">
        <template v-if="isMobile">
          <div class="list-item" :style="{width: mobListItemWidth}"  v-for="item of showList" :key="item.mainTitle">
            <div v-if='hasTimeTag' class='time-tag' :class="{'time-tag-active': isAlive(item)}">{{ isAlive(item) ? 'Doing' : 'Contest' }}</div>
            <div class="cover-img">
              <img :src="item.imgSrc" :alt="item.mainTitle">
            </div>
            <div class="date">
                {{!needDateFormat ? item.date : dateFormat(item.date)}}
                <div class="ml-s" v-if="hasBtn" :style="{'display': hideBtn(item) ? 'none' : 'block'}">
                  <Navigate
                    :aLink="item.link"
                    :route="item.route"
                    target="_blank"
                    :style="btnStyle(item)"
                    class="card-btn font-2 text-center bold-500"
                    >
                    {{btnText(item)}}
                  </Navigate>
                </div>
            </div>
            <div class="title-3 bold-700">{{item.mainTitle}}</div>
            <div class="mt-2xs font-bw-3 font-2 article-abstract" v-html="item.abstract"></div>
            <div>
              <Navigate
                :aLink="item.link"
                :route="item.route"
                target="_blank"
                class="snmk-link-btn font-3 text-center bold-500 font-bw-1 mt-l"
                >
                Learn More <span class="iconfont">&#xe60a;</span>
              </Navigate>

            </div>
          </div>
        </template>
        <template v-else >
          <div :class="'swiper'" :id="'article-list-swiper'+_uid">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(itemGroup,index) of showList" :key="index">
                  <div class="flex-justify-between" style="flex-wrap: wrap">
                    <div class="list-item" :style="{width: mobListItemWidth}"  v-for="item of itemGroup" :key="item.mainTitle">
                      <div class="cover-img">
                        <div v-if='hasTimeTag' class='time-tag' :class="{'time-tag-active': isAlive(item)}">{{ isAlive(item) ? 'Doing' : 'Contest' }}</div>
                        <img :src="item.imgSrc" :alt="item.mainTitle">
                      </div>
                      <div class="date">
                          {{!needDateFormat ? item.date : dateFormat(item.date)}}
                          <div class="ml-s" v-if="hasBtn" :style="{'display': hideBtn(item) ? 'none' : 'block'}">
                            <Navigate
                              :aLink="item.link"
                              :route="item.route"
                              target="_blank"
                              :style="btnStyle(item)"
                              class="card-btn font-2 text-center bold-500"
                              >
                              {{btnText(item)}}
                            </Navigate>
                          </div>
                      </div>
                      <div class="title-3 bold-700" :class="{'font-bw-3': hasTimeTag && !isAlive(item)}">{{item.mainTitle}}</div>
                      <div class="mt-2xs font-bw-3 font-2 article-abstract" v-html="item.abstract"></div>
                      <div>
                        <Navigate
                          :aLink="item.link"
                          :route="item.route"
                          target="_blank"
                          class="snmk-link-btn font-3 text-center bold-500 font-bw-1 mt-l"
                          >
                          Learn More <span class="iconfont">&#xe60a;</span>
                        </Navigate>

                      </div>
                    </div>
                    <i v-if="!isMobile" class="list-item"></i>
                    <i v-if="!isMobile" class="list-item"></i>
                  </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1">
      <div class="pagination-progress w-100 mt-xl">
        <div class="pagination-progress-bar">
          <div class="progress" :style="{width: currProgressBar + '%'}"></div>
        </div>
      </div>
      <div class="text-center">
        <Navigate
          :aLink="dataSource.link"
          :route="dataSource.route"
          target="_blank"
          class="text-center snmk-btn mt-2xl"
        >
          See all {{isCountArticle ? dataSource.list.length : ''}} articles
        </Navigate>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import configuration from '@@/resources/data/configuration'
import { storeToRefs } from 'pinia';
import Swiper from 'swiper'
import 'swiper/css'
import { useGlobalStore } from '~/stores';
import _ from 'lodash'

const props = defineProps<{
  dataSource?: any
  needDateFormat?: boolean
  hasBtn?: boolean
  isCountArticle?: boolean
  hasTimeTag?: boolean
}>()
const {
  dataSource,
  needDateFormat,
  hasBtn,
  isCountArticle,
  hasTimeTag
} = toRefs(props)

const _uid =  _.uniqueId()

const i18n = useI18n()
const isCN = computed(() => i18n.locale.value === 'zh-CN')
const { isMobile } = storeToRefs(useGlobalStore())
const img = computed(() => dataSource.value.imgSrc)
const listPageCount = computed(() => {
  if(!dataSource.value.list) return 1
  return Math.ceil(dataSource.value.list.length / 3)
})
const showList = computed(() => {
  const pcList = dataSource.value.list.reduce((pre, curr) => {
    if (pre[pre.length - 1].length >= 3) {
      pre.push([curr])
    } else {
      pre[pre.length - 1].push(curr)
    }
    return pre
  }, [[]])

  return isMobile.value ? dataSource.value.list : pcList
})
const mobListItemWidth = computed(() => {
  if (!process.client || !isMobile.value) return
  return window.innerWidth * 0.8 + 'px'
})

const hexToRgbA =  (hex) => {
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
const isAlive =  (item) => {
  let isAlive = false
  if (typeof item.isAlive === 'undefined') {
    const now = new Date()
    isAlive = now >= item.start && now <= item.end
  } else {
    isAlive = item.isAlive
  }
  return isAlive
}
const btnStyle =  (dataSource) => {
  if (isAlive(dataSource)) return {borderColor: hexToRgbA(dataSource.themeColor), color: dataSource.themeColor}
  return { borderColor: `rgba(214, 214, 214, 0.4)`, color: `rgba(153, 153, 153, 1)` }
  // return this.isAlive(dataSource) ? {borderColor: this.hexToRgbA(dataSource.themeColor), color: dataSource.themeColor} : {
  //   borderColor: `rgba(214, 214, 214, 0.4)`, color: `rgba(153, 153, 153, 1)`
  // }
}
const btnText =  (dataSource) => {
  if (dataSource.btnText) return dataSource.btnText
  if (isAlive(dataSource)) return isCN.value ? '立即进入' : 'Enter Now'
  return isCN.value ? '已结束' : 'View Entries'
}
const dateFormat =  (date) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  const formatedDate = new Date(date).toLocaleDateString('en-US', options)
  return formatedDate
}

const swiper = ref<Swiper | null>(null)
const currPage = ref(0)
const currProgressBar = ref(0)
const articleList = ref({})
const progressBarLength = ref(0)
const prePage =  () => {
  if (!swiper.value) return
  if (currPage.value <= 0) return
  currPage.value -= 1
  swiper.value.slidePrev()
}
const nextPage =  () => {
  if (!swiper.value) return
  if (currPage.value >= listPageCount.value - 1) return
  currPage.value += 1
  swiper.value.slideNext()
}
const onScroll =  () => {
  currProgressBar.value = articleList.value.scrollLeft / progressBarLength.value * 100
}
const hideBtn = (dataSource) => {
  return dataSource.btnText === 'unkown'
}

let timeRef: number, swiperRef: number
onMounted(() => {
    const timeRef = setInterval(() => {
      progressBarLength.value = articleList.value.scrollWidth - articleList.value.clientWidth
      clearInterval(timeRef)
    }, 500)
    setTimeout(() => clearInterval(timeRef), 100 * 1000)

    const swiperRef = setInterval(() => {
      if (!document.querySelector('#article-list-swiper' + _uid) || document.querySelector('#article-list-swiper' + _uid + ' .swiper-wrapper').clientWidth <= 20) return
      swiper.value = new Swiper('#article-list-swiper' + _uid, {
        spaceBetween: 44,
        // freeMode: false,
        // obsever: true,
        on: {
          slideChange: function (e) {
            if(!swiper.value) return;
            currPage.value = swiper.value?.activeIndex
          }}
      })
      clearInterval(swiperRef)
    }, 500)
    setTimeout(() => clearInterval(timeRef), 100 * 1000)
})
onUnmounted(()=> {
  clearInterval(swiperRef)
  clearInterval(timeRef)
})



// const color = {
//   normal: 'black',
//   hover: '#0C63E2',
//   ban: '#C2C2C2'
// }
// const preColor =  ref(color.hover),
// const nextColor =  ref(color.normal),
</script>

<style lang="scss" scoped>


// /* 可以设置不同的进入和离开动画 */
// /* 设置持续时间和动画函数 */
// .slide-fade-enter-active {
//   transition: all .3s ease;
// }
// .slide-fade-leave-active {
//   transition: all .3s ease;
// }
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .last-page, .next-page {
    cursor: pointer;

    &:hover { color: $blue; }
  }
  .last-page {
    margin-right: 24px;
  }
  .ban {
    cursor: not-allowed;
    color: $black-white-4;
    &:hover { color: $black-white-4; }
  }
}
.article-list {
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;

}
.list-item {
  position: relative;
  width: calc((100% - 44px * 2) / 3);

  .time-tag {
    position: absolute;
    top: 16px;
    left: 16px;

    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    background: #A5A5A5;
    border-radius: 4px;
    padding: 2px 14px;
    color: #FFFFFF;

    &-active {
      background: #43C01E;
    }

    @include mobile {
      top: 8px;
      left: 8px;

    }
  }
  .cover-img {
    border-radius: 8px;
    overflow: hidden;
    line-height: 0;
  }

  .date {
    margin: 26px 0 18px 0;
    display: flex;
  }


  :deep(.card-btn) {
    display: inline-block;
    border: 1px solid;
    padding: 2px 8px;
    border-radius: 8px;
    &::v-deep a {
      color: inherit;
    }
  }

  .article-abstract {
    max-height: calc(20px * 2);
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
    // line-clamp: 3;

    display: -webkit-box;
    -moz-box-orient: vertical;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
}

@media (min-width: $breakPoint_m) and (max-width : $breakPoint_l) {
}

// .hidden-scroll-bar {
//   scrollbar-width: none; /* firefox */
//   -ms-overflow-style: none; /* IE 10+ */
// }
// .hidden-scroll-bar::-webkit-scrollbar {
//   display: none; /* Chrome Safari */
// }
@include mobile {
  .hidden-scroll-bar {
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
  .hidden-scroll-bar::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .snmk-container {
    margin: 0;
  }
  .list-header {
    padding: 0 16px;
  }
  .article-list {
    padding-left: 16px;
    position: relative;
    width: 100%;
    // white-space: nowrap;
    flex-wrap: nowrap;
  }
  .list-item {
    width: 80%;
    display: block;
    flex-shrink: 0;
    margin-right: 16px;
  }
  .pagination-progress-bar {
    position: relative;
    height: 4px;
    width: 100%;
    background-color: $black-white-8;
    border-radius: 19px;
    .progress {
      position: absolute;
      content: '';
      height: 100%;
      background-color: $black-white-5;
    }
  }
}
</style>
``