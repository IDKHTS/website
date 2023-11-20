
<template>
  <div class="parent">
    <div v-if="!successMessage" style="display: flex">
      <div class="input-wrapper">
        <input autocomplete="off" v-model="email" name="EMAIL" type="text" :placeholder="input.placeholder" id="emailInside" />
      </div>
      <div class="submit-wrapper">
        <input type="submit" :value="input.btnText" @click="subscribe" />
      </div>
    </div>
    <p class="message warn" v-if="errorMessage && !successMessage" transition="fade" v-html="errorMessage"></p>
    <p class="message success" v-if="successMessage && !customMsg" transition="fade" v-html='successMessage'></p>
    <p class="message success" v-if="successMessage && customMsg" transition="fade" v-html='customMsg'></p>
  </div>
</template>

<script>
/* eslint-disable */
// ref: https://gist.github.com/chrsgrffth/fa69fa9874871c8b52afc01d1a881e6d
import jQuery from '@@/resources/js/jquery-vendor';
import gtmPush from '@@/resources/js/gtm';

export default {
  name: 'MailchimpSubscribe',
  props: {
    action: {
      require: true,
      type: String,
    },
    clickId: {
      require: true,
      type: String,
      default: "NoId",
    },
    input: {
      type: Object,
      default: function(){
        return {
          placeholder: 'Email',
          btnText: 'Subscribe',
        }
      }
    },
    customMsg: {
      default: ``,
    }
  },
  data() {
    return {
      email: '',
      response: {},
      errorMessage: null,
      successMessage: null,
    };
  },
  methods: {
    subscribe() {
      const vue = this;
      const param = 'EMAIL='.concat(encodeURIComponent(this.email));
      // console.log(this.email,param);
      const action = this.action.replace('/post?', '/post-json?').concat('&c=?');
      const clickId = this.clickId;


      gtmPush({
        event: 'general-event',
        eventData: {
          eventCategory: 'subscribe',
          eventAction: 'initial',
          eventLabel: clickId
        }
      });


      jQuery.ajax({
        type: 'POST',
        url: action,
        data: param,
        dataType: 'jsonp',
        success: (res) => {
          if (res.result === 'success') {
            // console.log('success', res);
            this.successMessage = res.msg;
            //
            //0 - An email address must contain a single @
            //0 - The domain portion of the email address is invalid (the portion after the @: )
            //0 - The domain portion of the email address is invalid (the portion after the @: qq)
            gtmPush({
              event: 'general-event',
              eventData: {
                eventCategory: 'subscribe',
                eventAction: 'return-success',
                eventLabel: clickId
              }
            });

          } else {
            // console.log('errorMessage', res);
            this.errorMessage = res.msg;
            // this.$gtm.trackEvent({
            //   event: 'general-event',
            //   eventData: {
            //     eventCategory: 'subscribe',
            //     eventAction: 'return-fail',
            //     eventLabel: clickId
            //   }
            // });
            gtmPush({
              event: 'general-event',
              eventData: {
                eventCategory: 'subscribe',
                eventAction: 'return-fail',
                eventLabel: clickId
              }
            });
          }

          // console.log(window.dataLayer);
        },
      });
    },
  },
};
</script>


<style scoped lang="scss">
.parent {
  position: relative;
}

.input-wrapper {
  flex: 1 1;
  width: 430px;
  @include mobile { width: 100%;}
  background-color: $black_white_8;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 16px;
  border: none;
  color: white;

  padding-right: 62px;
  margin-right: -46px;
  border-radius: 46px;

  input {
    background-color: $black_white_8;
    color:  $black_white_1;
  }
}

#emailInside {
  width: 100%;

  outline: none;
  font-size: 1rem;
  border-style: none;
  padding: 0;
}

.submit-wrapper {
  flex: 0 0;
  input {
    min-width: 100px;
    line-height: calc(1.5rem + 10px);
    border-style: none;
    border-radius: 0;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 16px;
    font-weight: 500;
    background-color: #0C63E2;

    border-radius: 46px;

    color: white;
    outline: none;
    cursor: pointer;

    /* https://stackoverflow.com/questions/12297600/how-to-remove-default-chrome-style-for-select-input */
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-apperance: none;
    apperance: none;


    &:hover {
      background-color: $btn-hover-blue;
    }
  }

}

.message {
  max-width: 345px;
  padding-left: 30px;
  font-size: 0.8rem;
  padding-top: 10px;
  background-color: transparent;
}

.warn {
  color: red;
}

.success {
  color: green;
}

input::placeholder {
  color: $black_white_4;
}

</style>
