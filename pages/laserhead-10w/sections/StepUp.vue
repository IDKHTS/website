<template>
  <div class="margin_line new_black new_con_con not-pc">
    <div
      class="con_title_style camera_title new_title"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <p class="line-blue">Step up Your Game with the Cutting-edge Laser Beam Splitters.</p>
    </div>
    <div class="bootstrap-row">
      <div class="col-xs-12 col-sm-12 col-lg-6">
        <div class="game-img">
          <NuxtImg
            :src="contenSrcOne"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
            loading='lazy'
          />
        </div>
        <div class="con_bg_gray game_txt">
          The 10W Laser Module is equipped with the most cutting-edge laser beam
          splitters, effecting a power leap from 5 W to 10 W. This means you can
          now play with a wider variety of materials and hammer out more
          projects.
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-lg-6">
        <div class="game-img text_right">
          <div
            class
            style="border-radius: 10px; overflow: hidden"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <div class>
              <!-- <videoPlay
                  style="height: 370px"
                  src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/1.6W VS10W.mp4>
              </videoPlay>-->
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
                loop="loop"
              >
                <source
                  src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/1.6W VS10W.mp4"
                  type="video/mp4"
                />您的浏览器不支持 video 标签。
              </video>
            </div>
          </div>
        </div>
        <div
          class="con_bg_gray game_txt"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          Meanwhile, the work speed of the 10W Laser Module can be as high as
          6000 mm/min, while cutting through basswoods as thick as 8 mm
          <span class="footnote">[2]</span>. To put that into perspective, the cutting speed is up to 8 times
          that of the 1.6W Laser Module
          <span class="footnote">[3]</span>. It can
          literally fulfill a laser job in a blink of an eye.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contenSrcOne:
        'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/two-materials.png'
    }
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang='scss' scoped>

.game-img {
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  box-sizing: border-box;
  margin-top: 160px;
  img {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 992px) {
  .game-img {
    margin-top: 5%;
  }
}
</style>
