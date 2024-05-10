<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Like } from "@/features/like";
import { ProductCard } from "@/entities/product/card";
import { Typography } from "@/shared/typography";
import { Icon } from "@/shared/icon";
import { Badge } from "@/shared/badge";
import { type CardsProps, type Card } from "./types";

const { data } = defineProps<CardsProps>();
const emit = defineEmits<{
  (e: 'onChangeCard', product: Card): void
}>();
const { 
  title = "Не указан",
  listLinkText = "Не указан",
  listLinkHref = "/",
  items,
} = data;

const toggleLike = (product: Card) => {
  const p = {...product};
  p.isLiked = !p.isLiked;
  emit('onChangeCard', p);
};

</script>

<template>
<section class="cards">
  <div class="cards__header">
    <Typography class="header__title title" tagName="h3" bold>{{ title }}</Typography>
    <RouterLink class="header__link link" :to="listLinkHref">
      <Typography class="link__text" tagName="span" size="s">{{ listLinkText }}</Typography>
      <div class="link__icon">
        <Icon type="chevron" />
      </div>
    </RouterLink>
  </div>
  <div class="cards__list">
    <ProductCard v-for="(product, i) in items" :key="product.name + i" :data="product">
      <template #headerTopRight>
        <Like :isLiked="product.isLiked" @click="() => toggleLike(product)" />
      </template>
      <template v-if="product.sale" #headerBottomLeft>
        <Badge>-{{ product.sale }}%</Badge>
      </template>
    </ProductCard>
  </div>
</section>
</template>

<style scoped>
.cards__header {
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

.cards__list {
  margin-top: 40px;
}
</style>