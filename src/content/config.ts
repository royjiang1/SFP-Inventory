import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    brand: z.string(),
    pn: z.string().or(z.number()),
    model: z.string(),
    price: z.string().or(z.number()),
    // 以下是可选参数，防止某些 MD 缺少字段导致报错
    speed: z.string().optional(),
    reach: z.string().optional(),
    wavelength: z.string().optional(),
    connector: z.string().optional(), // 建议增加这一行
    condition: z.string().default("Used - Tested"),
    schemaJson: z.any().optional(),
  }),
});

export const collections = {
  'products': products,
};
