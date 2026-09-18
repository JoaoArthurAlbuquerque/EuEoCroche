import React, { useState } from "react";
import { BackgroundDecorations } from "./components/ui/BackgroundDecorations";
import { HeaderNav } from "./components/features/landing/components/HeaderNav";
import { NavDrawer } from "./components/ui/NavDrawer";
import { HeroSection } from "./components/features/landing/components/HeroSection";
import { CatalogSection } from "./components/features/landing/components/CatalogSection";
import { CapybaraSection } from "./components/features/landing/components/CapybaraSection";
import { AboutSection } from "./components/features/landing/components/AboutSection";
import { FooterSection } from "./components/features/landing/components/FooterSection";
import { CartDrawer } from "./components/ui/CartDrawer";
import { FloatingCTAs } from "./components/ui/FloatingCTAs";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C3527] relative selection:bg-[#839775] selection:text-white">
      {/* Camada Global Decorativa Autoral */}
      <BackgroundDecorations />

      {/* Cabeçalho Reestruturado */}
      <HeaderNav onOpenNav={() => setIsNavOpen(true)} isNavOpen={isNavOpen} />

      {/* Menu Lateral Recolhível */}
      <NavDrawer
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Seções Mantidas */}
      <main className="relative z-10">
        <HeroSection />
        <CatalogSection />
        <CapybaraSection />
        <AboutSection />
      </main>

      <FooterSection />

      {/* Gaveta do Carrinho e Botão WhatsApp Flutuante */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FloatingCTAs />
    </div>
  );
}
