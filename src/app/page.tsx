import HeroSection from "@/components/HeroSection";
import BentoFeatures from "@/components/BentoFeatures";
import SecurityShowcase from "@/components/SecurityShowcase";
import IntegrationVortex from "@/components/IntegrationVortex";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="w-full flex-1 flex flex-col items-center overflow-hidden">
      <HeroSection />
      <BentoFeatures />
      <SecurityShowcase />
      <IntegrationVortex />
      <FinalCTA />
    </main>
  );
}
