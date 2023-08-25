import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Preview = () => {
  return (
    <>
      <div className="flex mt-[60px] items-center justify-center flex-col">
        <span
          className="text-green-500 text-[12px] font-bold uppercase before:content-['o_o_o']
      before:text-green-500 before:font-medium before:text-[10px] before:mr-[4px]
      after:content-['o_o_o']
      after:text-green-500 after:font-medium after:text-[10px] after:ml-[4px]"
        >
          testimonial
        </span>
        <h4 className="text-black font-bold text-[24px] md:text-[38px]">
          What Our Customers Saying
        </h4>
      </div>
      <div className="grid grid-cols-1 p-0 md:p-8 md:grid md:grid-cols-2 md:max-lg:p-0">
        <div
          className="bg-slate-100 w-[90%] h-[90%] border-t-[4px] 
        border-green-500
        border-b-[4px] opacity-0 invisible duration-[1s] translate-x-[0%] p-6  md:max-lg:translate-x-[-9%]
        md:w-[68%] md:h-[97%] mt-[40px] md:mt-[0px] md:max-lg:w-[100%] md:max-lg:h-[93%]
        md:translate-x-[40%]"
          id="b-scrolls"
        >
          <span className="text-green-500 font-bold p-8">
            <FaQuoteLeft size="4rem" />
          </span>
          <p className="text-[16px] md:text-[21px] font-normal pt-1 pb-9">
            ”Quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci
            velit sed quia non numqua eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem repudia sint et molestiae”
          </p>
          <ul className="flex text-green-500 pb-4">
            <li>
              <AiFillStar size="1rem" />
            </li>
            <li>
              <AiFillStar size="1rem" />
            </li>
            <li>
              <AiFillStar size="1rem" />
            </li>
            <li>
              <AiFillStar size="1rem" />
            </li>
            <li>
              <AiFillStar size="1rem" />
            </li>
          </ul>
          {/* name */}
          <ul className="flex">
            <li>
              <h4 className="text-black font-bold text-[22px]">Alina Parker</h4>
            </li>
            <li className="text-green-500 font-bold text-[14px] p-2">
              <p>Ceo, GTD</p>
            </li>
          </ul>
        </div>
        <div
          className="bg-slate-100 w-[90%] h-[90%] p-6 border-t-[4px] 
        border-green-500
        border-b-[4px] translate-x-[10%] duration-[1s] opacity-0 invisible
        md:w-[68%] md:h-[97%] mb-[40px] md:max-lg:w-[100%] md:max-lg:h-[93%]"
          id="c-scrolls"
        >
          <span className="text-green-500 font-bold p-8">
            <FaQuoteLeft size="4rem" />
          </span>
          <p className="text-[16px] md:text-[21px] font-normal pt-1 pb-9">
            ”Quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci
            velit sed quia non numqua eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem repudia sint et molestiae”
          </p>
          <ul className="flex text-green-500 pb-4">
            <li>
              <AiFillStar size="1rem" />
            </li>
            <li>
              <AiFillStar size="1rem" />
            </li>
            <li>
              <AiFillStar size="1rem" />
            </li>
            <li>
              <AiFillStar size="1rem" />
            </li>
            <li>
              <AiFillStar size="1rem" />
            </li>
          </ul>
          {/* name */}
          <ul className="flex">
            <li>
              <h4 className="text-black font-bold text-[22px]">Alina Parker</h4>
            </li>
            <li className="text-green-500 font-bold text-[14px] p-2">
              <p>Ceo, GTD</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Preview;
