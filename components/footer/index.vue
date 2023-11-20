<script setup lang='ts'>
import CollectionMenu from '@@/components/CollectionMenu.vue'
import Navigate from '@@/components/Navigate.vue';
import ContactUs from './ContactUs.vue'
import MailchimpSubscribe from './MailchimpSubscribe.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';


const i18n = useI18n()
const route = useRoute()
const { isMobile, device } = storeToRefs(useGlobalStore()) 
const footer = computed(() => {
  return i18n.tm('footerData') 
})
const isCN = computed(() => i18n.locale.value === 'zh-CN')
const relatedLinks = computed(()=> footer.value.relatedLinks)
const contactUs = computed(()=> footer.value.contactUs)
const copyright = computed(()=> footer.value.copyright)
const changeLanguage = computed(() => {
    const cn = footer.value.changeLanguage.cn
    const us = footer.value.changeLanguage?.us
    return isCN ? us : cn
}) 
const comming = computed(() => {
    return i18n.locale.value === 'zh-CN' ? '敬请期待' : 'COMING'
})
const pre_Heat = computed(() => {
    return i18n.locale.value === 'zh-CN' ? '敬请期待' : 'PREORDER'
})
const isNew = computed(() => {
    return i18n.locale.value === 'zh-CN' ? '新品' : 'NEW'
})
const isRay = computed(() => {
    return route.path.includes('/snapmaker-ray-20w-40w-laser-engraver-and-cutter-with-air-assist')
})


const openLinksItemTitle = ref('')

const onToggleExpandMenu = (linksItem: any) => {
    console.log('linksItem', linksItem)
    openLinksItemTitle.value = openLinksItemTitle.value === linksItem.title ? '' : linksItem.title
}
 </script>

<template>
    <div class="footer-wrapper">
      <div style="background: #2B2B2B;" v-if='!isRay' >
        <div class="snmk-container">
          <div class=" snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4
          snmk-col-offset-1 snmk-col-l-offset-1 new-letter-wrapper">
            <template v-if="!isCN">
              <div class="klaviyo-form-T3Qytp"></div>
            </template>
            <template v-else>
              <div class="title-3 bold-700">{{contactUs.newsLetter.title}}</div>
              <div class="mt-2xs mb-l font-1">{{contactUs.newsLetter.description}}</div>
              <div class="horizontal-center">
                <mailchimp-subscribe
                  :input="contactUs.newsLetter"
                  clickId="footer-inline"
                  action="//snapmaker.us14.list-manage.com/subscribe/post?u=0f4c0a37d13c4941ec88bb242&amp;id=bfa2592e18">
                </mailchimp-subscribe>
              </div>
            </template>
          </div>
        </div>
      </div>
  
      <div v-if='!isMobile' class="snmk-container not-mob pt-2xl">
        <div class="snmk-col-2 snmk-col-l-2 snmk-col-m-8 snmk-col-offset-1 snmk-col-l-offset-1">
          <div class="">
            <span class="iconfont logo-icon">&#xe618;</span>
          </div>
        </div>
        <div class="snmk-col-5 snmk-col-l-5 snmk-col-m-4 footer-content">
          <div class="related-links">
            <div v-for="item of relatedLinks" :key="item.title" class="related-link-part pb-xl">
              <div class="mb-m" style="color: white;font-weight: 500">{{item.title}}</div>
              <template v-for="link of item.links" :key="link.name">
                <div>
                  <Navigate :id="link.traceID" :aLink="link.link" :route="link.route"  target="_blank" class="font-1 mt-s display-block font-bw-4">
                    {{link.name}}
                    <span v-if="link.isPreHeat" class="badge-new font-3">{{pre_Heat}}</span>
                    <span v-if="link.isNew" class="badge-new font-3">{{isNew}}</span>
                    <span v-if="link.isComing" class="badge-new font-3">{{comming}}</span>
                  </Navigate>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="snmk-col-3 snmk-col-l-3 snmk-col-m-4 pb-xl">
          <ContactUs :contactUs="contactUs"></ContactUs>
        </div>
      </div>
  
      <div v-if='!isMobile'  class="snmk-container not-mob pt-2xl" >
          <div class="snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-offset-1 snmk-col-l-offset-1 copyright py-l">
            <div class="font-2" style="color: white">{{copyright}}
              <template v-if="$i18n.locale === 'zh-CN'">
              | <a href="https://beian.miit.gov.cn/" target="_blank" class="record">粤ICP备19101334号</a>
              </template>
            </div>
  
            <div>
              <a :id="changeLanguage.traceID" :href="changeLanguage.link" class="change-language font-2" style="color: white">{{changeLanguage.text}}</a>
            </div>
          </div>
      </div>
  
      <div v-if='isMobile' class="snmk-container only-mob pt-2xl">
        <div class="snmk-col-xs-4 snmk-col-s-4">
          <div class="">
            <!-- <img :src="logo" alt="sapmaker"> -->
            <span class="iconfont logo-icon">&#xe618;</span>
          </div>
            <CollectionMenu v-for="item of relatedLinks "
            style="border-bottom: 1px #363636 solid"
            class=""
            :isOpen="openLinksItemTitle == item.title"
            @toggle="onToggleExpandMenu(item)"
            speed=".2s"
            :key="item.title">
                <template v-slot:triggle-bar>   
                    <div style="color: white" class="my-l">
                        {{item.title}}
                        <img :class="{'rotate-transition': openLinksItemTitle == item.title}" class="left-icon" src="https://ditfjx9w4x3vl.cloudfront.net/assets/header/go-icon.svg" alt="">
                    </div>
                </template>
                <template v-slot:content>
                    <div style='overflow: hidden;'>
                        <Navigate :id="link.traceID"
                        v-for="link of item.links"
                        :aLink="link.link"
                        :route="link.route"
                        :key="link.name"
                        class="font-2 my-l links-item"
                        target="_blank"
                        >
                        {{link.name}}
                        <span v-if="link.isPreHeat" class="badge-new font-3">{{pre_Heat}}</span>
                        <span v-if="link.isNew" class="badge-new font-3">{{isNew}}</span>
                        <span v-if="link.isComing" class="badge-new font-3">{{comming}}</span>
                        </Navigate>
                    </div>
                </template>
            </CollectionMenu>
        </div>
  
        <div class="snmk-col-xs-4 snmk-col-s-4 py-l">
          <ContactUs :contactUs="contactUs"></ContactUs>
        </div>
  
        <div class="snmk-col-xs-4 snmk-col-s-4 copyright pt-m pb-xl">
          <span class="mt-l font-2" style="color: white">{{copyright}}
            <template v-if="$i18n.locale === 'zh-CN'">
             <br><a href="https://beian.miit.gov.cn/" target="_blank" class="record">粤ICP备19101334号</a>
            </template>
          </span>
  
  
          <div class="text-center pt-m pb-xl ">
            <a :id="changeLanguage.traceID" :href="changeLanguage.link" class="change-language font-2" style="color: white">{{changeLanguage.text}}</a>
          </div>
        </div>
      </div>
  
    </div>
