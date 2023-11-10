<script lang="ts" setup>
import { Container } from '@/shared/container';
import { Logo } from '@/shared/logo';
import { Button } from '@/shared/button';
import { Icon } from '@/shared/icon';
import { Field } from '@/shared/field';
import { Typography } from '@/shared/typography';

const onChangeSearch = (value: string) => console.log(value); 
const onSearch = () => console.log('SEND TO SIRVIR');
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
      <div class="header__search">
        <Field
          placeholder="Найти товар"
          :onChange="onChangeSearch"
          :onSubmit="onSearch"
        >
           <template #rightIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z" fill="#414141"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4463 15.4464C15.6415 15.2512 15.9581 15.2512 16.1534 15.4464L21.3534 20.6464C21.5486 20.8417 21.5486 21.1583 21.3534 21.3535C21.1581 21.5488 20.8415 21.5488 20.6463 21.3535L15.4463 16.1535C15.251 15.9583 15.251 15.6417 15.4463 15.4464Z" fill="#414141"/>
            </svg>
          </template>
        </Field>
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

.header__search {
  width: 374px;
  margin-left: 16px;
}
</style>