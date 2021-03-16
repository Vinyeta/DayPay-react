import { useEffect, useState } from "react";
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg";
import { ReactComponent as Arrows } from "../../assets/Arrows.svg";
import Button from "../Button/Button";
import { useHistory } from 'react-router-dom';
import "./wallet.css";
import {
  incomeTransactions,
  outcomeTransactions,
  allTransactions,
  getBalance,
} from './walletHelper';
import Moment from 'moment';
import BalanceBox from '../BalanceBox/BalanceBox';



const Wallet = (wallet) => {

  const walletId = wallet.wallet;
  
  
  const [updateBalance, setUpdateBalance] = useState(false);
  
  const history = useHistory();

  const [balance, setBalance] = useState();

  const [transactions, setTransactions] = useState( );



  useEffect(() => {
    allTransactions(setTransactions, walletId);
    getBalance(setBalance, walletId);
    }, [updateBalance]);


  return (
    <div className="transactionsPage_container">
      <div className="transPage">
        <div className="upper">
          <div className="miniBox1">
          <BalanceBox wallet={walletId} update={updateBalance}/>
          </div>
          <div className="miniBox2">
            <Button buttonClass="defaultButton_featured" value="Add funds" 
            onClick={() => {
              history.push('/dashboard/funds');
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
              i.amount.receiver && console.log(i.amount.receiver);  
              return (
                <tr>
                  <td style={{
                    width: "3%",
                    "text-align": "left",
                    fill: i.amount[0] !== "-" ? "#20E9BC" : "#FF523D"
                  }}>
                    <Arrows></Arrows>
                  </td>
                  <td className="date__container">{Moment(i.date).format('DD/MM/YYYY')}</td>
                  <td className="description__container">{i.description}</td>
                  <td>
                  { i.amount[0] === '-' ?
                  i.receiver && i.receiver.author &&  <div className="nameTransaction">Sent to  {i.receiver.author.name}</div>
                  :
                  i.sender && i.sender.author && <div className="nameTransaction">Sent by {i.sender.author.name}</div>

                } 
                { i.stripeSender && <div className="nameTransaction">Added by card ending in {i.stripeSender}</div>

                }
                </td>             
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
