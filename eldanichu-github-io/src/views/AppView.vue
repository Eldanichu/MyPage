<template>
  <header>

    <div class="wrapper">
      <nav class="">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
//nav a.router-link-exact-active {
//  color: var(--color-text);
//}
//
//nav a.router-link-exact-active:hover {
//  background-color: transparent;
//}

//nav a:first-of-type {
//  border: 0;
//}

@media (min-width: 1024px) {

}
</style>