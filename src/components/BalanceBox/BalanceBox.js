import { ReactComponent as PositiveBalance } from "../../assets/PositiveBalance.svg"
import { ReactComponent as NegativeBalance } from "../../assets/NegativeBalance.svg";
import "./BalanceBox.css";
import {
    getBalance,
    weeklyIncrement
  } from '../Wallet/walletHelper';
import { useState, useEffect} from 'react';


const BalanceBox = ({wallet, update}) => {
    
  console.log(update + "BAL")
    const [balance, setBalance] = useState();

    const [percentage, setPercentage] = useState("0");

    useEffect(() => {

      if (wallet !== undefined) {
        getBalance(setBalance, wallet);
        weeklyIncrement(setPercentage, wallet);
      }
    }, [update]);

    
  console.log(JSON.stringify(balance))

return (<div className="miniBoxBalance">
          {(percentage === undefined || percentage === 0) && <> <div
                className="percentage"
                style={{
                  color: percentage > 0 ? "#20E9BC" : "#FF523D",
                  fill: percentage > 0 ? "#20E9BC" : "#FF523D",
                }}
              >
                {percentage > 0 ? <PositiveBalance /> : <NegativeBalance />}{" "}
                {percentage}%
              </div></>}
            <div className="balance">{balance}</div>
            <div className="balanceTitle">Balance</div>
</div>)
}

export default BalanceBox