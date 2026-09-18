import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-lg border-4 border-[#FAF8F5] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80"
                alt="Processo artesanal de crochê feito à mão"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-script text-3xl text-[#839775] block tracking-wide">
              História & Propósito
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#2C3527] leading-tight">
              Carinho e dedicação em cada ponto
            </h2>
            <p className="text-base text-[#62705B] leading-relaxed">
              O <strong>Eu e o Crochê</strong> nasceu da paixão por transformar
              linhas em peças únicas carregadas de afeto e personalidade, como
              nossas caixinhas de capivaras colecionáveis.
            </p>
            <p className="text-base text-[#62705B] leading-relaxed">
              Diretamente de Recife para todo o Brasil, cada ponto reflete a
              união do artesanato tradicional brasileiro com designs modernos
              para vestir, decorar e presentear quem você ama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
