import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 核心：集成 Tailwind
  integrations: [tailwind()],
  // 针对 Cloudflare 部署的优化
  output: 'static',
});
