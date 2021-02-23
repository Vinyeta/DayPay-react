
import { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import "./DashboardPage.css";
import UserMenu from "../components/UserMenu/UserMenu";
import Sidebar from "../components/SideBar/Sidebar";
import Wallet from "../components/Wallet/Wallet";
import { ReactComponent as PositiveBalance } from "../assets/PositiveBalance.svg";
import { ReactComponent as NegativeBalance } from "../assets/NegativeBalance.svg";
import Send from "../components/Send/Send";
import RequestBar from '../components/RequestsBar/RequestBar';
import Expand from "../assets/Expand.png";
import Request from '../components/Request/Request';
import { getBalance, weeklyIncrement } from "../components/Wallet/walletHelper";

const CENTS_CONVERTER = 100;

const DashboardPage = () => {
  
    const history = useHistory();

  const [user, setUserData] = useState();

  const [wallet, setWallet] = useState();

  const [balance, setBalance] = useState();

  const [percentage, setPercentage] = useState("-23");

  const [SideBarStatus, setSideBarStatus] = useState(true);

  useEffect(() => {
    const token = jwt.decode(localStorage.getItem("token"));

    const token2 = localStorage.getItem("token");

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

  useEffect(() => {

    if (wallet !== undefined) {
      getBalance(setBalance, wallet);
      weeklyIncrement(setPercentage, wallet);
    }
  }, [wallet]);

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
      {notDashboard && (
        <div className="UserMenu_top_container">
          <UserMenu
            user={user}
          />
        </div>
      )}

      <div className="Dashboard_container">
        <div className="Dashboard_SideBar_container">
          <Sidebar SideBarStatus={SideBarStatus} />
        </div>

        {SideBarStatus && (
          <div
            className="SideBar_expandButton_container"
            onClick={() => setSideBarStatus(!SideBarStatus)}
          >
            <img src={Expand} alt="Expand Button" />{" "}
          </div>
        )}

        {!SideBarStatus && (
          <div
            className="Page_expandButton_container"
            onClick={() => setSideBarStatus(!SideBarStatus)}
          >
            <img src={Expand} alt="Expand Button" />
          </div>
        )}

        <div className={styleClass}>
          {!notDashboard && wallet && (
            <div className="overview_container"> 
            <h1>Overview</h1>
            <span>Hi Maria, get your summary of your transacrtions and requests here</span><div className="miniBox1Dashboard">
              
              <div
                className="percentage"
                style={{
                  color: percentage > 0 ? "#20E9BC" : "#FF523D",
                  fill: percentage > 0 ? "#20E9BC" : "#FF523D",
                }}
              >
                {percentage > 0 ? <PositiveBalance /> : <NegativeBalance />}{" "}
                {percentage}%
              </div>
              <div className="balance">{`${balance / CENTS_CONVERTER}$`}</div>
              <div className="balanceTitle">Balance</div>
            </div></div>
          )}
          <Switch>
            <Route path={`${path}/wallet`}>
              {wallet && <Wallet wallet={wallet} />}
            </Route>
            <Route path={`${path}/send`}>
              {wallet && <Send wallet={wallet} />}
            </Route>
            <Route path={`${path}/request`}>
              {user && <Request id={user.id} />}
            </Route>
            <Route path={`${path}/accountsettings`} />
            <Route path={`${path}/`}></Route>
          </Switch>
        </div>
        {!notDashboard && (
          <div className="Dashboard_Requests_container">
            <RequestBar />
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
