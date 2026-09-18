import React, { useState } from "react";
import { useCartStore } from "../../../../store/useCartStore";
import { Product } from "../../../../types";
import { Plus, Check, Heart, Sparkles } from "lucide-react";

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Chaveiro 'Mini Flor'",
    category: "Chaveiros",
    price: 25.0,
    image:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=500&q=80",
    description: "Delicado chaveiro floral com gancho metálico reforçado.",
  },
  {
    id: "2",
    name: "Capivara de Crochê 'Capi'",
    category: "Amigurumis",
    price: 85.0,
    image:
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=500&q=80",
    description: "Amigurumi fofinho tecido à mão com fios de algodão natural.",
  },
  {
    id: "3",
    name: "Bolsa Tote Algodão",
    category: "Bolsas",
    price: 140.0,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=80",
    description: "Bolsa espaçosa e elegante para passeios e dia a dia.",
  },
  {
    id: "4",
    name: "Manta Baby Candy Color",
    category: "Infantil",
    price: 195.0,
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=80",
    description: "Manta em crochê macia e antialérgica para bebês.",
  },
  {
    id: "5",
    name: "Jogo Americano (4 Unid)",
    category: "Casa",
    price: 110.0,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80",
    description: "Conjunto de mesa posta tecido em ponto baixo estruturado.",
  },
  {
    id: "6",
    name: "Necessaire Folha Sálvia",
    category: "Acessórios",
    price: 65.0,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
    description: "Necessaire compacta com fecho em zíper e forro de tecido.",
  },
];

const CATEGORIES = [
  "Todos",
  "Amigurumis",
  "Chaveiros",
  "Bolsas",
  "Infantil",
  "Casa",
  "Acessórios",
];

export const CatalogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [addedId, setAddedId] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts =
    selectedCategory === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section
      id="colecao"
      className="relative z-10 py-12 md:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5E7250] bg-[#EBF0E8] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#839775]" />
          Catálogo Exclusivo
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C3527] mt-3">
          Nossas Criações Artesanais
        </h2>
        <p className="text-sm sm:text-base text-[#62705B] mt-2">
          Cada ponto conta uma história. Escolha suas peças favoritas e receba
          em casa com carinho.
        </p>

        {/* Filtros de Categoria */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 overflow-x-auto pb-2 scrollbar-none px-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`min-h-[44px] px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] ${
                selectedCategory === cat
                  ? "bg-[#839775] text-white shadow-xs"
                  : "bg-white text-[#2C3527] border border-[#E5E9E0] hover:bg-[#EBF0E8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Responsiva 2 Colunas Lado a Lado no Mobile */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6 px-1 sm:px-0">
        {filteredProducts.map((product) => {
          const isAdded = addedId === product.id;
          return (
            <article
              key={product.id}
              className="bg-white border border-[#E5E9E0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group justify-between"
            >
              {/* Imagem + Badge */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#FAF8F5]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 text-[10px] sm:text-xs bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full font-semibold text-[#2C3527] shadow-xs">
                  {product.category}
                </span>
                <button
                  type="button"
                  aria-label="Adicionar aos favoritos"
                  className="absolute top-2 right-2 min-w-[36px] min-h-[36px] w-9 h-9 rounded-full bg-white/80 backdrop-blur-xs text-[#2C3527] hover:text-red-500 flex items-center justify-center transition-colors focus-visible:outline-none"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Informações Compactas */}
              <div className="flex flex-col flex-1">
                <h3 className="text-xs sm:text-sm font-semibold text-[#2C3527] line-clamp-1 mt-2 px-2.5 sm:px-3">
                  {product.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#62705B] line-clamp-2 px-2.5 sm:px-3 mt-0.5 hidden sm:block">
                  {product.description}
                </p>

                {/* Rodapé do Card */}
                <div className="flex items-center justify-between p-2 sm:p-3 border-t border-[#E5E9E0] mt-auto">
                  <span className="text-xs sm:text-sm font-bold text-[#2C3527]">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Adicionar ${product.name} à sacola`}
                    className={`min-h-[44px] px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] ${
                      isAdded
                        ? "bg-[#25D366] text-white"
                        : "bg-[#EBF0E8] text-[#2C3527] hover:bg-[#839775] hover:text-white"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span className="hidden xs:inline">Adicionado</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Adicionar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
