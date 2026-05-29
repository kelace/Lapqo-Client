import { z } from "zod";

export type RegisterForm = z.infer<typeof registerSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name is too short"),
    email: z.email({ message: "Invalid email" }),
    password: z.string().min(6, { message: "Min 6 characters" }),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
