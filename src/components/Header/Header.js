import { useState } from "react";
import "./header.css";
import logo from "../../utils/daypaylogo.png";
const Header = () => {
  const [site, currentSite] = useState(false);

  let className = "header__container_child_nav";

  const handleClick = () => {
    if (site) {
      currentSite(false);
      className = "header__container_child_nav";
    } else if (!site) {
      currentSite(true);
      className = "header__container_child_nav_menu-active";
    }

    console.log(site);
  };
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
        {site === true ? (
          <div className="header__container_child_nav">Pricing</div>
        ) : (
          <div className="header__container_child_nav_ac">Pricing</div>
        )}
        <div className="header__container_child_nav">Contact</div>
      </div>
      <div className="header__container_child_img">
        <img src={logo} alt="Daypay Logo" className="header__logo"></img>
      </div>

      <div className="header__container_child_buttons">
        Login / Sign up part
      </div>
    </div>
  );
};

export default Header;
