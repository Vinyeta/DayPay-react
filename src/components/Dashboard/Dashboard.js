import Sidebar from '../SideBar/Sidebar';
import IntroducePage from '../introducePage/IntroducePage';
import "./Dashboard.css"
import UserMenu from '../UserMenu/UserMenu';

const Dashboard = () => {
    return (
        <>
        <div className="UserMenu_top_container">
        <UserMenu user={{
            "id": 0,
            "firstName": "Heinz",
            "lastName": "Georg Fiedler",
            "email": "heinz-georg.fiedler@example.com",
            "avatar": "https://randomuser.me/api/portraits/men/81.jpg",
            "password": "0F8JIqi4zwvb77FGz6Wt",
            "following": []
        }}/>
        </div>
        <div className="Dashboard_container">
        <Sidebar/>
        <IntroducePage/>
        </div>
        </>
    )
}

export default Dashboard;