<template>
  <main class="app-main">
    <div class="main-warp">
      <slot></slot>
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  height: 100%;

  .main-warp {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: inherit;
  }
}
</style>