<script setup>
import {ref, inject} from "vue";
import {Timer} from "@/Utils/Timer";
import SpritePlayer from "@/components/SpritePlayer.vue";
import {tileset_legacy} from "@/assets/AssetsImporter";


const game = inject('game')
console.log(game.value)

const remains = ref(0)


let ani = new Timer({duration: 3});
ani.onUpdate = (now, elpase) => {
  remains.value = elpase;
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
  <div class="home-warp">
    <sprite-player
        :src="tileset_legacy"
        :size="17"
    ></sprite-player>
  </div>
</template>

<style scoped lang="scss">

</style>