import { useState, useEffect } from "react";
import OptionSlider from "../components/OptionSlider";
import RestaurantSlider from "../components/RestaurantSlider";

export default function Home() {
  const [optionsData, setOptionsData] = useState([]);
  const [restaurantsData,setRestaurantsData] = useState([])

  const fetchItems = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();
    setOptionsData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setRestaurantsData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
    // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto mt-3  overflow-hidden">
        <OptionSlider data={optionsData} />
        <RestaurantSlider data={restaurantsData}/>
      </div>
    </div>
  );
}
