/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // 确保 Poppins 是首选字体
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'h-blue': '#1D4ED8',   // 品牌蓝
        'h-gray': '#F3F4F6',   // 背景灰
        'h-black': '#111827',  // 深色文字
        'h-subtle': '#6B7280', // 辅助灰
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        widest: '0.3em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 必须安装此插件以支持 <Content /> 的排版
  ],
};
