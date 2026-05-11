import HeroSection from "@/components/HeroSection";
import BentoFeatures from "@/components/BentoFeatures";
import SecurityShowcase from "@/components/SecurityShowcase";
import IntegrationVortex from "@/components/IntegrationVortex";
import FinalCTA from "@/components/FinalCTA";
import { siteConfig } from "@/lib/site-config";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon/dark.png`,
  sameAs: [
    "https://play.google.com/store/apps/details?id=com.clevermaster.app",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu CV ATS Friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CV ATS Friendly adalah CV yang didesain agar mudah dibaca oleh sistem Applicant Tracking System (ATS) yang digunakan banyak perusahaan besar. CleverCV memastikan struktur dan kata kunci CV Anda optimal untuk sistem ini."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara kerja AI di CleverCV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI kami menganalisis deskripsi pekerjaan yang Anda tuju dan memberikan saran kata kunci serta penyesuaian konten agar profil Anda terlihat paling relevan di mata HRD."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="w-full flex-1 flex flex-col items-center overflow-hidden">
        <HeroSection />
        <BentoFeatures />
        <SecurityShowcase />
        <IntegrationVortex />
        <FinalCTA />
      </main>
    </>
  );
}
