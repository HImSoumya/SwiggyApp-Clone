import { useParams } from "react-router-dom";
import RestaurantDetails from "../components/RestaurantDetails";
import { useEffect } from "react";

export default function SingleRestaurant() {
  const { id } = useParams();
  const resId = id?.split("-")
  const ID = resId[resId.length - 1].replace("rest","")

  useEffect(() => {

    const controller = new AbortController();  
    const signal = controller.signal;

    const getSingleRestaurant = async () => {
      try {
        const res = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=${ID}&catalog_qa=undefined&submitAction=ENTER`,
          {
            method: "GET",
            signal,
          }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data?.data?.cards[0]?.card?.card?.text);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleRestaurant();

    return () => {
      controller.abort();
    };
  }, [ID, id]);
  return (
    <div>
      <RestaurantDetails id={id} />
    </div>
  );
}
