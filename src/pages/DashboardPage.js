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
import BalanceBox from "../components/BalanceBox/BalanceBox";
import Funds from "../components/Funds/Funds";

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
          <UserMenu user={user} />
        </div>
      )}
      <div className="Dashboard_container">
        {SideBarStatus && (
          <div className="Dashboard_SideBar_container">
            <Sidebar />
            {SideBarStatus && user && (
              <div
                className="SideBar_expandButton_container"
                onClick={() => setSideBarStatus(false)}
              >
                <img src={Expand} alt="Expand Button" />{" "}
              </div>
            )}

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

        <Switch>
          <Route path={`${path}/wallet`}>
            <div className={styleClass}>
              {wallet && <Wallet wallet={wallet} />}
            </div>
          </Route>
          <Route path={`${path}/send`}>
            <div className={styleClass}>
              {wallet && <Send wallet={wallet} token={token2} />}
            </div>
          </Route>
          <Route path={`${path}/request`}>
            <div className={styleClass}>
              {user && <Request wallet={wallet} token={token2} />}
            </div>
          </Route>
          <Route path={`${path}/accountsettings`}>
            <div className={styleClass}>
              {user && <AccountSettings user={user} token={token2} />}
            </div>
          </Route>

          <Route path={`${path}/funds`}>
            <div className={styleClass}>
              {user && <Funds wallet={wallet} token={token2} />}
            </div>
          </Route>

          <Route path={`${path}/`}>
            <div className={styleClass}>
              {wallet && user && (
                <div className="overview_container">
                  <h1>Overview</h1>
                  <span>
                    Hi {user.name}, get your summary of your transacrtions and
                    requests here
                  </span>
                  <div className="balanceBoxDashboard">
                    <BalanceBox wallet={wallet} />
                  </div>
                </div>
              )}
            </div>

            {user && (
              <div className="Dashboard_Requests_container">
                <RequestBar user={user} token={token2} />
              </div>
            )}
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default DashboardPage;
