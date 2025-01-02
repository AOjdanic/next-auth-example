import { signIn } from "@/auth";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        className="bg-rose-800 rounded py-1.5 px-2 outline-none cursor-pointer hover:bg-rose-900 font-medium"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
