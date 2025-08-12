import { AuthOptions, getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

export const GET = async () => {
  const session = await getServerSession(authOptions as AuthOptions);
  if (session && session.user) {
    return NextResponse.json({
      user: session.user,
    });
  }

  return NextResponse.json(
    {
      message: "You are not Logged In!",
    },
    {
      status: 403,
    }
  );
};
