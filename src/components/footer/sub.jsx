import React from "react";
import { MdNavigateNext } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiOutlineGooglePlus,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Sub = () => {
  return (
    <div className=" w-[100%] flex flex-col justify-center items-center md:flex md:justify-between md:flex-row 
    md:max-lg:flex-col ">
      <div className="pt-[45px] pb-[0px] pr-[0px] md:pb-[45px] md:pr-[0px] md:pt-[45px] md:max-lg:pb-[0px]">
        <span className="cursor-pointer">
          <img src="https://jthemes.net/themes/html/organic/assets/images/logo/logo2.png" />
        </span>
      </div>
      <div className="pt-[20px] pb-[20px] relative w-[350px]
      md:flex
      md:justify-center
      md:w-[55%]
       md:pb-[45px] md:pt-[45px]">
        <input
          placeholder="Your Phone Number"
          className=" outline-none p-5 rounded-[30px] w-[60%] md:max-lg:w-[400px] bg-slate-700"
        />
        <button
          className="border-none bg-green-500 text-white text-[16px] overflow-hidden
         font-normal p-5 w-[200px]  rounded-[35px] absolute right-[0%] md:right-[6%] hover:text-black group duration-300
         hover:bg-white md:max-lg:right-[0px]
         beforAfter"
        >
          Subscribe Now
          <span
            className="absolute text-white p-1 right-[10%] top-[25%] group-hover:text-black duration-300
          group-hover:right-[7%] "
          >
            <MdNavigateNext size="1.6rem" />
          </span>
        </button>
      </div>
      <div className="flex items-center ">
        <ul className="flex items-center">
          <li className="ulli">
            <AiOutlineTwitter size="1rem" />
          </li>
          <li className="ulli">
            <FaFacebookF size="1rem" />
          </li>
          <li className="ulli">
            <AiFillYoutube size="1rem" />
          </li>
          <li className="ulli">
            <AiOutlineGooglePlus size="1rem" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sub;
