<script lang="ts" setup>
import { useSlots } from 'vue';
import { Typography } from '@/shared/typography';

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error';
  decoration?: 'default' | 'outline' | 'none';
  size?: 'L' | 'M' | 'S';
  disabled?: boolean;
}

const slots = useSlots();
const props = defineProps<Props>();
const {
  color = 'primary',
  decoration = 'default',
  size = 'M',
  disabled = false,
} = props;

const classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`];
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"></slot>
    <Typography v-if="slots.default" class="button__text" tagName="p" size="s"><slot></slot></Typography>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button__text {
  width: 100%;
  text-align: center;
}

.button.size_M {
  grid-gap: 8px;
  padding: 8px;
}

.button.color_secondary {
  background-color: var(--main-secondary);
  color: var(--main-on-secondary);
}

.button.decoration_none {
  background-color: unset;
  border-color: unset;
}

.button.decoration_none:deep(path) {
  fill: var(--main-on-surface);
}
</style>