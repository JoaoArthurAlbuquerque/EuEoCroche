import React, { useState, useEffect } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { InstagramIcon } from "../../../icons/InstagramIcon";
import { useCartStore } from "../../../../store/useCartStore";

export const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { items, openCart } = useCartStore();
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-xs" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-amber-600 transition-transform group-hover:rotate-12" />
          <span className="font-bold text-xl tracking-tight text-zinc-900">
            Eu e o Crochê
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga no Instagram"
            className="p-2 text-zinc-600 hover:text-amber-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-600 rounded-full outline-none"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Abrir carrinho com ${totalCount} itens`}
            className="relative p-2 text-zinc-700 hover:text-amber-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-600 rounded-full outline-none"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalCount > 0 && (
              <span className="absolute top-1 right-1 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
