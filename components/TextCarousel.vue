<template>
    <div class="snmk-container">
      <div
        class="snmk-col-4 snmk-col-l-4 snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 text-wrapper"
      >
        <div v-if="userCase.author" class="" v-html="userCase.author"></div>
        <div class="c-white big-title-3 bold-700 carousel-title">
          {{ userCase.title }}
        </div>
        <div v-if='userCase.desc' class="c-white title-4 bold-700 font-bw-1 mt-l" v-html='userCase.desc'></div>
        <div class="" v-if="userCase.btn || userCase.btn2">
          <Navigate
            :elId="userCase.btn.id"
            :aLink="userCase.btn.link"
            :route="userCase.btn.route"
            target="_blank"
            class="snmk-primary-btn text-center c-white mt-l"
            v-if="userCase.btn"
          >
            {{ userCase.btn.text }}
          </Navigate>
          <Navigate
            :elId="userCase.btn2.id"
            :aLink="userCase.btn2.link"
            :route="userCase.btn2.route"
            class="snmk-btn text-center mt-l"
            v-if="userCase.btn2"
          >
            {{ userCase.btn2.text }}
          </Navigate>
        </div>
        <div class='mt-xs font-3 font-bw-2' v-if='userCase.note' v-html='userCase.note'></div>
      </div>
      <!-- <div
        class="snmk-col-6 snmk-col-l-6 snmk-col-m-4 snmk-col-s-4 snmk-col-xs-4 cases-display"
      >
        <Carousel3D
          :carousels="userCase.displays"
          :device="device"
          @onActiveIndexChange="() => {}"
        ></Carousel3D>
      </div> -->
    </div>
</template>

<script>
import Navigate from '@@/components/Navigate.vue'
// TODO: Add carsousel3D
// import Carousel3D from '@@/components/Carousel3D.vue'
import configuration from '@@/resources/data/configuration'
export default {
  props: {
    device: {
      default: configuration.PC
    },
    userCase: {
      default: function() {
        return {}
      }
    }
  },
  components: {
    Navigate,
    // Carousel3D
  }
}
</script>

<style lang="scss" scoped>


.user-case {
  padding: 120px 0;

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .snmk-btn {
    background-color: transparent;
  }
}
@include mobile {
  .user-case {
    padding: 60px 0;

    .text-wrapper {
      text-align: center;
      align-items: center;
    }
    .cases-display {
      margin-block: 45px;
    }
  }
}
</style>
