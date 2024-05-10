<script setup lang="ts">
import { Icon } from "@/shared/icon";

interface Props {
  isLiked?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <button :class="['like', isLiked && 'is-liked']">
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

.like:hover {
  background: var(--peach-puff);
}

.like.is-liked {
  opacity: 1;
}
</style>