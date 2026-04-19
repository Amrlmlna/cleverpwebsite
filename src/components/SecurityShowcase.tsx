"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { UserCircle, Sparkles, Import } from "lucide-react";

const tabs = [
  {
    id: "master-profile",
    title: "Master Profile",
    description: "Isi riwayat pendidikan, pengalaman, dan skill kamu sekali saja. Master Profile jadi satu sumber kebenaran — AI yang urus sisanya untuk setiap lamaran yang berbeda.",
    icon: <UserCircle size={18} />,
    videos: ["/video/0417(1).mp4", "/video/0417(2).mp4"]
  },
  {
    id: "ai-tailor",
    title: "AI Tailor",
    description: "Tempel deskripsi pekerjaan target. AI memilih pengalaman paling relevan dari Master Profile dan menyusun CV yang tembus ATS — bukan sekadar parafrase.",
    icon: <Sparkles size={18} />,
    videos: ["/video/0417(3).mp4", "/video/0417(4).mp4"]
  },
  {
    id: "dynamic-import",
    title: "Dynamic Import",
    description: "Punya CV lama di PDF atau Word? Import sekali — CleverCV ekstrak semua data ke Master Profile-mu otomatis. Tidak perlu mulai dari nol.",
    icon: <Import size={18} />,
    videos: ["/video/0417(5).mp4"]
  }
];

export default function SecurityShowcase() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const activeTab = tabs[activeTabIndex];
  const activeVideoSrc = activeTab.videos[currentVideoIndex];

  // When tab changes, reset video index and progress
  useEffect(() => {
    setCurrentVideoIndex(0);
    setProgress(0);
  }, [activeTabIndex]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const handleVideoEnded = () => {
    // Check if there is another video in the current tab's array
    if (currentVideoIndex < activeTab.videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
      setProgress(0);
    } else {
      // Otherwise, jump to the next tab
      const nextTab = (activeTabIndex + 1) % tabs.length;
      setActiveTabIndex(nextTab);
    }
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-32 z-10 relative">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left: Tab Switcher navigation */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-[40px] md:text-[56px] leading-[1.05em] tracking-[-0.03em] font-medium text-neutral-900 mb-2">
            Cara Kerja <br/>
            <span className="text-neutral-900 font-semibold">CleverCV.</span>
          </h2>
          
          {/* Active Tab Description shown above tabs like the subtitle in original */}
          <div className="min-h-[80px] mb-4">
             <AnimatePresence mode="wait">
               <motion.p
                 key={activeTab.id}
                 initial={{ opacity: 0, y: 5 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -5 }}
                 transition={{ duration: 0.3 }}
                 className="text-[18px] md:text-[20px] font-medium tracking-tight text-neutral-500 leading-relaxed max-w-[90%]"
               >
                 {activeTab.description}
               </motion.p>
             </AnimatePresence>
          </div>
          
          {/* Pill Tabs */}
          <div className="flex flex-col space-y-3 w-max">
            {tabs.map((tab, tIdx) => {
              const isActive = activeTabIndex === tIdx;
              
              // Calculate width for this tab's overall progress bar
              // If it's a tab with 2 videos, the progress is split in half
              // (This makes the pill fill up smoothly over the course of ALL videos in the tab)
              const totalVideos = tab.videos.length;
              let fillPercentage = 0;
              if (isActive) {
                 fillPercentage = ((currentVideoIndex * 100) + progress) / totalVideos;
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabIndex(tIdx)}
                  className={`text-left px-5 py-4 min-w-[240px] md:min-w-[280px] rounded-[16px] transition-all duration-300 relative overflow-hidden flex items-center gap-3 ${
                    isActive 
                      ? "bg-neutral-100 shadow-sm" 
                      : "bg-neutral-50 hover:bg-neutral-100/80 shadow-sm"
                  }`}
                >
                  {/* Progress Fill Background */}
                  {isActive && (
                    <div 
                      className="absolute left-0 top-0 bottom-0 bg-neutral-200/80 transition-all duration-100 ease-linear"
                      style={{ width: `${fillPercentage}%` }}
                    />
                  )}

                  <div className={`relative z-10 flex items-center gap-3 ${isActive ? "text-neutral-900" : "text-neutral-500"}`}>
                    <div className="flex items-center justify-center">
                      {tab.icon}
                    </div>
                    <span className="font-medium text-[16px] tracking-tight">{tab.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Active Tab Video Player */}
        <div className="w-full lg:w-5/12 aspect-[4/5] relative flex items-center justify-center p-2 mt-8 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVideoSrc}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 bottom-0 top-0 overflow-hidden"
              style={{
                // mask out the bottom edge to blend seamlessly softly
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            >
              {/* Premium drop shadow instead of harsh outlines */}
              <div className="w-full h-full lg:h-[110%] rounded-[32px] shadow-[0_24px_80px_rgba(0,0,0,0.08)] bg-white relative border border-black/5">
                
                <video 
                  ref={videoRef}
                  src={activeVideoSrc}
                  autoPlay
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover"
                  style={{
                      borderTopLeftRadius: '32px',
                      borderTopRightRadius: '32px'
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
