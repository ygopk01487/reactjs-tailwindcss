import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { items } from "./items";
import Pagination from "./pagination";
import Preview from "./preview";

const ItemsProducts = ({ activeGridList, item }) => {
  return (
    <>
      <div className="flex justify-center">
        <span
          className="bg-red-400 w-[35px] h-[25px] absolute rounded-[800px] py-[10px] px-[22px]  right-[10%] top-[18px]
    text-white font-bold text-[12px] flex items-center justify-center group-hover:opacity-0
    group-hover:invisible duration-300 visible opacity-100"
        >
          {item.code}
        </span>
        <div className=" mt-[45px] cursor-pointer">
          <img src={item.image} className="h-[60%] md:h-[100%]" />
        </div>
      </div>
      {/*  */}
      <div className={`p-4 ${activeGridList ? "mt-[-60px] md:mt-[60px]" : ""}`}>
        <span
          className={`text-black text-[20px] font-bold ${
            !activeGridList ? "p-6" : ""
          } roup-hover:opacity-0
        group-hover:invisible  visible opacity-100`}
        >
          {item.name}
        </span>
        <ul className="flex">
          <li>
            <span
              className={`text-green-500 font-bold mr-2 ${
                !activeGridList ? "p-6" : ""
              } group-hover:opacity-0
            group-hover:invisible  visible opacity-100`}
            >
              ${item.discount}
            </span>
          </li>
          <li>
            <del
              className="text-slate-300 font-bold group-hover:opacity-0
    group-hover:invisible  visible opacity-100"
            >
              ${item.price}
            </del>
          </li>
        </ul>
        {activeGridList && (
          <span
            className="text-slate-300 font-bold group-hover:opacity-0
        group-hover:invisible  visible opacity-100"
          >
            {item.information}
          </span>
        )}
      </div>
    </>
  );
};

const Products = ({ activeGridList, item }) => {
  return (
    <>
      <div
        className={`w-[85%] h-[100%] rounded-[30px] p-1 border-[3px] border-green-500 relative
      group  grid md:max-lg:w-[100%] 
    ${
      activeGridList
        ? " grid-cols-1 md:grid-cols-2 w-[50%] h-[100%] md:h-[95%] md:w-[550px] "
        : "grid-cols-1 w-[80%] h-[100%]"
    }`}
      >
        <ItemsProducts activeGridList={activeGridList} item={item} />
        {/* icon */}
        <div
          className={`flex items-center justify-center absolute ${
            activeGridList ? "top-[58%] left-[47%]" : "top-[50%] left-[40%]"
          }  opacity-0 invisible
        group-hover:visible group-hover:opacity-100 group-hover:delay-500
      `}
        >
          <span
            className="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center 
          items-center cursor-pointer font-bold mr-[5px] hover:text-white hover:bg-green-500
          mt-[50px] group-hover:mt-[-50px] group-hover:duration-[1s] shadow-lg shadow-indigo-500/40"
          >
            <AiOutlineSearch size="1.3rem" />
          </span>
          <span
            className="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center 
          items-center cursor-pointer font-bold hover:text-white hover:bg-green-500 
          mt-[60px] group-hover:mt-[-50px]  group-hover:duration-[1.2s] shadow-lg shadow-indigo-500/40"
          >
            <HiShoppingCart size="1.3rem" />
          </span>
        </div>
      </div>
    </>
  );
};

const Carts = ({ activeGridList }) => {
  return (
    <>
      <div
        className={`mt-[60px] justify-items-center grid ${
          activeGridList
            ? "grid-cols-1 scroll md:grid md:grid-cols-2 md:max-lg:grid-cols-1"
            : "grid-cols-1 scroll md:grid md:grid-cols-4 md:max-lg:grid-cols-2"
        } gap-6 opacity-0 invisible duration-500 md:grid `}
        id="products"
      >
        {items.map((item, i) => (
          <Products activeGridList={activeGridList} item={item} key={i} />
        ))}
      </div>
      <Pagination />
      <Preview />
    </>
  );
};

export default Carts;
