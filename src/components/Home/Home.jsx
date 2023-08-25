import React from "react";
import Cart from "../cart/cart";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";

const TitleHeader = () => {
  return (
    <div className="w-[87%]  hidden md:m-auto md:grid md:grid-cols-2 ">
      <div className="p-4">
        <span className="text-right font-semibold text-base text-gray-500">
          Free shipping on all orders over $99
        </span>
      </div>
      <div className="flex justify-end p-4">
        <ul className="flex flex-row justify-end items-center">
          <a href="#">
            <li className="text-li">Become A Vendor</li>
          </a>
          <a href="#">
            <li className="text-li">Order Tracking</li>
          </a>
          <a href="#">
            <li className="text-li">My Wishlist</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="w-full relative">
        <TitleHeader />
      </div>
      <div className="w-full ">
        <div id="menu-scroll" className="relative">
          <div className=" flex w-[87%] pt-[20px] pb-[20px] m-auto ">
            <Menu />
            <Cart />
          </div>
        </div>
        <Slider />
      </div>
    </>
  );
};

export default Home;
