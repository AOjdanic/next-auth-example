import { z } from "zod";

export type SignupFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        passwordConfirm?: string[];
      };
      message?: string;
    }
  | undefined;

export const SignupSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "The name must contain at least two letters" })
      .trim()
      .refine((val) => val.split(" ").length === 2, {
        message: "Please provide first and last name",
      }),
    email: z.string().email({ message: "Please enter a valid email" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .trim(),
    passwordConfirm: z.string().trim(),
  })
  .refine(
    ({ password, passwordConfirm }) => {
      return password === passwordConfirm;
    },
    () => ({
      path: ["passwordConfirm"],
      message: "Passwords do not match",
    })
  );
