<template>
  <div class='pt-3xl pb-3xl' style='background-color: black;'>
    <div class="snmk-container pt-xl">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 sell-point-wrapper"
      >
        <!-- <div class='sell-point' :style="{'height': `${item * 100}px`}" ></div> -->
        <template v-if='!isMobile'>
          <div class='sell-points-col-1'>
            <div class='sell-point sell-point-0'>
              <img :src="dataSrc.cols[0].imgSrc" :alt="dataSrc.cols[0].text">
              <div class='sell-point-text' v-html='dataSrc.cols[0].text'></div>
            </div>
            <div class='sell-point sell-point-1'>
              <img :src="dataSrc.cols[1].imgSrc" :alt="dataSrc.cols[1].text">
              <div class='sell-point-text' v-html='dataSrc.cols[1].text'></div>
            </div>
          </div>
          <div class='sell-points-col-2'>
            <div class='sell-point sell-point-2'>
              <div class='sell-point-text'>
                <img :src="dataSrc.cols[2].svgSrc" :alt="dataSrc.cols[2].text">
                <br>
                <span v-html='dataSrc.cols[2].text'></span>
              </div>
              <img :src="dataSrc.cols[2].imgSrc" :alt="dataSrc.cols[2].text">
              <!-- <div class='sell-point-text' v-html='dataSrc.cols[2].text'></div>
              <img :src="dataSrc.cols[2].imgSrc" :alt="dataSrc.cols[2].text"> -->
            </div>
            <div class='sell-point sell-point-3'>
              <div class='sp-col-span'>
                <img :src="dataSrc.cols[3].imgSrc" :alt="dataSrc.cols[3].text">
                <div class='sell-point-text' v-html='dataSrc.cols[3].text'></div>
              </div>
              <div class='sp-col-span'>
                <img :src="dataSrc.cols[4].imgSrc" :alt="dataSrc.cols[4].text">
                <div class='sell-point-text' v-html='dataSrc.cols[4].text'></div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class='sell-points-col-1'>
            <div class='sell-point sell-point-0'>
              <img :src="dataSrc.cols[0].imgSrc" :alt="dataSrc.cols[0].text">
              <div class='sell-point-text' v-html='dataSrc.cols[0].text'></div>
            </div>
            <div class='sell-point sell-point-1'>
              <img :src="dataSrc.cols[1].imgSrc" :alt="dataSrc.cols[1].text">
              <div class='sell-point-text' v-html='dataSrc.cols[1].text'></div>
            </div>
          </div>
          <div class='sell-points-col-2'>
            <div class='sell-point sell-point-2'>
              <div class='sell-point-text'>
                <img :src="dataSrc.cols[2].svgSrc" :alt="dataSrc.cols[2].text">
                <br>
                <span v-html='dataSrc.cols[2].text'></span>
              </div>
              <img :src="dataSrc.cols[2].imgSrc" :alt="dataSrc.cols[2].text">
            </div>
            <div class='sell-point sell-point-3'>
              <div class='sp-col-span'>
                <div class='w-100 h-100'><img :src="dataSrc.cols[3].imgMobSrc" :alt="dataSrc.cols[3].text"></div>
                <div class='sell-point-text' v-html='dataSrc.cols[3].text'></div>
              </div>
              <div class='sp-col-span'>
                <img :src="dataSrc.cols[4].imgSrc" :alt="dataSrc.cols[4].text">
                <div class='sell-point-text' v-html='dataSrc.cols[4].text'></div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {}})
const { isMobile } = storeToRefs(useGlobalStore())
</script>

<style scoped lang='scss'>

.sell-point-wrapper {
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 100%;
  }

}
.sell-points-col-1 {
  width: calc(36% - 8px);
  display: flex;
  flex-direction: column;
}
.sell-points-col-2 {
  width: calc(64% - 8px);
  display: flex;
  flex-direction: column;

  @include mobile {
    width: 100%;
  }
}
.sell-point {
  margin-top: 16px;
  width: 100%;
  // background-color: white;
  background: #171717;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    flex: 1 1 auto;
  }

  @include mobile {
    margin-top: 10px;
  }
}
.sell-point-text {
  color: #FFF;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.24px;

  @include mobile {
    font-size: 14px;
    line-height: 14px; /* 140% */
  }
}

