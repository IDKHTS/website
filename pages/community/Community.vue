<template>
  <div>
    <div class="top-banner" :style="{'background-image': `url('${topImgSrc(banner)}')`}">
      <div class='text-container' :class="{'vertical-center-community': !banner.isCenter, 'center-style': banner.isCenter}">
        <div class="snmk-container">
          <div
            :class="{
              'snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 text-center': banner.isCenter,
              'snmk-col-5 snmk-col-l-5 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4': !banner.isCenter
            }"
          >
              <div v-if='banner.aheadDesc' class="ahead-desc" v-html='banner.aheadDesc'></div>
              <div class="font-bw-1 big-title-2 bold-700" v-html='banner.title' style='color: black'></div>
              <div v-if='banner.desc && !isMobile' class="font-bw-1 font-1 mt-m" :class="`s-banner-desc-0`" >{{banner.desc}}</div>
              <Navigate
                  target="_blank"
                  :id="banner.btn.traceID"
                  class="snmk-primary-btn mt-l"
                  :class="{'pi-64': !banner.isCenter}"
                  :route="banner.btn.route"
                  :aLink="banner.btn.link"
                >
                  {{banner.btn.text}}
              </Navigate>
          </div>
        </div>
      </div>
    </div>
    <!-- <Swiper ></Swiper> -->

    
    <div class="mt-3xl bg-white">
      <ArticlesList :needDateFormat="false" :dataSource="contests" :hasBtn="true"  :hasTimeTag="true"></ArticlesList>
    </div>

    <div class="mt-3xl bg-bw-8 py-3xl">
      <ArticlesList :needDateFormat="true" :dataSource="starmakers" :hasBtn="false" ></ArticlesList>
    </div>

    <div class="bg-white py-3xl">
      <ArticlesList :needDateFormat="true" :dataSource="blogs" :hasBtn="true"  :isCountArticle="false"></ArticlesList>
    </div>

    <div class="user-case bg-black c-white">
      <TextCarousel  :userCase="communityData.userCase"></TextCarousel>
    </div>


    <div class="snmk-container expore">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4">
        <div class="font-bw-1 title-1 bold-700 text-center">{{explore.title}}</div>
        <div class="explore-things mt-xl">
          <template  v-for="item of explore.things" :key="item.title">
            <Navigate
              :aLink="item.link"
              :route="item.route"
              target="_blank"
              class="text-center explore-thing px-l pt-l pb-xl"
              >
              <div class="explore-thing-bg-img">
                <img :src="item.bgSrc" alt="">
                <div class="explore-thing-img"><img :src="item.imgSrc" alt=""></div>
              </div>
              <div class="explore-thing-text">
                <div class="title-4 bold-700 c-black mb-m mt-xl">{{item.title}}</div>
                <div class="font-2 font-bw-2">{{item.desc}}</div>
              </div>
            </Navigate>
          </template>
        </div>
      </div>
    </div>

    <div class="snmk-container thank-you-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 thank-you">
        <div class="thank-you-text ">
          <div class="title-2 mt-3xl bold-700 c-black">{{forum.title}}</div>
          <div class="title-4 font-bw-3 mt-l mb-xl" v-html="forum.desc"></div>
          <Navigate
            :aLink="forum.btn.link"
            :route="forum.btn.route"
            target="_blank"
            class="text-center snmk-primary-btn mb-3xl"
            >
            {{forum.btn.text}}
          </Navigate>
        </div>
        <div class="thank-you-img my-xl vertical-center">
          <img :src="forum.imgSrc" alt="">
        </div>
      </div>
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 thank-you mt-l">
        <div class="thank-you-text ">
          <div class="title-2 mt-3xl bold-700 c-black">{{thankYou.title}}</div>
          <div class="title-4 font-bw-3 mt-l mb-xl" v-html="thankYou.desc"></div>
          <Navigate
            :aLink="thankYou.btn.link"
            :route="thankYou.btn.route"
            target="_blank"
            class="text-center snmk-primary-btn mb-3xl"
            >
            {{thankYou.btn.text}}
          </Navigate>
        </div>
        <div class="thank-you-img my-xl vertical-center">
          <img :src="thankYou.imgSrc" alt="">
        </div>
      </div>
      <div
        v-for="(kickstarter, index) of thankYou.kickstarters"
        :key="kickstarter.title"
        @click="onKickstarter(kickstarter.btn)"
        class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 kickstarter"
        :class="{'snmk-col-offset-1 snmk-col-l-offset-1': index === 0}"
      >
        <div><img :src="kickstarter.imgSrc" alt=""></div>
        <div class="ml-m">
          <div class="title-3 font-bw-1 bold-700 mt-l">{{kickstarter.title}}</div>
            <Navigate
              :aLink="kickstarter.btn.link"
              :route="kickstarter.btn.route"
              target="_blank"
              class="text-center snmk-link-btn font-bw-2 mt-m"
              >
              {{kickstarter.btn.text}}
              <span class="iconfont left-icon">&#xe7b2;</span>
            </Navigate>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue'
