import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Coleção Crochê Infantil",
    subtitle:
      "Amigurumis e roupinhas feitas com fios 100% algodão hipoalergênico.",
    tag: "Artesanal e Seguro",
    image:
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=900&q=80",
    alt: "Peça delicada amigurumi infantil em crochê",
  },
  {
    id: 2,
    title: "Chaveiros & Acessórios",
    subtitle:
      "Pequenos detalhes tecidos à mão para acompanhar o seu dia a dia.",
    tag: "Exclusividade",
    image:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=80",
    alt: "Chaveiro artesanal em crochê colorido",
  },
  {
    id: 3,
    title: "Bolsas de Algodão Natural",
    subtitle:
      "Design contemporâneo unido à resistência da trama artesanal tradicional.",
    tag: "Design Sustentável",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
    alt: "Bolsa tecida em fios de algodão natural",
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <section
      aria-label="Carrossel de Destaques"
      className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-[#E5E9E0] bg-white shadow-sm group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-out h-[360px] sm:h-[420px] md:h-[480px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex-shrink-0"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3527]/85 via-[#2C3527]/30 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FAF8F5]/90 text-[#2C3527] w-fit mb-2 shadow-xs">
                <Sparkles className="w-3 h-3 text-[#D49B54]" />
                {slide.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white tracking-tight leading-tight">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EBF0E8] max-w-md mt-1.5 line-clamp-2">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Setas de Navegação */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Slide Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#2C3527] flex items-center justify-center backdrop-blur-xs transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 active:scale-95 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775]"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Próximo Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#2C3527] flex items-center justify-center backdrop-blur-xs transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 active:scale-95 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#839775]"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para o slide ${idx + 1}`}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center transition-all focus-visible:outline-none"
          >
            <span
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-7 bg-[#839775]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
