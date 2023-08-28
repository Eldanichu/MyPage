<script setup lang="jsx">
import {h, ref, inject} from "vue";
import GameSlot from "@/components/GameSlot.vue";
import StatsFunctions from "@/components/StatsFunctions.vue";

const db = inject('DB');
const mi = inject('MI');

mi.setOffset({
  x: 24
})

mi.setItem({
  stacks: 0
})
// console.log('game data ->', db)

</script>

<template>
  <div class="main-view">
    <div class="container">
      <div class="aside">
        <stats-functions></stats-functions>
      </div>
      <div class="header">
        header
      </div>
      <div class="content">
        content
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-view {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px #666666 solid;
  margin: 2px;
  border-radius: 8px;

  .container {
    flex-grow: 1;
    display: grid;
    grid-template-rows: 110px repeat(3,1fr);
    grid-template-columns: 25em repeat(5,1fr);
    margin: 0 auto;
    overflow-y: auto;

    .aside {
      grid-area: side;
      grid-row-start: 1;
      grid-row-end: span 5;
      grid-column-start: 1;
      grid-column-end: 1;
      border-right: 1px #666666 solid;
    }

    .header {
      grid-row-start: 1;
      grid-column-start: 2;
      grid-column-end: 9;
      border-bottom: 1px #666666 solid;
      padding: 0 6px;
    }

    .content {
      grid-column: 2 / 9;
      grid-row: 2 / 5;
      padding: 0 6px;
    }
  }
}


</style>