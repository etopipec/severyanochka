<script lang="ts" setup>

</script>

<template>
  <div class="modal-container">
    <div class="modal-container__background"></div>
    <div class="modal">
      <button class="modal__close"></button>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
