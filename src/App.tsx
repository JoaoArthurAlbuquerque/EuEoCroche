import React from "react";
import { HeaderNav } from "./components/features/landing/components/HeaderNav";
import { HeroSection } from "./components/features/landing/components/HeroSection";
import { CatalogSection } from "./components/features/landing/components/CatalogSection";
import { CapybaraSection } from "./components/features/landing/components/CapybaraSection";
import { CustomOrderBuilder } from "./components/features/custom-order/hooks/CustomOrderBuilder";
import { AboutSection } from "./components/features/landing/components/AboutSection";
import { FooterSection } from "./components/features/landing/components/FooterSection";
import { FloatingCTAs } from "./components/ui/FloatingCTAs";
import { CartDrawer } from "./components/ui/CartDrawer";

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-800">
      <HeaderNav />
      <main>
        <HeroSection />
        <CatalogSection />
        <CapybaraSection />
        <CustomOrderBuilder />
        <AboutSection />
      </main>
      <FooterSection />
      <FloatingCTAs />
      <CartDrawer />
    </div>
  );
}

export default App;
