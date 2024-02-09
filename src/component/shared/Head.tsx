import React from "react";
import Logo from "/images/logo.png";
import CartIcon from "/images/cart.svg";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Head: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="w-full flex flex-col items-center fixed bg-white z-50 shadow-md">
      <div className=" h-[100px] flex justify-between items-center w-[1200px]">
        <p className=" text-[#A8A8A8] text-sm">
          Hot line: <span className="text-black font-semibold">19002192</span>
        </p>
        <img className="w-[176px]" src={Logo} alt="Company Logo" />
        <Link to="/cart">
          <div className=" relative transition-transform duration-300 transform hover:scale-125">
            <img
              width={30}
              src={CartIcon}
              alt="Shopping Cart"
              className=" object-cover"
            />
            <span className=" absolute top-[-10px] right-[-4px] bg-[#DDBA76] shadow-lg px-1 rounded-full text-white text-[12px]">
              {cartItems.length}
            </span>
          </div>
        </Link>
      </div>

      <div className="h-[49px] border-[1px] w-full flex justify-center">
        <NavBar />
      </div>
    </div>
  );
};

export default Head;
