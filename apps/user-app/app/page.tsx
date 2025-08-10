"use client";

import { AppBar } from "../../../packages/ui/dist/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();

  return (
    <AppBar user={session.data?.user} onSignIn={signIn} onSignOut={signOut} />
  );
}
