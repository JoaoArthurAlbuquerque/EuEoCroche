import React from "react";
import { HeroCarousel } from "./HeroCarousel";
import { ShoppingBag, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative z-10 pt-6 pb-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Coluna Texto e Ações */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-[#5E7250] bg-[#EBF0E8] px-3.5 py-1.5 rounded-full w-fit mx-auto lg:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-[#839775]" />
            <span>Ateliê de Crochê Autoral</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#2C3527] leading-[1.15] tracking-tight">
            Feito com amor, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#839775]">
              feito pra você.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#62705B] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Peças artesanais exclusivas em crochê, unindo o carinho do trabalho
            manual ao design contemporâneo.
          </p>

          {/* Botões CTAs Reativos com Scroll Suave */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
            <button
              type="button"
              onClick={() => scrollToSection("colecao")}
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full bg-[#839775] text-white font-semibold text-sm hover:bg-[#6E8260] active:scale-95 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] focus-visible:ring-offset-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Ver Catálogo</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("capivaras")}
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full bg-[#EBF0E8] text-[#2C3527] font-semibold text-sm hover:bg-[#839775] hover:text-white active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 border border-[#E5E9E0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] focus-visible:ring-offset-2"
            >
              <span>✨ Caixinha de Capivaras</span>
            </button>
          </div>
        </div>

        {/* Coluna Carrossel Visual */}
        <div className="w-full">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
};
