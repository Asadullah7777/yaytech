import React from "react";
import Your_Search from "./Your_Search";
import Phone_Search from "./Phone_Search";
import HeaderTop from "../HeaderTop/HeaderTop";
import Header1 from "../Header1/Header1";
import New_to_yaytech from "../Payment_YayTech/New_to_yaytech";
import Footer1 from "../Footer/Footer1";

const Search = (props: any) => {
  const { data, search } = props;
  return (
    <div className="search">
      {/* <HeaderTop />
      <Header1 /> */}
      <Your_Search data={data} search={search} />
      {/* <Phone_Search data={data} /> */}
      {/* <New_to_yaytech />
      <Footer1 /> */}
    </div>
  );
};

export default Search;
