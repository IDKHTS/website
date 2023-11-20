<template>
  <div class="container_b_box margin_line overheat_box">
    <div class="container_b">
      <div class="bootstrap-row overheat_box_row">
        <div class="col-xs-12 col-lg-6">
          <div
            class="comon_title line-blue con_title_style overheat_title"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >Overheat Protection, Better Safe than Sorry.</div>
          <div
            class="white comon_pro conten8_pro overheat_pro"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            The module stops working automatically whenever its temperature
            sensor detects a higher than normal (one that exceeds 55℃/131℉)
            working temperature. Once the temperature falls back into the normal
            range, you can resume your job on the Touchscreen.
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-6" style="margin-top: 50px">
          <div class="con_img_box">
            <video
              muted="muted"
              autoplay="autoplay"
              x-webkit-airplay="allow"
              playsinline="true"
              x5-playsinline="true"
              webkit-playsinline="true"
              x5-video-player-fullscreen="true"
              x5-video-player-type="h5"
              x5-video-orientation="portraint"
              style="width: 100%; height: auto"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              loop="loop"
            >
              <source
                src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/hot.mp4"
                type="video/mp4"
              />您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>


<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang='scss' scoped>

.overheat_box_row {
  flex-direction: row-reverse;
}

.overheat_box {
  padding-bottom: 13.2%;
}

.overheat_title,
.overheat_pro {
  width: 80%;
  margin-left: 20%;
  box-sizing: border-box;
}

.overheat_title {
  margin-top: 20%;
}

@media screen and (max-width: 992px) {
  .conten8_pro,
  .overheat_title {
    width: 100%;
  }
  .overheat_title,
  .overheat_pro {
    margin-left: 0;
  }
}
</style>
