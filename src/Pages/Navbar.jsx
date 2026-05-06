import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/products";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredProducts = products.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo2} alt="Logo" className="h-12 w-60" />
        </NavLink>

        {/* Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <NavLink to="/product"><li>Product</li></NavLink>
          <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>

        <div className="flex items-center space-x-6">

          {/* 🔍 Search */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="hidden md:block border rounded-full px-4 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Dropdown */}
            {search && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto z-50">

                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                        setSearch("");
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.name}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">
                    No products found
                  </div>
                )}

              </div>
            )}
          </div>

          {/* Cart */}
          <div className="relative text-xl cursor-pointer">
            <NavLink to="/cartItems">🛒</NavLink>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cart.length}
            </span>
          </div>

          {/* Login */}
          <NavLink to="/login">
            <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-blue-700">
              Login
            </button>
          </NavLink>

          {/* Wishlist */}
          <NavLink to="/wishlist">
            <button className="border p-2 bg-slate-400 rounded-xl hover:bg-red-500">
              {wishlist.length}
            </button>
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
