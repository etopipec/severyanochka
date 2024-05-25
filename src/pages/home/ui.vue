<script setup lang="ts">
import { ref } from "vue"
import { Header } from "@/widgets/header";
import { BottomTabNavigator } from "@/widgets/bottom-tab-navigator";
import { Footer } from "@/widgets/footer";
import { Cards, type Card } from "@/widgets/cards";
import { MainCarousel } from "@/features/main-carousel";
import { Content } from "@/shared/content";
import { Container } from "@/shared/container";

import product1PNG from "@/assets/product-1.png";

const saleInfo = ref({
  title: "Акции",
  listLinkText: "Все акции",
  listLinkHref: "/",
});

const saleItems = ref<Card[]>([
  {
    id: 0,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 3,
    isLiked: true,
  },
  {
    id: 1,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
  {
    id: 2,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 1,
    isLiked: true,
  },
  {
    id: 3,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
]);

const newInfo = ref({
  title: "Новинки",
  listLinkText: "Все новинки",
  listLinkHref: "/",
});

const newItems = ref<Card[]>([
  {
    id: 0,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
  {
    id: 1,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
  {
    id: 2,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
  {
    id: 3,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
]);

const boughtEarlierInfo = ref({
  title: "Покупали раньше",
  listLinkText: "Все покупки",
  listLinkHref: "/",
});

const boughtEarlierItems = ref<Card[]>([
  {
    id: 0,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
  {
    id: 1,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
  {
    id: 2,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
  {
    id: 3,
    img: product1PNG,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    sale: 50,
    price: 50.50,
    priceWithSale: 44.50,
    count: 0,
    isLiked: true,
  },
]);

const onChangeItem = (product: Card, category: "sale" | "new" | "earlier") => {
  let categoryItems;
  switch (category) {
    case "sale":
      categoryItems = saleItems;
      break;
    case "new":
      categoryItems = newItems;
      break;
    case "earlier":
      categoryItems = boughtEarlierItems;
      break;
  }
  categoryItems.value = categoryItems.value.map(item => item.id === product.id ? product : item);
};
</script>

<template>
  <Header />
  <BottomTabNavigator />
  <Content>
    <MainCarousel />
    <Container :style="{ margin: '80px auto' }">
      <Cards
        :info="saleInfo"
        :items="saleItems"
        @onChangeCard="(p) => onChangeItem(p, 'sale')" 
      />
    </Container>

    <Container :style="{ margin: '80px auto' }">
      <Cards
        :info="newInfo"
        :items="newItems"
        @onChangeCard="(p) => onChangeItem(p, 'new')" 
      />
    </Container>

    <Container :style="{ margin: '80px auto' }">
      <Cards
        :info="boughtEarlierInfo"
        :items="boughtEarlierItems"
        @onChangeCard="(p) => onChangeItem(p, 'earlier')" 
      />
    </Container>
  </Content>
  <Footer />
</template>
