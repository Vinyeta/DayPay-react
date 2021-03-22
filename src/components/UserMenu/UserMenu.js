import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./UserMenu.css";
import Avatar from "../Avatar/Avatar";
import { ReactComponent as Forwards } from "../../assets/Forward.svg";
import { UserContext } from "../../user-context";

const UserMenu = () => {
  const { logout, user } = useContext(UserContext);
  const history = useHistory();

  return (
    <div className="test">
      <div className="UserMenu__container">
        <div className="UserMenu__container avatar">
          <Avatar />
        </div>
        {user && (
          <div className="UserMenu__container text">
            <span>
              {user.name} {user.surname}
            </span>
          </div>
        )}
        <div className="UserMenu__container forward">
          <Forwards />
        </div>
      </div>

      <div className="UserMenu_dropdown__space"></div>
      <div className="UserMenu_dropdown__container">
        <div className="UserMenu_dropdown__container box">
          <div className="UserMenu_dropdown__list">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                logout();
                history.replace("/login");
              }}
            >
              Log out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
