import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/Products";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item)=>item.id === Number(id))
  

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Product not found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex gap-8 max-w-4xl">

        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover rounded-lg"
        />

        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>

          <p className="text-gray-500 mt-2">{product.category}</p>

          <p className="text-xl font-semibold mt-2">
            ₹{product.price}
          </p>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
