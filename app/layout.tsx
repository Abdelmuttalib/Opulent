import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/providers";
import { urbanist, rubik } from "@/next-fonts/fonts";
import TailwindIndicator from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "Opulent",
  description: "opulent store",
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
        <Analytics />
        {/* tailwind */}
        <TailwindIndicator />
      </body>
    </html>
  );
}
