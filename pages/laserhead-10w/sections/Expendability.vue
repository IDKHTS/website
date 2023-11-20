<template>
  <div class="margin_line expendability-box">
    <div class="bot_txt">
      <div
        class="bot-tit line-blue con_title_style"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >Expandability, as Always.</div>
      <div
        class="bot-text comon_pro comon_pro_txt"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        The 10W Laser Module is compatible with all models of the Snapmaker 2.0
        series apart from the 150 models, and will be compatible with upcoming
        machines. You can use it with the addons as well, including the Rotary
        Module, Emergency Stop Button, Air Purifier, and CAN Hub.
      </div>
      <!-- pc -->
      <a href="https://us.snapmaker.com/products/snapmaker-10w-high-power-laser-module"
        class="snmk-primary-btn pc_box"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >Buy Now</a>
    </div>
    <div class="bot_bg">
      <NuxtImg :src="btnSrc" loading='lazy' />
    </div>
    <!-- 移动端 -->
    <a href="https://us.snapmaker.com/products/snapmaker-10w-high-power-laser-module"
      class="snmk-primary-btn mobile_box"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >Buy Now</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/last_.jpg'
    }
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang='scss' scoped>

.expendability-box {
  position: relative;
}

.bot_bg {
  width: 100%;
}

.bot_bg img {
  width: 100%;
  vertical-align: middle;
}

.bot_txt {
  width: 100%;
  height: 50;
  position: absolute;
  right: 0;
  top: 15%;
  text-align: center;
}

.bot-tit {
  width: 35%;
  letter-spacing: 1px;
  text-align: center;
  display: inline-block;
}

.bot-text {
  font-size: 1.09375vw;
  color: #999;
  width: 58%;
  text-align: center;
  margin: auto;
}
.snmk-primary-btn {
  margin-top: 57.6px;
  color: white;
}
@media screen and (max-width: 992px) {
  .expendability-box {
    position: relative;
    padding: 4% 10%;
    box-sizing: border-box;
    background-color: #000000;
  }
  .bot_txt {
    position: relative;
  }
  .bot-tit {
    width: 100%;
    text-align: left;
  }
  .bot-text {
    width: 100%;
    font-size: 3.74vw;
  }
  .snmk-primary-btn {
    position: relative;
    top: 63vw;
    margin-top: 0;
  }
  .bot_bg {
    margin-bottom: 20vw;
  }
}
</style>
