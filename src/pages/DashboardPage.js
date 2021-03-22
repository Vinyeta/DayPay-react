import { useState, useEffect, useContext } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
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
import { UserContext } from "../user-context";
import MoneyChart from "../components/MoneyChart/MoneyChart";
import TransactionChart from "../components/TransactionChart/TransactionChart";

const DashboardPage = () => {
  const history = useHistory();

  const [SideBarStatus, setSideBarStatus] = useState(true);

  const { user, token, wallet } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      history.replace("/login");
    }
    // eslint-disable-next-line
  },[]);

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
              <Wallet />
            </div>
          </Route>
          <Route path={`${path}/send`}>
            <div className={styleClass}>{wallet && <Send />}</div>
          </Route>
          <Route path={`${path}/request`}>
            <div className={styleClass}>{user && <Request />}</div>
          </Route>
          <Route path={`${path}/accountsettings`}>
            <div className={styleClass}>{user && <AccountSettings />}</div>
          </Route>

          <Route path={`${path}/funds`}>
            <div className={styleClass}>{user && <Funds />}</div>
          </Route>

          <Route path={`${path}/`}>
            <div className={styleClass}>
              {wallet && user && (
                <div className="overview_container">
                  <h1>Overview</h1>
                  <span>
                    Hi {user.name}, get your summary of your transactions and
                    requests here
                  </span>
                  <div className="balanceBoxDashboard">
                    <BalanceBox />
                  </div>
                  <div className="charts">
                    <MoneyChart />
                    <TransactionChart />
                  </div>
                </div>
              )}
            </div>

            {user && (
              <div className="Dashboard_Requests_container">
                <RequestBar />
              </div>
            )}
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default DashboardPage;
