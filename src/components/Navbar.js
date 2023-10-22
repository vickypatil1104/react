import React, { useState } from "react";
import logo from "../img/kisspng-swiggy-office-bangalore-logo-chief-executive-deliv-on-off-5ac789f82ef2d9.5831403715230264241923.png";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [login, setLogin] = useState("login");
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-item">
          <ul className="ul-item">
            <li className="item item1">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="item item2">
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li className="item item3">
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="item item4">
              <button
                className="btn"
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
