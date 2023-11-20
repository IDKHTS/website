<template>
  <div class="container_b_box margin_line systems_box">
    <div class="container_b">
      <div class="bootstrap-row">
        <div class="col-xs-12 col-lg-5" style="margin-top: 20%">
          <div
            class="comon_title line-blue con_title_style systems_title"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >A Module of Two Blowing Systems.</div>
          <div
            class="white comon_pro systems_pro"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            Prolonged exposure to high temperature will reduce the lifespan of
            the laser diode. The 10W Laser Module has two separate blowing
            systems for its PCBA and its laser diode to make sure the diode is
            properly cooled off whenever you use it. Under proper use, the
            lifespan can be as long as 8,000–10,000 hours
            <span class="footnote">[5]</span>.
          </div>
        </div>
        <div class="col-xs-12 col-lg-7">
          <div class="con_img_box" v-show="isBlowing == false">
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
              style="width: 80%; height: auto"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              @ended="blowingVedio()"
            >
              <source
                src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/module.mp4"
                type="video/mp4"
              />您的浏览器不支持 video 标签。
            </video>
          </div>
          <div class="con_img_box" v-show="isBlowing == true">
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
              style="width: 80%; height: auto"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              loop="loop"
            >
              <source
                src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/blowing.mp4"
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
export default {
  data () {
    return {
      isBlowing: false
    }
  },
  methods: {
    blowingVedio () {
      this.isBlowing = true
    }
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang='scss' scoped>

.systems_box {
  padding: 4.6% 10%;
}

@media screen and (max-width: 992px) {
  .systems_pro {
    width: 100%;
    font-size: 3.74vw;
    margin-bottom: 4vw;
  }
  .systems_title {
    width: 100%;
  }
}
</style>
