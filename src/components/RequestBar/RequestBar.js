import "./RequestBar.css";
import Avatar from '../Avatar/Avatar';
import RequestBox from '../RequestBox/RequestBox';




const RequestBar = ({user, token}) => {




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

           <RequestBox user={user} token={token}/>
            </div>
    </>
    )
}

export default RequestBar;