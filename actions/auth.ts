"use server";

import { LoginFormState, LoginSchema } from "@/definitions/loginSchema";
import { SignupFormState, SignupSchema } from "@/definitions/signupSchema";
import dbConnect from "@/lib/dbConnect";
import { createSession, deleteSession } from "@/lib/session";
import User from "@/models/User";
import { redirect } from "next/navigation";

export async function signup(formState: SignupFormState, formData: FormData) {
  const validatedFields = SignupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password, passwordConfirm } = validatedFields.data;
  await dbConnect();

  const newUser = await User.create({ email, name, password, passwordConfirm });

  if (!newUser) {
    return {
      message: "An error occured creating the account",
    };
  }

  await createSession(newUser.id);

  redirect("/profile");
}

export async function login(formState: LoginFormState, formData: FormData) {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;
  await dbConnect();

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePasswords(password, user.password))) {
    return { message: "Invalid credentials provided. Please try again" };
  }

  await createSession(user.id);

  redirect("/profile");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
