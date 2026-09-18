import React, { useEffect } from "react";
import { useCartStore } from "../../store/useCartStore";
import {
  X,
  MessageCircle,
  Instagram,
  Heart,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCart: () => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({
  isOpen,
  onClose,
  onOpenCart,
}) => {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className={`fixed inset-0 z-50 transition-all duration-250 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop Escurecido com Blur */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-250 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Painel do Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-xs sm:max-w-sm bg-[#FAF8F5] border-l border-[#E5E9E0] shadow-2xl transition-transform duration-250 ease-out flex flex-col p-6 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho do Drawer */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E9E0]">
          <h2 className="font-serif font-bold text-xl text-[#2C3527]">
            Navegação
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full flex items-center justify-center text-[#2C3527] hover:bg-[#EBF0E8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Menu */}
        <div className="flex-1 py-6 space-y-6">
          {/* Seção 1: Contato */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#2C3527]">
              Contato
            </h3>
            <div className="space-y-2">
              <a
                href="https://wa.me/5581998015910"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E9E0] text-[#2C3527] hover:bg-[#EBF0E8] active:scale-98 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] min-h-[44px]"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#839775] shrink-0" />
                  <span className="text-sm font-semibold">WhatsApp</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#839775] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://instagram.com/eu_eocroche"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E9E0] text-[#2C3527] hover:bg-[#EBF0E8] active:scale-98 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] min-h-[44px]"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#839775] shrink-0" />
                  <span className="text-sm font-semibold">Instagram</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#839775] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <hr className="border-t border-[#E5E9E0]" />

          {/* Seção 2: Favoritos */}
          <button
            type="button"
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E9E0] text-[#2C3527] hover:bg-[#EBF0E8] active:scale-98 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] min-h-[44px]"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#839775] shrink-0" />
              <span className="text-sm font-semibold">Meus Favoritos</span>
            </div>
            <ChevronRight className="w-4 h-4 text-[#839775] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <hr className="border-t border-[#E5E9E0]" />

          {/* Seção 3: Carrinho */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenCart();
            }}
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E9E0] text-[#2C3527] hover:bg-[#EBF0E8] active:scale-98 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] min-h-[44px]"
          >
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#839775] shrink-0" />
              <span className="text-sm font-semibold">Minha Sacola</span>
            </div>
            <div className="flex items-center gap-2">
              {totalItems > 0 && (
                <span className="bg-[#839775] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
              <ChevronRight className="w-4 h-4 text-[#839775] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </aside>
    </div>
  );
};
