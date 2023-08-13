<template>
  <app-header></app-header>

  <app-main>
    <RouterView/>
  </app-main>
</template>

<script setup>
import {RouterView} from 'vue-router'
import AppHeader from "@/laout/AppHeader.vue";
import AppMain from "@/laout/AppMain.vue";
</script>

<style lang="scss" scoped>

</style>