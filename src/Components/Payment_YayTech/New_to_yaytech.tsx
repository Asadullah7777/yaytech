import React from "react";
import Logo from "../../../src/Pic/logo.png";
import New1 from "../../../src/Pic/new1.png";
import New2 from "../../../src/Pic/new2.png";
import New3 from "../../../src/Pic/new3.png";
import New4 from "../../../src/Pic/new4.png";
import New5 from "../../../src/Pic/new5.png";
import New6 from "../../../src/Pic/new6.png";

const New_to_yaytech = () => {
  return (
    <div className="container-fluid bg-[#202020] flex py-8  md:px-4 lg:gap-20 lg:justify-evenly md:space-x-6 flex-wrap space-y-8 px-4">
      <div className="left-new flex lg:space-x-16 md:space-x-2 items-center space-x-2 flex-wrap space-y-4">
        <img className="lg:h-16 lg:w-16 md:h-12 md-w-12" src={Logo} alt="" />
        <div className="new-yaytech grid-col space-y-4">
          <h4 className="text-white font-semibold text-base leading-5">
            NEW TO YayTech
          </h4>
          <p className="text-white text-sm font-normal leading-4">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <div className="search-new bg-white rounded md:py-2  lg:p-2 md:w-[350px] lg:w-[480px] w-[280px] p-2">
            <input
              className="rounded bg-transparent border-none lg:w-[350px] md:w-[270px] pl-2 w-[200px]"
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <button className="search--new-btn rounded-r-lg bg-[#202020] text-white lg:py-2 lg:px-8 md:py-1 md:px-2 py-1 px-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="right-new space-y-4">
        <h4 className="text-white text-base font-semibold leading-5">
          Payment Methods
        </h4>
        <p className="text-white font-normal text-sm leading-4">
          Payment 100% secure
        </p>
        <div className="links flex space-y-4 space-x-1">
          <img />
          <img className="lg:w-12 lg:h-8 md:w-10 md:h-8" src={New1} alt="" />
          <img className="lg:w-12 lg:h-8 md:w-10 md:h-8" src={New2} alt="" />
          <img className="lg:w-12 lg:h-8 md:w-10 md:h-8" src={New3} alt="" />
          <img className="lg:w-12 lg:h-8 md:w-10 md:h-8" src={New4} alt="" />
          <img className="lg:w-12 lg:h-8 md:w-10 md:h-8" src={New5} alt="" />
          <img className="lg:w-12 lg:h-8 md:w-10 md:h-8" src={New6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default New_to_yaytech;
