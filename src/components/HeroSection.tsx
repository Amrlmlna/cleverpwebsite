"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const leftPills = [
  { id: 1, name: "Sarah J.",  handle: "@sarahcodes",  emoji: "😩", bg: "#dbeafe", text: "Udah apply 30 loker, baru sadar CV-ku ga ATS-friendly. Harus buat ulang semuanya dari awal..." },
  { id: 2, name: "Kevin T.",  handle: "@kevtech",     emoji: "😡", bg: "#fee2e2", text: "Habis 3 jam rapiin margin di Word. Tambah satu baris, layout ancur semua. Mau nangis." },
  { id: 3, name: "Budi P.",   handle: "@budiprakoso", emoji: "📉", bg: "#ffedd5", text: "50 lamaran, 0 interview. Kata temen CV-ku ga lolos ATS. Gimana cara fixnya??" },
];

const rightPills = [
  { id: 4, name: "Anya",   handle: "@anyadesign", emoji: "🤯", bg: "#ede9fe", text: "CV Canva-ku keren banget tapi HRD bilang sistem mereka ga bisa baca. Harus bikin ulang di Word." },
  { id: 5, name: "Dimas",  handle: "@dimswrites",  emoji: "✍️", bg: "#fce7f3", text: "Setiap lamar loker baru harus edit CV manual lagi. Capek banget ngulang hal yang sama terus." },
  { id: 6, name: "Riana",  handle: "@riana_k",     emoji: "💸", bg: "#d1fae5", text: "Bayar $30 buat template CV premium, tetep aja ga lolos ATS checker. Rugi bandar." },
];

// Phone dimensions — proper iPhone 14 Pro ratio (~1:2.16)
const PHONE_W = 320;
const PHONE_H = 692;
const PILL_W  = 236;
// Gap between phone edge and pills
const GAP     = 28;

