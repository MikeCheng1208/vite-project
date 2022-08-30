<script setup>
  defineProps({
    msg: {
      type: String,
      required: true,
    },
  });
  const name = reactive({ name: 'mike' });
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} => {{ name }}</h1>
    <h3>
      You’ve successfully created a project with
      <a
        target="_blank"
        href="https://vitejs.dev/"
        >Vite</a
      >
      +
      <a
        target="_blank"
        href="https://vuejs.org/"
        >Vue 3</a
      >.
    </h3>
  </div>
</template>

<style scoped></style>
