// src/context/ShopContext.js
import React, { createContext, useContext } from "react";
import { products } from "../assets/assets";

// Create Context
const ShopContext = createContext();

// Create and Export Provider
export const ShopContextProvider = ({ children }) => {
  const value = {
    products,
    currency: "$",
    delivery_fee: "20 $"
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
export const useShop = () => useContext(ShopContext);

