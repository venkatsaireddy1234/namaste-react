import { useState } from "react";
import { LOGO_URL, LOGO_URL1 } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi";
export default Header = () => {
  const [btnName, setBtn] = useState("Login");
  const changeBtn = () => {
    btnName == "Login" ? setBtn("Logout") : setBtn("Login");
  };
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="flex justify-between bg-pink-50  w-full mb-10 fixed top-0 left-0 right-0 z-50">
      <div className="w-[120px] h-[100px] m-4 mt-1 p-2 ">
        <img className="foodlogo" src={LOGO_URL1} alt="applogo" />
      </div>
      <div className="flex">
        <ul className="flex flex-row justify-items-center m-2 p-2 content-center items-center">
          <li className="p-2">{onlineStatus ? "online" : "offline"}</li>
          <li className="p-2">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li className="p-2">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li className="p-2 text-2xl mx-1 ">
            <span className="absolute bg-green-400 text-sm mx-5 -my-5 px-1 ">
              {totalQuantity}
            </span>
            <Link
              style={{ textDecoration: "none", color: "orange" }}
              to="/cart"
            >
              {" "}
              <HiShoppingCart />
            </Link>
          </li>
          <li className="p-2">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/groceries"
            >
              Groceries{" "}
            </Link>
          </li>
          <button className="login" onClick={() => changeBtn()}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
