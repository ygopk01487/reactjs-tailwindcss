import React from "react";
import { GrClose } from "react-icons/gr";
import { openCarts } from "./cartjs";
import { cartItems } from "../cart/cartItem";

//item
const ItemCart = ({ items }) => {
  const { name, img, price, discount } = items;
  return (
    <div className="bg-black-500 flex p-8">
      <img
        src={img}
        className="w-[85px] cursor-pointer hover:scale-[1.1] duration-500 hover:duration-500 hover:z-0"
      />
      <div className="grid grid-cols-1 ml-3">
        <h3 className="text-lg font-bold ">{name}</h3>
        <ul className="flex items-center">
          <li className="mr-4 text-green-500 font-bold">${price - discount}</li>
          <li className="text-slate-400 font-bold">
            <del>${price}</del>
          </li>
        </ul>
      </div>
    </div>
  );
};

//price information
const PriceInformation = () => {
  return (
    <div className="border-t   p-5">
      <div className="">
        <ul className="text-base font-normal ">
          <li className="flex justify-between p-2">
            <h3>Subtotal:</h3>
            <span>$215</span>
          </li>
          <li className="flex justify-between p-2">
            <h3>Vat 5%:</h3>
            <span>$10.75</span>
          </li>
          <li className="flex justify-between border-b border-slate-200 p-2">
            <h3>Discount 15%:</h3>
            <span>-$32.25</span>
          </li>
          <li className="flex justify-between p-2">
            <h3>Total : </h3>
            <span>-$191.8825</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

//button
const ButtonCart = () => {
  return (
    <div className="br-red-500 grid grid-cols-1 grid-gap gap-y-3 mt-3">
      <div
        className="bg-green-500 text-center p-4 
      text-white font-medium uppercase cursor-pointer 
      border-[2px] border-green-500 duration-500
      hover:border-[2px] hover:border-green-400
      hover:duration-500
      hover:bg-white
      hover:text-black"
      >
        View cart
      </div>
      <div
        className="bg-green-500 text-center p-4 
      text-white font-medium uppercase cursor-pointer
      border-[2px] border-green-500 duration-500
      hover:border-[2px] hover:border-green-400
      hover:duration-500
      hover:bg-white
      hover:text-black"
      >
        Checkout
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="modal duration-500">
      {/* modal cart */}
      <div
        className="bg-white fixed w-[370px] h-[100%]
    duration-500  top-0 right-[-370px] z-9999 shadow-lg shadow-slate-500 p-4
    overflow-y-auto bottom-0"
        id="carts"
      >
        <div className="flex items-center h-[38px] top-0 justify-between" id='title-cart'>
          <h2 className="text-[18px] font-bold ">Organic Products</h2>
          <GrClose
            size="1.2rem"
            className="cursor-pointer text-gray-500"
            onClick={openCarts}
          />
        </div>
        {/* cart item */}
        <div className=" flex flex-col items-center ">
          {/* item */}
          {cartItems.map((items, index) => {
            return <ItemCart items={items} key={index} />;
          })}
        </div>
        {/* price information */}
        <PriceInformation />
        {/* button */}
        <ButtonCart />
      </div>
    </div>
  );
};

export default Cart;
