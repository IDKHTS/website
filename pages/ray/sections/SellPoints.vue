<template>
  <div class='pt-xl pb-3xl'>
    <div class="snmk-container">
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 sell-point-wrapper"
      >
        <!-- <div class='sell-point' :style="{'height': `${item * 100}px`}" ></div> -->
        <template v-if='!isMobile'>
          <div class='sell-points-col'>
            <div class='sell-point sell-point-0'>
              <img :src="dataSrc.cols[0].imgSrc" :alt="dataSrc.cols[0].text">
              <div class='sell-point-text' v-html='dataSrc.cols[0].text'></div>
            </div>
            <div class='sell-point sell-point-1'>
              <img :src="dataSrc.cols[1].imgSrc" :alt="dataSrc.cols[1].text">
              <div class='sell-point-text' v-html='dataSrc.cols[1].text'></div>
            </div>
            <div class='sell-point sell-point-2'>
              <img :src="dataSrc.cols[2].imgSrc" :alt="dataSrc.cols[2].text">
              <div class='sell-point-text' v-html='dataSrc.cols[2].text'></div>
            </div>
          </div>
          <div class='sell-points-col'>
            <div class='sell-point sell-point-4'>
              <div class='sell-point-text' v-html='dataSrc.cols[4].text'></div>
              <img :src="dataSrc.cols[4].imgSrc" :alt="dataSrc.cols[4].text">
            </div>
            <div class='sell-point sell-point-3'>
              <div class='sell-point-text' v-html='dataSrc.cols[3].text'></div>
              <img :src="dataSrc.cols[3].imgSrc" :alt="dataSrc.cols[3].text">
            </div>
          </div>
          <div class='sell-points-col'>
            <div class='sell-point sell-point-5'>
              <div class='sell-point-text'>
                <img :src="dataSrc.cols[5].svgSrc" :alt="dataSrc.cols[5].text">
                <span v-html='dataSrc.cols[5].text'></span>
              </div>
              <img :src="dataSrc.cols[5].imgSrc" :alt="dataSrc.cols[5].text">
            </div>
            <div class='sell-point sell-point-6'>
              <div class='sell-point-text' v-html='dataSrc.cols[6].text'></div>
              <img :src="dataSrc.cols[6].imgSrc" :alt="dataSrc.cols[6].text">
            </div>
          </div>
        </template>
        <template v-else>
          <div class='sell-points-col'>
            <div class='sell-point sell-point-4'>
              <div class='sell-point-text' v-html='dataSrc.cols[4].text'></div>
              <img :src="dataSrc.cols[4].imgMobSrc" :alt="dataSrc.cols[4].text">
            </div>
            <div class='sell-point sell-point-0'>
              <img :src="dataSrc.cols[0].imgMobSrc" :alt="dataSrc.cols[0].text">
              <div class='sell-point-text' v-html='dataSrc.cols[0].text'></div>
            </div>
            <div class='sell-point sell-point-1'>
              <img :src="dataSrc.cols[1].imgMobSrc" :alt="dataSrc.cols[1].text">
              <div class='sell-point-text' v-html='dataSrc.cols[1].text'></div>
            </div>
            <div class='sell-point sell-point-2'>
              <img :src="dataSrc.cols[2].imgMobSrc" :alt="dataSrc.cols[2].text">
              <div class='sell-point-text' v-html='dataSrc.cols[2].text'></div>
            </div>
          </div>
          <div class='sell-points-col'>
            <div class='sell-point sell-point-3'>
              <div class='sell-point-text' v-html='dataSrc.cols[3].text'></div>
              <img :src="dataSrc.cols[3].imgMobSrc" :alt="dataSrc.cols[3].text">
            </div>
            <div class='sell-point sell-point-5'>
              <div class='sell-point-text'>
                <img :src="dataSrc.cols[5].svgSrc" :alt="dataSrc.cols[5].text">
                <span v-html='dataSrc.cols[5].text'></span>
              </div>
              <img :src="dataSrc.cols[5].imgMobSrc" :alt="dataSrc.cols[5].text">
            </div>
            <div class='sell-point sell-point-6'>
              <div class='sell-point-text' v-html='dataSrc.cols[6].text'></div>
              <img :src="dataSrc.cols[6].imgMobSrc" :alt="dataSrc.cols[6].text">
            </div>
          </div>
        </template>
      </div>
    </div>

  </div>
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
@import '../theme.scss';
.sell-point-wrapper {
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  justify-content: space-between;
}
.sell-points-col {
  width: calc((100% - 16px * 2) / 3);
  display: flex;
  flex-direction: column;

  @include mobile {
    width: calc((100% - 10px) / 2);
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
  // padding-inline: 113px;
  padding-inline: 27%;
  padding-block: 8% 3.5%;
  text-align: center;

  img {
    line-height: 0;
  }
  .sell-point-text {
    margin-top: 8%;
  }

  @include mobile {
    padding-inline: 20%;
    padding-block: 12.5% 9%;
    .sell-point-text {
      margin-top: 6%;
    }

  }
}
.sell-point-1 {
  // padding-inline: 113px;
  padding-inline: 24.5%;
  padding-block: 6%;
  text-align: center;

  img {
    line-height: 0;
  }
  .sell-point-text {
    margin-top: 4.2%;
  }

  @include mobile {
    padding-inline: 10%;
    padding-block: 8%;
    .sell-point-text {
      margin-top: 6%;
    }
  }
}
.sell-point-2 {
  // padding-inline: 113px;
  padding-inline: 27%;
  padding-block: 10% 6%;
  text-align: center;

  img {
    line-height: 0;
  }
  .sell-point-text {
    margin-top: 6%;
  }

  @include mobile {
    padding-inline: 20%;
    padding-block: 10% 6%;
    .sell-point-text {
      margin-top: 6%;
    }
  }
}
.sell-point-3 {
  position: relative;
  // padding-inline: 27%;
  // padding-block: 10% 6%;
  text-align: center;
  justify-content: flex-end;

  img {
    line-height: 0;
  }
  .sell-point-text {
    position: absolute;
    margin-top: 6%;
    top: 0;
  }

}
.sell-point-4 {
  position: relative;
  // padding-inline: 27%;
  // padding-block: 10% 6%;
  text-align: center;

  img {
    line-height: 0;
  }
  .sell-point-text {
    position: absolute;
    margin-top: 6%;
    top: 0;
    padding-inline: 24px;
  }

}
.sell-point-5 {
  position: relative;
  // padding-block: 10% 6%;
  text-align: center;
  justify-content: flex-end;

  img {
    line-height: 0;
  }
  .sell-point-text {
    position: absolute;
    margin-top: 6%;
    top: 0;

    img {
      padding-inline: 21%;
      margin-bottom: 6%;
    }
    span {
      display: block;
      padding-inline: 24px;
    }
  }

}
.sell-point-6 {
  position: relative;
  // padding-inline: 27%;
  // padding-block: 10% 6%;
  text-align: center;
  justify-content: flex-end;

  img {
    line-height: 0;
  }
  .sell-point-text {
    position: absolute;
    margin-top: 6%;
    top: 0;
    padding-inline: 24px;
  }

}

@media (min-width: $breakPoint_xxl) {
  .sell-point-wrapper {
    justify-content: center;
  }
  .sell-points-col {
    max-width: 414px;
    margin-left: 16px;
  }
  .sell-point-0 {
    padding-inline: 113px;
    text-align: center;
  }

}

</style>
