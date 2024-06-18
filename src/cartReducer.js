// Initial state of the shopping cart
export const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0
};

// Reducer function to manage state changes
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if item is already in cart
      const existingIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        // If item exists, update quantity
        const updatedItems = [...state.cartItems];
        updatedItems[existingIndex].quantity += 1;
        return {
          ...state,
          cartItems: updatedItems,
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.payload.price
        };
      } else {
        // If item is new, add it to cart
        const newItem = {
          ...action.payload,
          quantity: 1
        };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.payload.price
        };
      }
    case 'REMOVE_ITEM':
      // Filter out item from cart
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      const removedItem = state.cartItems.find(item => item.id === action.payload.id);
      return {
        ...state,
        cartItems: updatedCartItems,
        totalItems: state.totalItems - removedItem.quantity,
        totalAmount: state.totalAmount - (removedItem.quantity * removedItem.price)
      };
    case 'CLEAR_CART':
      // Reset cart to initial state
      return initialState;
    default:
      return state;
  }
};