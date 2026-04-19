"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect } from "react";

export default function GlobalScrollTransition() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Determine how far down we are. Assuming at 800px we want to be fully dark.
    if (typeof window !== "undefined") {
      const body = document.documentElement;
      
      // Calculate a progress value between 0 and 1 over the first 800px of scroll
      const progress = Math.min(Math.max(latest / 800, 0), 1);
      
      // Optionally we can toggle a class on the body if we want strict Tailwind classes
      // But for smooth interpolation, inline styles or CSS variables work best.
      if (progress > 0.5) {
        body.classList.add("dark-mode-active");
        body.style.backgroundColor = "#0A0A0A";
        body.style.color = "#FFFAF5";
      } else {
        body.classList.remove("dark-mode-active");
        body.style.backgroundColor = "#FFFAF5";
        body.style.color = "#0A0A0A";
      }
    }
  });

  // Initially set
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#FFFAF5";
    document.documentElement.style.color = "#0A0A0A";
    document.documentElement.style.transition = "background-color 0.8s ease-in-out, color 0.8s ease-in-out";
  }, []);

  return null; // This component just handles side-effects
}
