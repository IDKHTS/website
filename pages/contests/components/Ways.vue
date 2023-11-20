
<template>
    <section class="ways my-3xl">
        <div class="container has-text-centered" v-if='dataSrc'>
            <h2 class="mainTitle">
                {{ dataSrc.mainTitle }}
            </h2>
            <p class="subTitle" v-if="dataSrc.subTitle1">
                {{ dataSrc.subTitle1 }}
                <i class="bold">{{ dataSrc.tag1 }}</i>
                <span v-if="!!dataSrc.tag2">and</span>
                <i class="bold" v-if="!!dataSrc.tag2">{{ dataSrc.tag2 }}</i>
                {{ dataSrc.subTitle2 }}
            </p>
            <div v-if="!!dataSrc.introduction">
                <h3 class="introduction-subTitle">{{ dataSrc.introduction.title }}</h3>
                <div class="introduction-body">
                    <div class="introduction-item" v-for="point of dataSrc.introduction.points" :key="point.wayTitle">
                        <div class="introduction-idx">{{ point.idx }}</div>
                        <div class="introduction-content">
                            <div>
                                <span class="introduction-title">{{ point.wayTitle }}</span><br>
                                <template v-for="item of point.content">
                                    <a v-if="item.isLink" :href="item.link" v-html="item.value"
                                        :key="item.value + 'alink'"></a>
                                    <i v-else-if="item.isTag" class="i-tag bold" :key="item.value + 'tag'">{{ item.value
                                    }}</i>
                                    <span v-else :key="item.value">{{ item.value }}</span>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns flowContent" v-if='!isMobile'>
                <div v-for="(item, index) in dataSrc.waysArray" style="paddingBottom: 16px;
                    paddingLeft: 16px;
                    paddingRight: 16px;" class="list column" :key='item.iconText'>
                    <div class="picWrapper">
                        <img class="pic" :src="item.imgSrc">
                    </div>
                    <p class="subTitle">{{ item.iconText }}</p>
                    <p class="text" v-if='index === 0'>
                        {{ item.firstText }}
                        <a target="_blank" :href="item.link" class="link">{{ item.secondText }}</a>
                        <a target="_blank" :href="item.link2" class="link" v-if="item.secondText2">{{ item.secondText2
                        }}</a>
                        <span v-html='item.lastText'></span>
                    </p>
                    <p class="text" v-if='index === 2 || index === 1'>
                        {{ item.firstText }}
                        <i class="bold">{{ item.secondText }}</i>
                        <a target="_blank" :href="item.link" class="link" v-html='item.lastText'></a>
                        <a target="_blank" :href="item.link2" class="link" v-if='item.lastText2'>{{ item.lastText2 }}</a>
                    </p>
                    <p class="text" v-if='index === 3'>
                        {{ item.firstText }}
                        <i class="bold">{{ item.secondText }}</i>
                        <span v-html='item.lastText'></span>
                    </p>
                </div>
            </div>
            <template v-if='dataSrc.way'>
                <div class='way-wrapper'>
                    <div class='way-item'>
                        <span class="way-title">{{dataSrc.way.wayTitle}}</span>
                        <template v-for="item of dataSrc.way.content">
                        <a v-if="item.isLink" :href="item.link" v-html="item.value" :key="item.value+'alink'"></a>
                        <i v-else-if="item.isTag" class="i-tag bold" :key="item.value+'tag'">{{item.value}}</i>
                        <span v-else :key="item.value" v-html='item.value'></span>
                        </template>
                    </div>
                </div>
                <div class="subTitle" style="text-align: left; text-indent: 1.5em">
                    <template v-for="desc of dataSrc.way.desc" :key="desc" >
                        <p v-html="desc"></p>
                    </template>
                </div>
            </template>
            <p class="note">
                {{ dataSrc.note }}
            </p>
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

.bold {
    color: var(--themeColor);
    font-style: normal;
}

