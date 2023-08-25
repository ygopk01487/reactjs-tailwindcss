import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { backToTop } from "./footers";

const Copy = () => {
  return (
    <div className="grid grid-cols-1  pt-[20px] pb-[10px]  md:grid md:grid-cols-2">
      <div>
        <p className="font-normal text-slate-400 md:max-lg:text-[12px]  text-[14px] pt-[4px]">
          Copyright © 2022
          <span className="text-yellow-300 font-bold">ORGANI</span> Inc. All
          rights reserved.
        </p>
      </div>
      <div className="md:pl-[150px] md:max-lg:pl-[0px] pt-[19px] pb-[3px] md:pt-[0px] md:pb-[0px]">
        <ul className="flex ">
          <li
            className="md:p-1 w-[auto] relative after:content-[''] md:max-lg:after:content-[none]
            pr-[10px]
            md:pr-[40px] md:after:w-[2px] md:after:h-[12px] md:after:bg-slate-500 
            md:after:absolute md:after:right-[12%] md:after:top-[32%] "
          >
            <span className="text-yellow-400 font-normal md:max-lg:text-[12px] text-[14px] cursor-pointer w-[auto]">
              Privacy Policy
            </span>
          </li>
          <li
            className="md:p-1 relative after:content-[''] md:max-lg:after:content-[none]
            pr-[10px]
            md:pr-[40px] md:after:w-[2px] md:after:h-[12px] md:after:bg-slate-500 
            md:after:absolute md:after:right-[12%] md:after:top-[32%] md:w-[auto] "
          >
            <span className="text-slate-400 font-normal md:max-lg:text-[12px] text-[14px]">
              Terms of Use
            </span>
          </li>
          <li className="md:p-1">
            <span className="text-slate-400 font-normal text-[14px] md:max-lg:text-[12px]">
              Sales and Refunds
            </span>
          </li>
        </ul>
      </div>

      {/* arrow up */}
      <span
        className="fixed p-3 opacity-0 invisible bg-white border border-green-500 text-black
       right-[0px] bottom-[40px] rounded-[50%] cursor-pointer
       hover:text-white hover:border-black hover:bg-black duration-300"
        id="b-top"
        onClick={backToTop}
      >
        <AiOutlineArrowUp size="1.2rem" />
      </span>
    </div>
  );
};

export default Copy;
