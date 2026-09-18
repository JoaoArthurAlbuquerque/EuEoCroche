import React from "react";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "../icons/InstagramIcon";

export const FloatingCTAs: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Siga no Instagram"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <InstagramIcon className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale no WhatsApp"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};
