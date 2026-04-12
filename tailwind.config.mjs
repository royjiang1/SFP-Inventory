import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'h-blue': '#1D4ED8',
        'h-black': '#111827',
        'h-subtle': '#6B7280',
        'h-gray': '#F3F4F6',
      },
      fontFamily: {
        // 删掉 Poppins，改为系统字体
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
