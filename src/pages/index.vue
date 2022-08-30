<script setup>
  import { storeToRefs } from 'pinia';

  const store = useHomeStore();

  const { name } = storeToRefs(store);

  const { setName, boy } = store;

  name.value = 'Andy';
</script>

<template>
  <main>
    <TheWelcome />
    <h1
      text="red-900 42px"
      border="1px"
    >
      {{ name }}
    </h1>
    <div
      w-100px
      h-100px
      bg-red
      hover:w-200px
    ></div>
    <button @click="setName">Click</button>
  </main>
</template>
