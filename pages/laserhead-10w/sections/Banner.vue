<template>
  <div
    class="banner_vedio_box"
    @transitionend="transitionEnd"
    :class="{ 'full-screen': !bannerFinished, 'banner-move': bannerMoving }"
  >
    <video
      ref="videoBanner"
      muted
      preload="auto"
      x-webkit-airplay="allow"
      playsinline="true"
      x5-playsinline="true"
      webkit-playsinline="true"
      x5-video-player-fullscreen="true"
      x5-video-player-type="h5"
      x5-video-orientation="portraint"
      poster="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/banner2.jpg"
      :src="bannerVideo"
      class="banner_vedio pc_box"
      @canplay="canPlay"
      @ended="bannerEnd()"
    >
      <source :src="bannerVideo" type="video/mp4" />您的浏览器不支持 video 标签。
    </video>

    <div class="banner_txt_box pc_box" v-bind:style="{ opacity: opacity }">
      <div class="banner_title">
        <p class="line-blue">Only the Strong Makes It Through</p>
      </div>
      <div class="banner_pro">
        <span>10W High Power Laser Module</span>
        <span class="footnote">[1]</span>
      </div>
      <a class="my-l title-3" style="display: block;" href="https://www.youtube.com/watch?v=X4gCIYZljwM" target="_blank">
        <img
          src="https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon/play-white.png"
          alt="play"
          class="icon-play "
          @click="showModal = true"
        />
        <span style="color: #c8c8c8">Play Video</span>

      </a>
      <modal v-if="showModal" @close="showModal = false" :videoSrc="bannerVideo"></modal>
    </div>
    <!-- PC版 banner -->
    <div class="banner_bottom pc_box" v-bind:style="{ opacity: opacity }">
      <div class="bootstrap-row">
        <div class="col-sm-6 col-xs-6 col-lg-3 icon_box_out">
          <div class="b_box">
            <div class="b_box_left">
              <NuxtImg :src="bannerSrc1"  class="icon_box" loading="lazy" />
            </div>
            <div class="b_box_right b_moblie_p">
              <p>10W</p>
              <p>High Power</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xs-6 col-lg-3 icon_box_out">
          <div class="b_box">
            <div class="b_box_left">
              <NuxtImg :src="bannerSrc2"  class="icon_box" loading="lazy" />
            </div>
            <div class="b_box_right b_moblie_p">
              <p>Auto Focus</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xs-6 col-lg-3 icon_box_out">
          <div class="b_box">
            <div class="b_box_left">
              <NuxtImg :src="bannerSrc3"  class="icon_box" loading="lazy" />
            </div>
            <div class="b_box_right b_moblie_p">
              <p>Upgraded</p>
              <p>Camera Capture</p>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-xs-6 col-lg-3 icon_box_out">
          <div class="b_box">
            <div class="b_box_left">
              <NuxtImg :src="bannerSrc4"  class="icon_box" loading="lazy" />
            </div>
            <div class="b_box_right b_moblie_p">
              <p>Tailor-made</p>
              <p>Software</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 移动端 banner -->
    <NuxtImg
      :src="bannerSrc"
      class="banner_bg mobile_box"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      loading='lazy'
    />
    <div
      class="banner_txt_box mobile_box"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <div class="banner_title">
        <p class="line-blue">Only the Strong Makes It Through</p>
      </div>
      <div class="banner_pro">
        10W High Power Laser Module
        <span class="footnote">[1]</span>
      </div>
    </div>
    <div
      class="banner_bottom mobile_box"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <div class="bootstrap-row">
        <div class="col-sm-6 col-xs-6 col-lg-3 icon_box_out">
          <div class="b_box">
            <div class="b_box_left">
              <NuxtImg :src="bannerSrc1"  class="icon_box" loading="lazy" />
            </div>
            <div class="b_box_right b_moblie_p">
              <p>10W</p>
              <p>High Power</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xs-6 col-lg-3 icon_box_out">
          <div class="b_box">
            <div class="b_box_left">
              <NuxtImg :src="bannerSrc2"  class="icon_box" loading="lazy" />
            </div>
            <div class="b_box_right b_moblie_p">
              <p>Upgraded</p>
              <p>Camera Capture</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xs-6 col-lg-3 icon_box_out">
          <div class="b_box">
            <div class="b_box_left">
              <NuxtImg :src="bannerSrc3"  class="icon_box" loading="lazy" />
            </div>
            <div class="b_box_right b_moblie_p">
              <p>Auto Focus</p>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-xs-6 col-lg-3 icon_box_out">
          <div class="b_box">
            <div class="b_box_left">
              <NuxtImg :src="bannerSrc4"  class="icon_box" loading="lazy" />
            </div>
            <div class="b_box_right b_moblie_p">
              <p>Tailor-made</p>
              <p>Software</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

