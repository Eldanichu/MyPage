<template>
  <div class="game-slot">
    <div class="slot-warp">
      <a class="slot-object"
         @click.passive="onSlotClick($event)"
         @mouseenter="onSlotHover(true)"
         @mouseleave="onSlotHover(false)"
      >
        <div class="slot-tip" v-show="itemObject.showNumber">
          <span>{{ item.stacks }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        stacks: 0,
        name: '-',
        props: {}
      }
    }
  },
})

let {item} = props;

const itemObject = computed(()=>{
  return {
    data: item,
    showNumber: item.stacks > 0
  }
})

let isHover = ref(false);

const onSlotHover = (hover) => {
  isHover = hover;
}

const onSlotClick = (e) => {
  if (!isHover) {
    return;
  }
  console.log(e)
}

</script>
<style lang="scss">
.mouse-hover-object {
  $SlotSize: 32px;
  @mixin slot-size {
    height: $SlotSize;
    width: $SlotSize;
  }
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  display: block;
  @include slot-size;
  background-color: #313131;

  .slot-tip {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
    color: #4b8a49;
    margin: 0 4px;
  }
}
</style>
<style lang="scss" scoped>
$SlotSize: 32px;
@mixin slot-size {
  height: $SlotSize;
  width: $SlotSize;
}

.game-slot {
  @include slot-size;

  .slot-warp {
    position: relative;
    @include slot-size;
    overflow: hidden;
    border-radius: 4px;
    border: 1px #999999 solid;

    .slot-object {
      position: relative;
      display: block;
      @include slot-size;
      background-color: #313131;

      .slot-tip {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 12px;
        color: #4b8a49;
        margin: 0 4px;
      }
    }
  }

}
</style>