<template>
  <div class="tailor_content margin_line">
    <div
      class="line-blue con_title_style tailor_title"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >Tailor-made Software Snapmaker Luban, Making a Pro out of Every Beginner.</div>
    <div class="bootstrap-row">
      <div class="col-xs-12 col-sm-12 col-lg-5">
        <div class="icon_box_in">
          <!-- icon list -->
          <span
            v-for="(item, index) in dataArr"
            :key="index"
            class="con_icon"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <NuxtImg :src="ctShow == index ? item.iconActive : item.icon"
              loading='lazy'
              @mouseover="changeActive(index)"
            />
          </span>
        </div>
        <!-- title & content -->
        <div v-show="ctShow == index" v-for="(item, index) in dataArr" :key="index">
          <div
            class="comon_title con_title_style ready_title tailor_title_pro"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
            v-text="item.title"
            style="font-size: 2vw"
          ></div>
          <div
            class="white comon_pro tailor_pro"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
            v-text="item.content"
          ></div>
        </div>
      </div>
      <!-- video -->
      <div class="col-xs-12 col-sm-12 col-lg-7">
        <div v-show="ctShow == index" v-for="(item, index) in dataArr" :key="index">
          <div class="ct_img_box_ve">
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
              loop="loop"
            >
              <source :src="item.video" type="video/mp4" />您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const iconSrcActive1 =
  'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon1.png'
const iconSrcActive2 =
  'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon2.png'
const iconSrcActive3 =
  'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon3.png'
const icon1 = 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon01.png'
const icon2 = 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon02.png'
const icon3 = 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/icon03.png'
const video1 =
  'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/Ready-to-use.mp4'
const video2 =
  'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/Converts 3D.mp4'
const video3 = 'https://ditfjx9w4x3vl.cloudfront.net/assets/laser/MP4/High.mp4'

export default {
  data () {
    return {
      ctShow: 0,
      dataArr: [
        {
          icon: icon1,
          iconActive: iconSrcActive1,
          title:
            'Ready-to-use Material Profiles, Why Start from 0 When You Can Start from 1?',
          content:
            "We not only care about user experience, we also value user success. That's why we embarked on extensive material testing and built you a case library in Luban. It lets you access full sets of recommended parameters for common laser materials, so you can choose one and start right off.",
          video: video1
        },
        {
          icon: icon2,
          iconActive: iconSrcActive2,
          title:
            '3D to 2D Conversion, Rock It with Laser like Having Fun with 3DP.',
          content:
            'The fun of cutting and assembling never gets old. This new feature of Luban lets you convert 3D models into cuttable vector images. Things that can only be brought to life by 3D printing can now be laser machined as well.',
          video: video2
        },
        {
          icon: icon3,
          iconActive: iconSrcActive3,
          title: 'High Customizability, Make It as You like It.',
          content:
            'Luban supports editing images in numerous formats, tinkering with shades and tones, and transforming images in ways you like. More features are to be added.',
          video: video3
        }
      ]
    }
  },
  methods: {
    changeActive (index) {
      console.log(index)
      this.ctShow = index
    }
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang='scss' scoped>

.tailor_content {
  background-color: #000000;
  padding: 6.6% 7%;
  box-sizing: border-box;
}

.con_icon {
  display: inline-block;
  width: 30%;
  text-align: left;
  cursor: pointer;
}

.con_icon img {
  width: 3vw;
  margin-bottom: 10.24px;
}

.con_icon p {
  color: #c8c8c8;
  margin-bottom: 0 !important;
  font-size: 0.87489vw;
  /* line-height: 1rem; */
  text-align: center;
  margin-top: 0;
}

.icon_box_in {
  display: block;
}

.tailor_title {
  width: 88%;
  margin: auto;
  text-align: center;
  margin-bottom: 96px;
}
.tailor_title_pro {
  width: 100%;
  color: #ffffff;
  line-height: 1.2;
  margin-top: 2vw;
}

.tailor_pro {
  width: 96%;
}
.ct_img_box_ve video {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 992px) {
  .tailor_title {
    width: auto;
    text-align: left;
  }
  .con_icon img {
    width: 9.68vw;
  }
  .ready_title {
    font-size: 4.26vw;
  }
  .tailor_pro {
    width: 100%;
    font-size: 3.74vw;
    margin-bottom: 4vw;
  }
  .ct_img_box_ve {
    margin-top: 5vw;
  }
}
</style>
