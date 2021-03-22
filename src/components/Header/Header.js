import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/daypaylogo.png";
import Button from "../Button/Button";
import { UserContext } from "../../user-context";

const Header = () => {
  const { token } = useContext(UserContext);

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
      {!token ? (
        <>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button buttonClass="defaultButton" value="Login" />
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button buttonClass="defaultButton_featured" value="Sign up" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <Button buttonClass="defaultButton" value="Dashboard" />
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
