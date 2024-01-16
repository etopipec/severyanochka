<script setup lang="ts">
import { reactive } from "vue"
import { Header } from "@/widgets/header";
import { BottomTabNavigator } from "@/widgets/bottom-tab-navigator";
import { Footer } from "@/widgets/footer";
import { Cards, type CardsProps } from "@/widgets/cards";
import { MainCarousel } from "@/features/main-carousel";
import { Content } from "@/shared/content";
import { Container } from "@/shared/container";

import product1PNG from "@/assets/product-1.png";

const saleCards = reactive<CardsProps>({
  data: {
    title: "Акции",
    listLinkText: "Все акции",
    listLinkHref: "/",
    items: [
      {
        img: product1PNG,
        name: "Г/Ц Блинчики с мясом вес, Россия",
        sale: 50,
      }
    ]
  }
});
</script>

<template>
  <Header />
  <BottomTabNavigator />
  <Content>
    <MainCarousel />
    <Container :style="{ margin: '80px auto' }">
      <Cards :data="saleCards.data" />
    </Container>
  </Content>
  <Footer />
</template>
