import { z as zod } from "zod";

export type LoginForm = zod.infer<typeof loginSchema>;

export const loginSchema = zod.object({
  email: zod.email({ message: "Invalid email" }),
  password: zod.string().min(6, { message: "Min 6 characters" }),
});
