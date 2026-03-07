// app/(marketing)/layout.tsx
import { LandingNav } from "../_components/Landingnav";
import { Footer } from "../_components/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingNav />
      {children}
      <Footer />
    </>
  );
}
