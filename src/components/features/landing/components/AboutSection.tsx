import React from "react";
import { Heart, Flower2, Scissors } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative z-10 py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-[#E5E9E0] shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
            alt="Processo artesanal do ateliê Eu e o Crochê"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-5 text-[#2C3527]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5E7250] bg-[#EBF0E8] px-3 py-1 rounded-full inline-block">
            Nossa História
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif leading-tight">
            Do carinho de cada laçada ao afeto da entrega.
          </h2>

          <p className="text-sm sm:text-base text-[#62705B] leading-relaxed">
            O ateliê Eu e o Crochê nasceu do desejo de desacelerar o tempo e
            criar objetos que carreguem alma. Cada linha é selecionada com
            rigor, priorizando fios naturais de algodão e acabamentos de
            altíssima qualidade.
          </p>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E5E9E0]">
            <div className="text-center p-3 rounded-2xl bg-white border border-[#E5E9E0]">
              <Heart className="w-5 h-5 text-[#839775] mx-auto mb-1" />
              <span className="text-xs font-bold block text-[#2C3527]">
                100% Feito à Mão
              </span>
            </div>
            <div className="text-center p-3 rounded-2xl bg-white border border-[#E5E9E0]">
              <Flower2 className="w-5 h-5 text-[#839775] mx-auto mb-1" />
              <span className="text-xs font-bold block text-[#2C3527]">
                Fios Hipoalergênicos
              </span>
            </div>
            <div className="text-center p-3 rounded-2xl bg-white border border-[#E5E9E0]">
              <Scissors className="w-5 h-5 text-[#839775] mx-auto mb-1" />
              <span className="text-xs font-bold block text-[#2C3527]">
                Acabamento Único
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
