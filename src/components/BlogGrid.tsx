"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import type { Article } from "@/lib/articles";

const CATEGORIES = ["Semua", "Tools & Review", "Tips Karir", "Fresh Graduate", "AI & Teknologi"];

const gridClasses = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export default function BlogGrid({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex flex-wrap gap-2 mb-10 justify-center"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                : "bg-white text-neutral-600 border-black/10 hover:border-black/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
        {filtered.map((article, i) => {
          const gridClass = gridClasses[i] ?? "md:col-span-1 md:row-span-1";
          const isFeatured = gridClass.includes("row-span-2");
          return (
            <Link href={`/blog/${article.slug}`} key={article.slug} className={gridClass}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="group h-full relative overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer p-8 flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/0 group-hover:from-brand-accent/5 group-hover:to-transparent transition-colors duration-500" />

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-black/5 rounded-full text-xs font-semibold tracking-wide text-brand-dark">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-brand-neutral/60">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <h2
                    className={`font-bricolage font-bold tracking-tight mb-3 text-brand-dark group-hover:text-brand-accent transition-colors ${
                      isFeatured ? "text-3xl lg:text-4xl" : "text-xl"
                    }`}
                  >
                    {article.title}
                  </h2>
                  <p className="text-brand-neutral/80 line-clamp-3">{article.description}</p>
                </div>

                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
