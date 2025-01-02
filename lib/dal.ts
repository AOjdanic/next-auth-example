import { cookies } from "next/headers";
import { cache } from "react";
import { decrypt } from "./session";
import { redirect } from "next/navigation";
import User from "@/models/User";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.id) {
    redirect("/login");
    return;
  }

  return { isAuth: true, userId: session.id };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const user = await User.findById(session.userId).select("_id name email");

    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
});
