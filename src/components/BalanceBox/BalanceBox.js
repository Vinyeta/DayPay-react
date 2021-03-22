import { useState, useEffect, useContext } from "react";
import { ReactComponent as PositiveBalance } from "../../assets/PositiveBalance.svg";
import { ReactComponent as NegativeBalance } from "../../assets/NegativeBalance.svg";
import "./BalanceBox.css";
import { getBalance, weeklyIncrement } from "../Wallet/walletHelper";
import { UserContext } from "../../user-context";

const BalanceBox = () => {
  const { wallet, token } = useContext(UserContext);

  const [balance, setBalance] = useState();

  const [percentage, setPercentage] = useState("0");

  useEffect(() => {
    getBalance(setBalance, wallet, token);
    weeklyIncrement(setPercentage, wallet, token);
    // eslint-disable-next-line
  }, [wallet]);

  return (
    <div className="miniBoxBalance">
      {percentage && (
        <>
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
        </>
      )}
      <div className="balance">{balance}</div>
      <div className="balanceTitle">Balance</div>
    </div>
  );
};

export default BalanceBox;
