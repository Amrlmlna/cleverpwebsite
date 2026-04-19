import type { Metadata } from "next";
import { Figtree, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CleverCV | Kejar karir impian kamu dengan lebih mudah",
  description: "Buat CV ATS Friendly dalam hitungan menit. Tembus seleksi HRD dengan mudah menggunakan template cerdas dari CleverCV.",
};

import Navbar from "@/components/Navbar";
import GlobalScrollTransition from "@/components/GlobalScrollTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${bricolage.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <GlobalScrollTransition />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
