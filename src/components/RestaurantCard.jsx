/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";

export default function RestaurantCard({ item }) {
  return (
    <div className="w-full cursor-pointer flex flex-col justify-center gap-1 h-auto transform hover:scale-95 transition duration-300 ease-in-out">
      <div className="w-[230px] h-[130px] relative rounded-lg">
        <img
          className="w-full h-[130px] object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`}
          alt="img"
        />
        <span className="absolute top-2 text-[1px] text-white p-1 w-[80px] rounded-r-md -left-1 bg-gradient-to-r from-orange-400 to-red-500">
          Free Delivery
        </span>
        <div className="absolute bottom-0 bg-gradient-to-t from-black/80 w-full h-[80px] rounded-lg"></div>
      </div>
      <div>
        <h1 className=" font-bold text-sm">{item.info.name.length>=15?item.info.name.slice(0,15)+"...":item.info.name}</h1>
        <h2 className="flex gap-1 items-center text-[14px] font-semibold font-sans">
          <div className="w-[14px] h-[14px] bg-[#1C903C] rounded-full flex justify-center items-center">
            <FaStar className="text-white text-[8px]" />
          </div>
          {item.info.avgRating} / {item.info.sla.slaString}
        </h2>
        <p className="w-full flex gap-1 flex-wrap text-[14px] text-gray-500">
          {item.info.cuisines.slice(0, 3).join(", ")}
        </p>
        <p></p>
      </div>
    </div>
  );
}
