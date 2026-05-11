import FinalCTA from "@/components/FinalCTA";
import BlogGrid from "@/components/BlogGrid";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog & Tips Karir | CleverCV",
  description:
    "Tips praktis, perbandingan tools, dan strategi job hunting berbasis data untuk job seeker Indonesia.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <main className="w-full min-h-screen flex flex-col pt-32 relative bg-[#FFFAF5]">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 10%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 80%)",
        }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 pb-32">
        {/* Header */}
        <header className="mb-14 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-black/5 mb-6">
            <span className="text-sm font-medium text-brand-dark">Blog & Tips Karir</span>
          </div>
          <h1 className="font-bricolage text-5xl md:text-[64px] leading-tight font-medium tracking-tight text-[#0A0A0A] mb-4 max-w-4xl">
            Panduan Karir & Strategi CV untuk Job Seeker Modern
          </h1>
          <p className="text-neutral-500 text-[18px] max-w-xl">
            Tips praktis, perbandingan tools, dan strategi job hunting berbasis data — semua bebas baca.
          </p>
        </header>

        <BlogGrid articles={articles} />
      </div>

      <FinalCTA />
    </main>
  );
}
