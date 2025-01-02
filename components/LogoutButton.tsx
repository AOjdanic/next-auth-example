import { signOut } from "@/auth";

export function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className="bg-rose-800 rounded py-1.5 px-2 outline-none cursor-pointer hover:bg-rose-900 font-medium"
        type="submit"
      >
        Log Out
      </button>
    </form>
  );
}
