import Image from "next/image";
import profile from "@/public/profile.svg";
import authProfile from "@/public/authProfile.jpg";
import { logout } from "@/actions/auth";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="bg-gray-800 py-4 px-8 flex gap-4">
      <span className="mr-auto">Some logo</span>
      <Link
        className="w-6 h-6 flex justify-center items-center"
        href={"/profile"}
      >
        <Image
          className="dark:invert border border-solid border-black rounded-full flex-shrink-0 flex flex-grow max-h-6 max-w-6 cursor-pointer"
          src={profile}
          alt="user profile image"
          height={20}
          width={20}
        />
      </Link>

      <button onClick={logout}>Log Out</button>
    </nav>
  );
}
