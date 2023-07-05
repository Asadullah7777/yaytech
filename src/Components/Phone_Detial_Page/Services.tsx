import React from "react";
import Services1 from "../../../src/Pic/services1.png";
import Services2 from "../../../src/Pic/services2.png";
import Services3 from "../../../src/Pic/services3.png";
import Services4 from "../../../src/Pic/services4.png";

interface TypeServices {
  id: number;
  img: string;
  heading: string;
  description: string;
}

const Services = () => {
  const Service: TypeServices[] = [
    {
      id: 1,
      img: Services1,
      heading: "12-months refurbisher warranty",
      description:
        "In case of a defect, the item can be repaired free of charge. If it can not be repaired, we will replace it.",
    },
    {
      id: 2,
      img: Services2,
      heading: "30-day hassle-free returns",
      description:
        "Once you receive your item, you have 30  days to give it a test run. If it doesn’t meet your expectations, return it. Simple as that.",
    },
    {
      id: 3,
      img: Services3,
      heading: "Free and express shipping",
      description:
        "Almost all products are free shipping. So you pay for what you want instead of shipping.",
    },
    {
      id: 4,
      img: Services4,
      heading: "Customer care support",
      description:
        "If you have any questions or problems, our business will reply you within 1 business day. If they don’t, we’ve got your back and we’ll help you resolve it.",
    },
  ];

  return (
    <div className="Services container p-6  m-auto mt-20 mb-20 bg-transparent">
      <h2 className="text-black font-semibold text-2xl leading-8  mb-4">
        Included Services{" "}
      </h2>
      <div className="card-services  bg-white border rounded">
        <div className="card-body-services grid lg:grid-cols-4 md:grid-cols-2 gird-cols-1">
          {Service.map((item) => {
            return (
              <div className="card-title py-12 px-6 space-y-4" key={item.id}>
                <img
                  className="w-[80px] h-[80px]  m-auto"
                  src={item.img}
                  alt=""
                />
                <h4 className="text-[#202020] text-base font-medium leading-5 text-center">
                  {item.heading}
                </h4>
                <p className="text-[#838383] text-sm font-normal leading-4 text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
