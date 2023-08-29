import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaRegUser,
  FaRegHeart,
  FaUserCircle,
  FaUserCog,
} from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import {
  closeNvabar,
  openSearchMobile,
  openUsers,
} from "../jsUserProfile/userProlie";
import { openCarts } from "../../cart/cartjs";
import Navbar from "../nvabar/Nvabar";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Logo = () => {
  return (
    <div className="p-0 md:p-3  flex items-center w-[20%] ">
      <span>
        <FaBars
          size="1.8rem"
          className="cursor-pointer mr-[10px] md:mr-[20px]"
          onClick={closeNvabar}
        />
      </span>

      <img
        src="https://jthemes.net/themes/html/organic/assets/images/logo/logo.png"
        className="cursor-pointer"
      />
    </div>
  );
};

const Search = () => {
  return (
    <div className=" w-[53%] flex relative  opacity-0 invisible md:max-lg:opacity-0 md:max-lg:invisible md:opacity-100 md:visible">
      <form className=" w-[100%] ml-8 flex justify-end items-center relative ">
        <input
          className="outline-none p-3.5 text-sm font-medium rounded-md w-[68%] bg-slate-100 mr-16
                border  border-slate-200"
          placeholder="All | What are you shopping for?"
        />
        <FaSearch
          className="cursor-pointer absolute top-8 right-20"
          size="1rem"
        />
      </form>
    </div>
  );
};

const MenuNav = () => {
  const [openIcons, setOpenIcon] = useState(false);
  const changOpenIcon = () => {
    setOpenIcon((e) => !e);
    openSearchMobile();
  };
  return (
    <ul className=" flex">
      <li
        className="icon-login mr-4 bg-green-500 text-white opacity-100 
      visible md:max-lg:opacity-100 md:max-lg:visible md:opacity-0 md:invisible"
        onClick={changOpenIcon}
      >
        {openIcons ? (
          <AiOutlineClose size="0.9rem" className="text-white" />
        ) : (
          <AiOutlineSearch size="1rem" />
        )}
      </li>
      <li className="icon-login mr-4 bg-gray-200 relative " onClick={openUsers}>
        <FaRegUser size="1rem" />
      </li>
      <li className="icon-login mr-4 bg-gray-200">
        <FaRegHeart />
      </li>
      <li
        className="icon-login mr-2 relative bg-green-600 text-white after:absolute "
        onClick={openCarts}
      >
        <BsHandbag />
        <span
          className="absolute  flex items-center justify-center md:top-[-30%] nd:right-[23%]
        w-[30px] h-[30px] rounded-[50%] bg-black z-10 top-[-44%] right-[-32%] text-white text-[14px]"
        >
          2
        </span>
      </li>
    </ul>
  );
};

const UserProfile = () => {
  return (
    <div
      className="bg-white w-[210px] md:w-[13%] h-[0px] absolute top-[9.8%] md:top-[20%] right-[10%] 
            shadow-inner drop-shadow-2xl shadow-slate-200 
            transition-height duration-200 overflow-hidden z-50
            md:max-lg:w-[20%] md:max-lg:top-[13.8%] md:max-lg:right-[14%]
            "
      id="userProfile"
    >
      {/* name */}
      <div className="flex items-center p-5 border-b border-slate-100">
        <div className="overflow-hidden bg-white w-[60px] rounded-[100%] mr-2">
          <img
            src="https://jthemes.net/themes/html/organic/assets/images/meta/meta1.png"
            className="border-none h-auto w-[100%] "
          />
        </div>
        <div>
          <h4 className="text-sm font-bold">Jone Doe</h4>
          <span className="text-sm">Seller</span>
        </div>
      </div>
      {/* setting */}
      <ul className="p-4">
        <a href="#">
          <li className="flex items-center pb-2">
            <FaUserCircle size="1rem" className="mr-1 text-gray-500" />
            <span className="text-gray-500 font-medium text-base">Profile</span>
          </li>
        </a>
        <a href="#">
          <li className="flex items-center pb-2">
            <FaUserCog size="1rem" className="mr-1 text-gray-500" />
            <span className="text-gray-500 font-medium text-base">Setting</span>
          </li>
        </a>
        <a href="#">
          <li className="flex items-center">
            <MdLogout size="1rem" className="mr-1 text-gray-500" />
            <span className="text-gray-500 font-medium text-base">Logout</span>
          </li>
        </a>
      </ul>
    </div>
  );
};

const SearchMobile = () => {
  return (
    <div
      className="bg-white w-[100%] shadow border-t-[1px] border-green-400 
   left-[0%] right-0 flex justify-items-center justify-center duration-200 
    h-[0px] top-[9.8%] opacity-100
    overflow-hidden md:max-lg:top-[13.8%] absolute z-40 invisible
  "
      id="searchMobile"
    >
      <form className="flex w-[100%] justify-items-center justify-center p-5 relative">
        <input
          placeholder="Search your Product..."
          className="w-[100%] h-[50px] outline-none p-4 text-[13px] rounded-[50px] 
          font-bold border-green-400 border-[1px]"
        />
        <span>
          <AiOutlineSearch
            size="1.4rem"
            className="right-[10%] top-[33px] absolute font-bold text-green-600 md:max-lg:right-[6%]"
          />
        </span>
      </form>
    </div>
  );
};

const Menu = () => {
  return (
    <>
      {/* logo */}
      <Logo />
      {/* nvabar */}
      <Navbar />
      {/* search */}
      <Search />
      {/* login */}
      <div className=" w-[27%]  flex items-center justify-end">
        <MenuNav />
        {/* user-profile */}
        <UserProfile />
        <SearchMobile />
      </div>
    </>
  );
};

export default Menu;
