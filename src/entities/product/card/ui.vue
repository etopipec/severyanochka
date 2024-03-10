<script setup lang="ts">
import { ref } from "vue";
import { formatCurrency } from "@/app/helpers";
import { Rating } from "@/shared/rating";
import { Button } from "@/shared/button";
import { type Card } from "./types";

const props = defineProps<{ data: Card }>();
const {
  img,
  name = "Не указан",
  price,
  priceWithSale,
} = props.data;

const isHovered = ref(false);
</script>

<template>
  <article
    class="product-card"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
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
    <div class="product-card__body">
      <div class="product-card__price">
        <strong class="price__sale">{{ formatCurrency(priceWithSale) }} ₽</strong>
        <span class="price__default">{{ formatCurrency(price) }} ₽</span>
        <span class="price__label">С картой</span>
        <span class="price__label">Обычная</span>
      </div>
      <h5 class="product-card__name">Г/Ц Блинчики с мясом вес, Россия</h5>
      <Rating :value="2" />
      <Button
        :color="isHovered ? 'primary' : 'secondary'"
        :decoration="isHovered ? 'default' : 'outline'"
        :count="props.data.count"
      >
        <template v-slot:leftIcon>
          <Icon type="minus" />
        </template>
        В корзину
        <template v-slot:rightIcon>
          <Icon type="plus" />
        </template>
      </Button>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  width: 272px;
  background-color: var(--main-on-primary);
  transition: .3s ease-in-out;
}

.product-card:hover {
  box-shadow: var(--shadow-primary-m);
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

.product-card__body {
  display: grid;
  grid-gap: 8px;
  padding: 8px;
}

.product-card__price {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  align-items: center;
}

.price__sale {
  font-weight: 700;
  font-size: 18px;
  color: var(--main-on-surface);
}

.price__default {
  text-align: right;
  font-weight: 400;
  font-size: 16px;
  color: var(--grayscale-hardest);
}

.price__label {
  font-weight: 400;
  font-size: 12px;
  color: var(--grayscale-light);
}

.price__label:last-child {
  text-align: right;
}

.product-card__name {
  font-weight: 400;
  font-size: 16px;
  color: var(--main-on-surface);
}
</style>