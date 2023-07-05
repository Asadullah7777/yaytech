import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Product_detials = () => {
  const Phone_Data = useSelector((state: any) => state.phones.phones);

  const [phoneData, setPhoneData] = useState<any>(null);
  const params = useParams();
  const id = params.id;
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
    console.log("dhskhd");
    FillTodo();
  }, []);

  return !phoneData ? (
    <div>Loading</div>
  ) : (
    <div className="product-detial container p-6 m-auto mt-16 bg-transparent">
      <h2 className="text-[#202020] text-2xl font-semibold leading-7">
        {" "}
        Product Detials
      </h2>

      <div className="body-detial rounded bg-white border p-10 mt-6">
        <p className="text-[#202020] font-normal text-base tracking-normal">
          {phoneData.description}
        </p>
      </div>
    </div>
  );
};

export default Product_detials;
