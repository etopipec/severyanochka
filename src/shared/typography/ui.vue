<script lang="ts" setup>
interface Props {
  tagName: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  bold?: boolean;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const props = defineProps<Props>();
</script>

<template>
  <component :is="props.tagName"
    :class="['typography', size ? `size_${size}` : '', bold ? 'bold' : '', `tag_${tagName}`]">
    <slot></slot>
  </component>
</template>

<style scoped>
.typography {
  font-style: normal;
  line-height: 150%;
  color: var(--main-on-surface);
}

.bold {
  font-weight: 700;
}

.size_xs {
  font-size: 12px;
}

.size_s {
  font-size: 16px;
}

.size_m {
  font-size: 18px;
}

.size_l {
  font-size: 24px;
}

.size_xl {
  font-size: 36px;
}

.tag_h1 {
  font-size: 64px;
}

.tag_h2 {
  font-size: 48px;
}

.tag_h3 {
  font-size: 36px;
}

.tag_h4 {
  font-size: 24px;
}

.tag_h5 {
  font-size: 18px;
}

@media screen and (max-width: 767px) {
  .size_xs {
    font-size: 8px;
  }

  .size_s {
    font-size: 12px;
  }

  .size_m {
    font-size: 14px;
  }

  .size_l {
    font-size: 20px;
  }

  .size_xl {
    font-size: 32px;
  }

  .tag_h1 {
    font-size: 48px;
  }

  .tag_h2 {
    font-size: 36px;
  }

  .tag_h3 {
    font-size: 24px;
  }

  .tag_h4 {
    font-size: 20px;
  }

  .tag_h5 {
    font-size: 16px;
  }
}
</style>