import type { Metadata } from "next";
import { Figtree, Bricolage_Grotesque } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
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
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
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
      lang="id"
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
