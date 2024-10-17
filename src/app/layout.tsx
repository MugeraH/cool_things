import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Cool_Things",
    default: "Cool_Things",
  },
  description:
    "Small cool things I  have had the pleasure of getting to build.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-slate-900 to-black text-white ">
        <Providers>
          <Navbar />
          <div className="py-14 px-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
