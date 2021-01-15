import { useState } from "react";
import "./header.css";
import logo from "../../utils/daypaylogo.png";
const Header = () => {
  return (
    <div className="header__container">
      <div className="header__container_child_img">
        <img src={logo} alt="Daypay Logo" className="header__logo"></img>
      </div>
      <div className="header__container_child">Navbar part</div>

      <div className="header__container_child">Login / Sign up part</div>
    </div>
  );
};

export default Header;
