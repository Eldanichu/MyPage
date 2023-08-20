<template>
  <follow-mouse-container :offset="offset">
    <game-slot :item="item"
               v-show="hasItem"/>
  </follow-mouse-container>
  <slot></slot>
</template>

<script setup>
import FollowMouseContainer from "@/components/FollowMouseContainer.vue";
import GameSlot from "@/components/GameSlot.vue";
import {computed, provide, reactive, ref} from "vue";

let offset = ref({
  x: 0,
  y: 12
})

let item = ref({})

const hasItem = computed(()=>{
  let _item = item.value;
  return Object.entries(item.value).length && _item.stacks > 0
})

const setOffset = (offsets = {}) => {
  offset = ref(Object.assign(offset.value, offsets))
}

const setItem = (itemObj = {}) => {
  item = ref(Object.assign(item.value, itemObj))
}

provide('MI', {
  setOffset,
  setItem

})
</script>

<style scoped>

</style>