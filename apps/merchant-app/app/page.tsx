import { useBalance } from "@repo/store/useBalance";
import { AppBar } from "../../../packages/ui/dist/Appbar";

export default function Page() {
  const balance = useBalance();
  return <div className="text-2xl">Hi there {balance}</div>;
}
