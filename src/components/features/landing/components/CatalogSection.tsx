import React, { useState } from "react";
import { Sparkles, ShoppingBag, Check } from "lucide-react";
import type { Product } from "../../../../types";
import { useCartStore } from "../../../../store/useCartStore";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "cropped-sol-mar",
    title: "Cropped 'Sol e Mar'",
    description:
      "Ponto trabalhado para dias ensolarados com caimento confortável.",
    price: 110.0,
    category: "croppeds" as any,
    badge: "Mais Vendido",
    image:
      "https://plus.unsplash.com/premium_photo-1727427851654-a7208d9c0e48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "cropped-salvia-boho",
    title: "Cropped 'Sálvia Boho'",
    description: "Modelagem ciganinha com acabamento artesanal em tom sálvia.",
    price: 125.0,
    category: "croppeds" as any,
    image:
      "https://plus.unsplash.com/premium_photo-1725914369468-d3b3899ef9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "chaveiro-mini-flor",
    title: "Chaveiro 'Mini Flor'",
    description: "Delicado chaveiro floral com gancho metálico reforçado.",
    price: 25.0,
    category: "chaveiros" as any,
    image:
      "https://images.unsplash.com/photo-1784368611020-f803b005bbfd?q=80&w=628&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "chaveiro-coracao-afeto",
    title: "Chaveiro 'Coração Afeto'",
    description:
      "Mini coração macio em ponto denso com enchimento antialérgico.",
    price: 20.0,
    category: "chaveiros" as any,
    image:
      "https://images.unsplash.com/photo-1751526593459-6dc7ac23d6b7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "vestido-infantil-jardim",
    title: "Vestido Infantil 'Jardim'",
    description:
      "Vestidinho de crochê em fio 100% algodão macio e antialérgico.",
    price: 130.0,
    category: "infantil" as any,
    badge: "Edição Infantil",
    image:
      "https://images.unsplash.com/photo-1599192111385-61b488400093?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sapatinho-nuvem-rn",
    title: "Sapatinho 'Nuvem' (Recém-Nascido)",
    description: "Sapatinho macio e delicado para bebês de 0 a 6 meses.",
    price: 45.0,
    category: "infantil" as any,
    image:
      "https://images.unsplash.com/photo-1602685365252-c13f549f1f5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "bolsa-tiracolo-salvia",
    title: "Bolsa de Algodão 'Tiracolo Sálvia'",
    description:
      "Bolsa estruturada em fio de algodão natural com alça confortável.",
    price: 149.0,
    category: "bolsas" as any,
    badge: "Destaque",
    image:
      "https://images.unsplash.com/photo-1629736329185-086161cda231?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "bolsa-ecobag-croche",
    title: "Bolsa de Algodão 'Ecobag Crochê'",
    description:
      "Espaçosa e resistente para acompanhar sua rotina com elegância.",
    price: 115.0,
    category: "bolsas" as any,
    image:
      "https://plus.unsplash.com/premium_photo-1724138461530-813df86f0e2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "croppeds", label: "Croppeds" },
  { id: "chaveiros", label: "Chaveiros" },
  { id: "infantil", label: "Infantil" },
  { id: "bolsas", label: "Bolsas" },
];

export const CatalogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [addedId, setAddedId] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts =
    selectedCategory === "todos"
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="colecao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#839775] font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Coleção Afeto & Design</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C3527] mt-1 font-display">
              Nosso Catálogo
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#839775] outline-none ${
                  selectedCategory === cat.id
                    ? "bg-[#839775] text-white shadow-xs"
                    : "bg-[#FAF8F5] text-[#2C3527] hover:bg-[#EBF0E8]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#E5E9E0] flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="aspect-4/3 relative overflow-hidden bg-zinc-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#7C4C1A] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#D49B54]/30">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-base text-[#2C3527] group-hover:text-[#839775] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#62705B] mt-1.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#E5E9E0]/60 mt-auto">
                <span className="text-base font-bold text-[#2C3527]">
                  R$ {product.price.toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#839775] outline-none ${
                    addedId === product.id
                      ? "bg-emerald-600 text-white"
                      : "bg-[#839775] hover:bg-[#6E8260] text-white shadow-xs"
                  }`}
                >
                  {addedId === product.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Adicionado</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>+ Adicionar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
