import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/providers";
import { urbanist, rubik } from "@/next-fonts/fonts";

export const metadata: Metadata = {
  title: "Store",
  description: "Shop Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${rubik.variable} font-sans flex flex-col selection:bg-brand selection:text-white`}
      >
        {/* Providers */}
        <Providers />
        {/*  */}
        <Navbar />
        <main className="min-h-main pb-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
