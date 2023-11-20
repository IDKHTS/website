<template>
  <div>
    <div class='snmk-container'>
      <div class='snmk-col-8 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-2 snmk-col-l-offset-1'>
          <div class='comparison-table'>
            <div v-for='title of dataSrc.tableTitle' :key='title' class='comparison-row'>
              <div class='comprison-title'>{{ title === 'name' || title === 'imgSrc' ? '' : title }}</div>
              <div class='comprison-value' :class='{"comprison-column-name": title === "name"}'>
                <div v-for='machine of dataSrc.machines' :key='machine.name' class='comprison-column'
                >
                  <template v-if='title !== "imgSrc"'>
                    {{ machine[title] }}
                  </template>
                  <template v-else>
                    <img :src="machine[title]" :alt="machine.name">
                  </template>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>


<script setup lang='ts'>
const props = withDefaults(defineProps<{
  dataSrc: any
}>(), { dataSrc: {} })
</script>

<style scoped lang="scss">
@import '../theme.scss';
.comparison-table {
  display: flex;
  flex-direction: column;
  margin-block: 120px;
  @include mobile {
    margin-block: 24px;
  }
}
.comparison-row {
  padding-inline: 20px;
  padding-block: 32px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  &:nth-child(2n + 1) {
    background: #F5F5F5;
  }
  @include mobile {
    padding-inline: 10px;
    padding-block: 13px;
  }
}
.comprison-title, .comprison-value {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  display: flex;
  align-items: center;
  @include mobile {
    font-size: 9px;
    line-height: 12px;
  }
}
.comprison-title {
  width: 33%;
  padding-right: 20px;
  @include mobile {
    font-size: 9px;
    line-height: 12px;
  }
}
.comprison-value {
  width: 66%;
}
.comprison-column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
  padding-left: 20px;
  @include mobile {padding-left: 8px;}
}
.comprison-column-name .comprison-column  {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  /* or 110% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  @include mobile {
    font-size: 10px;
    line-height: 12px;
  }
}

@include mobile {
  .snmk-container {
    margin-inline: 0;
  }
  .snmk-col-s-4,.snmk-col-xs-4 {
    margin-inline: 0;
    width: 100%;
  }
}
</style>
