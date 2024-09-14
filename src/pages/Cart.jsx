import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-teal-800">
      {cart.length > 0 ? (
        <div className="w-full max-w-6xl mx-auto">
          {/* Cart Items */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white shadow-xl rounded-lg p-8 w-full md:max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div className="text-3xl font-extrabold text-gray-800 mb-4 md:mb-0">Your Cart</div>
              <div className="text-3xl font-extrabold text-gray-800">Summary</div>
            </div>
            <p className="text-gray-600 mb-6">
              Total Items: <span className="font-semibold">{cart.length}</span>
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-3xl font-extrabold text-gray-900 mb-4 md:mb-0">
                Total Amount: ${totalAmount}
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-extrabold text-gray-100 mb-8">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
