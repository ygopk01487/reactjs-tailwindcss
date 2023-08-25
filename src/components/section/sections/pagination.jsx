import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const pages = [1, 2, 3];
const LiPages = () => {
  return (
    <>
      {pages.map((i, a) => {
        return (
          <li
            className="w-[50px] h-[50px] text-[18px] border border-slate-300 font-bold 
              rounded bg-white cursor-pointer flex items-center
               justify-center ml-4 hover:bg-green-500 hover:border-green-500 duration-300
               hover:text-white"
            key={a}
          >
            {i}
          </li>
        );
      })}
    </>
  );
};

const Pagination = () => {
  return (
    <div className="mt-[40px]">
      <ul className="flex justify-center items-center">
        <LiPages />
        <span className="flex font-bold text-white items-center justify-center w-[50px] h-[50px] rounded bg-green-500 cursor-pointer ml-4">
          <MdOutlineNavigateNext size="1.9rem" />
        </span>
      </ul>
    </div>
  );
};

export default Pagination;
