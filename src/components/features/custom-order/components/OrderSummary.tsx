import React from "react";
import { Send, User, FileText } from "lucide-react";
import { useCustomOrderBuilder } from "../hooks/CustomOrderBuilder";

interface OrderSummaryProps {
  whatsappNumber?: string;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  whatsappNumber = "5581999999999",
}) => {
  const {
    items,
    total,
    customerName,
    setCustomerName,
    notes,
    setNotes,
    sendCustomOrder,
  } = useCustomOrderBuilder(whatsappNumber);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendCustomOrder();
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm transition-all">
      <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
        Monte sua Encomenda Especial
      </h3>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
        Confirme os itens selecionados e informe os detalhes para o ateliê.
      </p>

      {/* Lista de Itens do Carrinho */}
      <div className="space-y-3 mb-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Itens Selecionados ({items.length})
        </h4>

        {items.length === 0 ? (
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500">
            Nenhum item selecionado. Adicione produtos pelo catálogo acima!
          </div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800/60 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 px-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="py-2.5 flex items-center justify-between text-xs"
              >
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  {item.quantity}x {item.name}
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="py-3 flex items-center justify-between text-sm font-bold text-zinc-900 dark:text-zinc-50">
              <span>Total Estimado</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                R$ {total.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Formulário de Detalhes da Encomenda Especial */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="customerName"
            className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Seu Nome
          </label>
          <div className="relative">
            <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Digite seu nome..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:border-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="notes"
            className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Observações / Tamanhos / Cores Especiais
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 absolute left-3 top-3 text-zinc-400 pointer-events-none" />
            <textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Cor verde sábia, tamanho para RN, etc..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:border-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/20 transition-all resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={items.length === 0}
          className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20 mt-2"
        >
          <Send className="w-4 h-4" />
          <span>Finalizar Encomenda no WhatsApp</span>
        </button>
      </form>
    </div>
  );
};
