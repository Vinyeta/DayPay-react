import Logo from "../../utils/daypaylogo.png";
import Expand from "../../assets/Expand.png";
import "./RequestBar.css";
import SideMenu from '../SideMenu/SideMenu';
import { useState } from 'react';
import { Link } from "react-router-dom";
import RequestBox from '../RequestBox/RequestBox';
import Avatar from '../Avatar/Avatar';




const RequestBar = () => {

    const user = {
        "id":"6021fc5a3edd692a8bb60ad4",
        "name": "Pepe",
        "surname": "El Gipsy",
        "email": "pepe@pepe.pepe",
        "avatar": "https://randomuser.me/api/portraits/men/81.jpg",
        "password": "pepe"
    };

    const [RequestBarStatus, setRequestBarStatus] = useState(true);


    return (
        <>

        <div className="RequestBar_container">
        <div className="RequestBar_UserMenu__container">
        <div className="RequestBar_UserMenu__avatar">
            <Avatar
              user={user}
            />
        </div>
            <span>{user.name} {user.surname}</span>
        </div>

           <RequestBox/>
            </div>
    </>
    )
}

export default RequestBar;