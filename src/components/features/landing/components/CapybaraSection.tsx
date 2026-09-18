import React from "react";
import { Sparkles, Gift } from "lucide-react";

export const CapybaraSection: React.FC = () => {
  return (
    <section
      id="capivaras"
      className="relative z-10 py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="bg-[#2C3527] text-white rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-[#D49B54]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D49B54] bg-[#D49B54]/20 px-3 py-1 rounded-full">
              <Gift className="w-3.5 h-3.5" />
              Edição Especial do Ateliê
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              ✨ Caixinha Secreta de Capivaras
            </h2>

            <p className="text-sm sm:text-base text-[#EBF0E8] leading-relaxed">
              Uma experiência surpresa recheada com itens exclusivos temáticos
              de capivara tecidos em crochê! Inclui amigurumi exclusivo,
              chaveiro surpresa e mimos feitos à mão.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/5581999999999?text=Ol%C3%A1!%20Gostaria%20de%20encomendar%20a%20Caixinha%20Secreta%20de%20Capivaras."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-[#D49B54] text-[#2C3527] font-bold text-sm hover:bg-[#e0aa65] active:scale-95 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D49B54]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Garantir Minha Caixinha</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden bg-[#22291E] border border-[#D49B54]/30 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
              alt="Caixinha Secreta de Capivaras em Crochê"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
