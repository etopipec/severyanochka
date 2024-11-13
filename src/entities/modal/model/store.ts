import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type ModalStore } from './types';

export const useModalStore = defineStore('modal', () => {
  const modals = ref<ModalStore>([]);

  const modalItems = computed(() => modals.value);

  const addModal = (modalName: string) => {
    if (modalItems.value.includes(modalName)) return;
    modals.value = [...modals.value, modalName];
  };

  const closeModal = (modalName: string) => {
    modals.value = modals.value.filter(modal => modal != modalName);
  };

  return { modalItems, modals, addModal, closeModal };
})

