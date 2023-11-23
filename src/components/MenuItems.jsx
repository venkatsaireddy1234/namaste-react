import React from "react";
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function MenuItems({ items }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item.card.info.id === itemId);
    return cartItem ? cartItem.quantity : 0; // Return the quantity of the item in the cart, or 0 if not found
  };

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.card.info.id === itemId);
  };

  const handleCart = (item, action) => {
    const itemId = item.card.info.id;

    if (action === "remove") {
      dispatch(removeFromCart(itemId)); // If action is "remove", remove 1 of the item from the cart
    } else if (action === "add") {
      dispatch(addToCart(item)); // If action is "add", add 1 of the item to the cart
    }
  };

  return (
    <div className="">
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white p-5 mt-2 rounded-lg shadow-md flex items-center justify-between relative"
        >
          <div className="flex flex-col gap-2 justify-between">
            <div className="">
              <h3 className="font-bold">{item?.card?.info?.name}</h3>
              <span className="font-bold">{`\u20B9${
                item?.card?.info?.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100
              }`}</span>
            </div>
            <div className="text-gray-600">
              <h4 className="line-clamp-2">{item?.card?.info?.description}</h4>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-3  ">
              {isItemInCart(item.card.info.id) ? (
                <div className="flex items-center border border-green-400 rounded-lg bg-white">
                  <button
                    className="bg-white p-2 text-red-400 rounded-l-lg"
                    onClick={() => handleCart(item, "remove")}
                  >
                    -
                  </button>
                  <span className="p-2 text-green-400  ">  
                  {getItemQuantity(item?.card?.info?.id)}
                  </span>
                  <button
                    className="bg-white p-2 text-green-400 rounded-r-lg"
                    onClick={() => handleCart(item, "add")}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="bg-white p-2 text-green-400 rounded-lg"
                  onClick={() => handleCart(item, "add")}
                >
                  Add
                </button>
              )}
            </div>
            <img
              className="h-32 w-32 object-cover rounded-lg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
              alt="foodImage"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuItems;
