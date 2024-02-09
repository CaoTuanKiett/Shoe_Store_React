import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  images: string[];
  title: string;
  code?: string;
  material?: string;
  style?: string;
  design?: string;
  brand?: string;
  color?: string;
  price: number;
  quantity?: number;
  size?: string[];
  id: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>
    ) => {
      const itemToUpdate = state.items.find(
        (item) => item.id === action.payload.itemId
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
