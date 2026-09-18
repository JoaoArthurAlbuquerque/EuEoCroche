import React, { useState } from "react";
import { Sparkles, MessageCircle, ShoppingBag, Check } from "lucide-react";
import { InstagramIcon } from "../../../icons/InstagramIcon";
import { useCartStore } from "../../../../store/useCartStore";

interface CapybaraPackageOption {
  id: string;
  title: string;
  quantity: number;
  price: number;
  badge?: string;
}

const PACKAGE_OPTIONS: CapybaraPackageOption[] = [
  { id: "capy-pkg-1", title: "1 Pacotinho Surpresa", quantity: 1, price: 35.0 },
  {
    id: "capy-pkg-2",
    title: "2 Pacotinhos Surpresas",
    quantity: 2,
    price: 70.0,
  },
  {
    id: "capy-pkg-3",
    title: "3 Pacotinhos (Kit Colecionador)",
    quantity: 3,
    price: 100.0,
    badge: "Mais Popular",
  },
  {
    id: "capy-pkg-5",
    title: "5 Pacotinhos (Caixa Completa)",
    quantity: 5,
    price: 160.0,
    badge: "Melhor Valor",
  },
];

export const CapybaraSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<CapybaraPackageOption>(
    PACKAGE_OPTIONS[2],
  );
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: selectedOption.id,
      title: selectedOption.title,
      description:
        "Chaveiro surpresa de capivara artesanal em crochê lacrado no envelope.",
      price: selectedOption.price,
      category: "especial",
      badge: "Edição Colecionável",
      image:
        "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido no ateliê Eu e o Crochê:\n\n` +
        `• 1x ${selectedOption.title} (R$ ${selectedOption.price.toFixed(2)})\n\n` +
        `*Total Estimado:* R$ ${selectedOption.price.toFixed(2)}`,
    );
    window.open(`https://wa.me/558198015910?text=${text}`, "_blank");
  };

  const handleInstagramOrder = () => {
    window.open("https://instagram.com/eu_eocroche", "_blank");
  };

  return (
    <section
      id="capivaras"
      className="py-20 bg-[#FAF6F0] border-y border-[#EAE3D2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna 1: Visual do Envelope Surpresa */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#D49B54] to-[#B37B34] p-8 text-white shadow-2xl border-4 border-white/80 overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-6">
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Edição Colecionável · Chaveiro Surpresa</span>
              </div>

              <div className="aspect-4/3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center p-6 text-center mb-6 relative group overflow-hidden">
                <div className="text-6xl mb-3 transition-transform duration-500 group-hover:scale-110">
                  🦫✉️
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Envelope Surpresa Capivara
                </h3>
                <p className="text-xs text-amber-100 mt-2 max-w-xs">
                  Cada caixinha vem lacrada com 1 chaveiro exclusivo vestido à
                  mão. Qual modelo vai sair na sua?
                </p>
              </div>

              <p className="text-xs text-amber-100/90 text-center font-medium">
                Qual capivara vai sair na sua caixinha? Abra o envelope e
                descubra seu chaveiro exclusivo!
              </p>
            </div>
          </div>

          {/* Coluna 2: Ação Rápida */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-script text-3xl text-[#839775] block">
                Caixinha Secreta 🐾
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2C3527] leading-tight mt-1">
                Garantir meu Pacotinho Surpresa
              </h2>
              <p className="text-sm sm:text-base text-[#62705B] mt-2 leading-relaxed">
                Cada envelope é lacrado e contém 1 chaveiro de capivara
                artesanal em crochê. Escolha a quantidade de pacotinhos:
              </p>
            </div>

            {/* Seletor de Opções */}
            <div className="space-y-3">
              {PACKAGE_OPTIONS.map((opt) => {
                const isSelected = selectedOption.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedOption(opt)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-[#D49B54] outline-none ${
                      isSelected
                        ? "bg-white border-[#D49B54] ring-2 ring-[#D49B54]/30 shadow-md"
                        : "bg-white/60 border-[#E5E9E0] hover:bg-white hover:border-[#D49B54]/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "border-[#D49B54] bg-[#D49B54]"
                            : "border-zinc-300"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-sm text-[#2C3527] block">
                          {opt.title}
                        </span>
                        {opt.badge && (
                          <span className="inline-block mt-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F7EDE2] text-[#7C4C1A]">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="font-bold text-base text-[#D49B54]">
                      R$ {opt.price.toFixed(2)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Ações */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-md focus-visible:ring-2 focus-visible:ring-[#839775] outline-none ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-[#839775] hover:bg-[#6E8260] text-white"
                }`}
              >
                {added ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <ShoppingBag className="w-4 h-4" />
                )}
                <span>
                  {added ? "Adicionado à Sacola" : "Adicionar à Sacola"}
                </span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-md focus-visible:ring-2 focus-visible:ring-emerald-600 outline-none"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Pacotinho no WhatsApp</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleInstagramOrder}
              className="w-full bg-[#F7EDE2] hover:bg-[#F3E2CC] text-[#7C4C1A] border border-[#D49B54]/40 py-3 px-6 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 outline-none"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Pedir pelo Instagram (@eu_eocroche)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
