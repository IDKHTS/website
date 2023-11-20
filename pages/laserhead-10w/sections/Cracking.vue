<template>
  <div class="grack_con margin_line">
    <div class="bootstrap-row">
      <div class="col-xs-12 col-sm-12 col-lg-12">
        <div class="content3_txt">
          <div
            class="con_title_style grack_con_title line-blue"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >Get Cracking While We Take Care of the Rest.</div>
          <div
            class="channel_pro grack_con_pro_txt"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            The unique wind channel inside the 10W Laser Module provides
            excellent wind pressure, blowing the fumes away as the laser beam
            cuts into the material, sending the fumes directly into the grids of
            the Laser Engraving and Cutting Platform, which then get channeled
            out, reducing their interference on laser machining.
          </div>
        </div>
        <div class="con_img">
          <img
            v-show="isFourShow == 'true'"
            :src="conSrc3"
            alt
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
          />

          <video
            x5-video-player-fu
            loop="loop"
            muted="muted"
            autoplay="true"
            x-webkit-airplay="allow"
            playsinline="true"
            x5-playsinline="true"
            webkit-playsinline="true"
            x5-video-player-fullscreen="true"
            x5-video-player-type="h5"
            x5-video-orientation="portraint"
            poster="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/001_Main_0340.jpg"
            src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/001_Main_0340.webm"
            class="four_box_video"
            style="object-fit: fill"
            data-aos="zoom-in-up"
            @ended="fourEnd"
            v-show="isFourShow == false"
          >
            <source
              src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/four.mp4"
              type="video/mp4"
            />您的浏览器不支持 video 标签。
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
      conSrc3: 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/b3.png',
      isFourShow: false
    }
  },
  methods: {
    fourEnd () {
      this.isFourShow = 'true'
    }
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style scoped>

.grack_con {
  position: relative;
  width: 100%;
  background: #000;
  box-sizing: border-box;
}
.con_img {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 4% 8%;
  box-sizing: border-box;
}

.con_img img {
  border-radius: 20px;
  width: 100%;
  height: auto;
  margin: auto;
}

.content3_txt {
  position: absolute;
  z-index: 1;
  width: 39%;
  top: 30%;
  right: 0%;
  padding-left: 2%;
}

.grack_con_title {
  width: 80%;
}

.grack_con_pro_txt {
  width: 70%;
}

.four_box_video {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

@media screen and (max-width: 992px) {
  .grack_con_title,
  .grack_con_pro_txt {
    width: 90%;
  }
  .content3_txt {
    position: relative;
    width: 92%;
    height: auto;
    top: 0;
    right: auto;
    left: 8%;
  }
}
</style>
