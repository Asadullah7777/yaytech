import React from "react";
import HeaderTop from "../HeaderTop/HeaderTop";
import New_to_yaytech from "../Payment_YayTech/New_to_yaytech";
import Footer1 from "../Footer/Footer1";
import Services from "./Services";
import Payment from "./Payment";
import Product_detials from "./Product_detials";
import Also_Like from "./Also_Like";
import Add_Cart from "./Add_Cart";
import Header1 from "../Header1/Header1";
// import { useParams } from "react-router-dom";

const Phone_Datial = () => {
  // const params = useParams();

  // const phoneid = params.phoneid;
  // console.log("hhhh", phoneid);
  return (
    <div>
      <Add_Cart />
      <Also_Like />
      <Product_detials />
      <Services />
      <Payment />
    </div>
  );
};

export default Phone_Datial;
