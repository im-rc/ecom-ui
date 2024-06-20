import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
    cartItems: [],
    totalItems: 0,
    totalAmount: 0
    }
  
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action) => {

    },
    clearCart:() => {
      state.cartItems = initialState.cartItems;
    }
  }
});


export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
