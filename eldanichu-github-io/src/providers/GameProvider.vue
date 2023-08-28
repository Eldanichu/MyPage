<template>
  <slot></slot>
</template>

<script setup>
import loadsh from 'lodash/function'
import {provide, reactive} from "vue";
import {dataLoader} from "@/Utils/DataLoader";

const emit = defineEmits(['loading']);

const promises = [
  {name: '物品', key: 'items', req: dataLoader("Items")},
  {name: '技能', key: 'skills', req: dataLoader("Skills")},
  {name: '怪物', key: 'monsters', req: dataLoader("Monsters")},
]

const emitMsg = reactive({
  show: true,
  name: '-/-',
  index: 0,
  total: promises.length
})

emit('loading', emitMsg)

const db = reactive({
  items: null,
  monsters: null,
  skills: null
});

const onFinished = () => {
  emitMsg.show = !(emitMsg.index >= emitMsg.total);
}

const delay = 200;

const delayedExec = (res, name, key, time) => {
  loadsh.delay(() => {
    db[key] = res;
    emitMsg.name = name;
    emitMsg.index++;

    onFinished()
    emit('loading', emitMsg);
  }, time)
}

promises.reduce((pre, item, index) => {
  item.req.then(res => {
    delayedExec(res, item.name, item.key, delay * (index + 1))
  })
}, [])

provide('DB', db)
</script>