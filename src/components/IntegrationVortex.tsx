"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

const topCards = [
  { id: 1, title: "LinkedIn", color: "from-blue-700 to-blue-500", rotate: -8, y: -20, scale: 0.95, delay: 0.1 },
  { id: 2, title: "Glints", color: "from-emerald-500 to-teal-400", rotate: 2, y: -40, scale: 1.1, delay: 0 },
  { id: 3, title: "Kalibrr", color: "from-violet-600 to-purple-500", rotate: 10, y: -10, scale: 0.9, delay: 0.2 },
];

const bottomCards = [
  { id: 4, title: "Instagram", color: "from-pink-500 via-rose-400 to-orange-400", rotate: -12, y: 10, scale: 0.9, delay: 0.3 },
  { id: 5, title: "JobStreet", color: "from-amber-500 to-orange-400", rotate: -4, y: 40, scale: 1.05, delay: 0.15 },
  { id: 6, title: "Google Jobs", color: "from-blue-500 via-red-400 to-yellow-300", rotate: 12, y: 20, scale: 0.95, delay: 0.4 },
];

export default function IntegrationVortex() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-400, 400], [10, -10]);
  const rotateY = useTransform(x, [-400, 400], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-32 z-10 relative flex flex-col items-center overflow-visible">

      {/* Heading */}
      <div className="text-center mb-16 md:mb-24 relative z-30">
        <h2 className="text-[36px] md:text-[56px] leading-[1.05em] tracking-[-0.03em] font-medium text-neutral-900 mb-4 max-w-2xl mx-auto">
          Dibuat untuk ekosistem <br />
          <span className="font-semibold">jobseeker modern.</span>
        </h2>
        <p className="text-neutral-500 text-[18px] md:text-[20px] tracking-tight max-w-xl mx-auto font-medium">
          Dari loker di LinkedIn sampai postingan Instagram — CleverCV baca, proses, dan sesuaikan otomatis.
        </p>
      </div>

      {/* Floating 3D Wrapper */}
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1400 }}
        className="relative w-full max-w-[1000px] flex flex-col items-center justify-center cursor-crosshair pb-10"
      >
        {/* Background Dot Grid */}
        <div className="absolute inset-0 pointer-events-none -z-20 w-[150%] left-[-25%] h-[150%] top-[-25%] flex items-center justify-center">
          <div
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_60%)]"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1.5px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute w-[400px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none translate-x-32 -translate-y-20" />
        </div>

        {/* Top 3 Cards */}
        <div className="flex flex-row justify-center items-center w-full gap-4 md:gap-8 lg:gap-12 relative z-10 mt-10">
          {topCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: card.y }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: card.delay, type: "spring", bounce: 0.3 }}
              className={`w-[120px] sm:w-[180px] md:w-[260px] aspect-[4/3] rounded-2xl md:rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center bg-gradient-to-br ${card.color} text-white font-bold p-4 overflow-hidden relative border border-white/20`}
              style={{ rotate: card.rotate, scale: card.scale }}
              whileHover={{ scale: card.scale + 0.05 }}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full mb-2 md:mb-4 shadow-inner" />
              <span className="text-[12px] md:text-[18px] tracking-tight opacity-90 font-semibold">{card.title}</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Center Text */}
        <div className="relative z-20 max-w-[280px] md:max-w-[420px] text-center my-12 md:my-16">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[160%] bg-[#FDFBF7]/90 blur-[24px] -z-10 rounded-[100px]" />
          <p className="font-mono text-[11px] md:text-[14px] text-neutral-600 leading-[1.8em] font-medium px-4">
            Dari <span className="font-bold text-neutral-900">AI Tailoring otomatis</span> hingga{" "}
            <span className="font-bold text-neutral-900">Screenshot Parsing</span> dari postingan Instagram,
            buka potensi penuh 10+ fitur AI terintegrasi —{" "}
            <br />
            <span className="text-neutral-400">semua dalam satu aplikasi gratis.</span>
          </p>
        </div>

        {/* Bottom 3 Cards */}
        <div className="flex flex-row justify-center items-center w-full gap-4 md:gap-8 lg:gap-12 relative z-10 mb-10">
          {bottomCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: card.y }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: card.delay, type: "spring", bounce: 0.3 }}
              className={`w-[120px] sm:w-[180px] md:w-[260px] aspect-[4/3] rounded-2xl md:rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center bg-gradient-to-br ${card.color} text-white font-bold p-4 overflow-hidden relative border border-white/20`}
              style={{ rotate: card.rotate, scale: card.scale }}
              whileHover={{ scale: card.scale + 0.05 }}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full mb-2 md:mb-4 shadow-inner" />
              <span className="text-[12px] md:text-[18px] tracking-tight opacity-90 font-semibold">{card.title}</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
