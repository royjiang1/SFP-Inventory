import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 暂时可以用 Cloudflare 给你的临时域名，后期换成你自己的
  site: 'https://sfp-inventory.pages.dev', 
  integrations: [sitemap()],
});
