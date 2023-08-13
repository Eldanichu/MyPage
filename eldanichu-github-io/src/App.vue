<script setup>
import {ref} from 'vue';
import {darkTheme} from 'naive-ui'
import AppView from "@/views/AppView.vue";
import GameProvider from "@/providers/GameProvider.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

const isLoading = ref(true)
const onLoading = (finish) => {
  isLoading.value = finish
}

</script>

<template>
  <game-provider @loading="onLoading">
    <loading-screen v-if="isLoading"></loading-screen>
    <transition name="slide-in-out">
      <n-config-provider :theme="darkTheme" v-if="!isLoading">
        <app-view />
      </n-config-provider>
    </transition>
  </game-provider>
</template>

<style lang="scss">
@import './assets/imports.scss';

.n-config-provider {
  height: 100%;
}

.slide-in-out-enter-active,
.slide-in-out-leave-active {
  transition: opacity 0.5s ease;
  animation: slide-in-out 0.5s;
}

.slide-in-out-enter-from,
.slide-in-out-leave-to {
  opacity: 0;
}

@keyframes slide-in-out {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
