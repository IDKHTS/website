<template>
  <div id="referral">
    <section class="heroWrapper" v-if='!isMobile'
      :style="{ 'background-image': `url(${referralData.referralFunction.pcBg})` }">
      <div class="topHero is-left">
        <div class="heroText">
          <h2 class="heroTitle">
            {{ referralData.referralFunction.title }}
          </h2>
          <div class="voice">
            <p>
              {{ referralData.referralFunction.voice1 }}
            </p>
            <p>
              {{ referralData.referralFunction.voice2 }}
            </p>
          </div>
          <p class="influence">
            {{ referralData.referralFunction.influence }}
          </p>
          <a target="_blank" :href="referralData.referralFunction.buttonLink" class="button heroButton">
            {{ referralData.referralFunction.buttonText }}
          </a>
        </div>
      </div>
    </section>
    <section class="heroWrapperMobile" v-if='isMobile'
      :style="{ 'background-image': `url(${referralData.referralFunction.pcBg})` }">
      <div class="heroImg">
        <img :src="referralData.referralFunction.heroMobileSrc" alt="">
      </div>
      <div class="heroText">
        <h2 class="heroTitle">
          {{ referralData.referralFunction.title }}
        </h2>
        <div class="voice">
          <p>
            {{ referralData.referralFunction.voice1 }}
          </p>
          <p>
            {{ referralData.referralFunction.voice2 }}
          </p>
        </div>
        <p class="influence">
          {{ referralData.referralFunction.influence }}
        </p>
        <a target="_blank" class="button button-blue heroButton">
          {{ referralData.referralFunction.buttonText }}
        </a>
      </div>
    </section>


    <div class="snmk-container thank-you-container">
      <div
        class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 thank-you">
        <div class="thank-you-text ">
          <div class="title-2 mt-3xl bold-700 c-black">{{ referralRewards.title }}</div>
          <div class="title-4 font-bw-3 mt-l mb-xl" v-html="referralRewards.desc"></div>
          <Navigate :aLink="referralRewards.btn.link" :route="referralRewards.btn.route" target="_blank"
            class="text-center snmk-primary-btn mb-3xl">
            {{ referralRewards.btn.text }}
          </Navigate>
        </div>
        <div class="thank-you-img my-xl vertical-center">
          <img :src="referralRewards.imgSrc" alt="">
        </div>
      </div>
      <div v-for="(referrerFriends, index) of referralRewards.referrerFriends" :key="referrerFriends.title"
        @click="onreferrerFriends(referrerFriends.btn)"
        class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 referrerFriends"
        :class="{ 'snmk-col-offset-1 snmk-col-l-offset-1': index === 0 }">
        <div><img :src="referrerFriends.imgSrc" alt=""></div>
        <div class="ml-m max-w-50">
          <div class="title-3 font-bw-1 bold-700 mt-l">{{ referrerFriends.title }}</div>
          <div class="font-1 font-bw-3" v-if="referrerFriends.desc">{{ referrerFriends.desc }}</div>
          <Navigate v-if="referrerFriends.btn" :aLink="referrerFriends.btn.link" :route="referrerFriends.btn.route"
            target="_blank" class="text-center snmk-link-btn font-bw-2 mt-m">
            {{ referrerFriends.btn.text }}
            <span class="iconfont left-icon">&#xe7b2;</span>
          </Navigate>
        </div>
      </div>
    </div>
    <div class="snmk-container">
      <div
        class="snmk-col-10 snmk-col-l-10 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4">
        <section class="workflow container" v-if='!isMobile'>
          <p class="mainTitle">
            {{ referralData.referralWorkflow.mainTitle }}
          </p>
          <div class="flowContent columns">
            <div class="column is-clearfix" v-for="(item) in referralData.referralWorkflow.content" :key='item.subTitle'>
              <div class="has-text-centered">
                <img class="pic" :src="item.imgSrc">
              </div>
              <p class="subTitle">{{ item.subTitle }}</p>
              <p class="text" v-html="item.text"></p>
            </div>
          </div>
          <div class="text-center mt-xl">
            <a style="width: 160px;" :href="referralData.referralHelp.joinButtonLink" target="_blank"
              class="button button-fill-dark-blue">
              {{ referralData.referralHelp.joinButtonText }}
            </a>
          </div>
        </section>
        <section class="workflowMobile container" v-if='isMobile'>
          <p class="mainTitle">
            {{ referralData.referralWorkflow.mainTitle }}
          </p>
          <div class="flowContent">
            <div class="eachFlow is-clearfix" v-for="(item) in referralData.referralWorkflow.content"
              :key='item.subTitle'>
              <div class="has-text-centered iconimg">
                <img class="pic" :src="item.imgSrc">
              </div>
              <div class="text">
                <p>{{ item.subTitle }}</p>
                <p v-html="item.text"></p>
              </div>
            </div>
          </div>
          <div class="text-center mt-3xl">
            <a style="width: 160px;" :href="referralData.referralHelp.joinButtonLink" target="_blank"
              class="button button-fill-dark-blue">
              {{ referralData.referralHelp.joinButtonText }}
            </a>
          </div>
        </section>
      </div>
    </div>
    <section class="help">
      <div class="container has-text-centered">
        <h2 class="mainTitle">
          {{ referralData.referralHelp.mainTitle }}
        </h2>
        <h2 class="subTitle">
          {{ referralData.referralHelp.subTitle }}
          <a class="c-blue" :href="'mailto:' + referralData.referralHelp.email">{{ referralData.referralHelp.subTitleEmail
          }}</a>
        </h2>
      </div>
    </section>
  </div>
