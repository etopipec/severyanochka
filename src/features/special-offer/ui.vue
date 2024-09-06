<script setup lang="ts">
import { Typography } from '@/shared/typography';
import { type Offer } from './types';

interface Props {
  info: Offer;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'onClick', offer: Offer): void
}>();
</script>

<template>
  <section class="special-offer" :style="`background-image: url(${props.info.background})`"
    @click="emit('onClick', props.info)">
    <Typography class="special-offer__title" tagName="h4" bold>{{ props.info.title }}</Typography>
    <Typography v-if="props.info.description" class="special-offer__description" tagName="span" size="s">{{
      props.info.description }}</Typography>
  </section>
</template>

<style scoped>
.special-offer {
  display: grid;
  align-content: flex-start;
  grid-gap: 6px;
  max-width: 584px;
  height: 200px;
  padding: 30px 40px;
  border-radius: 4px;
  overflow: hidden;
  background-size: 115%;
  background-position: 50% 50%;
  transition: .3s ease-in-out;
  user-select: none;
  cursor: pointer;
}

.special-offer:hover {
  box-shadow: 0 8px 16px rgba(202, 147, 96, .5);
}

.special-offer__title,
.special-offer__description {
  display: flex;
  width: 50%;
}

@media screen and (max-width: 1207px) {
  .special-offer {
    padding: 20px;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 52% 28%;
  }

  .special-offer:deep(.tag_h4) {
    font-size: 18px;
  }

  .special-offer:deep(.tag_span) {
    font-size: 12px;
  }
}


@media screen and (max-width: 767px) {
  .special-offer:deep(.tag_h4) {
    font-size: 20px;
  }

  .special-offer__title {
    width: 60%;
  }
}
</style>