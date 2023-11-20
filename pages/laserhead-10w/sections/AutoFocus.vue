<template>
  <div class="auto_conten margin_line">
    <div class="bootstrap-row">
      <div class="col-sm-12 col-xs-12 col-lg-4 left_b_box">
        <div
          class="con_title_style line-blue auto_title"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >Auto Focus in Seconds.</div>
        <div

          class="channel_pro auto_cont_txt only-pc"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          No more manual material measuring. Place your material on the
          platform, and the module will calculate it for you. Thanks to the
          triangulation technique, the module is able to measure the thickness
          of your material by obtaining a few sets of data on the camera and
          light emitter. It will then adjust itself in Z orientation so that the
          focal point falls right on the material surface
          <span class="footnote">[4]</span>. You can finish focusing in a few seconds.
        </div>
      </div>
      <div class="col-sm-12 col-xs-12 col-lg-8 right_b_box" >
        <div class="auto_con_img" data-aos="fade-up" data-aos-duration="2000">
            <video ref="video" muted autoplay loop class="video">
              <source :src="conSrc4">
            </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      conSrc4:
        'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/Auto Focus in Seconds.mp4'
    }
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang='scss' scoped>

.auto_conten {
  // padding: 6.6% 5%;
  box-sizing: border-box;
  background-color: #000000;
}

.left_b_box {
  width: 32.23vw;
  margin: 7.98vw 0 0 11.35vw;
  position: absolute;
  box-sizing: border-box;
}

.right_b_box {
  width: 100%;
  // padding: 0 5%;
  box-sizing: border-box;
}

.auto_title {
  margin-top: 32px;
  position: relative;
}

.auto_cont_txt {
  width: 100%;
}

.auto_con_img {
  width: 100%;
  video {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 992px) {
}
</style>
