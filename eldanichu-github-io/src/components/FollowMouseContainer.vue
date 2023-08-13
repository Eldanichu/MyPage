<template>
  <teleport to="body">
    <div class="follow-container"
         v-show="display"
         ref="follower">
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup>
import {computed, nextTick, onMounted, onUnmounted, reactive, ref} from "vue";

const props = defineProps({
  offset: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

let {x: mOffsetX = 0, y: mOffsetY = 0} = props.offset;

const follower = ref(null)

const position = reactive({
  y: '',
  x: ''
})

const display = computed(() => {
  return parseFloat(position.x) >= 0 && parseFloat(position.y) >= 0;
})

/**
 * The [childNodes] property returns all child elements with any node type.
 * To get the child element with only the element node type, you use the [children] property:
 */
// [Dom Object].children

/**
 *  to get the first child with the Element node only,
 *  you can use the [(first | last)ElementChild] property
 */
// [Dom Object].firstElementChild
let {width: cw, height: ch} = document.body.getBoundingClientRect();

const useDocumentMouseMove = (e) => {
  let {clientX, clientY} = e;
  position.x = clientX + 'px';
  position.y = clientY + 'px';

  let {firstElementChild} = follower.value
  let {width, height} = firstElementChild.getBoundingClientRect();
  firstElementChild.style.position = 'absolute'

  if ((clientX + width) >= cw) {
    firstElementChild.style.left = clientX - width - mOffsetX + 'px'
  } else {
    firstElementChild.style.left = clientX + mOffsetX + 'px'
  }

  if ((clientY + height) >= ch) {
    firstElementChild.style.top = clientY - height - mOffsetY + 'px'
  } else {
    firstElementChild.style.top = clientY + mOffsetY + 'px'
  }
}


onMounted(() => {
  nextTick(() => {
    document.addEventListener('mousemove', useDocumentMouseMove)
  })
})

onUnmounted(() => {
  document.removeEventListener('mousemove', useDocumentMouseMove)
})
</script>

<style scoped>

</style>