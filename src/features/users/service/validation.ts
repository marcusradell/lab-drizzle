import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  age: z.number().positive(),
  email: z.string().email(),
});

export type UserInput = z.infer<typeof userSchema>;
