import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
    <div className="max-w-3xl mx-auto">
    <button className="self-center text-center cursor-pointer m-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5" onClick={()=>handleClearCart()}>Clear Cart</button>
      {cartItems?.length > 0 ? (
        cartItems.map((item) => {
          return <CartItems key={item?.id} item={item} />;
        })
      ) : (
        <h1 className="textxl font-bold text-center">
          Cart is Empty. Add items to the cart.
        </h1>
      )}
    </div>
    </>
  );
}

export default Cart;
