<template>
  <div class="container_b_box margin_line orien_box">
    <div class="container_b">
      <div class="bootstrap-row orien_box_row">
        <!-- 适配移动端 -->
        <div class="col-xs-12 col-lg-5">
          <div class="con_img_box text_right_box">
            <div
              class="comon_title line-blue con_title_style orien_title"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >Orientation Detection, Be Safe While Being Adventurous.</div>
            <div
              class="white comon_pro conten8_pro"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              To protect the user and any bystanders, we included a gyro sensor
              in the module, which makes sure that no laser beam comes out if
              the module is incorrectly installed or deviates from its
              designated position.
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-lg-7">
          <div class="con_img_box">
            <NuxtImg
              :src="conSrc7"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      conSrc7: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/Detection.png'
    }
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang='scss' scoped>

.orien_box {
  padding: 6.6% 10%;
}

.orien_box_row {
  flex-direction: row-reverse;
}

.orien_title {
  width: 90%;
}

@media screen and (max-width: 992px) {
  .orien_title {
    width: 100%;
  }
  .conten8_pro {
    width: 100%;
  }
  .con_img_box img {
    width: 100%;
    margin-top: 4vw;
  }
}
</style>
