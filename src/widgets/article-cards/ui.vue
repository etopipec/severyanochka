<script setup lang="ts">
import { ArticleCard } from '@/entities/article/card';
import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

import { type ArticlesProps } from './types';

const { info, items } = defineProps<ArticlesProps>();

</script>

<template>
  <div class="articles">
    <div class="articles__header">
      <Typography class="header__title title" tagName="h3" bold>{{ info.title }}</Typography>
      <RouterLink class="header__link link" :to="info.listLinkHref">
        <Typography class="link__text" tagName="span" size="s">{{ info.listLinkText }}</Typography>
        <div class="link__icon">
          <Icon type="chevron" />
        </div>
      </RouterLink>
    </div>
    <div class="articles__list">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  </div>
</template>

<style scoped>
.articles__header {
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

.articles__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-top: 40px;
}
</style>
