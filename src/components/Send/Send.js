import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Send.css";
import Button from "../Button/Button";
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg";
import { validateEmail } from "../../Utils/validations";
import { API_ROOT } from "../../hostSettings";
import { UserContext } from "../../user-context";

const Send = () => {
  const { user, wallet, token } = useContext(UserContext);

  const history = useHistory();

  const [email, setEmail] = useState();

  const [amount, setAmount] = useState();

  const [sameEmail, setSameEmail] = useState("errorInvisible");

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

  const handleSubmit = (id) => {
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
    } else if (amount <= 0) {
      setErrorStyle({
        email: "errorInvisible",
        amount: "errorVisible",
      });
    } else if (!validateEmail(email)) {
      setErrorStyle({
        email: "errorVisible",
        amount: "errorInvisible",
      });
    } else if (user.email === email) {
      //hay que crear aqui un else if que nos agarre el
      setSameEmail("errorVisible");
    } else {
      fetch(`${API_ROOT}api/queue/msg`, options).then(
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

            <span> Send money to another user</span>
            <form className="tradeForm">
              <input
                className="input__container"
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <span className={errorStyle.email}>Invalid email</span>

              <input
                className="input__container"
                placeholder="Amount"
                type="number"
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className={errorStyle.amount}>
                Introduce a number greater than 0
              </span>
              <span className={sameEmail}>Can't send money to yourself</span>
              <Button
                buttonClass="defaultButton_featured"
                value="Transfer funds"
                onClick={() => handleSubmit()}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Send;
