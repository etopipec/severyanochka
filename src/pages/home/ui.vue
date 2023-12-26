<script setup lang="ts">
import { Header } from '@/widgets/header';
import { BottomTabNavigator } from '@/widgets/bottom-tab-navigator';
import { Footer } from '@/widgets/footer';
import { Content } from '@/shared/content';
</script>

<template>
  <Header />
  <BottomTabNavigator />
  <Content>DOCKER TEST</Content>
  <Footer />
</template>
