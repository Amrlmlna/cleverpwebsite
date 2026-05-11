"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import GlobalScrollTransition from "./GlobalScrollTransition";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before hydration, don't render to avoid flashes or mismatch
  if (!mounted || !pathname) {
    return null;
  }

  // Extremely robust check: if 'studio' is anywhere in the path, hide navbar
  // This handles sub-routes, query params, and Sanity's internal routing shifts
  const isStudio = pathname.split('/').some(segment => segment === 'studio');

  if (isStudio) {
    return null;
  }

  return (
    <>
      <GlobalScrollTransition />
      <Navbar />
    </>
  );
}
