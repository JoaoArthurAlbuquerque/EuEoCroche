import React from "react";
import { Leaf, Menu } from "lucide-react";

interface HeaderNavProps {
  onOpenNav: () => void;
  isNavOpen: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenNav,
  isNavOpen,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#E5E9E0] transition-colors duration-200">
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] rounded-lg"
        >
          <div className="w-9 h-9 rounded-full bg-[#EBF0E8] flex items-center justify-center text-[#839775] group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-xl text-[#2C3527] tracking-tight">
            Eu e o Crochê
          </span>
        </a>

        {/* Botão Único do Menu Hambúrguer */}
        <button
          type="button"
          onClick={onOpenNav}
          aria-expanded={isNavOpen}
          aria-label="Abrir menu de navegação"
          className="min-w-[44px] min-h-[44px] w-10 h-10 rounded-full bg-[#839775] text-white hover:bg-[#6E8260] active:scale-95 transition-all flex items-center justify-center shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775] focus-visible:ring-offset-2"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
