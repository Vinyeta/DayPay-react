import Sidebar from '../SideBar/Sidebar';
import IntroducePage from '../introducePage/IntroducePage';
import "./Dashboard.css"
import UserMenu from '../UserMenu/UserMenu';
import TradePage from "../TradePage/TradePage"
import TransactionsPage from '../TransactionsPage/TransactionsPage';

const Dashboard = (user) => {
    
    
    return (
        <>
        <div className="UserMenu_top_container">
        <UserMenu user={user}/>
        </div>
        <div className="Dashboard_container">
        <Sidebar/>
        <div className="Dashboard_Page_container">
         {/* <IntroducePage/>  */}
        <TransactionsPage />
        {/* <TradePage></TradePage> */}
        </div>
        </div>
        </>
    )
}

export default Dashboard;