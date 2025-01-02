import Image from "next/image";
import profile from "@/public/profile.svg";

export function Navigation() {
  return (
    <nav className="bg-gray-800 py-4 px-8 flex">
      <span className="mr-auto">Some logo</span>

      <Image
        className="dark:invert border border-solid border-black rounded-full flex-shrink-0 flex flex-grow max-h-6 max-w-6 cursor-pointer"
        src={profile}
        alt="user profile image"
        height={20}
        width={20}
      />
    </nav>
  );
}
