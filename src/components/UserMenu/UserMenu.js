import "./UserMenu.css";
import Avatar from "../Avatar/Avatar";
import { ReactComponent as Forwards } from "../../assets/Forward.svg";
import { useHistory } from 'react-router-dom';


const UserMenu = ({user}) => {


  const history = useHistory();

  return (
    
      <div className="test">
        <div className="UserMenu__container">
          <div className="UserMenu__container avatar">
            <Avatar
              user={user}
            />
          </div>

          <div className="UserMenu__container text">
            <span>{user.name} {user.surname}</span>
          </div>

          <div className="UserMenu__container forward">
            <Forwards />
          </div>
        </div>

        <div className="UserMenu_dropdown__space">
        </div>
      <div className="UserMenu_dropdown__container">
        <div className="UserMenu_dropdown__container box">       
          <div className="UserMenu_dropdown__list">
            <span>Update Profile</span>
            <span>My boards</span>
            <span>My pins</span>
            <div style={{cursor: "pointer"}} onClick={() => {localStorage.removeItem("token"); history.replace("/login")} }>Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;