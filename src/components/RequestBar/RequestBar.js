import { useHistory } from "react-router-dom";
import { useContext } from "react";
import "./RequestBar.css";
import RequestBox from "../RequestBox/RequestBox";
import Avatar from "../Avatar/Avatar";
import { ReactComponent as Forwards } from "../../assets/Forward.svg";
import { UserContext } from "../../user-context";

const RequestBar = () => {
  const { user, logout } = useContext(UserContext);
  const history = useHistory();
  return (
    <>
      <div className="RequestBar_container">
        <div className="RequestBar_UserMenu__container">
          <div className="RequestBar_UserMenu__avatar">
            <Avatar />
          </div>
          {user && (
            <span>
              {user.name} {user.surname} <Forwards />
            </span>
          )}
          <div className="RequestBar_UserMenu__container_dropdown">
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

        <RequestBox />
      </div>
    </>
  );
};

export default RequestBar;
