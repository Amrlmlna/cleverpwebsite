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
