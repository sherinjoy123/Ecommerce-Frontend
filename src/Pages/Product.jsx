import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Product = () => {
  const { wishlist, toggleWishlist } = useWishlist(); // ✅ fixed
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => {
          const isWishlisted = wishlist.find(
            (p) => p.id === item.id
          );

          return (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow hover:shadow-xl transition hover:scale-105 p-4"
            >
              {/* ❤️ Heart Button */}
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={() => toggleWishlist(item)}
                  className="bg-white p-2 rounded-full shadow transition hover:scale-110 active:scale-90"
                >
                  {isWishlisted ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-gray-600 text-lg" />
                  )}
                </button>
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h3 className="mt-4 font-semibold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.category}
              </p>

              <p className="text-black font-bold mt-1">
                ₹{item.price}
              </p>

              <div className="mt-4 flex gap-2">
  
  <button
    onClick={() => addToCart(item)}
    className="flex-1 py-2 text-sm font-medium bg-black text-white rounded-lg 
               hover:bg-gray-800 transition duration-300 shadow-sm hover:shadow-md"
  >
    Add to Cart
  </button>

  <button
    onClick={() => navigate(`/product/${item.id}`)}
    className="flex-1 py-2 text-sm font-medium border border-gray-300 text-gray-700 rounded-lg 
               hover:bg-gray-100 transition duration-300"
  >
    View
  </button>

</div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
