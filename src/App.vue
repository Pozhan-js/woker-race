<template>
  <router-view />
</template>
<script setup lang="ts"></script>

<style>
  :root:root {
    --van-divider-font-size: 1rem;
    --van-divider-content-left-width: 0%;
    --van-divider-content-right-width: 100%;
    --van-divider-border-color: #bebebe;
    --van-divider-content-padding: 0;
    --van-divider-margin: 10px 0;
    --van-divider-vertical-margin: 0;
  }
  /* 添加这段样式后，Primary Button 会变成红色 */

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
