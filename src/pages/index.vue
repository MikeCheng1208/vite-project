<script setup>
  import { storeToRefs } from 'pinia';
  import { useHomeStore } from '@/store/home.js';

  const homeStore = useHomeStore();
  const { setName, family } = homeStore;
  const { name } = storeToRefs(homeStore);

  setName('123');
</script>

<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  />
  {{ name }}
  <pre>
    {{ family }}
  </pre>
  <SvgIcon
    name="btn-close"
    class-name="icon-50"
  />
  <SvgIcon
    name="home/Icon-community"
    class-name="icon-80"
  />
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .icon-50 {
    width: 50px;
    height: 50px;
    fill: #c9d7e1;
  }
  .icon-80 {
    width: 50px;
    height: 50px;
    fill: #dd00dd;
  }
</style>
