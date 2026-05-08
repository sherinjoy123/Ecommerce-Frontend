import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import About from "./About";
import { products } from "../data/products";

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const categories = [
    {
      name: "SkinCare",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    },
    {
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO */}
      <section
        className="h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1699982493671-e63ebd28e6cd?q=80&w=1470')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Discover Your Perfect Style
          </h1>

          <p className="text-lg mb-6 max-w-xl">
            Explore premium collections designed to elevate your everyday look.
          </p>

          <NavLink to="/product">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
              Shop Now →
            </button>
          </NavLink>
        </div>
      </section>

      {/* 🛍️ CATEGORIES */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((item, i) => (
            <div
              key={i}
              className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ PRODUCTS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition"
                />

                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>

                <div className="flex justify-between mt-2">
                  <p className="font-bold">₹{item.price}</p>
                  <span>⭐ 4.5</span>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 py-2 bg-black text-white rounded-lg"
                  >
                    Add
                  </button>

                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="flex-1 py-2 border rounded-lg"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 PROMO */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Big Sale is Live 🔥
        </h2>

        <NavLink to="/product">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg">
            Explore Now
          </button>
        </NavLink>
      </section>

      {/* ABOUT */}
      <About />

    </div>
  );
};

export default Home;
