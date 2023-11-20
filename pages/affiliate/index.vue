<template>
    <div id="affiliate">
        <modal v-if="showModal" @close="showModal = false" :videoSrc="videoLink">
        </modal>
        <section class="heroWrapper" v-if='!isMobile'>
            <div class="topHero is-left">
                <div class="heroText">
                    <h2 class="heroTitle">
                        {{ pressData.affiliateFunction.title }}
                    </h2>
                    <div class="voice">
                        <p>
                            {{ pressData.affiliateFunction.voice1 }}
                        </p>
                        <p>
                            {{ pressData.affiliateFunction.voice2 }}
                        </p>
                    </div>
                    <p class="influence">
                        {{ pressData.affiliateFunction.influence }}
                    </p>
                    <a href="#join-us" class="button heroButton">
                        {{ pressData.affiliateFunction.buttonText }}
                    </a>
                </div>
            </div>
            <!-- <div class="topHero is-right">
        </div> -->
        </section>
        <section class="heroWrapperMobile" v-if='isMobile'>
            <div class="heroImg">
                <img :src="pressData.affiliateFunction.heroMobileSrc" alt="">
            </div>
            <div class="heroText">
                <h2 class="heroTitle">
                    {{ pressData.affiliateFunction.title }}
                </h2>
                <div class="voice">
                    <p>
                        {{ pressData.affiliateFunction.voice1 }}
                    </p>
                    <p>
                        {{ pressData.affiliateFunction.voice2 }}
                    </p>
                </div>
                <p class="influence">
                    {{ pressData.affiliateFunction.influence }}
                </p>
                <a href="#join-us" class="button button-blue heroButton">
                    {{ pressData.affiliateFunction.buttonText }}
                </a>
            </div>
        </section>
        <section class="workflow container" v-if='!isMobile'>
            <p class="mainTitle">
                {{ pressData.affiliateWorkflow.mainTitle }}
            </p>
            <div class="flowContent columns">
                <div class="column is-clearfix" v-for="(item) in pressData.affiliateWorkflow.content" :key='item.subTitle'>
                    <div class="has-text-centered">
                        <img class="pic" :src="item.imgSrc">
                    </div>
                    <p class="subTitle">{{ item.subTitle }}</p>
                    <p class="text">{{ item.text }}</p>
                </div>
            </div>
            <!-- <p class="term">
                {{pressData.affiliateWorkflow.termText}}
            </p> -->
            <!-- <div class="has-text-centered ">
                <a target="_blank" :href="pressData.affiliateWorkflow.buttonLink" class="button button-blue workflowButton">
                    {{pressData.affiliateWorkflow.buttonText}}
                </a>
            </div> -->
        </section>
        <section class="workflowMobile container" v-if='isMobile'>
            <p class="mainTitle">
                {{ pressData.affiliateWorkflow.mainTitle }}
            </p>
            <div class="flowContent">
                <div class="eachFlow is-clearfix" v-for="(item, key) in pressData.affiliateWorkflow.content"
                    :key='item.subTitle'>
                    <p class="subTitle">
                        0{{ key + 1 }}
                    </p>
                    <div class="text">
                        <p>{{ item.subTitle }}</p>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
                <!-- <p class="term">
                     {{pressData.affiliateWorkflow.termText}}
                 </p> -->
            </div>
            <!-- <div class="has-text-centered ">
                <a target="_blank"  class="button button-blue workflowButton">
                    {{pressData.affiliateWorkflow.buttonText}}
                </a>
            </div> -->
        </section>
        <section class="join container" v-if='!isMobile'>
            <p class="mainTitle">
                {{ pressData.affiliateJoin.mainTitle }}
            </p>
            <div class="contentWrapper is-clearfix">
                <div class="joinContent part has-text-centered ">
                    <p class="subTitle">
                        {{ pressData.affiliateJoin.socialText }}
                    </p>
                    <div class="columns">
                        <div class="column " v-for="(item) in pressData.affiliateJoin.content" :key='item.subTitle'>
                            <div class="has-text-centered">
                                <img class="pic" :src="item.imgSrc">
                            </div>
                            <p class="text">{{ item.text }}</p>
                        </div>
                    </div>
                </div>
                <div class="joinDescription part ">
                    <ul class="is-clearfix" v-for="(item, key) in pressData.affiliateJoin.description" :key='item[key]'>
                        <li class="text">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="joinMobile container" v-if='isMobile'>
            <p class="mainTitle">
                {{ pressData.affiliateJoin.mainTitle }}
            </p>
            <div class="contentWrapper is-clearfix">
                <div class="joinContent part has-text-centered ">
                    <p class="subTitle">
                        {{ pressData.affiliateJoin.socialText }}
                    </p>
                    <div class="socialIcon">
                        <div class="eachIcon" v-for="(item) in pressData.affiliateJoin.content" :key='item.subTitle'>
                            <img class="pic" :src="item.imgSrc">
                            <p class="text">{{ item.text }}</p>
                        </div>
                    </div>
                </div>
                <div class="joinDescription part ">
                    <ul class="is-clearfix" v-for="(item, key) in pressData.affiliateJoin.description" :key='item[key]'>
                        <li class="text">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="review container">
            <p class="mainTitle">
                {{ pressData.affiliateReview.mainTitle }}
            </p>
            <div class="contentWrapper is-clearfix">
                <div class="columns">
                    <div class="column" v-for="(item) in pressData.affiliateReview.videos" :key='item.text'>
                        <!-- <div class="wrap" :style="{ backgroundImage: `url(${item.imgSrc})`}"> -->
                        <div class="wrap">
                            <img :src="item.imgSrc" alt="">
                            <a class="iconWrapper" @click="showVideo(item)">
                                <img :src="pressData.playVidoeIcon" class="iconImg" :alt="item.text">
                            </a>
                            <p class="reviewTitle">
                                {{ item.text }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column" v-for="(item) in pressData.affiliateReview.articles" :key='item.text'>
                        <a class="wrap" :href="item.articleLink" target="_blank">
                            <img :src="item.imgSrc" alt="">
                            <p class="reviewTitle">
                                {{ item.text }}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="join-link" id='join-us'>
            <div class="container has-text-centered">
                <h2 class="mainTitle">
                    {{ pressData.affiliateJoinLink.mainTitle }}
                </h2>
                <h2 class="subTitle">
                    {{ pressData.affiliateJoinLink.subTitle }}
                    <a class="c-blue" :href="'mailto:' + pressData.affiliateJoinLink.email">{{
                        pressData.affiliateJoinLink.subTitleEmail }}</a>
                </h2>
                <div class="buttons-container">
                    <div v-for='button of pressData.affiliateJoinLink.buttons' :key='button.icon'
                        class='button-wrapper vertical-center'>
                        <a :href="button.link" target="_blank" class="affiliate-icon">
                            <img :src="button.icon" alt="Snapmaker">
                        </a>
                        <a :href="button.link" target="_blank" class="mt-m button button-fill-dark-blue">
                            {{ button.text }}
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="help ">
            <div class="container has-text-centered">
                <h2 class="mainTitle">
                    {{ pressData.affiliateHelp.mainTitle }}
                </h2>
                <h2 class="subTitle">
                    {{ pressData.affiliateHelp.subTitle }}
                    <a class="c-blue" :href="'mailto:' + pressData.affiliateHelp.email">{{
                        pressData.affiliateHelp.subTitleEmail }}</a>
                </h2>
            </div>
        </section>
    </div>
</template>

<script setup lang='ts'>
import Modal from '@@/components/VideoModal.vue'
import head from '@@/resources/data/head'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';


useHead(head.Affiliate)
const i18n = useI18n()
const { isMobile } = storeToRefs(useGlobalStore())
const pressData = computed<any>(() => i18n.tm('pressData'))

const videoLink = ref('')
const showModal = ref(false)
const showVideo = (item: any) => {
    videoLink.value = item.videoLink
    showModal.value = true
}
</script>
  
<style lang="scss" scoped>
#affiliate {
    background-color: #fff;

    section {
        margin-bottom: 5.21vw;
    }

    .mainTitle {
        font-weight: 500;
        color: #272829;
        font-size: 2.08vw;
        margin-bottom: 2.86vw;
        text-align: center;
    }

    @media (max-width: 767px) {
        section {
            margin-bottom: 13.89vw;
        }

        .mainTitle {
            font-size: 6.67vw;
            margin-bottom: 5.55vw;
            text-align: center;
        }
    }

    .heroWrapper {
        background: url('https://ditfjx9w4x3vl.cloudfront.net/assets/affiliate-program/affiliate-progress-pc-banner.jpg');
        height: 30.2vw;
        // max-height: 580px;
        background-size: cover;
        font-size: 0;
        position: relative;
        display: flex;
        align-items: center;

        .topHero {
            height: 22.9vw;
            display: inline-block;
            vertical-align: middle;

            &.is-left {
                width: 55.7%;
                display: flex;
                // background-color: rgba(40, 167, 225, 1);
                color: #fff;

                .heroText {
                    // position: absolute;
                    // top: 0;
                    // left: 0;
                    // bottom: 0;
                    // right: 0;
                    // max-width: 1152px;
                    padding: 0 1rem;
                    margin: auto;

                    .heroTitle {
                        font-size: 1.04vw;
                        max-width: 32.4vw;
                        font-weight: 600;
                    }

                    .voice {
                        font-size: 2.3vw;
                        margin: 0.78vw 0 0.78vw;
                        line-height: 2.3vw;
                        max-width: 32.4vw;
                        font-weight: bold;
                        color: #0C63E2;

                        p {
                            font-size: 2.3vw;
                        }
                    }

                    .influence {
                        max-width: 32.4vw;
                        font-size: 1.04vw;
                        font-weight: 300;
                        margin-bottom: 2.08vw;
                        margin-top: 16px;
                    }

                    .heroButton {
                        font-size: 1.04vw;
                        font-weight: 500;
                        height: 2.3vw;
                        color: white;
                        border: none;
                        // background-color: transparent;
                        background: linear-gradient(45deg, #0C63E2, #1A8CF5);
                        width: 10.4vw;

                        &:hover {
                            background: linear-gradient(45deg, #0A31B3, #0950D2);
                        }
                    }
                }
            }

            &.is-right {
                width: 44.3%;
                background-image: url('https://ditfjx9w4x3vl.cloudfront.net/img/hero_pc.png');
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    }

    .heroWrapperMobile {
        .heroImg {
            font-size: 0;

            img {
                width: 100%;
                height: 100%
            }
        }

        .heroText {
            background: #030303;
            color: #fff;
            text-align: center;
            padding: 0 4.44vw;

            .heroTitle {
                font-size: 4.44vw;
                font-weight: normal;
                padding-top: 4.44vw;
            }

            .voice {
                font-size: 6.67vw;
                margin: 1.67vw 0 1.67vw;
                line-height: 6.67vw;
                // max-width: 36.4vw;
                font-weight: bold;
                color: #0C63E2;
            }

            .influence {
                font-size: 3.89vw;
                font-weight: 300;
                margin-top: 16px;
            }

            .heroButton {
                font-size: 3.89vw;
                font-weight: 500;
                margin: 4.44vw 0 6.67vw;
                color: #fff;
                border-radius: 4px;
                border: 1px solid #FFFFFF;
                width: 41.66vw;
                border: none;
                // background-color: transparent;
                background: linear-gradient(87.26deg, #0C63E2 0%, #1A8CF5 103.55%);

                E &:hover {
                    background: linear-gradient(87.26deg, #0A31B3 0%, #0950D2 103.55%);
                }
            }
        }
    }

    .workflow {
        .flowContent {
            .subTitle {
                font-size: 1.15vw;
                font-weight: 500;
                color: #272829;
                margin: 1.67vw 0 0.83vw;
                text-align: center;
            }

            .pic {
                width: 3.125vw;
                height: 3.125vw;
            }

            .text {
                font-size: 0.83vw;
                text-align: center;
                font-weight: 400;
                color: #676869;
                word-break: break-word;
            }
        }

        .term {
            font-size: 0.83vw;
            text-align: right;
            font-weight: 400;
            margin-bottom: 2.86vw;
            color: #979899;
        }

        .workflowButton {
            width: 8.33vw;
            font-size: 0.83vw;
            padding: .9375vw;
        }
    }

    .workflowMobile {
        padding: 0 4.44vw;

        .flowContent {
            overflow: hidden;

            .eachFlow:not(:last-child) {
                margin-bottom: 5.55vw;
            }

            .eachFlow {
                display: flex;
            }

            .subTitle {
                float: left;
                font-size: 8.33vw;
                color: #0C63E2;
                font-family: ArialNarrow-BoldItalic;
            }

            .text {
                float: left;
                width: 90%;
                padding-top: 6px;
                padding-left: 2.22vw;

                & p:first-child {
                    font-size: 4.44vw;
                    font-weight: 500;
                    color: #272829;
                }

                & p:last-child {
                    font-size: 3.89vw;
                    font-weight: 400;
                    color: #676869;
                }
            }

            .term {
                margin-top: 4.167vw;
                font-weight: 400;
                text-align: right;
                color: #979899;
                font-size: 3.33vw;
            }
        }

        .workflowButton {
            width: 41.67vw;
            height: 9.44vw;
            font-size: 3.89vw;
            margin-top: 7.5vw;
        }
    }

    .join {
        .contentWrapper {
            padding: 1.56vw 1.04vw;
            box-shadow: 0px 4px 23px 0px rgba(200, 200, 200, 0.5);
            border-radius: 12px;
            border: 1px solid #F7F8F9;

            .part {
                width: 49%;
                float: left;
                // display: inline-block;
            }

            .joinContent {
                .subTitle {
                    font-size: 1.04vw;
                    text-align: left;
                    font-weight: 400;
                    color: #676869;
                    margin-bottom: .83vw;
                }

                .columns {
                    .column {
                        padding-bottom: 0;

                        .pic {
                            width: 2.29vw;
                            height: 2.29vw;
                        }
                    }

                    .text {
                        font-size: .73vw;
                        font-weight: 400;
                        color: #979899;
                    }
                }
            }

            .joinDescription {
                border-left: 1px solid rgba(199, 200, 201, 1);

                ul {
                    padding-left: 1.56vw;
                    font-size: 1.04vw;
                    font-weight: 400;
                    color: #676869;

                }

                ul:not(:last-child) li {
                    margin-bottom: .83vw;
                }
            }
        }
    }

    .joinMobile {
        padding: 0 4.44vw;

        .contentWrapper {
            box-shadow: 0px 4px 23px 0px rgba(200, 200, 200, 0.5);
            border-radius: 12px;
            padding: 5.55vw 2.22vw 6.94vw;

            .subTitle {
                font-size: 3.89vw;
                font-weight: 400;
                color: #676869;
                text-align: left;
            }

            .socialIcon {
                display: flex;
                padding: 2.78vw 0 4.72vw;
                place-content: space-between;

                .eachIcon {
                    img {
                        width: 9.17vw;
                        height: 9.17vw;
                    }

                    font-size: 2.91vw;
                    font-weight: 400;
                    width: 20%;
                    color: #979899;
                }
            }

            .joinDescription {
                font-size: 3.89vw;
                color: #676869;
                font-weight: 400;
            }
        }
    }

    .review {
        .wrap {
            position: relative;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
            display: block;

            .iconWrapper {
                .iconImg {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    opacity: .8;
                    width: 4.17vw;
                    height: 4.17vw;
                    max-width: 80px;
                    max-height: 80px;
                }
            }

            .reviewTitle {
                position: absolute;
                background: linear-gradient(180deg, rgba(39, 40, 41, 0) 0%, rgba(39, 40, 41, 0.5) 36%, rgba(39, 40, 41, 1) 100%);
                padding: 0.47vw 0;
                bottom: -1%;
                width: 100%;
                text-indent: 0.83vw;
                font-size: 0.8375vw;
                color: white;
            }
        }

        @media (max-width: 767px) {
            padding: 0 7vw;

            // padding: 0 6.17vw;
            .column {
                padding: 0 0 4.44vw;

                .wrap {
                    height: 51.1vw;

                    .iconImg {
                        width: 16.67vw;
                        height: 16.67vw;
                    }

                    .reviewTitle {
                        padding: 1.25vw 0;
                        font-size: 3.89vw;
                        text-indent: 3.33vw;
                    }
                }
            }
        }
    }

    .help {
        background: #fff;
        padding: 3.125vw 0 3.854vw;
        margin-bottom: 0;

        .mainTitle {
            font-weight: 700;
            margin-bottom: 0;
        }

        .subTitle {
            margin: 0.83vw 0 2.08vw;
            font-size: 1.04vw;
            font-weight: 400;
            color: #676869;
        }

        .button {
            width: 8.33vw;
            font-size: 0.83vw;
        }

        .button:first-child {
            margin-right: 0.83vw;
        }

        @media(max-width: 767px) {
            padding: 11.11vw 0 7.5vw;

            .subTitle {
                margin: 2.78vw 0 6.94vw;
                font-size: 3.89vw;
            }

            .button {
                width: 27.8vw;
                font-size: 3.89vw;
            }

            .button:first-child {
                margin-right: 2.22vw;
            }
        }
    }

    .join-link {
        background: #fafafa;
        padding: 3.125vw 0 4.218vw;
        margin-bottom: 0;

        .mainTitle {
            font-weight: 700;
            margin-bottom: 0;
        }

        .subTitle {
            margin: 0.83vw 0 2.08vw;
            font-size: 1.04vw;
            font-weight: 400;
            color: #676869;
        }

        .buttons-container {
            display: flex;
            justify-content: center;
        }

        .button-wrapper {
            display: flex;
            flex-direction: column;
            margin-inline: 8px;
        }

        .affiliate-icon {
            width: 90px;
        }

        .button {
            width: 8.33vw;
            font-size: 0.83vw;
        }

        .button:first-child {
            margin-right: 0.83vw;
        }

        @media(max-width: 767px) {
            padding: 11.11vw 0 7.5vw;

            .subTitle {
                margin: 2.78vw 0 6.94vw;
                font-size: 3.89vw;
            }

            .button {
                width: 27.8vw;
                font-size: 3.89vw;
            }

            .button:first-child {
                margin-right: 2.22vw;
            }
        }
    }
}
</style>
  