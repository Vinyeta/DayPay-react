import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Request.css";
import "../Send/Send.css";
import Button from "../Button/Button";
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg";
import { validateEmail } from "../../Utils/validations";
import { API_ROOT } from "../../hostSettings";
import { UserContext } from "../../user-context";

const Request = () => {
  const [sameAuth, setSameAuth] = useState("errorInvisible");

  const { user, wallet, token } = useContext(UserContext);
  const history = useHistory();

  const [email, setEmail] = useState();

  const [amount, setAmount] = useState();

  const [errorStyle, setErrorStyle] = useState({
    email: "errorInvisible",
    amount: "errorInvisible",
  });

  const body = {
    sender: wallet,
    receiver: email,
    amount: amount,
  };

  const cleanForm = () => {
    setEmail("");
    setAmount("");
  };


  const handleSubmit = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    };

    if (!validateEmail(email) && (amount <= 0 || !amount)) {
      setErrorStyle({
        email: "errorVisible",
        amount: "errorVisible",
      });
    } else if (amount <= 0 || !amount) {
      setErrorStyle({
        email: "errorInvisible",
        amount: "errorVisible",
      });
    } else if (user.email === email) {
      setSameAuth("errorVisible");
    } else if (!validateEmail(email)) {
      setErrorStyle({
        email: "errorVisible",
        amount: "errorInvisible",
      });
    } else {
      fetch(`${API_ROOT}api/requestMoney/`, options).then(
        history.replace("/dashboard")
      );
    }

    cleanForm();
  };

  return (
    <>
      {user && (
        <div className="tradePage_container">
          <div className="box">
            <div className="boxShapeTop">
              <DotPattern></DotPattern>
            </div>
            <div className="boxShapeBottom">
              <DotPattern></DotPattern>
            </div>

            <span> Request money from another user</span>
            <form className="tradeForm">
              <input
                required
                className="input__container"
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className={errorStyle.email}>Invalid email</span>
              <input
                required
                className="input__container"
                placeholder="Amount"
                type="number"
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="invalid_request">
                <span className={sameAuth}>
                  Can't request money to yourself
                </span>
              </div>
              <div className="invalid_amount">
                <span className={errorStyle.amount}>
                  Introduce a number greater than 0
                </span>
              </div>

              <Button
                buttonClass="defaultButton_featured"
                value="Request funds"
                onClick={() => handleSubmit()}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Request;
