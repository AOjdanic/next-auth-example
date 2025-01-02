"use server";

import { FormState, SignupSchema } from "@/definitions/signupSchema";
import dbConnect from "@/lib/dbConnect";

export async function signup(formState: FormState, formData: FormData) {
  console.log("FORM DATA", formData);
  const validatedFields = SignupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await dbConnect();
}
