// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // 公開URLが決まったら SITE=https://example.com を設定してください
  site: process.env.SITE,
  integrations: [
    icon({
      include: {
        lucide: [
          'phone',
          'map-pin',
          'clock-3',
          'train-front',
          'calendar-days',
          'circle-check',
          'brain',
          'target',
          'book-open',
          'award',
          'smile',
          'menu',
          'x',
          'chevron-down',
          'heart',
          'users',
          'pencil',
          'sprout',
          'calculator',
          'arrow-right',
          'navigation',
          'badge-check',
          'sun',
          'hand-heart',
        ],
      },
    }),
  ],
});
