import React, { useEffect, useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { sort } from "./section";
import Items from "./carts";

const chooseSort = ["Nothing", "Popularity", "Organic", "Fantastic"];

const Sections = () => {
  let a = localStorage.getItem("sort");
  const [sorts, setSort] = useState(a || "");
  const [activeGridList, setActiveGridList] = useState(false);

  const handleSort = ({ i }) => {
    localStorage.setItem("sort", i);
    setSort(i);
  };

  const ulSort = chooseSort.map((i, key) => {
    return (
      <li
        key={key}
        className={`font-section cursor-pointer p-2 duration-500 hover:bg-slate-100 hover:text-black
        ${a === i ? "active" : ""}`}
        onClick={() => handleSort({ i }, sort())}
        id="activeSort"
      >
        {i}
      </li>
    );
  });

  if (sorts === "" || sorts === "Nothing") {
    setSort("Select");
  }

  return (
    <div className=" m-auto w-[87%] mt-4">
      <div className=" flex justify-between">
        <div className="w-[30%] flex flex-col md:items-center md:flex-row">
          <div className="flex p-0 md:p-3">
            <span>
              <BsGrid3X3Gap
                size="2.8rem"
                className={`icon-sort  ${!activeGridList ? "active" : ""}`}
                id="grid-list-active"
                onClick={() => setActiveGridList(false)}
              />
            </span>
            <span>
              <BsListTask
                size="2.8rem"
                className={`icon-sort  ${activeGridList ? "active" : ""}`}
                id="grid-list-active"
                onClick={() => setActiveGridList(true)}
              />
            </span>
          </div>
          <span className="text-center p-1 md:p-3 text-slate-400 font-semibold text-[14px] md:text-[15px]">
            Showing 1-18 of 24 results
          </span>
        </div>
        <div className="w-[auto] relative p-2">
          <div className="flex p-0 md:p-1 bg-slate-100 justify-end rounded-md">
            <span className="font-section p-2 md:p-3">Default sorting:</span>
            <div onClick={sort} className="flex items-center cursor-pointer">
              <span className="font-section p-3">{sorts}</span>
              <AiOutlineDown
                size="1.7rem"
                className="text-slate-400  font-semibold text-center mt-1 p-1 duration-300 rotate-0"
                id="sort"
              />
            </div>
          </div>
          <div
            className="bg-white absolute p-3  top-[50%] right-0 border rounded border-slate-400 
            opacity-0 duration-200 invisible"
            id="model-sort"
          >
            <ul className="">{ulSort}</ul>
          </div>
        </div>
      </div>
      <Items activeGridList={activeGridList} />
    </div>
  );
};

export default Sections;
