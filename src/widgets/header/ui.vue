<script lang="ts" setup>
import { Container } from '@/shared/container';
import { Logo } from '@/shared/logo';
import { Button } from '@/shared/button';
import { Icon } from '@/shared/icon';
</script>

<template>
  <header class="header">
    <Container class="header__container">
      <Logo orientation="horizontal" bgColor="white" colorful withText />
      <div class="header__catalog">
        <Button color="secondary">
          <template v-slot:leftIcon>
            <Icon type="menu" />
          </template>
          Каталог
        </Button>
      </div>
    </Container>
  </header>
</template>

<style scoped>
.header__container {
  display: flex;
  align-items: center;
  height: 72px;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  background: var(--surface);
  box-shadow: var(--shadow-default-s);
}

.header__catalog {
  width: 140px;
  margin-left: 40px;
}
</style>