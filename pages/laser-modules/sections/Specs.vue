<template>
  <div class='bg-black' :style="{'background-image': `url('${isMobile ? '' : dataSrc.bgImgSrc}')`}">
    <div class="snmk-container pos-relative">
      <div class="snmk-col-8 snmk-col-l-8 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-2 snmk-col-m-offset-1 specs-wrapper">
        <h1 class='first-title text-center' v-html='dataSrc.title'  ref="case-result-display" ></h1>
        <!-- data-aos="fade-up" -->
      </div>
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 specs-wrapper">
        <div class="specs-card"
          :class="{'no-height-linght': index === 1 && !is40WHeightlinght, 'order-1': index == 1 }"
          v-for="(item, index) in dataSrc.fittings"
          :key="item.name"
          @mouseover='onHover(index)'
          @mouseleave='onLeave()'
        >
          <div class='flex-justify-between'>
            <img :src="item.imgSrc" :alt="item.name">
            <div>
              <span class='price' v-html='item.price'></span><br>
              <span class='original-price' v-html='item.originalPrice'></span>
            </div>
          </div>
          <div v-for='k in Object.keys(titles)' :key='k' class='specs-card-row'>
            <span class='card-row-key' v-html='titles[k]'></span>
            <span class='card-row-value' v-html='item[k]'></span>
          </div>
        </div>
      </div>
      <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1 horizontal-center">
        <a class='store-link' :href='dataSrc.shopLink' target='_blank'>
          {{ dataSrc.shopLinkText }}
          <svg style='transform: rotate(-180deg);' xmlns="http://www.w3.org/2000/svg" width="32" height="32"  viewBox="0 0 40 40" fill="none">
            <path d="M23.0522 27.9995L15.1047 20.052L23.0522 12.1045" stroke="#00FFD1" stroke-width="2.5" stroke-miterlimit="10"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: () => ({}) })
const { isMobile } = storeToRefs(useGlobalStore())

const titles = computed(() =>({
  weight: 'Weight',
  MaxEngravingSpeed: `Maximum Work Speed[3]`,
  MaxCuttingSpeed: `Maximum Cutting Speed[4]`,
  MaxThicknessOnePassCutting: `Maximum Thickness of one-pass cutting`,
  WorkArea: `Work Area `,
  laserSpotDimensions: `Laser Spot Dimensions`,
  AirAssist: 'Air Assist',
  // SupportedEngravingMaterials: 'Supported Engraving Materials',
  // SupportedCuttingMaterials: 'Supported Cutting Materials',
  CameraCapture: 'Camera Capture'
}))

const is40WHeightlinght = ref(true)
const onHover = (index: number) => {
  is40WHeightlinght.value = true
  if (index !== 1) {
    is40WHeightlinght.value = false
  }
}
const onLeave = () => is40WHeightlinght.value = true
</script>

<style scoped lang='scss'>
@import '../theme.scss';

div.bg-black {
  background-color: #111111 !important;
  background-position: center;
  background-size: 100% 100% !important;
  background: no-repeat;
}
.snmk-container {
  padding-bottom: 78px;
  @include mobile {
    padding-bottom: 40px;
  }
}
.specs-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 56px;
  // margin-top: 119px;
  // margin-bottom: 92px;

  @include mobile {
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
    margin-top: 32px;
    margin-bottom: 0;
    .order-1 {
      order: -1
    }
  }
}
.specs-card {
  flex: 1 1 auto;
  width: calc((100% - 48px * 2) / 3);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(43, 43, 43, 0.85);
  backdrop-filter: blur(5px);
  color: white;
  padding: 45px 24px;
  transition: .3s ease-in-out;
  margin-right: 48px;
  &:last-child { margin-right: 0;}

  @include mobile {
    width: 100%;
    margin-bottom: 24px;
    // margin-bottom: 24px;
  }
}
.flex-justify-between {
  margin-bottom: 56px;
  min-height: 104px;
  text-align: right;
}
.price {
  text-align: center;
  font-family: Roboto;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 127.273% */
  letter-spacing: -0.24px;

  background: var(--unnamed, linear-gradient(90deg, #00FFD1 0%, #0704F1 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.original-price {
  text-decoration:line-through;

  color: #919191;
  text-align: center;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 48px; /* 150% */
  letter-spacing: -0.24px;
  text-decoration-line: strikethrough;
}

.specs-card-row {
  display: flex;
  // align-items: flex-end;
  align-items: center;
  padding-block: 8px;
  border-bottom: 1px solid #707070;

  // &:last-child {
  //   border-bottom: 1px solid #707070;
  // }
}
.card-row-key {
  margin-right: 22px;
  display: flex;
  align-items: center;
  width: 30%;

  color: #DCDCDC;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 200% */
  letter-spacing: -0.24px;
}
.card-row-value {
  display: flex;
  width: 70%;
  color: #FFF;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 171.429% */
  letter-spacing: -0.24px;
}

@include no-mobile {
  .specs-card:nth-child(2) {
    background: rgba(64, 64, 64, 0.85);
    transform: scale(1.1);
    z-index: 1;
  }
  .specs-card:hover {
    background: rgba(64, 64, 64, 0.85);
    transform: scale(1.1);
    z-index: 1;
  }
  .specs-card.no-height-linght {
    background: rgba(43, 43, 43, 0.85);
    transform: scale(1);
  }

}
.store-link {
  display: flex;
  align-items: center;
  text-align: center;
  color: #00FFD1;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.24px;

  @include mobile {
    font-size: 16px;
    line-height: 24px
  }
}

</style>
