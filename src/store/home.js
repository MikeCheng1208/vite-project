import { reactive, ref } from "vue";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", () => {
  const name = ref("Mike");

  const family = reactive({
    people: [],
  });

  const setName = (str) => {
    name.value = str;
  };

  return {
    name,
    family,
    setName,
  };
});
