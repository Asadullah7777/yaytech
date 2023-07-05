import React, { useEffect, useState } from "react";
import { Phone_Data } from "../../phone_data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getPhones, searchByName } from "../../Redux/Slices/PhoneSlice";

const Your_Search = (props: any) => {
  const { data, search } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItems] = useState<any>(data);
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const FilterPhone = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/product/filterSearch?condition=${condition}&sort=${sort}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      console.log("seaarchresponse", response.data);
      setItems(response.data);
      // console.log(response.data, "Sorting:");
    } catch (err: any) {
      console.error("API Error:", err.response.data);
      setError(
        "An error occurred while fetching data. Please try again later."
      );
    }
  };
  console.log("searchitems", items);
  console.log("searchsort", sort);
  console.log("searchminPrice", minPrice);
  console.log("searchmaxPrice", maxPrice);

  const handleFilterClick = () => {
    FilterPhone();
  };

  useEffect(() => {
    FilterPhone();
  }, [condition, sort, minPrice, maxPrice]);

  //For Search API CALL
  const SearchPhones = async (search: any) => {
    axios
      .get(`http://localhost:8000/product/getPhoneSearch/search/${search}`)
      .then((res) => {
        dispatch(searchByName(res.data));
        setItems(res.data);
      })

      .catch((err) => console.error(err));
    // let rep = await fetchData();
  };

  useEffect(() => {
    SearchPhones(search);
  }, [search]);

  // const filterCondition = (conditionItem: any) => {
  //   if (items) {
  //     const updatedCondition = data.filter((curElem: any) => {
  //       return curElem.condition === conditionItem;
  //     });

  //     setItems(updatedCondition);
  //   }
  // };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="your_search  container text-center items-center pt-16 pb-16 border-b-2 border-[#C8C8C8] flex-wrap p-4 py-6 m-auto flex justify-between">
        <div className="body-search-left flex">
          <h2 className="text-black text-xl font-semibold leading-7">
            Your Search : {search}
          </h2>
        </div>
        <div className="body-search-right ">
          <ul className="flex space-x-6 space-y-4 flex-wrap">
            <li className="border mt-4 ml-6 border-[#C8C8C8] rounded">
              <select
                className="py-2 pl-4 lg:pr-16"
                id="condition"
                onChange={(e) => {
                  console.log("e.target.value", e.target.value);
                  setCondition(e.target.value);
                }}
              >
                <option
                  className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                  value=""
                >
                  All Conditions
                </option>
                <option
                  className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                  value="Old"
                >
                  Old
                </option>
                <option
                  className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                  value="New"
                >
                  New
                </option>
              </select>
            </li>
            <li className="border cursor-pointer border-[#C8C8C8] rounded">
              <select
                id="sorting"
                className="py-2 pl-4 lg:pr-16"
                name="sorting"
                onChange={(e) => setSort(e.target.value)}
              >
                <option
                  className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                  value=""
                >
                  Sorting
                </option>
                <option
                  className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                  value="asc"
                >
                  Ascending
                </option>
                <option
                  className="text-sm cursor-pointer font-normal leading-4 text-[#202020]"
                  value="desc"
                >
                  Descending
                </option>
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
                onChange={(e: any) => {
                  const input = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                  setMinPrice(input);
                }}
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
                onChange={(e: any) => {
                  const input = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                  setMaxPrice(input);
                }}
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
      <div className="card-like container m-auto pt-20  cursor-pointer gap-8 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-6 bg-transparent ">
        {currentItems
          .filter((val: any) => {
            if (search === "") {
              return val;
            } else if (
              val?.name?.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item: any) => {
            return (
              <div
                className="card-body-like rounded cursor-pointer bg-white space-y-6 p-6 w-[100%] shadow-md text-center "
                key={item.id}
                onClick={() =>
                  navigate(`/phone_detail/${item._id}/${item.category}`, {
                    replace: true,
                  })
                }
              >
                <img
                  className="w-fit h-fit m-auto"
                  src={`http://localhost:8000/${item.img}`}
                  alt=""
                />
                <p className="text-black text-sm font-normal leading-4">
                  {item.name}
                </p>
                <div className="price-like flex border-t-2   border-[#C8C8C8] text-center justify-center space-y-1 space-x-2">
                  <span className="text-black text-sm font-semibold leading-4 mt-2">
                    {item.discountprice}{" "}
                  </span>
                  <span className="text-[#C8C8C8] text-xs font-normal leading-3 pt-2">
                    {item.price}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {/* Pagination */}
      <div className="pagination aligns-center text-center space-x-4 pb-10 pt-10">
        <button
          className="border-2 bordor-[#46C33B] hover:text-[#46C33B] text-black p-2"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({
          length: Math.ceil(Phone_Data.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={
              currentPage === index + 1
                ? "active border-2 bordor-[#46C33B] hover:text-[#46C33B] text-black p-2"
                : ""
            }
          >
            {index + 1}
          </button>
        ))}
        <button
          className="border-2 bordor-[#46C33B] hover:text-[#46C33B] text-black p-2"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(Phone_Data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Your_Search;
