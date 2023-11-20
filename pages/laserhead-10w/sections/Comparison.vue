<template>
  <div class="margin_line new_black new_con_con cpr_con not-pc">
    <div
      class="con_title_style camera_title new_title"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <p class="line-blue">1.6W and 10W Laser Comparison</p>
    </div>
    <div
      class="comon_pro_txt con_bg_gray game_txt cpr_pro"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      Here is a comparison between 1.6W and 10W laser, taking 1.5 mm-thick
      basswood engraving and cutting as an example.
    </div>
    <div class="cpr_bot">
      <div class="bootstrap-row">
        <div
          class="col-xs-12 col-sm-12 col-lg-4 cpr_padding"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <div class="cpr_b_title">Engraving Speed</div>
          <div class="cpr_bot_box">
            <span class="orange_block cpr_block"></span>
            <span class="orange_txt cpr_txt">6000 mm/min</span>
          </div>
          <div class="cpt_con_txt">10W</div>
          <div class="cpt_con_block_box">
            <div class="cpt_con_box">
              <span class="cpt_con_block"></span>
            </div>
            <span class="cpr_txt cpt_con_box_txt">1000 mm/min</span>
          </div>
          <div class="cpt_con_txt cpt_con_bot_txt">
            <span class="cpt_left">1.6W</span>
          </div>
        </div>
        <div
          class="col-xs-12 col-sm-12 col-lg-4 cpr_padding"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <div class="cpr_b_title">Cutting Speed</div>
          <div class="cpr_bot_box">
            <span class="blue_block cpr_block"></span>
            <span class="blue_txt cpr_txt">600 mm/min</span>
          </div>
          <div class="cpt_con_txt">10W</div>
          <div class="cpt_con_block_box">
            <div class="cpt_con_box">
              <span class="cpt_con_block"></span>
            </div>
            <span class="cpr_txt cpt_con_box_txt">140 mm/min</span>
          </div>
          <div class="cpt_con_txt cpt_con_bot_txt">
            <span class="cpt_left">1.6W</span>
            <span class="tips">( Two Passes )</span>
          </div>
        </div>
        <div
          class="col-xs-12 col-sm-12 col-lg-4 cpr_padding"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >
          <div class="cpr_b_title">Cutting Depth</div>
          <div class="cpr_bot_box">
            <span class="purple_block cpr_block"></span>
            <span class="purple_txt cpr_txt">8.0 mm</span>
          </div>
          <div class="cpt_con_txt">10W</div>
          <div class="cpt_con_block_box">
            <div class="cpt_con_box">
              <span class="cpt_con_block"></span>
            </div>
            <span class="cpr_txt cpt_con_box_txt">1.5 mm</span>
          </div>
          <div class="cpt_con_txt cpt_con_bot_txt">
            <span class="cpt_left">1.6W</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang='scss' scoped>

.cpr_con {
  padding-top: 1%;
}
.cpr_pro {
  width: 49%;
  margin: auto;
  text-align: center;
  padding-left: 0;
  margin-top: 76.8px;
}

.cpr_bot {
  margin-top: 96px;
  padding: 0 2%;
  box-sizing: border-box;
  font-size: 1.09375vw;
}

.cpr_b_title {
  font-size: 1.875vw;
  margin-top: 32px;
  color: #c8c8c8;
}

.cpr_bot_box {
  margin-top: 32px;
}

.cpr_block {
  display: inline-block;
  width: 47%;
  height: 0.54867vw;
  border-radius: 0.54867vw;
  background-color: #eee;
  vertical-align: middle;
}

.orange_block {
  background-image: linear-gradient(to right, #ffffff, #eeb953, #f98323);
}

.blue_block {
  background-image: linear-gradient(to right, #ffffff, #53beee, #2374f9);
}

.purple_block {
  background-image: linear-gradient(to right, #ffffff, #8a53ee, #2323f9);
}

.cpr_txt {
  display: inline-block;
  margin-left: 2.1vw;
  vertical-align: middle;
}

.orange_txt {
  background: linear-gradient(
    87deg,
    #ffffff 0%,
    #eeb953 40.9423828125%,
    #f98323 89.0869140625%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.blue_txt {
  background: linear-gradient(
    87deg,
    #ffffff 0%,
    #53beee 40.9423828125%,
    #2374f9 89.0869140625%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.purple_txt {
  background: linear-gradient(
    87deg,
    #ffffff 0%,
    #8a53ee 40.9423828125%,
    #2323f9 89.0869140625%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cpt_con_txt {
  /* color: #c8c8c8; */
  /* margin-top: 0.6rem; */
  display: inline-block;
  width: 100%;
  /* line-height: 2rem; */
}

.cpt_con_box {
  display: inline-block;
  width: 47%;
  margin-right: 2.1vw;
}

.cpt_con_block {
  display: inline-block;
  width: 16%;
  height: 0.54867vw;
  border-radius: 4.8px;
  background-color: #5a5a5a;
  vertical-align: middle;
}

.cpt_con_box_txt {
  margin-left: 0;
}

.cpt_con_block_box {
  margin-top: 32px;
}

.cpr_padding {
  padding-left: 5%;
  box-sizing: border-box;
}

.cpt_left {
  display: inline-block;
  width: 54%;
  line-height: 64px;
}

.cpt_con_bot_txt {
  height: 64px;
}

.tips {
  font-size: 1.09375vw;
  line-height: 1.4;
  vertical-align: middle;
}
@media screen and (max-width: 992px) {
  .cpr_pro {
    width: 83%;
  }
  .cpr_bot {
    font-size: 3.2vw;
  }
  .cpr_block {
    height: 1.24vw;
    width: 64%;
  }
  .cpr_b_title {
    font-size: 4.26vw;
  }
  .cpt_con_block_box {
    margin-top: 0;
  }
  .tips {
    font-size: 2.48vw;
  }
}
</style>
