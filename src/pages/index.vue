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
    color="#f00000"
    class-name="icon-50"
  />
  <SvgIcon
    name="home/Icon-community"
    color="#0f00f0"
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
  }
  .icon-80 {
    width: 50px;
    height: 50px;
  }
</style>
