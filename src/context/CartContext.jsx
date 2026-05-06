import React, { createContext, useContext, useState } from "react";

// ✅ Create context OUTSIDE
const CartContext = createContext();

// ✅ Custom hook
export const useCart = () => useContext(CartContext);

// ✅ Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Add to cart logic
  const addToCart = (product) => {
    setCart((prev)=>{
      const exists = prev.find((item)=>item.id === product.id);
      if(exists){
        return prev;
      }
      return [...prev,product]
    })
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,setCart }}>
      {children}
    </CartContext.Provider>
  );
};
