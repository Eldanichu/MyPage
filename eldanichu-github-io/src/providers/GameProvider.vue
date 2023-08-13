<template>
  <slot></slot>
</template>

<script setup>
import {provide, ref, defineEmits} from "vue";

const emit = defineEmits(['loading']);
emit('loading', true)

const game = ref({});
const dataLoader = async (data) => {
  const loader = await import(`@/GameData/${data}.yaml`)

  return loader.default
}

dataLoader("Items").then(res => {
  game.value = res;

  setTimeout(()=>{
    emit('loading', false);
  },1000)
})


provide('game', game)
</script>