import React from "react";
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCartStore } from "../../store/useCartStore";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  whatsappNumber = "5581999999999",
}) => {
  const { items, removeItem, updateQuantity, getTotalPrice, getWhatsAppLink } =
    useCartStore();

  if (!isOpen) return null;

  const total = getTotalPrice();
  const whatsappUrl = getWhatsAppLink(whatsappNumber);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs transition-opacity">
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-zinc-50 dark:bg-zinc-900 shadow-2xl flex flex-col border-l border-zinc-200 dark:border-zinc-800">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Seu Carrinho (
                {items.reduce((acc, item) => acc + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12 text-zinc-500 dark:text-zinc-400">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-40" />
                <p className="text-base font-medium">Seu carrinho está vazio</p>
                <p className="text-xs mt-1">
                  Adicione itens do catálogo para montar seu pedido.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
                >
                  <div className="flex-1 pr-3">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-xl bg-zinc-100 dark:bg-zinc-800 p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer CTA */}
          {items.length > 0 && (
            <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-4">
              <div className="flex items-center justify-between text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <span>Total</span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  R$ {total.toFixed(2)}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-emerald-600/20"
              >
                <span>Enviar Encomenda no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
