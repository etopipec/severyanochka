<script lang="ts" setup>
import { useSlots, computed } from 'vue';
import { Typography } from '@/shared/typography';

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error';
  decoration?: 'default' | 'outline' | 'none';
  size?: 'L' | 'M' | 'S';
  disabled?: boolean;
  count?: number;
}

const slots = useSlots();
const props = withDefaults(defineProps<Props>(), {
  count: 0,
});

const classes = computed(() => 
  [
    'button', 
    `size_${props.size || 'M'}`, 
    `decoration_${props.decoration}`, 
    `color_${props.color}`,
  ]);
</script>

<template>
  <button :class="classes" :disabled="props.disabled">
    <slot name="leftIcon"></slot>
    <Typography v-if="slots.default" class="button__text" tagName="p" size="s">
      <slot v-if="count <= 0"></slot>
      <span v-else>{{ count }}</span>
    </Typography>
    <slot name="rightIcon"></slot>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
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

.button.color_secondary { background-color: var(--main-secondary); }

.button.color_secondary .button__text { color: var(--main-on-secondary); }

.button.color_primary { background: var(--main-primary); }

.button.color_primary .button__text { color: var(--main-on-primary); }

.button.decoration_none {
  background-color: unset;
  border-color: unset;
}

.button.decoration_none:deep(path) {
  fill: var(--main-on-surface);
}

.button.decoration_outline {
  background-color: unset;
}

.button.decoration_outline.color_secondary {
  border: 1px solid var(--main-secondary);
}

.button.decoration_outline.color_secondary .button__text {
  color: var(--main-secondary);
}
</style>