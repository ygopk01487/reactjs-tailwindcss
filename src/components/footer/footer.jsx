import React from "react";
import Sub from "./sub";
import UlLi from "./ulLi";
import Copy from "./copy";

const Footer = () => {
  return (
    <div className="w-[100%]  bg-black">
      <div className="w-[87%] m-auto">
        {/* sub */}
        <Sub />
        {/* ulli */}
        <UlLi />
        {/* copy */}
        <Copy />
      </div>
    </div>
  );
};

export default Footer;
