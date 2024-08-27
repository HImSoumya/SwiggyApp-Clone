/* eslint-disable react/prop-types */
import RestaurantCard from "../components/RestaurantCard";

export default function Restaurants({ data }) {
  return (
    <div className="w-full mt-8">
      <h1 className="text-lg font-bold">
        Restaurants with online food delivery in Bhubaneswar
      </h1>
      <div className="w-full grid grid-cols-4 gap-5 mt-6">
        {data && data.map((item) => (
          <RestaurantCard key={item.info.id} item={item} />
        ))}
      </div>
    </div>
  );
}
