import { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import "./DashboardPage.css";
import UserMenu from "../components/UserMenu/UserMenu";
import Sidebar from "../components/SideBar/Sidebar";
import Wallet from "../components/Wallet/Wallet";
import Send from "../components/Send/Send";
import RequestBar from "../components/RequestBar/RequestBar";
import Expand from "../assets/Expand.png";
import Request from "../components/Request/Request";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import BalanceBox from '../components/BalanceBox/BalanceBox';
import Funds from '../components/Funds/Funds';
import { API_ROOT } from '../hostSettings';


const DashboardPage = () => {
  
  const history = useHistory();

  const [user, setUserData] = useState();

  const [wallet, setWallet] = useState();

  const [SideBarStatus, setSideBarStatus] = useState(true);



  const token = jwt.decode(localStorage.getItem("token"));

  const token2 = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      history.replace("/login");
    } else {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token2,
        },
      };

      fetch(`${API_ROOT}/api/users/${token._id}`, options)
        .then((response) => response.json())
        .then((json) => setUserData(json));

      fetch(`${API_ROOT}/api/wallet/${token._id}/author`, options)
        .then((response) => response.json())
        .then((json) => {
          setWallet(json._id);
        });
    }
  }, []);



  const notDashboard = history.location.pathname !== "/dashboard";

  var styleClass = "";

  if (!notDashboard && SideBarStatus) {
    styleClass = "Dashboard_Page_container";
  }
  if (notDashboard && SideBarStatus) {
    styleClass = "Dashboard_Page_container expand";
  }

  if (notDashboard && !SideBarStatus) {
    styleClass = "Dashboard_Page_container expand2";
  }

  if (!notDashboard && !SideBarStatus) {
    styleClass = "Dashboard_Page_container expand3";
  }


  const { path } = useRouteMatch();

  return (
    <>
      {notDashboard && user && (
        <div className="UserMenu_top_container">
          <UserMenu user={user} />
        </div>
      )}
      <div className="Dashboard_container">
        { SideBarStatus && (<div className="Dashboard_SideBar_container">
          <Sidebar /></div> )}
        

        {SideBarStatus && user && (
          <div
            className="SideBar_expandButton_container"
            onClick={() => setSideBarStatus(false)}
          >
            <img src={Expand} alt="Expand Button" />{" "}
          </div>
        )}

        {!SideBarStatus && user && (
          <div
            className="Page_expandButton_container"
            onClick={() => setSideBarStatus(true)}
          >
            <img src={Expand} alt="Expand Button" />
          </div>
        )}
        <div className={styleClass}>
          {!notDashboard && wallet && user && (
            <div className="overview_container">
              <h1>Overview</h1>
              <span>
                Hi {user.name}, get your summary of your transacrtions and
                requests here
              </span>
              <div className="balanceBoxDashboard"><BalanceBox wallet={wallet} /></div>
            </div>
          )}

          <Switch>


            <Route path={`${path}/wallet`}>
              {wallet && <Wallet wallet={wallet} />}
            </Route>
            <Route path={`${path}/send`}>
              {wallet && <Send wallet={wallet} token={token2} />}
            </Route>
            <Route path={`${path}/request`}>
              {user && <Request wallet={wallet} token={token2} />}
            </Route>
            <Route path={`${path}/accountsettings`}>
              {user && <AccountSettings user={user} token={token2} />}
            </Route>

            <Route path={`${path}/funds`}>
              {user && <Funds wallet={wallet} token={token2} />}
            </Route>

            <Route path={`${path}/`}>



            </Route>
          </Switch>
        </div>
        {!notDashboard && user && (
          <div className="Dashboard_Requests_container">
            <RequestBar user={user} token={token2} />
          </div>
        )}
      </div>
      
    </>
  );
};

export default DashboardPage;
