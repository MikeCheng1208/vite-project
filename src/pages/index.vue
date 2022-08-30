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
    <div></div>
    <button
      bg="blue-337ab7"
      text="white 20px"
      w="200px"
      h="50px"
      @click="setName"
    >
      Click
    </button>
  </main>
</template>
