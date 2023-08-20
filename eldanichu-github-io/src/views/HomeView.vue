<script setup>
import {ref, inject} from "vue";
import GameSlot from "@/components/GameSlot.vue";

const db = inject('DB');
const mi = inject('MI');

mi.setOffset({
  x:24
})

mi.setItem({
  stacks:0
})
console.log('game data ->',db)

</script>

<template>
  <div class="home-warp">
    <game-slot/>
  </div>
</template>

<style scoped lang="scss">

</style>