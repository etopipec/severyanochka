<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel';
import { Typography } from '@/shared/typography';

import desktopBg from '@/assets/slide-1-bg.png';
import tabletBg from '@/assets/slide-1-bg-tablet.png';
import mobileBg from '@/assets/slide-1-bg-mobile.png';

const slides = [
  {
    background: {
      desktop: desktopBg,
      tablet: tabletBg,
      mobile: mobileBg,
    },
    text: 'Доставка бесплатно от 1000 ₽',
  },
  {
    background: {
      desktop: desktopBg,
      tablet: tabletBg,
      mobile: mobileBg,
    },
    text: 'Доставка платно',
  },
];
</script>

<template>
  <carousel class="carousel" :items-to-show="1" :wrapAround="true" :autoplay="3000">
    <slide v-for="slide in slides" :key="slide.text">
      <div class="slide">
        <picture>
          <source class="slide__background" :srcset="slide.background.mobile" media="(max-width: 767px)" />
          <source class="slide__background" :srcset="slide.background.tablet" media="(max-width: 1207px)" />
          <img class="slide__background" :src="slide.background.desktop" />
        </picture>
        <Typography class="slide__text" tagName="h2" bold>{{ slide.text }}</Typography>
      </div>
    </slide>
  </carousel>
</template>

<style scoped>
.slide {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
}

.slide__background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide__text {
  margin-left: 20%;
  user-select: none;
}

@media screen and (max-width: 1207px) {
  .slide {
    height: 160px;
  }

  .slide__text {
    font-size: 24px;
  }
}

@media screen and (max-width: 767px) {
  .slide {
    height: 80px;
  }

  .slide__text {
    margin-left: 0;
    font-size: 18px;
  }
}
</style>