
<template>
    <section class="rules my-3xl">
        <div class="container">
            <h2 class="mainTitle has-text-centered">
                {{ dataSrc.mainTitle }}
            </h2>
            <p class="subTitle has-text-centered">
                {{ dataSrc.subTitle }}
            </p>
            <div class="wrappers">
                <div class="prize wrapper">
                    <div class="prizeItem" v-for="prizeItem of dataSrc.contestPrizes" :key="prizeItem.title">
                        <div class="wrapperTitle">
                            {{ prizeItem.title }}
                        </div>
                        <template v-for="prize of prizeItem.prizes" :key="prize.title">
                            <p class="prize-title">
                                {{ prize.title }}
                            </p>
                            <p class="prize-content" v-html="prize.content">
                            </p>
                        </template>
                        <p class="note" v-if="!!prizeItem.note">
                            {{ prizeItem.note }}
                        </p>
                    </div>
                </div>
                <div class="rule wrapper">
                    <div class="ruleItem is-clearfix" v-for="(item) in dataSrc.rules" :key='item.mainTitle'>
                        <div class="wrapperTitle">
                            {{ item.mainTitle }}
                        </div>
                        <div class="ruleSubTitle">
                            <p v-if="item.noticeNote">{{ item.noticeNote }}</p>
                            <p v-for="subTitle of item.subTitles" :key="subTitle" v-html='subTitle'> </p>
                            <!-- <p>{{item.subTitle}}</p>
                            <p>{{item.subTitle2}}</p>
                            <br />
                            <p>{{item.subTitle3}}</p> -->
                        </div>
                        <ul class="contentList" v-if='item.mainTitle !== "Evaluation"'>
                            <li v-for="(list) in item.content" class="list" :key='list' v-html='list'></li>
                        </ul>
                        <div class="ruleSubTitle" v-if="item.contentDescription">
                            <p>{{ item.contentDescription }}</p>
                        </div>
                        <ul class="contentList" v-if="item.content2">
                            <li v-for="(list) in item.content2" class="list list-block" :key='list' v-html='list'></li>
                        </ul>
                        <p class="note" v-if="!!item.note">
                            {{ item.note }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
    dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

</script>

<style scoped lang='scss'>
@import '../style.scss';

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
            max-width: 89vw;
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