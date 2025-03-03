import { z } from "zod";

export const postSchema = z.object({
  userId: z.string().uuid(),
  title: z.string().min(1),
  content: z.string().min(1),
});

export type PostInput = z.infer<typeof postSchema>;
