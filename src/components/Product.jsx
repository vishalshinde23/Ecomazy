import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success('Item added to Cart');
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error('Item removed from Cart');
  };

  return (
    <div className="relative m-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-teal-700 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out p-4">
      {/* Product Image */}
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img
          className="object-cover w-full"
          src={post.image}
          alt={post.title}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
      </a>

      {/* Product Details */}
      <div className="mt-4 px-2 pb-2">
        <a href="#">
          <h5 className="text-md tracking-tight text-slate-900 truncate">{post.title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl text-white  dark:text-white">${post.price}</span>
            <span className="text-sm text-white  dark:text-white line-through">$699</span>
          </p>
          <div className="flex items-center">
            {/* Star Ratings */}
            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {/* Repeat the star SVG */}
            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {/* Repeat star for rating */}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>

        {/* Add/Remove Cart Button */}
        <div className="flex items-center justify-center w-full  rounded-md  text-center">
          {cart.some((p) => p.id === post.id) ? (
            <button
              className="bg-white  dark:bg-white 0 font-semibold hover:bg-gray-700 px-4 py-2 rounded-md"
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="bg-white  dark:bg-white font-semibold hover:bg-gray-700 px-4 py-2 rounded-md"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
