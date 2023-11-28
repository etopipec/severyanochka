<script lang="ts" setup>
import { ref } from 'vue';
import { usePersonStore } from '@/entities/person';
import { RouterLink } from 'vue-router';
import { Avatar } from '@/shared/avatar';
import { Typography } from '@/shared/typography';
import { Button } from '@/shared/button';
import { Icon } from '@/shared/icon';

interface Props {
  data: {
    avatar: string;
    name: string;
    menu: { label: string; link: string; action: string }[];
  }
}

const personStore = usePersonStore();
const { setIsAuth } = personStore;

const { data } = defineProps<Props>();

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const onClickItem = (action: string) => {
  if (action === 'logout') {
    setIsAuth(false);
  }
};
</script>

<template>
  <div :class="['user-menu', `is-open_${isOpen}`]">
    <Avatar class="user-menu__avatar" :img="data.avatar" @click="toggleMenu" />
    <Typography class="user-menu__name" tagName="span" size="s" @click="toggleMenu">{{ data.name }}</Typography>
    <Button class="user-menu__button" decoration='none' @click="toggleMenu">
      <template v-slot:leftIcon>
        <Icon type="chevron" />
      </template>
    </Button>
    <ul v-if="isOpen" class="user-menu__list">
      <li v-for="item in data.menu" :key="item.label" class="list__item">
        <RouterLink v-if="item.link" :to="item.link" class="item__link">
          <Typography
            tagName="span"
            size="m"
            class="item__text"
          >{{ item.label }}</Typography>
        </RouterLink>
        <Typography
          v-else
          tagName="span"
          size="m"
          class="item__text"
          @click="() => onClickItem(item.action)"
        >{{ item.label }}</Typography>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  grid-gap: 10px;
  padding: 8px;
  border-radius: 4px;
}

.user-menu.is-open_true {
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.user-menu__avatar,
.user-menu__name,
.user-menu__button {
  cursor: pointer;
}

.user-menu__list {
  display: grid;
  grid-gap: 10px;
  grid-column: 1 / 4;
}

.list__item {
  padding: 8px;
  user-select: none;
  cursor: pointer;
}

.item__link {
  text-decoration: none;
}
</style>