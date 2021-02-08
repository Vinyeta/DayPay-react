import "./TransactionsPage.css";
import Button from "../Button/Button";
import { useState } from "react";
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg";
import { ReactComponent as Arrows } from "../../assets/Arrows.svg";
import { ReactComponent as PositiveBalance } from "../../assets/PositiveBalance.svg";
import { ReactComponent as NegativeBalance } from "../../assets/NegativeBalance.svg";

const incomeTransactions = (setTransactions) => {
  
  fetch("http://localhost:3001/")
  .then((response) => response.json())
  .then((json) => setTransactions(json));

}

const outcomeTransactions = (setTransactions) => {
  
  fetch("http://localhost:3001/")
  .then((response) => response.json())
  .then((json) => setTransactions(json));

}

const allTransactions = (setTransactions) => {
  
  fetch("http://localhost:3001/")
  .then((response) => response.json())
  .then((json) => setTransactions(json));

}

const sendMoney = (setTransactions) => {
  
  fetch("http://localhost:3001/")
  .then((response) => response.json())
  .then((json) => setTransactions(json));

}

const getBalance = (setBalance) => {
  
  fetch("http://localhost:3001/")
  .then((response) => response.json())
  .then((json) => setBalance(json));

}

const addFunds = (walletId) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({

      amount:10000,
      walletId: ""  

    }), 
  };

  {/* TODO: Complete request for addfunds*/}

  fetch("http://localhost:3001/", options).then((response) =>
    console.log(response.status)
  );
};



const TransactionsPage = () => {
  
  const [transactions, setTransactions] = useState([
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: -1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: 1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: -1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: 1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: -1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: -1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: 1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: -1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: -1243,
    },
    {
      date: "24/04/2020",
      description: "Joe Doe",
      amount: -1243,
    },
  ]);

  const [balance, setBalance] = useState(26989);

  const [percentage, setPercentage] = useState("-23");



  return (
    <div className="transactionsPage_container">
      <div className="transPage">
        <div className="upper">
          <div className="miniBox1">
            <div className="percentage" style={{
              color: percentage > 0 ? "#20E9BC" : "#FF523D", 
              fill: percentage > 0 ?  "#20E9BC" : "#FF523D"  ,
            }}>
              {percentage > 0 ? <PositiveBalance/> : <NegativeBalance/>}  {percentage}% {/* TODO: Negative balance SVG*/}
            </div>
            <div className="balance">{`${balance / 100}$`}</div>
            <div className="balanceTitle">Balance</div>
          </div>
          <div className="miniBox2">
            <Button style="defaultButton_featured" value="Add funds" onClick={() => {addFunds({/* TODO: pass Wallet ID through LocalStorage*/}); setBalance(setBalance)}  }></Button>
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
                <span onClick={allTransactions(setTransactions)}>All</span>
              </div>
              <div style={{cursor:"pointer"}} onClick={
                  incomeTransactions(setTransactions)}>
                <span>Income</span>
              </div>
              <div>
                <span onClick={outcomeTransactions(setTransactions)}>Outcome</span>
              </div>
            </div>{" "}
          </div>

          <table className="txTable">
            
            {transactions.map((i) => {

              return (
              <tr>
              <td style={{ 
                width: "3%", 
                  "text-align": "left", 
                  fill: i.amount > 0 ? "#20E9BC" : "#FF523D"
            }}>
                <Arrows></Arrows>
              </td>
              <td style={{ width: "20%" }}>{i.date}</td>
              <td style={{ width: "50%", "text-align": "left" }}>{i.description}</td>
              <td style={{ width: "65px", height: "16px" }}>
                <div
                  style={{
                    "background-color": i.amount > 0 ? "rgba(32, 233, 188, 0.15)" : "rgba(255, 55, 79, 0.15)",
                    "color": i.amount > 0 ? "#20E9BC" : "#FF374F",
                    "border-radius": "2px",
                    "padding-left": "6px",
                    "padding-right": "6px",
                    "font-size": "9px",
                  }}
                >
                  {i.amount > 0 ? "INCOME" : "OUTCOME"}
                </div>
              </td>
              <td style={{ "color": i.amount > 0 ? "#979797" : "#FF374F", width: "20%", textAlign: "right" }}>{i.amount > 0 ? `+${i.amount/100}` :  i.amount / 100} USD</td>
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

export default TransactionsPage;
