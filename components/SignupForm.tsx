"use client";

import { useActionState } from "react";
import { signup } from "@/actions/auth";

export function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form
      className="flex flex-col mx-auto py-4 px-6 bg-gray-800 rounded-lg gap-8 w-[484px]"
      action={action}
    >
      <label className="flex flex-col gap-2">
        <span className="font-semibold">Name:</span>
        <input
          className="rounded py-1.5 px-2 outline-none text-gray-900"
          type="text"
          name="name"
          placeholder="Name"
        />

        <span className="text-red-500 h-6">
          {state?.errors?.name?.[0] || ""}
        </span>
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold">Email:</span>
        <input
          className="rounded py-1.5 px-2 outline-none text-gray-900"
          type="email"
          name="email"
          placeholder="example@domain.com"
        />
        <span className="text-red-500 h-6">
          {state?.errors?.email?.[0] || ""}
        </span>
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold">Password:</span>
        <input
          className="rounded py-1.5 px-2 outline-none text-gray-900"
          type="password"
          name="password"
          placeholder="Password"
        />
        <span className="text-red-500 h-6">
          {state?.errors?.password?.[0] || ""}
        </span>
      </label>

      <button
        disabled={pending}
        className="bg-rose-800 rounded py-1.5 px-2 outline-none cursor-pointer hover:bg-rose-900 font-medium"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}
