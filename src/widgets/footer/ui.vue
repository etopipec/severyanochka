<script setup lang="ts">
import { reactive } from 'vue';
import { Container } from '@/shared/container';
import { Logo } from '@/shared/logo';
import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

const links = reactive([
  { label: 'О компании', href: '/' },
  { label: 'Контакты', href: '/' },
  { label: 'Вакансии', href: '/' },
  { label: 'Статьи', href: '/' },
  { label: 'Политика обработки персональных данных', href: '/' },
]);

const socials = reactive([
  { icon: 'insta', href: '/' },
  { icon: 'vk', href: '/' },
  { icon: 'fb', href: '/' },
  { icon: 'ok', href: '/' },
]);
</script>

<template>
  <footer class="footer">
    <Container class="footer__content">
      <div class="footer__logo">
        <Logo orientation="vertical" bgColor="white" colorful withText />
      </div>
      <div class="footer__links">
        <RouterLink v-for="link in links" :key="link.label" :to="link.href">
          <Typography tagName="span" size="xs">{{ link.label }}</Typography>
        </RouterLink>
      </div>
      <div class="footer__social">
        <RouterLink class="social__link" v-for="social in socials" :key="social.icon" :to="social.href">
          <Icon :type="social.icon" />
        </RouterLink>
      </div>
      <div class="footer__contact">
        <a class="contact__link" href="tel: 8 800 777 33 33">
          <Icon type="phone" />
          <Typography tagName="span" size="s">8 800 777 33 33</Typography>
        </a>
      </div>
      <div class="footer__created-by">
        <Typography tagName="span" size="xs">Дизайн</Typography>
        <svg width="100" height="10" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_26827_7366)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.241 0.369699L10.3876 7.7798C10.1121 8.03969 10.3173 8.46936 10.7168 8.46936H18.4056C18.5311 8.46936 18.6328 8.37799 18.6328 8.26528V0.510401C18.6328 0.326144 18.3824 0.236234 18.241 0.369699ZM8.24523 2.22024L0.391843 9.63034C0.250394 9.7638 0 9.67389 0 9.48964V1.73476C0 1.62205 0.10174 1.53068 0.227242 1.53068H7.91603C8.31554 1.53068 8.52067 1.96035 8.24523 2.22024ZM49.8157 2.4198C49.5623 2.29087 49.2592 2.17973 48.9065 2.07748C48.2954 1.9041 47.3812 1.73072 46.1491 1.73072C43.6003 1.73072 42.6166 2.63764 42.6166 3.74906C42.6166 4.78046 43.2625 5.57179 46.0199 5.83409C47.6694 5.99858 48.0271 6.05193 48.0271 6.37201C48.0271 6.78102 47.2967 6.89661 46 6.89661C45.2101 6.89661 44.5542 6.78546 44.0971 6.66543C43.8239 6.59874 43.5854 6.51872 43.3767 6.43425L42.393 7.71906C42.6265 7.85687 42.9197 7.98135 43.2724 8.09249C43.8736 8.28366 44.7977 8.46149 46.0994 8.46149C48.4643 8.46149 50.1486 7.90133 50.1486 6.37201C50.1486 5.10944 49.135 4.5804 46.4273 4.30922C45.1902 4.18918 44.7381 4.09138 44.7381 3.74906C44.7381 3.41119 45.2895 3.2956 46.2484 3.2956C47.0086 3.2956 47.6495 3.39785 48.1066 3.5001C48.3749 3.5579 48.6183 3.62903 48.832 3.7046L49.8157 2.4198ZM31.7316 2.83769L27.6774 6.71878H31.7316V8.28366H24.2543V7.35451L28.3034 3.47343H24.3536V1.90855H31.7316V2.83769ZM41.9387 8.28366H39.6831L39.0521 7.25226H35.2762L34.6452 8.28366H32.3896L36.2997 1.90855H38.0286L41.9387 8.28366ZM38.1777 5.82075L37.1642 4.16251L36.1506 5.82075H38.1777ZM60.6538 5.0961C60.6538 6.95885 59.1136 8.46149 55.755 8.46149C52.3964 8.46149 50.8563 6.95885 50.8563 5.0961C50.8563 3.23336 52.3964 1.73072 55.755 1.73072C59.1136 1.73072 60.6538 3.23336 60.6538 5.0961ZM52.9777 5.0961C52.9777 6.00302 53.5739 6.89661 55.755 6.89661C57.9361 6.89661 58.5323 6.00302 58.5323 5.0961C58.5323 4.18918 57.9361 3.2956 55.755 3.2956C53.5739 3.2956 52.9777 4.18918 52.9777 5.0961ZM62.9662 1.90855H60.7106L64.5213 8.28366H66.2503L70.061 1.90855H67.8054L65.3858 6.0297L62.9662 1.90855ZM76.8698 2.07748C77.2225 2.17973 77.5256 2.29087 77.779 2.4198L76.7953 3.7046C76.5816 3.62903 76.3382 3.5579 76.0699 3.5001C75.6128 3.39785 74.9719 3.2956 74.2117 3.2956C73.2529 3.2956 72.7014 3.41119 72.7014 3.74906C72.7014 4.09138 73.1535 4.18918 74.3906 4.30922C77.0983 4.5804 78.1119 5.10944 78.1119 6.37201C78.1119 7.90133 76.4276 8.46149 74.0627 8.46149C72.761 8.46149 71.8369 8.28366 71.2357 8.09249C70.883 7.98135 70.5898 7.85687 70.3563 7.71906L71.3401 6.43425C71.5487 6.51872 71.7872 6.59874 72.0605 6.66543C72.5175 6.78546 73.1734 6.89661 73.9633 6.89661C75.2601 6.89661 75.9904 6.78102 75.9904 6.37201C75.9904 6.05193 75.6327 5.99858 73.9832 5.83409C71.2258 5.57179 70.5799 4.78046 70.5799 3.74906C70.5799 2.63764 71.5636 1.73072 74.1124 1.73072C75.3445 1.73072 76.2587 1.9041 76.8698 2.07748ZM81.1199 4.2781V1.90855H79.0183V8.28366H81.1199V6.30977L81.8999 5.73184L84.553 8.28366H87.1216L83.3507 4.66043L87.072 1.90855H84.3245L81.1199 4.2781ZM89.9806 8.28366H87.879V1.90855H89.9806V8.28366ZM93.2172 1.90855H90.738L94.3152 5.75406V8.28366H96.4217V5.75406L99.9989 1.90855H97.5197L95.3685 4.22919L93.2172 1.90855Z" fill="#414141"/>
          </g>
          <defs>
          <clipPath id="clip0_26827_7366">
          <rect width="100" height="10" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
    </Container>
  </footer>