.sell-point-0 {
  position: relative;
  width: 100%;
  // padding-inline: 113px;

  img {
    padding-inline: 30%;
    line-height: 0;
    padding-bottom: 64px;
  }
  .sell-point-text {
    text-align: center;
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding-inline: 5%;
  }

  @include mobile {
    width: calc(50% - 5px);
    padding-inline: 20%;
    padding-block: 12.5% 9%;
    .sell-point-text {
      margin-top: 6%;
      position: absolute;
      bottom: 16px;
    }

  }
}
.sell-point-1 {
  // padding-inline: 113px;
  padding-inline: 14.59%;
  padding-block: 10% 6%;
  text-align: center;

  img {
    line-height: 0;
  }
  .sell-point-text {
    margin-top: 6%;
  }
}
.sell-point-2 {
  position: relative;
  // padding-block: 10% 6%;
  text-align: center;
  justify-content: flex-end;

  img {
    line-height: 0;
  }
  .sell-point-text {
    position: absolute;
    width: 100%;
    padding-inline: 30.55%;
    margin-top: 6%;
    top: 0;

    img {
      // padding-inline: 21%;
      margin-bottom: 6%;
    }
    span {
      width: 100%;
      padding-inline: 5%;
    }
  }

}
.sell-point-3 {
  position: relative;
  // padding-inline: 27%;
  // padding-block: 10% 6%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;

  .sp-col-span {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: calc((100% - 16px * 1) /2);
    background: #171717;
  }
  .sp-col-span:first-child {
    height: 100%;
    position: relative;

    img {
      padding-inline: 14.75%;
      padding-bottom: 64px;
    }

    .sell-point-text {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      padding-inline: 5%;

    }
  }
  .sp-col-span:last-child {
    height: 100%;
    position: relative;
    img {
      padding-top: 5%;
      padding-inline: 7%;
    }
    .sell-point-text {
      padding-bottom: 32px;
      padding-inline: 5%;
    }
  }

  img {
    line-height: 0;
  }

}

@include mobile {
  .sell-point-wrapper {
    display: flex;
    flex-direction: column;
  }
  .sell-points-col-1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .sell-points-col-2 {
    width: calc(66.6666666% - 5px);
    display: flex;
    flex-direction: column;

    @include mobile {
      width: 100%;
    }
  }
  .sell-point {
    margin-top: 10px;
    width: 100%;
    // background-color: white;
    background: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:first-child {
      flex: 0 0 auto;
    }

    margin-top: 10px;
    padding: 0;
  }
  .sell-point-text {
    text-align: center;
  }

  .sell-point-0 {
    width: calc(50% - 5px);
    // padding-inline: 20%;
    // padding-block: 12.5% 9%;

    img {
      padding-inline: 15%;
    }
    .sell-point-text {
      padding-inline: 5%;
      margin-top: 6%;
    }
  }
  .sell-point-1 {
    width: calc(50% - 5px);

    img {
      padding-inline: 9%;
    }
    .sell-point-text {
      padding-inline: 5%;
      padding-bottom: 16px;
    }
  }
  .sell-point-2 {
    position: relative;
    // padding-inline: 27%;
    // padding-block: 10% 6%;
    text-align: center;

    img {
      margin-top: -48px;
      line-height: 0;
    }
    .sell-point-text {
      span { display: block; margin-top: 14px }
      img { margin-top: 0; }

      position: relative;
      padding-inline: 20%;
      // margin-top: 6%;
      // top: 0;
      // padding-inline: 24px;
    }

  }
  .sell-point-3 {
    position: relative;
    // padding-inline: 27%;
    // padding-block: 10% 6%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;

    .sp-col-span {
      position: relative;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: calc((100% - 16px * 1) /2);
      background: #171717;
    }
    .sp-col-span:first-child {
      height: 100%;
      position: relative;

      img {
        padding-top: 24px;
        padding-inline: 30%;
        padding-bottom: 64px;
      }

      .sell-point-text {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding-inline: 5%;

      }
    }
    .sp-col-span:last-child {
      height: 100%;
      position: relative;
      img {
        padding-top: 5%;
        padding-inline: 7%;
      }
      .sell-point-text {
        padding-bottom: 16px;
        padding-inline: 5%;
      }
    }

    img {
      line-height: 0;
    }

  }
}
@media (min-width: $breakPoint_xxl) {
  // .sell-point-wrapper {
  //   justify-content: center;
  // }
  .sell-points-col {
    max-width: 414px;
    margin-left: 16px;
  }
  .sell-point-0 {
    text-align: center;
  }

}

</style>
