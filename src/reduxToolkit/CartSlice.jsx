import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },

  reducers: {
    add_to_cart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        // If item already exists in the cart, increase the quantity
        state.cartItem[itemIndex].quantity += 1;
      } else {
        // If item does not exist in the cart, add it with quantity 1
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
    },
    delete_from_cart:(state,action)=>{
       state.cartItem=state.cartItem.filter((item)=>item._id!==action.payload)
    },
    emptyCart:(state)=>{
      state.cartItem.length=0;
    },
    handle_quantity:(state,action)=>{
        const itemIndex = state.cartItem.findIndex(
            (item) => item._id === action.payload.id
          );
          if (itemIndex >= 0) {
            // If item already exists in the cart, increase the quantity
            state.cartItem[itemIndex].quantity = action.payload.value;
          }
    }
  },
});

export const { add_to_cart,delete_from_cart,handle_quantity,emptyCart } = CartSlice.actions;

export default CartSlice.reducer;
