import React from "react";

export const BackgroundDecorations: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Folha Superior Esquerda - Hero */}
      <svg
        className="absolute -top-10 -left-12 w-64 h-64 md:w-96 md:h-96 text-[#839775] opacity-10 animate-float-leaf"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M100 10 C140 50, 180 80, 170 140 C150 190, 80 180, 40 140 C10 100, 50 40, 100 10 Z M100 10 C90 70, 95 120, 100 170"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M95 50 Q70 60 55 75 M97 80 Q65 95 50 115 M102 110 Q125 125 145 130 M100 70 Q120 80 135 95"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* Folha Lateral Direita - Catálogo */}
      <svg
        className="absolute top-[35%] -right-16 w-72 h-72 md:w-[28rem] md:h-[28rem] text-[#839775] opacity-[0.08] animate-float-slow"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path
          d="M100 15 C40 45, 20 110, 60 160 C100 200, 170 170, 180 110 C190 50, 150 10, 100 15 Z"
          fill="currentColor"
        />
      </svg>

      {/* Folha Inferior Esquerda - Caixinha Secreta */}
      <svg
        className="absolute top-[65%] -left-16 w-80 h-80 text-[#839775] opacity-[0.09] animate-float-leaf"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M30 170 C50 100, 100 40, 170 30 C120 90, 90 140, 30 170 Z"
          fill="#839775"
          fillOpacity="0.4"
          strokeWidth="2"
        />
        <path d="M30 170 Q100 100 170 30" strokeWidth="2" />
      </svg>

      {/* Trilha de Linhas Pontilhadas Conectando Seções */}
      <svg
        className="absolute inset-0 w-full h-full min-h-[3000px]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 3000"
      >
        <path
          d="M 200 400 Q 800 600, 300 1100 T 900 1800 T 200 2500"
          fill="none"
          stroke="#C2CBC0"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="animate-dashed-path"
        />
      </svg>

      {/* Ícones Flutuantes Mínimos (Novelo / Flor) */}
      <div className="absolute top-[18%] right-[12%] text-[#839775] opacity-20 animate-float-leaf">
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3C10 7 10 17 12 21 M3 12C7 10 17 10 21 12 M5.5 5.5C8.5 8.5 15.5 15.5 18.5 18.5 M18.5 5.5C15.5 8.5 8.5 15.5 5.5 18.5" />
        </svg>
      </div>

      <div className="absolute top-[52%] left-[8%] text-[#5E7250] opacity-20 animate-float-slow">
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2a4 4 0 0 0 0 8 4 4 0 0 0 0-8zM12 14a4 4 0 0 0 0 8 4 4 0 0 0 0-8zM2 12a4 4 0 0 0 8 0 4 4 0 0 0-8 0zM14 12a4 4 0 0 0 8 0 4 4 0 0 0-8 0z" />
        </svg>
      </div>
    </div>
  );
};
