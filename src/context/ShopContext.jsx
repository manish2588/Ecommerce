
import React, { createContext, useContext } from "react";
import { products } from "../assets/assets";


const ShopContext = createContext();


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

