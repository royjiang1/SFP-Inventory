import { defineCollection, z } from 'astro:content';

// 定义产品集合的验证规则
const productsCollection = defineCollection({
  type: 'content', // 指明这是 Markdown 内容
  schema: z.object({
    brand: z.string(),
    pn: z.string(),
    model: z.string(),
    price: z.string(),
    speed: z.string(),
    reach: z.string(),
    wavelength: z.string(),
    connector: z.string(),
    condition: z.string(),
  }),
});

// 导出集合配置
export const collections = {
  'products': productsCollection,
};
