import React from "react";

const HeaderTop = () => {
  return (
    <div className="container-fluid ">
      <div className="top-header lg:flex md:flex sm:flex-wrap bg-[#F1F1F1] m-auto justify-between items-center lg:px-20 md:px-6 sm:px-4 py-4">
        <div className="left-top-header  flex space-x-4 items-center pl-[10px]">
          <h2 className="text-black text-sm md:text-base">Hello, Please</h2>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-[#46C33B] rounded md:bg-transparent  md:p-0  font-medium text-sm leading-4
                  "
            aria-current="page"
          >
            Sign In
          </a>
          <h4 className="text-black">or</h4>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0 text-[#46C33B] font-medium text-sm leading-4
                  "
            aria-current="page"
          >
            Sign Up
          </a>
        </div>
        <div className="right-top-header flex flex-wrap space-x-3  items-center">
          <div className=" flex">
            <ul className="flex lg:space-x-20 md:space-x-4 ml-3">
              <li className="bg-transparent text-center  ">
                <select
                  className=" bg-transparent border-none lg:pr-2 md:pr-2 "
                  id="condition"
                >
                  <option
                    className="lg:text-sm  font-normal leading-4 text-black hover:text-[#46C33B] cursor-pointer "
                    value="Old"
                    // onClick={() => props.setCondition("Old")}
                  >
                    Actions
                  </option>
                  <option
                    className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                    value="Old"
                    // onClick={() => props.setCondition("Old")}
                  >
                    Old
                  </option>
                  <option
                    className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                    value="New"
                    // onClick={() => props.setCondition("New")}
                  >
                    New
                  </option>
                </select>
              </li>
              <li className="p-0 m-0">
                <select
                  className=" bg-transparent border-none lg:pr-2 md:pr-2 "
                  id="condition"
                >
                  <option
                    className="text-sm font-normal leading-4 text-black hover:text-[#46C33B]  cursor-pointer "
                    value="Old"
                    // onClick={() => props.setCondition("Old")}
                  >
                    Seller center
                  </option>
                  <option
                    className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                    value="Old"
                    // onClick={() => props.setCondition("Old")}
                  >
                    Old
                  </option>
                  <option
                    className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                    value="New"
                    // onClick={() => props.setCondition("New")}
                  >
                    New
                  </option>
                </select>
              </li>
              <li className="p-0 m-0">
                <select
                  className=" bg-transparent border-none lg:pr-2 md:pr-2 "
                  id="condition"
                >
                  <option
                    className="text-sm font-normal leading-4 text-black hover:text-[#46C33B] cursor-pointer "
                    value="Old"
                    // onClick={() => props.setCondition("Old")}
                  >
                    Eng-EN
                  </option>
                  <option
                    className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                    value="Old"
                    // onClick={() => props.setCondition("Old")}
                  >
                    Old
                  </option>
                  <option
                    className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                    value="New"
                    // onClick={() => props.setCondition("New")}
                  >
                    New
                  </option>
                </select>
              </li>
            </ul>
          </div>
          <div className="flex">
            <li className="list-none">
              <a className="text-black">
                Cart(<span className="text-[#46C33B]">0</span>)
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
