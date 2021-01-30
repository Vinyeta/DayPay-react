import Expand from "../../assets/Expand.png";
import DashboardIcon from "../../assets/Dashboard.svg";
import { ReactComponent as WalletIcon} from "../../assets/Wallet.svg";
import { ReactComponent as TradeIcon} from "../../assets/Trade.svg";
import { ReactComponent as AccountIcon} from "../../assets/Account.svg";
import "./SideMenu.css";




const SideMenu = () => {
    return (
        <div className="SideMenu_container">
            
            <table>
                <tr>
                    <th><img src={DashboardIcon}/></th>
                    <th style={{"padding-left": "27px"}}> Dashboard</th>
                </tr>
                <tr>
                    <th><WalletIcon /></th>
                <th style={{"padding-left": "27px"}}>Wallet</th>
                </tr>
                <tr>
                <th><TradeIcon /></th>
                <th style={{"padding-left": "27px"}}>Send</th>
                </tr>
                <tr>
                <th><AccountIcon /></th>
                <th style={{"padding-left": "27px"}}>Account Setting</th>
                </tr>
            </table>

        </div>)
}

export default SideMenu;
