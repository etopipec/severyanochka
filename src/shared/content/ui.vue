<script setup lang="ts">
import { Modals } from "@/widgets/modals";
import { useModalStore } from '@/entities/modal';

const modalStore = useModalStore();
const { modalItems } = modalStore;
</script>

<template>
  <main class="main">
    <slot></slot>
    <Modals :items="modalItems" />
  </main>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 126px - 72px);
}

@media screen and (max-width: 767px) {
  .main {
    min-height: calc(100vh - 262px - 72px);
  }
}
</style>
