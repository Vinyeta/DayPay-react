import { ReactComponent as DashboardIcon } from "../../assets/Dashboard.svg";
import { ReactComponent as WalletIcon } from "../../assets/Wallet.svg";
import { ReactComponent as TradeIcon } from "../../assets/Trade.svg";
import { ReactComponent as AccountIcon } from "../../assets/Account.svg";
import { Link, useRouteMatch } from "react-router-dom";

import "./SideMenu.css";




const SideMenu = () => {
    const { url } = useRouteMatch();
    return (
        <div className="SideMenu_container" style={{ color: "#1D293F" }}>

            <table>
                <tr>
                    <Link to={`${url}`} style={{ textDecoration: 'none', color: 'black' }}>

                        <th>
                            <DashboardIcon />
                        </th>
                        <th style={{ "padding-left": "27px" }}>
                            <span>Dashboard</span>
                        </th>
                    </Link>

                </tr>
                <tr>
                    <Link to={`${url}/wallet`} style={{ textDecoration: 'none', color: 'black' }}>

                        <th>
                            <WalletIcon />
                        </th>
                        <th style={{ "padding-left": "27px" }}>
                            <span>Wallet</span>
                        </th>
                    </Link>

                </tr>
                <tr>
                    <Link to={`${url}/send`} style={{ textDecoration: 'none', color: 'black' }}>

                        <th>
                            <TradeIcon />
                        </th>
                        <th style={{ "padding-left": "27px" }}>
                            <span>Send</span>
                        </th>
                    </Link>
                </tr>

                <tr>
                    <Link to={`${url}/request`} style={{ textDecoration: 'none', color: 'black' }}>

                        <th>
                            <TradeIcon />
                        </th>
                        <th style={{ "padding-left": "27px" }}>
                            <span>Request</span>
                        </th>
                    </Link>
                </tr>
                <tr>
                    <Link to={`${url}/accountsettings`} style={{ textDecoration: 'none', color: 'black' }}>

                        <th>
                            <AccountIcon />
                        </th>
                        <th style={{ "padding-left": "27px" }}>
                            <span>Account Settings</span>
                        </th>
                    </Link>
                </tr>
            </table>

        </div >)
}

export default SideMenu;