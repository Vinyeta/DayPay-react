import "./RequestBar.css";
import RequestBox from "../RequestBox/RequestBox";
import Avatar from "../Avatar/Avatar";
import { useHistory } from 'react-router-dom';
import { ReactComponent as Forwards } from "../../assets/Forward.svg";

const RequestBar = ({ user, token }) => {
  const history = useHistory();
  return (
    <>
      <div className="RequestBar_container">

          <div className="RequestBar_UserMenu__avatar">
            <Avatar user={user} />
          </div>
          <span>
            {user.name} {user.surname} <Forwards />
          </span>
          <div className="RequestBar_UserMenu__container_dropdown">  
          <div className="UserMenu_dropdown__list">         
           <div style={{cursor: "pointer"}} onClick={() => {localStorage.removeItem("token"); history.replace("/login")} }>Log out</div>
</div>
</div>

        </div>

        <RequestBox user={user} token={token} />
      </div>
    </>
  );
};

export default RequestBar;
