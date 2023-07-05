import React, { useEffect, useState } from "react";
import Phone_Datas from "../../Components/Category_Page/Phone_Data";
import Advanced_Option from "./Advanced_Option";
import { useSelector } from "react-redux";

const Category = () => {
  const Phone_Data = useSelector((state: any) => state.phones.phones);
  const [items, setItems] = useState<any>(Phone_Data);
  const [category1, setCategory] = useState("");
  //Category Filter//
  const filterItems = async () => {
    try {
      const response = await fetch(`http://localhost:8000/product/getAll`);
      const data = await response.json();
      // Filter the data for the "Apple" category
      const appleItems = data.data.filter(
        (item: any) => item.category === "Apple"
      );
      setItems(appleItems);
    } catch (error) {
      console.log(error);
    }
  };

  const filterItem = async (categoryItem: any) => {
    try {
      const response = await fetch(
        `http://localhost:8000/product/getCategory/category/${categoryItem}`
      );
      const data = await response.json();
      setItems(data);
      setCategory(categoryItem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterItems();
  }, []);
  console.log("itemsall", items);
  //Condition Filter//
  // const filterCondition = async (conditionItem: any) => {
  //   axios
  //     .get(
  //       `http://localhost:8000/product/getCondition/condition/${conditionItem}`
  //     )
  //     .then((res: any) => {
  //       dispatch(filterPhones(res.data));
  //       setItems(res.data);
  //     });
  //   // if (items) {
  //   //   const updatedCondition = items.filter((curElem: any) => {
  //   //     return curElem.condition === conditionItem;
  //   //   });
  //   //   setItems(updatedCondition);
  //   // }
  // };

  return (
    <div className="categroy py-10 p-4 container m-auto space-y-10">
      <div className="c-body-t space-y-6">
        <h6 className="text-black text-base font-normal leading-4">Phones</h6>
        <h2 className="text-black text-lg font-semibold leading-5">
          Choose Your Favorite Brand{" "}
        </h2>
      </div>
      <div className="c-body-b space-x-3  space-y-6 ">
        <button
          onClick={() => filterItem("Apple")}
          className="w-[143px] ml-3 hover:border-2 border-[#46C33B] rounded h-[52] text-black text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          Apple
        </button>
        <button
          onClick={() => filterItem("Samsung")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          Samsung
        </button>
        <button
          onClick={() => filterItem("Sony")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          Sony
        </button>
        <button
          onClick={() => filterItem("Motorola")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          Motorola
        </button>
        <button
          onClick={() => filterItem("BLU")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          BLU
        </button>
        <button
          onClick={() => filterItem("LG")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          LG
        </button>
        <button
          onClick={() => filterItem("Huawei")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          Huawei
        </button>
        <button
          onClick={() => filterItem("Google")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          Google
        </button>
        <button
          onClick={() => filterItem("BlackBerry")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          BlackBerry
        </button>
        <button
          onClick={() => filterItem("Oneplus")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          Oneplus
        </button>
        <button
          onClick={() => filterItem("Yaytech")}
          className="w-[143px] rounded h-[52] text-black hover:border-2 border-[#46C33B] text-lg py-4 px-12 font-normal leading-5 bg-white"
        >
          YayTech
        </button>
      </div>
      <Advanced_Option
        items={items}
        setItems={setItems}
        category1={category1}
      />
      {items ? <Phone_Datas items={items} /> : null} {/* Updated line */}
    </div>
  );
};

export default Category;
