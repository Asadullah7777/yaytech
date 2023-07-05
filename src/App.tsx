import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./Components/Search_Page/Search";
import CategoryH from "./Components/Category_Page/CategoryH";
import HeaderTop from "./Components/HeaderTop/HeaderTop";
import Header1 from "./Components/Header1/Header1";
import New_to_yaytech from "./Components/Payment_YayTech/New_to_yaytech";
import Footer1 from "./Components/Footer/Footer1";
import Phone_Search from "./Components/Search_Page/Phone_Search";
import Phone_Datial from "./Components/Phone_Detial_Page/Phone_Datial";
import { useSelector } from "react-redux";

function App() {
  const phones = useSelector((state: any) => state.phones.phones);
  const [search, setSearch] = useState<any>("");
  const [data, setData] = useState<any>(phones);

  const filterData = async () => {
    const filteredData = await phones.filter((val: any) => {
      if (search === "") {
        return val;
      } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    });
    setData(filteredData);
  };

  useMemo(() => {
    filterData();
  }, [search]);

  return (
    <div className="App bg-[#F8F8F8] overflow-hidden">
      <HeaderTop />
      <Header1 setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Phone_Search />} />
        <Route path="/category" element={<CategoryH />} />
        <Route path="/all_Phones" element={<Phone_Search />} />
        <Route path="/phone_detail/:id/:category" element={<Phone_Datial />} />
        <Route
          path="/search_phone"
          element={<Search data={data} search={search} />}
        />
      </Routes>
      <New_to_yaytech />
      <Footer1 />
    </div>
  );
}

export default App;
