import React, { useState, useEffect } from "react";
import Cart1 from "../../../src/Pic/cart1.png";
import Cart2 from "../../../src/Pic/cart2.png";
import Cart11 from "../../../src/Pic/cart11.png";
import Cartbtn1 from "../../../src/Pic/cartbtn1.png";
import Cartbtn2 from "../../../src/Pic/cartbtn2.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { getPhones } from "../../Redux/Slices/PhoneSlice";

const Add_Cart = () => {
  const Phone_Data = useSelector((state: any) => state.phones.phones);
  const [phoneData, setPhoneData] = useState<any>(null);
  const [counter, setCounter] = useState<number>(0);
  const params = useParams();
  const id = params?.id;
  console.log(id, "PPPPPPPP");
  // useEffect(() => {
  //   const currentData = Phone_Data.find((f: any) => f.id === Number(id));
  //   setPhoneData(currentData);
  // }, [id]);

  const FillTodo = async () => {
    axios
      .get(`http://localhost:8000/product/getOne/${id}`)
      .then((res) => {
        setPhoneData(res.data);
      })

      .catch((err) => console.error(err));

    // let rep = await fetchData();
  };

  useEffect(() => {
    // const filteredData = Phone_Data.filter((item: any) => item.category === id);
    console.log("dhskhd");
    FillTodo();
  }, []);

  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  return !phoneData ? (
    <div>"loading"</div>
  ) : (
    <div className="cart pt-12 container flex  flex-wrap justify-evenly items-center lg:py-8 ">
      <div className="firstimgdiv">
        {" "}
        <img
          className="w-[76px] h-[76px] mb-8 "
          src={`http://localhost:8000/${phoneData.img}`}
          alt=""
        />
      </div>
      <div className="cart-body lg:flex space-x-14 flex-wrap">
        {/* <div className="slider-cart">
          <button className="">{Cartbtn1}</button>
          <img src={Cart1} alt="" />
          <button className="">{Cartbtn2}</button>
        </div> */}
        <div className="left-body flex justify-center">
          <img
            className="lg:w-[300px] lg:h-[450px]"
            src={`http://localhost:8000/${phoneData.img}`}
            alt=""
          />
        </div>
        <div className="right-body grid-cols p-4 space-y-6 ">
          <h4 className="text-[#202020] text-xl font-medium leading-6">
            {phoneData.name}
          </h4>
          <div className="cart-price flex space-x-4">
            <span className="text-[202020]  text-xl font-semibold leading-8">
              {phoneData.discountprice}
            </span>
            <span className="text-[#C8C8C8] pt-1 text-lg font-semibold leading-7">
              {phoneData.price}
            </span>
          </div>
          <button className="border-b border-[#202020] text-[#202020] text-lg font-normal leading-5">
            Learn More...
          </button>
          <div className=" condition  space-y-4">
            <span className="text-[#202020] block text-xl font-medium leading-6">
              {" "}
              Condition:
            </span>
            <button className="text-[#202020] text-lg font-light leading-5 border border-[#46C33B] w-[170] h-[48px] rounded bg-white py-2 px-12">
              Excellent
            </button>
          </div>
          <div className=" grid-cols space-y-4 ">
            <span className="text-[#202020] text-xl font-medium leading-6">
              Quantity:
            </span>
            <div className=" flex bg-[#C8C8C8] w-[204px] h-[42px] rounded justify-between">
              <button
                onClick={decrease}
                disabled={counter === 0 ? true : false}
                className="w-[40px] h-[42px] cursor-pointer disabled:text-[#c6c6c6] text-black bg-[#E6E6E6] font-medium leading-7 rounded text-lg "
              >
                -
              </button>
              <span className="text-[#202020] text-base font-medium leading-5 m-auto">
                {counter}
              </span>
              <button
                onClick={increase}
                // disabled={counter === 1 ? false : true}
                className="w-[40px] h-[42px] cursor-pointer text-black bg-[#E6E6E6] font-medium leading-7 rounded text-lg "
              >
                +
              </button>
            </div>
          </div>
          <div className="btn-cart flex space-x-6 pt-6 pb-4">
            <button className="bg-white bg lg:text-lg text-sm font-semibold border border-[#46C33B] leading-6 text-[#46C33B] rounded lg:px-12 lg:py-2  px-6 py-2  ">
              Add to Cart
            </button>
            <button className="text-white bg lg:text-lg  text-sm border-none font-semibold leading-6 lg:px-16 lg:py-2 px-8 py-2 bg-[#46C33B] rounded">
              Buy Now
            </button>
          </div>
          <div className="seller-info flex space-x-10 border border-[#C8C8C8] p-4 rounded-md bg-white items-center">
            <div className="seller-img-left pl-4">
              <img className="w-[56px] h-[56px]" src={Cart2} alt="" />
            </div>
            <div className="seller-text-right grid-cols space-y-2">
              <h4 className="text-[#202020] text-lg leading-5 font-normal pb-2">
                Seller Information
              </h4>
              <span className="text-[#202020] text-xs font-light leading-3">
                UC Tech
              </span>
              <p className="text-[#202020] text-xs leading-3 font-light">
                Member since:
                <span className="text-[#D9D9D9] text-xs leading-3 font-light">
                  {" "}
                  May 11, 2022, United States
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Cart;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
