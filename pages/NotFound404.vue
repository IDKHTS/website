<template>
<div class="not-found-container" :class="{ 'not-found-container-mobile': isMobile }">
    <div>
    <div class="msg" :class="{ 'msg-mobile': isMobile }">{{ msg }}</div>
    <div class="describe">{{ describe }}</div>
    </div>
</div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

const { isMobile } = storeToRefs(useGlobalStore())
const msg = '404 Page Not Found'
const describe = 'The page you were looking for does not exist.'
</script>

<style lang="scss">
.not-found-container {
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
min-height: 520px;
}
.not-found-container-mobile {
min-height: 440px;
}

.msg {
font-size: 60px;
font-weight: bold;
font-family: Roboto-Bold;
padding: 0 32px;
color: #262626;
}
.msg-mobile {
font-size: 36px;
font-weight: bold;
}

.describe {
width: 100%;
margin-top: 14px;
font-weight: 400;
color: #8c8c8c;
line-height: 20px;
font-size: 14px;
padding: 0 32px;
}
</style>
