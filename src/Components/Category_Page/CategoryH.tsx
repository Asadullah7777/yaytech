import React from "react";
import Category from "./Category";
import Advanced_Option from "./Advanced_Option";
import Phone_Search from "../Search_Page/Phone_Search";
import { isNotEmittedStatement } from "typescript";

const Category_Home = () => {
  return (
    <div>
      <Category />
      {/* <Advanced_Option /> */}
      {/* <Phone_Search items={items}/> */}
    </div>
  );
};

export default Category_Home;
