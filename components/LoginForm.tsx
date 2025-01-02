"use client";

import { login } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form
      className="flex flex-col mx-auto py-4 px-6 bg-gray-800 rounded-lg gap-2 w-[484px]"
      action={action}
    >
      <label className="flex flex-col gap-2 text-rose-800">
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

      <label className="flex flex-col gap-2 text-rose-800">
        <span className="font-semibold">Password:</span>
        <input
          className="rounded py-1.5 px-2 outline-none text-gray-900"
          type="password"
          name="password"
          placeholder="*****************"
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
        Log In
      </button>

      <div className="flex flex-col justify-center items-center mt-4">
        <span className="text-gray-400">Don&apos;t have an account?</span>
        <Link className="text-blue-300" href={"/signup"}>
          Sign Up
        </Link>
      </div>

      <span className="text-red-500 h-6">{state?.message || ""}</span>
    </form>
  );
}
