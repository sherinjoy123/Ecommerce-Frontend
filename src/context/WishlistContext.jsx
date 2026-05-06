import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {

  // ✅ Load from localStorage initially (no flicker)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const data = localStorage.getItem("wishlist");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
  const removeFromWishlist = (productId) => {
    setWishlist((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };
  

  // ✅ Toggle Wishlist (single source of truth)
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist,removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