import head from '@@/resources/data/head'
import TabPanel from '@@/components/TabPanel.vue'
import TextCarousel from '@@/components/TextCarousel.vue'
import { getStarmakers, getContests, getLastBlog, getCategoriesMap } from '@@/service/index'
import Carousel3D from '@@/components/Carousel3D.vue'
import ArticlesList from '@@/pages/community/common/ArticlesList.vue'
import Swiper from '@@/pages/community/Swiper.vue'
import { useGlobalStore } from '~/stores'
import { storeToRefs } from 'pinia'

useHead(head.community)
const { isMobile } = storeToRefs(useGlobalStore()) 
const i18n = useI18n()
const router = useRouter()

const starmakers = ref({list: []})
const contests = ref<any>({list: []})
const blogs = ref({list: []})


const communityData =  computed<any>(() => i18n.tm('communityData')) 
const banner = computed(() => communityData.value.topBanners && communityData.value.topBanners[0] || {})
const currContest = computed(() => {
  const currContest = contests.value.find((v: any) => v.isAlive)
  if (!currContest) return {}
  return currContest
})
const referral = computed(() => communityData.value.referral) 
const explore = computed(() => communityData.value.explore)
const forum = computed(() => communityData.value.forum)
const thankYou = computed(() => communityData.value.thankYou) 


const topImgSrc = (banner: any) => {
  if(!banner) return
  return isMobile.value ? banner.topMobileImg : banner.topImg
}
const onKickstarter = (btn: any) => {
  if (!btn || !process.browser) return
  if (btn.link) {
    window.open(btn.link)
  } else if (btn.route) {
    router.push(btn.route)
  }
}
const initBlogs = async () => {
  const categoriesMap = (await getCategoriesMap()).data
  const resp = await getLastBlog(9)
  blogs.value = Object.assign(communityData.value.blogs, {list: resp.data.map(blog => {
    const img = blog && blog.yoast_head_json && blog.yoast_head_json.og_image && blog.yoast_head_json.og_image[0]
    const title = blog && blog.yoast_head_json && blog.yoast_head_json.title

    const category = categoriesMap.find((v: any) => blog.categories[0] === v.id) || {name: 'unkown'}
    // if (!category) { console.log(blog); return }
    const btnText = category.name
    if (process.browser) {
      const img = new Image()
      img.src = `${img.imgSrc}`
    }
    return {
      isAlive: false,
      id: blog.id,
      mainTitle: title,
      abstract: blog.excerpt.rendered,
      date: blog.date,
      imgSrc: img.url,
      link: blog.link,
      btnText: btnText // blog.categories.find((v: any) => v === category.id)
    }
  }).filter((v: any) => !!v)})
}
onBeforeMount(() => {
  if(!process.client) return
  getStarmakers().then(
    (v: any) => {
      starmakers.value = Object.assign(communityData.value.starmakers, {list: v.data})
      if (process.client) {
        starmakers.value.list.forEach((v: any) => {
          const img = new Image()
          img.src = `${v.imgSrc}`
        })
      }
    },
    error => console.log(error)
  ).catch((v: any) => console.log(v))
  getContests().then(
    resp => {
      contests.value = Object.assign(communityData.value.contests, {list: resp.data.filter(contest => {
        const now = new Date()
        return typeof contest.isAlive !== 'undefined' || now >= contest.start
      })})
      if (process.browser) {
        contests.value.list.forEach((v: any) => {
          const img = new Image()
          img.src = `${v.imgSrc}`
        })
      }
    },
    error => console.log(error)
  ).catch((v: any) => console.log(v))
  initBlogs()
})
</script>

<style lang="scss" scoped>

