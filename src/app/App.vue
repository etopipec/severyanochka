<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import { useScreenStore } from '@/entities/screen';

const screenStore = useScreenStore();
const { setPlatform } = screenStore;

const onResize = () => setPlatform(window.innerWidth);

onMounted(() => {
  setPlatform(window.innerWidth);
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <RouterView />
</template>
