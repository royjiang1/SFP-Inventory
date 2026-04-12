import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // 使用静态模式，最适合不需要登录功能的展示型网站
  output: 'static',
  
  integrations: [
    tailwind({
      // 这里的配置会自动将 Tailwind 样式注入到 HTML
      applyBaseStyles: false, 
    })
  ],

  adapter: cloudflare({
    mode: 'directory', // 目录模式在 CF Pages 上性能最稳
  }),

  // 图像优化配置（既然你用了 cloudflare 适配器）
  image: {
    service: { entrypoint: 'astro/assets/services/noop' } 
  }
});
