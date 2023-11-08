<script lang="ts" setup>
import { Typography } from '@/shared/typography';

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error';
  decoration?: 'default' | 'outline' | 'none';
  size?: 'L' | 'M' | 'S';
  disabled?: boolean;
}

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
    <Typography class="button__text" tagName="p" size="s"><slot></slot></Typography>
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
</style>