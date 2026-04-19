"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FileText, LifeBuoy, BookOpen } from "lucide-react";

// Pages with a dark background where the navbar must start in "light" (white text) mode
const DARK_BG_ROUTES = ["/support"];

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const isDarkPage = DARK_BG_ROUTES.some((r) => pathname.startsWith(r));

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-[#0A0A0A]/70 backdrop-blur-xl shadow-2xl border border-white/10 py-3 px-6 rounded-full w-[90%] max-w-4xl" 
          : isDarkPage
            ? "bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-3 px-6 w-[90%] max-w-4xl"
            : "bg-transparent border border-transparent py-4 px-8 w-full max-w-5xl"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo — light.png on dark bg, dark.png on light bg */}
        <Link href="/" className="relative flex items-center group hover:opacity-90 transition-opacity">
          {/* Dark logo: visible on light backgrounds */}
          <Image
            src="/icon/dark.png"
            alt="CleverCV"
            width={200}
            height={200}
            className={`h-12 w-auto object-contain transition-opacity duration-300 ${
              isScrolled || isDarkPage ? "opacity-0 absolute" : "opacity-100"
            }`}
            priority
          />
          {/* Light logo: visible on dark/scrolled backgrounds */}
          <Image
            src="/icon/light.png"
            alt="CleverCV"
            width={200}
            height={200}
            className={`h-12 w-auto object-contain transition-opacity duration-300 ${
              isScrolled || isDarkPage ? "opacity-100" : "opacity-0 absolute"
            }`}
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          <Link href="/blog" className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-accent ${isScrolled || isDarkPage ? "text-neutral-300" : "text-brand-neutral"}`}>
            <BookOpen size={16} /> Guides
          </Link>
          <Link href="/support" className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-accent ${isScrolled || isDarkPage ? "text-neutral-300" : "text-brand-neutral"}`}>
            <LifeBuoy size={16} /> Support
          </Link>
          <a href="#features" className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-accent ${isScrolled || isDarkPage ? "text-neutral-300" : "text-brand-neutral"}`}>
            <FileText size={16} /> Templates
          </a>
        </div>

        {/* CTA */}
        <Link 
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#FF5A1F_50%,#E2CBFF_100%)]" />
          <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 py-1 text-sm font-medium backdrop-blur-3xl transition-colors duration-500 ${isScrolled || isDarkPage ? "bg-brand-dark text-white" : "bg-white text-brand-dark"}`}>
            Buat CV Sekarang
          </span>
        </Link>
      </div>
    </motion.nav>
  );
}
