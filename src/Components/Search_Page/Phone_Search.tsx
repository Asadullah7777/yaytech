import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Data {
  items: any;
  data: any;
  onItemClick: any;
}

const Phone_Search = (props: Data) => {
  const [phoneData, setPhoneData] = useState<any[]>([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/product/getAll?page=${currentPage}`
      );
      console.log("response", response);
      setPhoneData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);
  console.log("currentPage", phoneData);
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = phoneData?.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="like container m-auto bg-transparent p-8 pt-6 pb-6">
      <div className="card-like cursor-pointer gap-8 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 my-6 bg-transparent">
        {currentItems?.map((item: any) => (
          <div
            className="card-body-like rounded cursor-pointer bg-white space-y-6 p-6 w-[100%] shadow-md text-center"
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
      {/* // Pagination */}
      <div className="pagination aligns-center text-center space-x-4 pb-10 pt-10">
        <button
          className="border-2 bordor-[#46C33B] hover:text-[#46C33B] text-black p-2"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({
          length: Math.ceil(phoneData.length / itemsPerPage),
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
          disabled={currentPage === Math.ceil(phoneData.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Phone_Search;
