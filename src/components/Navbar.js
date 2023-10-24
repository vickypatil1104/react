import React, { useState } from "react";
import logo from "../img/kisspng-swiggy-office-bangalore-logo-chief-executive-deliv-on-off-5ac789f82ef2d9.5831403715230264241923.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";

function Navbar() {
  const [login, setLogin] = useState("login");

  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="flex justify-between shadow-lg px-6 py-4 items-center bg-orange-200">
        <div className="w-14">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-item">
          <ul className="flex items-center">
            <li className="px-4">Online Status:{onlineStatus ? "😀" : "😕"}</li>
            <li className="item item1">
              <Link className="px-4" to="/">
                Home
              </Link>
            </li>
            <li className="item item2">
              <Link className="px-4" to="/about">
                About
              </Link>
            </li>
            <li className="item item3">
              <Link className="px-4" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="px-4">
              <button
                className="px-4 py-2 bg-blue-200 rounded-lg hover:bg-blue-300"
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