</template>



<style lang="scss" scoped>
  // mobile
  @media (max-width: $breakPoint_m) {
    // .footer-wrapper {
    //   color: white;
    // }
    .copyright{
      display: block;
      flex-direction: column;
      border-top: 1px solid #595959;
      text-align: center;
    }
  }
  .new-letter-wrapper {
    text-align: center;
    padding-top: 48px;
    padding-bottom: 58px;
    color: $black_white_4;
    @include mobile {
      padding-top: 39px;
      padding-bottom: 33px;
    }
  }
  .left-icon {
    float: right;
    text-align: center;
    // width: 4em;
    transition: all .2s ease;
  }
  .rotate-transition {
    transform: rotate(90deg);
  }
  .footer-wrapper:deep(.links-item) {
    display: block;
    color: $black_white_4;

    &:first-child {
      margin-top: 0;
    }
    // &:last-child {
    //     padding-bottom: 24px;
    // }
  }

  .change-language {
    position: relative;
    display: inline;
    &::v-deep a {
      font-size: 14px;
      margin-bottom: 16px;
      line-height: 24px;
    }
    &::v-deep a {
      font-size: 14px;
      margin-bottom: 16px;
      line-height: 24px;
    }


    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: -5px;
      background-color: white;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      &::after {
        animation-name: bottomline;
        animation-iteration-count: 1;
        animation-duration: 2s;
      }
    }

    @keyframes bottomline {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

  }

  .footer-wrapper {
    background-color: $black;
    color: $black_white_4;
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
  }

  .logo-icon {
    position: relative;
    font-size: 36px;
    max-width: 182px;
    width: 100%;
    color: white;
    top: -7px;
  }

  .related-links{
    width: 37.083vw;
    // margin-left: 138px;
    color: $black_white_4;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
  }
  .related-link-part {

    word-break: break-word;
    // width: 10vw;
    width: 33.33%;
    padding-right: 2.29vw;

    // &:hover {
    //     color: white;
    //     text-decoration: underline;
    // }
    a,&::v-deep a {
      color: $black_white_4;
      font-size: 14px;

      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
  .copyright{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #595959;
  }


  .record {
    color: white;

    &:hover {
      color: $blue;
    }
  }
  // tablet
  @media (min-width: $breakPoint_m) and (max-width: $breakPoint_l) {
    .footer-content {
      // flex-direction: column;
    }
    .related-links {
      width: 100%;
    }
    .related-link-part {
      width: 50%;

      // shit
      &:nth-child(3) {
        order: 2;
      }
    }
  }


  @media (min-width: $breakPoint_l) and (max-width: $breakPoint_xl) {
    .logo-icon {
      position: relative;
      font-size: 32px;
      max-width: 182px;
      width: 100%;
      color: white;
      top: -7px;
    }
  }

  .badge-new {
    border-radius: 4px;
    background-color: $yellow;
    color: white;
    padding: 2px 8px;

    @media (max-width: $breakPoint_m) {
      margin-left: 4px;
    }
  }
</style>