import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import About from "./About";

const Home = () => {

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
          image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
      
    const {addToCart}=useCart();
  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1699982493671-e63ebd28e6cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Discover Your Perfect Style
          </h1>

          <p className="text-lg mb-6 max-w-xl">
            Explore premium collections designed to elevate your everyday look.
          </p>

          <NavLink to="/product">
          <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">


           <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition"></span>

           <span className="relative flex items-center gap-2">
           Shop Now
          <span className="transform group-hover:translate-x-1 transition duration-300">
    →
           </span>
          </span>

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
        {/* Background Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold tracking-wide">
            {item.name}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ⭐ FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow hover:shadow-xl p-4 transition hover:scale-105"
            >
              <img
                src={`https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fHww=${item}`}
                alt="product"
                className="w-full h-48 object-cover rounded-lg"
              />

              <h3 className="mt-4 font-semibold text-lg">
                Tshirts
              </h3>

              <p className="text-gray-600">$49.99</p>

              <div className="mt-4 flex justify-between items-center">

              <button onClick={()=>addToCart(item)} className=" w-28 py-2 bg-black text-white  rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
              <div>
              <button className=" p-2 w-16 bg-black text-white py-2 rounded-lg hover:bg-blue-700">
               View
              </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 PROMO BANNER */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Big Sale is Live 🔥
        </h2>
        <p className="mb-6">
          Get up to 50% off on selected items
        </p>

        <NavLink to="/product">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
            Explore Now
          </button>
        </NavLink>
      </section>



<div>
    <section>
        <About/>
    </section>
</div>

    </div>
    

    
  );
};

export default Home;
