import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Advanced_Option = (props: any) => {
  const dispatch = useDispatch();
  const { items, setItems, category1 } = props;
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [error, setError] = useState("");

  const FilterPhones = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/product/filterSearch`,
        {
          params: {
            condition,
            sort,
            minPrice,
            maxPrice,
            category: items[0]?.category, // Assuming the category is stored in the first item of the 'items' array
          },
        }
      );
      const filteredData = response.data.filter(
        (item: any) => item.category === category1
      );
      setItems(filteredData);
    } catch (err: any) {
      console.error("API Error:", err.response.data);
      setError(
        "An error occurred while fetching data. Please try again later."
      );
    }
  };

  const handleFilterClick = () => {
    FilterPhones();
  };

  useEffect(() => {
    FilterPhones();
  }, [condition, sort, minPrice, maxPrice]);

  return (
    <div className="your_search container text-center items-center pt-16 pb-16 border-b-2 border-[#C8C8C8] flex-wrap p-4 py-6 m-auto flex justify-between">
      <div className="body-search-left">
        <h2 className="text-black text-xl font-semibold cursor-pointer leading-7">
          Advanced Options
        </h2>
      </div>
      <div className="body-search-right">
        <ul className="flex space-x-6 space-y-4 flex-wrap">
          <li className="border mt-4 ml-6 border-[#C8C8C8] rounded">
            <select
              className="py-2 pl-4 lg:pr-16"
              id="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="">All Conditions</option>
              <option value="Old">Old</option>
              <option value="New">New</option>
            </select>
          </li>
          <li className="border cursor-pointer border-[#C8C8C8] rounded">
            <select
              id="sorting"
              className="py-2 pl-4 lg:pr-16"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sorting</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </li>
          <li className="border mt-4 ml-6 border-[#C8C8C8] rounded">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="input py-2 pl-4 lg:pr-16 appearance-none"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </li>
          <li className="border mt-4 ml-6 border-[#C8C8C8] rounded">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="input py-2 pl-4 lg:pr-16 appearance-none"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </li>
          <li className="border mt-4 ml-6 border-[#C8C8C8] rounded">
            <button
              className="bg-blue-500 text-white px-4 py-2"
              onClick={handleFilterClick}
            >
              Filter
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Advanced_Option;
