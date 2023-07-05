import React from "react";
import Footer11 from "../../../src/Pic/footer1.png";
import Footer2 from "../../../src/Pic/footer2.png";
import Footer3 from "../../../src/Pic/footer3.png";

const Footer1 = () => {
  return (
    <div className="main-footer">
      <div className="container-fluid flex  bg-[#323232] justify-center lg:py-16  pb-6 ">
        <div className="md:grid grid-cols-1 lg:grid-cols-5  flex-wrap   row-footer">
          <div className=" grid-cols-3 space-y-10 f-line2 mt-6">
            <h4 className="text-white font-semibold border-b-2 border-[#46C33B] w-fit text-base">
              Popular Recommendation
            </h4>
            <ul className="space-y-5">
              <li className="text-white text-sm font-semibold">Buy Phones</li>
              <li className="text-white text-sm font-semibold">Buy Tablets</li>
              <li className="text-white text-sm font-semibold">Buy Laptops</li>
              <li className="text-white text-sm font-semibold">
                Buy Phone Accessories
              </li>
            </ul>
          </div>
          <div className="grid-cols-3 f-line1 space-y-3 flex-wrap mt-20 ">
            <h2 className="text-white font-bold text-2xl border-b-2 border-[#46C33B] w-fit"></h2>
            <ul className=" space-y-5">
              <li className="text-white text-sm font-semibold">
                Buy PC and Laptop Accessories
              </li>
            </ul>
          </div>
          <div className=" grid-cols-3 space-y-10 f-line2 mt-6">
            <h4 className="text-white font-semibold border-b-2 border-[#46C33B] w-fit text-base">
              About Yay Tech
            </h4>
            <ul className="space-y-5">
              <li className="text-white text-sm font-semibold">About us</li>
              <li className="text-white text-sm font-semibold">
                Sellers - register to sell{" "}
              </li>
              <li className="text-white text-sm font-semibold">
                Seller Portal
              </li>
              <li className="text-white text-sm font-semibold">Help,FAQ's</li>
            </ul>
          </div>
          <div className="grid-cols-3 space-y-10 f-line2 mt-6">
            <h4 className="text-white font-semibold text-base border-b-2 border-[#46C33B] w-fit">
              Policeies and Terms
            </h4>
            <ul className=" space-y-5">
              <li className="text-white text-sm font-semibold">Terms of Use</li>
              <li className="text-white text-sm font-semibold">
                Privacy Policy
              </li>
              <li className="text-white text-sm font-semibold">
                One-Year Limited Warranty
              </li>
            </ul>
          </div>
          <div className="grid-cols-3 space-y-10 f-line4 mt-6">
            <h4 className="text-white font-semibold text-base border-b-2 border-[#46C33B] w-fit">
              Contact Us
            </h4>
            <ul className=" space-y-5 ">
              <li className="flex space-y-2">
                <a href="" className="flex space-x-4 items-center">
                  <img
                    className="w-4 h-4 hover:scale-110 transition duration-700 ease-in-out"
                    src={Footer11}
                    alt=""
                  />
                  <p className="text-white text-sm font-semibold">
                    800-770-8688
                  </p>
                </a>
              </li>
              <li className="flex space-y-2">
                <a href="" className="flex space-x-4 items-center">
                  <img
                    className="w-4 h-4 hover:scale-110 transition duration-700 ease-in-out"
                    src={Footer2}
                    alt=""
                  />
                  <p className="text-white text-sm font-semibold">
                    13771 Norton Ave Chino CA 91710
                  </p>
                </a>
              </li>
              <li className="flex space-y-2">
                <a href="" className="flex space-x-4 items-center">
                  <img
                    className="w-4 h-4 hover:scale-110 transition duration-700 ease-in-out"
                    src={Footer3}
                    alt=""
                  />
                  <p className="text-white text-sm font-semibold">
                    Support@YaYTech
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
