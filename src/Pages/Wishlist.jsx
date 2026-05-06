import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // ✅ inside component

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border mb-2 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">₹{item.price}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromWishlist(item.id)} // ✅ correct
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
