<template>
  <div class="mouse-item-container">
    MI
  </div>
</template>

<script setup>
import {nextTick, onMounted, onUnmounted} from "vue";

onMounted(() => {
  nextTick(() => {

  })
})

onUnmounted(() => {

})

</script>

<style lang="scss" scoped>
.mouse-item-container {
  height: 32px;
  min-width: 32px;
  display: inline-block;
  //background-color: #999999;
  border: 1px #666666 dashed;
  border-radius: 8px;
  overflow: hidden;
}
</style>