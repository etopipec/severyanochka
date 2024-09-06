<script setup lang="ts">
import { ref } from "vue"
import { Header } from "@/widgets/header";
import { BottomTabNavigator } from "@/widgets/bottom-tab-navigator";
import { Footer } from "@/widgets/footer";
import { Cards, type Card } from "@/widgets/cards";
import { SpecialOffers } from "@/widgets/special-offers";
import { ShopsMap, type Shop } from "@/widgets/shops-map";
import { MainCarousel } from "@/features/main-carousel";
import { type Offer } from "@/features/special-offer";
import { Content } from "@/shared/content";
import { Container } from "@/shared/container";

import product1PNG from "@/assets/product-1.png";
import specialOffer1PNG from "@/assets/special-offer-1.png";
import specialOffer2PNG from "@/assets/special-offer-2.png";

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

const specialOffersInfo = ref({
  title: "Специальные предложения",
});

const specialOffers = ref<Offer[]>([
  {
    title: "Оформите карту «Северяночка»",
    description: "И получайте бонусы при покупке в магазинах и на сайте",
    background: specialOffer1PNG,
  },
  {
    title: "Покупайте акционные товары",
    description: "И получайте вдвое больше бонусов",
    background: specialOffer2PNG,
  }
]);

const shopsInfo = ref({
  title: "Наши магазины",
});

const shops = ref<Shop[]>([
  {
    id: 0,
    name: "п.Щельяюр",
    checked: true,
  },
  {
    id: 1,
    name: "д.Вертеп",
    checked: false,
  },
  {
    id: 2,
    name: "с.Краснобор",
    checked: false,
  },
  {
    id: 3,
    name: "д.Диюр",
    checked: false,
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

const onClickOffer = (offer: Offer) => {
  console.log(offer);
};

const onClickShop = (shop: Shop) => {
  shops.value = shops.value.map(s => ({ ...s, checked: s.id === shop.id }));
};
</script>

<template>
  <Header />
  <BottomTabNavigator />
  <Content>
    <MainCarousel />
    <Container class="section sale-cards">
      <Cards :info="saleInfo" :items="saleItems" @onChangeCard="(p) => onChangeItem(p, 'sale')" />
    </Container>

    <Container class="section">
      <Cards :info="newInfo" :items="newItems" @onChangeCard="(p) => onChangeItem(p, 'new')" />
    </Container>

    <Container class="section">
      <Cards :info="boughtEarlierInfo" :items="boughtEarlierItems" @onChangeCard="(p) => onChangeItem(p, 'earlier')" />
    </Container>

    <Container class="section">
      <SpecialOffers :info="specialOffersInfo" :items="specialOffers" @onClickOffer="onClickOffer" />
    </Container>

    <Container class="section">
      <ShopsMap :info="shopsInfo" :items="shops" @onClick="onClickShop" />
    </Container>
  </Content>
  <Footer />
</template>

<style scoped>
.section {
  margin: 80px auto;
}

@media screen and (max-width: 767px) {
  .sale-cards {
    margin-top: 40px;
  }
}
</style>