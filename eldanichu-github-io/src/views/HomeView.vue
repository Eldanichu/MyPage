<script setup lang="jsx">
import {h, ref, inject} from "vue";
import deck from '~images/DECK.png'
</script>

<template>
  <div class="main-view">
    <div class="container">

    </div>
  </div>
</template>

<style scoped lang="scss">
.main-view {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px #666666 solid;
  margin: 2px;
  border-radius: 8px;

}

@keyframes slide-in-out {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes full-width {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
