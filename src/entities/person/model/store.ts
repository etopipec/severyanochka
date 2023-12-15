import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import avatarIMG from '@/assets/avatar.png';
import { type Person } from './types';

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(true);
  const person = reactive<Person>({
    name: 'Алексей',
    avatar: avatarIMG,
  });

  const setIsAuth = (value: boolean) => isAuth.value = value;

  return { isAuth, person, setIsAuth };
})
