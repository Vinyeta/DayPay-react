import "./UserMenu.css";
import Avatar from "../Avatar/Avatar";
import { ReactComponent as Forwards } from "../../assets/Forward.svg";

const UserMenu = ({ user }) => {
  return (
    
      <div className="test">
        <div className="UserMenu__container">
          <div className="UserMenu__container avatar">
            <Avatar
              user={user}
            />
          </div>

          <div className="UserMenu__container text">
            <span>{user.firstName} {user.lastName}</span>
          </div>

          <div className="UserMenu__container forward">
            <Forwards />
          </div>
        </div>

        <div className="UserMenu_dropdown__space">
        </div>
      <div className="UserMenu_dropdown__container">
        <div className="UserMenu_dropdown__container box">
          <div className="UserMenu_dropdown__name">{user.firstName}  {user.lastName}</div>
          <br />
          <div className="UserMenu_dropdown__list">
            <span>Update Profile</span>
            <span>My boards</span>
            <span>My pins</span>
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
