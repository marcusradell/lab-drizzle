import { z } from "zod";

export const postSchema = z.object({
  userId: z.number(),
  title: z.string().min(1),
  content: z.string().min(1),
});

export type PostInput = z.infer<typeof postSchema>;
