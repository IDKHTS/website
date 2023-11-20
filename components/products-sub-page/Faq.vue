<template>
    <div style='background: #f7f8f9;' :class='{"pt-2xl": !isMobile}'>
        <SubNavBar :isFixed="true" :isAlwaysShow="false" :dataSource="subNavBar" :withModal='true'></SubNavBar>
        <div  class='faq-container' :class='{"snmk-container pt-3xl": !isMobile }'>
            <div v-if="!isMobile || !isMobShowAticle" class='menus-container' :class='{"snmk-col-2 snmk-col-l-2 snmk-col-m-2 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1": !isMobile}'>
                <div class='menus w-100'>
                    <div class='menu' :class='{"menu-active": index === selectedIndex}' v-for="(menu, index) in menus" :key="menu" @click='showMenu(index)'>
                        {{ menu }}
                        <img v-if='isMobile' :class="{'rotate-transition': articleIndex === index && !isMobile}" class="arrow-icon" :src="'https://ditfjx9w4x3vl.cloudfront.net/assets/header/go-icon.svg'" alt="">
                    </div>
                </div>
            </div>
            <div v-if='!isMobile || isMobShowAticle' class='main-container' :class='{"snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4": !isMobile}'>
                <div class='content-title' @click='backToMenu'>
                    <span v-if='isMobile' class='iconfont to-left mr-m'>&#xe60a;</span>
                    {{ menus[selectedIndex] }}
                </div>
                <div  v-for="(article, index) in articlesList[selectedIndex]" :key="article.id" class='article'>
                    <div class='article-title vertical-center' @click='showArticle(index)'>
                        {{ article.title }}
                        <img :class="{'rotate-transition': articleIndex === index}" class="arrow-icon" :src="'https://ditfjx9w4x3vl.cloudfront.net/assets/header/go-icon.svg'" alt="">
                            <!-- :class="index === 0 ? 'fa-angle-up':'fa-angle-down'"
                            @click='showAnswer(idx,index)' -->
                    </div>
                    <div v-show='articleIndex === index' class='article-body' v-html='article.body'></div>
                </div>
            </div>
        </div>
        <!-- v-if='!isMobile' <div v-else class='faq-container'>
            <div class='menus w-100'>
                <div class='menu' v-for="(menu, index) in menus" :key="menu" v-html='menu' @click='showMenu(index)'></div>
            </div>
            <div>

            </div>
        </div> -->
    </div>
</template>
    
<script setup lang='ts'>
import SubNavBar from '@@/components/SubNavBar.vue'
import { storeToRefs } from 'pinia'
import { ISubNavMenu } from '~/components/SubNavBar/type';
import $ from '~/resources/js/jquery-vendor';
import FaqType from '@@/resources/data/faqType'
import { useGlobalStore } from '~/stores'
const { isMobile } = storeToRefs(useGlobalStore())

const props = withDefaults(defineProps<{
    faqTypeKey?: string
    subNavBar: ISubNavMenu
}>(), { faqTypeKey: 'faq2Type' })


