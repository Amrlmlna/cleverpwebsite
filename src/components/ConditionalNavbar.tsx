"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import GlobalScrollTransition from "./GlobalScrollTransition";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // If we're on a studio route or pathname is not yet available, don't render the navbar
  if (!pathname || pathname.startsWith("/studio") || pathname.includes("/studio/")) {
    return null;
  }

  return (
    <>
      <GlobalScrollTransition />
      <Navbar />
    </>
  );
}
