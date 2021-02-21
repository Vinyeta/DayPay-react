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
import { ReactComponent as PositiveBalance } from "../assets/PositiveBalance.svg";
import { ReactComponent as NegativeBalance } from "../assets/NegativeBalance.svg";
import Send from '../components/Send/Send';
import jwt from "jsonwebtoken";
import { useState, useEffect} from 'react';
import mongoose from "mongoose";
import RequestBar from '../components/RequestsBar/RequestBar';


const CENTS_CONVERTER = 100;



const DashboardPage = () => {

    const history = useHistory();

    const [user, setUserData] = useState();

    const [wallet, setWallet] = useState();
    
    const [balance, setBalance] = useState();

    const [percentage, setPercentage] = useState("-23");



    
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

    


    
    const { path } = useRouteMatch();

    return (
        <>
         {/* <div className="UserMenu_top_container">
         <RequestBar />  
            </div> */}

            <div className="Dashboard_container">
            
                <div className="Dashboard_SideBar_container">
                    <Sidebar />
                </div>
                <div className="Dashboard_Page_container">
                    
                            {/* <div className="miniBox1Dashboard">
                        <div className="percentage" style={{
                        color: percentage > 0 ? "#20E9BC" : "#FF523D",
                        fill: percentage > 0 ? "#20E9BC" : "#FF523D",
                        }}>
                        {percentage > 0 ? <PositiveBalance /> : <NegativeBalance />}  {percentage}% 
                        </div>
                        <div className="balance">{`${balance / CENTS_CONVERTER}$`}</div>
                        <div className="balanceTitle">Balance</div>
                    </div> */}
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
                </div>
            <div className="Dashboard_Requests_container">
                <RequestBar /> 
            </div>
        </div> 
        </>
    )
    
}

export default DashboardPage;