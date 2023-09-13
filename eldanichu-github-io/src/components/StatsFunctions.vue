<template>
  <div class="stat-func">
    <div class="func-buttons">
      <div class="f-button" v-for="item in funcButtons" :key="item.value">
        <n-button
          v-bind="buttonBinding(item)"
          @click="funcClick(item)">{{ item.label }}
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref, watch} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['sfClick', 'update:modelValue'])


const comName = ref('');
watch(() => props.modelValue, (v) => {
  comName.value = v;
}, {
  immediate: true
})
const buttonBinding = function (item) {
  return item.value === comName.value ? {color: '#7fe7c4'} : null
}


const funcButtons = ref([
  {label: '人物', value: 'char'},
  {label: '技能', value: 'skill'},
  {label: '连击', value: 'combo'},
  {label: '属性', value: 'preference'},
  {label: '英雄', value: 'hero'},
  {label: '合击', value: 'co-skill'},
])

const funcClick = function ({value}) {
  comName.value = comName.value === value ? '' : value;
  emits('sfClick', {value})
  emits('update:modelValue', value);
}

</script>

<style lang="scss" scoped>
.stat-func {
  max-height: 9em;

  .func-buttons {
    display: grid;
    gap: 8px;
    margin: 8px;
    padding: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    border: #999999 1px dashed;
    justify-items: center;

  }
}
</style>