<script lang="ts" setup>
import { useSlots } from 'vue';

interface Props {
  onChange: () => string;
  onSubmit: () => void;
  disabled?: boolean;
  size?: 'm' | 'l';
  placeholder?: string;
}

const slots = useSlots();
const props = defineProps<Props>();
const { disabled = false, size = 'm', placeholder = '', onSubmit = () => {} } = props;
</script>

<template>
  <div :class="[
    'field', 
    `disabled_${disabled}`, 
    `size_${size}`, 
    `left-icon_${Boolean(slots.leftIcon)}`,
    `right-icon_${Boolean(slots.rightIcon)}`
  ]">
    <slot name="label"></slot>
    <div class="field__container">
      <div v-if="slots.leftIcon" class="field__left-icon" @click="onSubmit">
        <slot name="leftIcon"></slot>
      </div>
      <input
        class="field__input"
        type="text"
        @input="(input) => onChange(input.target.value)"
        @keyup.enter="onSubmit"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <div v-if="slots.rightIcon" class="field__right-icon" @click="onSubmit">
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field:deep(.typography) {
  color: var(--grayscale-hard);
}

.field__container {
  position: relative;
}

.field__right-icon,
.field__left-icon {
  position: absolute;
  cursor: pointer;
}

.field__input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background: var(--main-surface);
  color: var(--main-on-surface);
  transition: .3s ease-in-out;
}

.field__input:focus {
  border: 1px solid var(--main-secondary);
  box-shadow: var(--shadow-secondary-m);
  caret-color: var(--main-secondary);
}

.field__input:disabled {
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background: var(--grayscale-lightest);
}

.field__input::placeholder {
  color: var(--grayscale-hard);
}

.field.size_m .field__input {
  padding: 8px 16px;
  font-size: 16px;
}

.field.size_l .field__input {
  padding: 12px 16px;
  font-size: 24px;
}

.field.left-icon_true.size_m .field__left-icon {
  top: 8px;
  left: 8px;
}

.field.left-icon_true.size_m .field__input {
  padding-left: 40px;
}

.field.right-icon_true.size_m .field__right-icon {
  top: 8px;
  right: 8px;
}

.field.right-icon_true.size_m .field__input {
  padding-right: 40px;
}


.field.left-icon_true.size_l .field__left-icon {
  top: 8px;
  left: 8px;
  padding: 6px;
}

.field.left-icon_true.size_l .field__input {
  padding-left: 56px;
}

.field.right-icon_true.size_l .field__right-icon {
  top: 8px;
  right: 8px;
  padding: 6px;
}

.field.right-icon_true.size_l .field__input {
  padding-right: 56px;
}
</style>