.top-img {
  cursor: pointer;
}
.top-banner{
  position: relative;
  display: block;
  height: 496px;
  background-size: 1920px 496px;
  background-position: center;
  @media (min-width: 1920px) {
    height: 661px;
    background-size: 2560px 661px;
  }

  @media (min-width: 2560px) {
    height: 38.7vw;
    background-size: 100vw 38.7vw;
    background-position: center;
  }
  .text-container {
    box-sizing: border-box;
    width: 100%;
  }


  $icon-width: 261px;
  $icon-height: 36px;
  .change-color-container {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: $icon-width;
    height: $icon-height;
    margin-right: 14px;
    position: relative;
  }
  .change-color {
    filter: drop-shadow(#0C63E2 $icon-width 0 0);
    // transform: translateX(-100%);
    transform: translate(-100%, -50%);
    position: absolute;
    top: 50%;
    left: 0px;
  }
  .s-banner-desc-0 {
    color: black;
  }
}
.text-container {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
}


.community-relevant {
  position: relative;
  height: 544px;
  background-size: 1920px 544px;
  background-position: center center;


  .text-wrapper {
    position: absolute;
    // top: 50%;
    height: 100%;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 780px;
    text-align: center;
    padding: 16px;

    &::v-deep a {
      color: white;
    }
  }

}

.user-case {
  padding: 120px 0;

  :deep(a):hover {
    color: white;
  }
}
.expore {
  margin-top: 120px;
  margin-bottom: 44px;
  .explore-things {
    display: flex;
    justify-content: space-between;
  }
  .explore-thing {
    width: 25%;
    background-color: white;
    margin-right: 24px;
    border-radius: 9px;
    // padding-top: 24px 24px 40px;
    box-shadow: 0px 6px 32px -6px rgba(0, 0, 0, 0.08);
    border: 1px solid $black-white-7;

    &:last-child{
      margin-right: 0;
    }

    .explore-thing-bg-img {
      position: relative;
      display: flex;
      align-items: center;
      flex: 0 0 68px;
      img {
        opacity: 0.4;
        transition: all .3s ease-in-out;
      }

      &:hover .explore-thing-img {
        // display: none;
        opacity: 0;
      }
      &:hover img {
        opacity: 1;
      }
    }
    .explore-thing-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;

      img {
        opacity: 1;
        transition: all .3s ease-in-out;
        width: 8.75vw
      }
    }
    &:hover {
      .explore-thing-img {
        display: none;
      }
      .explore-thing-bg-img img {
        opacity: 1;
      }
      border: 1px solid $blue;
    }
    // img {
    //   width: 168px;
    //   height: 168px;
    // }
  }
}

.thank-you-container {
  margin-top: 0px;
  margin-bottom: 134px;

  .thank-you {
    box-shadow: 0px 6px 32px -6px rgba(0, 0, 0, 0.08);
    border-radius: 9px;
    padding-left: 7.708vw;
    padding-right: 7.708vw;
    display: flex;
    justify-content: space-between;

  }
  .thank-you-text {
    width: calc(50% - 12px);
  }
  .thank-you-img {
    width: calc(50% - 12px);
  }
  .kickstarter {
    cursor: pointer;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 48px;
    background-color: $black-white-8;
    border: 1px solid $black-white-8;
    border-radius: 9px;

    img{
      width: 12.6525vw
    }

    &:hover {
      background-color: white;
      box-shadow: 0px 8px 24px -6px rgba(0, 0, 0, 0.1);
      border-radius: 9px;

      &::v-deep a {
        color: $blue;
      }
    }
  }
}

.left-icon {
  display: inline-block;
  transform: rotate(-90deg)
}
@include mobile {
  .top-banner{
    background-position: center center;
    background-size: 100vw 133.33vw;
    height: 133.33vw;
    .text-container{
      text-align: center;
      top: 48px;
      transform: unset;

    }
    .title-1 {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
    }
    .ahead-desc  {
      margin-top: 32px;
      font-size: 12px;
      line-height: 16px;
      font-style: normal;
      font-weight: 600;
      color: #161616;
    }
    .font-1 {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      // color: $black-white-2;
    }
    .snmk-primary-btn {
      margin-top: 24px;
      padding-inline: 64px;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
  }
  .carousel {
    .snmk-btn {
      font-size: 12px;
      line-height: 20px;

    }
    .mt-2xl{
      margin-top: 24px;
    }
  }


  .bg-bw-8::v-deep .pagination-progress-bar{
    background-color: $black-white-7;
  }



  .community-relevant {
    position: relative;
    height: 146.666vw;
    background-size: 100vw 146.666vw;
  }

  .user-case {
    padding: 60px 0;
  }
  .expore {
    margin-top: 60px;
    margin-bottom: 16px;
    .explore-things {
      display: flex;
      flex-direction: column;
    }
    .explore-thing {

      width: 100%;
      margin-right: 0;
      margin-top: 16px;
      padding: 16px;
      text-align: center;

      &:first-child {
        margin-top: 0;
      }

      &::v-deep a {
        display: flex;
        flex-direction: column;
      }
      .explore-thing-bg-img {
        display: flex;
        align-items: center;
        flex: 0 0 68px;
      }
      .explore-thing-img img {
        width: 35.2vw
      }
      .explore-thing-text {
        margin-left: 16px;
        flex: 1 1 68px;
        .mb-m { margin-bottom: 4px;}
      }
    }
  }
  .thank-you-container  {
    margin-top: 16px;
    margin-bottom: 16px;
    .thank-you {
      flex-direction: column;
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }
    .thank-you-text, .thank-you-img {
      width: 100%;
    }
    .thank-you-text {
      padding-left: 16px;
      padding-right: 16px;
      .mb-3xl { margin-bottom: 12px;}
    }

    .kickstarter {
      margin-top: 16px;
      flex-direction: column;
      text-align: center;
      .mt-m {
        margin-top: 8px;
      }
      .ml-m {
        margin-left: 0;
      }

      img{
        width: 64.8vw
      }
    }

  }
}

@media (min-width: $breakPoint_xxl) {
  .top-banner{
    background-position: center center;
    background-size: 100vw 25.8vw;
    height: 25.8vw;
  }
}
</style>
