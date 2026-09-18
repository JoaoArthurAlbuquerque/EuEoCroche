import React from "react";
import { Leaf, Heart } from "lucide-react";
import { InstagramIcon } from "../../../icons/InstagramIcon";

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#2C3527] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-[#3A4535]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-[#3A4535]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#839775] flex items-center justify-center text-white">
            <Leaf className="w-4 h-4" />
          </div>
          <span className="font-serif font-bold text-xl text-white">
            Eu e o Crochê
          </span>
        </div>

        <p className="text-xs text-[#EBF0E8] text-center md:text-left max-w-md">
          Ateliê artesanal de peças exclusivas tecidas em crochê. Criando afeto
          em forma de pontos.
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram do Ateliê"
          className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-[#3A4535] hover:bg-[#839775] flex items-center justify-center text-white transition-colors"
        >
          <InstagramIcon className="w-5 h-5" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#A2B09C] gap-2">
        <p>
          © {new Date().getFullYear()} Eu e o Crochê. Todos os direitos
          reservados.
        </p>
        <p className="flex items-center gap-1">
          Feito com{" "}
          <Heart className="w-3.5 h-3.5 text-[#D49B54] fill-current" /> em
          Pernambuco.
        </p>
      </div>
    </footer>
  );
};
