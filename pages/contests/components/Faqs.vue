
<template>
    <section class="faqs my-3xl">
        <div class="container">
            <div class="wrappers">
                <div class="faq wrapper">
                    <div class="wrapperTitle">
                        {{dataSrc.faqTitle}}
                    </div>
                    <ul class="ruleItem is-clearfix">
                        <li  v-for="(item,key) in dataSrc.faqContent" :key='key'>
                            <div class="question">
                                {{item.question}}
                            </div>
                            <div class="anwser" v-html="item.anwser">
                            </div>
                        </li>
                     </ul>
                </div>
                <div class="terms wrapper">
                    <div class="wrapperTitle">
                        {{dataSrc.termsTitle}}
                    </div>
                    <ul class="ruleItem is-clearfix" >
                        <li v-for="(item,key) in dataSrc.termsContent" :key='key'>
                            <div class="term">
                                {{item}}
                            </div>
                        </li>
                     </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
    dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

</script>

<style scoped lang='scss'>
@import '../style.scss';
.faqs {
    .wrappers{
        display: flex;
        padding-top: 20px;
        justify-content: space-between;
        .wrapper{
            width: 49%;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #E7E8E9;
            font-size: 14px;
            padding: 24px 20px 0;
            .wrapperTitle{
                margin-bottom: 20px;
                font-size: 22px;
                font-weight: 500;
                color: #272829;
            }
        }
        .faq{
            .ruleItem{
                .question{
                    color: #676869;
                }
                .anwser{
                    color: #979899;
                    margin-bottom: 25px;
                }
            }
        }
        .terms .term{
            font-weight: 400;
            color: #676869;
            margin-bottom: 20px;
        }
    }
}

@include mobile {
    .faqs{
        .wrappers{
            display: block;
            margin-top: 13.9vw;
            .wrapper{
                width: auto;
                padding: 0;
                .wrapperTitle{
                    font-size: 5vw;
                    line-height: 5.83vw;
                    margin-bottom: 0;
                    padding: 3.19vw 0 3.19vw 2.78vw;
                    background: #F7F8F9;
                    border-radius: 1.11vw 1.11vw 0px 0px;
                }
                .ruleItem{
                    padding: 2.78vw 2.78vw 4.17vw;
                    margin-bottom: 0;
                    font-size: 3.89vw;
                    li:not(:last-child){
                        margin-bottom: 6.84vw;
                    }
                }
            }
            .terms{
                margin-top: 2.78vw;
            }
        }
    }

}

</style>