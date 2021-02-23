
import "./Request.css"
import Button from '../Button/Button';
import { useState } from 'react';
import { ReactComponent as DotPattern } from "../../assets/Pattern.svg"

const Request = ({wallet, token}) => {

  const WALLET_ID = wallet;

  const [email, setEmail] = useState();

  const [amount, setAmount] = useState();

  const body = {
    sender:  WALLET_ID,
    receiver: email,
    amount: amount 
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
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(body),
    };

    fetch(`http://localhost:5000/api/requestMoney/`, options).then((response) =>
      console.log(response.status)
    );

    cleanForm();
  };


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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="input__container" placeholder="Amount"
            type="number"
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
          />

          <Button
            style="defaultButton_featured"
            value="Request funds"
            onClick={() => handleSubmit()} />
        </form>
      </div>
    </div>
  )
}

export default Request;