const i18n = useI18n()
const articlesList = ref<[any[]]>([[]])
// const success = (res: any, index: number) => articles.value[index] = res.articles
const success = (res: any, index: number) => {
    if(!articlesList.value[index]) {
        articlesList.value[index] = []
    }
    articlesList.value[index].push(...res.articles)
}
const faqType = computed(() => FaqType[props.faqTypeKey])
const menus = computed(() => faqType.value[i18n.locale.value] || [])
const getContentFaq = () => {
    const locale = i18n.locale.value
    menus.value.forEach((type: string, index: number) => {
        faqType.value.labels.forEach((label: string) => {   
            faqType.value.tags.forEach((tag: string) => {
                // console.log(tag, faqType.value.labels, type)   
                $.ajax({
                    type: 'GET',
                    // https://snapmaker.zendesk.com/api/v2/help_center/zh-cn/articles.json?page=1&per_page=100
                    // url: `https://snapmaker.zendesk.com/api/v2/help_center/${locale.toLowerCase()}/articles.json?label_names=Official,2.0 Enclosure,${type}`,
                    url: `https://snapmaker.zendesk.com/api/v2/help_center/${locale.toLowerCase()}/articles.json?label_names=${type},${label},${tag}`,
                    success: (res: any) => success(res, index)
                })
            })
        });

        // $.ajax({
        //     type: 'GET',
        //     // https://snapmaker.zendesk.com/api/v2/help_center/zh-cn/articles.json?page=1&per_page=100
        //     // url: `https://snapmaker.zendesk.com/api/v2/help_center/${locale.toLowerCase()}/articles.json?label_names=Official,2.0 Enclosure,${type}`,
        //     url: `https://snapmaker.zendesk.com/api/v2/help_center/${locale.toLowerCase()}/articles.json?label_names=Official,${faqType.value.label},${type}`,

        //     success: (res: any) => success(res, index)
        // })
        // $.ajax({
        //     type: 'GET',
        //     // url: `https://snapmaker.zendesk.com/api/v2/help_center/${locale.toLowerCase()}/articles.json?label_names=Official,Purifier,${type}`,
        //     url: `https://snapmaker.zendesk.com/api/v2/help_center/${locale.toLowerCase()}/articles.json?label_names=local,${faqType.value.label},${type}`,
        //     success: (res: any) => success(res, index)
        // })
    })
}
onMounted(() => {
    getContentFaq()
})

const selectedIndex = ref(0)
const articleIndex = ref(0)
const showMenu = (index: number) => {
    selectedIndex.value = index
    if(isMobile.value) {
        isMobShowAticle.value = true
    }
}
const showArticle = (index: number) => {
    if(articleIndex.value === index) {
        articleIndex.value = -1
        return
    }
    articleIndex.value = index
}

const isMobShowAticle = ref(false)
const backToMenu = () => isMobShowAticle.value = false
</script>
    


    
<style lang="scss" scoped>

.faq-container {
    @include mobile {
        margin-top: 60px;
    }
}

.menus {
    display: inline-block;
    vertical-align: top;
    margin-bottom: 100px;
    background-color: #fff;

    .menu {
        font-weight: 400;
        color: #676869;
        line-height: 21px;
        cursor: pointer;
        padding: 1rem 0 1rem 1rem;

        @include mobile {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            padding: 1rem;
        }
    }
    .menu-active {
        color: $blue;
    }
}

.main-container {
    vertical-align: top;
    margin-bottom: 100px;
    background-color: #fff;
    padding: 40px 26px 40px 30px;

    .content-title {
        font-size: 1.75em;
        margin-bottom: 0.5714em;
        color: rgb(54, 54, 54);
        font-weight: 600;
        line-height: 1.125;
    }
    .article-title {
        font-weight: 400;
        font-size: 16px;
        color: #272829;
        line-height: 19px;
        padding: 20px 24px 20px 20px;
        position: relative;
        margin-bottom: 0;
        justify-content: space-between;
        cursor: pointer;
    }
    .article-body {
        font-weight: 400;
        padding-left: 30px;
        padding-bottom: 20px;
        color: #979899;
        line-height: 24px;
    }

    @include mobile {
        padding: 0;

        .content-title {
            padding: 16px;
            margin-bottom: 0;
            font-weight: bold;
            background-color: #f7f8f9;
            display: flex;
            align-items: center;
        }

        .to-left {
            display: inline-block;
            transform: rotate(180deg);
            font-size: 18px;
        }

        .article {
            border-bottom: 1px solid #e6e6e6;
            margin-inline: 16px;
        }

        .article-title, .article-body {
            padding-inline: 0;
        }
        .article-body {
            padding-left: 8px;
        }
    }
}


.rotate-transition {
  transform: rotate(90deg);
}

</style>
    