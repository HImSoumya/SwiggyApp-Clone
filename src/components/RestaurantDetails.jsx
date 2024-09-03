/* eslint-disable react/prop-types */

export default function RestaurantDetails({restaurantInfo}) {
      
  return (
    <div className="w-[800px] border-2 bg-white z-50">
       <p className="text-[1px] text-gray-500">Home / {restaurantInfo.city} / {restaurantInfo.name}</p>
    </div>
  )
}
