import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import type { Metadata } from "next";

// Tell Next.js which slugs exist at build time
export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

// Dynamic SEO metadata per article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikel tidak ditemukan" };

  return {
    title: `${article.title} | CleverCV Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.dateISO,
      authors: [article.author],
      siteName: "CleverCV",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  // JSON-LD structured data for Google + LLM discoverability
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "CleverCV",
      url: "https://clevercv.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://clevercv.app/blog/${article.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD for Google + LLM RAG indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="w-full min-h-screen flex flex-col bg-[#FFFAF5] pt-28">
        {/* Article Header */}
        <div className="w-full max-w-3xl mx-auto px-6 pt-12 pb-10">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Blog
          </Link>

          {/* Category + Read Time */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#0A0A0A]/5 rounded-full text-xs font-semibold tracking-wide text-[#0A0A0A]">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-neutral-400">
              <Clock size={12} />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-bricolage text-[32px] md:text-[44px] leading-[1.15em] font-bold tracking-tight text-[#0A0A0A] mb-6">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-[18px] text-neutral-600 leading-relaxed mb-8 max-w-2xl">
            {article.description}
          </p>

          {/* Author + Date */}
          <div className="flex items-center gap-3 pb-8 border-b border-black/8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0A0A0A]">{article.author}</p>
              <p className="text-xs text-neutral-400">
                {article.role} · {article.date}
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="w-full max-w-3xl mx-auto px-6 pb-20">
          <div
            className="prose prose-neutral prose-lg max-w-none
              prose-headings:font-bricolage prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#0A0A0A]
              prose-h2:text-[26px] prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-[20px] prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-neutral-700 prose-p:leading-[1.75] prose-p:text-[17px]
              prose-li:text-neutral-700 prose-li:text-[17px]
              prose-strong:text-[#0A0A0A] prose-strong:font-semibold
              prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
              prose-table:text-sm prose-th:bg-neutral-100 prose-th:font-semibold
              prose-td:border prose-th:border prose-td:px-3 prose-td:py-2 prose-th:px-3 prose-th:py-2
              prose-table:border-collapse prose-table:w-full"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* CTA Banner */}
        <div className="w-full max-w-3xl mx-auto px-6 pb-24">
          <div className="rounded-[28px] bg-[#0A0A0A] text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
                Coba Gratis Sekarang
              </p>
              <h3 className="font-bricolage text-[22px] md:text-[28px] font-bold leading-tight">
                Buat CV yang lolos ATS<br />
                <span className="text-white/60">dalam kurang dari 5 menit.</span>
              </h3>
            </div>
            <Link
              href="https://play.google.com/store/apps/details?id=com.clevermaster.app&hl=id"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 transition-colors text-white font-bold px-7 py-4 rounded-[14px] text-[15px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4 2.5v19c0 .4.2.7.5.8.1.1.3.1.5 0l16-9.5c.3-.2.3-.6 0-.8l-16-9.5c-.2-.1-.4-.1-.6 0-.3.1-.4.4-.4.8z" />
              </svg>
              Download CleverCV — Gratis
            </Link>
          </div>
        </div>

        <FinalCTA />
      </main>
    </>
  );
}
