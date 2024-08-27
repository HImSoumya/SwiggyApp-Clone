/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function OptionSlider({data}) { 
  const [value, setValue] = useState(0); 

  const handleNext = () => {
    value >= 124 ? "" : setValue((pre) => pre + 30);
  };

  const handlePrev = () => {
    value === 0 ? "" : setValue((pre) => pre - 30);
  };

  console.log(value);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">{`what's on your mind?`}</h1>
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
        className={`flex w-full duration-300 mb-10`}
      >
        {data && data.map((item) => (
          <img
            key={item.id}
            className="h-[160px]"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
            alt=""
          />
        ))}
      </div>
      <hr className="border" />
    </>
  );
}
