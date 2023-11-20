<template>
    <div :style='{ "--themeColor": i18ndata.themeColor || themeColor }'>
        <Banner v-if='i18ndata.banner' :dataSrc='i18ndata.banner'></Banner>
        <Widget v-if='i18ndata.widget' :dataSrc='i18ndata.widget'></Widget>
        <Ways v-if='i18ndata.contestWays' :dataSrc='i18ndata.contestWays'></Ways>
        <Rules v-if='i18ndata.contestRules' :dataSrc='i18ndata.contestRules'></Rules>
        <Votes v-if='i18ndata.contestVotes' :dataSrc='i18ndata.contestVotes'></Votes>
        <Faqs v-if='i18ndata.contestFaq' :dataSrc='i18ndata.contestFaq'></Faqs>
        <Gallery  v-if='i18ndata.customGallery' :dataSrc='i18ndata.customGallery'></Gallery>
    </div>
</template>

<script setup lang='ts'>
import Banner from './components/Banner.vue'
import Ways from './components/Ways.vue';
import Widget from './components/Widget.vue'
import Rules from './components/Rules.vue'
import Votes from './components/Votes.vue'
import Faqs from './components/Faqs.vue'
import Gallery from './components/Gallery.vue'
import namei18nMap from './name-i18n-map'

const themeColor = ref("#0C63E2")
const route = useRoute()
const i18n = useI18n()
const i18ndata = computed(() => i18n.tm(namei18nMap[route.params.name]))
console.log()

useHead({
    title: i18ndata.value.headTitle
})

</script>

<style scoped lang='scss'>
.rules {
    .wrappers {
        display: flex;
        padding-top: 20px;
        justify-content: space-between;

        .wrapper {
            width: 49%;
            background: #FFFFFF;
            box-shadow: 0px 4px 23px 0px rgba(200, 200, 200, 0.5);
            border-radius: 8px;
            border: 1px solid #F7F8F9;
            border-top: 6px solid var(--themeColor);
            padding: 30px 20px 23px 20px;

            .wrapperTitle {
                margin-bottom: 10px;
                font-size: 22px;
                font-weight: 500;
                color: #272829;
            }
        }

        .prize {
            img {
                max-width: none;
                width: 100%;
            }

            .grandTitle {
                margin-top: 30px;
                color: var(--themeColor);
                font-weight: 600;
            }

            .prize-title,
            .luckyTitle,
            .first-title,
            .second-title,
            .third-title {
                margin-top: 16px;
                color: var(--themeColor);
                font-weight: 600;
            }

            .prizeItem:first-child {
                // border-bottom: 1px solid #E7E8E9;
                padding-bottom: 30px;
                margin-bottom: 30px;
            }
        }

        .rule {
            .ruleItem:first-child {
                // border-bottom: 1px solid #E7E8E9;
                padding-bottom: 30px;
                margin-bottom: 30px;
            }

            .ruleSubTitle {
                margin-bottom: 16px;
                color: #676869;

                p:nth-child(2) {
                    margin: 16px 0;
                }
            }

            .contentList {
                list-style: circle;

                .list {
                    margin-top: 1vw;
                    display: inline-block;
                    width: 100%;
                    font-weight: 400;
                    color: #979899;

                    &:first-child {
                        margin-top: 0;
                    }
                }

                .list-block {
                    width: 100%;
                    display: block;
                }
            }
        }

        .note {
            font-size: 16px;
            font-weight: 400;
            color: #979899;
            margin-top: 20px;

        }
    }

}

@include mobile {

    .rules {
        .mainTitle {
            max-width: 59vw;
            margin: 0 auto;
        }

        .wrappers {
            margin-top: 2.78vw;
            padding-top: 0;
            display: block;
            box-shadow: 0px 8px 46px 0px rgba(200, 200, 200, 0.5);
            border-radius: 16px;
            border: 2px solid #F7F8F9;

            .wrapper {
                width: auto;
                box-shadow: none;
                border: none;
                padding: 4.17vw 2.78vw 0;

                .wrapperTitle {
                    font-size: 5vw;
                    font-weight: 500;
                    margin-bottom: 2.78vw;
                }
            }

            .prize {
                .grandTitle {
                    margin-top: 2.78vw;
                }

                .luckyTitle {
                    margin-top: 2.78vw;
                }

                p {
                    font-size: 3.89vw;
                }
            }

            .rule {
                .contentList .list {
                    margin-top: 2.78vw;
                }

                .wrapperTitle {
                    font-size: 5vw;
                    font-weight: 500;
                }

                .ruleSubTitle {
                    font-size: 3.89vw;
                    font-weight: 400;
                    margin-bottom: 2.78vw;
                }

                .contentList {
                    font-size: 3.89vw;
                }

                .ruleItem {
                    margin-bottom: 5.56vw;
                }

                .ruleItem:first-child {
                    padding-bottom: 5.56vw;
                    margin-bottom: 5.56vw;
                }
            }

            .note {
                font-size: 3.89vw;
                margin-top: 2.78vw;
                padding-bottom: 5.55vw;
                border-bottom: 1px solid #E7E8E9;
            }
        }
    }
}</style>