import { useState } from "react";
import "./DropDown.css";
import DropLine from "../../assets/Line.svg";
import { useHistory } from 'react-router-dom';

const Dropdown = () => {
    const history = useHistory();
    const [showDropDown, setshowDropDown] = useState(false);
    return(
        <div className="UserMenu_dropdown__container?">
            <div className="productsDropdown__anchor" onClick={()=> setshowDropDown(!showDropDown)}>
             <img src={DropLine}/>  
            </div>
            {showDropDown && (
            <div className="UserMenu_dropdown__containerbox"> 
                <div className="UserMenu_dropdown__list">
                    <span>Update Profile</span>
                    <span style={{cursor: "pointer"}} onClick={() => {localStorage.removeItem("token"); history.replace("/login")} }>Log OUT</span>
                </div>
               
             
            </div>
            )}
        </div>
        
    )
} 

export default Dropdown;