import { useState } from "react";
import "./header.css";
import logo from "../../utils/daypaylogo.png";
import Button from '../Button/Button';

const Header = () => {
  const [site, currentSite] = useState(false);
  const buttons = document.querySelector(".header__container_child_nav");

  const handleClick = () => {
    if (site) {
      this.currentSite(false);
    } else if (!site) {
      this.currentSite(true);
    }
    console.log(site);
  };

  console.log(buttons);
  return (
    <div className="header__container">
      <div className="header__container_child_container">
        <div
          className={
            site === true
              ? "header__container_child_nav_menu-active"
              : "header__container_child_nav"
          }
          onClick={handleClick}
        >
          About
        </div>
        <div className="header__container_child_nav">Pricing</div>
        <div className="header__container_child_nav">Contact</div>
      </div>
      <div className="header__container_child_img">
        <img src={logo} alt="Daypay Logo" className="header__logo"></img>
      </div>
      <div className="header__container_child_buttons">
        <Button style={"defaultButton"} value={"Log in"} /* onClick={}*/ />
        <Button style={"defaultButton_featured"} value={"Sign Up"} /* onClick={}*/ />
      </div>
    </div>
  );
};

export default Header;
