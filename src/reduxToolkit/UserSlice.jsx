import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    userOrder:[],
    orderDetails:[],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload; // Set true if user exists
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setOrder:(state,action)=>{
      state.user=state.userOrder.push(action.payload);
    },
    setOrderDetails: (state, action) => {
      state.orderDetails = [...state.orderDetails, action.payload];
    },
    emptyOrder:(state)=>{
      state.userOrder.length=0;
    }
  },
});

export const { setUser, logoutUser,setOrder,setOrderDetails,emptyOrder} = userSlice.actions;

export default userSlice.reducer;
