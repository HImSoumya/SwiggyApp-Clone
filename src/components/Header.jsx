import { IoIosArrowDown } from "react-icons/io";
import { PiSuitcaseSimple } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

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
    <>
    <header className="w-full h-[60px] shadow-lg flex justify-center items-center">
      <div className="w-[80%]   flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
          <img
            className="h-[40px] transform hover:scale-125 duration-300"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt=""
          />
          </Link>
          <div className="flex items-center gap-2">
            <p className=" font-bold border-b-2 border-black text-[12px] text-gray-700">
              other
            </p>
            <IoIosArrowDown className=" text-[18px] text-orange-500" />
          </div>
        </div>

        <ul className="flex gap-6">
          {HeadersOptions.map((option) => {
            return (
              <li
                key={option.id}
                className="flex items-center gap-2 text-[16px] text-gray-600 font-semibold cursor-pointer"
              >
                <option.icon className="text-[20px] "/>
                <p>{option.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
    <Outlet/>
    </>
  );
};

export default Header;
