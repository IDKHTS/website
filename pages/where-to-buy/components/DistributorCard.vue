<template style="display: flex;">
  <div class="column is-one-third-tablet card-container" >

      <div class="card slick-fullheight">
        <a :href="hLink" target="_blank" class="visitWebsite">
          <div class="is-clearfix" style="height: 80px;margin: 1rem 0.5rem 0rem;">
            <div style="float: left;max-width: 50%;">
              <h1 class="title" style="font-size: 20px; margin-bottom: 0px;word-break: break-word">{{title}}</h1>
              <h1 class="title" style="font-size: 20px;">{{subtitle}}</h1>
              <h4 class="subtitle" style="font-size: 14px; color: #808080">{{country}}</h4>
            </div>
            <div style="float:right; height: 80px">
              <img :src="imgSrc" class="distributorPic">
            </div>
          </div>
          <div class="is-clearfix visitBottom"
           :class="{ 'hasLink': hasLink }"
           style="">
            <div v-if='!hasLink' >
              <div>
                Phone: {{phone}}
              </div>
              <div style="float: left;">
                E-Mail: {{email}}
              </div>
              <div style="float: left; word-break: break-all;">
                Address: {{address}}
              </div>
            </div>
            <div  style="float: right;marginTop:1rem; color: #28a7e1">
              Visit Website
            </div>
          </div>
        </a>
      </div>

  </div>
</template>

<script>

export default {
  name: 'TeamProfile',
  props: {
    imgSrc: {
      default: 'http://localhost:8081/assets/img/community/showcase-test.png'
    },
    title: {
      default: 'Facebook Group'
    },
    subtitle: {
      default: ''
    },
    country: {
      default: 'The quickest way to meet creative and helpful fellow users.'
    },
    hasLink: {
      default: true
    },
    hLink: {
      default: 'https://forum.snapmaker.com'
    },
    email: {
      default: ''
    },
    phone: {
      default: '11111'
    },
    address: {
      default: ''
    }
  }
}
</script>

<style type="text/css" lang="scss">
.column.card-container {
  display: flex;
}
.card {
  // width: 250px;
  // margin: auto;
  width: 100%;
  border-width : 1px;
  border-style : solid;
  border-color : #e6e6e6;
  border-radius: 4px;
  overflow: hidden;

  -moz-box-shadow: 0px 0px 5px #999999;
  -webkit-box-shadow: 0px 0px 5px #999999;
  box-shadow: 0px 0px 5px #999999;
  padding: 8px;
  .distributorPic{
      max-width: 140px;
  }
  .visitWebsite{
      display: block;
      min-height: 218px;
      .visitBottom{
          margin: 0 0.5rem 0;
          font-size: 14px;
          color: #808080
      }
      .hasLink{
          margin-top: 5rem;
      }
  }

}

.card:hover {
  -moz-box-shadow: 0px 0px 20px #999999;
  -webkit-box-shadow: 0px 0px 20px #999999;
  box-shadow: 0px 0px 20px #999999;
}

h4 {
  font-size: 1.25rem;
}



</style>
