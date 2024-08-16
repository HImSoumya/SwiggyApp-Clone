import { IoIosArrowDown } from "react-icons/io";
import { PiSuitcaseSimple } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const HeadersOptions = [
    {
      id: 100,
      title: "Swiggy Corporate",
      icon: PiSuitcaseSimple,
    },
    {
      id: 101,
      title: "Search",
      icon: IoSearchOutline,
    },
    {
      id: 102,
      title: "Offers",
      icon: BiSolidOffer,
    },
    {
      id: 103,
      title: "Help",
      icon: IoHelpBuoyOutline,
    },
    {
      id: 104,
      title: "Signin",
      icon: FaRegUser,
    },
    {
      id: 105,
      title: "Cart",
      icon: FiShoppingCart,
    },
  ];

  return (
    <header className="w-full h-[60px] shadow-lg flex justify-center items-center">
      <div className="w-[80%]   flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-[40px]"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt=""
          />
          <div className="flex items-center gap-2">
            <p className=" font-bold border-b-2 border-black text-[12px] text-gray-700">
              other
            </p>
            <IoIosArrowDown className=" text-[18px] text-orange-500" />
          </div>
        </div>

        <ul className="flex gap-8">
          {HeadersOptions.map((option) => {
            return (
              <li
                key={option.id}
                className="flex items-center gap-2 text-[16px] text-gray-600 font-semibold cursor-pointer"
              >
                <option.icon className="text-[20px]"/>
                {option.title}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
