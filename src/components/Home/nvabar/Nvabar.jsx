import React from "react";
import { GrClose } from "react-icons/gr";
import { closeNvabar } from "../jsUserProfile/userProlie";

const Navbar = () => {
  return (
    <>
      <div
        className="bg-white  top-0 w-[400px] left-[-400px] h-[100%] shadow-lg 
      shadow-slate-300 border-r-2 border-slate-200 z-20 fixed duration-500"
        id="Nvabar"
      >
        <div
          className="bg-green-300 cursor-pointer w-[50px] p-4 rounded-[50%] 
        text-slate-400 ml-[20rem] mt-[1rem] hover:bg-green-500 duration-500 ease-in-out"
          onClick={closeNvabar}
        >
          <GrClose size="1.2rem" />
        </div>
        <ul className="p-4">
          <a href="#">
            <li className="nvabar-li mb-4">Home</li>
          </a>
          <a href="#">
            <li className="nvabar-li mb-4">Shop</li>
          </a>
          <a href="#">
            <li className="nvabar-li mb-4">Blog</li>
          </a>
          <a href="#">
            <li className="nvabar-li mb-4">Portfolio</li>
          </a>
          <a href="#">
            <li className="nvabar-li mb-4">Pages</li>
          </a>
          <a href="#">
            <li className="nvabar-li">Contacts</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