</template>


<script setup lang='ts'>
import head from '@@/resources/data/head'
import Navigate from '@@/components/Navigate.vue'
import { useGlobalStore } from '~/stores';
import { storeToRefs } from 'pinia';

useHead(head.Referral)

const { isMobile } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const referralData = computed<any>(() => i18n.tm('referralData'))
const referralRewards = computed(() => referralData.value.referralRewards)
</script>


<style lang="scss" scoped>
#referral {
  background-color: #fff;

  :deep(.snmk-primary-btn):hover {
    color: white;
  }

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

  .heroWrapper {
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
            color: #535353;
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
            color: #161616;
            mix-blend-mode: normal;
            opacity: 0.8;
          }

          .heroButton {
            font-size: 1.04vw;
            font-weight: 500;
            height: 2.3vw;
            color: white;
            border: none;
            // background-color: transparent;
            background: linear-gradient(87.26deg, #0C63E2 0%, #1A8CF5 103.55%);
            width: 10.4vw;

            &:hover {
              background: linear-gradient(87.26deg, #0A31B3 0%, #0950D2 103.55%);
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
      background: #E2F5FF;
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
        background: linear-gradient(45deg, #0C63E2, #1A8CF5);

        &:hover {
          background: linear-gradient(45deg, #0A31B3, #0950D2);
        }
      }
    }
  }

  .workflow {
    width: 100%;

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
    width: 100%;
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
        // padding-top: 6px;
        padding-left: 2.62vw;

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

  .help {
    background: #fafafa;
    padding: 3.125vw 0 2.08vw;
    margin-bottom: 0;

    .mainTitle {
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

  @media (max-width: 767px) {
    section {
      margin-bottom: 13.89vw;
    }

    .mainTitle {
      font-size: 6.67vw;
      margin-bottom: 5.55vw;
      text-align: center;
    }

    .heroWrapperMobile .heroText .heroTitle {
      font-weight: 700;
      color: #161616;
    }

    .influence {
      color: #161616;
      mix-blend-mode: normal;
      opacity: 0.8;
    }

    .iconimg {
      width: 8.33vw;
    }
  }
}

.thank-you-container {
  margin-top: 120px;
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

  .referrerFriends {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 34px;
    background-color: $black-white-8;
    border: 1px solid $black-white-8;
    border-radius: 9px;

    img {
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

.max-w-50 {
  max-width: 50%
}

@include mobile {
  .max-w-50 {
    max-width: unset;
  }

  .thank-you-container {
    margin-top: 62px;
    margin-bottom: 16px;

    .thank-you {
      flex-direction: column;
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }

    .thank-you-text,
    .thank-you-img {
      width: 100%;

      .title-2 {
        font-weight: 500;
        font-size: 48px;
        line-height: 56px;
      }
    }

    .thank-you-text {
      padding-left: 16px;
      padding-right: 16px;

      .mb-3xl {
        margin-bottom: 12px;
      }
    }

    .referrerFriends {
      margin-top: 16px;
      flex-direction: column;
      text-align: center;

      .mt-m {
        margin-top: 8px;
      }

      .ml-m {
        margin-left: 0;
      }

      img {
        width: 64.8vw
      }
    }

  }
}

.c-black {
  color: #272829;
}
</style>
