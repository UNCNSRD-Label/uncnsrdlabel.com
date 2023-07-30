import { z } from "zod";

export const CartSchema = z.object({
  lineId: z.string().optional(),
  merchandiseId: z.string(),
  quantity: z.number(),
  variantId: z.string().optional(),
});

export type Cart = z.infer<typeof CartSchema>;

export const CartResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  status: z.number(),
});

export type CartResponse = z.infer<typeof CartResponseSchema>;
