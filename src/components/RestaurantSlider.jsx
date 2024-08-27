/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import RestaurantCard from "./RestaurantCard";

export default function RestaurantSlider({ data }) {
  const [value, setValue] = useState(0);

  const handleNext = () => {
    value >= 181 ? "" : setValue((pre) => pre + 30);
    // setValue((pre) => pre + 30)
    console.log(value);
  };

  const handlePrev = () => {
    value === 0 ? "" : setValue((pre) => pre - 30);
  };
  return (
    <>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">{`Top restaurant chains in Bhubaneswar`}</h1>
          <div className="flex gap-4">
            <div
              onClick={handlePrev}
              className={`cursor-pointer  p-1 w-[25px] h-[25px] flex justify-center items-center rounded-full ${
                value === 0 ? "bg-gray-100" : "bg-gray-200"
              }`}
            >
              <FaArrowLeft className="text-xs text-gray-600" />
            </div>
            <div
              onClick={handleNext}
              className={`cursor-pointer  p-1 w-[25px] h-[25px] flex justify-center items-center rounded-full ${
                value >= 120 ? "bg-gray-100" : "bg-gray-200"
              }`}
            >
              <FaArrowRight className="text-xs text-gray-600" />
            </div>
          </div>
        </div>
        <div
          style={{ translate: `-${value}%` }}
          className={`flex gap-5 justify-center w-full duration-300 mt-2 `}
        >
          {data.map((item) => (
            <RestaurantCard key={item.info.id} item={item} />
          ))}
        </div>
        <hr className="border" />
      </div>
    </>
  );
}
