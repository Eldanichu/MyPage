<template>
  <header class="app-header">
    <div class="header-wrapper">
      <nav class="app-navi">
        <div class="app-title">
          Eldan Mir
        </div>
        <div class="app-pages">

        </div>
        <div class="app-settings">
          Settings
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style lang="scss" scoped>
.app-header {
  .header-wrapper {
    background-color: #262626;
    min-height: 4.6em;
    border-bottom: 1px solid #333333;
    display: flex;
    flex-direction: row;
    align-items: center;

    box-shadow: rgba(77, 77, 77, 0.2) 0px 2px 8px 0px;

    .app-navi {
      padding: 0 14px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;

      .app-title {
        flex-grow: 0.3;
        font-size: 1.8em;
        cursor: pointer;
        user-select: none;
      }

      .app-pages {
        flex-grow: 0.4;
        text-align: center;
      }

      .app-settings {
        flex-grow: 0.3;
        text-align: right;
      }
    }
  }

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
}
</style>