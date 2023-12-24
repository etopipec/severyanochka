<template>
  <main class="main"><slot></slot></main>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 126px - 72px);
}

@media screen and (max-width: 767px) {
  .main {
    min-height: calc(100vh - 262px - 72px);
  }
}
</style>