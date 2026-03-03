import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import { LandingNav } from "./_components/Landingnav";
import { FeaturesSection } from "./_components/FeaturesSections";
import { Footer } from "./_components/Footer";
import { Vision } from "./_components/Vision";
import { IntegrationSection } from "./_components/IntIntegrationSection";
import { FinalCTA } from "./FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background">
      <LandingNav />
      <Hero />
      <Vision />
      <FeaturesSection />
      <IntegrationSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
