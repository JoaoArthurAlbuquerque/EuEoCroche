import React from "react";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "../icons/InstagramIcon";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="p-2 text-zinc-600 hover:text-pink-600 transition-colors"
      >
        <InstagramIcon className="w-5 h-5" />
      </a>
      <a
        href="https://wa.me"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="p-2 text-zinc-600 hover:text-emerald-600 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}
