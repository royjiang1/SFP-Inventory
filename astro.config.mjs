import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 核心：保持静态输出，这样不需要任何适配器插件
  output: 'static',
  
  integrations: [
    tailwind({
      // 禁用默认的基础样式注入，我们在 Layout 里手动控制
      applyBaseStyles: false, 
    })
  ],

  build: {
    // 确保生成的路径结构适合 Cloudflare Pages
    format: 'directory'
  }
});
