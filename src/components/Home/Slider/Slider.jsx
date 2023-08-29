import React from "react";
import { SlHome } from "react-icons/sl";
import { MdNavigateNext } from "react-icons/md";

const defaultSize = "1.2rem";

const Slider = () => {
  return (
    <div className="w-[100%] h-[170px] md:h-[auto] md:w-[87%] md:m-auto relative">
      <img
        src="https://jthemes.net/themes/html/organic/assets/images/breadcrumb/breadcrumb1.png"
        className=" h-[100%]"
      />
      <div className=" absolute top-[20%] left-[36%] md:top-[25%] md:left-[43%] md:max-lg:left-[37%] md:max-lg:top-[8%]">
        <h2 className="text-white text-[23px] md:text-[44px] font-bold">
          Shop List
        </h2>
      </div>
      <ul className="flex items-center absolute top-[45%] left-[15%] md:top-[45%] 
      md:left-[38%] text-white text-[18px] font-medium md:max-lg:left-[30%]">
        <li className="cursor-pointer flex items-center">
          <SlHome
            size="2.8rem"
            className="text-green-500 p-3 border-[2px] border-green-500 rounded-[20px]"
          />
          <span className="ml-3">Home</span>
        </li>
        <li className=" flex items-center">
          <MdNavigateNext size={defaultSize} className="text-gray-600" />
          <span className="ml-3">About</span>
        </li>
        <li className=" flex items-center">
          <MdNavigateNext size={defaultSize} className="text-gray-600" />
          <span className="ml-3">Dried</span>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
