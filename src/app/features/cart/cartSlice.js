import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        //do nothing
      } else {
        // Otherwise, add new item to cart
        state.items.push(newItem);
        state.totalQuantity++;
        state.totalPrice += newItem.price
      }    
     
    },
    removeItemFromCart(state, action) {
      const idToRemove = action.payload;
      const existingItem = state.items.find(item => item.id === idToRemove);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== idToRemove);
      }
    },
    updateItemQuantity(state, action) {
      const { id, newQuantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        const difference = newQuantity - existingItem.quantity;
        existingItem.quantity = newQuantity;
        state.totalQuantity += difference;
        state.totalPrice += difference * existingItem.price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;