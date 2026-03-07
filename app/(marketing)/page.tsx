import Hero from "../_components/Hero";
import { LandingNav } from "../_components/Landingnav";
import { FeaturesSection } from "../_components/FeaturesSections";
import { Footer } from "../_components/Footer";
import { Vision } from "../_components/Vision";
import { IntegrationSection } from "../_components/IntIntegrationSection";
import { FinalCTA } from "../FinalCTA";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Home({children}:{children:ReactNode}) {
  const session = await auth();
  if (session) redirect("/dashboard");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background">
      <Hero />
      <Vision />
      <FeaturesSection />
      <IntegrationSection />
      <FinalCTA />
    </main>
  );
}
