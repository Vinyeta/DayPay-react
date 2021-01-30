import Expand from "../../assets/Expand.png";
import { ReactComponent as DashboardIcon} from "../../assets/Dashboard.svg";
import { ReactComponent as WalletIcon} from "../../assets/Wallet.svg";
import { ReactComponent as TradeIcon} from "../../assets/Trade.svg";
import { ReactComponent as AccountIcon} from "../../assets/Account.svg";
import "./SideMenu.css";




const SideMenu = () => {
    return (
        <div className="SideMenu_container">
            
            <table>
                <tr>
                    <th><DashboardIcon/></th>
                    <th style={{"padding-left": "27px"}}><span>Dashboard</span></th>
                </tr>
                <tr>
                    <th><WalletIcon /></th>
                <th style={{"padding-left": "27px"}}><span>Wallet</span></th>
                </tr>
                <tr>
                <th><TradeIcon /></th>
                <th style={{"padding-left": "27px"}}><span>Send</span></th>
                </tr>
                <tr>
                <th><AccountIcon /></th>
                <th style={{"padding-left": "27px"}}><span>Account Setting</span></th>
                </tr>
            </table>

        </div>)
}

export default SideMenu;
