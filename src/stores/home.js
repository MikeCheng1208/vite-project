import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', () => {
  const name = ref('Jacky');

  const boy = reactive({ sex: 'boy123' });

  const setName = () => {
    name.value = 'Mike';
  };

  return {
    name,
    boy,
    setName,
  };
});
