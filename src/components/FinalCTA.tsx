"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const EnterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 10 4 15 9 20"/>
    <path d="M20 4v7a4 4 0 0 1-4 4H4"/>
  </svg>
);

// Helper component for shooting stars
const ShootingStars = () => {
  const [stars, setStars] = useState<{ id: number; left: number; top: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random stars only on the client to avoid hydration mismatch
    setStars(
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100, // percentage
        top: Math.random() * 50,  // upper half
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex flex-col items-center justify-center -rotate-45">
        {stars.map((star) => (
           <motion.div
             key={star.id}
             initial={{ x: "100vw", opacity: 0 }}
             animate={{ x: "-100vw", opacity: [0, 1, 0] }}
             transition={{
               duration: star.duration,
               ease: "linear",
               delay: star.delay,
               repeat: Infinity,
             }}
             style={{
               position: "absolute",
               left: `${star.left}%`,
               top: `${star.top}%`,
             }}
             className="w-[150px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
           />
        ))}
      </div>
    </div>
  );
};

export default function FinalCTA() {
  return (
    <section className="relative w-full px-2 md:px-4 pb-2 md:pb-4 mt-12 md:mt-20">
      <div className="w-full relative overflow-hidden bg-[#0A0A0A] text-white pt-32 pb-0 flex flex-col justify-between rounded-[24px] md:rounded-[40px] shadow-2xl" style={{ minHeight: "80vh" }}>
        
        {/* Dynamic Shooting Stars Background */}
        <ShootingStars />

      {/* Decorative Object-Based Gradient Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {/* Sharp, angled light ray */}
         <div className="absolute top-[50%] left-[20%] w-[120%] h-[15px] bg-[#FF5A1F] blur-[8px] transform -translate-x-[20%] -translate-y-1/2 -rotate-[35deg] opacity-70" />
         <div className="absolute top-[50%] left-[20%] w-[100%] h-[40px] bg-gradient-to-r from-transparent via-[#FF5A1F] to-transparent blur-[20px] transform -translate-x-[20%] -translate-y-1/2 -rotate-[35deg] opacity-50" />
         
         {/* Deep blue ambient blob for contrast */}
         <div className="absolute bottom-0 right-[20%] w-[600px] h-[300px] bg-blue-600/40 blur-[100px] rounded-full mix-blend-screen" />
         {/* Orange ambient blob to support the ray */}
         <div className="absolute bottom-[-10%] left-[40%] w-[500px] h-[200px] bg-[#FF5A1F]/30 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Center CTA Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16 max-w-4xl mx-auto">
        <h2 className="text-[40px] md:text-[64px] leading-[1.05em] tracking-tight font-medium mb-12 max-w-3xl font-bricolage">
          Stop retyping CVs.<br />
          <span className="text-white/60">Satu master profile, disesuaikan AI.</span>
        </h2>
        
        {/* Glow Button */}
        <Link 
          href="https://play.google.com/store/apps/details?id=com.clevermaster.app&hl=id"
          target="_blank"
          className="group relative inline-flex h-14 md:h-16 items-center justify-center overflow-hidden rounded-[16px] px-8 font-bold text-white bg-gradient-to-b from-[#FF5A1F] to-[#D83E0B] hover:scale-[1.02] transition-all duration-300 z-10 shadow-[0_0_50px_rgba(255,90,31,0.35)] border border-[#ff7043]/40"
        >
          <span className="flex items-center gap-3 text-[16px] md:text-[18px]">
            {/* PlayStore triangle icon abstraction */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M4 2.5v19c0 .4.2.7.5.8.1.1.3.1.5 0l16-9.5c.3-.2.3-.6 0-.8l-16-9.5c-.2-.1-.4-.1-.6 0-.3.1-.4.4-.4.8z" />
            </svg>
            Download Sekarang
          </span>
          {/* Inner highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />
        </Link>
        
      </div>

      {/* Footer Area with Glassmorphic Effect */}
      <div className="relative z-20 w-full mt-32 px-6 md:px-12 py-12 backdrop-blur-2xl bg-[#0A0A0A]/10 border-t border-dashed border-white/15 rounded-b-[40px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
          
          {/* Footer Links (Left side) */}
          <div className="flex flex-col gap-3 text-[14px] font-medium text-neutral-400 mb-10 md:mb-0">
             <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
             <Link href="/blog" className="hover:text-white transition-colors">Blog & Tips Karir</Link>
             <Link href="/support" className="hover:text-white transition-colors">Bantuan</Link>
          </div>

          {/* Stay in Touch & Socials (Right side) */}
          <div className="flex flex-col gap-4 md:items-end w-full md:w-[380px]">
             
             {/* Text and Socials Row */}
             <div className="flex w-full justify-between items-center px-1">
               <span className="text-[15px] font-medium text-white tracking-tight">Stay in touch</span>
               {/* Social Logos */}
               <div className="flex items-center gap-4">
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                    <TwitterIcon size={18} />
                  </Link>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                    <LinkedinIcon size={18} />
                  </Link>
                  <Link href="https://www.instagram.com/cleverfast.ai/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                    <InstagramIcon size={18} />
                  </Link>
               </div>
             </div>
             
             {/* Input Capsule */}
             <div className="flex items-center w-full bg-[#1A1A1A] hover:bg-[#1E1E1E] transition-colors rounded-[16px] p-1.5 focus-within:ring-1 focus-within:ring-[#333]">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="bg-transparent border-none px-4 py-2.5 text-[15px] focus:outline-none text-white placeholder-neutral-500 w-full"
                />
                <button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] transition-colors rounded-[12px] px-5 py-2.5 text-[14.5px] font-medium text-white flex items-center gap-2 whitespace-nowrap">
                   <EnterIcon size={15} />
                   <span>Subscribe</span>
                </button>
             </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
