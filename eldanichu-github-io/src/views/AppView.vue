<template>
  <div class="app-container">
    <app-header></app-header>

    <app-main>
      <RouterView/>
    </app-main>
  </div>

</template>

<script setup>
import {RouterView} from 'vue-router'
import AppHeader from "@/layout/AppHeader.vue";
import AppMain from "@/layout/AppMain.vue";
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .app-main {
    flex-grow: 1;
  }

}
</style>
