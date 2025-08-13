import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ReduxProvider } from "../providers";
import { AppbarClient } from "../components/AppbarClient";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={`${geist.className} h-screen `}>
          <div className={`flex flex-col h-full`}>
            <AppbarClient />
            {children}
          </div>
        </body>
      </ReduxProvider>
    </html>
  );
}
