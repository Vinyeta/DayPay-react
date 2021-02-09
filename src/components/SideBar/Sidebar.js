import Logo from "../../utils/daypaylogo.png";
import Expand from "../../assets/Expand.png";
import "./Sidebar.css";
import SideMenu from '../SideMenu/SideMenu';
import { useState } from 'react';
import { Link } from "react-router-dom";


const Sidebar = () => {

    const [SideBarStatus, setSideBarStatus] = useState(true);


    return (
        <>
        {SideBarStatus && (<div className="SideBar_container">
            <Link to="/">
                <div className="SideBar_logo_container">
                    <img src={Logo} height="37px" width="107px"  alt="DayPay Logo" />
                </div>
            </Link>
            <div className="SideBar_menu_container">
                <SideMenu />
            </div>

            <div className="SideBar_expandButton_container" onClick={() => setSideBarStatus(!SideBarStatus)} >
                <img src={Expand} alt="Expand Button"  />
            </div>
        </div>)}
        {!SideBarStatus && <div className="Page_expandButton_container" onClick={() => setSideBarStatus(!SideBarStatus)} >
                <img src={Expand} alt="Expand Button"  />
            </div>}
    </>
    )
}

export default Sidebar;