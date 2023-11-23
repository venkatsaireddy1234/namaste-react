import React from "react";
import MenuItems from "./MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mt-[150px] w-[800px] mx-40">
      <h1 className="font-bold text-3xl "> Cart Items - {totalQuantity}</h1>
      <button
        className="bg-red-400 px-3 py-2 m-5 rounded-lg"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <MenuItems items={cartItems} />
    </div>
  );
};

export default Cart;
