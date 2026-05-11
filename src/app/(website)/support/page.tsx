"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

const communityLinks = [
  {
    name: "Twitter",
    description: "Join us on Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    description: "Join us on Discord",
    href: "https://discord.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.136 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
    ),
  },
];

export default function SupportPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#0A0A0A] overflow-hidden">

      {/* === HERO SECTION (no form) === */}
      <section className="relative w-full flex flex-col items-center justify-center pt-40 pb-24 px-6">
        {/* Purple glow orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(120,60,220,0.55) 0%, rgba(80,30,160,0.25) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 font-medium mb-8 relative z-10 backdrop-blur-sm"
        >
          <MessageSquare size={14} />
          Get help
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-bricolage text-5xl md:text-[62px] leading-tight font-medium tracking-tight text-white text-center relative z-10"
        >
          Get support<br />or Share Your Feedback
        </motion.h1>
      </section>

      {/* === COMMUNITY SECTION === */}
      <section className="relative w-full flex flex-col items-center pb-0 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-bricolage text-4xl md:text-5xl font-medium tracking-tight text-white text-center mb-12 relative z-10"
        >
          Join the community
        </motion.h2>

        {/* Card grid with dot grid only behind it */}
        <div className="relative w-full max-w-2xl">
          {/* Dot grid tightly masked to card area only */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage: "radial-gradient(ellipse 85% 90% at 50% 50%, black 25%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 50% 50%, black 25%, transparent 75%)",
              opacity: 0.25,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 mb-24">
            {communityLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="group flex flex-col items-center justify-center gap-4 py-14 px-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  {link.icon}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white text-lg mb-1">{link.name}</p>
                  <p className="text-white/40 text-sm">{link.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
