import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl flex items-center p-4 gap-6 transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
      {/* Image */}
      <div className="w-full max-w-xs h-auto">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-auto object-contain rounded-lg"
  />
</div>

      {/* Details */}
      <div className="flex-grow">
        <h1 className="text-lg font-bold text-gray-800">{item.title}</h1>
        <p className="text-gray-600 text-sm mb-2">{item.description.trim(0,4)}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">${item.price}</p>
          <div
            className="cursor-pointer text-red-500 hover:text-red-700 transition-all transform hover:scale-110"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
