<script setup lang="ts">
import { Typography } from '@/shared/typography';
import { Button } from '@/shared/button';
import article1PNG from "@/assets/article-1.png";

</script>

<template>
  <article class="article">
    <img :src="article1PNG" alt="Article"> 
    <div class="article__content">
      <Typography class="article__date" tagName="span" size="xs">05.03.2021</Typography>
      <Typography class="article__title" tagName="h5" size="xs" bold>
        Режим использования масок и перчаток на территории магазинов
      </Typography>
      <Typography class="article__description" tagName="p" size="s">
        Подробная информация о режимах использования масок и перчаток 
        на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.
      </Typography>
      <Button class="article__link" :color="'secondary-2'">Подробнее</Button>
    </div>
  </article>
</template>

<style scoped>
.article {
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--main-surface);
  transition: .3s ease-in-out;
}

.article:hover {
  box-shadow: var(--shadow-primary-m);
}

.article__content {
  display: grid;
  grid-gap: 10px;
  padding: 10px;
}

.article__date {
  color: var(--grayscale-hard);
}

.article__title {
  color: var(--main-on-surface);
}

.article__description {
  color: var(--main-on-surface);
}

.article__link {
  width: 150px;
}
</style>