export default function HeroSection() {
  const { scrollY } = useScroll();

  /*
    Pills live at their final resting positions (left / right of phone).
    On page load they are pushed INWARD behind the phone via x-offset:
      Left pills  → pushed RIGHT  (+PILL_W + GAP → 0)
      Right pills → pushed LEFT   (-(PILL_W + GAP) → 0)
    As user scrolls they slide OUT to their natural position.
    Opacity & blur also animate in.
  */
  const xLeftStart  =  PILL_W + GAP;   // push left-pills to the right (behind phone)
  const xRightStart = -(PILL_W + GAP); // push right-pills to the left (behind phone)

  const xLeft       = useTransform(scrollY, [0, 650], [xLeftStart,  0]);
  const xRight      = useTransform(scrollY, [0, 650], [xRightStart, 0]);
  const pillOpacity = useTransform(scrollY, [40, 550], [0, 1]);
  const pillFilter  = useTransform(scrollY, [40, 550], ["blur(8px)", "blur(0px)"]);
  const pillScale   = useTransform(scrollY, [40, 550], [0.9, 1]);

  return (
    <section className="relative w-full flex flex-col items-center overflow-visible" style={{ paddingTop: 148 }}>

      {/* ── Heading ── */}
      <motion.h1
        initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: "clamp(52px, 6.5vw, 86px)", lineHeight: 0.94, letterSpacing: "-0.04em", maxWidth: 700 }}
        className="relative z-10 text-center text-[#121111] font-medium px-6"
      >
        kejar karir impian kamu dengan{" "}
        <span className="text-[#ff2f00]">lebih mudah</span>
      </motion.h1>

      {/* ── Phone + Pills composite ── */}
      <div
        className="relative flex justify-center"
        style={{ width: "100%", height: PHONE_H + 40, marginTop: 52 }}
      >
        {/* Page-level warm radial glow behind phone */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 720, height: 620,
            top: "50%", left: "50%",
            transform: "translate(-50%, -48%)",
            background: "radial-gradient(ellipse at 50% 40%, rgba(255,100,50,0.24) 0%, rgba(255,165,100,0.12) 38%, rgba(255,210,185,0.06) 62%, transparent 78%)",
            filter: "blur(16px)",
            zIndex: 1,
          }}
        />

        {/* ── Left pill column ── */}
        <motion.div
          style={{
            x: xLeft,
            opacity: pillOpacity,
            filter: pillFilter,
            scale: pillScale,
            // Positioned at left edge of phone minus pill width minus gap
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: -(PHONE_W / 2 + GAP + PILL_W),
            marginTop: -(PHONE_H / 2),
            width: PILL_W,
            height: PHONE_H,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
            zIndex: 10,
          }}
        >
          {leftPills.map((p) => (
            <PillCard key={p.id} {...p} />
          ))}
        </motion.div>

        {/* ── Phone mockup ── plain wrapper handles CSS centering, motion.div handles animation only */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: PHONE_W,
            height: PHONE_H,
            zIndex: 20,
          }}
        >
          <motion.div
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%", height: "100%" }}
          >
            <PhoneMockup />
          </motion.div>
        </div>

        {/* ── Right pill column ── */}
        <motion.div
          style={{
            x: xRight,
            opacity: pillOpacity,
            filter: pillFilter,
            scale: pillScale,
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: PHONE_W / 2 + GAP,
            marginTop: -(PHONE_H / 2),
            width: PILL_W,
            height: PHONE_H,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
            zIndex: 10,
          }}
        >
          {rightPills.map((p) => (
            <PillCard key={p.id} {...p} />
          ))}
        </motion.div>
      </div>

      {/* ── Subtitle + CTA (below phone, delayed fade) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.88, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6 pb-28 pt-10 text-center px-6"
      >
        <p className="text-[17px] leading-[1.55] tracking-[-0.02em] text-[#121111]/55 max-w-[400px]">
          Satu Master Profile. AI yang urus sisanya. Lamar lebih banyak tanpa mengulang dari awal.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.clevermaster.app&hl=id"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#121111] text-white font-semibold text-[15px] hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#ff2f00]">
            <path d="M3 1l9 6-9 6V1z" fill="currentColor"/>
          </svg>
          Download Sekarang — Gratis
        </a>
      </motion.div>
    </section>
  );
}

function PillCard({ name, handle, emoji, bg, text }: { name: string; handle: string; emoji: string; bg: string; text: string }) {
  return (
    <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-gray-100 rounded-2xl p-3.5 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0" style={{ background: bg }}>
          {emoji}
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[13px] font-semibold text-gray-800">{name}</span>
          <span className="text-[11px] text-gray-400">{handle}</span>
        </div>
      </div>
      <p className="text-[12px] text-gray-500 leading-[1.5]">{text}</p>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        borderRadius: 50,
        background: "#0e0e0e",
        border: "7px solid #1c1c1e",
        boxShadow: "0 40px 100px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Dynamic Island */}
      <div
        className="absolute bg-black z-30"
        style={{ top: 14, left: "50%", transform: "translateX(-50%)", width: 108, height: 28, borderRadius: 18 }}
      />

      {/* Screen */}
      <div className="absolute inset-0 bg-[#111] flex flex-col overflow-hidden" style={{ paddingTop: 56 }}>
        {/* Inner warm glow on screen */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "180%", height: "55%",
            top: "-15%", left: "-40%",
            background: "radial-gradient(ellipse at 50% 28%, rgba(210,50,30,0.52) 0%, rgba(190,70,30,0.2) 45%, transparent 70%)",
            filter: "blur(28px)",
            zIndex: 0,
          }}
        />

        {/* Status row */}
        <div className="flex justify-between items-center px-5 mb-5 relative z-10">
          <span className="text-base">🔔</span>
          <div className="flex gap-1.5">
            <span className="text-[11px] bg-white/20 px-2.5 py-[3px] rounded-full font-semibold text-white">ID</span>
            <span className="text-[11px] px-2.5 py-[3px] rounded-full text-white/35">EN</span>
          </div>
        </div>

        {/* Greeting */}
        <div className="px-5 mb-4 relative z-10">
          <p className="text-white/45 text-[11px] mb-1">halo, Amirul</p>
          <h3 className="text-[19px] font-bold font-bricolage text-white leading-[1.2]">
            siap mencapai tujuan<br />karirmu?
          </h3>
        </div>

        {/* Feature card */}
        <div className="mx-5 mb-5 rounded-2xl bg-white overflow-hidden relative z-10 p-4">
          <p className="text-[12px] font-semibold text-gray-700 leading-snug mb-2">
            export cv dengan 20+<br />template, gratis!!
          </p>
          <div className="inline-flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1.5">
            <span className="text-[10px] text-gray-600">buat kamu pengguna baru</span>
            <span className="text-[10px] text-gray-400">›</span>
          </div>
        </div>

        {/* Quick action grid */}
        <div className="grid grid-cols-4 gap-0 px-5 mb-4 relative z-10">
          {[
            { icon: "📥", label: "import cv" },
            { icon: "💼", label: "lowongan" },
            { icon: "📊", label: "statistik" },
            { icon: "📄", label: "buat cv" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <span className="text-[9px] text-white/40">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Action cards */}
        <div className="flex flex-col gap-2.5 px-5 relative z-10">
          {[
            { icon: "☁️", title: "login untuk akses semua fitur", sub: "akses dari device manapun, sync otomatis" },
            { icon: "💳", title: "beli kredit", sub: "isi ulang kredit cv kamu" },
          ].map((card) => (
            <div key={card.title} className="w-full px-4 py-3.5 bg-white/6 rounded-2xl border border-white/8 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-base flex-shrink-0">{card.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-white truncate">{card.title}</div>
                <div className="text-[10px] text-white/35 truncate">{card.sub}</div>
              </div>
              <span className="text-white/25 text-sm flex-shrink-0">›</span>
            </div>
          ))}
        </div>

        {/* Bottom tab bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-4 pb-4 pt-3 bg-[#111] border-t border-white/8 z-20">
          {["🏠", "📑", null, "⬇️", "👤"].map((icon, i) =>
            icon === null ? (
              <div key={i} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-black text-xl leading-none font-light">+</span>
              </div>
            ) : (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-base">{icon}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
