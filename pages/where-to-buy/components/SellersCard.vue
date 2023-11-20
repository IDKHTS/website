<template style="display: flex;">
  <a :href="hLink || undefined" :target="'_blank'" class="visitWebsite sellers-card" :class="{'major': isMajor}">
    <div class='card-header'>
      <img class='card-img' :src="logo || imgSrc" alt="">
      <div v-if='!isMajor && hLink' class='card-go-icon'><img src="https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/jump.svg" alt=""></div>
      <div v-if='isMajor && hLink' class='card-major-icon'><img src="https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/mayjor.svg" alt=""></div>
    </div>
    <div class='card-content'>
      <div class='card-title'>{{title}}</div>
      <div class='card-icons' :style="{'justify-content': (Showroom!=='Y'&&Service=='Y') || (Showroom=='Y'&&Service!=='Y')  ? 'center' : ''}">
        <div v-if="Showroom == 'Y'" class='vertical-center'><img src='https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/Showroom.svg'/>Showroom</div>
        <div v-if="Service == 'Y'" class='vertical-center'><img src='https://ditfjx9w4x3vl.cloudfront.net/assets/where-to-buy/Service.svg'/>Service</div>
      </div>
    </div>
  </a>
</template>

<script setup lang='ts'>
const props = defineProps<{
  imgSrc?: string
  title?: string
  subtitle?: string
  country?: string
  hasLink?: boolean
  hLink?: string
  email?: string
  phone?: string
  address?: string
  logo?: string
  type?: string
  Showroom?: string
  Service?: string
}>()

const isMajor = computed(() => props.type === 'Major Distributor')
</script>

<style scoped lang="scss">
.sellers-card {
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  border: 2px solid #EFEFEF;
  border-radius: 4px;
  margin-top: 32px;
  text-decoration: none;
}
@include no-mobile {
  .sellers-card:nth-child(1), .sellers-card:nth-child(2), .sellers-card:nth-child(3){
    margin-top: 0;
  }
  .sellers-card:last-child:nth-child(3n - 1) {
    margin-right: calc(30% * 1 + 10% / 2)
  }
}

.card-header {
  flex: 1 1 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 230px;
}
.card-img {
  // margin-block: auto;
  width: 16.666vw;

  max-width: 480px;
  max-height: 230px;
  margin-top: 60px;
}
.card-major-icon {
  position: absolute;
  right: 16px;
  top: -2px;
}
.card-go-icon {
  position: absolute;
  right: 23px;
  top: 20px;
  img {

    filter: grayscale(100%) brightness(0) invert(80%) sepia(10%) saturate(0%) hue-rotate(0deg);
    // background-color: #C4C4C4;
    // mix-blend-mode: multiply;
  }
}
.card-content {
  padding-block: 20px 24px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* 品牌色/快造黑 */

  color: #1C1E20;
}
.major .card-content{
  background: #1B1B1B;
}
.major .card-title{
  color: #F5F5F5;
}
.major .card-icons{
  color: #F5F5F5;
}
.card-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 72px;
  /* or 133% */
  // height: 72px;

  text-align: center;

  color: #000000;
  :hover {
    color: #000000;
  }
}
.card-icons {
  height: 24px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  // :hover {
  //   color: #1C1E20;
  // }
  @media (min-width: ($breakPoint_xl - 1px)) {
    padding-inline: 51px;
  }

  img {
    width: 18px;
    margin-right: 4px;
    margin-bottom: 1px;
  }
}
.major .card-icons img {
  filter: invert(100%);
}
.not-visible {
  visibility: hidden;
}
@include mobile {
  .sellers-card {
    width: 100%;
    margin-top: 24px;
    border-radius: 6px;
  }
  .card:nth-child(1) {
    margin-top: 0;
  }
  .card-img {
    // margin-block: auto;
    width: 70.666vw;

    max-width: 320px;
    max-height: 230px;
    margin-top: 50px;
  }
}
</style>
