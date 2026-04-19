"use client";

import { motion } from "framer-motion";
import { Zap, Shield, FileOutput, FileSearch, Play } from "lucide-react";

const features = [
  {
    title: "AI Tailoring 1-Klik",
    description: "Tempel deskripsi loker, AI menyusun ulang CV dari Master Profile-mu secara otomatis — keyword tepat, relevansi maksimal, siap tembus ATS.",
    icon: <Zap size={20} className="text-white" />,
    image: "/bento/bento_ats_scanner_1776538400051.png",
  },
  {
    title: "Master Profile",
    description: "Input data riwayat karir sekali saja. Ganti template, lamar posisi berbeda — data tidak pernah hilang, layout tidak pernah hancur.",
    icon: <Shield size={20} className="text-white" />,
    image: "/bento/bento_secure_shield_1776538413081.png",
  },
  {
    title: "Screenshot to Fill",
    description: "Upload screenshot loker dari Instagram atau LinkedIn. AI baca sendiri, ekstrak posisi & deskripsi, langsung tailoring — tanpa ketik ulang.",
    icon: <FileSearch size={20} className="text-white" />,
    image: "/bento/bento_ai_robot_1776538426677.png",
  },
  {
    title: "10+ Template ATS Gratis",
    description: "Lebih dari 10 template profesional berstandar ATS. Ganti desain seketika dengan satu klik — tanpa layout hancur, tanpa watermark, export PDF langsung.",
    icon: <FileOutput size={20} className="text-white" />,
    image: "/bento/bento_export_doc_1776538444004.png",
  },
];

export default function BentoFeatures() {
  return (
    <section id="features" className="relative w-full z-20 flex justify-center pb-[100px] px-2 sm:px-[8px]">
      <div className="w-full bg-[#0F0F0F] rounded-[32px] md:rounded-[44px] flex flex-col items-center pt-[120px] px-4 md:px-[48px] pb-24 overflow-hidden gap-[160px]">
        
        {/* Top Container */}
        <div className="w-full max-w-[1200px] flex flex-col gap-[120px]">
          {/* Header */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 text-white">
            <h2 className="text-[44px] leading-[1.1em] tracking-[-0.04em] font-medium max-w-[560px]">
              Satu Profil.<br />Ratusan Lamaran.
            </h2>
            <div className="flex flex-col gap-[23px] max-w-[360px]">
              <p className="text-[18px] leading-[1.5em] tracking-[-0.01em] font-medium text-white/70">
                Fokus lamar — biarkan AI CleverCV yang urus format, keyword ATS, dan relevansi konten untuk setiap lowongan.
              </p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.clevermaster.app&hl=id" 
                target="_blank" 
                rel="noreferrer"
                className="h-[44px] w-fit rounded-[14px] border border-white/20 bg-transparent hover:bg-white/5 hover:border-white/40 px-6 flex items-center justify-center text-[14px] font-semibold transition-all duration-300 mt-2 text-white gap-2 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" className="opacity-90">
                  <path fill="currentColor" d="M3.7,2.7C3.5,3,3.3,3.4,3.3,4v16c0,0.6,0.2,1,0.4,1.3l0.1,0.1l9.1-9.3v-0.2L3.8,2.6L3.7,2.7z"/>
                  <path fill="currentColor" d="M17.1,10.6l-4.2-4.4L3.8,2.6c0.5-0.5,1.4-0.6,2.2-0.1l11.4,6.5c1.1,0.6,1.4,1.8,0.7,2.8C18,11.5,17.6,11,17.1,10.6z"/>
                  <path fill="currentColor" d="M12.9,13.4l4.2,4.4c0.5,0.4,0.9,0.9,0.9,1.5c0,0.8-0.5,1.5-1.3,1.9L5.3,21.5c-0.8,0.5-1.7,0.4-2.2-0.1L12.9,13.4z"/>
                  <path fill="currentColor" d="M17.1,13.4l4.1-2.4c1.1-0.6,1.4-2.1,0.6-3.2c-0.2-0.3-0.5-0.5-0.8-0.6L12.9,10.6L17.1,13.4z"/>
                </svg>
                Download now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[6px]">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#121212] border border-[#222] rounded-[44px] flex flex-col group overflow-hidden relative min-h-[500px]"
              >
                {/* Embedded 3D Image Cover */}
                <div className="w-full h-[320px] relative overflow-hidden flex items-center justify-center p-6 mt-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212] z-10" />
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover object-center rounded-3xl opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Dynamic Content Overlay at bottom */}
                <div className="flex-1 flex flex-col justify-end p-10 pt-0 relative z-20">
                  <div className="w-10 h-10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-[24px] tracking-[-0.03em] font-bold text-white mb-3 leading-tight">{feature.title}</h3>
                  <p className="text-[15px] font-medium tracking-wide text-white/50 leading-relaxed max-w-[400px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Eco-system section */}
          <div className="w-full flex flex-col items-center gap-[100px] pt-12 relative">
            {/* Aesthetic gradient glow behind the text */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-r from-orange-600/10 via-amber-500/5 to-transparent blur-[120px] pointer-events-none rounded-[100%]" />

            <h2 className="relative z-10 text-[32px] md:text-[40px] leading-[1.1em] tracking-[-0.04em] font-medium text-center text-white max-w-[600px]">
              Dari nol sampai <em>hired</em> —{" "}<span className="text-white/50">semua dalam satu ekosistem pintar.</span>
            </h2>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[1000px] aspect-video relative z-20 rounded-[32px] md:rounded-[44px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-[#0A0A0A]"
            >
              {/* Glassy inner border for depth */}
              <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] pointer-events-none z-10 rounded-[32px] md:rounded-[44px]" />
              
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/RzeYjZ_eVbs?rel=0&modestbranding=1&color=white" 
                title="CleverCV Product Launch Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
