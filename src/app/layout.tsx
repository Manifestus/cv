import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import PageAnimatePresence from "@/app/Components/HOC/PageAnimatePrecence";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Figueroa - CV",
  description: "Victor Figueroa - Curriculum Vitae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageAnimatePresence>{children}</PageAnimatePresence>
      </body>
    </html>
  );
}
