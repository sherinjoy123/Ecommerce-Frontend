import React from "react";
import { useCart } from "../context/CartContext"; // adjust path if needed

const CartItems = () => {
  const { cart, setCart } = useCart();

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty 😢</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <img
                className="w-12 h-12 object-cover"
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}

          <button
            onClick={handleOrder}
            className="bg-green-500 text-white px-6 py-3 rounded mt-4"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
