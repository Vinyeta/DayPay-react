import { useState } from "react";
import "./header.css";
import logo from "../../utils/daypaylogo.png";


const Header = () => {
  const [links, setLinks] = useState({
    activeObject: null,
    objects: [{ text: "About" }, { text: "Pricing" }, { text: "Contact" }],
  });


  const toggleActive = (index) => {
    setLinks({ ...links, activeObject: links.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    if (links.objects[index] === links.activeObject) {
      return "header__child_nav-active";
    } else {
      return "header__child_nav";
    }
  };

  return (
    <div className="header__container">

      <div className="header__child_container">
        {links.objects.map((elements, index) => (
          <div
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            {elements.text}
          </div>
        ))}

      </div>
      <div className="header__logo">
        <img src={logo} alt="Daypay Logo" className="header__logo"></img>
      </div>


      <div className="header__buttons">Login / Sign up part</div>

    </div>
  );
};

export default Header;