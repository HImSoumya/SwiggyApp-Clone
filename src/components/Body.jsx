import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Body = () => {
  const [items, setItems] = useState([]);

  const [value, setValue] = useState(0);

  const fetchItems = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();
    setItems(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const handleNext = () => {
    value >= 120 ? "" : setValue((pre) => pre + 30);
  };

  const handlePrev = () => {
    value === 0 ? "" : setValue((pre) => pre - 30);
  };

  console.log(value);

  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto mt-3  overflow-hidden">
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
          className={`flex w-full duration-1000`}
        >
          {items.map((item) => (
            <img
              key={item.id}
              className="h-[150px]"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
