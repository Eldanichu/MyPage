<template>
  <div class="loading-warp">
    <div class="loading-content">
      <div class="bar">
        <span class="title">Loading...</span>
        <n-progress
            type="line"
            :percentage="percent"
            :height="32"
            :border-radius="50"
            :fill-border-radius="0"
            indicator-text-color="#fff"
        />
        <div class="sub-title">
          <template v-if="name !== '-/-'">
            <span class="res-count res">({{ index }}/{{ total }})</span>
            <span class="res-name res">正在加载{{ name }}数据...</span>
          </template>
          <span class="res-name res" v-else >正在准备数据...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

const props = defineProps({
  index: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 1
  },
  name: {
    type: String,
    default: '-/-'
  }
})

const percent = computed(()=>{
  return props.index / Math.max(props.total ,1) * 100;
})

</script>

<style lang="scss" scoped>
.loading-warp {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loading-content {
    min-width: 960px;

    .bar {
      text-align: center;

      .title {
        display: inline-block;
        padding: 0 12px;
        margin: 6px 0;
        font-size: 2.1em;
      }

      .sub-title {
        text-align: left;
        padding: 0 12px;
        margin: 6px 0;
      }
    }
  }
}
</style>