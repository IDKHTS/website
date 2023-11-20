<template>
  <div class="camera_conten margin_line">
    <div class="camera_box_in">
      <div class="bootstrap-row">
        <div class="col-sm-12 col-xs-12 col-lg-12">
          <div class>
            <div
              class="con_title_style line-blue camera_title"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >Camera Capture Taken to a Whole New Level.</div>
            <div
              class="comon_pro_txt camera_conten_pro con_bg_gray"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
            >
              With the upgraded camera capture process, the wide-angle HD camera
              captures in one take your material and lets you get an instant
              preview in Luban of your laser job on the material. Checking the
              work area is now completely hassle-free.
            </div>
          </div>
          <div class="camera_video_box">
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
                src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/camera.mp4"
                type="video/mp4"
              />您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
        <div class="col-sm-12 col-xs-12 col-lg-5 right_b_box mobile_box"></div>
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

.camera_conten {
  background-color: #000000;
  text-align: center;
  padding: 6.6% 0;
  box-sizing: border-box;
}
.camera_box_in {
  width: 84%;
  margin: auto;
  background-color: #fff;
  border-radius: 32px;
  padding-top: 5%;
  box-sizing: border-box;
}

.camera_conten_pro {
  width: 65%;
  line-height: 1.4;
  text-align: center;
  margin: auto;
  margin-bottom: 64px;
}

.camera_video_box {
  width: 52%;
  margin: auto;
  padding-bottom: 64px;
  box-sizing: border-box;
}

@media screen and (max-width: 992px) {
  .camera_box_in {
    width: 100%;
    border-radius: 0;
  }
}
</style>
