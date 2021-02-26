import { useEffect, useState } from "react";
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg";
import { ReactComponent as Arrows } from "../../assets/Arrows.svg";
import { ReactComponent as PositiveBalance } from "../../assets/PositiveBalance.svg";
import { ReactComponent as NegativeBalance } from "../../assets/NegativeBalance.svg";
import Button from "../Button/Button";
import "./wallet.css";
import {
  incomeTransactions,
  outcomeTransactions,
  allTransactions,
  getBalance,
  addFunds,
  weeklyIncrement
} from './walletHelper';
import Moment from 'moment';



const Wallet = (wallet) => {

  const walletId = wallet.wallet




  const [transactions, setTransactions] = useState("");

  const [balance, setBalance] = useState("");

  const [percentage, setPercentage] = useState("");

  useEffect(() => {
    getBalance(setBalance, walletId);
    allTransactions(setTransactions, walletId);
    weeklyIncrement(setPercentage, walletId);
    }, []);


  return (
    <div className="transactionsPage_container">
      <div className="transPage">
        <div className="upper">
          <div className="miniBox1">
            <div className="percentage" style={{
              color: percentage > 0 ? "#20E9BC" : "#FF523D",
              fill: percentage > 0 ? "#20E9BC" : "#FF523D",
            }}>
              {percentage > 0 ? <PositiveBalance /> : <NegativeBalance />}  {percentage}%
            </div>
            <div className="balance">{`${balance}`}</div>
            <div className="balanceTitle">Balance</div>
          </div>
          <div className="miniBox2">
            <Button buttonClass="defaultButton_featured" value="Add funds" 
            onClick={() => {
              addFunds(walletId, balance); 
              getBalance(setBalance, walletId);
            }} ></Button>
          </div>
        </div>
        <div className="Box3">
          <div className="transTitle">
            <div>
              <span>Recent transactions</span>
            </div>
            <div className="filters">
              <div></div>
              <div>
                <span onClick={() =>{ allTransactions(setTransactions, walletId);}}>All</span>
              </div>
              <div style={{ cursor: "pointer" }} onClick={ () => incomeTransactions(setTransactions, walletId)}>
                <span>Income</span>
              </div>
              <div>
                <span onClick={() => outcomeTransactions(setTransactions, walletId)}>Outcome</span>
              </div>
            </div>{" "}
          </div>

          <table className="txTable">

            {transactions && transactions.map((i) => {

              return (
                <tr>
                  <td style={{
                    width: "3%",
                    "text-align": "left",
                    fill: i.amount[0] !== "-" ? "#20E9BC" : "#FF523D"
                  }}>
                    <Arrows></Arrows>
                  </td>
                  <td style={{ width: "40%" }}>{Moment(i.date).format('DD/MM/YYYY')}</td>
                  <td style={{ width: "30%", "text-align": "left" }}>{i.description}</td>
                  <td style={{ width: "65px", height: "16px" }}>
                    <div  
                      style={{
                        "background-color": i.amount[0] !== "-" ? "rgba(32, 233, 188, 0.15)" : "rgba(255, 55, 79, 0.15)",
                        "color": i.amount[0] !== "-" ? "#20E9BC" : "#FF374F",
                        "border-radius": "2px",
                        "padding-left": "6px",
                        "padding-right": "6px",
                        "font-size": "9px",
                      }}
                    >
                      {i.amount[0] !== "-" ? "INCOME" : "OUTCOME"}
                    </div>
                  </td>
                  <td style={{ "color": i.amount[0] !== "-" ? "#979797" : "#FF374F", width: "20%", textAlign: "right" }}>{i.amount[0] !== "-" ? `${i.amount}` : i.amount}</td>
                </tr>)
            }

            )}

          </table>
          <div className="moreTransactions">See all transactions</div>
        </div>

        <div className="boxShapeTopPage">
          <DotPattern></DotPattern>
        </div>
        <div className="boxShapeBottomPage">
          <DotPattern></DotPattern>
        </div>
      </div>
    </div>
  );
};

export default Wallet;