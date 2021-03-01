import { ReactComponent as PositiveBalance } from "../../assets/PositiveBalance.svg"
import { ReactComponent as NegativeBalance } from "../../assets/NegativeBalance.svg";
import "./BalanceBox.css";
import {
    getBalance,
    weeklyIncrement
  } from '../Wallet/walletHelper';
import { useState, useEffect} from 'react';

const CENTS_CONVERTER = 100;


const BalanceBox = (walletId) => {
    
    const [balance, setBalance] = useState();

    const [percentage, setPercentage] = useState("0");

    useEffect(() => {
        getBalance(setBalance, walletId);
        weeklyIncrement(setPercentage, walletId);
        }, []);
    

return (<div className="miniBox1">
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
            <div className="balance">{`${balance / CENTS_CONVERTER}$`}</div>
            <div className="balanceTitle">Balance</div>
</div>)
}

export default BalanceBox