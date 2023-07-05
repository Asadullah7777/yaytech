import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { getPhones } from "../../Redux/Slices/PhoneSlice";
import { getPhones, fetchData } from "../../Redux/Slices/PhoneSlice";

interface LikeType {
  id: number;
  img: string;
  description: string;
  price: string;
  discountprice: string;
}

const Also_Like = () => {
  const phoneData = useSelector((state: any) => state.phones.phones);
  const [data, setData] = useState(phoneData);
  const params = useParams();
  const dispatch = useDispatch();
  const { category } = params;

  // useEffect(() => {
  //   dispatch();
  // }, []);

  //Category Filter//
  const filterItem = async () => {
    await axios
      .get(`http://localhost:8000/product/getCategory/category/${category}`)
      .then((res: any) => {
        setData(res.data);
        // dispatch(getPhones(res.data));
      });
    // const updatedItems = data.filter((curElem: any) => {
    //   return curElem.category === category;
    // });
    // setData(updatedItems);
  };
  useEffect(() => {
    filterItem();
  }, [category]);

  return (
    <div className="like mt-8 container m-auto bg-transparent p-8 pt-6 pb-6">
      <div>
        <h2 className="text-[#202020] text-2xl font-semibold leading-7">
          You May Also Like
        </h2>
      </div>
      <div className="card-like gap-4 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-6 bg-transparent">
        {data &&
          data.length &&
          data.map((item: any) => (
            <div
              className="card-body-like rounded bg-white space-y-6 p-6 w-[100%] shadow-md text-center"
              key={item.id}
            >
              <img
                className="w-fit h-fit m-auto"
                src={`http://localhost:8000/${item.img}`}
                alt=""
              />
              <p className="text-black text-sm font-normal leading-4">
                {item.name}
              </p>
              <div className="price-like flex border-t-2 border-[#C8C8C8] text-center justify-center space-y-1 space-x-2">
                <span className="text-black text-sm font-semibold leading-4 mt-2">
                  {item.discountprice}
                </span>
                <span className="text-[#C8C8C8] text-xs font-normal leading-3 pt-2">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Also_Like;
