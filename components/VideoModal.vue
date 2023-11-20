<template>
  <div id="video-modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <a class="btn-close" id="input-form-close" @click="onCloseModal">
              ×
            </a>
            <div class="modal-body">
              <div class="video-container">
                <iframe width="560" height="315" :src="videoSrc" id='modalIframeVideo'
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */



function setIframeVideoHeight(){
    const iframeVideo = document.getElementById('modalIframeVideo')
    const innerHeight = window.innerHeight
    const width = getComputedStyle(iframeVideo).width.slice(0,-2)
    const height = Math.min(width * (9/16), innerHeight - 100)
    iframeVideo.style.height = height + 'px'
}
export default {
  name: 'VideoModal',
  props: {
    videoSrc: {
      default: 'https://www.youtube.com/embed/Egw-DE67eJE'
    },
  },
  mounted(){
    document.documentElement.classList.add('body-no-scroll')
    
    const ref = setInterval(()=>{
      setIframeVideoHeight()
    }, 100)
    setTimeout(() =>  clearInterval(ref) , 1000);
    window.addEventListener('resize',setIframeVideoHeight)
      // document.body.addEventListener('touchmove', function (e) { e.preventDefault() }, false)
  },
  beforeDestroy(){
    window.removeEventListener('resize',setIframeVideoHeight)
  },
  methods: {
    onCloseModal() {
      this.$emit('close')
      document.documentElement.classList.remove('body-no-scroll')
    }
  }
};

</script>
<style scoped lang="scss">

@import "@@/resources/scss/variable.scss";

#video-modal {

  .btn-close {

      position: absolute;
      top: 0px;
      right: 0px;
      cursor: pointer;
      padding: 0px 8px 0px 8px;
      top: -0.9rem;
      right: -0.9rem;
      opacity: 0.85;
      color: white;
      background-color: $dark-grey;
      border-radius: 50%;
      font-weight: 500;
      font-size: 20px;
  }


    .video-container {

      margin:0 auto;
      // height:90vh;

      text-align:center;
      overflow:hidden;
      // max-width:178vh;
    }
    .video-container iframe,
    .video-container object,
    .video-container embed {

      width: 100%;
      height: 100%;
    }

  // end


  // https://vuejs.org/v2/examples/modal.html
  .modal-mask {
    position: fixed;
    z-index: 999998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    // width: 80%;
    position: relative;
    max-width: calc(100vw - 64px);
    margin: 0px auto;
    padding: 5px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    // margin: 20px 0;
    line-height: 0;

  }

  .modal-default-button {
    float: right;
  }


}

</style>
