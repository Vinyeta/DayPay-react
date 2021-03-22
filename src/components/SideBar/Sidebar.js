import Logo from "../../assets/daypaylogo.png";
import "./Sidebar.css";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="SideBar_container">
        <Link to="/">
          <div className="SideBar_logo_container">
            <img src={Logo} height="37px" width="107px" alt="DayPay Logo" />
          </div>
        </Link>
        <div className="SideBar_menu_container">
          <SideMenu />
        </div>
      </div>
      )
    </>
  );
};

export default Sidebar;
