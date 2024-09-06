<script setup lang="ts">
import { Typography } from "@/shared/typography";
import { Button } from "@/shared/button";

import { type Shop } from "./types";

import mapIMG from "@/assets/mock-map.png";

interface Props {
  info: {
    title: string;
  };
  items: Shop[];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'onClick', shop: Shop): void
}>();
</script>

<template>
  <section class="shops-map">
    <div class="shops-map__header">
      <Typography class="header__title title" tagName="h3" bold>{{ props.info.title }}</Typography>
    </div>
    <div class="shops-map__controls">
      <Button v-for="shop in props.items" :color="shop.checked ? 'secondary' : 'grayscale'" :size="'S'"
        @click="() => emit('onClick', shop)">
        {{ shop.name }}
      </Button>
    </div>
    <div class="shops-map__map">
      <img :src="mapIMG" alt="map">
    </div>
  </section>
</template>

<style scoped>
.shops-map__controls {
  display: flex;
  justify-content: flex-start;
  grid-gap: 16px;
  width: max-content;
  margin-top: 32px;
}

.shops-map__map {
  margin-top: 16px;
}

.shops-map__map img {
  width: 100%;
}
</style>