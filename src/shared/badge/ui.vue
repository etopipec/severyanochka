<script setup lang="ts">
import { Typography } from "@/shared/typography";
</script>

<template>
  <div class="badge">
    <Typography tagName="span" size="s">
      <slot></slot>
    </Typography>
  </div>
</template>

<style scoped>
.badge {
  padding: 4px 8px;
  border-radius: 4px;
  background: var(--main-primary);
}

.badge:deep(.typography) {
  color: var(--main-on-primary);
  user-select: none;
}
</style>