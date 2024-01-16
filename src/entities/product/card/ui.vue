<script setup lang="ts">
import { type Card } from "./types";

const { data } = defineProps<{ data: Card }>();
const { img, name = "Не указан" } = data;
</script>

<template>
  <article class="product-card">
    <div class="product-card__header header">
      <div class="top__right">
        <slot name="headerTopRight"></slot>
      </div>
      <slot name="headerTopLeft"></slot>
      <div class="bottom__left">
        <slot name="headerBottomLeft"></slot>
      </div>
      <img class="product-card__image" :src="img" />
    </div>
  </article>
</template>

<style scoped>
.product-card {
  width: max-content;
}

.product-card__header {
  position: relative;
  height: 160px;
}

.top__right {
  position: absolute;
  top: 8px;
  right: 8px;
}

.bottom__left {
  position: absolute;
  bottom: 10px;
  left: 8px;
}
</style>