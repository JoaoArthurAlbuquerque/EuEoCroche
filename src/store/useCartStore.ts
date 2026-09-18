import { create } from "zustand";
import { CartItem, CustomOrderDetails } from "../types";

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  generateWhatsAppMessage: (details?: CustomOrderDetails) => string;
  getWhatsAppLink: (
    phoneNumber: string,
    details?: CustomOrderDetails,
  ) => string;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  updateQuantity: (id, delta) => {
    set((state) => ({
      items: state.items
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },

  generateWhatsAppMessage: (details) => {
    const { items, getTotalPrice } = get();
    const total = getTotalPrice().toFixed(2);

    if (items.length === 0) {
      return "Olá! Gostaria de tirar uma dúvida sobre os produtos do ateliê Eu e o Crochê.";
    }

    // Se for acionado via Encomenda Especial (com nome ou observações)
    if (details?.customerName || details?.notes) {
      let message = `Olá! Gostaria de fazer um pedido no ateliê Eu e o Crochê:\n`;
      if (details.customerName) {
        message += `*Nome:* ${details.customerName}\n`;
      }
      message += `\n*Itens Escolhidos:*\n`;
      items.forEach((item) => {
        message += `• ${item.quantity}x ${item.name} (R$ ${item.price.toFixed(2)})\n`;
      });
      message += `\n*Total Estimado:* R$ ${total}\n`;
      if (details.notes) {
        message += `*Observações/Tamanhos:* ${details.notes}\n`;
      }
      return message;
    }

    // Pedido Padrão via CartDrawer
    let message = `Olá! Gostaria de finalizar a encomenda dos seguintes itens no Eu e o Crochê:\n\n`;
    items.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} - R$ ${item.price.toFixed(2)}\n`;
    });
    message += `\n*Total: R$ ${total}*`;

    return message;
  },

  getWhatsAppLink: (phoneNumber, details) => {
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    const message = get().generateWhatsAppMessage(details);
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  },
}));
