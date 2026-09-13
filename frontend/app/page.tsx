import { LandingHero } from "@/components/landing/LandingHero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { ExamIntelligenceShowcase } from "@/components/landing/ExamIntelligenceShowcase";
import { LandingNav } from "@/components/landing/LandingNav";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { ClosingCTA } from "@/components/landing/ClosingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <LandingNav />
      <LandingHero />
      <HowItWorks />
      <FeatureGrid />
      <ExamIntelligenceShowcase />
      <ClosingCTA />
      <LandingFooter />
    </div>
  );
}