</template>

<style scoped>
.footer {
  height: 126px;
  padding: 24px 0;
  background-color: var(--main-footer);
  background-image: url('/footer-bg-pattern.png');
}

.footer__content {
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 16px;
  grid-template-columns: max-content 1fr repeat(2, max-content);
  grid-template-areas: 
    'logo links socials phone'
    'createdBy createdBy createdBy createdBy';
}

.footer__logo {
  grid-area: logo;
}

.footer__logo:deep(svg) {
  width: 64px;
  height: 44px;
}

.footer__links {
  display: flex;
  grid-area: links;
  grid-gap: 40px;
  align-items: center;
}

.footer__social {
  display: flex;
  grid-area: socials;
  grid-gap: 16px;
  align-items: center;
}

.contact__link,
.footer__created-by {
  display: flex;
  grid-gap: 8px;
  align-items: center;
}

.footer__created-by {
  grid-area: createdBy;
  grid-column: 4 / 5; 
  justify-content: flex-end;
}

.footer__contact {
  display: flex;
  justify-content: flex-end;
  grid-area: phone;
}

@media screen and (max-width: 1207px) {
  .footer__content {
     grid-template-areas: 
      'logo links socials phone'
      'logo links socials createdBy';
  }

  .footer__social {
    display: grid;
    grid-row: 1 / 3;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 8px;
    height: max-content;
  }

  .footer__logo {
    grid-row: 1 / 3;
  }
  
  .social__link {
    display: flex;
    height: max-content;
  }

  .footer__links {
    flex-wrap: wrap;
    grid-row: 1 / 3;
    grid-row-gap: 8px;
    max-width: 334px;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    padding-top: 40px;
    height: 206px;
  }

  .footer__created-by {
    display: none;
  }

  .footer__content {
    grid-template-columns: max-content 1fr;
    grid-template-areas: 
    'logo socials'
    'logo phone'
    'links links';
  }

  .footer__logo,
  .footer__social,
  .footer__links {
    grid-row: unset;
  }

  .footer__logo {
    grid-row: 1 / 3;
    display: flex;
    align-items: center;
  }

  .footer__links {
    max-width: unset;
    grid-gap: 16px;
    grid-row-gap: 16px;
    padding-top: 8px;
  }

  .footer__social {
    display: flex;
    grid-gap: 16px;
    grid-row: 1 / 1;
    justify-content: flex-end;
  }

  .footer__logo:deep(svg) {
    width: 93px;
    height: 64px;
  }

  .footer__links:deep(.typography.size_xs) {
    font-size: 12px;
  }

  .contact__link:deep(.typography) {
    font-size: 16px;
  }

  .footer__content {
    max-width: 304px;
  }
}
</style>