<script setup>
import {reactive, ref} from 'vue';
import {darkTheme} from 'naive-ui'
import AppView from "@/views/AppView.vue";
import GameProvider from "@/providers/GameProvider.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import MouseItemProvider from "@/providers/MouseItemProvider.vue";

const loadingMsg = ref({})

const onLoading = (msg) => {
  console.log(msg)
  loadingMsg.value = msg
}

</script>

<template>
  <game-provider @loading="onLoading">
    <loading-screen
      v-if="loadingMsg.show"
      :index="loadingMsg.index"
      :total="loadingMsg.total"
      :name="loadingMsg.name"
    >
    </loading-screen>
    <transition name="slide-in-out">
      <n-config-provider :theme="darkTheme" v-if="!loadingMsg.show">
        <mouse-item-provider>
          <app-view/>
        </mouse-item-provider>
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
