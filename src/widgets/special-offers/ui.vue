<script setup lang="ts">
import { Typography } from "@/shared/typography";
import { SpecialOffer, type Offer } from "@/features/special-offer";

interface SpecialOffersProps {
  items: Offer[];
  info: {
    title: string;
  }
}

const props = defineProps<SpecialOffersProps>();
const emit = defineEmits<{
  (e: 'onClickOffer', offer: Offer): void
}>();
</script>

<template>
  <section class="special-offers">
    <div class="special-offers__header">
      <Typography class="header__title title" tagName="h3" bold>{{ props.info.title }}</Typography>
    </div>
    <div class="special-offers__list">
      <SpecialOffer v-for="(offer, i) in props.items" :key="offer.title + i" :info="offer"
        @onClick="(o) => emit('onClickOffer', o)" />
    </div>
  </section>
</template>

<style scoped>
.special-offers__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.link__icon {
  transform: rotate(-90deg);
}

.header__link {
  display: flex;
  align-items: center;
  grid-gap: 8px;
  padding: 8px;
}

.special-offers__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
}

@media screen and (max-width: 767px) {
  .special-offers__list {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    margin-top: 24px;
  }
}
</style>