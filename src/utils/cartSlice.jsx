import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update the quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If the item is not in the cart, add it with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => {
      // Find the index of the first item with the matching ID
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === itemId
      );

      if (itemIndex !== -1) {
        // If the item is in the cart, decrement the quantity
        state.items[itemIndex].quantity -= 1;

        // If the quantity becomes 0, remove the item from the cart
        if (state.items[itemIndex].quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
        state.totalItems -= 1;
      }
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
