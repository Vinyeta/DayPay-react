import { useEffect, useState, useContext } from "react";
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg";
import { ReactComponent as Arrows } from "../../assets/Arrows.svg";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import "./wallet.css";
import {
  incomeTransactions,
  outcomeTransactions,
  allTransactions,
} from "./walletHelper";
import Moment from "moment";
import BalanceBox from "../BalanceBox/BalanceBox";
import { UserContext } from "../../user-context";

const Wallet = () => {
  const { wallet, token } = useContext(UserContext);

  const history = useHistory();

  const [transactions, setTransactions] = useState();

  useEffect(() => {
    if (wallet) {
      allTransactions(setTransactions, wallet, token);
    }
    // eslint-disable-next-line
  }, [wallet]);

  return (
    <div className="transactionsPage_container">
      <div className="transPage">
        <div className="upper">
          <div className="miniBox1">{wallet && <BalanceBox />}</div>
          <div className="miniBox2">
            <Button
              buttonClass="defaultButton_featured"
              value="Add funds"
              onClick={() => {
                history.push("/dashboard/funds");
              }}
            ></Button>
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
                <span
                  onClick={() => {
                    allTransactions(setTransactions, wallet, token);
                  }}
                >
                  All
                </span>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  incomeTransactions(setTransactions, wallet, token)
                }
              >
                <span>Income</span>
              </div>
              <div>
                <span
                  onClick={() =>
                    outcomeTransactions(setTransactions, wallet, token)
                  }
                >
                  Outcome
                </span>
              </div>
            </div>{" "}
          </div>

          <table className="txTable">
            {transactions &&
              transactions.map((i) => {
                return (
                  <tr>
                    <td
                      style={{
                        width: "3%",
                        "text-align": "left",
                        fill: i.amount[0] !== "-" ? "#20E9BC" : "#FF523D",
                      }}
                    >
                      <Arrows></Arrows>
                    </td>
                    <td className="date__container">
                      {Moment(i.date).format("DD/MM/YYYY")}
                    </td>
                    <td className="description__container">{i.concept}</td>
                    <td>
                      {i.amount[0] === "-"
                        ? i.receiver &&
                          i.receiver.author && (
                            <div className="nameTransaction">
                              Sent to {i.receiver.author.name}
                            </div>
                          )
                        : i.sender &&
                          i.sender.author && (
                            <div className="nameTransaction">
                              Sent by {i.sender.author.name}
                            </div>
                          )}
                      {i.stripeSender && (
                        <div className="nameTransaction">
                          Added by card ending in {i.stripeSender}
                        </div>
                      )}
                    </td>
                    <td style={{ width: "65px", height: "16px" }}>
                      <div
                        style={{
                          "background-color":
                            i.amount[0] !== "-"
                              ? "rgba(32, 233, 188, 0.15)"
                              : "rgba(255, 55, 79, 0.15)",
                          color: i.amount[0] !== "-" ? "#20E9BC" : "#FF374F",
                          "border-radius": "2px",
                          "padding-left": "6px",
                          "padding-right": "6px",
                          "font-size": "9px",
                        }}
                      >
                        {i.amount[0] !== "-" ? "INCOME" : "OUTCOME"}
                      </div>
                    </td>
                    <td
                      style={{
                        color: i.amount[0] !== "-" ? "#979797" : "#FF374F",
                        width: "20%",
                        textAlign: "right",
                      }}
                    >
                      {i.amount[0] !== "-" ? `${i.amount}` : i.amount}
                    </td>
                  </tr>
                );
              })}
          </table>
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
