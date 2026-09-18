import React, { useState } from "react";
import { ShoppingBag, Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import { useCartStore } from "../../../../store/useCartStore";
import { InstagramIcon } from "../../../icons/InstagramIcon";

export const CustomOrderBuilder: React.FC = () => {
  const { items, removeItem, updateQuantity } = useCartStore();
  const [customerName, setCustomerName] = useState("");
  const [notes, setNotes] = useState("");
  const [nameError, setNameError] = useState(false);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const validate = () => {
    if (!customerName.trim()) {
      setNameError(true);
      return false;
    }
    setNameError(false);
    return true;
  };

  const generateMessage = () => {
    const itemLines =
      items.length > 0
        ? items
            .map(
              (i) =>
                `• ${i.quantity}x ${i.title} (R$ ${(i.price * i.quantity).toFixed(2)})`,
            )
            .join("\n")
        : "• Nenhum item selecionado previamente na sacola";

    return (
      `Olá! Gostaria de fazer um pedido no ateliê Eu e o Crochê:\n\n` +
      `*Nome:* ${customerName.trim()}\n\n` +
      `*Itens Escolhidos:*\n${itemLines}\n\n` +
      `*Total Estimado:* R$ ${totalPrice.toFixed(2)}\n` +
      `*Observações/Tamanhos:* ${notes.trim() || "Sem observações adicionais"}`
    );
  };

  const handleWhatsAppCheckout = () => {
    if (!validate()) return;
    const message = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/5581998015910?text=${message}`, "_blank");
  };

  const handleInstagramCheckout = () => {
    if (!validate()) return;
    window.open("https://instagram.com/eu_eocroche", "_blank");
  };

  return (
    <section id="monte-seu-pedido" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-script text-3xl text-[#839775] block">
            Atendimento Personalizado
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2C3527] leading-tight mt-1">
            Monte sua Encomenda Especial
          </h2>
          <p className="text-[#62705B] mt-3 text-base sm:text-lg leading-relaxed">
            Revise os itens da sua sacola, informe seu nome e detalhes
            adicionais (como tamanhos ou pedidos especiais) e envie direto para
            o ateliê.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coluna 1: Sacola de Itens (Zustand) */}
          <div className="lg:col-span-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#E5E9E0] space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5E9E0] pb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#839775]" />
                <h3 className="font-bold text-lg text-[#2C3527]">
                  Sua Sacola de Encomendas
                </h3>
              </div>
              <span className="text-xs font-bold text-[#839775] bg-[#EBF0E8] px-3 py-1 rounded-full">
                {items.reduce((acc, i) => acc + i.quantity, 0)} itens
              </span>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-10 text-[#62705B] space-y-2">
                <p className="font-medium text-sm">
                  Sua sacola está vazia no momento.
                </p>
                <p className="text-xs text-zinc-400">
                  Navegue pelo catálogo acima ou escolha pacotinhos de capivara
                  para adicionar.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-[#E5E9E0] shadow-xs"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-[#2C3527] truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs font-bold text-[#839775] mt-0.5">
                        R$ {item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 rounded-md bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-[#2C3527] w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 rounded-md bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-zinc-400 hover:text-rose-600 transition-colors"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-[#E5E9E0] pt-4 flex items-center justify-between font-bold text-lg text-[#2C3527]">
              <span>Total Estimado</span>
              <span className="text-[#839775] text-xl">
                R$ {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Coluna 2: Formulário do Cliente (Sem cores de fio) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#E5E9E0] space-y-5">
              <h3 className="font-bold text-lg text-[#2C3527] border-b border-[#E5E9E0] pb-3">
                Dados para Envio da Encomenda
              </h3>

              <div>
                <label
                  htmlFor="customerName"
                  className="block text-xs font-bold text-[#2C3527] mb-2"
                >
                  Seu Nome Completo *
                </label>
                <input
                  id="customerName"
                  type="text"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (e.target.value.trim()) setNameError(false);
                  }}
                  placeholder="Digite seu nome completo"
                  className={`w-full p-3.5 text-xs rounded-xl bg-white border text-[#2C3527] placeholder-zinc-400 outline-none transition-all ${
                    nameError
                      ? "border-rose-500 ring-2 ring-rose-500/20"
                      : "border-[#E5E9E0] focus:border-[#839775] focus:ring-2 focus:ring-[#839775]/20"
                  }`}
                />
                {nameError && (
                  <p className="text-[11px] text-rose-600 font-semibold mt-1">
                    Por favor, informe seu nome para prosseguir com o pedido.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs font-bold text-[#2C3527] mb-2"
                >
                  Observações, Tamanhos ou Detalhes da Encomenda
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex.: Vestido tamanho 2 anos, recado para presente, tamanhos de cropped..."
                  className="w-full p-3.5 text-xs rounded-xl bg-white border border-[#E5E9E0] text-[#2C3527] placeholder-zinc-400 focus:border-[#839775] focus:ring-2 focus:ring-[#839775]/20 outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-600 outline-none"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Finalizar Pedido pelo WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleInstagramCheckout}
                  className="w-full bg-[#FAF8F5] hover:bg-[#F3E2CC] text-[#7C4C1A] border border-[#D49B54]/40 py-3.5 px-6 rounded-full font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all duration-300 outline-none"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Enviar Pedido pelo Instagram (@eu_eocroche)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
