import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { useSelector } from "react-redux";

function Navbar() {
  const [login, setLogin] = useState("login");
  const onlineStatus = useOnlineStatus();

  const cardItems = useSelector((store) => store.card.items);
  const cItems = cardItems.length;
  return (
    <>
      <div className="flex justify-around shadow-lg px-6 py-4 items-center border-gray-200 border-b w-full z-10 bg-white text-black semibold text-lg">
        <div className="w-36 px-3  border-r-2 border-gray-300">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-item text-orange-300 text-lg font-semibold">
          <ul className="flex items-center">
            <li className="px-4 text-xl">
              Online Status:{onlineStatus ? "😀" : "😵"}
            </li>
            <li className="hover:text-orange-500 transition-all duration-500 ease-in-out">
              <Link className="px-4" to="/">
                Home
              </Link>
            </li>
            <li className="hover:text-orange-500 transition-all duration-500 ease-in-out">
              <Link className="px-4" to="/about">
                About
              </Link>
            </li>
            <li className="hover:text-orange-500 transition-all duration-500 ease-in-out">
              <Link className="px-4" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="py2 cursor-pointer">
              <Link to="/card">Card:-({cItems}Items)</Link>
            </li>
            <li className="px-4">
              <button
                className="px-5 py-2 bg-orange-500 text-white rounded-lg transition-all duration-500  hover:bg-orange-600"
                onClick={() => {
                  setLogin(login === "login" ? "logout" : "login");
                }}
              >
                {login}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
