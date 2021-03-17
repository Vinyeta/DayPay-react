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

      fetch(`http://localhost:5000/api/users/${token._id}`, options)
        .then((response) => response.json())
        .then((json) => setUserData(json));

      fetch(`http://localhost:5000/api/wallet/${token._id}/author`, options)
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
          <UserMenu />
        </div>
      )}
      <div className="Dashboard_container">
        {SideBarStatus && (<div className="Dashboard_SideBar_container">
          <Sidebar /></div>)}


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
          <Switch>


            <Route path={`${path}/wallet`}>
              {wallet && <Wallet />}
            </Route>
            <Route path={`${path}/send`}>
              {wallet && <Send />}
            </Route>
            <Route path={`${path}/request`}>
              {user && <Request />}
            </Route>
            <Route path={`${path}/accountsettings`}>
              {user && <AccountSettings />}
            </Route>

            <Route path={`${path}/funds`}>
              {user && <Funds />}
            </Route>

            <Route path={`${path}/`}>

              <div className="overview_container">
                <h1>Overview</h1>
                {user &&
                  <>
                    <span>
                      Hi {user.name}, get your summary of your transacrtions and
                  requests here
              </span>

                    <div className="balanceBoxDashboard"><BalanceBox /></div>
                    <div className="Dashboard_Requests_container">
                      <RequestBar />
                    </div>
                  </>
                }
              </div>

            </Route>
          </Switch>
        </div>
      </div>

    </>
  );
};

export default DashboardPage;