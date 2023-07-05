import React from "react";
import Pay1 from "../../../src/Pic/pay1.png";
import Pay2 from "../../../src/Pic/pay2.png";
import Pay3 from "../../../src/Pic/pay3.png";
import Pay4 from "../../../src/Pic/pay4.png";

interface Typepayment {
  id: number;
  img: string;
  description: string;
}

const Payment = () => {
  const Payments: Typepayment[] = [
    {
      id: 1,
      img: Pay1,
      description: "Payments 100% secured",
    },
    {
      id: 2,
      img: Pay2,
      description: "30-day money back guarantee",
    },
    {
      id: 3,
      img: Pay3,
      description: "1-year minimum warranty",
    },
    {
      id: 4,
      img: Pay4,
      description: "Free Shipping",
    },
  ];
  return (
    <div className="payment mb-12 container justify-between p-6  mt-6 bg-transparent  m-auto">
      <div className="card-p flex flex-wrap space-y-1  py-6 justify-between border-t-4 border-b-4  border-black ">
        {Payments.map((item) => {
          return (
            <div className="payment-body text-center " key={item.id}>
              <div className="card-p flex text-center space-x-4 ">
                <img src={item.img} className="w-[25px] h-[27px] " alt="" />
                <p className="text-[#202020] font-normal text-sm leading-4">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-black mt-6 text-sm font-normal leading-6">
        Our partners are electronics experts who test and verify that each
        product is 100% functional before it leaves the factory. This is the
        reason you benefit from a minimum 1 -Year warranty with the
        <br /> purchase of a refurbished device at YayTech.
      </p>
    </div>
  );
};

export default Payment;
