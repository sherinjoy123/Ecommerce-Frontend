import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">

  
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

       
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">
            🛒 ShopX
          </h1>
          <p className="text-sm">
            Your one-stop destination for quality products at the best prices.
          </p>
        </div>

        {/* 📦 QUICK LINKS */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 98765 43210</li>
            <li>📧 support@shopX.com</li>
            <li>📍 Kerala, India</li>
          </ul>
        </div>

        {/* 🌐 SOCIAL */}
        <div>
          <h2 className="text-white font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">

            <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 cursor-pointer transition">
              <FaFacebookF />
            </div>

            <div className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 cursor-pointer transition">
              <FaInstagram />
            </div>

            <div className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 cursor-pointer transition">
              <FaTwitter />
            </div>

            <div className="bg-gray-800 p-3 rounded-full hover:bg-green-500 cursor-pointer transition">
              <FaWhatsapp />
            </div>

          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
