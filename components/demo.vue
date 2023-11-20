<template>
    <div>
        <h1>{{ hello }}</h1>
        <h2>{{ lili }}</h2>
        <h3>{{ translate }}</h3>
    </div>
</template>


<script>
    export default {
        data: function() {
            return { 
                hello: '111'
            }
        },
        setup(props) {
            const { messages, t } = useI18n()
            const translate = messages.value['en-US'].headerData
            console.log(messages.value, t)
            console.log(t('headerData'))
            console.log(translate)
            
            return {
                lili: 'lililililili',
                translate,
            }
        },
        mounted() {
            console.log(this)
        }
    }
</script>

<style lang='scss' scoped>
    
</style>