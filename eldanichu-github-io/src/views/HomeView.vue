<script setup>
import {ref, inject} from "vue";
import GameSlot from "@/components/GameSlot.vue";

const db = inject('DB');
console.log(db)


</script>

<template>
  <div class="home-warp">
    <game-slot/>
  </div>
</template>

<style scoped lang="scss">

</style>