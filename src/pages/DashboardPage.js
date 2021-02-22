import {
    Switch,
    Route,
    useRouteMatch,
    useHistory
} from 'react-router-dom';
import './DashboardPage.css';
import UserMenu from '../components/UserMenu/UserMenu';
import Sidebar from '../components/SideBar/Sidebar';
import Wallet from '../components/Wallet/Wallet';
import Send from '../components/Send/Send';
import jwt from "jsonwebtoken";
import { useState, useEffect} from 'react';


const DashboardPage = () => {

    const history = useHistory();

    const [user, setUserData] = useState();

    const [wallet, setWallet] = useState();

    
    useEffect(() => {
        
        const token = jwt.decode(localStorage.getItem("token"));
        
        if (!token) {
            history.replace("/login")
        } else {
            
            fetch(`http://localhost:5000/api/users/${token._id}`)
                  .then((response) => response.json())
                  .then((json) => setUserData(json));
            
            fetch(`http://localhost:5000/api/wallet/${token._id}/author`)
                  .then((response) => response.json())
                  .then((json) => {setWallet(json._id); console.log(json)});    
        }
        
      }, []);

      console.log(wallet)
    


    
    const { path } = useRouteMatch();

    return (
        <>
         <div className="UserMenu_top_container">
                {user && <UserMenu user={user} />}
            </div>
            <div className="Dashboard_container">
                <Sidebar />
                <div className="Dashboard_Page_container">
                        <Switch>
                            <Route  path={`${path}/wallet`} >
                                {wallet && <Wallet wallet={wallet}/>}
                            </Route>
                            <Route path={`${path}/send`} >
                                {wallet && <Send wallet={wallet} />}
                            </Route>
                            <Route path={`${path}/accountsettings`} />
                            <Route path={`${path}/`} >
                            </Route>
                        </Switch>
                        {/* <Sidebar /> */}

                </div>
        </div> 
        </>
    )
    
}

export default DashboardPage;