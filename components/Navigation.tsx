import Image from "next/image";
import profile from "@/public/profile.svg";
import Link from "next/link";
import { SignInButton } from "./SignInButton";
import { auth } from "@/auth";
import { LogoutButton } from "./LogoutButton";

export async function Navigation() {
  const session = await auth();

  return (
    <nav className="bg-gray-800 py-4 px-8 flex gap-8 items-center">
      <span className="mr-auto">Some logo</span>
      <Link
        className="w-6 h-6 flex justify-center items-center"
        href={"/profile"}
      >
        <Image
          className={`${
            session?.user ? "" : "dark:invert"
          } border border-solid border-black rounded-full flex-shrink-0 flex flex-grow max-h-9 max-w-9 cursor-pointer`}
          src={session?.user?.image ? session?.user?.image : profile}
          alt="user profile image"
          height={36}
          width={36}
        />
      </Link>

      {session?.user ? <LogoutButton /> : <SignInButton />}
    </nav>
  );
}
