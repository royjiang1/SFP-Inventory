import { defineConfig } from 'astro/config';
// 暂时把下面这行 sitemap 删掉或注释掉
// import sitemap from '@astrojs/sitemap'; 

export default defineConfig({
  site: 'https://sfp-inventory.pages.dev',
  // 这里删掉 sitemap()
  integrations: [], 
});