.ways {
    margin-top: 100px;

    .introduction-subTitle {
        margin: 30px auto 60px;
    }

    .introduction-body {
        display: flex;
        justify-content: space-between;

        .introduction-item {
            width: calc(50% - 12px);
            display: flex;
            background: #FFFFFF;
            border: 1px solid #F7F8F9;
            box-shadow: 0px 4px 23px rgba(200, 200, 200, 0.5);
            border-radius: 8px;
            padding: 20px 30px 20px 10px;
            margin-right: 24px;

            &:last-child {
                margin-right: 0;
            }
        }

        .introduction-idx {
            display: flex;
            align-items: center;

            font-style: italic;
            font-weight: 400;
            font-size: 60px;
            line-height: 70px;
            text-align: center;

            color: #979899;
        }

        .introduction-content {
            display: flex;
            align-items: center;
            text-align: left;
            padding-left: 12px;
        }

        .introduction-title {
            // color: #272829;
            color: var(--themeColor);
            font-weight: bold;
        }
    }

    
    .way-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 24px;
    }
    .way-item {
      width: calc(50% - 12px);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      background: #FFFFFF;
      border: 1px solid #F7F8F9;
      box-shadow: 0px 4px 23px rgba(200, 200, 200, 0.5);
      border-radius: 8px;
      padding: 20px 30px 20px 10px;
      margin-right: 32px;

      @media (max-width: 768px) {
        width: 100%;
        text-align: left;
      }
    }
    .way-title {
      color: #272829;
      // color: $black-white-1;
      font-weight: bold;
      text-align: center;
    }

    .columns {
        margin-left: 0;
        margin-right: 0;
    }

    .flowContent {
        margin-top: 20px;
        justify-content: space-between;
        margin-bottom: 0;

        .list {
            border-radius: 8px;
            border: 1px solid #E7E8E9;
            flex-basis: 270px;
            flex-grow: 0;
            padding: 0;
        }

        .subTitle {
            font-weight: 500;
            color: #272829;
            line-height: 25px;
            margin: 10px 0 20px;
            text-align: center;
        }

        .picWrapper {
            font-size: 0;
            margin-top: 30px;

            .pic {
                width: 88px;
                height: 88px;
            }
        }

        .text {
            font-size: 16px;
            text-align: center;
            font-weight: 400;
            color: #676869;
            word-break: break-word;

            .link {
                color: #000;
                text-decoration: underline;
            }
        }
    }

    .note {
        font-size: 14px;
        font-weight: 500;
        margin-top: 20px;
        color: #979899;
        text-align: right;
    }
}

@media screen and (max-width: 1088px) {

    .ways .columns,
    .votes .columns {
        display: block !important;
    }
}

@include mobile {

    .ways {
        margin-bottom: 11.11vw;
        margin-top: 13.9vw;

        .introduction-subTitle {
            margin: 40px auto 50px;
        }

        .introduction-body {
            flex-direction: column;
            padding: 20px 0 20px;
            background: #FFFFFF;
            border: 2px solid #F7F8F9;
            box-shadow: 0px 8px 46px rgba(200, 200, 200, 0.5);
            border-radius: 16px;
            padding: 0 20px;


            .introduction-item {
                width: 100%;
                // flex-direction: column;
                background: #FFFFFF;
                border: unset;
                box-shadow: unset;
                border-radius: 0;
                padding: 20px 0 20px;

                border-bottom: 1px solid #E7E8E9;
                margin-right: 0;

                &:last-child {
                    border-bottom: none;
                }
            }

            .introduction-idx {
                display: flex;
                align-items: flex-start;

                color: #979899;
            }

            .introduction-content {
                padding-left: 16px;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
            }
        }



        .flowContent {
            margin: 2.78vw 0 0;

            .list {
                margin-top: 16px;

                &:first-child {
                    margin-top: 30px;
                }
            }

            .eachFlow {
                padding: 1.39vw 1.94vw 2.78vw 1.39vw;
                border-radius: 8px;
                height: 24.4vw;
                border: 1px solid #E7E8E9;
                margin-bottom: 2.78vw;

                .pic {
                    float: left;
                    width: 12.22vw;
                }

                .textWrapper {
                    float: left;
                    text-align: left;
                    width: 72.78vw;
                    padding-top: 1.94vw;
                    padding-left: 2.78vw;

                    & p:first-child {
                        font-size: 5vw;
                        font-weight: 500;
                        line-height: 5.83vw;
                        color: #272829;
                    }

                    & p:last-child {
                        text-align: left;
                        font-size: 3.89vw;
                        color: #676869;
                    }
                }
            }
        }

        .note {
            font-weight: 400;
            color: #979899;
            font-size: 3.33vw;
            text-align: left;
        }
    }
}</style>