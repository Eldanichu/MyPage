<script setup>
import { darkTheme } from 'naive-ui'
import AppView from "@/views/AppView.vue";

</script>

<template>
  <n-config-provider :theme="darkTheme">
    <app-view/>
  </n-config-provider>
</template>

<style lang="scss">
@import './assets/imports.scss';
</style>
