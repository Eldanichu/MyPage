<template>
  <div class="sprite-warp">
    <div :class="['sprites-player',playDir]"
         :style="{backgroundImage:`url(${imageUrl})`}"
    ></div>
  </div>
</template>

<script setup>
import {Framerator} from "@/Utils/Framerator";
import {ref, defineProps, computed} from "vue";
import {tileset_legacy} from "@/assets/AssetsImporter";

const props = defineProps({
  src: {
    type: String,
    default: '#',
    required: true
  },
  size: {
    type: [String, Number],
    default: 16
  },
  startPosition: {
    type: Number,
    default: 0
  },
  fps: {
    type: [String, Number],
    default: 6
  },
  viewWidth: {
    type: [String, Number],
    default: 16
  },
  viewHeight: {
    type: [String, Number],
    default: 16
  },
  direction: {
    type: String,
    default: 'h'
  }
})

const playDir = computed(() => {
  return props.direction
})

const imageUrl = computed(() => {

  return tileset_legacy
});

const bgPosition = computed(() => {
  return (props.startPosition * props.size) + 'px'
})

const imageSize = props.size + 'px';

let player = new Framerator();

const offset = ref('');

player.onUpdate = (f) => {
  offset.value = (f * props.size) + 'px';

}

player.start()
</script>

<style lang="scss" scoped>
$start-position: v-bind('bgPosition');
$current-position: calc(v-bind('offset') * -1);
$image-size: v-bind('imageSize');

.sprite-warp {
  position: relative;

  .sprites-player {
    background-repeat: no-repeat;
    width: $image-size;
    height: $image-size;

    &.h {
      background-position-x: $current-position;
      background-position-y: $start-position;
    }

    &.v {
      background-position-x: $start-position;
      background-position-y: $current-position;
    }
  }
}
</style>