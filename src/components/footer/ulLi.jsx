import React from "react";
import { MdNavigateNext } from "react-icons/md";

const UlLi = () => {
  return (
    <div
      className="mr-auto w-[100%]  border-t-[1px] border-b-[1px] border-slate-600 md:grid md:grid-cols-4 
    grid grid-cols-1 md:max-lg:grid-cols-2"
    >
      {/* 1 */}
      <div className="text-white pt-[20px] pb-[40px]">
        <ul>
          <li className="pb-[10px]">
            <h4 className="font-bold text-[22px] decoration-2 underline pb-2 cursor-pointer">
              Why People Like Us
            </h4>
          </li>
          <li className="pb-[10px]">
            <p className="text-[17px] pb-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo. Build your online store with
              WooCommerce the most popular
            </p>
          </li>
          <li>
            <button
              className="w-[160px] h-[50px] text-[16px] font-normal rounded-[30px] bg-green-500 
            flex justify-center items-center relative hover:bg-white hover:text-black duration-300
            beforAfter overflow-hidden group"
            >
              View More
              <span>
                <MdNavigateNext
                  size="1.6rem"
                  className="absolute top-[26%] right-[13%] group-hover:right-[10%] group-hover:text-black text-white duration-300"
                />
              </span>
            </button>
          </li>
        </ul>
      </div>
      {/* 2 */}
      <div className="text-white pl-[50px] pt-[20px] border border-slate-700">
        <ul>
          <li className="pb-[10px]">
            <h4 className="font-bold text-[22px] decoration-2 underline pb-2 cursor-pointe">
              Information
            </h4>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">About</span>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">Delivery Information</span>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">Privacy Policy</span>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">Terms & Conditions</span>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">Return Policy</span>
          </li>
        </ul>
      </div>
      {/* 3 */}
      <div className="text-white pl-[50px] pt-[20px] border border-slate-700">
        <ul>
          <li className="pb-[10px]">
            <h4 className="font-bold text-[22px] decoration-2 underline pb-2 cursor-pointe">
              My Account
            </h4>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">My Account</span>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">Shopping Cart</span>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">Wishlist</span>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">Order History</span>
          </li>
          <li className="pb-[10px]">
            <span className="hoverUlLi">International Orders</span>
          </li>
        </ul>
      </div>
      {/* 4 */}
      <div className="text-white pl-[50px] pt-[20px] border border-slate-700 pb-[20px]">
        <ul>
          <li className="pb-[10px]">
            <h4 className="font-bold text-[22px] decoration-2 underline pb-2 cursor-pointe">
              Contact Us
            </h4>
          </li>
          <li className="pb-[10px]">
            <p className="text-white font-normal">
              Address:
              <span className="text-slate-400 font-normal text-[15px] ml-[5px]">
                1429 Netus Rd, NY 48247
              </span>
            </p>
          </li>
          <li className="pb-[10px]">
            <p className="text-white font-normal">
              Email:
              <span className="text-slate-400 font-normal text-[15px] ml-[5px]">
                Organi@gmail.com
              </span>
            </p>
          </li>
          <li className="pb-[10px]">
            <p className="text-white font-normal">
              Phone:
              <span className="text-slate-400 font-normal text-[15px] ml-[5px]">
                (+87) 4886-4174
              </span>
            </p>
          </li>
          <li className="pb-[10px]">
            <p className="text-white font-normal">Payment Accepted</p>
          </li>
          <li className="">
            <img
              src="https://jthemes.net/themes/html/organic/assets/images/payment/payment.png"
              className="cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UlLi;