const showModal =  ref(false)
const opacity =  ref(0)
const bannerSrc1 =  ref('https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon_10W  High Power.png')
const bannerSrc2 =  ref('https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon_Auto Focus.png')
const bannerSrc3 =  ref('https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon_Upgraded  Camera Capture.png')
const bannerSrc4 =  ref('https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon_Tailor-made  Software_.png')
const bannerSrc =  ref('https://ditfjx9w4x3vl.cloudfront.net/assets/laser/b_banner.jpg')
const bannerVideo =  ref('https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/banner.mp4')
const bannerFinished =  ref(false)
const bannerMoving =  ref(false)

const videoBanner = ref()
const canPlay = () => videoBanner.value.play()
const bannerEnd = () => bannerMoving.value = true
const transitionEnd =  () => {
  bannerMoving.value = false
  opacity.value = 1
  bannerFinished.value = true
}
const onPlayerEnded = () => opacity.value = 1
onMounted(() => {
  if(videoBanner.value.paused) {
    videoBanner.value.play()
  }
})
</script>

<style src="../laser.common.css" scoped></style>
<style lang='scss' scoped>

.banner_vedio_box {
  box-sizing: border-box;
  position: relative;
  background-color: #000000;
}

.banner_txt_box {
  width: 100%;
  position: absolute;
  height: 40%;
  top: 15%;
  left: 0;
  text-align: center;
  transition: all 0.4s ease-in;
}

.banner_title {
  font-size: 3.35958vw;
  p {
    display: inline-block;
  }
}

.banner_pro {
  font-size: 1.78985vw;
  color: #fff;
  margin-top: 20px;
  letter-spacing: 1px;
  .footnote {
    font-size: 0.9vw;
  }
}

.icon-play {
  display: inline-block;
  vertical-align: middle;
  width: 1.71875vw;
  margin-right: 1vw;
  cursor: pointer;
  + span {
    vertical-align: middle;
  }
}

.banner_bottom {
  width: 80%;
  position: absolute;
  /* height: 10%; */
  bottom: 7%;
  left: 10%;
  text-align: center;
  color: #c8c8c8;
  transition: all 0.4s ease-in;
}

.banner_vedio {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  object-fit: cover;
  vertical-align: middle;
}

.full-screen {
  position: fixed;
  z-index: 2002;
  left: 0;
  top: 0;
  opacity: 1;
  height: 100vh;
  width: 100vw;
  transition: all 0.4s ease-in;
  .banner_vedio {
    height: 100%;
    width: 100%;
  }
}
.banner-move {
  top: 140px;
}

.b_box {
  overflow: auto;
  display: flex;
  align-items: center;
  /*定义body的元素垂直居中*/
  justify-content: center;
  /*定义body的里的元素水平居中*/
  text-align: center;
}

// 父元素已经是flex了
/* .b_box_left {
  display: inline-block;
  float: left;
} */

.icon_box_out {
  overflow: hidden;
  display: flex;
  align-items: center;
  /*定义body的元素垂直居中*/
  justify-content: center;
  /*定义body的里的元素水平居中*/
  text-align: center;
}

.icon_box {
  display: inline-block;
  width: 3.39844vw;
}

.b_box_right {
  // 父元素已经是flex了
  // display: inline-block;
  // float: left;
  font-size: 0.69991vw;
  vertical-align: -10px;
  p {
    margin-bottom: 10px;
    text-align: left;
    margin-left: 20px;
    margin-top: 3.2px;
    font-size: 1.09375vw;
    margin-left: 1.09375vw;
    line-height: 1;
  }
}

@media screen and (max-width: 992px) {
  .banner_title {
    font-size: 7.64vw;
    line-height: 1.3;
  }
  .banner_pro {
    font-size: 4.8vw;
  }
  .banner_bottom {
    width: 90%;
    left: 6%;
  }
  .footnote {
    transform: scale(0.8);
  }
  .icon-play {
    width: 5vw;
  }
  .icon_box_out {
    justify-content: start;
    padding-left: 4%;
    margin-top: 2vw;
    width: 50%;
  }
  .b_box_right p {
    margin-left: 3vw;
    font-size: 3.73vw;
  }
  .icon_box {
    width: 8.17vw;
  }
}
</style>
