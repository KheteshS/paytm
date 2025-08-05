"use client";

import { useBalance } from "@repo/store/useBalance";

export default function Page() {
  const balance = useBalance();
  return <div className="text-2xl">Hi there {balance}</div>;
}
