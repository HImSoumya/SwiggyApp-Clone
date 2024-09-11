/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { IoBicycleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function RestaurantDetails({ restaurantInfo }) {
  console.log(restaurantInfo);
  return (
    <div className="w-[730px] border-2 bg-white z-50">
      <p className="text-[1px] text-gray-400">
        <Link to={"/"}>
          <span className="text-gray-400 hover:text-gray-700 cursor-pointer duration-200">
            Home
          </span>{" "}
        </Link>
        /{" "}
        <span className="text-gray-400 hover:text-gray-700 cursor-pointer duration-200">
          {restaurantInfo.city}
        </span>
        /{" "}
        <span className="text-gray-400 hover:text-gray-700 cursor-pointer duration-200">
          {restaurantInfo.name}
        </span>
      </p>
      <h1 className="font-bold pt-6 text-xl pl-2">{restaurantInfo.name}</h1>

      <div className="  w-full h-[230px] mt-8 rounded-3xl bg-gradient-to-t from-slate-200 flex justify-center">
        <div className="w-[96%]  border border-slate-200 bg-white h-[215px] overflow-hidden rounded-3xl py-2">
          <div className="flex gap-1 items-center p-2">
            <div className="w-[16px] h-[16px] bg-[#1C903C] rounded-full flex justify-center items-center">
              <FaStar className="text-white text-[9px]" />
            </div>
            <h1 className="text-[15px] font-semibold">
              {restaurantInfo.avgRating}({restaurantInfo.totalRatingsString}) -{" "}
              {restaurantInfo.costForTwoMessage}
            </h1>
          </div>

          <p className=" text-xs font-semibold text-[#FF5200] underline  px-4">
            {restaurantInfo?.cuisines?.join(", ")}
          </p>
          <div className="px-4">
            <div className="flex items-center gap-3 mt-2">
              <div className="h-[6px] w-[6px] bg-gray-400 rounded-full"></div>
              <p className="text-[12px]">
                <span className="font-semibold">Outlet</span>{" "}
                <span className="text-gray-500">{restaurantInfo.areaName}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-[6px] w-[6px] bg-gray-400 rounded-full"></div>
              <p className="text-[12px] font-bold">
                {restaurantInfo?.sla?.minDeliveryTime}-
                {restaurantInfo?.sla?.maxDeliveryTime} mins
              </p>
            </div>
          </div>

          <div className="w-full border-t border-b h-[40px] mt-4 px-4 text-gray-500 flex justify-start items-center gap-2 font-semibold">
            <IoBicycleSharp className="text-xl"/>
            <p className="text-xs">1.9 kms | ₹29 Delivery fee will apply</p>
          </div>
          <div className="w-full bg-gradient-to-l from-pink-100 from-10% h-[45px] px-4 pt-2">
            <p className="text-[#FF5200] text-xs font-semibold ">Free delivery on orders above ₹199</p>
          </div>
        </div>
      </div>
    </div>
  );
}
