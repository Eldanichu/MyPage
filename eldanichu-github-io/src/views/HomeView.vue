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

  .eld-button {
    min-width: 80px;
    transition: min-width 0.4s ease-in-out,
    background-color 0.5s 0.3s;

    .button__text {
      transition: all 0.9s ease-in-out,
      opacity 1.1s;
      display: inline-block;
      transform: translateX(-100%);
      opacity: 0;
    }

    &:hover {
      min-width: 300px;
      background-color: #999999;

      .button__text {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  .eld-input {
    position: relative;
    display: flex;

    .input__label {
      position: absolute;
      font-size: 14px;
      margin-left: 5px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: font-size 0.2s ease-out,
      all 0.1s 0.2s,
      color 0.1s 0.1s;
    }

    .input__scale-line {
      display: inline-block;
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 0;
      //animation: full-width 0.2s ease-in-out;
      //animation-play-state: revert;
    }

    .input__text {
      background-color: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #666666;
      padding: 5px 10px;
      padding-top: 15px;
      transition: all 0.2s ease-in-out,
      border-bottom-color 0.2s 0.3s;
      color: #fff;
      position: relative;
      overflow: hidden;
      flex-grow: 1;

      &:focus {

        ~ .input__label {
          font-size: 12px;
          color: #4d8299;
          top: 0;
          transform: translateY(0);
        }

        + .input__scale-line {
          //width: 100%;
          animation: full-width 0.2s ease-in-out forwards;
          background-color: #4d8299;
        }
      }
    }

  }

  @media screen and (max-width: 1024px) {
    .container {
      grid-template-areas:
      "n n n"
      "h c c"
      "h c c" !important;
      grid-auto-rows: 1fr 1fr 2fr !important;
    }
  }

  .container {
    flex-grow: 1;
    display: grid;
    margin: 0 auto;
    grid-template-areas:
      "n h h"
      "n c c"
      "n c c";
    grid-template-columns: minmax(220px, 1fr) minmax(300px, 3fr);
    grid-auto-rows: 110px 2fr 70px;
    gap: 4px;

    .aside,
    .header,
    .content {
      padding: 8px 10px;
      background-color: #1b191c;


    }

    .aside {
      grid-area: n;
      animation: slide-in-out 0.3s ease-in-out;
      animation-fill-mode: both;
      animation-delay: 0.3s;

    }

    .header {
      grid-area: h;
    }

    .content {
      grid-area: c;
    }
  }


}

@keyframes slide-in-out {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes full-width {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>