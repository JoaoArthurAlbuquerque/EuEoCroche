import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="pt-32 pb-16 lg:pt-40 lg:pb-28 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-script text-3xl sm:text-4xl text-[#839775] block tracking-wide">
              Feito à mão com afeto
            </span>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2C3527] leading-[1.05] tracking-tight">
              Feito com amor, <br className="hidden sm:inline" />
              feito pra você.
            </h1>

            <p className="text-base sm:text-lg text-[#62705B] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Peças artesanais exclusivas em crochê, unindo o carinho do
              trabalho manual ao design contemporâneo. Descubra nossas coleções
              e projetos especiais.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalogo"
                className="w-full sm:w-auto bg-[#839775] hover:bg-[#6E8260] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#839775] focus-visible:ring-offset-2 outline-none"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#capivara"
                className="w-full sm:w-auto bg-[#F7EDE2] hover:bg-[#F3E2CC] text-[#7C4C1A] border border-[#D49B54]/40 px-7 py-4 rounded-full font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D49B54] focus-visible:ring-offset-2 outline-none"
              >
                <Sparkles className="w-4 h-4 text-[#D49B54]" />
                <span>Caixinha de Capivaras</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?auto=format&fit=crop&w=1000&q=80"
                  alt="Peças artesanais em crochê feitas à mão"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                  loading="eager"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#E5E9E0] hidden sm:block max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF0E8] flex items-center justify-center text-[#839775] font-bold text-lg font-display shrink-0">
                    100%
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-[#2C3527]">
                      Artesanal & Exclusivo
                    </h2>
                    <p className="text-xs text-[#62705B]">
                      Feito ponto a ponto em Recife
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
