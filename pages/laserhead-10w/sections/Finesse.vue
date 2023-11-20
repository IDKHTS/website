<template>
  <div class="stre_con margin_line">
    <div class="bootstrap-row">
      <div class="col-xs-12 col-sm-12 col-lg-12">
        <div class="content2_txt">
          <div
            class="con_title_style line-blue finess_title"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >Not Just About Strength, but Finesse.</div>
          <!-- moblie_finess_pro -->
          <div
            class="comon_pro_txt finess_pro"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            With the Fast-axis Collimating (FAC) lenses embedded in the two
            laser diodes, the module first compresses the laser spot of each
            laser diodes. Then it combines the laser beams of the two laser
            diodes using the beam combining technology, resulting in a higher
            output power and an ultra-fine laser focus (0.05 mm × 0.2 mm), which
            allows for higher energy density. Smaller laser focus and higher
            power deliver high-quality laser works with impeccable details.
          </div>
        </div>
      </div>
    </div>
    <div class="three_box_img">
      <img
        v-show="isThreeShow == 'true'"
        :src="conSrc2"
        alt
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-anchor-placement="top-bottom"
      />

      <video
        muted="muted"
        loop="loop"
        autoplay="true"
        x-webkit-airplay="allow"
        playsinline="true"
        x5-playsinline="true"
        webkit-playsinline="true"
        x5-video-player-fullscreen="true"
        x5-video-player-type="h5"
        x5-video-orientation="portraint"
        poster="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/three.png"
        src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/001_Main_0340_1.webm"
        class="three_box"
        style="object-fit: fill"
        data-aos="zoom-in-up"
        @ended="threeEnd"
        v-show="isThreeShow == false"
      >
        <source
          src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/three.mp4"
          type="video/mp4"
        />您的浏览器不支持 video 标签。
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      conSrc2: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/b2.png',
      isThreeShow: false
    }
  },
  methods: {
    threeEnd () {
      this.isThreeShow = 'true'
    }
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style scoped>

.stre_con {
  position: relative;
  width: 100%;
  background: #000;
  box-sizing: border-box;
}

.content2_txt {
  position: absolute;
  z-index: 1;
  width: 50%;
  top: 20%;
  left: 8%;
  padding-left: 2%;
}

.finess_title {
  width: 60%;
}

.finess_pro {
  width: 60%;
}

.three_box {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.three_box_img {
  padding: 5% 7%;
  box-sizing: border-box;
}

.three_box_img img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

@media screen and (max-width: 992px) {
  .finess_title,
  .finess_pro {
    width: 90%;
  }
  .content2_txt {
    position: relative;
    width: 92%;
    height: auto;
    top: 0;
    right: auto;
    left: 8%;
  }
}
</style>
