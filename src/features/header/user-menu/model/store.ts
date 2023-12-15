import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { type Menu } from './types';

export const useUserMenuStore = defineStore('user-menu', () => {
  let menu = reactive<Menu>([
    { label: 'Профиль', link: '/profile' },
    { label: 'Выйти', action: 'logout' },
  ]);

  const setMenu = (newMenu: Menu) => menu = newMenu;

  return { menu, setMenu };
})
