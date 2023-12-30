<script setup lang="ts">
import { Header } from '@/widgets/header';
import { BottomTabNavigator } from '@/widgets/bottom-tab-navigator';
import { Footer } from '@/widgets/footer';
import { Content } from '@/shared/content';
</script>

<template>
  <Header />
  <BottomTabNavigator />
  <Content>
    <div style="display: flex; height: 100vh;">
      <img style="margin: 0 auto;" src="https://acdn.tinkoff.ru/static/pages/files/3a1b834d-6419-4ec3-9f13-d8d0dea4004b.png" />
    </div>
  </Content>
  <Footer />
</template>
