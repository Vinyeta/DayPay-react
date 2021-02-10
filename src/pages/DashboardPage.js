import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import './DashboardPage.css';
import UserMenu from '../components/UserMenu/UserMenu';
import Sidebar from '../components/SideBar/Sidebar';
import Wallet from '../components/Wallet/Wallet';
import Send from '../components/Send/Send';

const DashboardPage = () => {
    const { path } = useRouteMatch();
    const user = {
        "id":"6021fc5a3edd692a8bb60ad4",
        "name": "pepe",
        "surname": "pepe",
        "email": "pepe@pepe.pepe",
        "avatar": "https://randomuser.me/api/portraits/men/81.jpg",
        "password": "pepe"
    };

    return (
        <>
            <div className="UserMenu_top_container">
                <UserMenu user={user} />
            </div>
            <div className="Dashboard_container">
                <Sidebar />
                <div className="Dashboard_Page_container">
                        <Switch>
                            <Route  path={`${path}/wallet`} >
                                <Wallet  />
                            </Route>
                            <Route path={`${path}/send`} >
                                <Send id={user.id} />
                            </Route>
                            <Route path={`${path}/accountsettings`} />
                            <Route path={`${path}/`} >
                            </Route>
                        </Switch>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;