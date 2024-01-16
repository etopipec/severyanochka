<script setup lang="ts">
import { Icon } from "@/shared/icon";
</script>

<template>
  <button class="like">
    <Icon type="favorite" />
  </button>
</template>

<style scoped>
.like {
  display: flex;
  padding: 8px;
  border: none;
  border-radius: 4px;
  opacity: 0.5;
  background: var(--grayscale-lightest);
  cursor: pointer;
}
</style>