export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category?: string;
  imageUrl?: string;
}

export interface CustomOrderDetails {
  customerName?: string;
  notes?: string;
}
