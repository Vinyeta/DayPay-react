
import "./Request.css"
import Button from '../Button/Button';
import { useState } from 'react';
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg"

const Request = () => {

  const WALLET_ID = "6021ff060e5bd82c2fccd226"

  const [email, setEmail] = useState();

  const [amount, setAmount] = useState();

  const [errorStyle, setErrorStyle] = useState({
    "email": 'errorInvisible',
    "amount": 'errorInvisible'
  });

  const [verification, setVerification] = useState("verificationInvisible");

  const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
  }

  const body = {
    sender: WALLET_ID,
    receiver: email,
    amount: amount * 100
  };

  const cleanForm = () => {
    setEmail("");
    setAmount("");
  };

  const cleanErrors = () => {
    setErrorStyle({
      "email": 'errorInvisible',
      "amount": 'errorInvisible'
    })
  };

  const handleSubmit = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    if (!validate(email) && (amount <= 0 || !amount)) {
      setErrorStyle({
        'email': 'errorVisible',
        'amount': 'errorVisible',
      })
    } else if (amount <= 0) {
      setErrorStyle({
        'email': 'errorInvisible',
        'amount': 'errorVisible',
      })
    } else if (!validate(email)) {
      setErrorStyle({
        'email': 'errorVisible',
        'amount': 'errorInvisible',
      })
    } else {
      fetch(`http://localhost:5000/api/requestMoney/`, options).then((response) => {
        console.log(response.status)
        cleanErrors();
        setVerification("verificationVisible")
    }
      ).catch(error => {
        console.log(error);
      });
    }

    cleanForm();
  };

  console.log(email);
  console.log(amount);

  return (
    <div className="tradePage_container">
      <div className="box">
        <div className="boxShapeTop"><DotPattern></DotPattern></div>
        <div className="boxShapeBottom"><DotPattern></DotPattern></div>

        <span> Request money from another user</span>
        <form className="tradeForm">
          <input className="input__container" placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => { setEmail(e.target.value); console.log(email) }}
          />
          <span className={errorStyle.email}>Invalid email</span>
          <input className="input__container" placeholder="Amount"
            type="number"
            name="amount"
            onChange={(e) => { setAmount(e.target.value); console.log(amount) }}
          />
          <span className={errorStyle.amount}>Introduce a number greater than 0</span>
          <Button
            style="defaultButton_featured"
            value="Request funds"
            onClick={() => handleSubmit(WALLET_ID)} />
          <span className={verification}>Request Sent</span>
        </form>
      </div>
    </div>
  )
}

export default Request;