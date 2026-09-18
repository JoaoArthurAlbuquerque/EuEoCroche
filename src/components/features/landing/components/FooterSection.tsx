import React from "react";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "../../../icons/InstagramIcon";

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Eu e o Crochê.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 hover:text-amber-400 transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
