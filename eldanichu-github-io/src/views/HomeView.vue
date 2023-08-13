<script setup>
import {ref,inject} from "vue";
import {Timer} from "@/Utils/Timer";

const game = inject('game')
console.log(game.value)

const remains = ref(0)
let ani = new Timer({duration: 3});
ani.onUpdate = (t) => {
  remains.value = t;
}

ani.onTimeout = () => {
  console.log("timeout")
}

function timerControl(funcName) {
  if (ani[funcName]) {
    ani[funcName]();
  }
}


</script>

<template>
  <div class="h-full">

  </div>
</template>

<style scoped lang="scss">

</style>